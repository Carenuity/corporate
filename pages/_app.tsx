import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Layout from '../components/Layout';

declare global {
  interface Window {
    $: any;
    jQuery: any;
    wow: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof document !== undefined) {
      // require('jquery/dist/jquery.min.js');
      window.$ = window.jQuery = require('jquery');
      require('../utils/js/popper.min.js');
      require('bootstrap/dist/js/bootstrap.min.js');
      require('../utils/js/nav-menu.js');
      require('owl.carousel/dist/owl.carousel.js');
      require('jquery.counterup/jquery.counterup.min.js');
      require('jquery.stellar/jquery.stellar.js');
      require('../utils/js/easy.responsive.tabs.js');
      require('waypoints/lib/jquery.waypoints.min.js');
      require('../utils/js/countdown.js');
      require('magnific-popup/dist/jquery.magnific-popup.min.js');
      require('lightgallery/dist/js/lightgallery-all.js');
      require('jquery.mousewheel/jquery.mousewheel.js');
      require('clipboard/dist/clipboard.min.js');
      require('prismjs/prism.js');
      require('jarallax/dist/jarallax.min.js');
      require('jarallax/dist/jarallax-video.min.js');
      window.wow = require('wow.js/dist/wow.min.js');
      require('../utils/js/main.js');
    }
  }, []);
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
