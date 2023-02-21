import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* metas */}
        <meta charSet='utf-8' />
        <meta name='author' content={process.env.AUTHOR} />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
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
        <link rel='shortcut icon' href='assets/img/logos/favicon.ico' />
        <link
          rel='apple-touch-icon'
          href='assets/img/logos/apple-touch-icon.png'
        />
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
        <NextScript>
          {/* all js include start */}

          {/* jQuery */}
          {/* <script src='assets/js/jquery.min.js'></script> */}

          {/* popper js */}
          {/* <script src='assets/js/popper.min.js'></script> */}

          {/* bootstrap */}
          {/* <script src='assets/js/bootstrap.min.js'></script> */}

          {/* search */}
          {/* <script src='search/search.js'></script> */}

          {/* navigation */}
          {/* <script src='assets/js/nav-menu.js'></script> */}

          {/* owl carousel */}
          {/* <script src='assets/js/owl.carousel.js'></script> */}

          {/* jquery.counterup.min */}
          {/* <script src='assets/js/jquery.counterup.min.js'></script> */}

          {/* stellar js */}
          {/* <script src='assets/js/jquery.stellar.min.js'></script> */}

          {/* easy.responsive.tabs js */}
          {/* <script src='assets/js/easy.responsive.tabs.js'></script> */}

          {/* waypoints js */}
          {/* <script src='assets/js/waypoints.min.js'></script> */}

          {/* countdown js */}
          {/* <script src='assets/js/countdown.js'></script> */}

          {/* jquery.magnific-popup js */}
          {/* <script src='assets/js/jquery.magnific-popup.min.js'></script> */}

          {/* lightgallery js */}
          {/* <script src='assets/js/lightgallery-all.js'></script> */}

          {/* mousewheel js */}
          {/* <script src='assets/js/jquery.mousewheel.min.js'></script> */}

          {/* clipboard js */}
          {/* <script src='assets/js/clipboard.min.js'></script> */}

          {/* prism js */}
          {/* <script src='assets/js/prism.js'></script> */}

          {/* jarallax js */}
          {/* <script src='assets/js/jarallax.min.js'></script> */}

          {/* jarallax video js */}
          {/* <script src='assets/js/jarallax-video.js'></script> */}

          {/* wow js */}
          {/* <script src='assets/js/wow.js'></script> */}

          {/* custom scripts */}
          {/* <script src='assets/js/main.js'></script> */}

          {/* form plugins js */}
          {/* <script src='assets/quform/js/plugins.js'></script> */}

          {/* form scripts js */}
          {/* <script src='assets/quform/js/scripts.js'></script> */}

          {/*all js include end */}
        </NextScript>
      </body>
    </Html>
  );
}
