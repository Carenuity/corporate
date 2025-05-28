import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';
import Link from 'next/link';

// eslint-disable-next-line no-unused-vars
const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'AI-Assisted Devices at your fingertip';
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
            <h4>
              AI-assisted devices
              {/* Intelligent Radar Device for Preventing Sudden Infant Death
              Syndrome (SIDS) */}
            </h4>

            {/* <p>
              Our cutting-edge radar device is designed to help prevent Sudden
              Infant Death Syndrome (SIDS) by continuously monitoring your
              baby&apos;s vital signs without physical contact. Utilizing
              advanced radar technology, it detects subtle movements and
              breathing patterns, providing real-time alerts to parents and
              caregivers if any irregularities are detected. This non-invasive
              solution ensures your baby&apos;s safety and gives you peace of
              mind, knowing that your little one is being closely monitored
              around the clock.
            </p> */}

            <p>
              AI-assisted Carenuity devices combine cutting edge sensor
              technology with artificial intelligence to gather, process, and
              analyze data from their environment. These sensors can detect
              various physical parameters such as temperature, motion, light,
              and more, and use AI to make intelligent decisions based on the
              data collected.
            </p>

            <div>
              <h4>Our featured Sensors</h4>
              <ul>
                <li>
                  <h5>Radar Sensor</h5>{' '}
                </li>
              </ul>
              <p>
                A radar sensor is a device that uses radio waves to detect
                [stationary, approaching, departing, missing] objects and
                measure their distance, speed, and other characteristics, in
                instance segmentation of an area.
                <br />
                Take a look to the radars that we use in our projects:
              </p>
            </div>

            <div className="col-lg-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '430px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/ai-assisted/radar-sensor1.jpeg"
                  className=" wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',

                    animationName: 'fadeIn',
                  }}
                />

                <a
                  href="https://carenuityblog.wixsite.com/embedded-ai-journal/post/template-how-to-write-a-tips-blog-post-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5 style={{ padding: '10px' }}>
                    <u>
                      A Beginner&apos;s Guide to HLK-LD2410C 24GHz Radar Sensor
                    </u>
                  </h5>
                </a>

                <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                  Today, let&apos;s delve into the fascinating world of the
                  HLK-LD2410, a 24GHz Human Presence .....
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '430px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/ai-assisted/radar-sensor2.jpeg"
                  className=" wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',

                    animationName: 'fadeIn',
                  }}
                />

                <a
                  href="https://carenuityblog.wixsite.com/embedded-ai-journal/post/discovering-the-ld2410c-radar-sensor"
                  className="text-success"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5 style={{ padding: '10px' }}>
                    <u>Discovering the LD2410C Radar Sensor</u>
                  </h5>
                </a>

                <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                  What if you could see through walls, fog, and darkness, with
                  accuracy and speed? This has been made possible thanks .....
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '430px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/ai-assisted/esp32-cam1.jpeg"
                  className=" wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    width: '100%',
                    animationName: 'fadeIn',
                  }}
                />

                <a
                  href="https://carenuityblog.wixsite.com/embedded-ai-journal/post/using-the-bgt60ltr11-radar-shield2go-with-esp32-for-ai-applications"
                  className="text-success"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5 style={{ padding: '10px' }}>
                    <u>
                      Using the BGT60LTR11 Radar Shield2Go with ESP32 for AI
                      Applications
                    </u>
                  </h5>
                </a>

                <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                  The BGT60LTR11 Radar Shield2Go is a compact and versatile
                  radar sensor.....
                </p>
              </div>
            </div>
            <iframe
              loading="lazy"
              className="mb-4"
              src="https://www.canva.com/design/DAGZXDtiuow/MkQupxfpCixuz8NGVmZ37Q/view?embed"
              width="100%"
              height="600px"
            ></iframe>
            <div>
              <ul>
                <li>
                  <h5> ESP32-Cam</h5>
                </li>
              </ul>
              <p>
                The ESP32-CAM is a compact, low-cost module that combines an
                ESP32-S microcontroller with an OV2640 camera. In the field of
                object detection, it is particularly useful due to its built-in
                Wi-Fi and Bluetooth capabilities, allowing for wireless image
                transmission and processing. By leveraging libraries like OpenCV
                and machine learning models, the ESP32-CAM can perform real-time
                object detection and identification. This makes it ideal for
                applications in home automation, security systems, and IoT
                projects where capturing and analyzing visual data is essential.
              </p>
            </div>

            <div className=" mb-10">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  // height: '680px',
                  maxHeight: '1O00px',
                  padding: '20px',
                }}
              >
                <div className="row">
                  <div className="col-md-2 mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/img/content/ai-assisted/esp32-cam2.jpeg"
                      className=" wow fadeInUp"
                      data-wow-delay="100ms"
                      alt="..."
                      style={{
                        visibility: 'visible',
                        animationDelay: '100ms',
                        // width: '200px',
                        animationName: 'fadeIn',
                      }}
                    />
                  </div>
                  <div className="col-md-10 mb-4">
                    <a
                      href="https://carenuityblog.wixsite.com/embedded-ai-journal/post/template-how-to-write-a-tips-blog-post"
                      className="text-success"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h5 style={{ padding: '10px' }}>
                        <u>
                          Turning Your ESP32-CAM into a Smart Object Detector
                          with Edge Impulse
                        </u>
                      </h5>
                    </a>

                    <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                      Hello, tech enthusiasts, welcome to the AI Journal
                      tutorial! In this blog post, we&apos;re diving into the
                      exciting world of creating your own object detection model
                      on the ESP32-CAM using Edge.....
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h4 className="mb-4">Autonomous Driving Car</h4>
            <div className="row">
              <div className="col-md- mb-4">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    maxHeight: '1O00px',
                    padding: '20px',
                  }}
                >
                  <div className="row">
                    <div className="col-md-4 mb-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/img/content/autonomous/shopcar.png"
                        className="wow fadeInUp"
                        data-wow-delay="100ms"
                        alt="..."
                        style={{
                          visibility: 'visible',
                          //  width: '420px',
                          animationDelay: '100ms',
                          animationName: 'fadeIn',
                        }}
                      />
                    </div>
                    <div className="col-md-8 mb-4">
                      <p className="mb-2">
                        In the world of automotive innovation, history often
                        serves as a foundation for future advancements. The
                        Autonomous Driving Infineon Car, built by
                        ChipGlobe&apos;s Carenuity team, is a testament to this
                        principle. This cutting-edge vehicle not only embodies
                        the latest in autonomous driving technology but also
                        pays homage to the legendary Schaeffler FAG Model MF3,
                        presented in June 2009. The shark-like design of the
                        MF3, a symbol of speed and precision, has been
                        reincarnated in 2025 in a 1:10 ratio model, showcasing
                        the seamless blend of past and present engineering
                        marvels.
                      </p>
                      <p className="mb-2">
                        The unveiling of the Schaeffler FAG Model MF3 took place
                        at an evening event at the foyer of Schaeffler. This
                        event was graced by notable figures such as Dr. Grunau,
                        a former representative of the management board of FAG
                        Schaeffler Group Industry, and Dipl.-Ing. Seubert, the
                        former chairman of the Unterfranken district association
                        of the Verein Deutscher Ingenieure (VDI).
                      </p>
                      <p className="col-md-4 ">
                        {!isMobile && (
                          <Link
                            href={'/product/autonomous-driving-car'}
                            target="_blank"
                            className={'btn btn-sm btn-success rounded-pill'}
                          >
                            <span className="small"> Learn more</span>
                          </Link>
                        )}

                        {isMobile && (
                          <a
                            href={'/product/autonomous-driving-car'}
                            target="_blank"
                            className={'btn btn-sm btn-success rounded-pill'}
                            rel="noreferrer"
                          >
                            <span className="small">
                              Learn more{' '}
                              {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                            </span>
                          </a>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
