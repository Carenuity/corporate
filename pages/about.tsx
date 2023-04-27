import Head from 'next/head';
import React, { useContext, useEffect } from 'react';
import AboutUs from '../components/AboutUs';
import PageTitle from '../components/PageTitle';
import { StoreContext } from '../components/context/Store';
import { StoreState } from '../utils/types';

const About = ({ aboutUsSammury }: { aboutUsSammury: string }) => {
  const { state }: { state: StoreState; dispatch: Function } =
    useContext(StoreContext);

  // useEffect(() => {
  //   if (typeof document !== undefined) {
  //     window.$ = window.jQuery = require('jquery');
  //     require('../utils/js/popper.min.js');
  //     require('../utils/js/bootstrap.min.js');
  //     require('../utils/js/nav-menu.js');
  //     require('../utils/js/owl.carousel.js');
  //     require('../utils/js/jquery.counterup.min.js');
  //     require('../utils/js/jquery.stellar.min.js');
  //     require('../utils/js/easy.responsive.tabs.js');
  //     require('../utils/js/waypoints.min.js');
  //     require('../utils/js/countdown.js');
  //     require('../utils/js/jquery.magnific-popup.min.js');
  //     require('../utils/js/lightgallery-all.js');
  //     require('../utils/js/jquery.mousewheel.min.js');
  //     require('../utils/js/clipboard.min.js');
  //     require('../utils/js/prism.js');
  //     window.wow = require('../utils/js/wow.js');
  //     require('../utils/js/main.js');
  //   }
  // }, []);


  return (
    <>
      <Head>
        <meta
          name='keywords'
          content='Carenuity ChipGlobe Electronics Embedded Systems'
        />
        <meta
          name='description'
          content={`We're Delivering Peace-in-Mind by Vital and Environmental Sensing and Care that you See what No Else will See.`}
        />
        <title>About Carenuity</title>
      </Head>

      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        prevPage='Home'
        prevPageUrl='/'
        pageTitle='About Us'
        pageUrl='/about'
      />

      {/* <!-- ABOUT
        ================================================== --> */}
      <AboutUs
        aboutUsSammury={aboutUsSammury}
        mission={state.companyInfo.mission}
        vision={state.companyInfo.vision}
        visionDescription={state.companyInfo.visionDescription}
      />
    </>
  );
};

export default About;
