import { formatAnimalLifetime } from "../../../core/shared/formatAnimalLifetime";

describe('formatAnimalLifetime', () => {
  test('given 1 year should return "1 ano"', () => {
    expect(formatAnimalLifetime(1)).toBe('1 ano');
  });

  test('given 1.5 years should return "1.5 anos"', () => {
    expect(formatAnimalLifetime(1.5)).toBe('1.5 anos');
  });

  test('given 0.5 years should return "6 meses"', () => {
    expect(formatAnimalLifetime(0.5)).toBe('6 meses');
  });

  test('given 0.05 years should return "18 dias"', () => {
    expect(formatAnimalLifetime(0.05)).toBe('18 dias');
  });

  test('given 0.09 should return "1 mês"', () => {
    expect(formatAnimalLifetime(0.09)).toBe('1 mês');
  });
});