import { useContext } from 'react';
import ServiceHOC from '../components/hoc/ServiceHOC';
import { servicesUrls } from '../utils/constants';
import { StoreContext } from '../components/context/Store';
import Head from 'next/head';
import Link from 'next/link';

const Index = () => {
  const { state } = useContext(StoreContext);
  return (
    <>
      <Head>
        <title>SQ-Labs Team</title>
      </Head>
      <div>
        <div className="wow fadeIn" data-wow-delay="200ms">
          <div className="section-title mb-1-9">
            <span className="sm-title" style={{ fontSize: '.7em' }}>
              SQ-Labs Team
            </span>
            <h2 className="mb-0 h6">
              Coding in not required for customers to experience any of our
              Carenuity Sensor Solutions, nevertheless, for learning more on
              coding your-own-self-made-device, the team shares the knowledge on
              these Carenuity SQ-Lab Team pages.
            </h2>
            <h2 className="mb-0 h6">Coding in not required for
              customers to experience any of our Carenuity Sensor Solutions,
              nevertheless, for learning more on coding
              your-own-self-made-device, the team shares the knowledge on these
              Carenuity SQ-Lab Team pages.</h2>
          </div>
          {/* <h2 className="mb-3 h3">What is the C3-Mini?</h2> */}
          <p className="mb-lg-1-9">
            As anyone like grandma needs care by a younger talent, the SQ-Labs
            team supports the young talents, so that they can enhance and
            perfectly customize all the Install-for-Free applications, e.g.
          </p>
          <div className="row mb-1-9">
            <div className="col-12 wow fadeIn" data-wow-delay="200ms">
              <div className="d-flex align-items-center">
                <i className="ti-check display-26 text-primary"></i>
                <span className="ms-3 text-dark fw-bold">
                  By sharing all applications on{' '}
                  <a
                    href="https://github.com/Carenuity/WOKWI"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WOKWI and Github
                  </a>{' '}
                </span>
              </div>
            </div>
            <div className="col-12 wow fadeIn" data-wow-delay="200ms">
              <div className="d-flex align-items-center">
                <i className="ti-check display-26 text-primary"></i>
                <span className="ms-3 text-dark fw-bold">
                  By providing instructions on how to get{' '}
                  <Link href="/open-weather-map">OpenWeather API</Link> key,
                  <Link href="/spotify-api"> Spotify API</Link> key, Adafruit IO
                  key or Thingspeak API key.
                </span>
              </div>
            </div>
          </div>
          <p className="mb-lg-1-9">
            The SG-Labs Team makes is super easy to get across hurdles and
            assist talents to make it enjoyable fun for anyone building
            high-quality devices within 3 minutes.
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceHOC(Index, {
  servicesCategoryUrls: servicesUrls.standard,
  pageUrl: '/sq-labs',
  pageTitle: 'SQ-Labs Team',
  serviceCategory: 'Budget Friendly Not Only For Students',
});
