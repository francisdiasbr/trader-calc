import React, { useEffect, useState } from 'react';

import * as S from './styles';
import {BackToLayComponent, LayToBackComponent} from './Tables';
import {formatOdd} from './utils';

export const Calculator = () => {
  const [amountBack, setAmountBack] = useState('');
  const [amountLay, setAmountLay] = useState('');
  const [amountLayToInvest, setAmountLayToInvest] = useState(''); // j4
  const [oddBack, setOddBack] = useState('');
  const [oddLay, setOddLay] = useState(''); // h5
  const [profitBack, setProfitBack] = useState('');
  const [profitLay, setProfitLay] = useState(''); // j5

  const handleBetInBackChange = (event) => {
    const newBetInBack = event.target.value;
    setAmountBack(newBetInBack);
    calculateBackProfit(oddBack, newBetInBack);
  };
  
  const handleOddBackChange = (event) => {
    const newOddBack = event.target.value;
    setOddBack(newOddBack);
    calculateBackProfit(newOddBack, amountBack);
  };

  const handleOddLayChange = (event) => {
    const newOddLay = event.target.value;
    setOddLay(newOddLay);
    calculateLayProfit(oddBack, newOddLay, amountBack);

  };

  const calculateBackProfit = (oddBackValue, apostarEmBackValue) => {
    // padroniza
    const oddBackStd = formatOdd(oddBackValue)
    const apostarEmBack = formatOdd(apostarEmBackValue)

    if (!isNaN(oddBackStd) && !isNaN(apostarEmBack)) {
      // equação
      const lucro = (oddBackStd - 1) * apostarEmBack;
      // seta o profit no back
      setProfitBack(lucro.toFixed(4));
    } else {
      setProfitBack('');
    }
  };

  const calculateLayProfit = (oddBackValue, oddLayValue, apostarEmBackValue) => {
    const [oddBackStd, oddLayStd, apostarEmBack] = [oddBackValue, oddLayValue, apostarEmBackValue].map(formatOdd);

    if (!isNaN(oddBackStd) && !isNaN(oddLayStd) && !isNaN(apostarEmBack)) {
      // equação
      const lucroLay = (oddBackStd / oddLayStd) * apostarEmBack;
      // seta o profit no lay
      setProfitLay(lucroLay.toFixed(4));
    } else {
      setProfitLay('');
    }
  };

  const calculateAmountLayToInvest = (oddLayValue, profitLayValue) => {
    console.log('amountLayToInvest.init', oddLayValue, profitLayValue)
    const [oddLayStd, profitLay] = [oddLayValue, profitLayValue].map(formatOdd);
    console.log('amountLayToInvest.oddLayStd, profitLay', oddLayStd, profitLay)
    if (!isNaN(oddLayStd) && !isNaN(profitLay)) {
      // equação
      const amountLayToInvest = (oddLayStd - 1) * profitLay;
      console.log('amountLayToInvest.IF1', amountLayToInvest)
      // seta o profit no lay
      setAmountLayToInvest(amountLayToInvest.toFixed(4));
    } else {
      console.log('amountLayToInvest.IF2')
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