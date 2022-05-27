import '../styles/globals.css'
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dimension by HTML5 UP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <Component {...pageProps} />

      <Script src="js/jquery.min.js"></Script>
      <Script src="js/browser.min.js"></Script>
      <Script src="js/breakpoints.min.js"></Script>
      <Script src="js/util.js"></Script>
      <Script src="js/main.js"></Script>

    </>
  )

}

export default MyApp
