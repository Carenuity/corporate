import { useContext } from 'react';
import ServiceHOC from '../components/hoc/ServiceHOC';
import { servicesUrls } from '../utils/constants';
import { StoreContext } from '../components/context/Store';
import Head from 'next/head';
import Link from 'next/link';

const Index = ({ isMobile }: { isMobile: boolean }) => {

  const { state } = useContext(StoreContext);
  return (
    <>
      <Head>
        <title>Sensor Selection Box</title>
      </Head>
      <div>
        <div className="wow fadeIn" data-wow-delay="200ms">
          <div className="section-title mb-1-9">
            <span className="sm-title" style={{ fontSize: '.7em' }}>
              Sensor Selection Box
            </span>
            <h2 className="mb-0 h5">
              Grab that Sensor Box and build your own device, by installing 7
              different sensors for getting a Barometer, Hygrometer, Luxmeter,
              Motion Detector … all for free
            </h2>
          </div>
          <h2 className="mb-3 h3">What is Inside?</h2>
          <p className="mb-lg-1-9">
            This Modular C3-Mini™ Sensor Selection Box comes with 7 sensors for
            easy plug&build a device like Barometer, Hygrometer, Thermometer,
            Luxmeter, IR Radiometer, Motion Detector, Presence Button.
          </p>
          <p>
            Beside the C3-Mini comes one Display to visualize the sensors
            measurements and a Buzzer for triggering notifications or alarms. The Triple-Adapter
            allows to conveniently plug the parts together and the USB Type-C
            data cable inside allows powering your built device. Just use the
            Solution Builder - for free.
          </p>
        </div>
        <div className="row mb-1-9">
          <div className="col-md-6 wow fadeIn" data-wow-delay="200ms">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={'/img/content/modular-C3-Mini-sensor-selection-box.webp'}
              alt="Carenuity Sensors"
            />
          </div>
          <div className="col-md-6 wow fadeIn" data-wow-delay="400ms">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/content/Sensor-Selection-Box.jpeg" alt="C3-Mini" />
            <p className="mb-1-9 wow fadeIn" data-wow-delay="200ms">
              You find that sticker on each Modular C3-Mini™ Sensor Selection
              Box.
            </p>
            <p className=" mb-4">
              {!isMobile && (
                <Link
                  href={'/c3-mini-box-devices'}
                  target="_blank"
                  className={'btn btn-lg btn-success rounded-pill'}
                  style={{ color: 'white' }}
                >
                  <span className="small"> Install For Free (14 Devices)</span>
                </Link>
              )}

              {isMobile && (
                <a
                  href={'/c3-mini-box-devices'}
                  target="_blank"
                  className={'btn btn-lg btn-success rounded-pill'}
                  style={{ color: 'white' }}
                  rel="noreferrer"
                >
                  <span className="small">
                    Install For Free (7 Devices){' '}
                    {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                  </span>
                </a>
              )}
            </p>
            {/* <a
              href={'/c3-mini-box-devices'}
              className="btn-style2 px-3 small text-center"
            >
              <span className="text-white">Install-for-Free (14 Devices)</span>
            </a> */}
          </div>
        </div>
        <h3 className="h5">Build your own device within 3 minutes:</h3>
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
              the 7 sensors, which you combine with the C3-Mini Microcontroller
              and the OLED Display or Buzzer on the Triple-Adapter, as illustrated.
              By clicking install button you install the selected application:
            </p>
            <p className=" mb-4">
              {!isMobile && (
                <Link
                  href={'https://solutions.carenuity.com/'}
                  target="_blank"
                  className={'btn btn-lg btn-success rounded-pill'}
                  style={{ color: 'white' }}
                >
                  <span className="small"> Install-for-Free by Solution-Builder </span>
                </Link>
              )}

              {isMobile && (
                <a
                  href={'https://solutions.carenuity.com/'}
                  target="_blank"
                  className={'btn btn-lg btn-success rounded-pill'}
                  style={{ color: 'white' }}
                  rel="noreferrer"
                >
                  <span className="small">
                    Install For Free{' '}
                    {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                  </span>
                </a>
              )}
            </p>
            {/* <a
              href={state.urls.webFlash}
              className="btn-style2 px-3 small text-center"
            >
              <span className="text-white">Install-for-Free by Solution-Builder</span>
            </a> */}
            <p className="mt-3 text-start">
              Once you want to buy more parts or spare parts, be it sensors or
              microcontrollers, you find a good offer in the ChipGlobe WebShop:
            </p>
              <p className=" mb-4">
              {!isMobile && (
                <Link
                  href={'https://www.chipglobe.shop/en/c/sensors/d1-c3-mini'}
                  target="_blank"
                  className={'btn btn-lg btn-success rounded-pill'}
                  style={{ color: 'white' }}
                >
                  <span className="small"> Buy C3-Mini Parts</span>
                </Link>
              )}

              {isMobile && (
                <a
                  href={'https://www.chipglobe.shop/en/c/sensors/d1-c3-mini'}
                  target="_blank"
                  className={'btn btn-lg btn-success rounded-pill'}
                  style={{ color: 'white' }}
                  rel="noreferrer"
                >
                  <span className="small">
                    Buy C3-Mini Parts{' '}
                    {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                  </span>
                </a>
              )}
            </p>
            {/* <a
              href="https://www.chipglobe.shop/en/c/sensors/d1-c3-mini"
              target="_blank"
              rel="noreferrer"
              className="btn-style2 px-3 small text-center"
            >
              <span className="text-white">Buy C3-Mini Sensors</span>
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceHOC(Index, {
  servicesCategoryUrls: servicesUrls.standard,
  pageUrl: '/c3-mini-box',
  pageTitle: 'Modular C3-Mini Selection Box',
  serviceCategory: 'Budget Friendly Not Only For Students',
});
