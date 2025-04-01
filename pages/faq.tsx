import React from 'react';
import Head from 'next/head';
import PageTitle from '../components/PageTitle';

const Page = () => {
  const pageTitle = 'FAQ';
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
          <h4>SQ-Panel FAQ</h4>
          <p>
            Find answers to common questions about the SQ-Panel, its
            functionality, and commissioning via the Matter procedure.
          </p>

          <div>
            <h6>1. What is the SQ-Panel?</h6>
            <p>
              The SQ-Panel is an easy-to-use sensor display with built-in
              environmental sensors for indoor air quality monitoring and human
              presence detection.
            </p>
          </div>

          <div>
            <h6>2. What sensors are included in the SQ-Panel?</h6>
            <p>
              The SQ-Panel includes sensors for temperature, humidity, air
              pressure, CO2 levels, VOCs, and air quality index measurement.
            </p>
          </div>

          <div>
            <h6>3. How do I set up the SQ-Panel using the Matter procedure?</h6>
            <p>
              Use the Carenuity app to scan the QR code displayed on the panel
              for easy commissioning in your preferred Matter-compatible
              ecosystem.
            </p>
          </div>

          <div>
            <h6>4. Do I need the Carenuity app after setup?</h6>
            <p>
              After initial setup, using the Carenuity app is optional as the
              SQ-Panel supports multi-admin Matter ecosystems like Alexa, Google
              Home, and Apple Home.
            </p>
          </div>

          <div>
            <h6>5. How do I manage user profiles?</h6>
            <p>
              Use the Carenuity app or your preferred Matter ecosystem to define
              user preferences and thresholds for sensor alerts.
            </p>
          </div>

          <div>
            <h6>6. Can the SQ-Panel be used in multiple rooms?</h6>
            <p>
              Yes, you can operate multiple SQ-Panels on a single connector to
              monitor various rooms simultaneously.
            </p>
          </div>

          <div>
            <h6>7. What are the mounting options for the SQ-Panel?</h6>
            <p>
              The SQ-Panel can be wall-mounted for a sleek look or placed on a
              table stand for flexibility.
            </p>
          </div>

          <div>
            <h6>8. How does the SQ-Panel ensure data security?</h6>
            <p>
              The SQ-Panel uses end-to-end encryption and Gaia-X-certified
              European servers for secure data handling.
            </p>
          </div>

          <div>
            <h6>9. Can I monitor air quality remotely?</h6>
            <p>
              Yes, the Carenuity app lets you monitor air quality and sensor
              data from anywhere, even when you&apos;re away.
            </p>
          </div>

          <div>
            <h6>10. What is the range of the Matter-supported SQ-Panel?</h6>
            <p>
              The SQ-Panel has an extended range of approximately 80 meters,
              providing reliable operation indoors.
            </p>
          </div>

          <div>
            <h6>11. How can I customize sensor thresholds?</h6>
            <p>
              Thresholds can be configured via the app or Matter-compatible
              platforms, enabling alerts for deviations.
            </p>
          </div>

          <div>
            <h6>
              12. Is the SQ-Panel compatible with other smart home systems?
            </h6>
            <p>
              Yes, it integrates seamlessly with popular Matter ecosystems like
              Alexa, Google Home, and Apple Home.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
