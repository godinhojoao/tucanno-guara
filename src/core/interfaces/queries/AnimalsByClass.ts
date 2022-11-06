import { ApolloError } from "@apollo/client";
import { Animal } from "../Animal";

export interface LoadAnimalsResponse {
  loading: boolean;
  error?: ApolloError;
  data?: Animal[];
}