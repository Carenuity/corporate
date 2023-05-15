import Head from 'next/head';
import { useContext } from 'react';
import AboutUs from '../components/AboutUs';
import { StoreContext } from '../components/context/Store';
import { StoreState } from '../utils/types';
import dynamic from 'next/dynamic';
import ChatGPTAboutCarenuity from '../components/ChatGPTAboutCarenuity';

const PageTitle = dynamic(() => import('../components/PageTitle'), {
  ssr: false,
  loading: () => <p>Loading..</p>,
});

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
      <ChatGPTAboutCarenuity />
    </>
  );
};

export default About;
