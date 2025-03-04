import Head from 'next/head';
import React from 'react';
import PageTitle from '../components/PageTitle';
import img1 from '../public/img/adafruit_api/step1.png';
import img2 from '../public/img/adafruit_api/step2.png';
import Image from 'next/image';

const Page = () => {
  const pageTitle = 'Get Adafruit IO API Key';
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
        links={[
          { path: '/', title: 'Home' },
          { path: '/sq-labs', title: 'Team' },
        ]}
        pageTitle={pageTitle}
        pageUrl="/adafruit-api"
      />

      <section className="overflow-hidden py-3">
        <div className="container position-relative z-index-3">
          <div className="row align-items-center about-style-03">
            <div
              className="col-lg-12 wow fadeIn"
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <h2 className="text-muted border-bottom pb-2 mb-3">
                How to get the Adafruit IO API Key
              </h2>
              <p>
                Navigate to{' '}
                <a
                  href="https://io.adafruit.com"
                  target="_blank"
                  rel="noreferrer"
                  className="link-success"
                >
                  Adafruit IO Portal
                </a>{' '}
                to begin the journey. You will have to either signIn or SignUp
                to proceed.
              </p>
            </div>
            <div
              className="col-lg-12 wow fadeIn"
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <h3>Step 1</h3>
              <Image src={img1} alt="step one" />
            </div>
            <div
              className="col-lg-12 wow fadeIn"
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <h3>Step 2</h3>
              <Image src={img2} alt="step one" />
            </div>
            <div
              className="col-lg-12 wow fadeIn mt-3"
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <h3>Complete guide</h3>
              <p className="fw-bold">
                For further reading{' '}
                <a
                  href="/docs/adafruit_IO.pdf"
                  target="_blank"
                  className="link-success"
                >
                  see this conclusive guide
                </a>
                .
              </p>
            </div>
          </div>
              <div>
                <h2>
                What is Adafruit IO?
                </h2>
                <p>A cloud platform designed specifically for IoT Applications.<br/>

                Allows users  to connect and manage their IoT devices, collect data and create 
                visual dashboards to monitor and analyze this data in real time.
                </p>
              </div>

              <div>
                <h4>
                Creating an Account on Adafruit IO
                </h4>
                <p>Go to the Adafruit IO Website: <a href='https://io.adafruit.com/'><u>https://io.adafruit.com/</u></a> 
                    Click on “Sign Up”

                </p>
              </div>

          <div className="col-lg-12 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/Adafruit_IO/slide3.png"
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
              <h4>Setting up a new feed
              </h4>
              <p>What is a Feed? A feed is a data stream that stores sensor data

              </p>
              <h6>Steps:              </h6>
              <ul>
                <li>Log in to Adafruit IO</li>
                <li>Navigate to the "Feeds" section</li>
                <li>Click "Create New Feed“</li>
                <li>Name your feed (e.g., "Temperature")</li>
              </ul>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/Adafruit_IO/slide5.png"
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
              <h4>Setting Up the Dashboard

              </h4>
              <p>What is a Dashboard?
A dashboard is a customizable interface for visualizing data


              </p>
              <h6>Steps:              </h6>
              <ul>
                <li>Go to the "Dashboards" section</li>
                <li>Click "Create a New Dashboard“</li>
                <li>Name your dashboard (e.g., “Temperature monitoring")</li>
                
              </ul>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/Adafruit_IO/slide6.png"
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
                src="/img/content/Adafruit_IO/slide7.png"
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
              <p>Select the feed you had created earlier i.e. temperature and click next.
                  Input the Block Title and Gauge Level then click create block

              </p>
              <p>Repeat the same procedure to add the Line chart block for Temperature
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/Adafruit_IO/slide8.png"
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
              <p>Repeat the same procedure to create a gauge block and Line chart block for Humidity

              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/Adafruit_IO/slide9.png"
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
                <h4>Installing the required libraries in Arduino IDE
                </h4>
                <h6>Steps:              </h6>
              <ul>
                <li>  Open Arduino IDE                </li>
                <li>Go to "Sketch" - "Include Library" - "Manage Libraries"</li>
                <li>Search for and install the required libraries</li>
                
              </ul>
              
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/Adafruit_IO/slide10.png"
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
              <h4>A snippet of the code:
              </h4>
              
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/Adafruit_IO/slide11.png"
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
                <h4>Uploading Code to the D1 Mini
                </h4>
                <h6>Steps:</h6>
              <ul>
                <li>  Connect the D1 Mini to your computer via USB
                </li>
                <li>Select the appropriate board and port in Arduino IDE
                </li>
                <li>Click the upload button to flash the code onto the D1 Mini
                </li>
                
              </ul>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/Adafruit_IO/slide12.png"
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
                src="/img/content/Adafruit_IO/slide13.png"
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
              <h4>Monitoring Data on Adafruit IO
              </h4>
              <p>Return to your Adafruit IO dashboard
              Watch the real-time data being populated in your widgets
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/Adafruit_IO/slide14.png"
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
                src="/img/content/Adafruit_IO/slide15.png"
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
                src="/img/content/Adafruit_IO/slide16.png"
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
                src="/img/content/Adafruit_IO/slide17.png"
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

      </section>
    </>
  );
};

export default Page;
