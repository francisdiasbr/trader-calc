import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Footer from '../../components/Footer';
import Main from '../../components/Main';

import * as S from './styles'

const HomeComponent = () => {
  return (
    <S.Container>
      <Head>
        <title>Trade Calc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
      <Footer/>
    </S.Container>
  );
}

export default HomeComponent;