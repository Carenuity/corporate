import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';

const Page = () => {
  const pageTitle = 'SQ-Power';
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
        links={[{ path: '/', title: 'Home' }]}
        pageTitle={pageTitle}
        pageUrl="/sq-power"
      />

      <section className="pt-4">
        <div className="container">
          <h4 className=" mb-3">High quality wall mount power module</h4>
          <div
            className="e-card mb-6"
            style={{
              boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
              height: '500px',
              padding: '20px',
            }}
          >
            <div className="row">
              <div className=" mb-5">
                <h5>
                  <strong>Top side</strong> of the SQ-Power with 2x4pin Socket
                  for attaching the SQ-Panel
                </h5>
              </div>

              <div className="col-lg-4 mt-n1-9 mb-5">
                <div className=" mb-4">
                  <h6>Basic Information</h6>
                  <strong>Product series:</strong>
                  <br />
                  <strong>Type:</strong>

                  <br />

                  <strong>Voltage:</strong>
                  <br />
                  <strong>Max power:</strong>
                  <br />
                  <strong>Safety standard:</strong>
                  <br />
                  <strong>Installation category:</strong>
                  <br />
                  <strong>Certification:</strong>
                </div>

                <div className="col-lg-6 mb-5">
                  <h6>Working Environment</h6>
                  <strong>Applicable place:</strong>
                  <br />
                  <strong>Working temperature:</strong>
                  <br />
                  <strong>Working humidity:</strong>
                  <br />
                  <strong>Certification:</strong>
                  <br />
                </div>
              </div>

              <div className="col-lg-4 mt-n1-9 mb-5">
                <div className=" mb-4">
                  <br />
                  Wall mounting power module
                  <br />
                  Flyback
                  <br />
                  85-265 VAC 50/60Hz
                  <br />
                  5W 1A
                  <br />
                  EN 60669-2-5
                  <br />
                  III
                  <br />
                  CE/ROHS/WEEE
                  <br />
                </div>

                <div className=" mb-4">
                  <br />
                  Indoor
                  <br />
                  -40 ~ 80 °C
                  <br />
                  Up to 90 % RH
                  <br />
                  CE/ROHS/WEEE
                  <br />
                </div>
              </div>
              <div className="col-lg-4 mt-n1-9 ">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/sq-power/sq-power-front.png"
                  className="mt-1-9 wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    height: '350px',
                    animationName: 'fadeIn',
                  }}
                />
              </div>
            </div>
          </div>

          <div
            className="e-card mb-6"
            style={{
              boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
              height: '380px',
              padding: '20px',
            }}
          >
            <div className="row mb-5">
              <div className=" mb-5">
                <h5>
                  <strong>Bottom side</strong> of the SQ-Power with terminals to
                  connect 22V cables for domestic installations.
                </h5>
              </div>

              <div className="col-lg-4 mt-n1-9 mb-5">
                <div className=" mb-5">
                  <h6>Appearance</h6>

                  <strong>Weight:</strong>
                  <br />
                  <strong>Casing materials:</strong>
                  <br />
                </div>

                <div>
                  <h6>Installation</h6>

                  <strong>Installation method:</strong>
                  <br />
                  <strong>Installation type:</strong>
                  <br />
                  <strong>Wiring way:</strong>
                  <br />
                  <strong>Wire diameter:</strong>
                  <br />
                </div>
              </div>

              <div className="col-lg-4 mt-n1-9 mb-5">
                <div className=" mb-5">
                  <br />
                  49g
                  <br />
                  PCLEXAN121R
                  <br />
                </div>
                <div>
                  <br />
                  Flush mounting box
                  <br />
                  Screws installation
                  <br />
                  N and L<br />
                  0.75 - 2.5 mm2
                  <br />
                </div>
              </div>

              <div className="col-lg-4 mt-n1-9 ">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/sq-power/sq-power-back.png"
                  className="mt-1-9 wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    height: '250px',
                    animationName: 'fadeIn',
                  }}
                />
              </div>
            </div>
          </div>

          {/* How sq-power works*/}

          <div className=" mb-2">
            <h5>How does Sq-Power work? </h5>
            <p>
              You flash mount your SQ-Power on the wall instead of nailing the
              SQ-Panel table stand to the wall.
            </p>
            <p>
              On the left side of the video is the SQ-Panel. The black clip on
              the sq-panel helps to clip the sq-power inside the wall.
            </p>
          </div>

          <div className="row">
            <div className=" col-lg-12 mt-n1-9 mb-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <video
                src="/img/content/sq-power/sq-power.mp4"
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
            <p>
              {' '}
              It also will help you to maintain your house aesthetics for their
              are no cables required.
            </p>
            <p> This is how neat your house will look.</p>
            <div className="col-lg-6 mt-n1-9 mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/sq-power/sq-power.png"
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
            <div className="col-lg-6 mt-n1-9 mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/sq-power/sq-power2.png"
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
          </div>

          <div className="row">
            <h5>SQ-Power (Tecnical Drawings)</h5>
            <br />
            <div className="col-lg-6 ">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/sq-power/sq-powerdrawing1.png"
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
            <div className="col-lg-6 ">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/sq-power/sq-powerdrawing2.png"
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
