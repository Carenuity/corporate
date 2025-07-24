import React from 'react';
import Head from 'next/head';
import PageTitle from '../components/PageTitle';

const Page = () => {
  const pageTitle = 'SQ-Panel User Guide ';
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
          <h4>SQ-Panel User Guide </h4>
          <div className='row'>
             
           <div className="col-lg-10 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/sq-panel-guide/guide1.JPEG"
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
             <div className="col-lg-10 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/sq-panel-guide/guide2.JPEG"
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
