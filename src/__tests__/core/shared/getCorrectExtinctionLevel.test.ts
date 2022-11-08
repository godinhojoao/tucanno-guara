import { getCorrectExtinctionLevel } from "../../../core/shared/getCorrectExtinctionLevel";

describe('getCorrectExtinctionLevel', () => {
  test('given "criticamenteEmPerigo" should return "Criticamente em perigo"', () => {
    expect(getCorrectExtinctionLevel('criticamenteEmPerigo')).toBe('Criticamente em perigo');
  });

  test('given "emPerigo" should return "Em perigo"', () => {
    expect(getCorrectExtinctionLevel('emPerigo')).toBe('Em perigo');
  });

  test('given "extinta" should return "Extinta"', () => {
    expect(getCorrectExtinctionLevel('extinta')).toBe('Extinta');
  });

  test('given "extintaDaNatureza" should return "Extinta da natureza"', () => {
    expect(getCorrectExtinctionLevel('extintaDaNatureza')).toBe('Extinta da natureza');
  });

  test('given "menosPreocupante" should return "Menos preocupante"', () => {
    expect(getCorrectExtinctionLevel('menosPreocupante')).toBe('Menos preocupante');
  });

  test('given "quaseAmeacada" should return "Quase ameaçada"', () => {
    expect(getCorrectExtinctionLevel('quaseAmeacada')).toBe('Quase ameaçada');
  });

  test('given "vulneravel" should return "Vulnerável"', () => {
    expect(getCorrectExtinctionLevel('vulneravel')).toBe('Vulnerável');
  });

  test('given "dadosInsuficientes" should return "Dados insuficientes"', () => {
    expect(getCorrectExtinctionLevel('dadosInsuficientes')).toBe('Dados insuficientes');
  });
});