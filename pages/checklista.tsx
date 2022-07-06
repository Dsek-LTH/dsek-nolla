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
      <ConsoleEffect Tag="h1" string="checklista" />
      <Copy>
        <ul>
          <li>
            Ladda ner appen Orbi - denna app kommer att användas för
            biljettsläpp inför olika sittningar och evenemang under nollningen.
          </li>
          <br />
          <li>
            Ladda ner appen STUK - denna app används för att delvis få
            studentrabatter och delvis för att få ett ID som krävs för att komma
            in på alla Nationer i Lund. Nationer har bland annat student-drivna
            klubbar, pubar och andra aktiviteter. Här visas din tillhörighet
            till olika nationer.
          </li>
          <br />
          <li>
            Ladda ner appen Mecenat - denna app används för att delvis få
            studentrabtter och delvis för att få ett ID som krävs för att komma
            in på olika evenemang vid LTH. Här visas din tillhörighet till
            Teknologkåren.
          </li>
          <br />
          <li>
            Gå med i Teknologkåren vid LTH - det krävs att man är medlem i
            Teknologkåren för att kunna delta i många evenemang och kunna ta del
            av många förmåner under såväl som efter nollningen! Vi kommer hjälpa
            dig med detta under de första dagarna i nollningen.
          </li>
          <br />
          <li>
            Gå med i Studentlund och skriv upp dig på en nation - medlemskap i
            Studentlund och nationsmedlemskap krävs för att kunna komma in på
            olika nationsevenemang i Lund. Du ser din tillhörighet till din
            nation i appen STUK. Länk till Studentlund:{' '}
            <a href="https://www.studentlund.se/">
              https://www.studentlund.se/
            </a>
          </li>
        </ul>
      </Copy>
    </Main>
  );
};

export default Home;
