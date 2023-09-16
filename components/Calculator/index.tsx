import React, { useState } from 'react';

import * as S from './styles';
import {BackToLayComponent, LayToBackComponent} from './Tables';

export const Calculator = () => {
  const [amountBack, setAmountBack] = useState('');
  const [oddBack, setOddBack] = useState('');
  const [oddLay, setOddLay] = useState('');
  const [profitBack, setProfitBack] = useState('');
  const [profitLay, setProfitLay] = useState('');

  const handleOddBackChange = (event) => {
    const newOddBack = event.target.value;
    setOddBack(newOddBack);
    calculateBackProfit(newOddBack, amountBack);
  };

  const handleBetInBackChange = (event) => {
    const newApostarEmBack = event.target.value;
    setAmountBack(newApostarEmBack);
    calculateBackProfit(oddBack, newApostarEmBack);
  };

  const handleOddLayChange = (event) => {
    const newOddLay = event.target.value;
    setOddLay(newOddLay);
    calculateLayProfit(oddBack, newOddLay, amountBack);
  };

  const calculateBackProfit = (odd, apostar) => {
    const oddBackValue = parseFloat(odd.replace(',', '.'));
    const apostarEmBackValue = parseFloat(apostar.replace(',', '.'));

    if (!isNaN(oddBackValue) && !isNaN(apostarEmBackValue)) {
      const lucro = (oddBackValue - 1) * apostarEmBackValue;
      setProfitBack(lucro.toFixed(4));
    } else {
      setProfitBack('');
    }
  };

  const calculateLayProfit = (oddBackValue, oddLayValue, apostarEmBackValue) => {
    const oddBackFloat = parseFloat(oddBackValue.replace(',', '.'));
    const oddLayFloat = parseFloat(oddLayValue.replace(',', '.'));
    const apostarEmBackFloat = parseFloat(apostarEmBackValue.replace(',', '.'));

    if (!isNaN(oddBackFloat) && !isNaN(oddLayFloat) && !isNaN(apostarEmBackFloat)) {
      const lucroLay = (oddBackFloat / oddLayFloat) * apostarEmBackFloat;
      setProfitLay(lucroLay.toFixed(4));
    } else {
      setProfitLay('');
    }
  };

  return (
    <S.Container>
      <BackToLayComponent 
        amountBack={amountBack}
        handleBetInBackChange={handleBetInBackChange}
        handleOddBackChange={handleOddBackChange}
        handleOddLayChange={handleOddLayChange}
        oddBack={oddBack}
        profitBack={profitBack}
        oddLay={oddLay}
        profitLay={profitLay}
      />
      <br />
      <LayToBackComponent 
      />
    </S.Container>
  )
}