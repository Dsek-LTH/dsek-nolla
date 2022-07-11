import type { NextPage } from 'next';
import styled from 'styled-components';
import ConsoleEffect from '../components/ConsoleEffect';
import { DESKTOP_MQ } from '../src/constants';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  ul {
    padding-left: 1rem;
  }
`;

const CopyAndHouse = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column-reverse;
  ${DESKTOP_MQ} {
    margin-bottom: 4rem;
    flex-direction: row;
  }
`;

const CopyAndRouter = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
  ${DESKTOP_MQ} {
    flex-direction: row;
    margin-bottom: 4rem;
  }
`;

const PinkHouse = styled.img`
  height: 5rem;
  width: 5rem;
  margin-left: auto;
  margin-bottom: 1rem;
  ${DESKTOP_MQ} {
    width: 10rem;
    height: 10rem;
    margin-left: 10rem;
  }
`;

const RouterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  ${DESKTOP_MQ} {
    margin-left: 5rem;
  }
  font-size: 2rem;
`;

const Router = styled.img`
  width: 100%;
  margin-top: 2rem;
  ${DESKTOP_MQ} {
    height: 20rem;
  }
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  ${DESKTOP_MQ} {
    font-size: 24px;
  }
`;

const Home: NextPage = () => {
  return (
    <Main>
      <ConsoleEffect Tag="h1" string="boende" />
      <CopyAndHouse>
        <Copy>
          I Lund kan det vara lite knepigt att hitta boende - som tur är har
          novischer (förstaårsstudenter) förtur. Kontakta AF-Bostäder, Bopoolen
          eller en nation direkt! Studentlund har några bra tips som gäller alla
          dessa alternativ, samt några andra sätt att få tag i boende. Klicka
          dig in där och läs på! Stiftelsen Michael Hansens Kollegium står
          utanför AFB och här kan du därför bo i studentbostäder utan att vara
          medlem i en nation. Enda kravet för att få bo här är att du är student
          vid Lunds Universitet. Är det så att du inte hittar någonstans att bo
          eller är i behov av tillfällig sovplats kan du kontakta din phadder :)
        </Copy>
        <PinkHouse src="/images/pink_house.png" alt="Rosa hus" />
      </CopyAndHouse>
      <CopyAndRouter>
        <Copy>
          Möjliga kontaktvägar för boende i lund - rangordnat utefter möjlighet
          för boende:
          <ul>
            <li>AF-Bostäder</li>
            <li>Studentlund - Nationer</li>
            <li>Michael Hansens Kollegium</li>
            <li>Privat hyresvärd</li>
            <li>Bopoolen</li>
          </ul>
          Facebook-grupper. Exempelvis:
          <ul>
            <li>Kollektiv i Lund</li>
            <li>Lägenheter i Lund</li>
          </ul>
        </Copy>
        <RouterContainer>
          <Router src="/images/router.png" alt="Router" />
          <span>127.0.0.1</span>
        </RouterContainer>
      </CopyAndRouter>
    </Main>
  );
};

export default Home;
