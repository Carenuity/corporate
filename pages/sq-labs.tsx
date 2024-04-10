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
              Knowledge is not required to experience Carenuity sensor
              solutions. Nevertheless for learning more on coding for
              customizing your own self-made device, we shares the knowledge on
              the following team pages and in the blog.
            </h2>
          </div>
          {/* <h2 className="mb-3 h3">What is the C3-Mini?</h2> */}
          <p className="mb-lg-1-9">
            Elderly like grandma need care by a supportive talent. The SQ-Labs
            Team <strong>supports care giving talents</strong>, so that they can
            customize the Install-for-Free applications for their relatives or
            even enhance them.
          </p>
          <p>We support this e.g. by</p>
          <div className="row mb-1-9">
            <div className="col-12 wow fadeIn" data-wow-delay="200ms">
              <div className="d-flex align-items-center">
                <i className="ti-check display-26 text-primary"></i>
                <span className="ms-3 text-dark">
                  sharing all applications on{' '}
                  <a
                    href="https://github.com/Carenuity/WOKWI"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WOKWI and Github
                  </a>{' '}
                </span>
              </div>
              <div className="d-flex align-items-center">
                <i className="ti-check display-26 text-primary"></i>
                <span className="ms-3 text-dark">
                  providing instructions on how to get sensor data accesssible,
                  e.g. by <Link href="/open-weather-map">OpenWeather API</Link>{' '}
                  key,
                  <Link href="/spotify-api"> Spotify API</Link> key, Adafruit IO
                  key or Thingspeak API key.
                </span>
              </div>
              <div className="d-flex align-items-center">
                <i className="ti-check display-26 text-primary"></i>
                <span className="ms-3 text-dark">
                  providing insights in sensor measurements e.g.{' '}
                  <Link
                    href={'/co2-insights'}
                    className="text-decoration-underline"
                  >
                    CO<sub>2</sub>
                  </Link>
                  .
                </span>
              </div>
              <div className="d-flex align-items-center">
                <i className="ti-check display-26 text-primary"></i>
                <span className="ms-3 text-dark">
                  providing instructions on hackster.io
                </span>
              </div>
            </div>
          </div>
          <p className="mb-lg-1-9">
            The SQ-Labs Team makes it easy to get across hurdles and assists
            talents to make it enjoyable fun for anyone building own devices
            within 3 minutes.
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
