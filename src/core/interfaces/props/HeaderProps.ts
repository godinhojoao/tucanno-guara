import { DefaultLink } from "../DefaultLink";

export interface HeaderProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  linkToNavigate?: DefaultLink;
}
