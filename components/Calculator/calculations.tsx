/** 
 * Lucro Back
 * odd: odd em back
 * valor: valor apostado em back para calcular o lay
 */
export function calculateBackProfit(oddBack: number, value: number) {
  let profit: number = value * (oddBack - 1);
  return profit;
}

/**
 * Lucro Lay
 */
export function calculateLayProfit(oddBack: number, oddLay: number, value: number) {
  let profit: number = value * (oddBack / oddLay);
  return profit;
}

/**
 * Valor a apostar em lay
 */
export function calculateAmountLayToInvest(oddLay: number, value: number) {
  let amount: number = value * (oddLay - 1);
  return amount;
}

/**
 * Ganhos em back (hedge)
 */
export function calculateProfitsBack(backProfit: number, oddLay: number, layProfit: number){
  let profit: number = backProfit - ((oddLay - 1) * layProfit)
  return profit
}

