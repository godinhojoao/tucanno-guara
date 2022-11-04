import { Animal } from "./Animal";

export interface AnimalsListProps {
  animals: Animal[];
  title: string;
  withArrow?: boolean;
}
