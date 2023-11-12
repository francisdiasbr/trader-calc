import React, { useEffect, useState } from 'react';

import * as S from './styles';
import {BackToLayComponent, LayToBackComponent} from './Tables';
import {calculateBackProfit, formatStringToNumber} from './utils';

export const Calculator = () => {
  const [amountBack, setAmountBack] = useState<string>('');
  const [amountLay, setAmountLay] = useState('');
  const [amountLayToInvest, setAmountLayToInvest] = useState(''); // j4
  const [oddBack, setOddBack] = useState('');
  const [oddLay, setOddLay] = useState(''); // h5
  const [profitBack, setProfitBack] = useState<string>('');
  const [profitLay, setProfitLay] = useState(''); // j5

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

    const backProfitValue = calculateBackProfit(oddBackNumber, amountBackNumber)
    const backProfitString = backProfitValue.toFixed(4)

    setProfitBack(backProfitString)
  };

  const handleOddLayChange = (event) => {
    const newOddLay = event.target.value;
    setOddLay(newOddLay);
    calculateLayProfit(oddBack, newOddLay, amountBack);
  };

  const calculateLayProfit = (oddBackValue, oddLayValue, apostarEmBackValue) => {
    const [oddBackStd, oddLayStd, apostarEmBack] = [oddBackValue, oddLayValue, apostarEmBackValue].map(formatStringToNumber);

    if (!isNaN(oddBackStd) && !isNaN(oddLayStd) && !isNaN(apostarEmBack)) {
      // equação
      const lucroLay = (oddBackStd / oddLayStd) * apostarEmBack;
      // seta o profit no lay
      setProfitLay(lucroLay.toFixed(2));
    } else {
      setProfitLay('');
    }
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