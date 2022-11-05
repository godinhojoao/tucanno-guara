import { DefaultLink } from "../DefaultLink";
import { SpecificAnimal } from "../SpecificAnimal";

export interface HeaderProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  linkToNavigate?: DefaultLink;
  animal?: Partial<SpecificAnimal>;
}
