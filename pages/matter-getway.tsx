import React from 'react';
import Head from 'next/head';
import PageTitle from '../components/PageTitle';

const Page = () => {
  const pageTitle = 'Matter Gateway';

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
          <div className="row">
            <h4>Connecting the green USB cable to the connector.</h4>
            <div className="col-lg-6 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/kickstarter/connection.PNG"
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
            <div className="col-lg-6 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/kickstarter/connection02.PNG"
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
