import '../styles/globals.css';
import type { AppProps } from 'next/app';
import TopBar from '../components/TopBar';
import HamburgerMenu from '../components/HamburgerMenu';
import { MobileOnly } from '../components/components';
import styled from 'styled-components';
import { DESKTOP_MQ } from '../src/constants';
import Footer from '../components/Footer';
import BackgroundDigits from '../components/BackgroundDigits';

const Container = styled.div`
  padding: 5rem 1rem;
  ${DESKTOP_MQ} {
    padding: 7rem;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BackgroundDigits />
      <Container>
        <Component {...pageProps} />
      </Container>
      <TopBar />
      <MobileOnly>
        <HamburgerMenu />
      </MobileOnly>
      <Footer />
    </>
  );
}

export default MyApp;
