function correctDate(animalLifetimeInYears: number): string {
  const months = animalLifetimeInYears * 12;
  const days = months * 30;
  const isMoreThanOneMonth = months >= 2;

  const formattedMonths = months.toFixed(0);
  const formattedDays = days.toFixed(0);
  return months >= 1 ? `${formattedMonths} ${isMoreThanOneMonth ? 'meses' : 'mês'}` : `${formattedDays} dias`;
}

export function formatAnimalLifetime(animalLifetimeInYears: number): string {
  const isMoreThanOneYear = animalLifetimeInYears > 1;
  return animalLifetimeInYears >= 1 ? `${animalLifetimeInYears} ${isMoreThanOneYear ? 'anos' : 'ano'}` : correctDate(animalLifetimeInYears);
}