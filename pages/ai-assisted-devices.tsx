import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';

// eslint-disable-next-line no-unused-vars
const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'AI-Assisted Devices';
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
        <title>{pageTitle}</title>
      </Head>

      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        links={[{ path: '/', title: '' }]}
        pageTitle={pageTitle}
        pageUrl=""
      />

      <section className="pt-4">
        <div className="container">
          <div className="row">
            <h4>
            AI-assisted sensors
              {/* Intelligent Radar Device for Preventing Sudden Infant Death
              Syndrome (SIDS) */}
            </h4>

            {/* <p>
              Our cutting-edge radar device is designed to help prevent Sudden
              Infant Death Syndrome (SIDS) by continuously monitoring your
              baby&apos;s vital signs without physical contact. Utilizing
              advanced radar technology, it detects subtle movements and
              breathing patterns, providing real-time alerts to parents and
              caregivers if any irregularities are detected. This non-invasive
              solution ensures your baby&apos;s safety and gives you peace of
              mind, knowing that your little one is being closely monitored
              around the clock.
            </p> */}

            <p>AI-assisted sensors are devices that combine sensor technology with artificial
               intelligence to gather, process, and analyze data from their environment. These
                sensors can detect various physical parameters such as temperature, motion, light,
                 and more, and use AI to make intelligent decisions based on the data collected.</p>

            <div>
              <h4>Our Sensors / Featured Sensors</h4>
              <ul>
                <li>	Radar Sensor</li>
                
              </ul>
              <p>A radar sensor is a device that uses radio waves to detect [stationary, approaching, departing, missing] objects and measure their distance, speed, and other characteristics, in instance segmentation of an area. 
              <br/>Take a look to the radars that we use in our projects:
                </p>
            </div>

            

            <div className="col-lg-6 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '550px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/Ai-assisted/radar-sensor1.jpeg"
                  className=" wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',

                    animationName: 'fadeIn',
                  }}
                />

                <a
                  href="https://carenuityblog.wixsite.com/embedded-ai-journal/post/template-how-to-write-a-tips-blog-post-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5 style={{ padding: '10px' }}>
                    <u>
                      A Beginner&apos;s Guide to HLK-LD2410C 24GHz Radar Sensor
                    </u>
                  </h5>
                </a>

                <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                  Today, let&apos;s delve into the fascinating world of the
                  HLK-LD2410, a 24GHz Human Presence Radar Sensor. The exciting
                  part? No coding required! In this tutorial, we&apos;ll walk
                  you through the simple yet captivating.....
                </p>
              </div>
            </div>

            <div>
              
              <ul>
                <li>	ESP32-Cam</li>
                
              </ul>
              <p>The ESP32-CAM is a compact, low-cost module that combines an ESP32-S microcontroller
                 with an OV2640 camera.
                 In the field of object detection, it is particularly useful due to its
                  built-in Wi-Fi and Bluetooth capabilities, allowing for wireless image
                   transmission and processing. By leveraging libraries like OpenCV and machine
                    learning models, the ESP32-CAM can perform real-time object detection and 
                    identification. This makes it ideal for applications in home automation, 
                    security systems, and IoT projects where capturing and analyzing visual data is essential.
                </p>
            </div>

            <div className="col-lg-6 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '550px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/Ai-assisted/radar-sensor2.jpeg"
                  className=" wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',

                    animationName: 'fadeIn',
                  }}
                />

                <a
                  href="https://carenuityblog.wixsite.com/embedded-ai-journal/post/discovering-the-ld2410c-radar-sensor"
                  className="text-success"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5 style={{ padding: '10px' }}>
                    <u>Discovering the LD2410C Radar Sensor</u>
                  </h5>
                </a>

                <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                  What if you could see through walls, fog, and darkness, with
                  accuracy and speed? This has been made possible thanks to the
                  LD2410C radar sensor, a high sensitivity 24GHz human presence
                  status sensing module developed by Hi-Link Electronics. In a
                  world .....
                </p>
              </div>
            </div>
          </div>
          {/* <iframe
            src="https://carenuityblog.wixsite.com/embedded-ai-journal/post/using-the-bgt60ltr11-radar-shield2go-with-esp32-for-ai-applications"
            width={800}
            height={485}
          /> */}
        </div>
      </section>
    </>
  );
};

export default Page;
