import { AnimalClasses } from "./AnimalClasses";

export interface Animal {
  id: string;
  imageUrl: string;
  popularName: string;
  class: AnimalClasses;
}
