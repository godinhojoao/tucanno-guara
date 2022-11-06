import { AnimalClasses } from "../interfaces/AnimalClasses";

export function getCorrectClassName(className?: AnimalClasses): any {
  const acceptedClassesMapper: Object = {
    'aves': 'Aves',
    'anfibios': 'Anfíbios',
    'peixes': 'Peixes',
    'repteis': 'Répteis',
    'mamiferos': 'Mamíferos',
    'invertebrados': 'Invertebrados'
  };

  // @ts-ignore:next-line
  return className ? acceptedClassesMapper[className] : className;
}