import styled from 'styled-components';
import { COLOR } from '../src/constants';

const Container = styled.div`
  position: relative;
  font-family: 'Ubuntu Mono';
`;

const Tape = styled.img`
  position: absolute;
  width: 9rem;
  height: 10rem;
  top: -5rem;
  left: 5rem;
`;

const Paper = styled.div`
  min-width: 19rem;
  max-width: 19rem;
  min-height: 19rem;
  max-width: 19rem;
  display: flex;
`;

export default function PostItNote({
  purple,
  children,
}: {
  purple?: boolean;
  children?: JSX.Element | JSX.Element[];
}) {
  return (
    <Container>
      <Tape src="/images/tape.png" />
      <Paper style={{ backgroundColor: purple ? COLOR.PURPLE : COLOR.PINK }}>
        {children}
      </Paper>
    </Container>
  );
}
