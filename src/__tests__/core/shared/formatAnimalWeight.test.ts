import { formatAnimalWeight } from "../../../core/shared/formatAnimalWeight";

describe('formatAnimalWeight', () => {
  test('given 1 kg should return "1kg"', () => {
    expect(formatAnimalWeight(1)).toBe('1kg');
  });

  test('given 1.5 kg should return "1.5kg"', () => {
    expect(formatAnimalWeight(1.5)).toBe('1.5kg');
  });

  test('given 0.5 kg should return "500 gramas"', () => {
    expect(formatAnimalWeight(0.5)).toBe('500g');
  });

  test('given 0.05 kg should return "50g"', () => {
    expect(formatAnimalWeight(0.05)).toBe('50g');
  });

  test('given 0.001 kg should return "1g"', () => {
    expect(formatAnimalWeight(0.001)).toBe('1g');
  });
});