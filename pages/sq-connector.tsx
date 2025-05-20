import React from 'react';
import Head from 'next/head';
import PageTitle from '../components/PageTitle';
import { useContext } from 'react';
import { LanguageSwitchContext } from '../components/context/LanguageSwitch';
import Translatable from '../components/Translatable';
import Link from 'next/link';

const Page = ({ isMobile }: { isMobile: boolean }) => {

  const pageTitle = 'SQ-Connector';

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
            <h4>SQ-Connector, your Matter Gateway</h4>
            <p>
              The SQ-Connector acts as Matter Gateway, a core part of the Matter
              protocol, a unifying IP-based connectivity standard developed by
              the Connectivity Standards Alliance (CSA). Matter aims to ensure
              secure, reliable, and seamless communication between smart home
              devices, mobile apps, and cloud services. The Matter Gateway
              specifically facilitates the integration of devices using
              different communication protocols, such as Zigbee, Bluetooth, and
              Wi-Fi, into a unified Matter ecosystem. This standard helps reduce
              fragmentation in the smart home market by enabling
              interoperability between devices from various manufacturers,
              ensuring they work together smoothly. The Matter Gateway plays a
              crucial role in bridging different technologies and ensuring a
              cohesive smart home experience.
            </p>
            <div className="col-lg-6 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/kickstarter/connection.PNG"
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
            <div className="col-lg-6 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/kickstarter/connection02.PNG"
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
           {state === 'en' && <>
          
                      <h4>Shop with us</h4>
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
                              src="/img/content/kickstarter/connection03.jpeg"
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
                              Carenuity SQ-Connector - LAN Gateway with 868 MHz for SQ-Panel
                              </h6>
                              <p>
                               The Carenuity SQ-Connector is the central gateway for integrating the SQ-Panel into the Carenuity cloud infrastructure.
                                It receives sensor data from the panel via...
                              </p>
                              <div className="row">
                                <p className="col-md-3 mb-4">
                                  {!isMobile && (
                                    <Link
                                      href={
                                        'https://www.chipglobe.shop/en/p/carenuity-sq-connector-lan-gateway-with-868-mhz-for-sq-panel'
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
                                        'https://www.chipglobe.shop/en/p/carenuity-sq-connector-lan-gateway-with-868-mhz-for-sq-panel'
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
                                <p className="col-md-4 mb-4">
                                  {!isMobile && (
                                    <Link
                                      href={''}
                                      target="_blank"
                                      className={'btn btn-sm btn-success rounded-pill'}
                                    >
                                      <span className="small"> Install for free</span>
                                    </Link>
                                  )}
          
                                  {isMobile && (
                                    <a
                                      href={''}
                                      target="_blank"
                                      className={'btn btn-sm btn-success rounded-pill'}
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
                    
          </>}
          
          
          {state === 'de' && <>
           <div>
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
                              src="/img/content/kickstarter/connection03.jpeg"
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
                           Carenuity SQ-Connector - LAN-Gateway mit 868 MHz Funk für SQ-Panel
                              </h6>
                              <p>
                              Der Carenuity SQ-Connector ist das zentrale Gateway zur Anbindung des SQ-Panels an die Carenuity-Cloud.
                              Er empfängt Sensordaten des Panels über...{' '}
                              </p>
                              <div className="row">
                                <p className="col-md-4 mb-4">
                                  {!isMobile && (
                                    <Link
                                      href={
                                        'https://www.chipglobe.shop/p/carenuity-sq-connector-lan-gateway-mit-868-mhz-funk-fuer-sq-panel'
                                      }
                                      target="_blank"
                                      className={'btn btn-sm btn-success rounded-pill'}
                                    >
                                      <span className="small"> Jetzt kaufen</span>
                                    </Link>
                                  )}
          
                                  {isMobile && (
                                    <a
                                      href={
                                        'https://www.chipglobe.shop/p/carenuity-sq-connector-lan-gateway-mit-868-mhz-funk-fuer-sq-panel'
                                      }
                                      target="_blank"
                                      className={'btn btn-sm btn-success rounded-pill'}
                                      rel="noreferrer"
                                    >
                                      <span className="small">
                                        Jetzt kaufen{' '}
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
                                      className={'btn btn-sm btn-success rounded-pill'}
                                    >
                                      <span className="small"> Kostenlos installieren</span>
                                    </Link>
                                  )}
          
                                  {isMobile && (
                                    <a
                                      href={''}
                                      target="_blank"
                                      className={'btn btn-sm btn-success rounded-pill'}
                                      rel="noreferrer"
                                    >
                                      <span className="small">
                                        Kostenlos installieren{' '}
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
          </>}
        </div>
      </section>
    </>
  );
};

export default Page;
