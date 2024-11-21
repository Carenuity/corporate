import React from 'react';
import Head from 'next/head';
import PageTitle from '../../../components/PageTitle';

const Page = () => {
  const pageTitle = 'Press Materials';
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
            <h4>Press Materials</h4>
            <div className="col-lg-12 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/haw-press/press1.png"
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
                src="/img/content/haw-press/press2.png"
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
              }} */}
            {/* > */}
            {/* <p>
                {!isMobile && (
                  <Link
                    href={'/home-challenge/thws'}
                    className={'btn btn-lg btn-success rounded-pill'}
                  >
                    <span className="small">Back to startpage</span>
                  </Link>
                )} */}

            {/* {isMobile && (
                  <a
                    href={'/home-challenge/thws'}
                    className={'btn btn-lg btn-success rounded-pill'}
                  >
                    <span className="small">
                      Back to startpage{' '}
                      <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
            {/* </span>
                  </a>
                )}
              </p> */}
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
