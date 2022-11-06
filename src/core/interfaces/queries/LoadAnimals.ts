import { ApolloError } from "@apollo/client";
import { Animal } from "../Animal";
import { AnimalClasses } from "../AnimalClasses";

export interface AnimalsData { animals: Animal[]; }

export interface LoadAnimalsVariables {
  lastCount: number;
  skipCount?: number;
  animalClass?: AnimalClasses;
}

export interface LoadAnimalsResponse {
  loading: boolean;
  error?: ApolloError;
  data?: AnimalsData;
}