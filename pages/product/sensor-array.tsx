import React from 'react';

import PageTitle from '../../components/PageTitle';
import Head from 'next/head';

import Link from 'next/link';

const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'Sensor Array';
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
          <h4>
            Sensor Array Kit - Perfect Bundle for IoT and Sensing Projects
          </h4>

          <p>
            The Sensor Array Kit is a comprehensive bundle containing 10
            complete units based on our Shield2Go Single Adapter and the DPS310
            pressure sensor from the Chipglobe Comfort Line. This set is ideal
            for developers and engineers looking to integrate reliable and
            precise pressure sensors into their IoT systems.
          </p>
          <strong>Kit Contents:</strong>
          <ul>
            <li>
              <strong>10x 3D-Printed Enclosure:</strong>Durable and eco-friendly
              enclosures for the single adapters
            </li>
            <li>
              <strong>10x Shield2Go Single Adapter Trust-X V2.0:</strong>Enables
              easy sensor integration
            </li>
            <li>
              <strong>10x ESP32-WROOM-32D Modules:</strong>WiFi- and
              Bluetooth-enabled, perfect for IoT applications
            </li>
            <li>
              <strong>10x DPS310 Pressure Sensor:</strong>High-precision
              barometric sensor from our Chipglobe Comfort Line
            </li>
            <li>
              <strong>10x USB Cable:</strong>High-quality Chipglobe USB cables
              for power supply
            </li>
          </ul>
          <div>
            <h4>Shop with us</h4>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '470px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/Sensor-array/sensor1.png"
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
                      Sensor Array Kit - Complete Bundle with 10x Single Adapter
                      and DPS310
                    </h6>
                    <p>
                      This kit enables fast development and evaluation of IoT
                      systems with a focus on precise pressure measurements.{' '}
                    </p>
                    <div className="row">
                      <p className="col-md-3 mb-4">
                        {!isMobile && (
                          <Link
                            href={
                              'https://www.chipglobe.shop/en/p/sensor-array-kit-complete-bundle-with-10x-single-adapter-and-dps310'
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
                              'https://www.chipglobe.shop/en/p/sensor-array-kit-complete-bundle-with-10x-single-adapter-and-dps310'
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
