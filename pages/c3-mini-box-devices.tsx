import Head from 'next/head';
import React from 'react';
import PageTitle from '../components/PageTitle';
import CarenuityDevice from '../components/CarenuityDevice';
import CarouselImage from '../components/CarouselImage';

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
        prevPage="C3-Mini Sensor Box"
        prevPageUrl="/c3-mini-box"
        pageTitle={'C3-Mini Sensor Box Devices'}
        pageUrl="/c3-mini-box-devices"
      />

      <section className="pt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mt-n1-9">
              <div className="pe-lg-1-9 mt-3">
                <div className="owl-carousel owl-theme text-center testimonial-carousel1">
                  {/* <CarouselImage
                    url={'/img/content/Sensor-Selection-Box.jpeg'}
                  />
                  <CarouselImage
                    url={
                      '/img/content/modular-C3-Mini-sensor-selection-box.webp'
                    }
                  />
                  <CarouselImage
                    url={
                      '/img/content/WebFlashing_S-M-A_Building_Blocks_on_TRIPLE_ADAPTER.png'
                    }
                  /> */}
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
                  {/* <CarouselImage
                    url={
                      '/img/content/C3-Mini-Sensor-Box/DHT11_C3-Mini_0.66-OLED_HA.PNG'
                    }
                  />
                  <CarouselImage
                    url={
                      '/img/content/C3-Mini-Sensor-Box/DS18B20_C3-Mini_0.66-OLED_HA.PNG'
                    }
                  />
                  <CarouselImage
                    url={
                      '/img/content/C3-Mini-Sensor-Box/H6XXT_C3-Mini_0.66-OLED_HA.PNG'
                    }
                  />
                  <CarouselImage
                    url={
                      '/img/content/C3-Mini-Sensor-Box/PIR_C3-Mini_0.66-OLED_HA.PNG'
                    }
                  /> */}
                </div>
                <div>
                  <h3 className="border-bottom mb-2 pb-2 h5">
                    C3-Mini Devices
                  </h3>
                  {/* Barometric */}
                  <CarenuityDevice
                    name={{
                      short: 'Barometer',
                      long: `Barometric Pressure & Temperature by BMP180-Sensor (BOSCH)`,
                    }}
                    imageUrl={'/img/sensors/Barometer-sensor.png'}
                    webFlashUrl={
                      'https://chipglobe-dev.web.app/cloudfree/BMP180/C3-Mini'
                    }
                  />

                  {/* Hygrometer-1 */}
                  <CarenuityDevice
                    name={{
                      short: 'Hygrometer-1',
                      long: `Temperature & Humidity by DHT11 (AOSONG/ASAIR)`,
                    }}
                    imageUrl={'/img/sensors/Hygrometer-sensor.png'}
                    webFlashUrl={
                      'https://chipglobe-dev.web.app/cloudfree/DHT11/C3-Mini'
                    }
                  />

                  {/* IR Radiometer */}
                  <CarenuityDevice
                    name={{
                      short: 'IR Radiometer',
                      long: `Infrared Radiation Detector by IRM-H6XXT/TR2 (EVERLIGHT)`,
                    }}
                    imageUrl={'/img/sensors/IR-Radiometer-sensor.png'}
                    webFlashUrl={
                      'https://chipglobe-dev.web.app/cloudfree/H6XXT/C3-Mini'
                    }
                  />

                  {/* Luxmeter */}
                  <CarenuityDevice
                    name={{
                      short: 'Luxmeter',
                      long: `Ambient Light by BH1750FVI (ROHM SEMICONDUCTOR)`,
                    }}
                    imageUrl={'/img/sensors/Luxmeter-sensor.png'}
                    webFlashUrl={
                      'https://chipglobe-dev.web.app/cloudfree/BH1750/C3-Mini'
                    }
                  />

                  {/* Thermometer */}
                  <CarenuityDevice
                    name={{
                      short: 'Thermometer',
                      long: `Temperature by DS18B20 (MAXIM ANALOG DEVICES)`,
                    }}
                    imageUrl={'/img/sensors/Thermometer-sensor.png'}
                    webFlashUrl={
                      'https://chipglobe-dev.web.app/cloudfree/DS18B20/C3-Mini'
                    }
                  />

                  {/* Motion Detector */}
                  <CarenuityDevice
                    name={{
                      short: 'Motion Detector',
                      long: `Passive Infrared Radiation Detector by PIR (ADAFRUIT)`,
                    }}
                    imageUrl={'/img/sensors/Motion-Detector-sensor.png'}
                    webFlashUrl={
                      'https://chipglobe-dev.web.app/cloudfree/PIR/C3-Mini'
                    }
                  />

                  {/* Presence Detector */}
                  <CarenuityDevice
                    name={{
                      short: 'Presence Detector',
                      long: `Push / Click Control by One-Button (DIGIKEY)`,
                    }}
                    imageUrl={'/img/sensors/Presence-Detector-sensor.png'}
                    webFlashUrl={
                      'https://chipglobe-dev.web.app/cloudfree/BUTTON/C3-Mini'
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/sensors/YOUR-SENSOR_C3-Mini_0.66-OLED_cloudfree.png"
                alt="Custom Sensor"
                className="img-fluid"
              />
              <div className="mt-4">
                <h3 className="h5 text-start">Install-for-Free Video Guide</h3>
                <video
                  src="/videos/content/Installing_App_on_C3-Mini.MOV"
                  className="rounded-2 img-fluid"
                  controls
                  loop
                ></video>
              </div>
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
                  Have the C3-Mini in the middle and the display board on the
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
