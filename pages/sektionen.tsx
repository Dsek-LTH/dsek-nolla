import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import { DesktopOnly } from '../components/components';
import ConsoleEffect from '../components/ConsoleEffect';
import { DESKTOP_MQ } from '../src/constants';

const Main = styled.main`
  display: flex;
  align-items: center;
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
  justify-content: space-between;
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

      <DesktopOnly>
        <Logos>
          <Image
            height={341}
            width={341}
            src="/images/d_logo.png"
            alt="Logotyp D-sektionen"
          />
          <Image
            height={341}
            width={341}
            src="/images/c_logo.png"
            alt="C logotyp"
          />
        </Logos>
      </DesktopOnly>
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
      <DesktopOnly>
        <Image
          height={250}
          width={1047}
          src="/images/teknologkaren.png"
          alt="Teknologkårens logotyp"
        />
      </DesktopOnly>
    </Main>
  );
};

export default Home;
