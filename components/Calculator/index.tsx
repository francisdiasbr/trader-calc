import React, { useState } from 'react';

import * as S from './styles';
import {BackToLayComponent, LayToBackComponent} from './Tables';

export const Calculator = () => {
  const [amountBack, setAmountBack] = useState('');
  const [oddBack, setOddBack] = useState('');
  const [profitBack, setProfitBack] = useState('');

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

  return (
    <S.Container>
      <BackToLayComponent 
        amountBack={amountBack}
        handleBetInBackChange={handleBetInBackChange}
        handleOddBackChange={handleOddBackChange}
        oddBack={oddBack}
        profitBack={profitBack}
      />
      <br />
      <LayToBackComponent 
      />
    </S.Container>
  )
}