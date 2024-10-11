import { useContext } from 'react';
import ServiceHOC from '../components/hoc/ServiceHOC';
import { servicesUrls } from '../utils/constants';
import { StoreContext } from '../components/context/Store';
import Head from 'next/head';
import Link from 'next/link';
import CarenuityDevice from '../components/CarenuityDevice';
import ecosystemsImage from '../public/img/environments/ecosystems.png';
import Image from 'next/image';
import SolutionWidget from '../components/SolutionWidget';
import React from 'react';

const Index = () => {
  const { state } = useContext(StoreContext);
  return (
    <>
      <Head>
        <title>C3-Mini</title>
      </Head>
      <div className="container">
        <div className="wow fadeIn ms-3" data-wow-delay="200ms">
          <div className="section-title mb-1-9">
            <span className="sm-title" style={{ fontSize: '.7em' }}>
              C3-Mini
            </span>
            <h2 className="mb-0 display-6 fw-bold">C3-Mini</h2>
          </div>
        </div>

        <div className="row">
          {/* <div className="col-12">
            <h3 className="display-6 fw-bold">C3-Mini</h3>
          </div> */}
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

        <p className="mb-1 mt-3">
          A mini Wifi & Bluetooth5 (LE) board based on ESP32-C3FH4.
        </p>

        <div className="mb-5">
          <a
            href={
              'https://www.chipglobe.shop/p/carenuity-original-c3-mini-v2-2-1-esp32-c3-iot-development-board'
            }
            target="_blank"
            className="btn btn-sm btn-success rounded-pill me-3"
            rel="noreferrer"
          >
            Buy in Munich
          </a>
          <a
            href={'https://openelab.io/products/esp32-c3-iot-development-board'}
            target="_blank"
            className="btn btn-sm btn-success rounded-pill"
            rel="noreferrer"
          >
            Buy in Shenzhen
          </a>
        </div>

        <div className="row">
          <Link href={'#features'} className="mb-2 h4" id="features">
            Hardware Features
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
                Compatible with LOLIN D1 Mini shields
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
              Get started with Snapping off the Frame
            </div>
            <div className="mb-2">
              <iframe
                width="800"
                height="450"
                src="https://www.youtube.com/embed/WGcBlZnaca0?si=loH8TmDK1uRvrf2J"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-black"></i>
              Get started with Initialization, Web-/ Flashing, Programming
            </div>

            <p style={{ paddingLeft: '20px' }}>
              For flashing C3-Mini successfully, you need to hold the
              BOOT-Button, click in parallel the RST-Button for a moment while
              still keeping BOOT button pressed and then start WebFlashing. Once
              Flashing started you can release the BOOT-Button. Whenever you
              want to quick change a sensor, do the same procedure. We know this
              is tedious, compared to old ESP8266 / ESP32 boards. Therefore we
              work on convenience measures against it.
            </p>
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
                href="/docs/Schematic V2.2.1.pdf"
                target="_blank"
                className="ms-2 link-success"
                rel="noreferrer"
              >
                Schematic V2.2.1 [PDF]
              </a>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-black"></i>
              <a
                href="/docs/Dimension V2.2.1.PDF"
                target="_blank"
                className="ms-2 link-success"
                rel="noreferrer"
              >
                Dimension V2.2.1 [PDF]
              </a>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-black"></i>
              <a
                href="https://www.wemos.cc/en/latest/_static/files/sch_c3_mini_v2.1.0.pdf"
                target="_blank"
                className="ms-2 link-success"
                rel="noreferrer"
              >
                Schematic V2.1.0 [PDF]
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
                Dimension V2.1.0 [PDF]
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
          <div className="col-12 mb-5">
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
        {/* <h2 className="mb-2 mt-3 h6">
          Grab the C3-Mini microcontroller and build your own device, by
          installing 7 different sensors for getting a Barometer, Hygrometer,
          Luxmeter, Motion Detector … all for free
        </h2> */}
        <p className="mb-3 mt-3">
          The C3-mini, particularly the Carenuity C3 Mini, is a compact
          microcontroller that&apos;s quite versatile due to its features like
          WiFi and Bluetooth LE capabilities, a RISC-V Single-Core CPU, and
          compatibility with various programming environments such as
          MicroPython, Arduino, and CircuitPython12. Carenuity even supports
          install-for-free applications for the EcoSystems:
          <strong className="text-black"> CloudFree</strong>,
          <strong className="text-black"> Home Assistant</strong>,
          <strong className="text-black"> IoT AppStore</strong> and
          <strong className="text-black"> Matter/ESPZero</strong>.
        </p>

        <h2 className="mb-1 h5">
          Applications for the plain C3-mini &apos;standalone&apos;, no Display
          or Sensor required
        </h2>
        <p className="mb-2 mt-1 mb-5">
          Grab your plain C3-Mini and build your own device within 3 minutes, by
          installing the popular{' '}
          <strong>
            {' '}
            <a
              href="https://chipglobe-dev.web.app/cloudfree/WLED/C3-Mini"
              className="link-success"
            >
              WLED-Application
            </a>
          </strong>
          , the helpful{' '}
          <strong>
            <a
              href="https://chipglobe-dev.web.app/cloudfree/GPIO/C3-Mini"
              className="link-success"
            >
              GPIO-Viewer
            </a>
          </strong>{' '}
          or a plain “empty” ESPHome device for Home Assistant with no special
          features built-in. Ready to make it your own.
        </p>

        <h2 className="mb-1 h5">Applications for the C3-mini with Display</h2>
        <p className="mb-2 mt-1 mb-5">
          Grab your C3-Mini and build your own device within 3 minutes, by
          attaching a display{' '}
          <strong>
            [
            <a
              href="https://www.chipglobe.shop/p/0-66-zoll-oled-shield"
              className="link-success"
            >
              buy here
            </a>
            ]
          </strong>{' '}
          to enable applications like a WiFi Signal Strength Meter, a
          Weather-Station or a{' '}
          <a
            href="https://chipglobe-dev.web.app/cloudfree/YOUTUBE-METEER/C3-Mini"
            className="link-success"
          >
            YouTube-Counter
          </a>{' '}
          for Followers and Likes.
        </p>

        <h2 className="mb-1 h5">
          Applications for the C3-mini with Sensor & Display
        </h2>
        <p className="mb-3 mt-1 mb-5">
          Grab your C3-Mini and build your own device within 3 minutes, by free
          installing various sensor applications like a Barometer, Hygrometer,
          Luxmeter or Motion Detector.
        </p>

        <h2 className="mb-2 h3">EcoSystems</h2>
        <Image
          src={ecosystemsImage}
          width={1029}
          height={128}
          alt="ecosystems"
          className="img-fluid mb-2"
        />
        <p className="mb-5"></p>

        <h2 className="mb-2 h3">
          What is the difference between the D1- and the C3-Mini?
        </h2>
        <p className="mb-2">
          The two super popular boards, the D1 and C3-Mini share the same
          footprint and pinout, making them a perfect fit for the world&apos;s
          largest sensor and actuator portfolio, which includes Mikroe&apos;s
          sensors by adapters.
          <br />
          The improvements to the C3-Mini are shown in the following
          illustration:
        </p>
        <h2 className="mb-2 h3">
          Evolution of the popular footprint and pinout
        </h2>
        <p className="mb-2">
          The ESP32-Mini was the successor of the D1-Mini, comes with added
          Bluetooth and is now the predecessor of the latest C3-Mini™, which we
          recommend to stay future proof with respect to the upcoming Matter
          standard.
        </p>
        {/* <div className="mb-2">
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/WGcBlZnaca0?si=loH8TmDK1uRvrf2J"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <p>
          For flashing C3-Mini successfully, you need to hold the BOOT-Button,
          click in parallel the RST-Button for a moment while still keeping BOOT
          button pressed and then start WebFlashing. Once Flashing started you
          can release the BOOT-Button. Whenever you want to quick change a
          sensor, do the same procedure. We know this is tedious, compared to
          old ESP8266 / ESP32 boards. Therefore we work on convenience measures
          against it.
        </p> */}
        <div className="row mb-1-9">
          <div className="col-md-6 wow fadeIn" data-wow-delay="200ms">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={'/img/boards/PREVIEW_M_C3-MINI.PNG'} alt="C3-Mini" />
          </div>
          <div className="col-md-6 wow fadeIn" data-wow-delay="400ms">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/selection-boxes/C3-mini_selection-box_case.png"
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

        {/* GPIO Viewer */}
        <CarenuityDevice
          name={{
            short: 'GPIO Viewer',
            long: `Monitor GPIO pins on your browser`,
          }}
          imageUrl={'/img/sensors/GPIO_banner.jpeg'}
          webFlashUrl={'https://chipglobe-dev.web.app/cloudfree/GPIO/C3-Mini'}
        />

        {/* WLED */}
        <CarenuityDevice
          name={{
            short: 'WLED',
            long: `C3-Mini WLED Installer`,
          }}
          imageUrl={'/img/sensors/WLED.jpeg'}
          webFlashUrl={'https://chipglobe-dev.web.app/cloudfree/WLED/C3-Mini'}
        />

        {/* YouTube Meter */}
        <CarenuityDevice
          name={{
            short: 'YouTube Meter',
            long: `YouTube Channel Statistics Meter with C3-Mini`,
          }}
          imageUrl={'/img/sensors/Youtube-Meter.jpeg'}
          webFlashUrl={
            'https://chipglobe-dev.web.app/cloudfree/YOUTUBE-METEER/C3-Mini'
          }
        />

        <h2 className="h3 mt-5 mb-2">Solution Builder Widgets</h2>

        <div className="mt-4 pb-5">
          <SolutionWidget solutionId="eieQlkAmwh1LUePfYXmW" />
          <SolutionWidget solutionId="5KmjmXd7VKCqDOk0yvL4" />
        </div>

        <div className="row mb-1-9 bg-secondary p-3 text-white mt-5">
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

        <video
          src="/videos/content/c3-mini.mp4"
          loop={true}
          autoPlay={true}
          muted
          className="mt-1-9 wow fadeInUp w-100"
          data-wow-delay="100ms"
          style={{
            visibility: 'visible',
            animationDelay: '100ms',
            height: '400',
            animationName: 'fadeIn',
          }}
        />
      </div>
    </>
  );
};

export default ServiceHOC(Index, {
  servicesCategoryUrls: servicesUrls.standard,
  pageUrl: '/c3-mini',
  pageTitle: 'C3-Mini Microcontroller',
  serviceCategory: 'Budget Friendly Not Only For Students',
});
