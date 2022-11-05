function correctDate(animalLifetimeInYears: number): string {
  const months = animalLifetimeInYears * 12;
  const days = months * 30;
  return months > 1 ? `${months} meses` : `${days} dias`;
}

export function formatAnimalLifetime(animalLifetimeInYears: number): string {
  return animalLifetimeInYears > 1 ? `${animalLifetimeInYears} anos` : correctDate(animalLifetimeInYears);
}