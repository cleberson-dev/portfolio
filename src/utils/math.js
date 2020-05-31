export const getAge = (birthDate) => {
  const [day, month, year] = birthDate;
  const birthTimestamp = new Date(year, month-1, day).getTime(); // Mês provido começa com 1 sendo Janeiro
  const nowTimestamp = Date.now();

  return Math.floor((nowTimestamp - birthTimestamp) / (1000 * 60 * 60 * 24 * 365));
}