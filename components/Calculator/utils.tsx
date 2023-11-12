export const formatOdd = (value: number | string) => {
  if (typeof value === 'string') {
    const padronizedValue = value.replace(',', '.');
    const floatValue = parseFloat(padronizedValue);
    return isNaN(floatValue) ? null : floatValue;
  }
  return 0;
}

/** 
 * odd: odd em back
 * valor: valor apostado em back para calcular o lay
 */
export function calculateBackProfit(odd: number, value: number) {
  let profit: number = (odd - 1) * value;
  return profit;
}