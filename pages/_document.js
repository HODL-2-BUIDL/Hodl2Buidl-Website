import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="css/main.css" />
        <noscript><link rel="stylesheet" href="css/noscript.css" /></noscript>
        <script src="js/jquery.min.js"></script>
        <script src="js/browser.min.js"></script>
        <script src="js/breakpoints.min.js"></script>
      </Head>
	    <body className="is-preload">
        <Main />
        <NextScript/>
      </body>
    </Html>
  )
}
