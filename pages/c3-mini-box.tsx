import ServiceHOC from '../components/hoc/ServiceHOC';
import { servicesUrls } from '../utils/constants';

const Index = () => {
  return (
    <>
      <div>
        <div className='wow fadeIn' data-wow-delay='200ms'>
          <div className='section-title mb-1-9'>
            <span className='sm-title' style={{ fontSize: '.7em' }}>
              Sensor Selection Box
            </span>
            <h2 className='mb-0 h5'>
              Grab that Sensor Box and build your own device, by installing 7
              different sensors for getting a Barometer, Hygrometer, Luxmeter,
              Motion Detector … all for free
            </h2>
          </div>
          <h2 className='mb-3 h3'>What is Inside?</h2>
          <p className='mb-lg-1-9'>
            This Modular C3-Mini™ Sensor Selection Box comes with 7 sensors for
            easy plug&build a device like Barometer, Hygrometer, Thermometer,
            Luxmeter, IR Radiometer, Motion Detector, Presence Button.
          </p>
          <p>
            Beside the C3-Mini comes one Display to visualize the sensors
            measurements and a Buzzer for triggering an alarm. A Triple-Adapter
            allows to conveniently plug the parts together and the USB-A Type-C
            data cable inside allows powering your built device. Just use the
            free C3-Installer - of course for free.
          </p>
        </div>
        <div className='row mb-1-9'>
          <div className='col-md-6 wow fadeIn' data-wow-delay='200ms'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={'/img/content/modular-C3-Mini-sensor-selection-box.png'}
              alt='Carenuity Sensors'
            />
          </div>
          <div className='col-md-6 wow fadeIn' data-wow-delay='400ms'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src='/img/content/Sensor-Selection-Box.jpeg' alt='C3-Mini' />
            <p className='mb-1-9 wow fadeIn' data-wow-delay='200ms'>
              You find that sticker on each Modular C3-Mini™ Sensor Selection
              Box.
            </p>
          </div>
        </div>
        <h3 className='h5'>Build your own device within seconds:</h3>
        <div className='row mb-1-9'>
          <div className='col-md-4 wow fadeIn' data-wow-delay='200ms'>
            <div className='d-flex align-items-center'>
              <i className='ti-check display-26 text-primary'></i>
              <span className='ms-3 text-dark fw-bold'>Barometer</span>
            </div>
            <div className='d-flex align-items-center mt-4'>
              <i className='ti-check display-26 text-primary'></i>
              <span className='ms-3 text-dark fw-bold'>Hygrometer</span>
            </div>
            <div className='d-flex align-items-center mt-4'>
              <i className='ti-check display-26 text-primary'></i>
              <span className='ms-3 text-dark fw-bold'>Thermometer</span>
            </div>
          </div>
          <div className='col-md-4 wow fadeIn' data-wow-delay='400ms'>
            <div className='d-flex align-items-center mt-4 mt-md-0'>
              <i className='ti-check display-26 text-primary'></i>
              <span className='ms-3 text-dark fw-bold'>Luxmeter</span>
            </div>
            <div className='d-flex align-items-center mt-4'>
              <i className='ti-check display-26 text-primary'></i>
              <span className='ms-3 text-dark fw-bold'>IR Radiometer</span>
            </div>
          </div>
          <div className='col-md-4 wow fadeIn' data-wow-delay='200ms'>
            <div className='d-flex align-items-center mt-4 mt-md-0'>
              <i className='ti-check display-26 text-primary'></i>
              <span className='ms-3 text-dark fw-bold'>Motion Detector</span>
            </div>
            <div className='d-flex align-items-center mt-4'>
              <i className='ti-check display-26 text-primary'></i>
              <span className='ms-3 text-dark fw-bold'>Presence Button</span>
            </div>
          </div>
        </div>
        <div className='row mb-1-9 bg-secondary p-3 text-white'>
          <div
            className='col-lg-6 mb-4 mb-lg-0 wow fadeIn'
            data-wow-delay='200ms'
            style={{
              visibility: 'visible',
              animationDelay: '200ms',
              animationName: 'fadeIn',
            }}
          >
            <div className='d-flex align-items-center'>
              <div className='flex-shrink-0'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src='/img/content/quick-change-feature.png'
                  className='rounded-circle'
                  alt='Carenuity Device'
                  style={{ width: '130px', height: '100px' }}
                />
              </div>
              <div className='flex-grow-1 ms-3'>
                {/* <h4 className='h5'>Strategy</h4> */}
                <p className='mb-0 small'>
                  The QUICK CHANGE allows to easily get the right device for
                  your actual need.
                </p>
              </div>
            </div>
          </div>
          <div
            className='col-lg-6 wow fadeIn'
            data-wow-delay='200ms'
            style={{
              visibility: 'visible',
              animationDelay: '200ms',
              animationName: 'fadeIn',
            }}
          >
            <div className='d-flex align-items-center'>
              <div className='flex-shrink-0'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src='/img/content/D1-C3-Mini-logo.png'
                  className=' img-fluid'
                  style={{ width: '100px', height: '100px' }} // rounded-circle
                  alt='Carenuity Device'
                />
              </div>
              <div className='flex-grow-1 ms-3'>
                {/* <h4 className='h5'>Restructuring</h4> */}
                <p className='mb-0 small'>
                  All you do is replacing the one sensor by plugging-in the
                  desired, following the illustration for installing the new
                  device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceHOC(Index, {
  servicesCategoryUrls: servicesUrls.standard,
  pageUrl: '/c3-mini-box',
  pageTitle: 'Modular C3-Mini Sensor Selection Box',
  serviceCategory: 'Budget Friendly Not Only For Students',
});