import React from 'react';
import * as S from './styles';

export const Calculator = () => {
  return (
    <S.Container>
      <table>
        <th colSpan={2}>
          BACK-LAY
        </th>
        <th colSpan={2}>
          Resultados
        </th>
        <tr>
          <S.TableData>1-APOSTAR EM BACK</S.TableData>
          <S.TableData>$</S.TableData>
          <S.TableData>LUCRO BACK</S.TableData>
          <S.TableData>$</S.TableData>
        </tr>
        <tr>
          <S.TableData>ODD BACK</S.TableData>
          <S.TableData>$</S.TableData>
          <S.TableData>2-APOSTAR EM LAY</S.TableData>
          <S.TableData>$</S.TableData>
        </tr>
        <tr>
          <S.TableData>ODD LAY</S.TableData>
          <S.TableData>$</S.TableData>
          <S.TableData>LUCRO LAY</S.TableData>
          <S.TableData>$</S.TableData>
        </tr>
        <tr>
          <S.TableData>COMISSÃO</S.TableData>
          <S.TableData>$</S.TableData>
          <S.TableData>GANHOS LAY</S.TableData>
          <S.TableData>$</S.TableData>
        </tr>
        <tr>
          <S.TableData>-</S.TableData>
          <S.TableData>-</S.TableData>
          <S.TableData>GANHOS BACK</S.TableData>
          <S.TableData>$</S.TableData>
        </tr>
      </table>
      <br/>
      <table>
        <th colSpan={2}>
          LAY-BACK
        </th>
        <th colSpan={2}>
          Resultados
        </th>
        <tr>
          <S.TableData>1-APOSTAR EM LAY</S.TableData>
          <S.TableData>$</S.TableData>
          <S.TableData>LUCRO LAY</S.TableData>
          <S.TableData>$</S.TableData>
        </tr>
        <tr>
          <S.TableData>ODD LAY</S.TableData>
          <S.TableData>$</S.TableData>
          <S.TableData>2-APOSTAR EM BACK</S.TableData>
          <S.TableData>$</S.TableData>
        </tr>
        <tr>
          <S.TableData>ODD BACK</S.TableData>
          <S.TableData>$</S.TableData>
          <S.TableData>LUCRO BACK</S.TableData>
          <S.TableData>$</S.TableData>
        </tr>
        <tr>
          <S.TableData>COMISSÃO</S.TableData>
          <S.TableData>$</S.TableData>
          <S.TableData>GANHOS BACK</S.TableData>
          <S.TableData>$</S.TableData>
        </tr>
        <tr>
          <S.TableData>-</S.TableData>
          <S.TableData>-</S.TableData>
          <S.TableData>GANHOS LAY</S.TableData>
          <S.TableData>$</S.TableData>
        </tr>
      </table>
    </S.Container>
  )
}