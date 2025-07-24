// pages/_app.tsx
import '../styles/globals.css'; // ✅ import global styles ONLY here

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
