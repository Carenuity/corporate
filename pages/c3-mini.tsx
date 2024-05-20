import { useContext } from 'react';
import ServiceHOC from '../components/hoc/ServiceHOC';
import { servicesUrls } from '../utils/constants';
import { StoreContext } from '../components/context/Store';
import Head from 'next/head';
import Link from 'next/link';

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
          </div>
        </div>

        <div className="row">
          <div className="col-6 px-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/content/C3-MINI/C3-MINI_front.jpeg"
              alt="C3-MINI"
              className="img-fluid img-thumbnail rounded-0 rounded-start"
            />
          </div>
          <div className="col-6 px-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/content/C3-MINI/C3-MINI_back.jpeg"
              alt="C3-MINI"
              className="img-fluid img-thumbnail rounded-0 rounded-end"
            />
          </div>
        </div>

        <p className="mb-lg-1-5 mt-3">
          A mini wifi & Bluetooth5 (LE) boards based ESP32-C3FH4. [
          <a
            href="https://www.chipglobe.shop/p/carenuity-original-c3-mini-v2-2-1-esp32-c3-iot-development-board"
            className="link-success"
          >
            Buy it
          </a>
          ]
        </p>

        <div className="row">
          <Link href={'#features'} className="mb-2 h4" id="features">
            Features
          </Link>
          <div className="col-12">
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-primary"></i>
              <span className="ms-2 text-dark">
                based ESP32-C3 WIFI & Bluetooth LE RISC-V Single-Core CPU
              </span>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-primary"></i>
              <span className="ms-2 text-dark">Type-C USB</span>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-primary"></i>
              <span className="ms-2 text-dark">4MB Flash</span>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-primary"></i>
              <span className="ms-2 text-dark">12x IO</span>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-primary"></i>
              <span className="ms-2 text-dark">1x WS2812B RGB LED</span>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-primary"></i>
              <span className="ms-2 text-dark">ADC, I2C, SPI, UART</span>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-primary"></i>
              <span className="ms-2 text-dark">
                Compatible with LOLIN D1 mini shields
              </span>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-primary"></i>
              <span className="ms-2 text-dark">
                Compatible with MicroPython, Arduino, CircuitPython and ESP-IDF
              </span>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-primary"></i>
              <span className="ms-2 text-dark">
                Default firmware: MicroPython
              </span>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <Link href={'#tutorials'} className="mb-2 h4" id="tutorials">
            Tutorials
          </Link>
          <div className="col-12">
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-black"></i>
              <a
                href="https://www.wemos.cc/en/latest/tutorials/c3/get_started_with_micropython_c3.html"
                target="_blank"
                className="ms-2 link-success"
                rel="noreferrer"
              >
                Get started with MicroPython [C3 series]
              </a>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-black"></i>
              <a
                href="https://www.wemos.cc/en/latest/tutorials/c3/get_started_with_arduino_c3.html"
                target="_blank"
                className="ms-2 link-success"
                rel="noreferrer"
              >
                Get started with Arduino [C3 series]
              </a>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-black"></i>
              <a
                href="https://www.wemos.cc/en/latest/tutorials/c3/get_started_with_circuitpython_c3.html"
                target="_blank"
                className="ms-2 link-success"
                rel="noreferrer"
              >
                Get started with CircuitPython [C3 series]
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-3 mb-2">
          <Link href={'#documentation'} className="mb-2 h4" id="documentation">
            Documentation
          </Link>
          <div className="col-12">
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-black"></i>
              <a
                href="https://www.wemos.cc/en/latest/_static/files/sch_c3_mini_v2.1.0.pdf"
                target="_blank"
                className="ms-2 link-success"
                rel="noreferrer"
              >
                Schematic V2.1.0[PDF]
              </a>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-black"></i>
              <a
                href="https://www.wemos.cc/en/latest/_static/files/dim_c3_mini_v1.0.0.pdf"
                target="_blank"
                className="ms-2 link-success"
                rel="noreferrer"
              >
                Dimension V2.1.0[PDF]
              </a>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-black"></i>
              <a
                href="https://www.espressif.com/sites/default/files/documentation/esp32-c3_datasheet_en.pdf"
                target="_blank"
                className="ms-2 link-success"
                rel="noreferrer"
              >
                ESP32-C3 Datasheet
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <Link href={'#specs'} className="mb-2 h4" id="specs">
            Technical specs
          </Link>
          <div className="col-md-6">
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>Operating Voltage</td>
                  <td>3.3V</td>
                </tr>
                <tr>
                  <td>Digital I/O Pins</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Clock Speed</td>
                  <td>160MHz</td>
                </tr>
                <tr>
                  <td>Flash</td>
                  <td>4M Bytes</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>34.3*25.4mm</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>2.6g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row mt-3">
          <Link href={'#pin'} className="mb-2 h4" id="pin">
            Pin
          </Link>
          <div className="col-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/content/C3-MINI/C3-MINI_pins.jpeg"
              alt="C3-MINI Pins"
              className="img-fluid"
            />
          </div>
        </div>

        <div className="row mt-3 mb-2">
          <Link href={'#version'} className="mb-2 h4" id="version">
            Version
          </Link>
          <div className="col-12">
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-black"></i>
              <span>
                <a
                  href="/c3-mini"
                  target="_blank"
                  className="ms-2 link-success"
                  rel="noreferrer"
                >
                  V2.2.1
                </a>{' '}
                Carenuity EU version
              </span>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-black"></i>
              <span>
                <a
                  href="https://www.wemos.cc/en/latest/c3/c3_mini.html"
                  target="_blank"
                  className="ms-2 link-success"
                  rel="noreferrer"
                >
                  V2.1.0
                </a>{' '}
                Lolin version
              </span>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-black"></i>
              <a
                href="https://www.wemos.cc/en/latest/c3/c3_mini_1_0_0.html"
                target="_blank"
                className="ms-2 link-success"
                rel="noreferrer"
              >
                V1.0.0
              </a>
            </div>
          </div>
        </div>

        <Link href={'#applications'} id="applications" className="h3">
          Applications
        </Link>
        <h2 className="mb-2 mt-3 h6">
          Grab the C3-Mini microcontroller and build your own device, by
          installing 7 different sensors for getting a Barometer, Hygrometer,
          Luxmeter, Motion Detector … all for free
        </h2>
        <h2 className="mb-2 h4">What is the C3-Mini?</h2>
        <p className="mb-lg-1-9">
          The ESP32-Mini was the successor of the D1-Mini, comes with added
          Bluetooth and is now the predecessor of the latest C3-Mini™, which we
          recommend to stay future proof with respect to the upcoming Matter
          standard.
        </p>
        <p>
          For flashing C3-Mini successfully, you need to hold the BOOT-Button,
          click in parallel the RST-Button for a moment while still keeping BOOT
          button pressed and then start WebFlashing. Once Flashing started you
          can release the BOOT-Button. Whenever you want to quick change a
          sensor, do the same procedure. We know this is tedious, compared to
          old ESP8266 / ESP32 boards. Therefore we work on convenience measures
          against it.
        </p>
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
