import { AnimalExtinctionLevels } from "../interfaces/AnimalExtinctionLevels";

export function getCorrectExtinctionLevel(extinctionLevel: AnimalExtinctionLevels): any {
  const acceptedExtinctionLevelsMapper: Object = {
    'criticamenteEmPerigo': 'Criticamente em perigo',
    'emPerigo': 'Em perigo',
    'extinta': 'Extinta',
    'extintaDaNatureza': 'Extinta da natureza',
    'menosPreocupante': 'Menos preocupante',
    'quaseAmeacada': 'Quase ameaçada',
    'vulneravel': 'Vulnerável',
    'dadosInsuficientes': 'Dados insuficientes',
  };

  // @ts-ignore:next-line
  return extinctionLevel ? acceptedExtinctionLevelsMapper[extinctionLevel] : extinctionLevel;
}