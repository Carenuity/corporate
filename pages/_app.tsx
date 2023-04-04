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
  const aboutUsSammury = `We're delivering peace-in-mind by vital and environmental sensing and care that you see what no one else will see.`;
  const applicationVideosUrl = 'https://www.youtube.com/watch?v=i3pwQ2BWTO8';
  const shopUrl = 'https://www.chipglobe.shop';
  const authUrl = 'https://carenuity-customer-app-dot-roomsensorgcp01.ey.r.appspot.com/auth';
  const webFlashingUrl = 'https://chipglobe-dev.web.app/';
  const logoUrl = '/img/logos/logo.png';

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
      <Layout
        aboutUsSammury={aboutUsSammury}
        applicationVideosUrl={applicationVideosUrl}
        shopUrl={shopUrl}
        webFlashingUrl={webFlashingUrl}
        authUrl={authUrl}
        logoUrl={logoUrl}
      >
        <Component
          aboutUsSammury={aboutUsSammury}
          applicationVideosUrl={applicationVideosUrl}
          {...pageProps}
        />
      </Layout>
    </>
  );
}
