import { useQuery } from "@apollo/client";
import { GET_ANIMALS, ANIMALS_BY_EACH_CLASS, SPECIFIC_ANIMAL_BY_ID } from "./queries";
import { AnimalsByEachClassData, AnimalsByEachClassResponse } from "../interfaces/queries/AnimalsByEachClass";
import { AnimalsData, LoadAnimalsResponse, LoadAnimalsVariables } from "../interfaces/queries/LoadAnimals";
import { SpecificAnimalByIdResponse, SpecificAnimalData } from "../interfaces/queries/SpecificAnimalById";

class AnimalsApi {
  loadAnimals(loadAnimalsVariables: LoadAnimalsVariables): LoadAnimalsResponse {
    const { loading, error, data } = useQuery<AnimalsData>(GET_ANIMALS, {
      variables: {
        last: loadAnimalsVariables.lastCount,
        skip: loadAnimalsVariables?.skipCount,
        class: loadAnimalsVariables?.animalClass
      },
    });

    return { loading, error, data };
  }

  animalsByEachClass(lastCount: number): AnimalsByEachClassResponse {
    const { loading, error, data } = useQuery<AnimalsByEachClassData>(ANIMALS_BY_EACH_CLASS, {
      variables: { last: lastCount },
    });

    return { loading, error, data };
  }

  specificAnimalById(lastCount: number): SpecificAnimalByIdResponse {
    const { loading, error, data } = useQuery<SpecificAnimalData>(SPECIFIC_ANIMAL_BY_ID, {
      variables: { last: lastCount },
    });

    return { loading, error, data };
  }
}

const animalsApi = new AnimalsApi();

export { animalsApi };