/* eslint-disable react/jsx-no-comment-textnodes */
import type { NextPage } from 'next';
import styled from 'styled-components';
import ConsoleEffect from '../components/ConsoleEffect';
import { DESKTOP_MQ } from '../src/constants';

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const PlaceHolderbox = styled.div`
  display: flex;
  align-items: center;
  background: rgba(196, 196, 196, 0.28);
  max-width: 55rem;
  min-height: 18rem;
  justify-content: center;
  font-size: 32px;
  ${DESKTOP_MQ} {
    font-size: 36px;
    justify-content: flex-start;
    padding-left: 10%;
  }
  margin: 2rem 0;
`;

const Maps = styled.div`
  display: flex;
  flex-direction: column;
  ${DESKTOP_MQ} {
    flex-direction: row;
  }
`;

const Campus = styled.img`
  width: 100%;
  object-fit: contain;
  ${DESKTOP_MQ} {
    padding-right: 5rem;
    width: 50%;
  }
  margin-bottom: 2rem;
`;

const EHouse = styled.img`
  width: 100%;
  object-fit: contain;
  ${DESKTOP_MQ} {
    width: 50%;
    padding-left: 5rem;
  }
`;

const Home: NextPage = () => {
  return (
    <Main>
      <ConsoleEffect Tag="h1" string="schema" />
      <PlaceHolderbox>//placeholder&lt;3</PlaceHolderbox>
      <ConsoleEffect Tag="h1" string="karta" />
      <Maps>
        <Campus src="/images/campus.png" />
        <EHouse src="/images/ehuset.png" />
      </Maps>
    </Main>
  );
};

export default Home;
