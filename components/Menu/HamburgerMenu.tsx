import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';
import { useState } from 'react';

export default function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };
  return (
    <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen} right>
      <Link href="/">
        <a id="home" className="menu-item bm-item" onClick={closeSideBar}>
          start
        </a>
      </Link>
      <Link href="/schema">
        <a id="schema" className="menu-item bm-item" onClick={closeSideBar}>
          schema&&karta
        </a>
      </Link>
      <Link href="/boende">
        <a id="boende" className="menu-item bm-item" onClick={closeSideBar}>
          boende
        </a>
      </Link>
      <Link href="/sektionen">
        <a id="sektionen" className="menu-item bm-item" onClick={closeSideBar}>
          sektionen
        </a>
      </Link>
      <Link href="/packning">
        <a id="packning" className="menu-item bm-item" onClick={closeSideBar}>
          packning
        </a>
      </Link>
      <Link href="/studenthalsa">
        <a
          id="studenthälsa"
          className="menu-item bm-item"
          onClick={closeSideBar}
        >
          studenthälsa
        </a>
      </Link>
      <Link href="/checklista">
        <a id="checklista" className="menu-item bm-item" onClick={closeSideBar}>
          checklista
        </a>
      </Link>
    </Menu>
  );
}
