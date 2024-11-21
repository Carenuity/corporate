import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PageTitle from '../components/PageTitle';

const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'Carenuity app user guide';
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
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/user-guide/intro.png"
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
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/user-guide/goal.png"
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
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/user-guide/guide.png"
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
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/user-guide/ux.png"
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
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/user-guide/ux2.png"
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
            <p style={{ textAlign: 'center' }}>
              {!isMobile && (
                <Link
                  href="https://play.google.com/store/apps/details?id=com.carenuity.home&hl=de"
                  target="_blank"
                  className={'btn btn-lg btn-success rounded-pill'}
                >
                  <span className="small">Download the app</span>
                </Link>
              )}

              {isMobile && (
                <a
                  href="https://play.google.com/store/apps/details?id=com.carenuity.home&hl=de"
                  target="_blank"
                  className={'btn btn-lg btn-success rounded-pill'}
                  rel="noreferrer"
                >
                  <span className="small">
                    Download the app{' '}
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

export default Page;
