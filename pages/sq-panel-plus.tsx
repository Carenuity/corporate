import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';

// eslint-disable-next-line no-unused-vars
const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'SQ-Panel Plus';
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

      <section className="container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-20">
              <h5 className=" mb-1">Carenuity SQ-Panel Plus</h5>
              <h1>
                The world&apos;s first smart sensor display with built-in
                sensors and Matter support.
              </h1>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/sq-panel-plus/matter.png"
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
            <div className="col-lg-1 mb-20"></div>
            <div className="col-lg-4 mb-20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/sq-panel-plus/sq-panel.png"
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
            <div className=" mb-4" style={{ textAlign: 'center' }}>
              <h2>Subscription</h2>
              <p>Sign up for exclusive product launch discounts!</p>
            </div>
            <div className=" mb-20" style={{ textAlign: 'center' }}>
              <label
                className={' rounded-pill'}
                style={{ backgroundColor: '#D3D3D3' }}
              >
                <input
                  type="text"
                  placeholder="Enter your email"
                  className={'btn   rounded-pill'}
                  style={{
                    backgroundColor: '#D3D3D3',
                    textAlign: 'left',
                    width: '450px',
                    border: 'none',
                  }}
                ></input>
                <button
                  className={'btn btn-lg btn-success rounded-pill'}
                  style={{
                    width: '150px',
                  }}
                >
                  {' '}
                  Subcribe
                </button>
              </label>
            </div>
            <div className="col-lg-5 mb-6" style={{ textAlign: 'center' }}>
              <div className=" mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/sq-panel-plus/easy.png"
                  className=" wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    height: '60px',
                    animationName: 'fadeIn',
                  }}
                />{' '}
              </div>
              <h4>Super easy to use</h4>
              <p>
                Just unbox and power it. It automatically comes with proper
                settings, shows the values and alarms, which you can customize
                at any time.
              </p>
            </div>
            <div className=" col-lg-1 mb-6"></div>
            <div className="col-lg-5 mb-5" style={{ textAlign: 'center' }}>
              <div className=" mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/sq-panel-plus/acts.png"
                  className=" wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    height: '60px',
                    animationName: 'fadeIn',
                  }}
                />{' '}
              </div>
              <h4>Built-in Home Assistant</h4>
              <p>
                No Hub needed. The SQ-Panel Plus can automate your home based on
                sunrise/sunset, temperature, event triggering, and more.
              </p>
            </div>

            <div className="col-lg-5 mb-6" style={{ textAlign: 'center' }}>
              <div className="  mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/sq-panel-plus/matter3.png"
                  className=" wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    height: '60px',
                    animationName: 'fadeIn',
                  }}
                />{' '}
              </div>
              <h4>Supports Matter</h4>
              <p>Can be used with Apple Home for even more smart home magic.</p>
            </div>
            <div className=" col-lg-1 mb-6"></div>
            <div className="col-lg-5 mb-6" style={{ textAlign: 'center' }}>
              <div className="  mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/sq-panel-plus/SwitchBot.png"
                  className=" wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    height: '60px',
                    animationName: 'fadeIn',
                  }}
                />{' '}
              </div>
              <h4>Part of the Carenuity Platform</h4>
              <p>
                Can be paired with more devices like a particle-matter sensor
                etc. to provide you with more smart home solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
