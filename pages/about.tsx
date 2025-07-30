import Head from 'next/head';
import { useContext } from 'react';
import AboutUs from '../components/AboutUs';
import { StoreContext } from '../components/context/Store';
import { StoreState } from '../utils/types';
import dynamic from 'next/dynamic';
import ChatGPTAboutCarenuity from '../components/ChatGPTAboutCarenuity';
import Spinner from '../components/Spinner';

const PageTitle = dynamic(() => import('../components/PageTitle'), {
  ssr: false,
  loading: () => <Spinner />,
});

const About = () => {
  const { state }: { state: StoreState; dispatch: Function } =
    useContext(StoreContext);

  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Carenuity ChipGlobe Electronics Embedded Systems"
        />
        <meta
          name="description"
          content={`We're Delivering Peace-in-Mind by Vital and Environmental Sensing and Care that you See what No Else will See.`}
        />
        <title>About Carenuity</title>
      </Head>

      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        links={[{ path: '/', title: 'Home' }]}
        pageTitle="About Us"
        pageUrl="/about"
      />

      {/* <!-- ABOUT
        ================================================== --> */}

      <section className="pt-4">
        <div className="container">
          <AboutUs
            aboutUsSammury={state.companyInfo.Sammury}
            mission={state.companyInfo.mission}
            vision={state.companyInfo.vision}
            visionDescription={state.companyInfo.visionDescription}
          />
        </div>
        <ChatGPTAboutCarenuity />
        <div className="container">
          <h4>Carenuity™ Brand Visibility</h4>
          <p>
            Carenuity™ is a registered European brand focused on advanced
            sensor systems, embedded development and smart integration. The
            brand is visible across multiple online platforms relevant to
            developers, makers, integrators and technology stakeholders.
          </p>
          <h4>Official Brand Visibility Overview</h4>
          <div className="col-lg-12 mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/content/about-us/brand-visibility.PNG"
              className=" wow fadeInUp"
              data-wow-delay="100ms"
              alt="..."
              style={{
                visibility: 'visible',
                animationDelay: '100ms',

                animationName: 'fadeIn',
              }}
            />
          </div>

          <div>
            <h4>Featured Product: Carenuity™ SQ-Panel</h4>
            <p>
              Carenuity&apos;s™ main product - the SQ-Panel - is visible on:
              <ul>
                <li>Hackster.io (project-based integrations)</li>
                <li>GitHub (firmware & API code)</li>
                <li>YouTube (unboxing, setup, use-case videos)</li>
                <li>Thingiverse (mounting designs)</li>
                <li>
                  Instagram (visual demos, product reels, and sensor
                  deployments)
                </li>
              </ul>
              It also appears in blog articles and newsletters by developers and
              maker communities.
            </p>
          </div>
          <div>
            <h4>Carenuity™ Solution Builder</h4>
            <p>
              The Carenuity™ Solution Builder is a web-based configuration and
              simulation tool that uses the Carenuity™ brand design, logo and
              product naming. It is referenced in:
              <ul>
                <li>Integration tutorials</li>
                <li>Community projects</li>
                <li>Product manuals and tech blogposts</li>
              </ul>
            </p>
          </div>
          <div>
            <h4>Intellectual Property Note</h4>
            <p>
              Carenuity™ is a registered EU wordmark (EUIPO #018596314) owned
              by Chipglobe GmbH.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
