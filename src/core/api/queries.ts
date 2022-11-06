import { gql } from '@apollo/client';

export const GET_ANIMALS = gql`
  query Animals(
    $last: Int!,
    $skip: Int,
    $where: AnimalWhereInput
  ) {
    animals(
      last: $last,
      skip: $skip,
      where: $where
    ) {
      id
      popularName
      scientificName
      imageUrl
      class
    }
  }
`;

export const ANIMALS_BY_EACH_CLASS = gql`
  fragment AnimalData on Animal {
    id
    popularName
    scientificName
    imageUrl
    class
  }

  query AnimalsByEachClass($last: Int) {
    birds: animals( where: { class: aves },  last: $last) { ... AnimalData }
    fishs: animals( where: { class: peixes },  last: $last) { ... AnimalData }
    amphibians: animals( where: { class: anfibios },  last: $last) { ... AnimalData }
    invertebrates: animals( where: { class: invertebrados },  last: $last) { ... AnimalData }
    mammals: animals( where: { class: mamiferos },  last: $last) { ... AnimalData }
    reptiles: animals( where: { class: repteis },  last: $last) { ... AnimalData }
  }
`;

export const SPECIFIC_ANIMAL_BY_ID = gql`
  query AnimalsByEachClass($id: ID) {
    animal(where: { id: $id }) {
      id
      popularName
      scientificName
      imageUrl
      class
      foodType
      foodDescription
      generalDescription
      locationDescription
      reprodutionDescription
      isInExtinction
      mediumHeightMeters
      lifetimeInYears
      mediumWeightKg
    }
  }
`;