export const convertBrMoney = (value: number) => {
  const BRFormat = new Intl.NumberFormat('pt-Br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
  return BRFormat.format(value);
};
