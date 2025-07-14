import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';
import { useContext } from 'react';
import { LanguageSwitchContext } from '../components/context/LanguageSwitch';
import Translatable from '../components/Translatable';
import Link from 'next/link';

const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'SQ-Power';
  const { state } = useContext(LanguageSwitchContext);
  return (
    <>
      <Translatable />
      <Head>
        <meta
          name="keywords"
          content="Carenuity ChipGlobe Electronics Embedded Systems"
        />
        <meta
          name="description"
          content={`We're Delivering Peace-in-Mind by Vital and Environmental Sensing and Care that you See what No Else will See.`}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Product',
              name: 'SQ-Power',
              image:
                'https://carenuity.netlify.app/img/content/sq-power/sq-power-main.jpg',
              description:
                'SQ-Power is a smart panel designed for power consumption monitoring, energy optimization, and safety management in modern buildings and industrial setups.',
              sku: 'CSB-SQP001',
              brand: {
                '@type': 'Brand',
                name: 'Carenuity',
              },
              offers: {
                '@type': 'Offer',
                priceCurrency: 'EUR',
                price: '53.49',
                availability: 'https://schema.org/InStock',
                url: 'https://carenuity.netlify.app/sq-power',
              },
            }),
          }}
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
              maxHeight: '1500px',
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
              <div className="col-lg-4 mt-n1-9 mb-4 ">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/sq-power/sq-power-front.png"
                  className="mt-1-9 mb-4 wow fadeInUp"
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
              <div className="col-lg-8  mb-5">
                <div className="row">
                  <div className="col-lg-4 mt-n1-9 mb-4">
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
                  </div>

                  <div className="col-lg-5 mt-n1-9 mb-4">
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
                  </div>
                  <div className="col-lg-4 mt-n1-9 mb-1">
                    <div>
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
                  <div className="col-lg-4 mt-n1-9 mb-1">
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
                </div>
              </div>
            </div>
          </div>

          <div
            className="e-card mb-6"
            style={{
              boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
              maxHeight: '1500px',
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
              <div className="col-lg-8  mb-5">
                <div className="row">
                  <div className="col-lg-5 mt-n1-9 mb-4">
                    <div className=" mb-5">
                      <h6>Appearance</h6>

                      <strong>Weight:</strong>
                      <br />
                      <strong>Casing materials:</strong>
                      <br />
                    </div>

                    <div></div>
                  </div>

                  <div className="col-lg-5 mt-n1-9 mb-4">
                    <div className=" mb-5">
                      <br />
                      49g
                      <br />
                      PCLEXAN121R
                      <br />
                    </div>
                  </div>

                  <div className="col-lg-5 mt-n1-9 mb-1">
                    <div className=" mb-5">
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

                  <div className="col-lg-5 mt-n1-9 mb-1">
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

          {/* How SQ-Power works*/}

          <div className=" mb-2">
            <h5>How does SQ-Power work? </h5>
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
            <h5>SQ-Power (Technical Drawings)</h5>
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
          {state === 'en' && (
            <>
              <h4>Shop with us</h4>
              <div className="row mb-10">
                <div className="col-md-4 mb-4">
                  <div
                    className="e-card"
                    style={{
                      boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                      maxHeight: '1070px',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/img/content/sq-power/sq-power-front.png"
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
                      <h6 className="text-success">
                        Carenuity SQ-Power - In-Wall Power Module for SQ-Panel
                      </h6>
                      <p>
                        The Carenuity SQ-Power module is designed for the safe
                        and permanently installed power supply of the Carenuity
                        SQ-Panel when...
                      </p>
                      <div className="row">
                        <p className="col-md-6 mb-4">
                          {!isMobile && (
                            <Link
                              href={
                                'https://www.chipglobe.shop/en/p/carenuity-sq-power-in-wall-power-module-for-sq-panel'
                              }
                              target="_blank"
                              className={'btn btn-sm btn-success rounded-pill'}
                            >
                              <span className="small"> Buy Now</span>
                            </Link>
                          )}

                          {isMobile && (
                            <a
                              href={
                                'https://www.chipglobe.shop/en/p/carenuity-sq-power-in-wall-power-module-for-sq-panel'
                              }
                              target="_blank"
                              className={'btn btn-sm btn-success rounded-pill'}
                              rel="noreferrer"
                            >
                              <span className="small">
                                Buy Now{' '}
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
            </>
          )}

          {state === 'de' && (
            <>
              <div className="mb-10">
                <h4>Kaufen Sie bei uns ein</h4>
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <div
                      className="e-card"
                      style={{
                        boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                        maxHeight: '1070px',
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/img/content/sq-power/sq-power-front.png"
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
                        <h6 className="text-success">
                          Carenuity SQ-Power – Unterputz-Strommodul für das
                          SQ-Panel
                        </h6>
                        <p>
                          Das Carenuity SQ-Power Modul dient der sicheren und
                          fest installierten Stromversorgung des Carenuity
                          SQ-Panels bei Wandmontage.Es wird direkt an die 230
                          V...{' '}
                        </p>
                        <div className="row">
                          <p className="col-md-6 mb-4">
                            {!isMobile && (
                              <Link
                                href={
                                  'https://www.chipglobe.shop/p/carenuity-sq-power-unterputz-strommodul-fuer-das-sq-panel'
                                }
                                target="_blank"
                                className={
                                  'btn btn-sm btn-success rounded-pill'
                                }
                                style={{ color: 'white' }}
                              >
                                <span className="small"> Jetzt kaufen</span>
                              </Link>
                            )}

                            {isMobile && (
                              <a
                                href={
                                  'https://www.chipglobe.shop/p/carenuity-sq-power-unterputz-strommodul-fuer-das-sq-panel'
                                }
                                target="_blank"
                                className={
                                  'btn btn-sm btn-success rounded-pill'
                                }
                                style={{ color: 'white' }}
                                rel="noreferrer"
                              >
                                <span className="small">
                                  Jetzt kaufen{' '}
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
            </>
          )}

          <div className="row">
            <div className="col-md-12 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '300px',
                }}
              >
                <div className="row">
                  <div className="col-md-3 mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/img/content/sq-power/sq-power-front.png"
                      className="wow fadeInUp"
                      data-wow-delay="100ms"
                      alt="..."
                      style={{
                        visibility: 'visible',
                        height: '300px',
                        animationDelay: '100ms',
                        animationName: 'fadeIn',
                      }}
                    />
                  </div>
                  <div className="col-md-9 mb-4">
                    <div style={{ padding: '10px' }}>
                      <h5 className="text-success">
                        Carenuity SQ-Power - In-Wall Power Module for SQ-Panel
                      </h5>
                      <p>
                        The Carenuity SQ-Power module is designed for the safe
                        and permanently installed power supply of the Carenuity
                        SQ-Panel when wall-mounted. It connects directly to the
                        230 V AC mains (L and N) and is installed into a
                        standard flush-mounted or cavity wall box (e.g. Ø 68 mm
                        according to DIN 49073) – just like a light switch or
                        power outlet. It is ideal for all permanent
                        installations, where a clean, integrated power solution
                        and a professional appearance are required – for example
                        in care facilities, hospitals, modern offices or smart
                        home environments.
                      </p>
                      <div className="row">
                        <div className="col-md-4 mb-4">
                          <p style={{ color: '#808080' }}>
                            Product no.: 2503134-1
                            <strong style={{ color: '#198754' }}>
                              (In stock)
                            </strong>
                            <br />
                            incl. VAT,{' '}
                            <a href="https://www.chipglobe.shop/en/l/shipping">
                              <u>plus delivery</u>
                            </a>
                          </p>
                        </div>
                        <div
                          className="col-md-4 mb-4"
                          style={{ textAlign: 'center' }}
                        >
                          <h3>53.49 €</h3>
                        </div>
                        <div className="col-md-4 mb-4">
                          <p className="col-md-4 mb-4">
                            {!isMobile && (
                              <Link
                                href={''}
                                target="_blank"
                                className={'btn  btn-success rounded-pill '}
                              >
                                <span className="small"> Buy Now</span>
                              </Link>
                            )}

                            {isMobile && (
                              <a
                                href={''}
                                target="_blank"
                                className={
                                  'btn btn-sm btn-success rounded-pill  width:"190px"'
                                }
                                style={{ color: 'white' }}
                                rel="noreferrer"
                              >
                                <span className="small">
                                  Buy Now{' '}
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
