import React from 'react';
import * as S from '../styles';

const LayToBackComponent = () => {
  return (
    <div>
      <h3>
        LAY-BACK
      </h3>
      <S.Row>
        <S.Cell>
          <S.Text>1-APOSTAR EM LAY</S.Text>
          <S.Input></S.Input>
        </S.Cell>
        <S.Cell>
          <S.Text>LUCRO LAY</S.Text>
          <S.Result>$</S.Result>
        </S.Cell>
      </S.Row>
      <S.Row>
        <S.Cell>
          <S.Text>ODD LAY</S.Text>
          <S.Input></S.Input>
        </S.Cell>
        <S.Cell>
          <S.Text>2-APOSTAR EM BACK</S.Text>
          <S.Result>$</S.Result>
        </S.Cell>
      </S.Row>
      <S.Row>
        <S.Cell>
          <S.Text>ODD BACK</S.Text>
          <S.Input></S.Input>
        </S.Cell>
        <S.Cell>
          <S.Text>LUCRO BACK</S.Text>
          <S.Result>$</S.Result>
        </S.Cell>
      </S.Row>
      <S.Row>
        <S.Cell>
          <S.Text>COMISSÃO</S.Text>
          <S.Input></S.Input>
        </S.Cell>
        <S.Cell>
          <S.Text>GANHOS BACK</S.Text>
          <S.Result>$</S.Result>
        </S.Cell>
      </S.Row>
      <S.Row>
        <S.Cell>
          <S.Text>-</S.Text>
          <S.Text>-</S.Text>
        </S.Cell>
        <S.Cell>
          <S.Text>GANHOS LAY</S.Text>
          <S.Result>$</S.Result>
        </S.Cell>
      </S.Row>
    </div>
  )
}

export default LayToBackComponent