import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';

const Page = () => {
  const pageTitle = 'API-usage';
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
        links={[{ path: '/', title: '' }]}
        pageTitle={pageTitle}
        pageUrl=""
      />

      <section className="pt-4">
        <div className="container">
          <h5>Level 3</h5>
          <p>
            Watch a{' '}
            <a href="" className="text-success">
              video
            </a>{' '}
            to learn more on level 3 challenge
          </p>

          <div
            className="e-card mb-6"
            style={{
              boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
              height: '200px',
              padding: '20px',
            }}
          >
            <div className="row">
              <div className="col-lg-10 ">
                <p>
                  The <strong>Solution Builder</strong> is a tool designed to
                  help users create customized sensor solutions for monitoring
                  various environments. It allows you to build devices that can
                  sense and monitor vital signs, air quality, and other
                  environmental factors. The tool supports a wide range of
                  sensors, microcontrollers, and actuators, enabling the
                  creation of over 1500 different solutions.
                </p>
              </div>
              <div className="col-lg-2 mt-n1-9 ">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/free-offer/solution.jpeg"
                  className="mt-1-9 wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    width: '150px',
                    animationName: 'fadeIn',
                  }}
                />
              </div>
            </div>
          </div>

          <div>
            <p>Use own API keys</p>
            <p>Enter own binary</p>
            <p>Post on LinkedIn</p>
            <p>
              <strong>Reward:</strong> DS18B20
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
