import { AnimalExtinctionLevels } from "../interfaces/AnimalExtinctionLevels";

export function getCorrectExtinctionLevel(extinctionLevel: AnimalExtinctionLevels): any {
  const acceptedExtinctionLevelsMapper: Object = {
    'criticamenteEmPerigo': 'Criticamente em perigo',
    'emPerigo': 'Em perigo',
    'extinta': 'Extinta',
    'extintaDaNatureza': 'Extinta da natureza',
    'poucoPreocupante': 'Pouco preocupante',
    'quaseAmeacada': 'Quase ameaçada',
    'vulneravel': 'Vulnerável',
    'dadosInsuficientes': 'Dados insuficientes',
  };

  // @ts-ignore:next-line
  return extinctionLevel ? acceptedExtinctionLevelsMapper[extinctionLevel] : extinctionLevel;
}