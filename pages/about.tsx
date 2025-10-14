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
              src="/img/content/about-us/brand-visibility.png"
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
          <div>
            <h4>Carenuity Instagram Strategy - One-Pager</h4>
            <p>
              Carenuity operates three distinct Instagram channels to
              effectively reach and engage three different user segments Each
              channel is tailored to the needs, expectations, and technical
              expertise of its audience.
            </p>
          </div>
          <div
            className="e-card mb-4"
            style={{
              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
              maxHeight: '1070px',
              padding: '20px',
            }}
          >
            <div className="row">
              <div className="col-md-8 mb-4">
                <h6>@carenuity - The Premium Channel</h6>
                <p>
                  <ul>
                    <li>
                      Target Audience: Professionals, caregivers,
                      decision-makers, smart home enthusiasts
                    </li>
                    <li>
                      Purpose: Showcase the SQ-Panel, build brand trust, and
                      reinforce Carenuity&apos;s premium positioning
                    </li>
                    <li>
                      Persona: Kim - Tech-savvy decision-maker who values
                      quality and innovation
                    </li>
                  </ul>
                </p>
                <h6>@diy carenuity - The Maker Channel</h6>
                <p>
                  <ul>
                    <li>
                      Target Audience: Makers, students, tech-savvy DIY users
                    </li>
                    <li>
                      Purpose: Foster innovation, support DIY challenges, and
                      grow a vibrant maker community
                    </li>
                    <li>
                      Persona: Darlin - Creative tinkerer and student who enjoys
                      building and sharing
                    </li>
                  </ul>
                </p>
                <h6>@bts carenuity - The Insights & Caregiver Channel</h6>
                <p>
                  <ul>
                    <li>
                      Target Audience: Non-technical users, caregivers, internal
                      content team
                    </li>
                    <li>
                      Purpose: Collect insights, test content, and improve
                      storytelling for the main channel
                    </li>
                    <li>
                      Persona: Sonja - Caring, practical, values simplicity and
                      ready-to-use solutions
                    </li>
                  </ul>
                </p>
              </div>
              <div className="col-md-4 mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/about-us/insta.jpeg"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    width: '420px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                    padding: '10px',
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <h4>Strategic Benefits</h4>
            <p>
              <ul>
                <li>Clarity: Each audience receives tailored content</li>
                <li>
                  Efficiency: BTS insights inform content and product
                  development
                </li>
                <li>Community: DIY channel builds engagement and innovation</li>
                <li>
                  Positioning: Main channel maintains a premium brand image
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
