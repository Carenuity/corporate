import Head from 'next/head';
import React from 'react';
import PageTitle from '../components/PageTitle';
import CarouselImage from '../components/CarouselImage';
import SolutionWidget from '../components/SolutionWidget';

const Index = () => {
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
        <title>Sensor Selection Box Modules</title>
      </Head>

      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        links={[{ path: '/c3-mini-box', title: 'C3-Mini Sensor Box' }]}
        pageTitle={'C3-Mini Sensor Box Devices'}
        pageUrl="/c3-mini-box-devices"
      />

      <section className="pt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mt-n1-9 mb-4">
              <div className="pe-lg-1-9 mt-3 ">
                <div className="owl-carousel owl-theme text-center testimonial-carousel1 mb-6">
                  <CarouselImage
                    url={'/img/content/C3-Mini-Sensor-Box/carousel/Slide1.PNG'}
                  />
                  <CarouselImage
                    url={'/img/content/C3-Mini-Sensor-Box/carousel/Slide2.PNG'}
                  />
                  <CarouselImage
                    url={'/img/content/C3-Mini-Sensor-Box/carousel/Slide3.PNG'}
                  />
                  <CarouselImage
                    url={'/img/content/C3-Mini-Sensor-Box/carousel/Slide4.PNG'}
                  />
                  <CarouselImage
                    url={'/img/content/C3-Mini-Sensor-Box/carousel/Slide5.PNG'}
                  />
                  <CarouselImage
                    url={'/img/content/C3-Mini-Sensor-Box/carousel/Slide6.PNG'}
                  />
                  <CarouselImage
                    url={'/img/content/C3-Mini-Sensor-Box/carousel/Slide7.PNG'}
                  />
                  <CarouselImage
                    url={'/img/content/C3-Mini-Sensor-Box/carousel/Slide8.PNG'}
                  />
                  <CarouselImage
                    url={'/img/content/C3-Mini-Sensor-Box/carousel/Slide9.PNG'}
                  />
                  <CarouselImage
                    url={'/img/content/C3-Mini-Sensor-Box/carousel/Slide10.PNG'}
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="border-bottom mb-2 pb-2 h5"></h3>
              <div className="row">
                <h3 className=" mb-2 pb-2 ">
                  Get the box so that you can build all these C3-Mini Devices
                  within 3 minutes.
                </h3>
                <div className=" mb-4">
                  <strong className=" mb-1">
                    Select your S-M-A Triple, grab the available parts from your
                    drawer or go{' '}
                    <a
                      href="https://www.chipglobe.shop/c/iot-systeme/d1-c3-mini-shield"
                      className="text-success"
                    >
                      shopping
                    </a>{' '}
                    for getting more suited sensor boxes.
                  </strong>
                </div>

                <div className="col-lg-4 mb-6 wow fadeIn  ">
                  <div
                    className="e-card"
                    style={{
                      boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                      height: '500px',
                    }}
                  >
                    <video
                      src="/videos/content/sma02.mp4"
                      loop={true}
                      autoPlay={true}
                      muted
                      className="wow fadeInUp w-100"
                      data-wow-delay="100ms"
                      style={{
                        visibility: 'visible',
                        animationDelay: '100ms',

                        animationName: 'fadeIn',
                      }}
                    />
                    <h6 style={{ padding: '10px' }}>1. Make Your Triple</h6>
                    <p style={{ padding: '10px' }}>
                      Make your S-M-A Triple by attaching the three basic
                      components of any IoT solution, the Sensor, the
                      Microcontroller and the Actuator onto the black
                      Triple-Adapter.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 mb-6 wow fadeIn  ">
                  <div
                    className="e-card"
                    style={{
                      boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                      height: '500px',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/img/content/install/install.png"
                      className="mt-1-9 wow fadeInUp"
                      data-wow-delay="100ms"
                      alt="..."
                      style={{
                        visibility: 'visible',
                        animationDelay: '100ms',
                        animationName: 'fadeIn',
                      }}
                    />
                    <h6 style={{ padding: '10px' }}>
                      2. Install one of the various prepared applications to
                      your triple
                    </h6>
                    <p style={{ padding: '10px' }}>
                      Inject an application from Solution Builder website into
                      your Triple by using any browser on your laptop or pc, no
                      extra pc-software-installation is required.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 mb-6 wow fadeIn ">
                  <div
                    className="e-card"
                    style={{
                      boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                      height: '500px',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/img/content/install/install-for-free.png"
                      className="mt-1-9 wow fadeInUp"
                      data-wow-delay="100ms"
                      alt="..."
                      style={{
                        visibility: 'visible',
                        animationDelay: '100ms',
                        animationName: 'fadeIn',
                      }}
                    />
                    <h6 style={{ padding: '10px' }}>
                      3. Enclose and place in your home
                    </h6>
                    <p style={{ padding: '10px' }}>
                      House your Triple by a 3D-printed enclosure (optional) and
                      place it in your apartment, powered by a phone charger, no
                      pc required.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Barometric */}
                {/* <CarenuityDevice
                    name={{
                      short: 'Barometer',
                      long: `Barometric Pressure & Temperature by BMP180-Sensor (BOSCH)`,
                    }}
                    imageUrl={'/img/sensors/Barometer-sensor.png'}
                    webFlashUrl={
                      'https://chipglobe-dev.web.app/cloudfree/BMP180/C3-Mini'
                    }
                  /> */}
                <h4>Barometer</h4>
                <p>
                  Measures atmospheric pressure. It can be equipped with a
                  display to show pressure readings or a buzzer to signal
                  significant changes, which may indicate weather shifts.
                  <br />
                  <a
                    href="https://www.instagram.com/p/DMu1xu1NIEp/"
                    target="blank"
                  >
                    <u>See how to assemble</u>
                    <br />
                  </a>
                  <a
                    href="https://www.instagram.com/p/DMu5_BgtxYJ/"
                    target="blank"
                  >
                    <u>How to install</u>
                    <br />
                  </a>
                </p>
                <div className="col-lg-8  ">
                  <SolutionWidget solutionId="nzeAXNAV3LOeRA2avVDM" />
                  <SolutionWidget solutionId="mROIhGQ4xc7dgA1bcTd4" />
                </div>
                <hr className="mb-4" />
                <h4>Hygrometer</h4>
                <p>
                  {' '}
                  Monitors air humidity. It may use a display to show relative
                  humidity or a buzzer to alert when humidity levels fall
                  outside a desired range.
                  <br />
                  <a
                    href="https://www.instagram.com/p/DMxBFH7tDSY/"
                    target="blank"
                  >
                    <u>See how to assemble</u>
                    <br />
                  </a>
                </p>
                {/* Hygrometer-1 */}
                <div className="col-lg-8  ">
                  <SolutionWidget solutionId="KiKMCrAtAioE0f3vcQ3Q" />
                  <SolutionWidget solutionId="5v3QisKoW3z20dzPP9gf" />
                </div>
                <hr className="mb-4" />
                <h4>IR Radiometer</h4>
                <p>
                  Detects thermal radiation without contact. It can use a
                  display to show surface temperatures or a buzzer to indicate
                  abnormal thermal readings.
                  <br />
                  <a
                    href="https://www.instagram.com/p/DMxWqowNWAo/"
                    target="blank"
                  >
                    <u>See how to assemble</u>
                  </a>
                </p>
                {/* IR Radiometer */}
                <div className="col-lg-8  ">
                  <SolutionWidget solutionId="KzjsdjS3rA1J5ABAn9Uu" />
                  <SolutionWidget solutionId="uEzTHcu5LHthUsDmH195" />
                </div>
                <hr className="mb-4" />
                <h4>Luxmeter</h4>
                <p>
                  Measures light intensity. It may have a display showing lux
                  values or a buzzer that activates when light levels are too
                  high or too low.
                  <br />
                  <a
                    href="https://www.instagram.com/p/DMxcpzuthU5/"
                    target="blank"
                  >
                    <u>See how to assemble</u>
                  </a>
                </p>

                {/* Luxmeter */}
                <div className="col-lg-8  ">
                  <SolutionWidget solutionId="74eP4Syrjw85D0UWmqqi" />
                  <SolutionWidget solutionId="7C7ry0cBJ2igYiv8OS8q" />
                </div>
                <hr className="mb-4" />
                <h4>Thermometer</h4>

                <p>
                  Measures temperature. It can feature a display for real-time
                  temperature readings or a buzzer to notify when temperatures
                  exceed or drop below set thresholds.
                  <br />
                  <a
                    href="https://www.instagram.com/p/DMxD5ILtbvc/"
                    target="blank"
                  >
                    <u>See how to assemble</u>
                    <br />
                  </a>
                  <a
                    href="https://www.instagram.com/solutions.carenuity/reel/DNAkYVetFUD/"
                    target="blank"
                  >
                    <u>How to install</u>
                  </a>
                </p>

                {/* Thermometer */}
                <div className="col-lg-8  ">
                  <SolutionWidget solutionId="T8iq4WKgvGuCrREcLNzC" />
                  <SolutionWidget solutionId="NCKgNpqMMPWE68tBoNGW" />
                </div>
                <hr className="mb-4" />
                <h4>Motion Detector</h4>
                <p>
                  Senses movement. It may show motion status on a display or use
                  a buzzer to audibly alert when movement is detected.
                  <br />
                  <a
                    href="https://www.instagram.com/p/DM-BLZttwyd/"
                    target="blank"
                  >
                    <u>See how to assemble</u>
                  </a>
                </p>

                {/* Motion Detector */}
                <div className="col-lg-8  ">
                  <SolutionWidget solutionId="UvGo54vaf9rNgSVCuuDp" />
                  <SolutionWidget solutionId="ce57xKxHhSJGVzb4P1Jk" />
                </div>
                <hr className="mb-4" />
                <h4>Presence Button</h4>
                <p>
                  Detects user presence through interaction. It can confirm
                  activation via a display or provide feedback through a buzzer
                  when pressed.
                  <br />
                  <a
                    href="https://www.instagram.com/p/DNAb3TGN9UA/"
                    target="blank"
                  >
                    <u>See how to assemble</u>
                  </a>
                </p>
                {/* Presence Detector */}
                <div className="col-lg-8  ">
                  <SolutionWidget solutionId="yvn3zXHy5FO0549khDk9" />
                  <SolutionWidget solutionId="1H6rdCdC4OX5q88hnYv5" />
                </div>
                <hr className="mb-4" />
              </div>
            </div>
            <div className="row text-center">
              <h3 className="h5 text-start">Install-for-Free Video Guide</h3>

              <div className="col-lg-6 mb-4 ">
                <video
                  src="/videos/content/installing_app_on_C3-Mini.MOV"
                  className="rounded-2 img-fluid"
                  controls
                  loop
                  style={{ textAlign: 'left' }}
                ></video>
              </div>

              {/* <div className='col-lg-2'> */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {/* <img
                src="/img/sensors/YOUR-SENSOR_C3-Mini_0.66-OLED_cloudfree.png"
                alt="Custom Sensor"
                className="img-fluid"
              />
              </div> */}
              <div className="d-flex flex-column bg-secondary align-items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/replacing-the-sensor.webp"
                  alt="Tripple Adaptor"
                  className="img-fluid"
                  style={{
                    width: '10rem',
                  }}
                />
                <p className="text-white mx-3 text-start">
                  Stack one of the seven sensor boards onto the Triple-Adapter,
                  place the C3-Mini in the middle and add the display or buzzer
                  on the right.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
