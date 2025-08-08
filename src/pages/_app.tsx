import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  // Handle loading states, error boundaries can be added here
  useEffect(() => {
    // Example: Initialize analytics or other global scripts
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
