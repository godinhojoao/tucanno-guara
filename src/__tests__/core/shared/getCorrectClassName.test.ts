import { getCorrectClassName } from "../../../core/shared/getCorrectClassName";

describe('getCorrectClassName', () => {
  test('given "aves" should return "Aves"', () => {
    expect(getCorrectClassName('aves')).toBe('Aves');
  });

  test('given "anfibios" should return "Anfíbios"', () => {
    expect(getCorrectClassName('anfibios')).toBe('Anfíbios');
  });

  test('given "peixes" should return "peixes"', () => {
    expect(getCorrectClassName('peixes')).toBe('Peixes');
  });

  test('given "repteis" should return "Répteis"', () => {
    expect(getCorrectClassName('repteis')).toBe('Répteis');
  });

  test('given "mamiferos" should return "Mamíferos"', () => {
    expect(getCorrectClassName('mamiferos')).toBe('Mamíferos');
  });

  test('given "invertebrados" should return "Invertebrados"', () => {
    expect(getCorrectClassName('invertebrados')).toBe('Invertebrados');
  });
});