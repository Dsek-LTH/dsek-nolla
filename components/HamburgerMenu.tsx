import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';

export default function HamburgerMenu() {
  return (
    <Menu right>
      <Link href="/">
        <a id="home" className="menu-item bm-item">
          start
        </a>
      </Link>
      <Link href="/schema">
        <a id="schema" className="menu-item bm-item">
          schema&&karta
        </a>
      </Link>
      <Link href="/boende">
        <a id="boende" className="menu-item bm-item">
          boende
        </a>
      </Link>
      <Link href="/sektionen">
        <a id="sektionen" className="menu-item bm-item">
          sektionen
        </a>
      </Link>
      <Link href="/packning">
        <a id="packning" className="menu-item bm-item">
          packning
        </a>
      </Link>
      <Link href="/studenthalsa">
        <a id="studenthälsa" className="menu-item bm-item">
          studenthälsa
        </a>
      </Link>
    </Menu>
  );
}
