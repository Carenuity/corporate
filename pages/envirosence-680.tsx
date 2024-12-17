import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';
import SubscriptionWidget from '../components/SubscriptionWidget';
import SolutionWidget from '../components/SolutionWidget';

const Page = () => {
  const pageTitle = 'Envirosence 680';
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
          <div
            className="e-card mb-6"
            style={{
              boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
              maxHeight: '1000px',
              padding: '20px',
            }}
          >
            <div className="row ">
              <h4>
                EnviroSence 680 - Advanced Environmental Monitoring Solution
              </h4>
              <div className="col-lg-9">
                <p>
                  EnviroSence 680 is a versatile and compact device designed to
                  monitor and display essential environmental data in real-time.
                  It integrates the powerful BME680 sensor with the ESP-C3 mini
                  microcontroller, providing accurate measurements of
                  temperature, humidity, pressure, altitude, gas concentration,
                  and air quality index (AQI). The device features a vibrant TFT
                  display, making data visualization clear and user-friendly.
                </p>
                <p>
                  To ensure a smooth user experience, the interface is developed
                  using LVGL, a highly optimized graphical library tailored for
                  embedded systems. EnviroSence 680&apos;s intuitive GUI
                  presents all the environmental parameters at a glance, making
                  it ideal for applications in smart homes, industrial
                  monitoring, and precision agriculture.
                </p>
              </div>
              <div className="col-lg-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/envirosence/envirosence.jpeg"
                  className="mt-3 wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',

                    animationName: 'fadeIn',
                  }}
                />
              </div>
            </div>
          </div>

          <div>
            <h6>Key Features:</h6>
            <ul style={{ listStyleType: 'square' }}>
              <li>
                <strong>Real-Time Monitoring:</strong> Display up-to-the-second
                data on temperature, humidity, altitude, pressure, gas levels,
                and AQI. Compact & Efficient Design: Powered by the ESP-C3 mini
                microcontroller, ensuring low power consumption and fast
                processing.
              </li>
              <li>
                <strong>Advanced Sensor Technology:</strong> The BME680 sensor
                ensures high accuracy across multiple environmental parameters.
                Interactive GUI: Built using LVGL, providing a sleek, modern
                user interface.
              </li>
              <li>
                <strong>Portable and Flexible:</strong> Suitable for a wide
                range of environments and applications.
              </li>
            </ul>
          </div>
          <video
            src="/videos/content/envirosence.mp4"
            loop={true}
            autoPlay={true}
            muted
            className="mt-1-9 mb-4 wow fadeInUp w-100"
            data-wow-delay="100ms"
            style={{
              visibility: 'visible',
              animationDelay: '100ms',
              height: '400',
              animationName: 'fadeIn',
            }}
          />
          <SolutionWidget solutionId={'EVfcgU5gUOrAKLN3Ik0Y'} />

          <div id="subscribe" className="my-5" style={{ textAlign: 'center' }}>
            <h2>Product Wishlist</h2>
            <p>
              Join <strong>Envirosence 680</strong> wishlist for updates when
              ready
            </p>
            <SubscriptionWidget categoryId={3} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
