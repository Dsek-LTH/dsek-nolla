import '../styles/globals.css';
import type { AppProps } from 'next/app';
import TopBar from '../components/Menu/TopBar';
import HamburgerMenu from '../components/Menu/HamburgerMenu';
import { MobileOnly } from '../components/components';
import styled from 'styled-components';
import { DESKTOP_MQ } from '../src/constants';
import Footer from '../components/Footer';
import BackgroundDigits from '../components/BackgroundDigits';
import Head from 'next/head';

const Container = styled.div`
  padding: 5rem 1rem;
  ${DESKTOP_MQ} {
    padding: 7rem;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>nolla.nu</title>
        <meta
          name="description"
          content="Matnyttig information för nollor som börjar på LTH data/infokom"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackgroundDigits />
      <MobileOnly>
        <HamburgerMenu />
      </MobileOnly>
      <Container>
        <Component {...pageProps} />
      </Container>
      <TopBar />
      <Footer />
    </>
  );
}

export default MyApp;
