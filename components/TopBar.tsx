import Link from 'next/link';
import styled from 'styled-components';
import { DESKTOP_MQ } from '../src/constants';
import DsekIcon from './icons/DsekIcon';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  ${DESKTOP_MQ} {
    padding: 1rem 2rem;
  }
  background: rgb(53, 41, 48);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`;

const DesktopMenu = styled.div`
  display: none;
  ${DESKTOP_MQ} {
    display: flex;
    width: 100%;
    font-size: 1.5rem;
    justify-content: space-around;
  }
`;

const MenuItem = styled.div``;

export default function MobileBar() {
  return (
    <>
      <Container>
        <Link href="/">
          <a>
            <DsekIcon />
          </a>
        </Link>
        <DesktopMenu>
          <MenuItem>
            <Link href="/">start</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/schema">schema&&karta</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/">boende</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/">sektionen</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/">packning</Link>
          </MenuItem>
          <MenuItem>
            <Link href="/">studenthälsa</Link>
          </MenuItem>
        </DesktopMenu>
      </Container>
    </>
  );
}
