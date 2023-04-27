import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import { StoreProvider } from '../components/context/Store';
import Script from 'next/script';

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
      window.$ = window.jQuery = require('jquery');
      require('../utils/js/popper.min.js');
      require('../utils/js/bootstrap.min.js');
      require('../utils/js/nav-menu.js');
      require('../utils/js/owl.carousel.js');
      require('../utils/js/jquery.counterup.min.js');
      require('../utils/js/jquery.stellar.min.js');
      require('../utils/js/easy.responsive.tabs.js');
      require('../utils/js/waypoints.min.js');
      require('../utils/js/countdown.js');
      require('../utils/js/jquery.magnific-popup.min.js');
      require('../utils/js/lightgallery-all.js');
      require('../utils/js/jquery.mousewheel.min.js');
      require('../utils/js/clipboard.min.js');
      require('../utils/js/prism.js');
      window.wow = require('../utils/js/wow.js');
      require('../utils/js/main.js');
    }
  }, []);

  return (
    <>
      <StoreProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    </>
  );
}
