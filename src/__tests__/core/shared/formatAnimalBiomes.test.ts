import { formatAnimalBiomes } from "../../../core/shared/formatAnimalBiomes";

describe('formatAnimalBiomes', () => {
  test('given an array with cerrado, caatinga, and amazonia should return "Cerrado - Caatinga - Amazônia"', () => {
    expect(formatAnimalBiomes(['cerrado', 'caatinga', 'amazonia'])).toBe('Cerrado - Caatinga - Amazônia');
  });

  test('given an array with pampa, mataAtlantica, and pantanal should return "Pampa - Mata Atlântica - Pantanal"', () => {
    expect(formatAnimalBiomes(['pampa', 'mataAtlantica', 'pantanal'])).toBe('Pampa - Mata Atlântica - Pantanal');
  });

  test('given an empty array should return an empty string', () => {
    expect(formatAnimalBiomes([])).toBe('');
  });
});