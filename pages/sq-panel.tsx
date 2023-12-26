import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';

const SqPanel = () => {
  const pageTitle = 'SQ Panel';
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
        prevPage="Install For Free"
        prevPageUrl="/install-for-free"
        pageTitle={pageTitle}
        pageUrl="/sensors"
      />

      <section className="pt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mt-n1-9 mb-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/SQ-Panel-frontview.webp"
                className="mt-1-9 wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
            </div>
            <div className="col-lg-10 mt-n1-9 mb-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <video
                src="/videos/content/SQ-Panel_on_TableStand.mp4"
                loop={true}
                autoPlay={true}
                className="mt-1-9 wow fadeInUp w-100"
                data-wow-delay="100ms"
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
            </div>
            <div className="col-lg-10 mt-n1-9">
              <p className="mt-5 fw-bold h5 text-dark">Launching in 2024...</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SqPanel;
