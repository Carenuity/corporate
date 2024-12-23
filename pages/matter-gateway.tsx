import React from 'react';
import Head from 'next/head';
import PageTitle from '../components/PageTitle';

const Page = () => {
  const pageTitle = 'Matter Gateway';

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
            <h4>SQ-Matter</h4>
            <p>
              The SQ-Connector acts as Matter Gateway, a core part of the Matter
              protocol, a unifying, IP-based connectivity standard developed by
              the Connectivity Standards Alliance (CSA). Matter aims to ensure
              secure, reliable, and seamless communication between smart home
              devices, mobile apps, and cloud services. The Matter Gateway
              specifically facilitates the integration of devices using
              different communication protocols, such as Zigbee, Bluetooth, and
              Wi-Fi, into a unified Matter ecosystem. This standard helps reduce
              fragmentation in the smart home market by enabling
              interoperability between devices from various manufacturers,
              ensuring they work together smoothly. The Matter Gateway plays a
              crucial role in bridging different technologies and ensuring a
              cohesive smart home experience.
            </p>
            <div className="col-lg-6 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/kickstarter/connection.PNG"
                className=" wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
            </div>
            <div className="col-lg-6 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/kickstarter/connection02.PNG"
                className=" wow fadeInUp"
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
      </section>
    </>
  );
};

export default Page;
