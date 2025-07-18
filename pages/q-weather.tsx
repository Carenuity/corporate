import Head from 'next/head';
import React from 'react';
import PageTitle from '../components/PageTitle';
import Link from 'next/link';

const OpenWeatherMap = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'Get OpenWeather API Key';
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
        <title>{pageTitle}</title>
      </Head>

      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        links={[
          { path: '/', title: 'Home' },
          { path: '/sq-labs', title: 'Team' },
        ]}
        pageTitle={pageTitle}
        pageUrl="/ai-program-kenya"
      />

      <section className="pt-4">
        <div className="container">
          <div className="row">
            <h4> How to get the OpenWeatherMap API Key</h4>
            <p>
              GWeather is a command-line interface (CLI) written in Golang that
              provides weather forecasts using the WeatherAPI from RapidAPI.
            </p>
            <div>
              <h4> Get Weather KEY Tutorial</h4>

              <p>
                <strong>Register for a Weather account</strong>
              </p>
              <p>
                Register at{' '}
                <a href="https://id.gweather.com/#/register">
                  https://id.gweather.com/#/register
                </a>
                Before registering, you need to switch back to your own WIFI or
                traffic data, because you are now connected to the HXFB-Weather
                Clock hotspot is not available to the Internet, it is
                recommended that the registration operation on the computer!
              </p>
            </div>
            <div className="col-lg-12 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/open-weather/register.png"
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

            <div className="col-lg-12 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/open-weather/develop.png"
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

            <div className="col-lg-12 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/open-weather/management.png"
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
            <div className="col-lg-12 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/open-weather/project.png"
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
            <div className="col-lg-12 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/open-weather/weather-key.png"
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
            <div className="col-lg-12 mb-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/open-weather/private-key.png"
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

            {/* <div
              className="col-lg-3 "
              style={{
                paddingTop: '300px',
              }}
            ></div> */}

            <p className=" " style={{ textAlign: 'center' }}>
              {!isMobile && (
                <Link
                  href={'https://solutions.carenuity.com'}
                  target="blank"
                  className={'btn btn-lg btn-success rounded-pill'} // "btn-style2 primary wow fadeInUp p-3"
                >
                  <span className="small">
                    Enjoy more free Apps on Solution Builder
                  </span>
                </Link>
              )}

              {isMobile && (
                <a
                  href={'https://solutions.carenuity.com/'}
                  target="blank"
                  className={'btn btn-lg btn-success rounded-pill'}
                >
                  <span className="small">
                    Enjoy more free Apps on Solution Builder
                    {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                  </span>
                </a>
              )}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OpenWeatherMap;
