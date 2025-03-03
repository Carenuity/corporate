import Head from 'next/head';
import React from 'react';
import PageTitle from '../components/PageTitle';
import img1 from '../public/img/content/open-weather/ow-1.png';
import img2 from '../public/img/content/open-weather/ow-2.png';
import img3 from '../public/img/content/open-weather/ow-3.png';
import img4 from '../public/img/content/open-weather/ow-4.png';
import img5 from '../public/img/content/open-weather/ow-5.png';
import Image from 'next/image';

const OpenWeatherMap = () => {
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
        pageUrl="/AI-Program-Kenya"
      />

<section className="pt-4">
        <div className="container">
          <div className="row">
            <h4>  How to get the OpenWeatherMap API Key</h4>
            <p>GWeather is a command-line interface (CLI) written in Golang that provides 
              weather forecasts using the WeatherAPI from RapidAPI.</p>
              <div>
              <h4> Get Weather KEY Tutorial</h4>

            <p><strong>Register for a Weather account</strong></p>
              <p>Register at <a href='https://id.gweather.com/#/register'>https://id.gweather.com/#/register</a>
              Before registering, you need to switch back to your own WIFI or traffic data, 
              because you are now connected to the HXFB-Weather Clock hotspot is not available 
              to the Internet, it is recommended that the registration operation on the computer!</p>
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
            <div className="col-lg-12 mb-4">
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

            <div
              className="col-lg-3 "
              style={{
                paddingTop: '300px',
              }}
            >
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OpenWeatherMap;
