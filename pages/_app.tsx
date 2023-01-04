import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import Preloader from '../components/Preloader';

export default function App({ Component, pageProps }: AppProps) {
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 7000);
  }, []);
  return (
    <>
      {
        preloader ? (
          <Preloader />
        ) : (
          <>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </>
        )
      }
    </>
  );
}
