import styled from 'styled-components';
import { DESKTOP_MQ } from '../../src/constants';

const Container = styled.div`
  max-width: 40rem;
`;

const Label = styled.p`
  font-size: 14px;
  ${DESKTOP_MQ} {
    font-size: 1rem;
  }
`;

const LoadingBarBackground = styled.div`
  position: relative;
  z-index: 0;
  height: 2rem;
  width: 100%;
  background: rgba(196, 196, 196, 0.12);
`;

const LoadingBarForeground = styled.div`
  height: 2rem;
  background: rgba(242, 128, 161, 0.4);
  position: absolute;
  left: 0;
  top: 0;
`;

const nollningStart = new Date('2022-08-23').getTime();
const now = new Date().getTime();
const startOfTheYear = new Date('2022-01-01').getTime();

const daysFromStartOfTheYear =
  (nollningStart - startOfTheYear) / (1000 * 3600 * 24);

const daysUntilNollning = (nollningStart - now) / (1000 * 3600 * 24);

const loadingBarWidth =
  ((daysFromStartOfTheYear - daysUntilNollning) / daysFromStartOfTheYear) * 100;

export default function CountDown() {
  return (
    <Container>
      <Label>
        &gt; loading &quot;n0llning&quot;... {daysUntilNollning.toFixed()} dagar
        kvar...
      </Label>
      <LoadingBarBackground>
        <LoadingBarForeground
          style={{ width: `${loadingBarWidth.toFixed()}%` }}
        />
      </LoadingBarBackground>
    </Container>
  );
}
