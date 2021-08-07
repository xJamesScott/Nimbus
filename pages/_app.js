import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
      <link rel="shortcut icon" href="/favicon-n.ico" ></link>
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp
