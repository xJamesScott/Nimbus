import '../styles/globals.css';
import Head from 'next/head';
import { GlobalStyles } from '../components/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyles />
      <Head>
        <link rel="shortcut icon" href="/favicon-n.ico" ></link>
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp
