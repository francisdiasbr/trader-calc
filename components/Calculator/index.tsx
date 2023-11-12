import React, { useEffect, useState } from 'react';

import {calculateBackProfit, calculateLayProfit, calculateAmountLayToInvest, calculateProfitsBack} from './calculations';
import * as S from './styles';
import {BackToLayComponent, LayToBackComponent} from './Tables';
import {formatStringToNumber} from './utils';

const teste = calculateProfitsBack(200, 1.10, 1090.91)

console.log('teste', teste.toFixed(3))

export const Calculator = () => {
  const [amountBack, setAmountBack] = useState<string>('');
  const [amountLay, setAmountLay] = useState('');
  const [amountLayToInvest, setAmountLayToInvest] = useState(''); 
  const [oddBack, setOddBack] = useState('');
  const [oddLay, setOddLay] = useState(''); 
  const [profitBack, setProfitBack] = useState('');
  const [profitLay, setProfitLay] = useState('');
  const [profitBackHedge, setProfitBackHedge] = useState('');

  const handleBetInBackChange = (event) => {
    const newBetInBack = event.target.value;
    setAmountBack(newBetInBack);
  };
  
  const handleOddBackChange = (event) => {
    const oddBackString = event.target.value
    setOddBack(oddBackString)

    const amountBackNumber = parseInt(amountBack)
    const oddBackNumber = formatStringToNumber(oddBackString)

    const backProfitValue = calculateBackProfit(oddBackNumber, amountBackNumber)
    const backProfitString = backProfitValue.toFixed(2)

    setProfitBack(backProfitString)
  };

  const handleOddLayChange = (event) => {
    const oddLayString = event.target.value
    setOddLay(oddLayString)
  
    const amountBackNumber = parseInt(amountBack)
    const oddLayNumber = formatStringToNumber(oddLayString)
    const oddBackNumber = formatStringToNumber(oddBack)

    const layProfitValue = calculateLayProfit(oddBackNumber, oddLayNumber, amountBackNumber)
    const layProfitString = layProfitValue.toFixed(2)

    setProfitLay(layProfitString)
  };

  const handleAmountLayToInvest = () => {
    const profitLayNumber = formatStringToNumber(profitLay)
    
    const oddLayNumber = formatStringToNumber(oddLay)
    const calcAmountLayToInvest = calculateAmountLayToInvest(oddLayNumber, profitLayNumber)

    const amountLayToInvestString = calcAmountLayToInvest.toFixed(2)
    console.log('amountLayToInvest', typeof amountLayToInvest)

    setAmountLayToInvest(amountLayToInvestString)
  }

  const handleBackProfit = () => {
    const oddLayNumber = formatStringToNumber(oddLay)
    console.log('oddLayNumber', typeof oddLayNumber)
    const profitBackNumber = formatStringToNumber(profitBack)
    console.log('profitBackNumber', typeof profitBackNumber)
    const profitLayNumber = formatStringToNumber(profitLay)
    console.log('profitLayNumber', profitLayNumber)

    const calcBackProfitValue = calculateProfitsBack(profitBackNumber, oddLayNumber, profitLayNumber)
    const calcBackProfitString = calcBackProfitValue.toFixed(2)

    setProfitBackHedge(calcBackProfitString)
  }

  useEffect(() => {
    handleAmountLayToInvest()
    handleBackProfit()
  }, [profitLay])


  return (
    <S.Container>
      <BackToLayComponent 
        amountBack={amountBack}
        amountLay={amountLay}
        amountLayToInvest={amountLayToInvest}
        handleBetInBackChange={handleBetInBackChange}
        handleOddBackChange={handleOddBackChange}
        handleOddLayChange={handleOddLayChange}
        oddBack={oddBack}
        oddLay={oddLay}
        profitBack={profitBack}
        profitLay={profitLay}
        profitBackHedge={profitBackHedge}
      />
      <br />
      <LayToBackComponent 
      />
    </S.Container>
  )
}