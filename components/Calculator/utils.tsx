export const formatStringToNumber = (value: number | string) => {
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
export function calculateBackProfit(oddBack: number, value: number) {
  let profit: number = (oddBack - 1) * value;
  return profit;
}

/**
 * 
 */
export function calculateLayProfit(oddBack: number, oddLay: number, value: number) {
  let profit: number = (oddBack / oddLay) * value;
  return profit;
}