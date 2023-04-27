import Head from 'next/head';
import React, { useContext, useEffect } from 'react';
import AboutUs from '../components/AboutUs';
import PageTitle from '../components/PageTitle';
import { StoreContext } from '../components/context/Store';
import { StoreState } from '../utils/types';

const About = () => {
  const { state }: { state: StoreState; dispatch: Function } =
    useContext(StoreContext);

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
        aboutUsSammury={state.companyInfo.Sammury}
        mission={state.companyInfo.mission}
        vision={state.companyInfo.vision}
        visionDescription={state.companyInfo.visionDescription}
      />
    </>
  );
};

export default About;
