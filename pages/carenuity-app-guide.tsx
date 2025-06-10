import React from 'react';
import Head from 'next/head';
import PageTitle from '../components/PageTitle';

const Page = () => {
  const pageTitle = 'Carenuity Smartphone App';
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
            <h4>Scan to Download Carenuity mobile app</h4>
            <div className="col-lg-4 mb-4">
              {/* <p>Android</p> */}
              {/* eslint-disable-next-line @next/next/no-img-element */}

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/user-guide/android.jpeg"
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
            <div className="col-lg-4 mb-4">
              {/* <p>iOS</p> */}
              {/* eslint-disable-next-line @next/next/no-img-element */}

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/user-guide/apple.jpeg"
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
            <div className="cl-lg-4"></div>

            <div className="col-lg-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <a
                href="https://play.google.com/store/apps/details?id=com.carenuity.home"
                target="_blank"
                rel="noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/user-guide/google.png"
                  className=" wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',

                    animationName: 'fadeIn',
                  }}
                />
              </a>
            </div>

            {/* <div className='col-lg-1'></div> */}
            <div className="col-lg-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <a
                href="https://apps.apple.com/ie/app/carenuity/id6472718918"
                target="_blank"
                rel="noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/user-guide/app-store.png"
                  className=" wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',

                    animationName: 'fadeIn',
                  }}
                />{' '}
              </a>
            </div>

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

            <div className="col-lg-2"></div>
            <div className="col-lg-4 mb-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.carenuity.home"
                target="_blank"
                rel="noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/user-guide/google.png"
                  className=" wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',

                    animationName: 'fadeIn',
                  }}
                />
              </a>
            </div>

            <div className="col-lg-4 mb-8">
              <a
                href="https://apps.apple.com/ie/app/carenuity/id6472718918"
                target="_blank"
                rel="noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/user-guide/app-store.png"
                  className=" wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',

                    animationName: 'fadeIn',
                  }}
                />{' '}
              </a>
            </div>

            <p style={{ textAlign: 'center' }}>
              <a
                href="https://www.chipglobe.shop/en/p/carenuity-sq-system-customizable-bundle-with-air-quality-display-and-accessories"
                target="blank"
                className={'btn btn-lg btn-success rounded-pill'}
              >
                <span className="small">Buy your first SQ-Panel now</span>
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
