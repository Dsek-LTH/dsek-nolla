import type { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import ConsoleEffect from '../components/ConsoleEffect';
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

const ImageContainer = styled.div`
  margin-top: 2rem;
  max-width: 55rem;
  margin-left: auto;
`;

const Home: NextPage = () => {
  return (
    <Main>
      <ConsoleEffect Tag="h1" string="studenthälsa" />
      <p style={{ marginBottom: '1.25rem' }}>
        Om du någon gång mår dåligt eller känner dig illa behandlad under din
        tid här på LTH och under n0llningen så finns det flera ställen du kan
        vända dig till.
      </p>
      <a href="https://www.lu.se/studera/livet-som-student/service-och-stod/studenthalsan">
        &gt; Studenthälsan
      </a>
      <a href="https://www.student.lth.se/kontakt/kuratorer/">
        &gt; LTH:s egna kuratorer
      </a>
      <a href="https://www.dsek.se/sektionen/funktionarerindepartment.php?departmentId=14">
        &gt; Trivselrådet
      </a>
      <p style={{ marginBottom: '0.5rem' }}>
        (Valfritt) Anonyma anmälningsformulär:
      </p>
      <a href="https://bit.ly/tryggnollning22">
        https://bit.ly/tryggnollning22
      </a>
      <a href="https://bit.ly/speakupdsek">https://bit.ly/speakupdsek</a>
      <a href="https://tlth.se/klaga">https://tlth.se/klaga</a>
      <ImageContainer>
        <Image
          alt="Glada nollor"
          src="/images/glada nollor.png"
          width={1274}
          height={910}
        />
      </ImageContainer>
    </Main>
  );
};

export default Home;
