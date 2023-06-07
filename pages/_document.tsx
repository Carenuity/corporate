import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='de-de'>
      <Head>
        {/* metas */}
        <meta charSet='utf-8' />
        {/* <meta http-equiv="Access-Control-Allow-Origin" content="https://carenuity.com" /> */}
        <meta
          name='author'
          content={'https://www.linkedin.com/in/paul-otieno-software-engineer/'}
        />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='theme-color' content='#010101' />

        {/* favicon */}
        <link rel='shortcut icon' href='/img/logos/favicon.ico' />
        <link rel='apple-touch-icon' href='/img/logos/apple-touch-icon.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
