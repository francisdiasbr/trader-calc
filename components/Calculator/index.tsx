import React, { useEffect, useState } from 'react';

import * as S from './styles';
import {BackToLayComponent, LayToBackComponent} from './Tables';
import {calculateBackProfit, calculateLayProfit, formatStringToNumber} from './utils';

export const Calculator = () => {
  const [amountBack, setAmountBack] = useState<string>('');
  const [amountLay, setAmountLay] = useState('');
  const [amountLayToInvest, setAmountLayToInvest] = useState(''); // j4
  const [oddBack, setOddBack] = useState('');
  const [oddLay, setOddLay] = useState(''); // h5
  const [profitBack, setProfitBack] = useState<string>('');
  const [profitLay, setProfitLay] = useState(''); // j5
  const [oddBackNumber, setOddBackNumber] = useState<number | null>(null); // Adicionado estado para oddBackNumber


  const handleBetInBackChange = (event) => {
    const newBetInBack = event.target.value;
    setAmountBack(newBetInBack);
    // calculateBackProfit(oddBack, newBetInBack);
  };
  
  const handleOddBackChange = (event) => {
    const oddBackString = event.target.value
    setOddBack(oddBackString)

    const amountBackNumber = parseInt(amountBack)
    const oddBackNumber = formatStringToNumber(oddBackString)
    setOddBackNumber(oddBackNumber); 

    const backProfitValue = calculateBackProfit(oddBackNumber, amountBackNumber)
    const backProfitString = backProfitValue.toFixed(4)

    setProfitBack(backProfitString)
  };

  const handleOddLayChange = (event) => {
    const oddLayString = event.target.value
    setOddLay(oddLayString)
  
    const amountBackNumber = parseInt(amountBack)
    const oddLayNumber = formatStringToNumber(oddLayString)

    const layProfitValue = calculateLayProfit(oddBackNumber, oddLayNumber, amountBackNumber);
    const layProfitString = layProfitValue.toFixed(2)

    setProfitLay(layProfitString)
  };

  const calculateAmountLayToInvest = (oddLayValue, profitLayValue) => {
    const [oddLayStd, profitLay] = [oddLayValue, profitLayValue].map(formatStringToNumber);
    if (!isNaN(oddLayStd) && !isNaN(profitLay)) {
      // equação
      const amountLayToInvest = (oddLayStd - 1) * profitLay;
      // seta o profit no lay
      setAmountLayToInvest(amountLayToInvest.toFixed(4));
    } else {
      setAmountLayToInvest('');
    }
  }

  useEffect(() => {
    
    calculateAmountLayToInvest(oddLay, profitLay)

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