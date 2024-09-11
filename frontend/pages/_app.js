import Head from 'next/head';
import '../styles/globals.css'; // Import global styles at the top

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Favicon for your website */}
        <link rel="icon" href="/favicon.ico" />

        {/* Viewport meta tag for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Meta tags for SEO */}
        <meta name="description" content="CampusCode - Learn coding with curated video tutorials and comprehensive notes." />
        <meta name="keywords" content="coding, programming, video tutorials, notes, learning, CampusCode" />
        <meta name="author" content="CampusCode" />

        {/* Title for your site */}
        <title>CampusCode</title>
      </Head>

      {/* Render the main page component */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
