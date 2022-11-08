import { AnimalBiomes } from "../interfaces/AnimalBiomes";

export function formatAnimalBiomes(animalBiomes?: AnimalBiomes[]): string {
  const acceptedBiomesMapper: Object = {
    'cerrado': 'Cerrado',
    'caatinga': 'Caatinga',
    'pampa': 'Pampa',
    'mataAtlantica': 'Mata Atlântica',
    'pantanal': 'Pantanal',
    'amazonia': 'Amazônia',
  };
  // @ts-ignore:next-line
  const animalCorrectedBiomes = animalBiomes?.map(biome => acceptedBiomesMapper[biome])?.filter(value => !!value);
  return animalCorrectedBiomes?.length ? animalCorrectedBiomes.join(' - ') : '';
}