import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';
import Link from 'next/link';

const Page = () => {
  const pageTitle = 'Home Challenge';
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
              height: '300px',
              padding: '20px',
            }}
          >
            <div className="row">
              <div className="col-lg-9 ">
                <h5>Home Challenge</h5>
                <p>
                  Showcase your skills and accept the Home Challenge to start
                  your journey. For those in Munich, Mombasa, Thessaloniki,
                  Hamburg, Trieste, Nairobi, Belgrade, Patras or Kisii get ready
                  to experience this at no cost. Claim your free triple adapter
                  now and join the community!
                </p>
                <p>
                  Welcome to a journey of building your own device within 3
                  minutes to immediately sense whats’s going on.
                </p>

                <p>
                  <strong>
                    Becoming a distinguished AI talent is a journey worth
                    taking.
                  </strong>
                </p>
              </div>
              <div className="col-lg-3 mt-n1-9 ">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/free-offer/free-offer1.png"
                  className="mt-1-9 wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    width: '260px',
                    animationName: 'fadeIn',
                  }}
                />
              </div>
            </div>
          </div>

          <div className=" mb-6">
            <h5 className=" mb-3">IoT Smart Home Challenge Overview</h5>
            <p>
              The IoT Smart Home Challenge is a structured program designed to
              guide students through progressively complex tasks in the realm of
              IoT and smart home devices. Targeted at beginners with basic
              knowledge in electronics and programming, this challenge aims to
              enhance both technical skills and practical knowledge. Each level
              builds on the previous one, ensuring a comprehensive learning
              experience that is both educational and motivational. The
              challenge covers a wide range of topics, from basic soldering and
              simulation to advanced machine learning and image recognition.
            </p>
          </div>

          <div>
            <h5 className=" mb-3">Preview on Talents Walkthrough</h5>
            <p>
              The <strong>Talents&apos; </strong>Walkthrough overview for the
              Home Challenge is a guide designed to help users navigate and
              complete the five levels of the Home Challenge Journey offered by
              Carenuity. This guide includes step-by-step instructions, tips,
              and strategies to ensure users can successfully progress through
              each level.
            </p>
            <p>Every level you complite you get a give away</p>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '520px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/free-offer/free-offer3.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    width: '420px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />

                <div style={{ padding: '10px' }}>
                  <Link href="/free-offer" className="text-success">
                    <h6 className="text-success">Level 1</h6>
                  </Link>
                  <p>
                  This level focuses on understanding sensor integration and building a foundation
                   in hardware skills. By the end of this level, students will have a practical 
                   understanding of soldering and the ability to simulate sensor solutions using WOKWI
                  </p>
                  <strong>Reward:</strong> C3-mini
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '520px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/free-offer/gpio.jpeg"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    width: '420px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />

                <div style={{ padding: '10px' }}>
                  <Link href="/gpio-viewer" className="text-success" style={{textUnderlinePosition:'under'}}>
                    <h6 className="text-success">Level 2</h6>
                  </Link>
                  <p>
                  This level emphasizes the importance of precise design and modification skills 
                  using tools like KiCAD. By completing this level, students will gain proficiency 
                  in PCB design and the ability to create customized electronic components.
                  </p>
                  <strong>Reward:</strong> 0.66 / 0.96 OLED Display
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '520px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/free-offer/solutions.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    width: '420px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />

                <div style={{ padding: '10px' }}>
                  <Link href="/api-usage">
                    <h6 className="text-success">Level 3</h6>
                  </Link>
                  <p>
                  This level encourages students to share their success on LinkedIn, promoting 
                  their work within the professional community. The focus is on developing coding 
                  skills, managing projects, and leveraging API integrations to enhance functionality.
                  </p>
                  <strong>Reward:</strong> Sensor DS18B20 or Oximeter Sensor
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '520px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/free-offer/gray.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    width: '420px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />

                <div style={{ padding: '10px' }}>
                  <Link href="/3d-modelling">
                    <h6 className="text-success">Level 4</h6>
                  </Link>
                  <p>
                  {/* Students learn to automate home devices using Home Assistant. This level combines 
                  hardware design with software automation, providing a comprehensive skill set. */}
                  This level not only enhances students&apos; technical skills in 3D modelling but also 
                  encourages creativity and innovation in designing custom solutions for their projects. 
                  By mastering these skills, students will be able to create professional-looking enclosures 
                  that enhance the functionality and aesthetics of their IoT devices.
                  </p>
                  <strong>Reward:</strong> 25% voucher for ChipGlobe.shop
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div
                className="e-card "
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '520px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/free-offer/gray.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    width: '420px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />

                <div style={{ padding: '10px' }}>
                  <Link href="/ai-algo" className="text-success">
                    <h6 className="text-success">Level 5</h6>
                  </Link>
                  <p>
                  This level also encourages students to market their algorithms by describing
                   their unique selling points (USP) and considering startup opportunities. 
                   The focus is on developing ML skills, data management, and entrepreneurial thinking.
                  </p>
                  <strong>Reward:</strong> ESP32-CAM with Dual-Adapter for 0.69 OLED plus 2 years free 
                  access to SQ-Cloud (Google Firebase) for data analysis / AI
                </div>
              </div>
            </div>
          </div>

          <div>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
