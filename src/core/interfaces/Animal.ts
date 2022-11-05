import { AnimalBiomes } from "./AnimalBiomes";
import { AnimalFoodTypes } from "./AnimalFoodTypes";

export interface Animal {
  id: number;
  imageUrl: string;
  popularName: string;
  class: string;

  mediumWeightKg?: number;
  lifetimeInYears?: number;
  foodType?: AnimalFoodTypes;
  scientificName?: string;
  isInExtinction?: boolean;
  generalDescription?: string;
  foodDescription?: string;
  reprodutionDescription?: string;
  locationDescription?: string;

  // ver onde usar
  biome?: AnimalBiomes;
  mediumHeightMeters?: number;
}
