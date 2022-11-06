function correctDate(animalLifetimeInYears: number): string {
  const months = animalLifetimeInYears * 12;
  const days = months * 30;
  const isMoreThanOneMonth = months > 1;
  return months >= 1 ? `${months} ${isMoreThanOneMonth ? 'meses' : 'mês'}` : `${days} dias`;
}

export function formatAnimalLifetime(animalLifetimeInYears: number): string {
  const isMoreThanOneYear = animalLifetimeInYears > 1;
  return animalLifetimeInYears >= 1 ? `${animalLifetimeInYears} ${isMoreThanOneYear ? 'anos' : 'ano'}` : correctDate(animalLifetimeInYears);
}