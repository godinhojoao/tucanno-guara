import { useQuery } from "@apollo/client";
import { GET_ANIMALS, ANIMALS_BY_EACH_CLASS, SPECIFIC_ANIMAL_BY_ID } from "./queries";
import { AnimalsByEachClass, AnimalsByEachClassResponse, AnimalsByEachClassVariables } from "../interfaces/queries/AnimalsByEachClass";
import { AnimalsData, LoadAnimalsResponse, LoadAnimalsVariables } from "../interfaces/queries/LoadAnimals";
import { SpecificAnimalByIdResponse, SpecificAnimalData } from "../interfaces/queries/SpecificAnimalById";

class AnimalsApi {
  loadAnimals(params: LoadAnimalsVariables): LoadAnimalsResponse {
    const { loading, error, data } = useQuery<AnimalsData>(GET_ANIMALS, {
      variables: {
        last: params.lastCount,
        skip: params?.skipCount,
        where: {
          class: params?.animalClass
        }
      },
    });

    return { loading, error, data };
  }

  animalsByEachClass(params: AnimalsByEachClassVariables): AnimalsByEachClassResponse {
    const { loading, error, data } = useQuery<AnimalsByEachClass>(ANIMALS_BY_EACH_CLASS, {
      variables: { last: params?.lastCount },
    });

    return { loading, error, data };
  }

  specificAnimalById(id: string): SpecificAnimalByIdResponse {
    const { loading, error, data } = useQuery<SpecificAnimalData>(SPECIFIC_ANIMAL_BY_ID, {
      variables: { id: id },
    });

    return { loading, error, data };
  }
}

const animalsApi = new AnimalsApi();

export { animalsApi };