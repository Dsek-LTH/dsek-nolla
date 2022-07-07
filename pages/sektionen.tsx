import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import { DesktopOnly, MobileOnly } from '../components/components';
import ConsoleEffect from '../components/ConsoleEffect';
import { DESKTOP_MQ } from '../src/constants';

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const Paragraph = styled.p`
  ${DESKTOP_MQ} {
    font-size: 24px;
  }
`;

const Logos = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const Logo = styled.img`
  width: 118px;
  height: 118px;
  ${DESKTOP_MQ} {
    width: 341px;
    height: 341px;
  }
`;

const TechLogo = styled.img`
  margin-top: 1rem;
  ${DESKTOP_MQ} {
    margin-top: 2rem;
  }
`;

const Home: NextPage = () => {
  return (
    <Main>
      <ConsoleEffect Tag="h1" string="sektionen" />
      <Paragraph>
        Kåren är uppdelad i elva sektioner. En sektion omfattar studenter vid
        ett eller flera utbildningsprogram. Sektionerna har hand om de frågor
        som rör studenter på just de programmen. Din sektion heter D-sektionen!
        Du kan läsa mer om vad D-sektionen gör för något på sektionens hemsida.
      </Paragraph>

      <Logos>
        <Logo src="/images/d_logo.png" alt="Logotyp D-sektionen" />
        <Logo src="/images/c_logo.png" alt="C logotyp" />
      </Logos>

      <p />
      <ConsoleEffect Tag="h1" string="kåren" />
      <Paragraph>
        Alla studenter på LTH är medlemmar i Teknologkåren vid Lunds tekniska
        högskola, TLTH. Kåren är studenternas röst mot universitetet och en
        mötesplats för teknologerna. Kårens huvudsakliga uppgift är att bevaka
        utbildningarna, men gör även mycket annat, t.ex arbetar med studenternas
        arbetsmiljö, studiemedelsfrågor, kontakter med näringsliv, nöjen, fester
        och fritidsaktiviteter. Kårens expedition finns i Kårhuset. Här hittar
        man även kårens heltidare, de studenter som under ett år tar uppehåll
        från studierna för att helhjärtat arbeta för Teknologkåren. Du kan läsa
        mer på kårens hemsida.
      </Paragraph>
      <TechLogo src="/images/teknologkaren.png" alt="Teknologkårens logotyp" />
    </Main>
  );
};

export default Home;
