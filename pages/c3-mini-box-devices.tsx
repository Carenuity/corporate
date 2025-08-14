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
                <div>
                  <h3 className="border-bottom mb-2 pb-2 h5"></h3>
                  <h3 className=" mb-2 pb-2 h5">
                    Get the box so that you can build all these C3-Mini Devices within 3 minutes.
                  </h3>
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
                  <SolutionWidget solutionId="nzeAXNAV3LOeRA2avVDM" />

                  {/* Hygrometer-1 */}
                  <SolutionWidget solutionId="KiKMCrAtAioE0f3vcQ3Q" />

                  {/* IR Radiometer */}
                  <SolutionWidget solutionId="KzjsdjS3rA1J5ABAn9Uu" />

                  {/* Luxmeter */}
                  <SolutionWidget solutionId="74eP4Syrjw85D0UWmqqi" />

                  {/* Thermometer */}
                  <SolutionWidget solutionId="T8iq4WKgvGuCrREcLNzC" />

                  {/* Motion Detector */}
                  <SolutionWidget solutionId="UvGo54vaf9rNgSVCuuDp" />

                  {/* Presence Detector */}
                  <SolutionWidget solutionId="yvn3zXHy5FO0549khDk9" />
                </div>
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
                  style={{textAlign:"left"}}
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
                  place the C3-Mini in the middle and add the display or buzzer on the
                  right.
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
