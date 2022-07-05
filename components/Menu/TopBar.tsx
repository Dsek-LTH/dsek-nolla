import Link from 'next/link';
import styled from 'styled-components';
import { DESKTOP_MQ } from '../../src/constants';
import DsekIcon from '../icons/DsekIcon';
import DesktopMenuItem from './DesktopMenuItem';

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
    font-size: 1.25rem;
    justify-content: space-around;
  }
  a {
    text-decoration: none;
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
          <DesktopMenuItem href="/" label="start" />
          <DesktopMenuItem href="/schema" label="schema&&karta" />
          <DesktopMenuItem href="/boende" label="boende" />
          <DesktopMenuItem href="/sektionen" label="sektionen" />
          <DesktopMenuItem href="/packing" label="packning" />
          <DesktopMenuItem href="/studenthalsa" label="studenthälsa" />
          <DesktopMenuItem href="/checklista" label="checklista" />
        </DesktopMenu>
      </Container>
    </>
  );
}
