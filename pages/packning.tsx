import type { NextPage } from 'next';
import styled from 'styled-components';
import ConsoleEffect from '../components/ConsoleEffect';
import PostItNote from '../components/PostItNote';
import { DESKTOP_MQ } from '../src/constants';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  ul {
    padding-left: 1rem;
  }
  ${DESKTOP_MQ} {
    font-size: 24px;
  }
`;

const BikePostIt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  font-size: 60px;
`;

const Home: NextPage = () => {
  return (
    <Main>
      <ConsoleEffect Tag="h1" string="vad ska jag ta med mig?" />
      <PostItNote>
        <BikePostIt>Cykel!!!</BikePostIt>
      </PostItNote>
    </Main>
  );
};

export default Home;
