export function getCorrectFoodTypeName(foodType: string): any {
  const acceptedFoodTypeMapper: Object = {
    'herbivoro': 'Herbívoro',
    'carnivoro': 'Carnívoro',
    'onivoro': 'Onívoro',
  };

  // @ts-ignore:next-line
  return acceptedFoodTypeMapper[foodType];
}