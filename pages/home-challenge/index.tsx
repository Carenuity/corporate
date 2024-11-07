import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PageTitle from '../../components/PageTitle';
const Page = ({ isMobile }: { isMobile: boolean }) => {

  const pageTitle = 'Home Challenge';
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
          <div
            className="e-card mb-6"
            style={{
              boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
              maxHeight: '1O00px',
              padding: '20px',
            }}
          >
            <div className="row">
              <div className="col-lg-9 ">
                <h5>Home Challenge</h5>
                <p>
                  Showcase your skills and accept the Home Challenge to start
                  your journey. For those in Munich, Mombasa, Thessaloniki,
                  Hamburg, Trieste, Nairobi, Wuerzburg, Belgrade, Patras or Kisii get ready
                  to experience this at no cost. Claim your free triple adapter
                  now and join the community!
                </p>
                <p>
                  Welcome to a journey of building your own device within 3
                  minutes to immediately sense what&apos;s going on.
                </p>

                <p>
                  <strong>
                    Becoming a distinguished AI talent is a journey worth
                    taking.
                  </strong>
                </p>
              </div>
              <div className="col-lg-3 mt-n1-9 ">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/home-challenge/free-offer1.png"
                  className="mt-1-9 wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    width: '260px',
                    animationName: 'fadeIn',
                  }}
                />
              </div>
            </div>
          </div>

          <div className=" mb-6">
            <h5 className=" mb-3">IoT Smart Home Challenge Overview</h5>
            <p>
              The IoT Smart Home Challenge is a structured program designed to
              guide students through progressively complex tasks in the realm of
              IoT and smart home devices. Targeted at beginners with basic
              knowledge in electronics and programming, this challenge aims to
              enhance both technical skills and practical knowledge. Each level
              builds on the previous one, ensuring a comprehensive learning
              experience that is both educational and motivational. The
              challenge covers a wide range of topics, from basic soldering and
              simulation to advanced machine learning and image recognition.
            </p>
          </div>

          <div>
            <h5 className=" mb-3">Preview on Talents Walkthrough</h5>
            <p>
              The <strong>Talents&apos; </strong>Walkthrough overview for the
              Home Challenge is a guide designed to help users navigate and
              complete the five levels of the Home Challenge Journey offered by
              Carenuity. This guide includes step-by-step instructions, tips,
              and strategies to ensure users can successfully progress through
              each level.
            </p>
            <p>Every level you complite you get a give away</p>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '530px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/home-challenge/level1.png"
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
                  <Link href="/home-challenge/level-1" className="text-success">
                    <h6 className="text-success">Level 1</h6>
                  </Link>
                  <p>
                    This level focuses on understanding electronic connections,
                    building a foundation in hardware skills. By the end of this
                    level, students have a practical understanding of soldering
                    and the ability to simulate sensor solutions using WOKWI
                  </p>
                  <p className='mb-4'><strong>Reward:</strong> C3-Mini</p>
                  
                  <p className='mb-4'>
                {!isMobile && (
                  <Link
                    href={'/home-challenge/level-1'}
                    className={'btn btn-sm btn-success rounded-pill'}
                  >
                    <span className="small"> Learn more</span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'/home-challenge/level-1'}
                    className={'btn btn-sm btn-success rounded-pill'}
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

            <div className="col-md-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '530px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/home-challenge/level2.png"
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
                  <Link
                    href="/home-challenge/level-2"
                    className="text-success"
                    style={{ textUnderlinePosition: 'under' }}
                  >
                    <h6 className="text-success">Level 2</h6>
                  </Link>
                  <p>
                    In this level, PCB design modification skills are practiced
                    using the KiCAD tool. Upon completion of this course,
                    students will be able to update and store a PCB design and
                    furthermore monitor the pins of a microcontroller live on
                    their smartphone.
                  </p>
                  <p className='mb-4'><strong>Reward:</strong> 0.66 / 0.96 OLED Display</p>
                  
                  <p className='mb-4'>
                {!isMobile && (
                  <Link
                    href={'/home-challenge/level-2'}
                    className={'btn btn-sm btn-success rounded-pill'}
                  >
                    <span className="small"> Learn more</span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'/home-challenge/level-2'}
                    className={'btn btn-sm btn-success rounded-pill'}
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
            <div className="col-md-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '530px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/home-challenge/level3.png"
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
                  <Link href="/home-challenge/level-3">
                    <h6 className="text-success">Level 3</h6>
                  </Link>
                  <p>
                    The third level encourages students to share their success
                    within the solution builder community. The focus is on
                    developing coding skills in Arduino, optimizing sketches by
                    AI, and leveraging API integrations to enhance functionality
                    of own Apps.
                  </p>
                  <p className='mb-4'><strong>Reward:</strong> Sensor DS18B20 or Oximeter Sensor</p>
                  
                  <p className='mb-4'>
                {!isMobile && (
                  <Link
                    href={'/home-challenge/level-3'}
                    className={'btn btn-sm btn-success rounded-pill'}
                  >
                    <span className="small"> Learn more</span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'/home-challenge/level-3'}
                    className={'btn btn-sm btn-success rounded-pill'}
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
            <div className="col-md-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '700px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/home-challenge/level4.png"
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
                  <Link href="/home-challenge/level-4">
                    <h6 className="text-success">Level 4</h6>
                  </Link>
                  <p className='mb-9'>
                    This level not only enhances students&apos; technical skills
                    in 3D modelling and rendering, but also encourages
                    creativity and innovation in designing custom enclosures for
                    their rendered electronics. By mastering this level,
                    students will be able to create professional-looking PCBs &
                    enclosures that enhance the acceptance and aesthetics of
                    their IoT devices.
                  </p>
                  <p className='mb-8'><strong>Reward:</strong> 25% voucher for ChipGlobe.shop</p>
                  
                  <p className='mb-4'>
                {!isMobile && (
                  <Link
                    href={'/home-challenge/level-4'}
                    className={'btn btn-sm btn-success rounded-pill'}
                  >
                    <span className="small"> Learn more</span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'/home-challenge/level-4'}
                    className={'btn btn-sm btn-success rounded-pill'}
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

            <div className="col-md-4 mb-4">
              <div
                className="e-card "
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '700px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/home-challenge/level05.png"
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
                  <Link href="/home-challenge/level-5" className="text-success">
                    <h6 className="text-success">Level 5</h6>
                  </Link>
                  <p>
                    Level 5 focuses on recording and analyzing sensor data.
                    Students commission a sensor device, visualize and analyze
                    its data in a database in order to later develop algorithms
                    for machine learning and predictive models. The focus is on
                    the selection of a suitable database for target achievement
                    and automation in real time. At the end of this level,
                    students will implement a data logger to use the data for
                    smart AI-assisted solutions.
                  </p>
                  <p className='mb-4'><strong>Reward:</strong> ESP32-CAM with Dual-Adapter for 0.66
                  OLED plus 2 years free access to SQ-Cloud (Google Firebase)
                  for data analysis / AI</p>
                  
                  <p>
                {!isMobile && (
                  <Link
                    href={'/home-challenge/level-5'}
                    className={'btn btn-sm btn-success rounded-pill'}
                  >
                    <span className="small"> Learn more</span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'/home-challenge/level-5'}
                    className={'btn btn-lg btn-success rounded-pill'}
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
            <div className="col-md-4 mb-4">
              <div
                className="e-card "
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '700px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/home-challenge/level06.png"
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
                  <Link href="/home-challenge/level-6" className="text-success">
                    <h6 className="text-success">Level 6</h6>
                  </Link>
                  <p className='mb-15'>
                    This level covers data acquisition, model training,
                    deployment and AI-assisted edge computing using Edge Impulse
                    for object detection. Students will learn to describe,
                    promote and optionally market their AI-assisted device on a
                    sharing platform.
                  </p>
                  <p className='mb-4'><strong>Reward:</strong> Own website, free stocking & sales of
                  5 devices, incl. fulfillment, getting 100% sales profit.</p>
                  
                  <p>
                {!isMobile && (
                  <Link
                    href={'/home-challenge/level-6'}
                    className={'btn btn-sm btn-success rounded-pill'}
                  >
                    <span className="small"> Learn more</span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'/home-challenge/level-6'}
                    className={'btn btn-lg btn-success rounded-pill'}
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
          <div className="row">
            
              <p>
                {!isMobile && (
                  <Link
                    href={'/home-challenge/why-should-I-be-a-professor'}
                    
                  >
                    <u className="small">Why should I be a professor</u>
                  </Link>
                )}

                
                
              </p>
          
           
              <p>
                {!isMobile && (
                  <Link
                    href={'/home-challenge/why-should-I-become-a-sponsor'}
                  >
                    <u className="small"> Why should I become a sponsor</u>
                  </Link>
                )}

                
              </p>
         
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Page;
