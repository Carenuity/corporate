import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='de-de'>
      <Head>
        {/* metas */}
        <meta charSet='utf-8' />
        <meta name='author' content={process.env.AUTHOR} />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />

        {/* favicon */}
        <link rel='shortcut icon' href='img/logos/favicon.ico' />
        <link rel='apple-touch-icon' href='img/logos/apple-touch-icon.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
