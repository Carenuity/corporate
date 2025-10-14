import ServiceHOC from '../../components/hoc/ServiceHOC';
import { servicesUrls } from '../../utils/constants';
import Head from 'next/head';
import Link from 'next/link';
import SubscriptionWidget from '../../components/SubscriptionWidget';

const Index = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <>
      <Head>
        <title>C3-Mini Piggybacks</title>
      </Head>
      <div>
        <div className="wow fadeIn" data-wow-delay="200ms">
          <div className="section-title mb-1-9">
            <span className="sm-title" style={{ fontSize: '.7em' }}>
              C3-Mini Piggypacks
            </span>
            <h2 className="mb-0 h6">
              Accelerating Prototyping with Piggyback Sensors and the C3-Mini
              Ecosystem
            </h2>
          </div>
          {/* <h2 className="mb-3 h3">What is the C3-Mini?</h2> */}
          <p className="mb-lg-1-9">
            The integration of proprietary sensor breakout boards as piggyback
            modules onto the C3-Mini platform significantly boosts prototyping
            speed. Thanks to the standardized C3-Mini pinout, these sensor
            boards can be directly mounted—without any wiring—onto the host
            board, typically a Triple Adapter. This eliminates the need for
            error-prone and time-consuming wiring of cables, which even could
            cause frying the boards, if wrongly wired.Once a Piggyback Board is
            attached, the Solution Builder enables full initialization and
            operation in under three minutes. This seamless plug-and-play
            experience allows even proprietary sensor PCBs to benefit from the
            rapid development capabilities of the Solution Builder, dramatically
            reducing time-to-first-data and accelerating iteration cycles.
          </p>
        </div>
        {/* 1 */}
        <div>
          <h2 className="mb-0 h6">1. C3-Mini Triple with Piggyback Sensor AHT20+BMP280</h2>
          <p></p>
          <div
            className="e-card mb-6"
            style={{
              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
              maxHeight: '1070px',
              padding:"15px"
            }}
          >
          <div className="row">
            <div className="col-md-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/piggybacks/piggy2.JPEG"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  width: '420px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                  // padding: '10px',
                }}
              />
            </div>
            <div className="col-md-8 ">
              <p>
                The Piggyback AHT20-BMP280 is a compact sensor module that integrates two high-precision environmental sensors on a single board:</p>
                  <ul>
                    <li>AHT20 → Measures temperature and relative humidity</li>
                    <li>BMP280 → Measures barometric pressure and provides altitude estimation</li>
                  </ul>
                <p>By combining these sensors, the module offers a complete environmental sensing solution in a small footprint, suitable for IoT, 
                    weather monitoring, indoor climate control, and wearable devices.
              </p>  
            </div>
            
          </div>
          </div>
          <div>
           <h2 className="mb-2 h6">Key Features</h2>
            <div className="row mb-4" style={{backgroundColor:"#f0f0f0", paddingTop:"15px"}}>
              <div className="col-md-5 mb-4">
                <ul>
                  <li>AHT20 Sensor (from Aosong):</li>
                  <ul>
                  <li>Temperature range: -40 °C to +85 °C</li>
                  <li>Accuracy: ±0.3 °C</li>
                  <li>Humidity range: 0-100% RH</li>
                  <li>Accuracy: ±2% RH</li>
                  <li>Digital output via I²C</li>
                </ul>
                <li>Form factor: Small PCB with piggyback stacking design (saves space on prototypes)</li>
                <li>Supply Voltage: 1.8V - 3.6V (typically 3.3V)</li>
                </ul>
                
               

                </div>
                <div className="col-md-1 mb-4">
                 <div
                    style={{
                      position: "relative", // <-- make the parent "positioning context"
                      height: "350px",
                      // background: "#f0f0f0",
                    }}
                  >          
                {/* Vertical line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,          // stretch full container height
                    left: "50%",        // middle of container
                    width: "2px",
                    backgroundColor: "green",
                    transform: "translateX(-50%)", // cleaner centering
                  }}
                />
                </div></div>
             <div className="col-md-5 mb-4">
                <ul>
                  <li>BMP280 Sensor (from Bosch):</li>
                  <ul>
                  <li>Accuracy: ±1 hPa (≈ ±8 m altitude)</li>
                  <li>Pressure range: 300-1100 hPa</li>
                  <li>Temperature range: -40 °C to +85 °C</li>
                  <li>Altitude calculation based on pressure data</li>
                  <li>Low power consumption, optimized for mobile/IoT</li>
                </ul>
                 <li>Interface: I²C (shared bus for both sensors)</li>
                </ul>
                </div> 
                 
                </div>
             <h2 className=" h6">Applications</h2>
             <ul>
              <li>Weather stations and environmental monitoring</li>
              <li>Smart home devices (HVAC, humidifiers, air quality monitoring)</li>
              <li>Portable weather trackers and wearables</li>
              <li>IoT nodes for agriculture, logistics, and building automation</li>
              <li>Altimeter and vertical speed estimation for drones and robotics</li>
              </ul>
              <h2 className=" h6">Summary</h2>
              <p>
                The PickBang Piggyback AHT20-BMP280 combines temperature, humidity, and pressure 
                sensing in a single board, offering accurate environmental measurements with minimal 
                power and space requirements. It is ideal for IoT developers, embedded engineers, and 
                hobbyists building climate-aware devices.</p>  
          </div>
        </div>
         

        <div>
          <h2 className="mb-2 h6">Shop with us</h2>

          <div
            className="e-card mb-8"
            style={{
              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
              maxHeight: '1070px',
            }}
          >
            <div className="row">
              <div className="col-md-4 mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/piggybacks/piggy.JPEG"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    width: '420px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                    padding: '10px',
                  }}
                />
              </div>
              <div className="col-md-8 mb-4">
                <div style={{ padding: '10px' }}>
                  <h6 className="text-success">
                    C3-Mini Sensor Module with AHT20 & BMP280 - Temperature,
                    Humidity, Pressure
                  </h6>
                  <p>
                    The C3-Mini Sensor Piggyback combines two high-precision
                    sensors: the AHT20 for temperature and humidity, and the
                    BMP280 for air pressure and temperature. Ideal for IoT
                    applications,...
                  </p>
                  <div className="row">
                    <p className="col-md-3 mb-4">
                      {!isMobile && (
                        <Link
                          href={
                            'https://www.chipglobe.shop/en/p/c3-mini-sensor-module-with-aht20-and-bmp280-temperature-humidity-pressure'
                          }
                          target="_blank"
                          className={'btn btn-sm btn-success rounded-pill'}
                          style={{ color: 'white' }}
                        >
                          <span className="small"> Buy Now</span>
                        </Link>
                      )}

                      {isMobile && (
                        <a
                          href={
                            'https://www.chipglobe.shop/en/p/c3-mini-sensor-module-with-aht20-and-bmp280-temperature-humidity-pressure'
                          }
                          target="_blank"
                          className={'btn btn-sm btn-success rounded-pill'}
                          rel="noreferrer"
                          style={{ color: 'white' }}
                        >
                          <span className="small">
                            Buy Now{' '}
                            {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                          </span>
                        </a>
                      )}
                    </p>
                    <p className="col-md-4 mb-4">
                      {!isMobile && (
                        <Link
                          href={''}
                          target="_blank"
                          className={'btn btn-sm btn-success rounded-pill'}
                          style={{ color: 'white' }}
                        >
                          <span className="small"> Install for free</span>
                        </Link>
                      )}

                      {isMobile && (
                        <a
                          href={''}
                          target="_blank"
                          className={'btn btn-sm btn-success rounded-pill'}
                          style={{ color: 'white' }}
                          rel="noreferrer"
                        >
                          <span className="small">
                            Install for free{' '}
                            {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                          </span>
                        </a>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
          {/* 2 */}
           <div>
          <h2 className="mb-0 h6">2.Piggyback AHT10 </h2>
          <p></p>
          <div
            className="e-card mb-6"
            style={{
              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
              maxHeight: '1070px',
              padding:"15px"
            }}
          >
          <div className="row">
            <div className="col-md-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/piggybacks/piggy2.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  width: '420px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                  // padding: '10px',
                }}
              />
            </div>
            <div className="col-md-8 mb-4">
              <p>
                The Piggyback AHT10 is a compact, digital temperature and humidity sensor module. 
                It is based on the AHT10 sensor from Aosong (ASAIR) and designed in a piggyback PCB format, 
                making it easy to integrate into embedded systems, IoT projects, and prototyping setups.
               </p>
                  
            </div>
          </div>
          </div>
          <div >
           <h2 className="mb-2 h6">Key Features</h2>

            <div className="row mb-4" style={{backgroundColor:"#f0f0f0", paddingTop:"15px"}}>
              <div className="col-md-5 mb-4">
                <ul>
                  <li>Temperature sensing</li>
                  <ul>
                  <li>Range: -40 °C to +85 °C</li>
                  <li>Accuracy: ±0.3 °C (typical)</li>
                  
                </ul>
                <li>Humidity sensing</li>
                    <ul>
                  <li>Range: 0-100% RH</li>
                  <li>Accuracy: ±2% RH (typical)</li>
                  
                </ul>
                <li>Interface: I²C digital communication (standard 2-wire bus)</li>
                
                  
                </ul>
                
                </div>
                <div className="col-md-1 mb-4">
                 <div
                    style={{
                      position: "relative", 
                      height: "280px",
                     
                    }}
                  >          
                {/* Vertical line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,          
                    left: "50%",       
                    width: "2px",
                    backgroundColor: "green",
                    transform: "translateX(-50%)",
                  }}
                />
                </div></div>
             <div className="col-md-5 mb-4">
                <ul>
                  <li>Response time: Fast measurement cycle with low latency</li>
                  <li>Power supply: 1.8V - 3.6V (typically 3.3V)</li>
                  <li>Low power consumption, suitable for battery-powered applications</li>
                  <li>actory calibrated and compensated, no external calibration required</li>
                </ul>
                </div> 
                 
                </div>
             <h2 className=" h6">Applications</h2>
             <ul>
              <li>Weather monitoring and forecasting</li>
              <li>Smart home devices (humidifiers, thermostats, HVAC systems)</li>
              <li>IoT environmental sensing nodes</li>
              <li>Agricultural monitoring (greenhouses, storage facilities)</li>
              <li>Consumer electronics (wearables, portable climate monitors)</li>
              </ul> 

                  <h2 className=" h6">Summary</h2>
              <p>
                The Piggyback AHT10 is a reliable and low-power temperature and humidity sensor module that outputs 
                calibrated digital data via I²C. Its compact piggyback design makes it easy to stack or integrate 
                into IoT and embedded applications, providing accurate and stable environmental measurements.
              </p>
               
          </div>
        </div>
        {/* 3 */}
           <div>
          <h2 className="mb-0 h6">3.Piggyback AHT20 </h2>
          <p></p>
          <div
            className="e-card mb-6"
            style={{
              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
              maxHeight: '1070px',
              padding:"15px"
            }}
          >
          <div className="row">
            <div className="col-md-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/piggybacks/piggy3.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  width: '420px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                  // padding: '10px',
                }}
              />
            </div>
            <div className="col-md-8 mb-4">
              <p>
                The Piggyback AHT20 is an upgraded digital temperature and humidity sensor module, based on 
                the AHT20 sensor from Aosong (ASAIR). It improves on the AHT10 with higher accuracy, better 
                stability, and enhanced reliability, while keeping the same compact piggyback module format 
                for easy integration into IoT and embedded systems.
               </p>
                  
            </div>
          </div>
          </div>
          <div>
           <h2 className="mb-2 h6">Key Features</h2>
           <div className="row mb-4" style={{backgroundColor:"#f0f0f0", paddingTop:"15px"}}>
              <div className="col-md-5 mb-4">
                <ul>
                  <li>Temperature sensing</li>
                  <ul>
                  <li>Range: -40 °C to +85 °C</li>
                  <li>Accuracy: ±0.3 °C (better stability than AHT10)</li>
                  
                </ul>
                <li>Humidity sensing</li>
                <ul>
                  <li>Range: 0-100% RH</li>
                  <li>Accuracy: ±2% RH (improved from AHT10&apos;s ±2-3% RH)</li>
                  
                </ul>
                <li>Interface: I²C (digital output, simple 2-wire communication)</li>
                </ul>
                
                </div>
                <div className="col-md-1 mb-4">
                 <div
                    style={{
                      position: "relative", 
                      height: "300px",
                     
                    }}
                  >          
                {/* Vertical line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,          
                    left: "50%",       
                    width: "2px",
                    backgroundColor: "green",
                    transform: "translateX(-50%)",
                  }}
                />
                </div></div>
             <div className="col-md-5 mb-4">
                <ul>
                  <li>Supply Voltage: 2.0V – 5.5V (broader than AHT10, easier to use with common MCUs)</li>
                  
                  <li>Low power consumption, suitable for battery-driven IoT devices</li>
                  <li>Factory calibrated and compensated → no external calibration needed</li>
                  <li>Improved sensor stability against long-term drift and environmental stress</li>
                  
                </ul>
                </div> 
                 
                </div>
             <h2 className=" h6">Applications</h2>
             <ul>
              <li>Indoor climate control (HVAC, air purifiers, humidifiers)</li>
              <li>Smart agriculture and greenhouse monitoring</li>
              <li>IoT weather stations and smart home devices</li>
              <li>Consumer electronics (air quality monitors, wearables)</li>
              <li>Data loggers and portable sensing devices</li>
              </ul>  
               <h2 className=" h6">Summary</h2>
               <p>
                The Piggyback AHT20 is the improved successor of the AHT10, delivering higher accuracy, wider voltage 
                compatibility, and greater stability for temperature and humidity sensing. Its piggyback form factor 
                makes it easy to stack or integrate into compact IoT devices and embedded projects.
               </p>
          </div>
        </div>
        {/* 4 */}
           <div>
          <h2 className="mb-0 h6">4.Piggyback AGS10 </h2>
          <p></p>
          <div
            className="e-card mb-8"
            style={{
              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
              maxHeight: '1070px',
              padding:"15px"
            }}
          >
          <div className="row">
            <div className="col-md-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/piggybacks/piggy4.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  width: '420px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                  // padding: '10px',
                }}
              />
            </div>
            <div className="col-md-8 mb-4">
              <p>
                The Piggyback AGS10 is a compact gas sensor module designed for air quality monitoring. 
                It is based on the AGS10 sensor from Aosong (ASAIR), a low-power gas sensor that detects 
                volatile organic compounds (VOCs) in the air. By monitoring VOC levels, the module provides 
                an indicator of indoor air quality (IAQ) and can be integrated into smart home, HVAC, and IoT systems.
               </p>
                  
            </div>
          </div>
          </div>
          <div>
           <h2 className="mb-2 h6">Key Features</h2>
           <div className="row mb-4" style={{backgroundColor:"#f0f0f0", paddingTop:"15px"}}>
              <div className="col-md-5 mb-4">
                <ul>
                  <li>Target gases: Detects VOCs (volatile organic compounds) - such as alcohol, formaldehyde, smoke, and other pollutants.</li>
                  
                  <li>Output: Provides an equivalent carbon dioxide (eCO₂) and TVOC index for simplified air quality analysis.</li>
                  <li>Interface: I²C digital communication (easy integration with microcontrollers).</li>
                 
                </ul>
                
                </div>
                <div className="col-md-1 mb-4">
                 <div
                    style={{
                      position: "relative", 
                      height: "350px",
                     
                    }}
                  >          
                {/* Vertical line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,          
                    left: "50%",       
                    width: "2px",
                    backgroundColor: "green",
                    transform: "translateX(-50%)",
                  }}
                />
                </div></div>
             <div className="col-md-5 mb-4">
                <ul>
                   <li>Supply Voltage: 3.3V - 5.0V (compatible with common MCU platforms like Arduino, ESP32, STM32, Raspberry Pi).</li>
                  
                  <li>Low power consumption → optimized for continuous air quality monitoring.</li>
                 
                  <li>Factory calibrated, with built-in baseline compensation for environmental changes.</li>
               
                 <li>Compact piggyback form factor → easy stacking and space-saving design.</li>
                </ul>
                </div> 
                 
                </div>
             <h2 className=" h6">Applications</h2>
             <ul>
              <li>Indoor air quality monitoring (homes, offices, schools)</li>
              <li>Smart HVAC and ventilation systems</li>
              <li>Air purifiers and smart appliances</li>
              <li>IoT air quality sensing nodes</li>
              <li>Environmental monitoring stations</li>
              <li>Wearables or portable devices for personal health monitoring</li>
              </ul>
              <h2 className=" h6">Summary</h2>  
              <p>
                The Piggyback AGS10 gas sensor module provides a simple and reliable way to measure 
                VOC-based air quality. With digital I²C output, low power use, and a plug-and-play 
                piggyback design, it is ideal for IoT developers, smart home applications, and portable air quality monitors.
              </p>
          </div>
        </div>
        {/* 5 */}
           <div>
          <h2 className="mb-0 h6">5.Piggyback BME280 </h2>
          <p></p>
          <div
            className="e-card mb-8"
            style={{
              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
              maxHeight: '1070px',
              padding:"15px"
            }}
          >
          <div className="row">
            <div className="col-md-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/piggybacks/piggy5.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  width: '420px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                  // padding: '10px',
                }}
              />
            </div>
            <div className="col-md-8 mb-4">
              <p>
                The Piggyback BME280 is a versatile environmental sensor module that combines temperature, 
                humidity, and barometric pressure sensing in a compact piggyback PCB format. Based on the
                 Bosch BME280 sensor, it delivers high accuracy, low power consumption, and digital I²C/SPI 
                 communication, making it a popular choice for IoT and embedded applications.
               </p>
                  
            </div>
          </div>
          </div>
          <div>
           <h2 className="mb-2 h6">Key Features</h2>
            <div className="row mb-4" style={{backgroundColor:"#f0f0f0", paddingTop:"15px"}}>
              <div className="col-md-5 mb-4">
                <ul>
                  
                <li>Humidity sensing</li>
                <ul>
                  <li>Range: 0-100% RH</li>
                  <li>Accuracy: ±3% RH</li>
                 
                </ul>
                <li>Pressure sensing</li>
                  <ul>
                  <li>Range: 300-1100 hPa (equivalent to 0-9,000 m altitude)</li>
                  <li>Accuracy: ±1 hPa (≈ ±8 m altitude)</li>
                  </ul>
                <li>Interfaces: I²C and SPI (configurable, flexible integration)</li>
                </ul>
                
                </div>
                <div className="col-md-1 mb-4">
                 <div
                    style={{
                      position: "relative", 
                      height: "300px",
                     
                    }}
                  >          
                {/* Vertical line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,          
                    left: "50%",       
                    width: "2px",
                    backgroundColor: "green",
                    transform: "translateX(-50%)",
                  }}
                />
                </div></div>
             <div className="col-md-5 mb-4">
                <ul>
                  <li>Temperature sensing</li>
                  <ul>
                  <li>Range: -40 °C to +85 °C</li>
                  <li>Accuracy: ±1.0 °C</li>
                 
                </ul>
                 <li>Supply Voltage: 1.71V - 3.6V (commonly 3.3V)</li>
                 <li>Low power consumption → optimized for mobile and battery-powered IoT nodes</li>
                 <li>Factory calibrated with built-in compensation for temperature/humidity/pressure</li>
                </ul>
                </div> 
                 
                </div>
             <h2 className=" h6">Applications</h2>
             <ul>
              <li>Weather stations and climate monitoring</li>
              <li>Indoor air quality and HVAC systems</li>
              <li>IoT devices for smart agriculture, logistics, and building automation</li>
              <li>Drones and altimeter applications</li>
              <li>Wearables and portable devices</li>
               <li>Data loggers and environmental monitoring stations</li>
              </ul> 
              <h2 className=" h6">Summary</h2> 
              <p>
                The Piggyback BME280 provides a complete climate-sensing solution with temperature, 
                humidity, and pressure measurements in one module. Its piggyback design ensures easy 
                integration into compact IoT and embedded projects, making it ideal for weather tracking, 
                smart home systems, and mobile applications.
              </p>
          </div>
        </div>
        {/* 6 */}
           <div>
          <h2 className="mb-0 h6">6.Piggyback BMP280 </h2>
          <p></p>
          <div
            className="e-card mb-8"
            style={{
              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
              maxHeight: '1070px',
              padding:"15px"
            }}
          >
          <div className="row">
            <div className="col-md-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/piggybacks/piggy6.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  width: '420px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                  // padding: '10px',
                }}
              />
            </div>
            <div className="col-md-8 mb-4">
              <p>
                The Piggyback BMP280 is a compact pressure and temperature sensor module designed for 
                accurate barometric pressure and ambient temperature measurements. It is based on the 
                Bosch BMP280 sensor and offered in a piggyback PCB format for easy integration into embedded 
                systems, IoT projects, and prototyping setups.
               </p>
                 
            </div>
          </div>
          </div>
          <div>
           <h2 className="mb-2 h6">Key Features</h2>
            <div className="row mb-4" style={{backgroundColor:"#f0f0f0", paddingTop:"15px"}}>
              <div className="col-md-5 mb-4">
                <ul>
                  <li>Pressure sensing</li>
                  <ul>
                  <li>Range: 300-1100 hPa (equivalent to 0-9,000 m altitude)</li>
                  <li>Accuracy: ±1 hPa (≈ ±8 m altitude)</li>
                  
                </ul>
                <li>Temperature sensing</li>
                <ul>
                  <li>Range: -40 °C to +85 °C</li>
                  <li>Accuracy: ±1.0 °C</li>
                  
                </ul>
                <li>Interfaces: I²C and SPI (flexible communication options)</li>
                </ul>
                
                </div>
                <div className="col-md-1 mb-4">
                 <div
                    style={{
                      position: "relative", 
                      height: "320px",
                     
                    }}
                  >          
                {/* Vertical line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,          
                    left: "50%",       
                    width: "2px",
                    backgroundColor: "green",
                    transform: "translateX(-50%)",
                  }}
                />
                </div></div>
             <div className="col-md-5 mb-4">
                <ul>
                  <li>Supply Voltage: 1.71V - 3.6V (typically 3.3V)</li>
                 
                  <li>Low power consumption, making it suitable for mobile and battery-driven devices</li>
                  <li>Factory calibrated with built-in compensation algorithms</li>
                  <li>Compact piggyback form factor → space-saving and stackable design</li>
                  
                </ul>
                
                </div> 

                 
                </div>
             <h2 className=" h6">Applications</h2>
             <ul>
              <li>Altimeters and barometers (drones, wearables, GPS enhancement)</li>
              <li>Weather stations and environmental monitoring</li>
              
              <li>IoT devices for smart agriculture, logistics, and building automation</li>
              <li>Indoor navigation and elevation tracking</li>
              <li>HVAC systems and smart home appliances</li>
              <li>Portable climate monitoring devices</li>
              </ul> 
              
              <h2 className=" h6">Summary</h2>
              <p>
                The Piggyback BMP280 is a reliable and efficient pressure + temperature sensor module, 
                optimized for IoT and embedded applications. While similar to the BME280, it excludes 
                humidity sensing, making it a cost-effective option when only temperature and pressure 
                data are required.
              </p>
           
          </div>
        </div>
        {/* 7 */}
           <div>
          <h2 className="mb-0 h6">7.Piggyback BMP180 </h2>
          <p></p>
          <div
            className="e-card mb-8"
            style={{
              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
              maxHeight: '1070px',
              padding:"15px"
            }}
          >
          <div className="row">
            <div className="col-md-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/piggybacks/piggy7.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  width: '420px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                  // padding: '10px',
                }}
              />
            </div>
            <div className="col-md-8 mb-4">
              <p>
                The Piggyback BMP180 is an older-generation pressure and temperature sensor module, based on the Bosch 
                BMP180 sensor. It provides digital barometric pressure and temperature readings with good accuracy and 
                low power consumption. Though now largely replaced by the BMP280/BME280 series, the BMP180 remains a 
                reliable and cost-effective option for basic environmental sensing applications.
               </p>
                 
            </div>
          </div>
          </div>
          <div>
           <h2 className="mb-2 h6">Key Features</h2>
           <div className="row mb-4" style={{backgroundColor:"#f0f0f0", paddingTop:"15px"}}>
              <div className="col-md-5 mb-4">
                <ul>
                  <li>Pressure sensing</li>
                  <ul>
                  <li>Range: 300-1100 hPa (equivalent to 0-9,000 m altitude)</li>
                  <li>Accuracy: ±1 hPa (≈ ±8 m altitude)</li>
                  
                </ul>
                <li></li>
                 <ul>
                  <li>Range: -40 °C to +85 °C</li>
                  <li>Accuracy: ±2.0 °C</li>
                  
                </ul>
                <li>Interface: I²C (simple 2-wire communication)</li>
                </ul>
                
                </div>
                <div className="col-md-1 mb-4">
                 <div
                    style={{
                      position: "relative", 
                      height: "320px",
                     
                    }}
                  >          
                {/* Vertical line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,          
                    left: "50%",       
                    width: "2px",
                    backgroundColor: "green",
                    transform: "translateX(-50%)",
                  }}
                />
                </div></div>
             <div className="col-md-5 mb-4">
                <ul>
                  <li>Supply Voltage: 1.8V - 3.6V (commonly 3.3V or 5V with level shifting)</li>
               
                  <li>Low power consumption → suitable for portable and battery-powered devices</li>
                  <li>Factory calibrated, with built-in compensation algorithms</li>
                  <li>Compact piggyback module design → easy integration into prototypes and IoT systems</li>
                 
                
                </ul>
                </div> 
                 
                </div>
             <h2 className=" h6">Applications</h2>
             <ul>
              <li>Altimeters and barometers (early drone projects, GPS altitude correction)</li>
              <li>Weather stations and environmental monitoring</li>
              <li>IoT devices requiring basic temperature and pressure sensing</li>
              <li>Educational projects and prototyping</li>
              <li>Portable devices where low cost is preferred over cutting-edge accuracy</li>
              </ul>

                <h2 className=" h6">Summary</h2>
                <p>
                 The Piggyback BMP180 is a proven pressure and temperature sensor module, offering dependable 
                 performance in a simple, low-cost design. While newer BMP280/BME280 sensors deliver higher
                  precision and extra features (like humidity sensing), the BMP180 remains a solid choice for 
                  budget-friendly environmental monitoring projects. 
                </p>
          </div>
        </div>
        {/* 8 */}
           <div>
          <h2 className="mb-0 h6">8.Piggyback SHT40 </h2>
          <p></p>
          <div
            className="e-card mb-8"
            style={{
              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
              maxHeight: '1070px',
              padding:"15px"
            }}
          >
          <div className="row">
            <div className="col-md-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/piggybacks/piggy8.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  width: '420px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                  // padding: '10px',
                }}
              />
            </div>
            <div className="col-md-8 mb-4">
              <p>
                The Piggyback SHT40 is an advanced digital temperature and humidity sensor module, based on the 
                Sensirion SHT40 sensor. It represents the 4th generation of Sensirion&apos;s humidity sensors, 
                delivering ultra-low power consumption, improved accuracy, and long-term stability. Packaged 
                in a piggyback PCB format, it&apos;s easy to integrate into IoT, smart home, and embedded projects 
                where reliable environmental sensing is essential.
               </p>
                  
            </div>
          </div>
          </div>
          <div>
           <h2 className="mb-2 h6">Key Features</h2>
           <div className="row mb-4" style={{backgroundColor:"#f0f0f0", paddingTop:"15px"}}>
              <div className="col-md-5 mb-4">
                <ul>
                  <li>Temperature sensing</li>
                  <ul>
                  <li>Range: -40 °C to +125 °C</li>
                  <li>Accuracy: ±0.2 °C (typical)</li>
                 
                </ul>
                <li>Humidity sensing</li>
                 <ul>
                  <li>Range: 0-100% RH</li>
                  <li>Accuracy: ±1.8% RH (typical)</li>
                 
                </ul>
                <li>Interface: I²C (digital output, simple integration)</li>
                <li>Supply Voltage: 1.08V - 3.6V (ideal for low-voltage MCUs)</li>
                <li>Ultra-low power consumption → designed for battery-powered IoT nodes</li>
                </ul>
                
                </div>
                <div className="col-md-1 mb-4">
                 <div
                    style={{
                      position: "relative", 
                      height: "350px",
                     
                    }}
                  >          
                {/* Vertical line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,          
                    left: "50%",       
                    width: "2px",
                    backgroundColor: "green",
                    transform: "translateX(-50%)",
                  }}
                />
                </div></div>
             <div className="col-md-5 mb-4">
                <ul>
                  
                  
                  <li>Response time: Fast measurement with high repeatability</li>
                  <li>Robust design with long-term stability and minimal drift</li>
                  <li>Optional protective filter membrane for harsh environments</li>
                  <li>Factory calibrated and compensated for plug-and-play use</li>
                 
                
                </ul>
                </div> 
                 
                </div>
             <h2 className=" h6">Applications</h2>
             <ul>
              <li>Smart home appliances (HVAC, air purifiers, humidifiers)</li>
              <li>IoT climate sensing nodes</li>
              <li>Portable and wearable environmental monitors</li>
              <li>Smart agriculture (greenhouses, crop storage monitoring)</li>
              <li>Data loggers and weather stations</li>
              <li>Consumer electronics requiring high-accuracy temperature and humidity data</li>
              </ul> 

              <h2 className=" h6">Summary</h2> 
              <p>
                The Piggyback SHT40 is a next-generation temperature and humidity sensor module, 
                offering higher precision, ultra-low power operation, and long-term stability compared 
                to earlier AHT10/AHT20 or SHT3x sensors. Its piggyback design makes it easy to embed in 
                compact systems, making it ideal for IoT developers, environmental monitoring, and precision climate control.
              </p>
          </div>
        </div>
        {/* 9 */}
           <div>
          <h2 className="mb-0 h6">9.Piggyback SGP30 </h2>
          <p></p>
          <div
            className="e-card mb-8"
            style={{
              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
              maxHeight: '1070px',
              padding:"15px"
            }}
          >
          <div className="row">
            <div className="col-md-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/piggybacks/piggy9.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  width: '420px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                  // padding: '10px',
                }}
              />
            </div>
            <div className="col-md-8 mb-4">
              <p>
                The Piggyback SGP30 is a compact air quality sensor module based on the Sensirion SGP30. It integrates 
                metal-oxide (MOX) sensing technology to measure volatile organic compounds (VOCs) and calculate CO₂ 
                equivalents (eCO₂), providing a reliable indicator of indoor air quality. The piggyback PCB format makes 
                it easy to integrate into IoT, smart appliances, and embedded projects.
               </p>
                 
            </div>
          </div>
          </div>
          <div>
           <h2 className="mb-2 h6">Key Features</h2>
            <div className="row mb-4" style={{backgroundColor:"#f0f0f0", paddingTop:"15px"}}>
              <div className="col-md-5 mb-4">
                <ul>
                  <li>Gas sensing capabilities</li>
                  <ul>
                  <li>Detects total VOCs (TVOCs) in the air</li>
                  <li>Provides equivalent CO₂ (eCO₂) levels based on VOC measurements</li>
                  
                </ul>
                <li>Interface: I²C digital communication (easy MCU integration)</li>
                  
                  <li>Low power consumption → suitable for continuous monitoring in IoT devices</li>
                
                </ul>
                
                </div>
                <div className="col-md-1 mb-4">
                 <div
                    style={{
                      position: "relative", 
                      height: "330px",
                     
                    }}
                  >          
                {/* Vertical line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,          
                    left: "50%",       
                    width: "2px",
                    backgroundColor: "green",
                    transform: "translateX(-50%)",
                  }}
                />
                </div></div>
             <div className="col-md-5 mb-4">
                <ul>
                  <li>Supply Voltage: 1.8V – 3.6V (commonly 3.3V)</li>
                  <li>On-chip humidity compensation (can work with external RH/T sensors for improved accuracy, e.g., SHT or AHT modules)</li>
                  
                  <li>Factory calibrated, ensuring consistent performance out of the box</li>
                  <li>Compact piggyback design → saves space, stackable in prototypes</li>
                  
                  
                </ul>
                </div> 
                 
                </div>
             <h2 className=" h6">Applications</h2>
             <ul>
              <li>Indoor air quality monitoring (homes, offices, schools)</li>
              <li>Smart HVAC and ventilation systems</li>
              <li>Air purifiers and smart appliances</li>
              <li>IoT environmental nodes and smart building systems</li>
              <li>Portable and wearable air quality monitors</li>
              <li>Demand-controlled ventilation (DCV) systems</li>
              </ul> 
              <h2 className=" h6">Summary</h2>
              <p>
               The Piggyback SGP30 is a reliable air quality sensor module that provides VOC 
               and CO₂ equivalent measurements in a compact, low-power package. Its piggyback 
               design makes it easy to integrate into IoT and embedded systems, making it ideal 
               for smart home devices, HVAC optimization, and portable air quality monitors. 
                </p> 
          </div>
        </div>
        {/* 10 */}
           <div>
          <h2 className="mb-0 h6">10.Piggyback SGP40 </h2>
          <p></p>
          <div
            className="e-card mb-8"
            style={{
              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
              maxHeight: '1070px',
              padding:"15px"
            }}
          >
          <div className="row">
            <div className="col-md-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/piggybacks/piggy10.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  width: '420px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                  // padding: '10px',
                }}
              />
            </div>
            <div className="col-md-8 mb-4">
              <p>
                The Piggyback SGP40 is an advanced VOC (volatile organic compounds) sensor module, 
                based on the Sensirion SGP40. It is the successor to the SGP30, offering improved 
                accuracy, robustness, and long-term stability. Designed with Sensirion&apos;s new VOC 
                Algorithm (VOC Index output), it provides a reliable, standardized measure of indoor 
                air quality. The piggyback PCB format makes it simple to integrate into IoT, smart 
                appliances, and environmental monitoring systems.
               </p>
                 
             
            </div>
          </div>
          </div>
          <div>
           <h2 className="mb-2 h6">Key Features</h2>
            <div className="row mb-4" style={{backgroundColor:"#f0f0f0", paddingTop:"15px"}}>
              <div className="col-md-5 mb-4">
                <ul>
                  <li>Gas sensing capabilities</li>
                  <ul>
                  <li>Detects VOC concentrations in the air</li>
                  <li>Provides a standardized VOC Index (0–500) instead of raw gas values</li>
                  
                </ul>
                <li>Improved performance over SGP30</li>
                <ul>
                  <li>Better resistance to contamination (e.g., siloxanes)</li>
                  <li>Enhanced long-term stability</li>
                  <li>More robust against environmental stress</li>
                  
                </ul>
               
                </ul>
                
                </div>
                <div className="col-md-1 mb-4">
                 <div
                    style={{
                      position: "relative", 
                      height: "380px",
                     
                    }}
                  >          
                {/* Vertical line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,          
                    left: "50%",       
                    width: "2px",
                    backgroundColor: "green",
                    transform: "translateX(-50%)",
                  }}
                />
                </div></div>
             <div className="col-md-5 mb-4">
                <ul>
                   <li>Interface: I²C digital communication</li>
                  <li>Supply Voltage: 1.7V – 3.6V (commonly 3.3V)</li>
                  
                  <li>Ultra-low power consumption → ideal for battery-operated IoT devices</li>
                  <li>Requires external humidity/temperature compensation (often paired with SHT or AHT sensors)</li>
                  <li>Compact piggyback design → stackable and space-saving</li>
                 
                </ul>
                </div> 
                 
                </div>
             <h2 className=" h6">Applications</h2>
             <ul>
              <li>Indoor air quality monitoring (smart homes, offices, schools)</li>
              <li>Smart HVAC and demand-controlled ventilation (DCV)</li>
              <li>Air purifiers, dehumidifiers, and smart appliances</li>
              <li>IoT air quality nodes and smart building systems</li>
              <li>Portable and wearable environmental trackers</li>
              </ul> 
                <h2 className=" h6">Summary</h2>
                <p>
                  The Piggyback SGP40 is an improved VOC sensor module, delivering higher reliability and 
                  stability than the SGP30. By outputting a VOC Index, it simplifies indoor air quality 
                  monitoring and is well-suited for IoT devices, smart home appliances, and portable monitors 
                  where consistent and long-term performance is crucial.
                </p>
          </div>
        </div>
        {/* 11 */}
           <div>
          <h2 className="mb-0 h6">11.Piggyback ENS160 </h2>
          <p></p>
          <div
            className="e-card mb-8"
            style={{
              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
              maxHeight: '1070px',
              padding:"15px"
            }}
          >
          <div className="row">
            <div className="col-md-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/piggybacks/piggy11.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  width: '420px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                  // padding: '10px',
                }}
              />
            </div>
            <div className="col-md-8 mb-4">
              <p>
                The Piggyback ENS160 is a multi-gas digital air quality sensor module, based on the ScioSense ENS160. 
                Using metal-oxide (MOX) gas sensing technology, it detects a wide range of gases and provides processed 
                air quality data, including VOC levels, equivalent CO₂ (eCO₂), and AQI (Air Quality Index). Its piggyback 
                PCB format makes it easy to integrate into IoT, HVAC, and smart building applications.
               </p>
                  
            </div>
          </div>
          </div>
          <div>
           <h2 className="mb-2 h6">Key Features</h2>
          <div className="row mb-4" style={{backgroundColor:"#f0f0f0", paddingTop:"15px"}}>
              <div className="col-md-5 mb-4">
                <ul>
                  <li>Multi-gas detection</li>
                  <ul>
                  <li>Monitors volatile organic compounds (VOCs)</li>
                  <li>Detects oxidizing gases (e.g., ozone, NO₂)</li>
                  <li>Detects reducing gases (e.g., CO, H₂)</li>
                  
                </ul>
                <li>Output data</li>
                <ul>
                  <li>TVOC concentration (mg/m³)</li>
                  <li>eCO₂ (ppm) for indoor air quality estimation</li>
                  <li>Standardized Air Quality Index (AQI) values</li>
                  
                </ul>
               
                </ul>
                
                </div>
                <div className="col-md-1 mb-4">
                 <div
                    style={{
                      position: "relative", 
                      height: "380px",
                     
                    }}
                  >          
                {/* Vertical line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,          
                    left: "50%",       
                    width: "2px",
                    backgroundColor: "green",
                    transform: "translateX(-50%)",
                  }}
                />
                </div></div>
             <div className="col-md-5 mb-4">
                <ul>
                   <li>Interface: I²C and SPI (flexible communication options)</li>
                  <li>Supply Voltage: 1.71V - 3.6V (commonly 3.3V)</li>
                  
                  <li>Integrated humidity and temperature compensation (for stable readings)</li>
                  <li>Low power operation → suited for continuous monitoring</li>
                  <li>Factory calibrated for plug-and-play use</li>
                  <li>Compact piggyback design → stackable, easy to use in prototypes</li>
                  
                </ul>
                
                </div> 
                 
                </div>
             <h2 className=" h6">Applications</h2>
             <ul>
              <li>Indoor air quality monitoring (homes, offices, schools)</li>
              <li>HVAC control and demand-controlled ventilation (DCV)</li>
              <li>Smart appliances (air purifiers, dehumidifiers, HVAC systems)</li>
              <li>IoT air quality nodes and environmental monitoring stations</li>
              <li>Smart agriculture (crop storage, greenhouses)</li>
              <li>Portable and wearable air quality monitors</li>
              </ul>  

              <h2 className=" h6">Summary</h2>
              <p>
                The Piggyback ENS160 is a next-generation multi-gas sensor module, offering a complete 
                digital air quality solution with VOC, eCO₂, and AQI outputs. Its multi-gas detection 
                capability, built-in compensation, and piggyback integration make it ideal for IoT developers, 
                HVAC optimization, and smart home or building applications.
              </p>
          </div>
        </div>
        {/* 12 */}
           <div>
          <h2 className="mb-0 h6">12.Piggyback CCS811 </h2>
          <p></p>
          <div
            className="e-card mb-8"
            style={{
              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
              maxHeight: '1070px',
              padding:"15px"
            }}
          >
          <div className="row">
            <div className="col-md-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/piggybacks/piggy12.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  width: '420px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                  // padding: '10px',
                }}
              />
            </div>
            <div className="col-md-8 mb-4">
              <p>
                The Piggyback CCS811 is a digital gas sensor module for indoor air quality monitoring, 
                based on the AMS CCS811 sensor. It detects volatile organic compounds (VOCs) and provides 
                calculated equivalent CO₂ (eCO₂) levels, making it suitable for smart home, HVAC, and IoT 
                applications. Its piggyback PCB format makes integration simple and space-efficient for 
                prototyping and embedded designs.
               </p>
                 
            </div>
          </div>
          </div>
          <div>
           <h2 className="mb-2 h6">Key Features</h2>
           <div className="row mb-4" style={{backgroundColor:"#f0f0f0", paddingTop:"15px"}}>
              <div className="col-md-5 mb-4">
                <ul>
                  <li>Gas sensing capabilities</li>
                  <ul>
                  <li>Measures total VOCs (TVOCs) in the air</li>
                  <li>Provides equivalent CO₂ (eCO₂) readings (400-8192 ppm)</li>
                  
                </ul>
                <li>Interface: I²C digital communication (easy to connect to MCUs)</li>
                <li>Supply Voltage: 1.8V - 3.6V (commonly 3.3V)</li>
                <li>Integrated MCU → runs on-chip algorithms for gas-to-eCO₂ and TVOC conversion</li>
              
                </ul>
                
                </div>
                <div className="col-md-1 mb-4">
                 <div
                    style={{
                      position: "relative", 
                      height: "390px",
                     
                    }}
                  >          
                {/* Vertical line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,          
                    left: "50%",       
                    width: "2px",
                    backgroundColor: "green",
                    transform: "translateX(-50%)",
                  }}
                />
                </div></div>
             <div className="col-md-5 mb-4">
                <ul>
                  <li>Low power consumption with multiple operating modes (idle, low-power, standard)</li>
                  
                  <li>On-chip baseline compensation (humidity and temperature inputs can be provided externally for better accuracy)</li>
                  <li>Factory calibrated, ready to use out of the box</li>
                  <li>Compact piggyback design → space-saving, stackable for IoT projects</li>
                  
                </ul>
                </div> 
                 
                </div>
             <h2 className=" h6">Applications</h2>
             <ul>
              <li>Indoor air quality monitoring (homes, offices, schools)</li>
              <li>Smart HVAC and demand-controlled ventilation (DCV)</li>
              <li>Air purifiers, humidifiers, and smart appliances</li>
              <li>Wearable or portable air quality monitors</li>
              <li>IoT air quality sensor nodes</li>
              <li>Environmental data loggers</li>
              </ul>

                <h2 className=" h6">Summary</h2>
                <p>The Piggyback CCS811 is a digital indoor air quality sensor module, 
                  providing VOC and CO₂ equivalent measurements with low power use and simple I²C integration. 
                  While newer sensors like the ENS160 and SGP40 offer enhanced stability and extended gas detection, 
                  the CCS811 remains a cost-effective and widely used option for IoT and smart building applications.</p>
          </div>
        </div>
        {/* 13 */}
           <div>
          <h2 className="mb-0 h6">13.Piggyback MICS-6814 </h2>
          <p></p>
          <div
            className="e-card mb-8"
            style={{
              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
              maxHeight: '1070px',
              padding:"15px"
            }}
          >
          <div className="row">
            <div className="col-md-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/piggybacks/piggy14.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  width: '420px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                  // padding: '10px',
                }}
              />
            </div>
            <div className="col-md-8 mb-4">
              <p>
                The Piggyback MICS-6814 is a multi-gas sensor module based on the SGX Sensortech MICS-6814. 
                It integrates three separate sensing elements on a single chip, allowing detection of multiple 
                gases including CO (carbon monoxide), NO₂ (nitrogen dioxide), NH₃ (ammonia), CH₄ (methane), and 
                other VOCs. With its piggyback PCB design, this module provides a compact and versatile solution 
                for IoT, environmental monitoring, and smart city applications.
               </p>
                  
            </div>
          </div>
          </div>
          <div>
           <h2 className="mb-2 h6">Key Features</h2>
           <div className="row mb-4" style={{backgroundColor:"#f0f0f0", paddingTop:"15px"}}>
              <div className="col-md-5 mb-4">
                <ul>
                  <li>Multi-gas detection capability</li>
                  <ul>
                  <li>CO, CH₄, LPG, and other reducing gases</li>
                  <li>NO₂ and other oxidizing gases</li>
                  <li>NH₃ and other ammonia-like gases</li>
                  
                </ul>
                <li>Three independent MOX sensing elements:</li>
                <ul>
                  <li>CO/CH₄/LPG sensor</li>
                  <li>NH₃ sensor</li>
                  <li>NO₂ sensor</li>
                  
                </ul>
                <li>Output type: Analog resistance changes (requires ADC for MCU integration)</li>
                </ul>
                
                </div>
                <div className="col-md-1 mb-4">
                 <div
                    style={{
                      position: "relative", 
                      height: "400px",
                     
                    }}
                  >          
                {/* Vertical line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,          
                    left: "50%",       
                    width: "2px",
                    backgroundColor: "green",
                    transform: "translateX(-50%)",
                  }}
                />
                </div></div>
             <div className="col-md-5 mb-4">
                <ul>
                  
                
                  <li>Supply Voltage: 3.3V – 5V (module dependent, heater required)</li>
                  <li>Pre-heating required for stable operation (common in MOX sensors)</li>
                  <li>Long lifetime with robust performance in environmental applications</li>
                  <li>Compact piggyback format → easier integration into prototypes and sensor hubs</li>
                  
                </ul>
                </div> 
                 
                </div>
             <h2 className=" h6">Applications</h2>
             <ul>
              <li>Indoor and outdoor air quality monitoring</li>
              <li>Smart agriculture (detecting ammonia in livestock farming, soil conditions, fertilizer gases)</li>
              <li>Industrial safety (monitoring CO, CH₄, and hazardous gases)</li>
              <li>Smart cities and IoT nodes for pollution tracking</li>
              <li>Portable gas detectors and handheld analyzers</li>
              <li>Environmental research</li>
              </ul>  

               <h2 className=" h6">Summary</h2>
               <p>
                The Piggyback MICS-6814 is a powerful multi-gas sensor module, offering broad detection capability 
                across toxic gases, pollutants, and combustible gases. While it requires analog signal processing and 
                calibration, its wide gas coverage makes it a strong choice for environmental sensing, industrial safety,
                 and IoT air quality monitoring.
               </p>
          </div>
        </div>
        {/* 14 */}
           <div>
          <h2 className="mb-0 h6">14.Piggybacks LD2410 </h2>
          <p>
            
          </p>
          <div
            className="e-card mb-8"
            style={{
              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
              maxHeight: '1070px',
              padding:"15px"
            }}
          >
          <div className="row">
            <div className="col-md-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/piggybacks/piggy14.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  width: '420px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                  // padding: '10px',
                }}
              />
            </div>
            <div className="col-md-8 mb-4">
              <p>
                The Piggyback LD2410 is a radar-based sensor module designed for presence and motion detection. It uses 24 GHz FMCW 
            (Frequency Modulated Continuous Wave) radar technology to detect moving and stationary humans within a configurable range.
             Unlike PIR sensors, it can sense micro-movements such as breathing, making it ideal for smart home, IoT, and security applications.
              Its piggyback PCB design ensures easy integration into compact prototypes and embedded systems.
               </p>
                
            </div>
          </div>
          </div>
          <div>
           <h2 className="mb-2 h6">Key Features</h2>
           <div className="row mb-4" style={{backgroundColor:"#f0f0f0", paddingTop:"15px"}}>
              <div className="col-md-5 mb-4">
                <ul>
                  <li>Radar sensing technology</li>
                  <ul>
                  <li>Detects human presence, even when stationary (e.g., sitting, sleeping)</li>
                  <li>Detects motion with configurable sensitivity and distance</li>
                  
                </ul>
                <li>Detection range</li>
                <ul>
                  <li>Up to 6 meters for presence detection</li>
                  <li>Up to ~5 meters for micro-motion sensing</li>
                  
                </ul>
                <li>Field of view: ~100° horizontal / 40° vertical (module dependent)</li>
                <li>Supply Voltage: 3.3V - 5V (typical 5V with onboard regulator)</li>
                </ul>
                
                </div>
                <div className="col-md-1 mb-4">
                 <div
                    style={{
                      position: "relative", 
                      height: "450px",
                     
                    }}
                  >          
                {/* Vertical line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,          
                    left: "50%",       
                    width: "2px",
                    backgroundColor: "green",
                    transform: "translateX(-50%)",
                  }}
                />
                </div></div>
             <div className="col-md-5 mb-4">
                <ul>
                  <li>Interfaces</li>
                  <ul>
                  <li>UART (serial) for configuration and data output</li>
                  <li>GPIO for simple presence/motion triggers</li>
                  
                </ul>
                 
                 <li>Low power consumption compared to camera-based solutions</li>
                 <li>Configurable parameters (detection distance, sensitivity, hold time) via UART commands</li>
                 <li>Compact piggyback module format for easy stacking and embedding</li>
                </ul>
                </div> 
                 
                </div>
             <h2 className=" h6">Applications</h2>
             <ul>
              <li>Smart lighting (auto on/off when people enter or leave a room)</li>
              <li>Smart home presence detection (HVAC, appliances, automation)</li>
              <li>Office occupancy monitoring for energy saving</li>
              <li>Security and intrusion detection systems</li>
              <li>Elderly care and health monitoring (detecting stillness or inactivity)</li>
              <li>IoT devices requiring non-contact human detection</li>
              </ul> 
              <h2 className=" h6">Summary</h2> 
              <p>
                The Piggyback LD2410 is a radar-based human presence and motion detection module that 
                outperforms traditional PIR sensors by detecting both movement and stationary presence. 
                With UART/GPIO interfaces, configurable settings, and a piggyback design, it is well-suited 
                for smart homes, IoT systems, and security applications requiring reliable, contactless detection.
              </p>
          </div>
        </div>
        {/* 15 */}
           <div>
          <h2 className="mb-0 h6">15.Piggyback LD6002 </h2>
          <p></p>
          <div
            className="e-card mb-8"
            style={{
              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
              maxHeight: '1070px',
              padding:"15px"
            }}
          >
          <div className="row">
            <div className="col-md-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/piggybacks/piggy15.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  width: '420px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                  // padding: '10px',
                }}
              />
            </div>
            <div className="col-md-8 mb-4">
              <p>
                The Piggyback LD6002 is an advanced radar sensor module designed for motion and presence detection. 
                It is based on a 24 GHz FMCW (Frequency Modulated Continuous Wave) radar chip, offering higher 
                sensitivity and extended detection capabilities compared to basic radar or PIR modules. With the 
                ability to detect micro-movements (like breathing or subtle body shifts), it provides a robust solution 
                for smart home, IoT, and security systems. Its piggyback PCB format makes it compact and easy to 
                integrate into prototypes and embedded devices.
               </p>
                 
            </div>
          </div>
          </div>
          <div>
           <h2 className="mb-2 h6">Key Features</h2>
           <div className="row mb-4" style={{backgroundColor:"#f0f0f0", paddingTop:"15px"}}>
              <div className="col-md-5 mb-4">
                <ul>
                  <li>Radar sensing technology</li>
                  <ul>
                  <li>Detects human presence (stationary and moving)</li>
                  <li>Detects micro-motions such as breathing, sitting still, or slight gestures</li>
                  <li>More advanced processing vs. LD2410 → better accuracy and stability</li>
                  
                </ul>
                <li>Detection range</li>
                 <ul>
                  <li>Presence detection: up to ~8 meters (depending on environment)</li>
                  <li>Motion detection: up to ~10 meters</li>
                  
                </ul>
                <li>Wide field of view: ~120° horizontal / 60° vertical (varies by antenna design)</li>
                </ul>
                
                </div>
                <div className="col-md-1 mb-4">
                 <div
                    style={{
                      position: "relative", 
                      height: "500px",
                     
                    }}
                  >          
                {/* Vertical line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,          
                    left: "50%",       
                    width: "2px",
                    backgroundColor: "green",
                    transform: "translateX(-50%)",
                  }}
                />
                </div></div>
             <div className="col-md-5 mb-4">
                <ul>
                  <li>Interfaces</li>
                  <ul>
                  <li>UART (serial) for configuration and detailed data output</li>
                  <li>GPIO for simple trigger outputs</li>
                  
                </ul>
                 <li>Configurable parameters: sensitivity, range, detection zones, hold time</li>
                  <li>Supply Voltage: 3.3V - 5V (with onboard regulator on module)</li>
                   <li>Low power consumption suitable for IoT and always-on monitoring</li>
                    <li>Piggyback format → compact, stackable, and integration-friendly</li>
                </ul>
                </div> 
                 
                </div>
             <h2 className=" h6">Applications</h2>
             <ul>
              <li>Smart lighting and building automation</li>
              <li>Advanced security and intrusion detection systems</li>
              <li>Smart home HVAC and occupancy-based energy control</li>
              <li>Health and elderly care (breathing detection, inactivity alerts)</li>
              <li>IoT devices requiring reliable human presence detection</li>
              <li>Contactless user interfaces and gesture sensing</li>
              </ul>  

               <h2 className=" h6">Summary</h2>
               <p>
                The Piggyback LD6002 is a next-generation radar motion sensor module, offering longer range, 
                finer detection, and better stability than entry-level radar sensors like the LD2410.
                 Its ability to detect stationary presence and micro-movements makes it ideal for smart homes, 
                 security, healthcare, and IoT applications where reliability and sensitivity are crucial.
               </p>
          </div>
        </div>
        {/* 16 */}
           <div>
          <h2 className="mb-0 h6">16.Piggyback TLS2591 </h2>
          <p></p>
          <div
            className="e-card mb-8"
            style={{
              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
              maxHeight: '1070px',
              padding:"15px"
            }}
          >
          <div className="row">
            <div className="col-md-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/piggybacks/piggy16.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  width: '420px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                  // padding: '10px',
                }}
              />
            </div>
            <div className="col-md-8 mb-4">
              <p>
                The Piggyback TSL2591 is a high-sensitivity light sensor module, based on the AMS TSL2591 digital light sensor. 
                It measures ambient light intensity (illuminance in lux) across a wide dynamic range, from very low light (moonlight) 
                to bright sunlight, making it well-suited for precision light sensing in IoT, smart devices, and display control applications. 
                Its piggyback PCB format allows easy integration into compact embedded systems.
               </p>
                  
            </div>
          </div>
          </div>
          <div>
           <h2 className="mb-2 h6">Key Features</h2>
           <div className="row mb-4" style={{backgroundColor:"#f0f0f0", paddingTop:"15px"}}>
              <div className="col-md-5 mb-4">
                <ul>
                  <li>Ambient light sensing</li>
                  <ul>
                  <li>Measures light intensity in lux</li>
                  <li>Extremely wide dynamic range: 188 µlux - 88,000 lux</li>
                  <li>Works well in both low-light and high-brightness environments</li>
                  
                </ul>
                <li>Dual photodiodes</li>
                <ul>
                  <li>One channel for infrared + visible light</li>
                  <li>One channel for visible light only</li>
                  <li>Enables infrared compensation for more accurate lux calculations</li>
                  
                </ul>
                
                </ul>
                
                </div>
                <div className="col-md-1 mb-4">
                 <div
                    style={{
                      position: "relative", 
                      height: "400px",
                     
                    }}
                  >          
                {/* Vertical line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,          
                    left: "50%",       
                    width: "2px",
                    backgroundColor: "green",
                    transform: "translateX(-50%)",
                  }}
                />
                </div></div>
             <div className="col-md-5 mb-4">
                <ul>
                  <li>High resolution: 16-bit ADC for precise light readings</li>
                  
                  <li>Interface: I²C (digital communication, easy MCU integration)</li>
                  <li>Supply Voltage: 2.7V - 3.6V (typ. 3.3V)</li>
                  <li>Low power operation with programmable gain and integration times</li>
                  <li>Compact piggyback module design → stackable, easy for IoT prototypes</li>
                 
                </ul>
                </div> 
                 
                </div>
             <h2 className=" h6">Applications</h2>
             <ul>
              <li>Automatic brightness adjustment (smartphones, tablets, laptops, displays)</li>
              <li>Smart lighting control (daylight harvesting, energy-saving systems)</li>
              <li>IoT environmental monitoring nodes</li>
              <li>Smart agriculture (controlling artificial lighting for crops)</li>
              <li>Wearables and portable devices</li>
              <li>Photography and camera exposure systems</li>
              </ul> 

              <h2 className=" h6">Summary</h2> 
              <p>
                The Piggyback TSL2591 is a high-performance ambient light sensor module, offering ultra-wide dynamic range, 
                high accuracy, and infrared compensation. Its piggyback format makes it compact and easy to integrate, making 
                it ideal for IoT, smart home, portable devices, and automated lighting applications.
              </p>
          </div>
        </div>
        {/* 17 */}
           <div>
          <h2 className="mb-0 h6">17.Piggyback MAX30102 </h2>
          <p></p>
          <div
            className="e-card mb-8"
            style={{
              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
              maxHeight: '1070px',
              padding:"15px"
            }}
          >
          <div className="row">
            <div className="col-md-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/piggybacks/piggy17.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  width: '420px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                  // padding: '10px',
                }}
              />
            </div>
            <div className="col-md-8 mb-4">
              <p>
                The Piggyback MAX30102 is a biometric sensor module designed for measuring pulse (heart rate) and SpO₂ 
                (blood oxygen saturation). It integrates red and infrared LEDs, a photodetector, and low-noise analog 
                signal processing into a single compact module. With its piggyback PCB design, it is easy to integrate 
                into wearable devices, IoT health applications, and fitness trackers.
               </p>
                 
            </div>
          </div>
          </div>
          <div>
           <h2 className="mb-2 h6">Key Features</h2>
           <div className="row mb-4" style={{backgroundColor:"#f0f0f0", paddingTop:"15px"}}>
              <div className="col-md-5 mb-4">
                <ul>
                  <li>Heart-rate and SpO₂ monitoring</li>
                  <ul>
                  <li>Measures pulse rate using photoplethysmography (PPG)</li>
                  <li>Estimates blood oxygen saturation (SpO₂)</li>
                 
                  
                </ul>
                <li>Integrated components</li>
                <ul>
                  <li>Red & IR LEDs for sensing</li>
                  <li>Photodiode + optical elements (SpO₂)</li>
                  <li>Low-noise analog front end (AFE)</li>
                  
                </ul>
                
                </ul>
                
                </div>
                <div className="col-md-1 mb-4">
                 <div
                    style={{
                      position: "relative", 
                      height: "350px",
                     
                    }}
                  >          
                {/* Vertical line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,          
                    left: "50%",       
                    width: "2px",
                    backgroundColor: "green",
                    transform: "translateX(-50%)",
                  }}
                />
                </div></div>
             <div className="col-md-5 mb-4">
                <ul>
                  
                  <li>Low power operation → suitable for battery-powered wearables</li>
                  <li>I²C digital interface for communication with microcontrollers</li>
                  <li>Configurable sampling rate, LED current, and resolution</li>
                  <li>Supply Voltage: 1.8V (core) and 3.3V (I/O), with onboard regulation on module</li>
                  <li>Compact piggyback module for stacking and easy prototyping</li>
                
                </ul>
                </div> 
                 
                </div>
             <h2 className=" h6">Applications</h2>
             <ul>
              <li>Wearable fitness trackers (heart rate, oxygen monitoring)</li>
              <li>Smartwatches and health bands</li>
              <li>Home healthcare devices (SpO₂ and pulse monitoring)</li>
              <li>IoT-based remote patient monitoring systems</li>
              <li>Sports and fitness equipment (real-time heart tracking)</li>
              <li>Sleep monitoring (resting HR and oxygen levels)</li>
              </ul> 

               <h2 className=" h6">Summary</h2> 
               <p>
                The Piggyback MAX30102 is a compact, low-power pulse oximeter and heart-rate sensor module that provides 
                accurate biometric measurements. Its piggyback design makes it integration-friendly for wearables, smart 
                health devices, and IoT medical monitoring solutions.
               </p>
          </div>
        </div>
        {/* 18 */}
           <div>
          <h2 className="mb-0 h6">18.Piggyback TCS3472 </h2>
          <p></p>
          <div
            className="e-card mb-8"
            style={{
              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
              maxHeight: '1070px',
              padding:"15px"
            }}
          >
          <div className="row">
            <div className="col-md-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/piggybacks/piggy18.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  width: '420px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                  // padding: '10px',
                }}
              />
            </div>
            <div className="col-md-8 mb-4">
              <p>
                The Piggyback TCS3472 is a digital color sensor module designed to measure RGB color values and overall light intensity.
                 It combines red, green, blue, and clear (unfiltered) photodiodes with a 16-bit ADC, providing precise color measurements 
                 under various lighting conditions. With its I²C interface and piggyback PCB format, it is easy to integrate into embedded 
                 systems, IoT projects, and consumer devices.
               </p>
                 
            </div>
          </div>
          </div>
          <div>
           <h2 className="mb-2 h6">Key Features</h2>
           <div className="row mb-4" style={{backgroundColor:"#f0f0f0", paddingTop:"15px"}}>
              <div className="col-md-5 mb-4">
                <ul>
                  <li>Color sensing</li>
                  <ul>
                  <li>Detects red, green, blue, and clear light intensity</li>
                  <li>Outputs raw data or calibrated RGB values</li>
                  <li>Provides lux (illuminance) and color temperature estimates</li>
                  
                </ul>
                <li>High-resolution measurements</li>
                <ul>
                  <li>16-bit ADC for accurate sensing</li>
                  <li>Wide dynamic range for use in bright or dim environments</li>
                  
                </ul>
               
                </ul>
                
                </div>
                <div className="col-md-1 mb-4">
                 <div
                    style={{
                      position: "relative", 
                      height: "350px",
                     
                    }}
                  >          
                {/* Vertical line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,          
                    left: "50%",       
                    width: "2px",
                    backgroundColor: "green",
                    transform: "translateX(-50%)",
                  }}
                />
                </div></div>
             <div className="col-md-5 mb-4">
                <ul>
                  
                  <li>Integrated IR blocking filter → improves accuracy under different light sources</li>
                  <li>Interface: I²C (easy MCU/SoC integration)</li>
                  <li>Interrupt function for threshold-based color/light detection</li>
                  <li>Supply Voltage: 2.7V - 3.6V (typ. 3.3V)</li>
                  <li>Piggyback module format → compact, stackable, and prototyping-friendly</li>
                </ul>
                 
                </div> 
                 
                </div>
             <h2 className=" h6">Applications</h2>
             <ul>
              <li>Display color calibration and backlight adjustment</li>
              <li>Ambient light sensing for smart lighting systems</li>
              <li>Color recognition in robotics (line-following, object sorting)</li>
              <li>IoT devices requiring environmental color/light awareness</li>
              <li>Consumer electronics (screen brightness, adaptive color tuning)</li>
              <li>Industrial automation (color-based sorting, quality control)</li>
              </ul> 
               <h2 className=" h6">Summary</h2>
               <p>The Piggyback TCS3472 is a compact digital color sensor module that measures RGB values, 
                ambient light, and color temperature. Its I²C interface and piggyback design make it easy to 
                use in IoT devices, robotics, smart lighting, and display calibration systems.</p> 
          </div>
        </div>
        {/* 19 */}
           <div>
          <h2 className="mb-0 h6">19.Piggyback CH20 </h2>
          <p></p>
          <div
            className="e-card mb-8"
            style={{
              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
              maxHeight: '1070px',
              padding:"15px"
            }}
          >
          <div className="row">
            <div className="col-md-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/piggybacks/piggy19.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  width: '420px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                  // padding: '10px',
                }}
              />
            </div>
            <div className="col-md-8 mb-4">
              <p>
                The Piggyback CH20 is a formaldehyde (HCHO) gas sensor module designed for air quality monitoring applications. 
                It detects the presence and concentration of formaldehyde gas, a harmful volatile organic compound (VOC) commonly 
                found indoors from sources like paints, furniture, adhesives, and cleaning products. With its piggyback PCB design,
                 the CH20 is compact and easy to integrate into IoT, smart home, and industrial monitoring systems.
               </p>
                 
            </div>
          </div>
          </div>
          <div>
           <h2 className="mb-2 h6">Key Features</h2>
            <div className="row mb-4" style={{backgroundColor:"#f0f0f0", paddingTop:"15px"}}>
              <div className="col-md-5 mb-4">
                <ul>
                  <li>Formaldehyde detection</li>
                  <ul>
                  <li>Specifically designed for HCHO gas monitoring</li>
                  <li>Provides real-time concentration output (ppm or mg/m³ depending on calibration)</li>
                
                </ul>
                <li>High sensitivity & selectivity → optimized for detecting low-level formaldehyde</li>
                <li>Stable performance with good repeatability and long-term reliability</li>
                 <li>Supply Voltage: typically 3.3V - 5V</li>
                </ul>
                
                </div>
                <div className="col-md-1 mb-4">
                 <div
                    style={{
                      position: "relative", 
                      height: "400px",
                     
                    }}
                  >          
                {/* Vertical line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,          
                    left: "50%",       
                    width: "2px",
                    backgroundColor: "green",
                    transform: "translateX(-50%)",
                  }}
                />
                </div></div>
             <div className="col-md-5 mb-4">
                <ul>
                  <li>Interface options (depending on module variant):</li>
                  <ul>
                  <li>Analog output (voltage proportional to gas concentration)</li>
                  <li>Digital output via UART/I²C (for microcontroller integration)</li>
                  
                </ul>
                 <li>Low power consumption for continuous monitoring</li>
                
                  <li>Compact piggyback form factor for easy prototyping and integration</li>
                 
                </ul>
                </div> 
                 
                </div>
             <h2 className=" h6">Applications</h2>
             <ul>
              <li>Indoor air quality monitoring (smart homes, offices, schools)</li>
              <li>Air purifiers and HVAC systems (formaldehyde detection & filtering)</li>
              <li>IoT-based environmental monitoring networks</li>
              <li>Industrial safety (factories, chemical storage, furniture production)</li>
              <li>Wearable or portable air quality detectors</li>
              <li>Health and safety devices (exposure prevention in sensitive environments)</li>
              </ul>  
              <h2 className=" h6">Summary</h2>
              <p>
                The Piggyback CH20 is a formaldehyde gas sensor module that enables accurate detection of HCHO in indoor 
                and industrial environments. Its high sensitivity, low power design, and piggyback module format make it 
                ideal for air quality monitors, smart home devices, and IoT health and safety solutions.
              </p>
          </div>
        </div>
        {/* Install for free */}
        <div
            style={{
              textAlign: 'center',
            }}
          >
            <p className=" mb-4">
              {!isMobile && (
                <Link
                  href={'/install-for-free'}
                  target="_blank"
                  className={'btn btn-lg btn-success rounded-pill'}
                  style={{ color: 'white' }}
                >
                  <span className="small"> Install for free</span>
                </Link>
              )}

              {isMobile && (
                <a
                  href={'/install-for-free'}
                  target="_blank"
                  className={'btn btn-lg btn-success rounded-pill'}
                  style={{ color: 'white' }}
                  rel="noreferrer"
                >
                  <span className="small">
                    Install for free{' '}
                    {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                  </span>
                </a>
              )}
            </p>
          </div>

              {/* wishlist */}
          <hr className="my-7 "/>
          <div
            id="subscribe"
            className="my-5 "
            style={{ textAlign: 'center' }}
          >
            
            <h2>Product Wishlist</h2>
            <p>
              Join <strong>Envirosence 680</strong> wishlist for updates when
              ready
            </p>
            <SubscriptionWidget categoryId={3} />
          </div>
      </div>
    </>
  );
};

export default ServiceHOC(Index, {
  servicesCategoryUrls: servicesUrls.products,
  pageUrl: '../c3-mini-piggybacks',
  pageTitle: 'C3-Mini Piggybacks',
  serviceCategory: 'Our Products',
});
