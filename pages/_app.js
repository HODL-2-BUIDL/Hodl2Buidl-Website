import '../styles/globals.css'
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hodl2Buidl</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <Component {...pageProps} />

      <Script strategy="beforeInteractive" src="js/jquery.min.js"></Script>
      <Script strategy="beforeInteractive" src="js/browser.min.js"></Script>
      <Script strategy="beforeInteractive" src="js/breakpoints.min.js"></Script>
    </>
  )

}

export default MyApp
