import React from 'react';
import Head from 'next/head';
import PageTitle from '../components/PageTitle';

const Page = () => {
  const pageTitle = 'Blogs';
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
        <div className="container ">
          <div className='row'>
          <div className="col-lg-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '500px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/blog/blog1.webp"
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
                  href="https://carenuityblog.wixsite.com/embedded-ai-journal/post/using-the-bgt60ltr11-radar-shield2go-with-esp32-for-ai-applications"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5 style={{ padding: '10px' }}>
                    <u>
                    Using the BGT60LTR11 Radar Shield2Go with ESP32 for AI Applications
                    </u>
                  </h5>
                </a>

                <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                This guide will walk you through its features, setup, and integration with 
                an ESP32 microcontroller, providing a solid foundation for AI dev
                </p>
              </div>
            </div>
        <div className="col-lg-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '500px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/blog/sq-panel.webp"
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
                  href="https://carenuityblog.wixsite.com/embedded-ai-journal/post/introducing-the-sq-panel-your-smart-home-s-new-best-friend" 
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5 style={{ padding: '10px' }}>
                    <u>
                    Introducing the SQ Panel: Your Smart Home's New Best Friend
                    </u>
                  </h5>
                </a>

                <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                Are you ready to take your home monitoring to the next level? 
                Chipglobe is excited to announce our latest innovation: the SQ Panel.
                </p>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '500px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/blog/yaml.webp"
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
                  href="https://carenuityblog.wixsite.com/embedded-ai-journal/post/creating-your-first-yaml-file-in-home-assistant"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5 style={{ padding: '10px' }}>
                    <u>
                    Creating Your First YAML File in Home Assistant
                    </u>
                  </h5>
                </a>

                <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                This guide will walk you through its features, setup, and integration with 
                an ESP32 microcontroller, providing a solid foundation for AI dev...
                </p>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '500px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/blog/google.webp"
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
                  href="https://carenuityblog.wixsite.com/embedded-ai-journal/post/utilizing-google-sheets-in-home-assistant-a-comprehensive-guide"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5 style={{ padding: '10px' }}>
                    <u>
                    Utilizing Google Sheets in Home Assistant: A Comprehensive Guide
                    </u>
                  </h5>
                </a>

                <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                Greetings, tech enthusiasts! Today, we're delving into the intricacies of 
                incorporating Google Sheets into Home Assistant, a powerful...
                </p>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '500px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/blog/sensor.webp"
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
                  href="https://carenuityblog.wixsite.com/embedded-ai-journal/post/sensor-data-optimization-for-enhanced-ai-performance"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5 style={{ padding: '10px' }}>
                    <u>
                    Sensor Data Optimization for Enhanced AI Performance
                    </u>
                  </h5>
                </a>

                <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                Hello tech enthusiasts, In the realm of artificial intelligence, 
                sensor data plays a crucial role in shaping the accuracy and...
                </p>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '500px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/blog/revolutionizing.webp"
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
                  href="https://carenuityblog.wixsite.com/embedded-ai-journal/post/revolutionizing-home-living-the-synergy-of-home-automation-and-embedded-ai"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5 style={{ padding: '10px' }}>
                    <u>
                    Revolutionizing Home Living: The Synergy of Home Automation and embedded AI
                    </u>
                  </h5>
                </a>

                <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                In the age of rapid technological advancement, our homes are becoming 
                smarter and more intuitive than ever before. At the heart of this...
                </p>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '500px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/blog/automating1.jpg"
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
                  href="https://carenuityblog.wixsite.com/embedded-ai-journal/post/beginner-s-guide-automating-lights-with-hlk-ld2410-and-home-assistant"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5 style={{ padding: '10px' }}>
                    <u>
                    Beginner's Guide: Automating Lights with HLK-LD2410 and Home Assistant
                    </u>
                  </h5>
                </a>

                <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                Hello Tech Enthusiast! Welcome to today's tutorial where we 
                embark on a journey into the realm of Home Automations using Home Assistant....
                </p>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '500px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/blog/detecting.webp"
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
                  href="https://carenuityblog.wixsite.com/embedded-ai-journal/post/detecting-the-future-exploring-the-exciting-applications-of-object-detection"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5 style={{ padding: '10px' }}>
                    <u>
                    A Detecting the Future: Exploring the Exciting Applications of Object Detection
                    </u>
                  </h5>
                </a>

                <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                You might be wondering; where do I apply Object Detection? Well hold on to your hats because 
                we&apos;re about to explore some seriously cool...
                </p>
              </div>
              </div>

              <div className="col-lg-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '500px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/blog/cam.webp"
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
                  href="https://carenuityblog.wixsite.com/embedded-ai-journal/post/template-how-to-write-a-tips-blog-post"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5 style={{ padding: '10px' }}>
                    <u>
                    Turning Your ESP32-CAM into a Smart Object Detector with Edge Impulse
                    </u>
                  </h5>
                </a>

                <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                Hello, tech enthusiasts, welcome to the AI Journal tutorial! In this blog post, we're 
                diving into the exciting world of creating your own...
                </p>
              </div>
              </div>
              <div className="col-lg-4 mb-4">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '500px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/blog/welcome.webp"
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
                  href="https://carenuityblog.wixsite.com/embedded-ai-journal/post/your-title-what-s-your-blog-about"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5 style={{ padding: '10px' }}>
                    <u>
                    Welcome to ChipGlobe's Embedded AI Journal!
                    </u>
                  </h5>
                </a>

                <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                Greetings, tech enthusiasts, innovators, and fellow explorers! We're 
                Melina and Cynthia, Embedded AI Engineers at ChipGlobe, and we're...
                </p>
              </div>
              </div>
              
            </div>
        </div>
      </section>
    </>
  );
};

export default Page;
