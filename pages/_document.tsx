import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <meta http-equiv="Access-Control-Allow-Origin" content="https://carenuity.com" /> */}
        <link rel="canonical" href="https://…" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* favicon */}
        <link rel="shortcut icon" href="/img/logos/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/logos/apple-touch-icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* <KickStarter /> */}
      </body>
    </Html>
  );
}
