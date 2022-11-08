import { Animal } from "./Animal";
import { AnimalBiomes } from "./AnimalBiomes";
import { AnimalExtinctionLevels } from "./AnimalExtinctionLevels";
import { AnimalFoodTypes } from "./AnimalFoodTypes";

export interface SpecificAnimal extends Animal {
  mediumWeightKg: number;
  lifetimeInYears: number;
  foodType: AnimalFoodTypes;
  scientificName: string;
  generalDescription: string;
  foodDescription: string;
  reprodutionDescription: string;
  locationDescription: string;
  whoSearched: string;
  extinctionLevel: AnimalExtinctionLevels;
  biomes?: AnimalBiomes[];

  // not in use yet
  mediumHeightMeters?: number;
}