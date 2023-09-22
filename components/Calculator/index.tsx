import React, { useState } from 'react';

import * as S from './styles';
import {BackToLayComponent, LayToBackComponent} from './Tables';
import {formatOdd} from './utils';

export const Calculator = () => {
  const [amountBack, setAmountBack] = useState('');
  const [amountLay, setAmountLay] = useState('');
  const [oddBack, setOddBack] = useState('');
  const [oddLay, setOddLay] = useState('');
  const [profitBack, setProfitBack] = useState('');
  const [profitLay, setProfitLay] = useState('');

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

  const calculateAmountLayToInvest = () => {
    console.log('teste')
  }

  return (
    <S.Container>
      <BackToLayComponent 
        amountBack={amountBack}
        amountLay={calculateAmountLayToInvest}
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