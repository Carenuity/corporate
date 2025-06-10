import Head from 'next/head';
import PageTitle from '../components/PageTitle';
import Link from 'next/link';
import ModuleImage from '../components/ModuleImage';
import { useRouter } from 'next/router';

const Actuators = ({ isMobile }: { isMobile: boolean }) => {
  const router = useRouter();
  const query = router.query;
  const pageTitle = 'Actuator Selection';
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
          { path: '/install-for-free', title: 'Install For Free' },
          { path: '/sensors', title: 'Sensors' },
          { path: '/microcontrollers', title: ' Microcontrollers' },
        ]}
        pageTitle={pageTitle}
        pageUrl="/actuators"
      />

      <section className="pt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mt-n1-9">
              <div className="pe-lg-1-9">
                <div className="row mt-1-9">
                  <ModuleImage
                    url={{
                      pathname: '/environments',
                      query: { ...query, actuator: '0.66-OLED' },
                    }}
                    image={'/img/actuators/0.66-OLED-actuator.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/environments',
                      query: { ...query, actuator: 'wemos-RGB' },
                    }}
                    image={'/img/actuators/wemos-RGB-actuator.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/environments',
                      query: { ...query, actuator: 'Lolin-RGB' },
                    }}
                    image={'/img/actuators/Lolin-RGB-actuator.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/environments',
                      query: { ...query, actuator: 'RGB-LED' },
                    }}
                    image={'/img/actuators/RGB-LED-actuator.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/environments',
                      query: { ...query, actuator: 'wemos-matrix-LED' },
                    }}
                    image={'/img/actuators/wemos-matrix-LED-actuator.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/environments',
                      query: { ...query, actuator: 'wemos-buzzer' },
                    }}
                    image={'/img/actuators/wemos-buzzer-actuator.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/environments',
                      query: { ...query, actuator: '0.78-OLED' },
                    }}
                    image={'/img/actuators/0.78-OLED-actuator.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/environments',
                      query: { ...query, actuator: 'water-pump' },
                    }}
                    image={'/img/actuators/water-pump-actuator.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/environments',
                      query: { ...query, actuator: 'sim-800c' },
                    }}
                    image={'/img/actuators/sim-800c-actuator.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/environments',
                      query: { ...query, actuator: 'circular-matrix' },
                    }}
                    image={'/img/actuators/circular-matrix-actuator.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/environments',
                      query: { ...query, actuator: 'traffic-light' },
                    }}
                    image={'/img/actuators/traffic-light-actuator.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/environments',
                      query: { ...query, actuator: '2.8-OLED' },
                    }}
                    image={'/img/actuators/2.8-OLED-actuator.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/environments',
                      query: { ...query, actuator: 'micro-servo' },
                    }}
                    image={'/img/actuators/micro-servo-actuator.png'}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <div
                  className="wow fadeIn"
                  data-wow-delay="200ms"
                  style={{
                    visibility: 'visible',
                    animationDelay: '200ms',
                    animationName: 'fadeIn',
                  }}
                >
                  <div className="section-title left">
                    <span className="sm-title">Higlight</span>
                  </div>
                  {/* <h2 className='h1 mb-1-9'>SEO &amp; Content Writing</h2> */}
                </div>
                <p
                  className="wow fadeIn"
                  data-wow-delay="300ms"
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

                <div className="row mb-1-9">
                  <div className="col-md-6 wow fadeIn" data-wow-delay="200ms">
                    <div className="d-flex align-items-center">
                      <i className="ti-check display-26 text-primary"></i>
                      <span className="ms-3 text-dark fw-bold">
                        0.66&quot; OLED
                      </span>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="ti-check display-26 text-primary"></i>
                      <span className="ms-3 text-dark fw-bold">Wemos RGB</span>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="ti-check display-26 text-primary"></i>
                      <span className="ms-3 text-dark fw-bold">
                        Lolin RGB LED
                      </span>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="ti-check display-26 text-primary"></i>
                      <span className="ms-3 text-dark fw-bold">Water Pump</span>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="ti-check display-26 text-primary"></i>
                      <span className="ms-3 text-dark fw-bold">RGB LED</span>
                    </div>
                  </div>
                  <div className="col-md-6 wow fadeIn" data-wow-delay="400ms">
                    <div className="d-flex align-items-center mt-4 mt-md-0">
                      <i className="ti-check display-26 text-primary"></i>
                      <span className="ms-3 text-dark fw-bold">SIM</span>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="ti-check display-26 text-primary"></i>
                      <span className="ms-3 text-dark fw-bold">Matrix LED</span>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="ti-check display-26 text-primary"></i>
                      <span className="ms-3 text-dark fw-bold">
                        0.78&quot; OLED
                      </span>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="ti-check display-26 text-primary"></i>
                      <span className="ms-3 text-dark fw-bold">
                        2.8&quot; OLED
                      </span>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="ti-check display-26 text-primary"></i>
                      <span className="ms-3 text-dark fw-bold">
                        Wemos Buzzer
                      </span>
                    </div>
                  </div>
                </div>

                {!isMobile && (
                  <Link
                    href={'/environments'}
                    className={'btn btn-lg btn-outline-success rounded-pill'}
                  >
                    <span className="small">Select Environment </span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'/environments'}
                    className={'btn btn-lg btn-outline-success rounded-pill'}
                  >
                    <span className="small">Select Microcontroller </span>
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
