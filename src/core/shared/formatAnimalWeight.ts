function kgToGrams(weightInKg: number): string {
  return `${weightInKg * 1000}g`;
}

export function formatAnimalWeight(animalWeightInKg: number): string {
  return animalWeightInKg > 1 ? `${animalWeightInKg}kg` : kgToGrams(animalWeightInKg);
}