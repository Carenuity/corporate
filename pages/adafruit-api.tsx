import Head from 'next/head';
import React from 'react';
import PageTitle from '../components/PageTitle';
import img1 from '../public/img/adafruit_api/step1.png';
import img2 from '../public/img/adafruit_api/step2.png';
import Image from 'next/image';

const Page = () => {
  const pageTitle = 'Get Adafruit IO API Key';
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
              <h2 className="text-muted border-bottom pb-2 mb-3">
                How to get the Adafruit IO API Key
              </h2>
              <p>
                Navigate to{' '}
                <a
                  href="https://io.adafruit.com"
                  target="_blank"
                  rel="noreferrer"
                  className="link-success"
                >
                  Adafruit IO Portal
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
              <Image src={img1} alt="step one" />
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
              <h3>Step 2</h3>
              <Image src={img2} alt="step one" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
