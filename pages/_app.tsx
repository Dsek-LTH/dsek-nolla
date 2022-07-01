import '../styles/globals.css';
import type { AppProps } from 'next/app';
import MobileBar from '../components/MobileBar';
import HamburgerMenu from '../components/HamburgerMenu';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HamburgerMenu />
      <MobileBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
