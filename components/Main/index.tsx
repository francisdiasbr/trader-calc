import React from 'react';

import {Calculator} from '../Calculator';
import * as S from './styles';


const Main = () => {
  return (
    <S.Main>
      <S.Title>
        Trade Calc
      </S.Title>
      <Calculator />
    </S.Main>
  );
};

export default Main;
