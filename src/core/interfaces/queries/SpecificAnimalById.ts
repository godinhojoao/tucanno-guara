import { ApolloError } from "@apollo/client";
import { SpecificAnimal } from "../SpecificAnimal";

export interface SpecificAnimalData {
  animal: SpecificAnimal;
}

export interface SpecificAnimalByIdResponse {
  loading: boolean;
  error?: ApolloError;
  data?: SpecificAnimalData;
}