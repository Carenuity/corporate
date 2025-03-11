import Head from 'next/head';
import React from 'react';
import PageTitle from '../components/PageTitle';
import img1 from '../public/img/adafruit_api/step1.png';
import img2 from '../public/img/adafruit_api/step2.png';
import Image from 'next/image';

const Page = () => {
  const pageTitle = 'Get ThinkSpeak API Key';
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
        pageUrl="/adafruit-api"
      />

      <section className="overflow-hidden py-3">
        <div className="container position-relative z-index-3">
          <div className="row align-items-center about-style-03">
            <div
              className="col-lg-12 wow fadeIn"
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <h2 >
                How to get the ThinkSpeak API Key
              </h2>
              <p>
                Navigate to{' '}
                <a
                  href="https://thingspeak.mathworks.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="link-success"
                >
                  ThinkSpeak Portal
                </a>{' '}
                to begin the journey. You will have to either signIn or SignUp
                to proceed.
              </p>
            </div>
            <div
              className="col-lg-12 wow fadeIn"
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <h3>Step 1</h3>
              <div className="col-lg-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/home-challenge/level1.jpeg"
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
              <h3>Step 2</h3>
              <div className="col-lg-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/home-challenge/lvel1.png"
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
              <h3>Complete guide</h3>
              <p className="fw-bold">
                For further reading{' '}
                <a
                  href="/docs/thingspeak.pdf"
                  target="_blank"
                  className="link-success"
                >
                  see this conclusive guide
                </a>
                .
              </p>
            </div>
          </div>
       
        </div>
      </section>
    </>
  );
};

export default Page;
