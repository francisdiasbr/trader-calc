import React, { useEffect, useState } from 'react';

import * as S from './styles';
import {BackToLayComponent, LayToBackComponent} from './Tables';
import {calculateBackProfit, calculateLayProfit, calculateAmountLayToInvest, formatStringToNumber} from './utils';

export const Calculator = () => {
  const [amountBack, setAmountBack] = useState<string>('');
  const [amountLay, setAmountLay] = useState('');
  const [amountLayToInvest, setAmountLayToInvest] = useState(''); 
  const [oddBack, setOddBack] = useState('');
  const [oddLay, setOddLay] = useState(''); 
  const [profitBack, setProfitBack] = useState<string>('');
  const [profitLay, setProfitLay] = useState('');
  const [oddBackNumber, setOddBackNumber] = useState<number | null>(null);
  const [oddLayNumber, setOddLayNumber] = useState<number | null>(null);

  const handleBetInBackChange = (event) => {
    const newBetInBack = event.target.value;
    setAmountBack(newBetInBack);
  };
  
  const handleOddBackChange = (event) => {
    const oddBackString = event.target.value
    setOddBack(oddBackString)

    const amountBackNumber = parseInt(amountBack)
    const oddBackNumber = formatStringToNumber(oddBackString)
    setOddBackNumber(oddBackNumber)

    const backProfitValue = calculateBackProfit(oddBackNumber, amountBackNumber)
    const backProfitString = backProfitValue.toFixed(4)

    setProfitBack(backProfitString)
  };

  const handleOddLayChange = (event) => {
    const oddLayString = event.target.value
    setOddLay(oddLayString)
  
    const amountBackNumber = parseInt(amountBack)
    const oddLayNumber = formatStringToNumber(oddLayString)
    setOddLayNumber(oddLayNumber)

    const layProfitValue = calculateLayProfit(oddBackNumber, oddLayNumber, amountBackNumber)
    const layProfitString = layProfitValue.toFixed(2)

    setProfitLay(layProfitString)
  };

  const handleAmountLayToInvest = () => {
    const profitLayNumber = formatStringToNumber(profitLay)
    
    const calcAmountLayToInvest = calculateAmountLayToInvest(oddLayNumber, profitLayNumber)

    const amountLayToInvestString = calcAmountLayToInvest.toFixed(2)

    setAmountLayToInvest(amountLayToInvestString)
  }

  useEffect(() => {
    handleAmountLayToInvest()
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
      />
      <br />
      <LayToBackComponent 
      />
    </S.Container>
  )
}