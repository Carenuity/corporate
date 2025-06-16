import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';
import Link from 'next/link';

// eslint-disable-next-line no-unused-vars
const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'SQ-Labs Feature Evaluation';
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
            <div
              className="e-card mb-6"
              style={{
                boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',

                maxHeight: '800px',
                padding: '20px',
              }}
            >
              <div className="row">
                <div className="col-lg-3">
                  <video
                    src="/videos/content/sma1.mp4"
                    loop={true}
                    autoPlay={true}
                    muted
                    className="mt-1-9 wow fadeInUp w-100"
                    data-wow-delay="100ms"
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                      height: '400',
                      animationName: 'fadeIn',
                    }}
                  />
                </div>
                <div className="col-lg-9">
                  <h3 className=" mb-4">
                    Curious about new features for the SQ-Panel?
                  </h3>
                  <p>
                    <strong>
                      Install-for-Free new Features on your Evaluation Kit and
                      feedback to make it perfect.
                    </strong>
                  </p>
                  <p>
                    This is the way to get new features into your home, directly
                    from the SQ-Labs development. Are you curious about features
                    that are not yet available on your SQ-Panel? Then simply
                    install-for-free the new ones on your evaluation kit - and
                    try them out at home. We look forward to your feedback on
                    each new feature! What experiences have you had with it in
                    your everyday life at home?
                  </p>
                </div>
              </div>
            </div>

            <h3>Our motto: integrate - evaluate - advocate!</h3>
            <div className="row">
              <div className="col-md-4 mb-2">
                <div
                  className="e-card mb-6"
                  style={{
                    boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                    height: '800px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/evaluate/evaluate01.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',

                      animationName: 'fadeIn',
                    }}
                  />
                  <h4
                    style={{
                      padding: '10px',
                    }}
                  >
                    Integrate
                  </h4>
                  <p
                    style={{
                      padding: '10px',
                    }}
                  >
                    Get your Evaluation Kit, install-for-free the desired
                    application and integrate it into your home, integrate it
                    into your smart home or use it standalone (cloudfree) at
                    home, exactly in the desired and very specific place. For
                    example, For example, place it at the perfect location for
                    you, e.g. next to your bed, on your desk or on top of your
                    wardrobe or even inside something else.
                  </p>
                  <p
                    style={{
                      padding: '10px',
                    }}
                  >
                    <a href="mailto:max.mergenthaler@chipglobe.com">
                      <span className="text-success fw-bold">Contact us</span>{' '}
                      for very special places
                    </a>
                  </p>
                </div>
              </div>

              <div className="col-md-4 mb-2">
                <div
                  className="e-card mb-6"
                  style={{
                    boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                    height: '800px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/evaluate/evaluate02.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',

                      animationName: 'fadeIn',
                    }}
                  />
                  <h4
                    style={{
                      padding: '10px',
                    }}
                  >
                    Evaluate
                  </h4>
                  <p
                    style={{
                      padding: '10px',
                    }}
                  >
                    Evaluate your desired feature for the next weeks at home
                    until you are 100% happy with it, e.g. on what the SQ-Panel
                    Prototype notifies to you and that your automations work as
                    desired.SQ-Panel Credit Program:{' '}
                  </p>
                  <p
                    style={{
                      padding: '10px',
                    }}
                  >
                    Return the prototype with a money-back guarantee when buying
                    an SQ-Panel. Your prototype purchase amount will be credited
                    towards the SQ-Panel, reducing its cost. Ideally as a
                    mouse-over message for the &apos;SQ-Panel Credit
                    Program&apos;
                  </p>
                </div>
              </div>

              <div className="col-md-4 mb-2">
                <div
                  className="e-card mb-6"
                  style={{
                    boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                    height: '800px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/evaluate/evaluate03.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',

                      animationName: 'fadeIn',
                    }}
                  />
                  <h4
                    style={{
                      padding: '10px',
                    }}
                  >
                    Advocate
                  </h4>
                  <p
                    style={{
                      padding: '10px',
                    }}
                  >
                    Advocate your solution and post it on Social Media for
                    getting more people into it. Possibly your solution makes a
                    trend and becomes an asked feature for many homes.
                  </p>
                </div>
              </div>

              <div className="col-md-2 mb-6 ">
                <h6>Results</h6>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/evaluate/check1.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    height: '100px',
                    animationName: 'fadeIn',
                  }}
                />
              </div>
              <div className="col-md-6 mb-6 ">
                <h6>
                  From SQ-Panel Prototype to an implemented feature of SQ-Panel
                </h6>

                <div className="d-flex align-items-center">
                  <i className="ti-check display-26 text-primary"></i>
                  <span className="ms-3 text-dark fw-bold">
                    It works at that specific place in your home.
                  </span>
                </div>

                <div className="d-flex align-items-center">
                  <i className="ti-check display-26 text-primary"></i>
                  <span className="ms-3 text-dark fw-bold">
                    It continuously adds value over a period of time.
                  </span>
                </div>

                <div className="d-flex align-items-center ">
                  <i className="ti-check display-26 text-primary"></i>
                  <span className="ms-3 text-dark fw-bold">
                    It is interesting for more users with similar usecases.
                  </span>
                </div>
              </div>
              <div className="col-md-1 mb-6 ">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/evaluate/arrow.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    height: '120px',
                    animationName: 'fadeIn',
                  }}
                />
              </div>

              <div className="col-md-3 mb-6 ">
                <h6>Implementation of the feature</h6>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/evaluate/sq-panel.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    height: '100px',
                    animationName: 'fadeIn',
                  }}
                />
              </div>
            </div>

            <div className="mb-4">
              <h5>Eval-Kits for early bird testing of new features</h5>
              <p>
                We provide Eval-Kits in various sizes for placement at any spot
                and at any height. Which size do you prefer for evaluating the
                desired features at home?
              </p>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/evaluate/Evaluation-Kits-Overview_1.png"
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
            <div className="row">
              {/* 
              <div className="col-lg-12">
                {' '}
                <Link href="/install-for-free" className="text-success"> */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {/* <img
                    src="/img/content/evaluate/Evaluation-Kits-Overview_2.png"
                    className="mt-1-6 wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                      width: '1980px',
                      animationName: 'fadeIn',
                    }}
                  />
                </Link>
              </div> */}

              <h4 className=" mb-4">
                The Evaluation Kits come in three sizes to perfectly fit in your
                home:
              </h4>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div
                    className="e-card"
                    style={{
                      boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                      maxHeight: '1040px',
                    }}
                  >
                    <div style={{ padding: '10px' }}>
                      <div className="row">
                        <div className="col-md-4 mb-4">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/img/content/evaluate/triple-adapter.png"
                            className="wow fadeInUp"
                            data-wow-delay="100ms"
                            alt="..."
                            style={{
                              visibility: 'visible',
                              height: '190px',
                              animationDelay: '100ms',
                              animationName: 'fadeIn',
                            }}
                          />
                        </div>
                        <div className="col-md-8 mb-4">
                          <h6 className="text-success">
                            Evaluation Kit S for Standard Displays
                          </h6>
                          <p>
                            Suited for D1- and C3-Mini Boards and all Sensors
                            <br />
                            Compatible with 0.66 inch and 0.96inch Displays
                          </p>
                          <div className="row">
                            <p className="col-md-4 mb-4">
                              {!isMobile && (
                                <Link
                                  href={''}
                                  target="_blank"
                                  className={
                                    'btn btn-sm btn-success rounded-pill'
                                  }
                                >
                                  <span className="small"> Buy Now</span>
                                </Link>
                              )}

                              {isMobile && (
                                <a
                                  href={''}
                                  target="_blank"
                                  className={
                                    'btn btn-sm btn-success rounded-pill'
                                  }
                                  rel="noreferrer"
                                >
                                  <span className="small">
                                    Buy Now{' '}
                                    {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                                  </span>
                                </a>
                              )}
                            </p>
                            <p className="col-md-6 mb-4">
                              {!isMobile && (
                                <Link
                                  href={
                                    ' https://carenuity.netlify.app/c3-mini/'
                                  }
                                  target="_blank"
                                  className={
                                    'btn btn-sm btn-success rounded-pill'
                                  }
                                >
                                  <span className="small">
                                    {' '}
                                    Install for free
                                  </span>
                                </Link>
                              )}

                              {isMobile && (
                                <a
                                  href={
                                    ' https://carenuity.netlify.app/c3-mini/'
                                  }
                                  target="_blank"
                                  className={
                                    'btn btn-sm btn-success rounded-pill'
                                  }
                                  rel="noreferrer"
                                >
                                  <span className="small">
                                    Install for free{' '}
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
                <div className="col-md-6 mb-4">
                  <div
                    className="e-card"
                    style={{
                      boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                      maxHeight: '1040px',
                    }}
                  >
                    <div style={{ padding: '10px' }}>
                      <div className="row">
                        <div className="col-md-4 mb-4">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/img/content/evaluate/sensor-selection-box.png"
                            className="wow fadeInUp"
                            data-wow-delay="100ms"
                            alt="..."
                            style={{
                              visibility: 'visible',
                              height: '190px',
                              animationDelay: '100ms',
                              animationName: 'fadeIn',
                            }}
                          />
                        </div>
                        <div className="col-md-8 mb-4">
                          <h6 className="text-success">
                            Evaluation Kit as Sensor Selection Box
                          </h6>
                          <p>
                            Suited for D1- and C3-Mini Boards, including seven
                            sensors, a display and a buzzer. Compatible with
                            0.66 inch & 0.96inch Displays
                          </p>
                          <div className="row">
                            <p className="col-md-4 mb-4">
                              {!isMobile && (
                                <Link
                                  href={
                                    'https://www.chipglobe.shop/en/p/modular-c3-mini-sensor-selection-box'
                                  }
                                  target="_blank"
                                  className={
                                    'btn btn-sm btn-success rounded-pill'
                                  }
                                >
                                  <span className="small"> Buy Now</span>
                                </Link>
                              )}

                              {isMobile && (
                                <a
                                  href={
                                    'https://www.chipglobe.shop/en/p/modular-c3-mini-sensor-selection-box'
                                  }
                                  target="_blank"
                                  className={
                                    'btn btn-sm btn-success rounded-pill'
                                  }
                                  rel="noreferrer"
                                >
                                  <span className="small">
                                    Buy Now{' '}
                                    {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                                  </span>
                                </a>
                              )}
                            </p>
                            <p className="col-md-6 mb-4">
                              {!isMobile && (
                                <Link
                                  href={
                                    'https://carenuity.com/c3-mini-box-devices/'
                                  }
                                  target="_blank"
                                  className={
                                    'btn btn-sm btn-success rounded-pill'
                                  }
                                >
                                  <span className="small">
                                    {' '}
                                    Install for free
                                  </span>
                                </Link>
                              )}

                              {isMobile && (
                                <a
                                  href={
                                    'https://carenuity.com/c3-mini-box-devices/'
                                  }
                                  target="_blank"
                                  className={
                                    'btn btn-sm btn-success rounded-pill'
                                  }
                                  rel="noreferrer"
                                >
                                  <span className="small">
                                    Install for free
                                    {}
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
                <div className="col-md-6 mb-4">
                  <div
                    className="e-card"
                    style={{
                      boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                      maxHeight: '1040px',
                    }}
                  >
                    <div style={{ padding: '10px' }}>
                      <div className="row">
                        <div className="col-md-4 mb-4">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          {/* <img
                    src="/img/content/evaluate/triple-adapter.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                     height: '190px',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  /> */}
                        </div>
                        <div className="col-md-8 mb-4">
                          <h6 className="text-success">
                            Evaluation Kit L &quot;The Triple-Adapter&quot;
                          </h6>
                          <p>
                            Suited for Raspberry Pi Pico-W boards with Infineon
                            Wifi module
                            <br />
                            Compatible with 0.66 inch & 0.96 inch Displays
                          </p>
                          <div className="row">
                            <p className="col-md-4 mb-4">
                              {!isMobile && (
                                <Link
                                  href={''}
                                  target="_blank"
                                  className={
                                    'btn btn-sm btn-success rounded-pill'
                                  }
                                >
                                  <span className="small"> Buy Now</span>
                                </Link>
                              )}

                              {isMobile && (
                                <a
                                  href={''}
                                  target="_blank"
                                  className={
                                    'btn btn-sm btn-success rounded-pill'
                                  }
                                  rel="noreferrer"
                                >
                                  <span className="small">
                                    Buy Now{' '}
                                    {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                                  </span>
                                </a>
                              )}
                            </p>
                            <p className="col-md-6 mb-4">
                              {!isMobile && (
                                <Link
                                  href={''}
                                  target="_blank"
                                  className={
                                    'btn btn-sm btn-success rounded-pill'
                                  }
                                >
                                  <span className="small">
                                    {' '}
                                    Install for free
                                  </span>
                                </Link>
                              )}

                              {isMobile && (
                                <a
                                  href={''}
                                  target="_blank"
                                  className={
                                    'btn btn-sm btn-success rounded-pill'
                                  }
                                  rel="noreferrer"
                                >
                                  <span className="small">
                                    Install for free{' '}
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
                <div className="col-md-6 mb-4">
                  <div
                    className="e-card"
                    style={{
                      boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                      maxHeight: '1040px',
                    }}
                  >
                    <div style={{ padding: '10px' }}>
                      <div className="row">
                        <div className="col-md-4 mb-4">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/img/content/evaluate/xl-triple-adaptor.png"
                            className="wow fadeInUp"
                            data-wow-delay="100ms"
                            alt="..."
                            style={{
                              visibility: 'visible',
                              height: '190px',
                              animationDelay: '100ms',
                              animationName: 'fadeIn',
                            }}
                          />
                        </div>
                        <div className="col-md-8 mb-4">
                          <h6 className="text-success">
                            Evaluation Kit XL for Large Displays
                          </h6>
                          <p>
                            Suited for D1- and C3-Mini Boards and all Sensors
                            <br />
                            Compatible with large 2.6 inch and 2.8 inch Displays
                          </p>
                          <div className="row">
                            <p className="col-md-4 mb-4">
                              {!isMobile && (
                                <Link
                                  href={
                                    'https://solutions.carenuity.com/solutions/3EUP0e9QDFbzixeSbbUE'
                                  }
                                  target="_blank"
                                  className={
                                    'btn btn-sm btn-success rounded-pill'
                                  }
                                >
                                  <span className="small"> Buy Now</span>
                                </Link>
                              )}

                              {isMobile && (
                                <a
                                  href={
                                    'https://solutions.carenuity.com/solutions/3EUP0e9QDFbzixeSbbUE'
                                  }
                                  target="_blank"
                                  className={
                                    'btn btn-sm btn-success rounded-pill'
                                  }
                                  rel="noreferrer"
                                >
                                  <span className="small">
                                    Buy Now{' '}
                                    {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                                  </span>
                                </a>
                              )}
                            </p>
                            <p className="col-md-6 mb-4">
                              {!isMobile && (
                                <Link
                                  href={
                                    'https://solutions.carenuity.com/microcontrollers/4OQQy4edGswvbN6boCKw'
                                  }
                                  target="_blank"
                                  className={
                                    'btn btn-sm btn-success rounded-pill'
                                  }
                                >
                                  <span className="small">
                                    {' '}
                                    Install for free
                                  </span>
                                </Link>
                              )}

                              {isMobile && (
                                <a
                                  href={
                                    'https://solutions.carenuity.com/microcontrollers/4OQQy4edGswvbN6boCKw'
                                  }
                                  target="_blank"
                                  className={
                                    'btn btn-sm btn-success rounded-pill'
                                  }
                                  rel="noreferrer"
                                >
                                  <span className="small">
                                    Install for free{' '}
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

              <div>
                <h4>Select the right Sensor</h4>
                <p>
                  Choose one of the ready-made Single Sensor Boxes or get
                  inspired from a walk through the Show-Rooms to select the
                  sensor, microcontroller and actuator individually.
                </p>
              </div>

              <div className="col-lg-4 mb-6">
                <p>
                  {!isMobile && (
                    <Link
                      href={'/single-sensor-boxes'}
                      className={'btn btn-lg btn-success rounded-pill'}
                    >
                      <span className="small">Choose Single Sensor Boxes </span>
                    </Link>
                  )}

                  {isMobile && (
                    <a
                      href={'/single-sensor-boxes'}
                      className={'btn btn-lg btn-success rounded-pill'}
                    >
                      <span className="small">
                        Choose Single Sensor Boxes{' '}
                        {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                      </span>
                    </a>
                  )}
                </p>
              </div>
              <div className="col-lg-1 mt-3 mb-6">
                <p>
                  <strong>or</strong>
                </p>
              </div>
              <div className="col-lg-6 mb-6">
                <p>
                  {!isMobile && (
                    <Link
                      href={'/sensors'}
                      className={'btn btn-lg btn-success rounded-pill'}
                    >
                      <span className="small">Select other Sensor </span>
                    </Link>
                  )}

                  {isMobile && (
                    <a
                      href={'/sensors'}
                      className={'btn btn-lg btn-success rounded-pill'}
                    >
                      <span className="small">
                        Select other Sensor{' '}
                        {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                      </span>
                    </a>
                  )}
                </p>
              </div>
              <div>
                <h4>Housing for your device</h4>
                <p>
                  Single Sensor Boxes come with enclosure. If you want to
                  customize your device, we offer 3D-printables on Thingiverse.
                </p>
              </div>
              <div className="mb-4">
                <video
                  src="/videos/content/sq-panel-3d.mp4"
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

              <div className="col-md-4 mb-2">
                <div
                  className="e-card mb-6"
                  style={{
                    boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                    height: '700px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/evaluate/sq-panel-s-m.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',

                      animationName: 'fadeIn',
                    }}
                  />
                  <h6
                    style={{
                      padding: '10px',
                    }}
                  >
                    SQ-Panel-like Enclosure for Evaluation Kit - Size “M”
                  </h6>
                  <p
                    style={{
                      padding: '10px',
                    }}
                  >
                    A SQ-Panel-like M-sized housing with the SQ-TableStand to
                    accommodate the 66.4 mm x 66.4 mm Evaluation-Kit, that is
                    optimized to house the Triple-Adapter with Sensor, C3-Mini
                    and an 0.66 inch or the 0.96 inch OLED display. An S-sized
                    variant 64.0mm x 64.0 mm is in preparation.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-2">
                <div
                  className="e-card mb-6"
                  style={{
                    boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                    height: '700px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/evaluate/sq-panel-l.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',

                      animationName: 'fadeIn',
                    }}
                  />
                  <h6
                    style={{
                      padding: '10px',
                    }}
                  >
                    SQ-Panel-like Enclosure for Evaluation Kit - Size “L”
                  </h6>
                  <p
                    style={{
                      padding: '10px',
                    }}
                  >
                    A large SQ-Panel-like L-sized housing with the SQ-TableStand
                    to accommodate the 79.1 mm x 79.1 mm Evaluation-Kit, that is
                    optimized to house a variety of Sensors with the
                    Raspberry-Pi Pico W (Infineon Wifi) and the 0.66 inch or the
                    0.96 inch OLED display.
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-2">
                <div
                  className="e-card mb-6"
                  style={{
                    boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                    height: '700px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/evaluate/sq-panel-xl.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',

                      animationName: 'fadeIn',
                    }}
                  />
                  <h6
                    style={{
                      padding: '10px',
                    }}
                  >
                    SQ-Panel-like Enclosure for Evaluation Kit - Size “XL”
                  </h6>
                  <p
                    style={{
                      padding: '10px',
                    }}
                  >
                    The extra large SQ-Panel-like XL-sized housing with the
                    SQ-TableStand for the large 2.4- or 2.8-inch displays can
                    accommodate the 87.0 mm x 87.0 mm Evaluation-Kit. It
                    preferably gets covered with a spy mirror foil to conceal
                    the electronics and give it the appearance of a smart
                    mirror.
                  </p>
                </div>
              </div>

              <div className="col-md-4 mb-2">
                <div
                  className="e-card mb-6"
                  style={{
                    boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                    height: '550px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/evaluate/sma.PNG"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',

                      animationName: 'fadeIn',
                    }}
                  />
                  <h6 style={{ padding: '20px' }}>
                    Alternative Enclosure for Evaluation Kit – Size “S”
                  </h6>
                  <p style={{ padding: '20px' }}>
                    This enclosure is optimized to save space on your desk and
                    is first choice for beginners. It comes in variants to match
                    various sensors and accommodate the 0.66 inch or the 0.96
                    inch OLED display. You can stack it on 3D-printable
                    TableStands.
                  </p>
                </div>
              </div>

              <div className="col-md-4 mb-2">
                <div
                  className="e-card mb-6"
                  style={{
                    boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                    height: '550px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/evaluate/sq-panel03.PNG"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',

                      animationName: 'fadeIn',
                    }}
                  />
                  <h6 style={{ padding: '20px' }}>
                    Alternative Enclosure for Evaluation Kit - Size “L”
                  </h6>
                  <p style={{ padding: '20px' }}>
                    This medium-sized housing has a square shape and is
                    optimized to lie flat on the desk or stand, as shown. It is
                    also available in variants to match the sensors and
                    accommodates the 0.66 inch or the 0.96 inch OLED display. A
                    TableStand is available on request.
                  </p>
                </div>
              </div>

              <div className="col-md-4 mb-2">
                <div
                  className="e-card mb-6"
                  style={{
                    boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                    height: '550px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/evaluate/sq-panel02.PNG"
                    className=" wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                      width: '1980px',
                      animationName: 'fadeIn',
                    }}
                  />
                  <h6 style={{ padding: '20px' }}>
                    Alternative Enclosure for Evaluation Kit - Size “XL”
                  </h6>
                  <p style={{ padding: '20px' }}>
                    This square shape housing comes with a TableStand, just like
                    the SQ panel. The electronics are located next to the large
                    2.4- or 2.8-inch display, which preferably is covered with a
                    spy mirror foil to conceal the electronics and give it the
                    appearance of a smart mirror.
                  </p>
                </div>
              </div>

              <div>
                <h6>You can download the STL from here:</h6>
                <ul style={{ listStyleType: 'square' }}>
                  <li>Prototype S: Triple-Adapter</li>
                  <li>Prototype L: Standard</li>
                  <li>Protoype XL: Large</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
