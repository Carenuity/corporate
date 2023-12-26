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
        <title>Single Sensor Box</title>
      </Head>
      <div>
        <div className="wow fadeIn" data-wow-delay="200ms">
          <div className="section-title mb-1-9">
            <span className="sm-title" style={{ fontSize: '.7em' }}>
              Single Sensor Box
            </span>
            <h2 className="mb-0 h5">
              Grab any of the single sensor boxes and build your own device, by
              installing 7 different sensors for getting a Barometer,
              Hygrometer, Luxmeter, Motion Detector … all for free
            </h2>
          </div>
          <h2 className="mb-3 h3">What is a Sensor Box</h2>
          <p className="mb-lg-1-9">
            A Single Sensor Box is a module that comes with{' '}
            <strong>a Triple-Adapter</strong> to ease connecting sensor,
            microcontroller and actuator in any combination you prefer,{' '}
            <strong>a plastic casing</strong> to house the setup,{' '}
            <strong>a C3-Mini microcontroller</strong>,{' '}
            <strong>a display</strong> to read the measurement and{' '}
            <strong>the seven sensors</strong> you can test with.
          </p>
          <p>
            Beside the C3-Mini comes one Display to visualize the sensors
            measurements and a Buzzer for triggering an alarm. A Triple-Adapter
            allows to conveniently plug the parts together and the USB-A Type-C
            data cable inside allows powering your built device. Just use the
            free C3-Installer - of course for free.
          </p>
        </div>
        <div className="row mb-1-9">
          <div className="col-md-6 wow fadeIn" data-wow-delay="200ms">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={'/img/selection-boxes/PIR_C3-Mini_0.66-OLED.jpeg'}
              alt="selection box"
            />
          </div>
          <div className="col-md-6 wow fadeIn" data-wow-delay="400ms">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/selection-boxes/SGP30_C3-Mini_0.66-OLED_White.jpeg"
              alt="selection box"
            />
            <p className="mb-1-9 wow fadeIn" data-wow-delay="200ms">
              You find that sticker on each Modular C3-Mini™ Sensor Selection
              Box.
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
  pageUrl: '/c3-mini-sensor',
  pageTitle: 'Single Sensor Box',
  serviceCategory: 'Budget Friendly Not Only For Students',
});
