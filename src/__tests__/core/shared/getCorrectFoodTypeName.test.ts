import { getCorrectFoodTypeName } from "../../../core/shared/getCorrectFoodTypeName";

describe('getCorrectFoodTypeName', () => {
  test('given "herbivoro" should return "Herbívoro"', () => {
    expect(getCorrectFoodTypeName('herbivoro')).toBe('Herbívoro');
  });

  test('given "carnivoro" should return "Carnívoro"', () => {
    expect(getCorrectFoodTypeName('carnivoro')).toBe('Carnívoro');
  });

  test('given "onivoro" should return "Onívoro"', () => {
    expect(getCorrectFoodTypeName('onivoro')).toBe('Onívoro');
  });
});