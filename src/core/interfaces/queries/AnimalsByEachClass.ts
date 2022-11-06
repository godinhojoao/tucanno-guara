import { ApolloError } from "@apollo/client";
import { Animal } from "../Animal";

interface AnimalsByEachClass {
  birds: Animal[];
  fishs: Animal[];
  amphibians: Animal[];
  invertebrates: Animal[];
  mammals: Animal[];
  reptiles: Animal[];
}
export interface AnimalsByEachClassData {
  animals: AnimalsByEachClass[];
}

export interface AnimalsByEachClassResponse {
  loading: boolean;
  error?: ApolloError;
  data?: AnimalsByEachClassData;
}