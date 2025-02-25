import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';

const Page = () => {
  const pageTitle = 'Free Offer';
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
          <div className=" mb-6">
            <h4>Level 1</h4>
            <h5>A. Hardware-Challenge (soldering)</h5>
            <p>
              Watch a{' '}
              <a
                href="https://www.youtube.com/watch?v=RHMUW-Oyl9c"
                className="text-success"
              >
                video
              </a>{' '}
              to learn more on level 1 challenge
            </p>
            <h5>Solder Triple Adapter & Familiarize with WOKWI</h5>
            <p>
              In this Level, students will begin their journey by learning basic
              soldering techniques. They will solder triple adapters and
              familiarize themselves with WOKWI, a powerful simulation tool for
              electronics and IoT projects. This level focuses on understanding
              sensor integration and building a solid foundation in hardware
              skills. By the end of this level, students will have a practical
              understanding of soldering and the ability to simulate sensor
              solutions using WOKWI. The reward for completing this level is a
              C3-Mini.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 mt-n1-9 ">
              <div
                className="e-card mb-6"
                style={{
                  boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                  height: '320px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/free-offer/sma1.png"
                  className="mt-1-9 wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',

                    animationName: 'fadeIn',
                  }}
                />
                <div
                  style={{
                    padding: '20px',
                  }}
                >
                  <p>
                    <strong>1.</strong>Attach 6 female pin-headers to the
                    Triple- Adapter.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-n1-9 ">
              <div
                className="e-card mb-6"
                style={{
                  boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                  height: '320px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/free-offer/sma2.png"
                  className="mt-1-9 wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',

                    animationName: 'fadeIn',
                  }}
                />
                <div
                  style={{
                    padding: '20px',
                  }}
                >
                  <p>
                    <strong>2.</strong>Send us a photo of your assembled Triple
                    Adapter.
                  </p>
                </div>
              </div>{' '}
            </div>

            <div className="col-lg-4 mt-n1-9 ">
              <div
                className="e-card mb-6"
                style={{
                  boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                  height: '320px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/free-offer/continue.png"
                  className="mt-1-9 wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',

                    animationName: 'fadeIn',
                  }}
                />
                <div
                  style={{
                    padding: '20px',
                  }}
                >
                  <p>
                    <strong>3.</strong>Continue the SW-Challenge to finally get
                    the free D1- / or C3-Mini shipped.
                  </p>
                </div>
              </div>
            </div>

            <div className=" mt-n1-9 mb-4">
              <p>
                <strong>TIP:</strong> place some other electronics around your
                photo to share your other electronic parts & interests with us.
              </p>
              <p>
                <strong>Note:</strong> We won&apos;t share photos containing
                private content. We&apos;ll offer you tips tailored to your
                interests based on the other things visible of your submitted
                photo.
                <strong>
                  We want to help you succeed in what you build.
                </strong>{' '}
              </p>
            </div>

            <div className="row">
              <div className="col-lg-9 ">
                <h5 className="mb-4">B. SW-Challenge (coding)</h5>
                <p>
                  <strong>1.</strong>Get familiar with{' '}
                  <a href="https://wokwi.com/" className="link-success">
                    WOKWI.com
                  </a>
                </p>

                <p>
                  <strong>2.</strong> Build your own first device on WOKWI
                  (virtually first){' '}
                </p>
                <p>
                  <strong>3.</strong>Send us that WOKWI link to qualify for the
                  next level{' '}
                </p>
                <p>
                  We&apos;ll ship a free D1- / or C3-Mini. Check YouTube for
                  Part 2.{' '}
                </p>
              </div>
              <div className="col-lg-3 mt-n1-9 ">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/free-offer/free-offer2.png"
                  className="mt-1-9 wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    width: '300px',
                    animationName: 'fadeIn',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
