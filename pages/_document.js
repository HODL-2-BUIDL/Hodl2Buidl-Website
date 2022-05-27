import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="css/main.css" />
      </Head>
	    <body className="is-preload">
        <Main />
        <NextScript/>
      </body>
    </Html>
  )
}
