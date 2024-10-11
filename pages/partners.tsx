import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';
import Link from 'next/link';

const Page = () => {
  const pageTitle = 'Partners';
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
          <h4 className="mb-6 ">
            Dreaming of owning your own business? Why not take the leap and
            start building it with Carenuity S-M-A?
          </h4>

          <hr className="mb-6 " />
          <h4>Sales Partners</h4>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '280px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/partners/ebay.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    width: '420px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />

                <div style={{ padding: '10px' }}>
                  <h6>Italian eBay-Shop</h6>
                  <a href="https://www.ebay.it/itm/315504989636">
                    <p className="text-success">
                      https://www.ebay.it/itm/315504989636
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '280px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/partners/openlab.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    width: '420px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />

                <div style={{ padding: '10px' }}>
                  <h6>Shenzhen & Shanghai</h6>

                  <a href="https://openelab.io/de" className="text-success">
                    <p className="text-success">https://openelab.io/de</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '280px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/home-challenge/gray.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    width: '420px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />

                <div style={{ padding: '10px' }}>
                  <h6>Kenya Sleep-Tracking</h6>
                  <a href="">
                    <h6 className="text-success">Url</h6>
                  </a>
                </div>
              </div>
            </div>

            <h4>Technology Partners</h4>
            <div className="col-md-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '380px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/partners/openlab.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    width: '420px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />

                <div style={{ padding: '10px' }}>
                  <h6>Infineon Technologies AG</h6>
                  <p>On Autonomous Car Project for Artificial Intelligence</p>

                  <a
                    href="https://www.infineon.com/cms/en/product/promopages/autonomous-driving-car/"
                    className="text-success"
                  >
                    <p className="text-success">
                      1. Promopages autonomous-driving-car
                    </p>
                  </a>
                  <a
                    href="https://community.infineon.com/t5/Projects/Autonomous-Driving-Car/ba-p/403195#"
                    className="text-success"
                  >
                    <p className="text-success">
                      2. Projects Autonomous-Driving-Car
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '380px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/partners/bosch.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    width: '420px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />

                <div style={{ padding: '10px' }}>
                  <h6>Bosch</h6>

                  <a
                    href="https://www.bosch-sensortec.com/"
                    className="text-success"
                  >
                    <p className="text-success">
                      https://www.bosch-sensortec.com/
                    </p>
                  </a>
                </div>
                
              </div>
            </div>
            <Link href="/partners-program" className="text-success">
                    <h6 className="text-success"><u>Check out our partners program</u></h6>
                  </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
