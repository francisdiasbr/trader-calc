/** 
 * BACK -> LAY: Lucro em Back
 * odd: odd em back
 * valor: valor apostado em back para calcular o lay
 */
export function calculateBackProfit(oddBack: number, value: number) {
  let profit: number = value * (oddBack - 1);
  return profit;
}

/**
 * BACK -> LAY: Lucro Lay
 */
export function calculateLayProfit(oddBack: number, oddLay: number, value: number) {
  let profit: number = value * (oddBack / oddLay);
  return profit;
}

/**
 * BACK -> LAY: Valor a apostar em lay
 */
export function calculateAmountLayToInvest(oddLay: number, value: number) {
  let amount: number = value * (oddLay - 1);
  return amount;
}

/**
 * BACK -> LAY: Ganhos em back (no hedge)
 */
export function calculateHedgeProfitsBack(backProfit: number, oddLay: number, layProfit: number, comissionNumber: number){
  let profit: number = (backProfit - ((oddLay - 1) * layProfit)) * (1 - (comissionNumber/100))
  return profit
}

/**
 * BACK -> LAY: Ganhos em lay (no hedge)
 */
export function calculateHedgeProfitsLay(layProfit: number, amountBack: number, comissionNumber: number){
  let profit: number = (layProfit - amountBack) * (1 - (comissionNumber/100))
  return profit
}

