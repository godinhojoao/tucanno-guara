import { createContext, ReactNode } from "react";
import { HeaderContextProps } from "../interfaces/props/HeaderContextProps";
import { useHeader } from "./hooks/useHeader";

const DEFAULT_VALUE = {
  title: "Olá, seja bem vindo ao tucano-guará",
  subtitle:
    "Este é um site com fins educativos, sinta-se livre para explorar e aprender mais sobre os animais dos biomas brasileiros.",
  linkToNavigate: {
    path: "/animais",
    title: "Ver todos os animais",
  },
  handleChangeHeader: (): void => {}
};

const HeaderContext = createContext<HeaderContextProps>(DEFAULT_VALUE);

interface HeaderProviderProps {
  children: ReactNode;
}

function HeaderProvider(props: HeaderProviderProps): JSX.Element {
  const { children } = props;
  const { handleChangeHeader, title, subtitle, highlight, linkToNavigate, animal } = useHeader();

  return (
    <HeaderContext.Provider
      value={{
        handleChangeHeader,
        title,
        highlight,
        subtitle,
        linkToNavigate,
        animal
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}

export { HeaderContext, HeaderProvider };
