import Head from 'next/head';
import React from 'react';
import PageTitle from '../components/PageTitle';

const OpenWeatherMap = () => {
  const pageTitle = 'Get OpenWeather API Key';
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
        <title>{pageTitle}</title>
      </Head>

      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        prevPage='Home'
        prevPageUrl='/'
        pageTitle={pageTitle}
        pageUrl='/AI-Program-Kenya'
      />

      <section className='overflow-hidden py-3'>
        <div className='container position-relative z-index-3'>
          <div className='row align-items-center about-style-03'>
            <div
              className='col-lg-12 wow fadeIn'
              data-wow-delay='200ms'
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <h2 className='text-muted border-bottom pb-2 mb-3'>
                How to get the OpenWeatherMap API Key
              </h2>
              <img src='/img/content/open-weather/ow-1.png' alt='' />
            </div>
            <div
              className='col-lg-12 wow fadeIn'
              data-wow-delay='200ms'
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <img src='/img/content/open-weather/ow-2.png' alt='' />
            </div>
            <div
              className='col-lg-12 wow fadeIn'
              data-wow-delay='200ms'
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <img src='/img/content/open-weather/ow-3.png' alt='' />
            </div>
            <div
              className='col-lg-12 wow fadeIn'
              data-wow-delay='200ms'
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <img src='/img/content/open-weather/ow-4.png' alt='' />
            </div>
            <div
              className='col-lg-12 wow fadeIn'
              data-wow-delay='200ms'
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <img src='/img/content/open-weather/ow-5.png' alt='' />
              <p className='my-3 border-5 border-start border-warning ps-3'>
                Thanks to{' '}
                <a
                  href='https://docs.thingpulse.com/guides/wifi-color-display-kit'
                  target='_blank'
                  rel='noreferrer'
                >
                  Thing Pulse
                  <i className='fa-solid fa-up-right-from-square ms-2 small me-1 text-success'></i>
                </a>
                & visit their pages for more projects with their wonderful Kits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OpenWeatherMap;
