import { createContext, ReactNode } from "react";
import { HeaderContextProps } from "../interfaces/HeaderContextProps";
import { useHeader } from "./hooks/useHeader";

const DEFAULT_VALUE = {
  title: "Olá, seja bem vindo ao tucano-guará",
  subtitle:
    "Este é um site com fins educativos, sinta-se livre para explorar e aprender mais sobre os animais dos biomas brasileiros.",
  linkToNavigate: {
    path: "/todos-animais",
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
  const { handleChangeHeader, title, subtitle, linkToNavigate } = useHeader();

  return (
    <HeaderContext.Provider
      value={{
        handleChangeHeader,
        title,
        subtitle,
        linkToNavigate,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
}

export { HeaderContext, HeaderProvider };
