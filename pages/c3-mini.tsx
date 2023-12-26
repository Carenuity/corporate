import { useContext } from 'react';
import ServiceHOC from '../components/hoc/ServiceHOC';
import { servicesUrls } from '../utils/constants';
import { StoreContext } from '../components/context/Store';
import Head from 'next/head';

const Index = () => {
  const { state } = useContext(StoreContext);
  return (
    <>
      <Head>
        <title>C3-Mini Board</title>
      </Head>
      <div>
        <div className="wow fadeIn" data-wow-delay="200ms">
          <div className="section-title mb-1-9">
            <span className="sm-title" style={{ fontSize: '.7em' }}>
              C3-Mini
            </span>
            <h2 className="mb-0 h5">
              Grab the C3-Mini microcontroller and build your own device, by
              installing 7 different sensors for getting a Barometer,
              Hygrometer, Luxmeter, Motion Detector … all for free
            </h2>
          </div>
          <h2 className="mb-3 h3">What is the C3-Mini?</h2>
          <p className="mb-lg-1-9">
            The ESP32-Mini was the successor of the D1-Mini, comes with added
            Bluetooth and is now the predecessor of the latest C3-Mini™, which
            we recommend to stay future proof with respect to the upcoming
            Matter standard.
          </p>
          <p>
            For flashing C3-Mini successfully, you need to hold the BOOT-Button,
            click in parallel the RST-Button for a moment while still keeping
            BOOT button pressed and then start WebFlashing. Once Flashing
            started you can release the BOOT-Button. Whenever you want to quick
            change a sensor, do the same procedure. We know this is tedious,
            compared to old ESP8266 / ESP32 boards. Therefore we work on
            convenience measures against it.
          </p>
        </div>
        <div className="row mb-1-9">
          <div className="col-md-6 wow fadeIn" data-wow-delay="200ms">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={'/img/boards/PREVIEW_M_C3-MINI.PNG'} alt="C3-Mini" />
          </div>
          <div className="col-md-6 wow fadeIn" data-wow-delay="400ms">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/selection-boxes/SGP30_C3-Mini_0.66-OLED_White.jpeg"
              alt="C3-Mini"
            />
            <p className="mb-1-9 wow fadeIn" data-wow-delay="200ms">
              This selection box eases the setup for you to test the 7 featured
              sensors.
            </p>
            <a
              href={'/c3-mini-box-devices'}
              className="btn-style2 px-3 small text-center"
            >
              <span className="text-white">Install For Free (7 Devices)</span>
            </a>
          </div>
        </div>
        <h3 className="h5">Build your own device within seconds:</h3>
        <div className="row mb-1-9">
          <div className="col-md-4 wow fadeIn" data-wow-delay="200ms">
            <div className="d-flex align-items-center">
              <i className="ti-check display-26 text-primary"></i>
              <span className="ms-3 text-dark fw-bold">Barometer</span>
            </div>
            <div className="d-flex align-items-center mt-4">
              <i className="ti-check display-26 text-primary"></i>
              <span className="ms-3 text-dark fw-bold">Hygrometer</span>
            </div>
            <div className="d-flex align-items-center mt-4">
              <i className="ti-check display-26 text-primary"></i>
              <span className="ms-3 text-dark fw-bold">Thermometer</span>
            </div>
          </div>
          <div className="col-md-4 wow fadeIn" data-wow-delay="400ms">
            <div className="d-flex align-items-center mt-4 mt-md-0">
              <i className="ti-check display-26 text-primary"></i>
              <span className="ms-3 text-dark fw-bold">Luxmeter</span>
            </div>
            <div className="d-flex align-items-center mt-4">
              <i className="ti-check display-26 text-primary"></i>
              <span className="ms-3 text-dark fw-bold">IR Radiometer</span>
            </div>
          </div>
          <div className="col-md-4 wow fadeIn" data-wow-delay="200ms">
            <div className="d-flex align-items-center mt-4 mt-md-0">
              <i className="ti-check display-26 text-primary"></i>
              <span className="ms-3 text-dark fw-bold">Motion Detector</span>
            </div>
            <div className="d-flex align-items-center mt-4">
              <i className="ti-check display-26 text-primary"></i>
              <span className="ms-3 text-dark fw-bold">Presence Button</span>
            </div>
          </div>
        </div>
        <div className="row mb-1-9 bg-secondary p-3 text-white">
          <div
            className="col-lg-5 mb-4 mb-lg-0 wow fadeIn"
            data-wow-delay="200ms"
            style={{
              visibility: 'visible',
              animationDelay: '200ms',
              animationName: 'fadeIn',
            }}
          >
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/quick-change-feature.webp"
                  className="rounded-circle"
                  alt="Carenuity Device"
                  style={{ width: '130px', height: '100px' }}
                />
              </div>
              <div className="flex-grow-1 ms-3">
                {/* <h4 className='h5'>Strategy</h4> */}
                <p className="mb-0 small">
                  The QUICK CHANGE allows to easily get the right device for
                  your actual need.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-7 wow fadeIn"
            data-wow-delay="200ms"
            style={{
              visibility: 'visible',
              animationDelay: '200ms',
              animationName: 'fadeIn',
            }}
          >
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/replacing-the-sensor.webp"
                  className=" img-fluid"
                  style={{ width: '174px', height: '120px' }} // rounded-circle
                  alt="Carenuity Device"
                />
              </div>
              <div className="flex-grow-1 ms-3">
                {/* <h4 className='h5'>Restructuring</h4> */}
                <p className="mb-0 small">
                  All you do is replacing the one sensor by plugging-in the
                  desired, following the illustration for installing the new
                  device.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <h3 className='h5'>Build your own device within seconds:</h3> */}
        <div className="row mb-1-9">
          <div
            className="col-md-12 text-center wow fadeIn"
            data-wow-delay="200ms"
          >
            <p className="text-start">
              From this Modular C3-Mini™ Sensor Selection Box you select one of
              the 7 sensors, which you combine with the C3-Mini microcontroller
              and the OLED display on the Triple-Adapter, as illustrated and
              install the selected application:
            </p>
            <a
              href={state.urls.webFlash}
              className="btn-style2 px-3 small text-center"
            >
              <span className="text-white">Install For Free</span>
            </a>
            <p className="mt-3 text-start">
              Once you want to buy more parts or spare parts, be it sensors or
              microcontrollers, you find a good offer in the ChipGlobe WebShop:
            </p>
            <a
              href="https://www.chipglobe.shop/en/c/iot-systems/wemos-d1-mini?sort=position-asc&page=2"
              target="_blank"
              rel="noreferrer"
              className="btn-style2 px-3 small text-center"
            >
              <span className="text-white">Buy C3-Mini Parts</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceHOC(Index, {
  servicesCategoryUrls: servicesUrls.standard,
  pageUrl: '/c3-mini',
  pageTitle: 'C3-Mini microcontroller',
  serviceCategory: 'Budget Friendly Not Only For Students',
});
