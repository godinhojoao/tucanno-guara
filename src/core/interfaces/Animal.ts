import { AnimalClasses } from "./AnimalClasses";

export interface Animal {
  id: number;
  imageUrl: string;
  popularName: string;
  class: AnimalClasses;
}
