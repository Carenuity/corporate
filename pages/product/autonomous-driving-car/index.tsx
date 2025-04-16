import React from 'react';
import Head from 'next/head';
import PageTitle from '../../../components/PageTitle';
import Carousel from './carousel';
import Link from 'next/link';

const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'Autonomous Driving Car';

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
          <h4>Now Autonomously Driving: The Reincarnation of a Winner</h4>
          <div
            className="e-card mb-6"
            style={{
              boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
              maxHeight: '1O00px',
              padding: '20px',
            }}
          >
            <div className="row">
              <div className="col-md-4 mb-4">
                <Carousel />
              </div>
              <div className="col-md-8 mb-4">
                <p className="mb-2">
                  In the world of automotive innovation, history often serves as
                  a foundation for future advancements. The Autonomous Driving
                  Infineon Car, built by ChipGlobe&apos;s Carenuity team, is a
                  testament to this principle. This cutting-edge vehicle not
                  only embodies the latest in autonomous driving technology but
                  also pays homage to the legendary Schaeffler FAG Model MF3,
                  presented in June 2009. The shark-like design of the MF3, a
                  symbol of speed and precision, has been reincarnated in 2025
                  in a 1:10 ratio model, showcasing the seamless blend of past
                  and present engineering marvels.
                </p>
                <p className="mb-2">
                  The unveiling of the Schaeffler FAG Model MF3 took place at an
                  evening event at the foyer of Schaeffler. This event was
                  graced by notable figures such as Dr. Grunau, a former
                  representative of the management board of FAG Schaeffler Group
                  Industry, and Dipl.-Ing. Seubert, the former chairman of the
                  Unterfranken district association of the Verein Deutscher
                  Ingenieure (VDI). Their presence underscored the importance of
                  innovation and collaboration in the engineering community.
                  After several wins, the MF3 was finally parked on the first
                  floor of the THWS University in Schweinfurt, where it
                  continues to inspire students and engineers alike.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-2">
              Fast forward to today, the Autonomous Driving Infineon Car
              represents a leap forward in automotive technology. Built by
              Carenuity in 2025, this model leverages advanced AI competencies
              to navigate home and office environments autonomously.
              Carenuity&apos;s expertise in AI and sensor technology ensures
              that the vehicle can make real-time decisions with precision and
              reliability, enhancing safety and efficiency on its patrols.
            </p>
            <p className="mb-2">
              The concept of autonomous driving extends beyond mere
              transportation; it transforms the vehicle into a versatile
              platform for advanced sensors. These sensors can be utilized to
              enhance the safety of smart homes and offices, potentially serving
              as patrol units that monitor and secure large environments. By
              integrating such advanced sensor technology, the Autonomous
              Driving Infineon Car can contribute to creating safer living and
              working spaces.
            </p>
            <p className="mb-2">
              Moreover, Carenuity and Infineon are committed to transferring
              their building knowledge to selected international universities.
              This initiative aims to empower the next generation of engineers
              and researchers by providing them with access to cutting-edge
              technology and expertise. By fostering collaboration with academic
              institutions, Carenuity and Infineon are paving the way for
              continued innovation and excellence in autonomous driving and AI.
            </p>
            <p className="mb-2">
              Notably, this latest autonomous driving car (V3) was built by Eren
              Arslan Ramazan, a talented student from THWS University, who
              previously won a competition for building smart real estate
              sensors in the course of the Carenuity Home Challenge. The
              Carenuity Home Challenge is an annual competition at the THWS,
              hosted by Prof. Heinz Endres, that encourages students to develop
              innovative smart home solutions. Participants are tasked with
              designing and building sensors that can improve the safety,
              efficiency, or convenience of home, office, and industrial
              environments. Eren&apos;s winning project involved creating a
              sophisticated barometer with a Bosch BMP180 / BME680 sensor, that
              could be integrated into various smart home applications,
              showcasing his ingenuity and technical skills.
            </p>
            <p className="mb-2">
              The very first presentation of the Autonomous Driving Infineon Car
              (V1) was given by Harald Lehmann at a Pizza & Beer event in the
              canteen of Infineon headquarters in Neubiberg, Germany. The event
              was a showcase of technological prowess, where the car&apos;s
              capabilities were demonstrated in a controlled environment.
              Attendees were able to witness firsthand the vehicle&apos;s
              autonomous navigation and real-time decision-making processes.
              This presentation highlighted the collaborative efforts of
              Infineon in pushing the boundaries of what&apos;s possible in
              autonomous driving technology.
            </p>
            <p className="mb-2">
              Later, an improved version (V2) of the Autonomous Driving Infineon
              Car was upgraded by Daniel Gernert, further demonstrating the
              advancements and refinements made in the vehicle&apos;s autonomous
              capabilities.
            </p>
            <p className="mb-2">
              In conclusion, the Autonomous Driving Infineon Car is more than
              just a vehicle; it&apos;s a symbol of innovation and a tribute to
              the engineering excellence of the past with the AI powers of the
              future. As we drive forward into the future, the legacy of the
              Schaeffler FAG Model MF3 lives on, inspiring new generations of
              engineers to push the boundaries of what&apos;s possible.
            </p>
          </div>
          <div>
            <h4>Build your own Autonomous Driving Car:</h4>
            <p>
              The following{' '}
              <a href="https://www.hackster.io/">
                <u>hackster.io </u>
              </a>
              Articles explain how to build it:
            </p>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '450px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/Autonomous/autonomus1.png"
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
                    <h6 className="text-success">Autonomous Driving Car</h6>

                    <p>
                      This RC car is equipped with a camera, a Raspberry Pi, an
                      XMC1100 Boot Kit and the DC Motor Control Shield with
                      BTN8982TA.
                    </p>
                    <a
                      href="https://www.hackster.io/Infineon_Team/autonomous-driving-car-5b3d03"
                      target="blank"
                    >
                      <u>Learn more</u>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '450px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/Autonomous/autonomus2.png"
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
                    <h6 className="text-success">Autonomous Driving Car V2</h6>

                    <a
                      href="https://www.hackster.io/Infineon_Team/autonomous-driving-car-v2-8b5545"
                      target="blank"
                    >
                      <u>Learn more</u>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '450px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/Autonomous/autonomus3.png"
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
                    <h6 className="text-success">Autonomous Driving Car V3</h6>

                    <a
                      href="https://www.hackster.io/ramazan-eren-arslan/autonomous-driving-car-v3-93deea"
                      target="blank"
                    >
                      <u>Learn more</u>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4>Shop with us</h4>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '620px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/Autonomous/shopcar.png"
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
                    <h6 className="text-success">Autonomous Driving Car</h6>
                    <p>
                      The Autonomous Driving Car by Infineon provides an
                      innovative solution for self-driving cars. Equipped with a
                      camera, a Raspberry Pi, and the XMC1100 Boot Kit, it
                      allows control via smartphone, tablet, or laptop.
                      Integration into the Donkeycar project offers hands-on
                      experience with artificial intelligence and neural
                      networks.
                    </p>
                    <div className="row">
                      <p className="col-md-4 mb-4">
                        {!isMobile && (
                          <Link
                            href={
                              'https://www.chipglobe.shop/en/p/autonomous-driving-car'
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
                              'https://www.chipglobe.shop/en/p/autonomous-driving-car'
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
