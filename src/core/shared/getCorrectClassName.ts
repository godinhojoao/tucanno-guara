export function getCorrectClassName(className: string): any {
  const acceptedClassesMapper: Object = {
    'aves': 'Aves',
    'anfibios': 'Anfíbios',
    'peixes': 'Peixes',
    'repteis': 'Répteis',
    'mamiferos': 'Mamíferos',
    'invertebrados': 'Invertebrados'
  };

  // @ts-ignore:next-line
  return acceptedClassesMapper[className];
}