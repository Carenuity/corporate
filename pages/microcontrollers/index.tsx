import Head from 'next/head';
import PageTitle from '../../components/PageTitle';
import ModuleImage from '../../components/ModuleImage';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Microcontrollers = () => {
  const router = useRouter();
  const query = router.query;

  return (
    <div className="row">
      <ModuleImage
        url={{
          pathname: '/actuators',
          query: { ...query, microcontroller: 'C3-Mini' },
        }}
        image={'/img/boards/C3-Mini-microcontroller.webp'}
        gridClass="col-md-6"
      />
      <ModuleImage
        url={{
          pathname: '/actuators',
          query: { ...query, microcontroller: 'ESP32-Mini' },
        }}
        image={'/img/boards/ESP32-Mini-microcontroller.webp'}
        gridClass="col-md-6"
      />
      <ModuleImage
        url={{
          pathname: '/actuators',
          query: { ...query, microcontroller: 'D1-Mini' },
        }}
        image={'/img/boards/D1-Mini-microcontroller.webp'}
        gridClass="col-md-6"
      />
      <ModuleImage
        url={{
          pathname: '/actuators',
          query: { ...query, microcontroller: 'ESP32-CAM' },
        }}
        image={'/img/boards/ESP32-CAM-microcontroller.webp'}
        gridClass="col-md-6"
      />
      <ModuleImage
        url={{
          pathname: '/actuators',
          query: { ...query, microcontroller: 'Pico-W' },
        }}
        image={'/img/boards/Pico-W-microcontroller.webp'}
        gridClass="col-12"
      />
    </div>
  );
};

// eslint-disable-next-line no-unused-vars
const Index = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'Select what you have';
  // const boardImage = '/img/content/selection-of-microcontroller-platform.webp';
  // const { state } = useContext(StoreContext);

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
        ]}
        pageTitle={pageTitle}
        pageUrl="/microcontrollers"
      />

      <section className="overflow-hidden py-3">
        <div className="container position-relative z-index-3">
          <div className="row align-items-center about-style-03">
            <div
              className="col-lg-8 wow fadeIn"
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <div className="pe-lg-1-9">
                <div className="section-title mb-1-9">
                  <span className="sm-title">{pageTitle}</span>
                  <h2 className="mb-0 h3">
                    For sustainability reasons we care and support your chosen
                    microcontroller platforms from the past.
                  </h2>
                </div>
                <div className="mb-1-9">
                  <div className="d-flex about-text mb-1-9">
                    <div className="flex-shrink-0">
                      <i className="fa-solid fa-microchip"></i>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4 className="h5">
                        Select your preferred microcontroller
                      </h4>
                      <p className="mb-0">
                        Our recommendation is the C3-Mini™ as it is future
                        proof for the upcoming Matter standard and it fits into
                        the 3D-printed housings we prepared for you.
                      </p>

                      <p className="text-center mt-3">
                        <Link
                          href={'/actuators'}
                          className={'btn btn-lg btn-success rounded-pill'} // "btn-style2 primary wow fadeInUp p-3"
                          // data-wow-delay="400ms"
                          // style={{
                          //   visibility: 'visible',
                          //   animationDelay: '400ms',
                          //   animationName: 'fadeInUp',
                          //   height: '3.5rem',
                          // }}
                        >
                          <span className="small">Select Actuator</span>
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex about-text mb-1-9">
                    <div className="flex-shrink-0">
                      <i className="fa-solid fa-laptop-code"></i>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4 className="h5">
                        Learn about the evolution for the C3-Mini™
                      </h4>
                      <p className="mb-0">
                        The D1 is the predecessor of the C3-Mini™, which comes
                        additionally with Bluetooth on board. Bluetooth is
                        required for onboarding devices into the upcoming Matter
                        environments, which are targeted.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex about-text">
                    <div className="flex-shrink-0">
                      <i className="fa-solid fa-briefcase"></i>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4 className="h5">Learn about Matter</h4>
                      <p className="mb-0">
                        We are preparing to get the following 12 sensor
                        solutions into Matter, utilizing Matter-over-Wifi. Our
                        premium sensor device, the SQ-Panel, comes with
                        Matter-over-Thread.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 wow fadeIn text-white"
              data-wow-delay="400ms"
              style={{
                visibility: 'visible',
                animationDelay: '400ms',
                animationName: 'fadeIn',
              }}
            >
              <div className="ps-lg-2-9 position-relative text-center text-sm-start">
                <div className="d-sm-none">
                  <Microcontrollers />
                </div>
                <div className="about-img d-none d-sm-block">
                  <p
                    className="px-4 py-3 text-align-justify bg-success pb-4"
                    style={{ textAlign: 'justify' }}
                  >
                    For your convenience, we have prepared these platforms we
                    support with care. Just click the desired one you possibly
                    are familiar with:
                  </p>
                  <Microcontrollers />
                  {/* <map name='image_map'>
                    <area
                      alt='C3-Mini'
                      title='C3-Mini - Read More'
                      href='/microcontrollers/C3-Mini'
                      coords='0,0,150,180'
                      shape='rect'
                      data-bs-toggle='tooltip'
                    />
                    <area
                      alt='ESP32-Mini'
                      title='ESP32-Mini - Read More'
                      href='/microcontrollers/ESP32-Mini'
                      coords='160,0,350,160'
                      shape='rect'
                      data-bs-toggle='tooltip'
                    />
                    <area
                      alt='D1-Mini'
                      title='D1-Mini - Read More'
                      href='/microcontrollers/D1-Mini'
                      coords='0,200,150,360'
                      shape='rect'
                      data-bs-toggle='tooltip'
                    />
                    <area
                      alt='ESP32-CAM'
                      title='ESP32-CAM - Read More'
                      href='/microcontrollers/ESP32-CAM'
                      coords='160,170,350,370'
                      shape='rect'
                      data-bs-toggle='tooltip'
                    />
                    <area
                      alt='RPi-Pico-W'
                      title='RPi-Pico-W - Read More'
                      href='/microcontrollers/RPi-Pico-W'
                      coords='0,500,320,200'
                      shape='rect'
                      data-bs-toggle='tooltip'
                    />
                  </map> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/bg/bg-06.png"
          className="position-absolute left bottom-5 opacity4"
          alt="..."
        />
      </section>
    </>
  );
};

export default Index;
