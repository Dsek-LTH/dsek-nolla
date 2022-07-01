import styled from 'styled-components';
import DsekIcon from './icons/DsekIcon';

const Container = styled.div`
  padding: 0 1rem;
  background: rgba(255, 255, 255, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
`;

export default function MobileBar() {
  return (
    <>
      <Container>
        <DsekIcon />
      </Container>
    </>
  );
}
