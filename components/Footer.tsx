import Link from 'next/link';
import styled from 'styled-components';
import { DESKTOP_MQ } from '../src/constants';
import BigDsekIcon from './icons/BigDsekIcon';

const Container = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  ${DESKTOP_MQ} {
    flex-direction: row;
    padding: 1rem 2rem;
    font-size: 20px;
  }
  background: rgb(53, 41, 48);
  width: 100%;
  justify-content: space-between;
  line-height: 22px;
`;

const ElectionInfo = styled.p`
  ${DESKTOP_MQ} {
    margin-top: 4rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  max-width: 39.5rem;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Footer() {
  return (
    <Container>
      <IconContainer>
        <Link href="/">
          <a>
            <BigDsekIcon />
          </a>
        </Link>
      </IconContainer>

      <ElectionInfo>
        I år är det riksdagsval och valdagen infaller under nollningsperioden.
        Vi ser jättegärna att så många nollor som möjligt förtidsröstar innan
        nollningen men går inte detta kommer det finnas tid att infinna sig vid
        en vallokal under dagen.
        <br />
        <br />
        <a href="https://lund.se/kommun-och-politik/sa-kan-du-paverka/allmanna-val/val-2022">
          &gt; mer information om valet
        </a>
      </ElectionInfo>
      <ElectionInfo>
        Har något hänt?
        <br />
        Anonymt anmälningsformulär:
        <br />
        <a href="https://bit.ly/tryggnollning22">
          &gt; https://bit.ly/tryggnollning22
        </a>
      </ElectionInfo>
    </Container>
  );
}
