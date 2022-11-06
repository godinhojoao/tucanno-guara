import { Animal } from "../Animal";

export interface AnimalsListProps {
  title: string;
  animals?: Animal[];
  withArrow?: boolean;
}
