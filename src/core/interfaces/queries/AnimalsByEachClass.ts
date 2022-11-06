import { ApolloError } from "@apollo/client";
import { Animal } from "../Animal";

export interface AnimalsByEachClassVariables {
  lastCount: number;
}
export interface AnimalsByEachClass {
  birds: Animal[];
  fishs: Animal[];
  amphibians: Animal[];
  invertebrates: Animal[];
  mammals: Animal[];
  reptiles: Animal[];
}

export interface AnimalsByEachClassResponse {
  loading: boolean;
  error?: ApolloError;
  data?: AnimalsByEachClass;
}