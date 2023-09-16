import React from 'react';
import * as S from './styles';

const Main = () => {
  return (
    <S.Main>
      <S.Title>
        Trade Calc
      </S.Title>
      <S.Grid>
        <S.Card href="https://nextjs.org/docs">
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </S.Card>
        <S.Card href="https://nextjs.org/learn">
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </S.Card>
        <S.Card
          href="https://github.com/vercel/next.js/tree/canary/examples"
        >
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </S.Card>
        <S.Card
          href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        >
          <h3>Deploy &rarr;</h3>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </S.Card>
      </S.Grid>
    </S.Main>
  );
};

export default Main;
