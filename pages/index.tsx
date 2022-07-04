import type { NextPage } from 'next';
import styled from 'styled-components';
import ConsoleEffect from '../components/ConsoleEffect';
import CountDown from '../components/Home/CountDown';
import FAQ from '../components/Home/FAQ';
import Copy from '../components/Home/Copy';

const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Home: NextPage = () => {
  return (
    <Main>
      <CountDown />
      <ConsoleEffect Tag="h1" string="hejsan nollan!" />
      <Copy />
      <FAQ />
    </Main>
  );
};

export default Home;
