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
        <meta
          name='keywords'
          content='IT Solutions and Services HTML Template'
        />
        <meta
          name='description'
          content='Solutic - IT Solutions and Services HTML Template'
        />

        {/* favicon */}
        <link rel='shortcut icon' href='img/logos/favicon.ico' />
        <link rel='apple-touch-icon' href='img/logos/apple-touch-icon.png' />
        {/* <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='img/logos/apple-touch-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='img/logos/apple-touch-icon-114x114.png'
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
