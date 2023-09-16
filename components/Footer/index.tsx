import React from 'react';
import * as S from './styles';

const Footer = () => {
  return (
    <S.Footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <S.Logo src="/vercel.svg" alt="Vercel" />
      </a>
    </S.Footer>
  );
};

export default Footer;
