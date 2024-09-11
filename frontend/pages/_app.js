import Head from 'next/head';
import '../styles/globals.css'; // Keep this at the top of the file

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>CampusCode</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
