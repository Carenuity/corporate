import Head from 'next/head';
import PageTitle from '../components/PageTitle';
import Link from 'next/link';
import ModuleImage from '../components/ModuleImage';

const Actuators = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'Actuator Selection';
  return (
    <>
      <Head>
        <meta
          name='keywords'
          content='Carenuity ChipGlobe Electronics Embedded Systems'
        />
        <meta
          name='description'
          content={`We're Delivering Peace-in-Mind by Vital and Environmental Sensing and Care that you See what No Else will See.`}
        />
        <title>{pageTitle}</title>
      </Head>

      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        prevPage='Microcontrollers'
        prevPageUrl='/microcontrollers'
        pageTitle={pageTitle}
        pageUrl='/actuators'
      />

      <section className='pt-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 mt-n1-9'>
              <div className='pe-lg-1-9'>
                <div className='row mt-1-9'>
                  <ModuleImage
                    url={'/environments'}
                    image={'/img/actuators/0.66-OLED-actuator.png'}
                  />
                  <ModuleImage
                    url={'/environments'}
                    image={'/img/actuators/wemos-RGB-actuator.png'}
                  />
                  <ModuleImage
                    url={'/environments'}
                    image={'/img/actuators/Lolin-RGB-actuator.png'}
                  />
                  <ModuleImage
                    url={'/environments'}
                    image={'/img/actuators/RGB-LED-actuator.png'}
                  />
                  <ModuleImage
                    url={'/environments'}
                    image={'/img/actuators/wemos-matrix-LED-actuator.png'}
                  />
                  <ModuleImage
                    url={'/environments'}
                    image={'/img/actuators/wemos-buzzer-actuator.png'}
                  />
                  <ModuleImage
                    url={'/environments'}
                    image={'/img/actuators/0.78-OLED-actuator.png'}
                  />
                  <ModuleImage
                    url={'/environments'}
                    image={'/img/actuators/water-pump-actuator.png'}
                  />
                  <ModuleImage
                    url={'/environments'}
                    image={'/img/actuators/sim-800c-actuator.png'}
                  />
                  <ModuleImage
                    url={'/environments'}
                    image={'/img/actuators/circular-matrix-actuator.png'}
                  />
                  <ModuleImage
                    url={'/environments'}
                    image={'/img/actuators/traffic-light-actuator.png'}
                  />
                  <ModuleImage
                    url={'/environments'}
                    image={'/img/actuators/2.8-OLED-actuator.png'}
                  />
                  <ModuleImage
                    url={'/environments'}
                    image={'/img/actuators/micro-servo-actuator.png'}
                  />
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div>
                <div
                  className='wow fadeIn'
                  data-wow-delay='200ms'
                  style={{
                    visibility: 'visible',
                    animationDelay: '200ms',
                    animationName: 'fadeIn',
                  }}
                >
                  <div className='section-title left'>
                    <span className='sm-title'>Higlight</span>
                  </div>
                  {/* <h2 className='h1 mb-1-9'>SEO &amp; Content Writing</h2> */}
                </div>
                <p
                  className='wow fadeIn'
                  data-wow-delay='300ms'
                  style={{
                    visibility: 'visible',
                    animationDelay: '300ms',
                    animationName: 'fadeIn',
                  }}
                >
                  Actuators typically are displays, LEDs, buzzers or motors,
                  that act once the sensor detects a signal and the
                  microcontroller requests that respective action. Therefore
                  these parts are called &apos;Actuators&apos;.
                </p>

                <div className='row mb-1-9'>
                  <div className='col-md-6 wow fadeIn' data-wow-delay='200ms'>
                    <div className='d-flex align-items-center'>
                      <i className='ti-check display-26 text-primary'></i>
                      <span className='ms-3 text-dark fw-bold'>
                        0.66&quot; OLED
                      </span>
                    </div>
                    <div className='d-flex align-items-center mt-4'>
                      <i className='ti-check display-26 text-primary'></i>
                      <span className='ms-3 text-dark fw-bold'>Wemos RGB</span>
                    </div>
                    <div className='d-flex align-items-center mt-4'>
                      <i className='ti-check display-26 text-primary'></i>
                      <span className='ms-3 text-dark fw-bold'>
                        Lolin RGB LED
                      </span>
                    </div>
                    <div className='d-flex align-items-center mt-4'>
                      <i className='ti-check display-26 text-primary'></i>
                      <span className='ms-3 text-dark fw-bold'>Water Pump</span>
                    </div>
                    <div className='d-flex align-items-center mt-4'>
                      <i className='ti-check display-26 text-primary'></i>
                      <span className='ms-3 text-dark fw-bold'>RGB LED</span>
                    </div>
                  </div>
                  <div className='col-md-6 wow fadeIn' data-wow-delay='400ms'>
                    <div className='d-flex align-items-center mt-4 mt-md-0'>
                      <i className='ti-check display-26 text-primary'></i>
                      <span className='ms-3 text-dark fw-bold'>SIM</span>
                    </div>
                    <div className='d-flex align-items-center mt-4'>
                      <i className='ti-check display-26 text-primary'></i>
                      <span className='ms-3 text-dark fw-bold'>Matrix LED</span>
                    </div>
                    <div className='d-flex align-items-center mt-4'>
                      <i className='ti-check display-26 text-primary'></i>
                      <span className='ms-3 text-dark fw-bold'>
                        0.78&quot; OLED
                      </span>
                    </div>
                    <div className='d-flex align-items-center mt-4'>
                      <i className='ti-check display-26 text-primary'></i>
                      <span className='ms-3 text-dark fw-bold'>
                        2.8&quot; OLED
                      </span>
                    </div>
                    <div className='d-flex align-items-center mt-4'>
                      <i className='ti-check display-26 text-primary'></i>
                      <span className='ms-3 text-dark fw-bold'>
                        Wemos Buzzer
                      </span>
                    </div>
                  </div>
                </div>

                {!isMobile && (
                  <Link
                    href={'/environments'}
                    className='btn-style2 primary wow fadeInUp p-3'
                    data-wow-delay='400ms'
                    style={{
                      visibility: 'visible',
                      animationDelay: '400ms',
                      animationName: 'fadeInUp',
                      height: '3.5rem',
                    }}
                  >
                    <span className='small'>Select Environment </span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'/environments'}
                    className='btn-style2 primary wow fadeInUp p-3'
                    data-wow-delay='400ms'
                    style={{
                      visibility: 'visible',
                      animationDelay: '400ms',
                      animationName: 'fadeInUp',
                      height: '3.5rem',
                    }}
                  >
                    <span className='small'>Select Microcontroller </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Actuators;
