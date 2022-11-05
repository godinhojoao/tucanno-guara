import { Animal } from "./Animal";
import { AnimalBiomes } from "./AnimalBiomes";
import { AnimalFoodTypes } from "./AnimalFoodTypes";

export interface SpecificAnimal extends Animal {
  mediumWeightKg: number;
  lifetimeInYears: number;
  foodType: AnimalFoodTypes;
  scientificName: string;
  isInExtinction: boolean;
  generalDescription: string;
  foodDescription: string;
  reprodutionDescription: string;
  locationDescription: string;

  // ver onde usar
  biome: AnimalBiomes;
  mediumHeightMeters: number;
}