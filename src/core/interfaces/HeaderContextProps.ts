import { HeaderProps } from "./HeaderProps";

export interface HeaderContextProps extends HeaderProps {
  handleChangeHeader: (headerProps: HeaderProps) => void
}
