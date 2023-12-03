import React, { useEffect, useState } from 'react';

import {calculateBackProfit, calculateLayProfit, calculateAmountLayToInvest, calculateHedgeProfitsBack, calculateHedgeProfitsLay} from './calculations';
import * as S from './styles';
import {BackToLayComponent, LayToBackComponent} from './Tables';
import {formatStringToNumber} from './utils';

export const Calculator = () => {
  const [amountBack, setAmountBack] = useState<string>('');
  const [amountLay, setAmountLay] = useState('');
  const [amountLayToInvest, setAmountLayToInvest] = useState(''); 
  const [oddBack, setOddBack] = useState('');
  const [oddLay, setOddLay] = useState(''); 
  const [profitBack, setProfitBack] = useState('');
  const [profitLay, setProfitLay] = useState('');
  const [profitBackHedge, setProfitBackHedge] = useState('');
  const [profitLayHedge, setProfitLayHedge] = useState('');
  const [comission, setComission] = useState(''); 


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
    if (profitLay && oddLay) {
      const profitLayNumber = formatStringToNumber(profitLay)
      const oddLayNumber = formatStringToNumber(oddLay)
  
      const calcAmountLayToInvest = calculateAmountLayToInvest(oddLayNumber, profitLayNumber)
      const amountLayToInvestString = calcAmountLayToInvest.toFixed(2)
  
      setAmountLayToInvest(amountLayToInvestString)
    }
  }

  const handleComissionChange = (event) => {
    const newComission = event.target.value
    setComission(newComission)
    const comissionNumber = formatStringToNumber(comission)

    const amountBackNumber = parseInt(amountBack)
    const oddLayNumber = formatStringToNumber(oddLay)
    const profitBackNumber = formatStringToNumber(profitBack)
    const profitLayNumber = formatStringToNumber(profitLay)

    const calcHedgeBackProfitValue = calculateHedgeProfitsBack(profitBackNumber, oddLayNumber, profitLayNumber, comissionNumber)
    const calcHedgeBackProfitString = calcHedgeBackProfitValue.toFixed(2)
    console.log('calcHedgeBackProfitString', calcHedgeBackProfitString)

    const calcHedgeLayProfitValue = calculateHedgeProfitsLay(profitLayNumber, amountBackNumber, comissionNumber)
    const calcHedgeLayProfitString = calcHedgeLayProfitValue.toFixed(2)
    console.log('calcHedgeLayProfitString', calcHedgeLayProfitString)
    
    setProfitBackHedge(calcHedgeBackProfitString)
    setProfitLayHedge(calcHedgeLayProfitString)
  }

  useEffect(() => {
    handleAmountLayToInvest()
  }, [])


  return (
    <S.Container>
      <BackToLayComponent 
        amountBack={amountBack}
        amountLayToInvest={amountLayToInvest}
        comission={comission}
        handleComissionChange={handleComissionChange}
        handleBetInBackChange={handleBetInBackChange}
        handleOddBackChange={handleOddBackChange}
        handleOddLayChange={handleOddLayChange}
        oddBack={oddBack}
        oddLay={oddLay}
        profitBack={profitBack}
        profitLay={profitLay}
        profitBackHedge={profitBackHedge}
        profitLayHedge={profitLayHedge}
      />
      <br />
      <LayToBackComponent 
      />
    </S.Container>
  )
}