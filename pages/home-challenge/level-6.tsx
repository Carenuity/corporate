import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PageTitle from '../../components/PageTitle';

const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'AI-assisted Edge Device';
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
          <p>
            {!isMobile && (
              <Link
                href={'/home-challenge'}
                className={'btn btn-lg btn-success rounded-pill'}
              >
                <span className="small">Back to Home Challenge</span>
              </Link>
            )}

            {isMobile && (
              <a
                href={'/single-sensor-boxes'}
                className={'btn btn-lg btn-success rounded-pill'}
              >
                <span className="small">
                  Back to Home Challenge{' '}
                  {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                </span>
              </a>
            )}
          </p>
          <h4 className=" mb-4">
            Level 6: Image Recognition by AI-assisted Edge Device
          </h4>

          <div
            className="e-card mb-4"
            style={{
              boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
              maxHeight: '1000px',
              padding: '20px',
            }}
          >
            <div className="row ">
              <div className="col-lg-9">
                <h5>Build AI-assisted Device for Image Recognition</h5>
                <ul style={{ listStyleType: 'square' }}>
                  <li>Use ESP32-CAM for image recognition.</li>
                  <li>Training AI models with Edge Impulse</li>
                  <li>
                    Cup or vegetable detection using ESP32-CAM, deploying
                    machine learning models on ESP32-CAM
                  </li>
                  <li>Edge computing with ESP32-CAM and Edge Impulse.</li>
                </ul>
                <p>
                  Grow visibility, open a Shopify shop Start promoting your
                  AI-assisted device.
                  <br />
                  <strong>Tools: </strong>Edge-Impulse and Solution-Builder.
                </p>
              </div>
              <div className="col-lg-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/home-challenge/level06.png"
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
          <h5>Gained Tech Competences</h5>
          <p>
            Level 6 is the culmination of the challenge, where students will
            build an image recognition system using the ESP32-CAM module. They
            will train and deploy machine learning models on the ESP32-CAM to
            identify objects such as vegetables. This level covers edge
            computing concepts, data acquisition, model training, and deployment
            using Edge Impulse. Students will also learn to promote and sell
            their AI-assisted devices through platforms like Shopify. Completing
            this level provides students with free stocking and sales of five
            devices, including fulfillment and 100% sales profit. On Level 6,
            you are able to build an image recognition system using the
            ESP32-CAM modul e to identify vegetables like tomatoes, potatoes,
            and onions. Using the Edge Impulse platform, you train and deploy a
            machine learning model to run directly on the ESP32-CAM. The results
            are displayed on an OLED screen for easy viewing. Learn the basics
            of edge computing, data acquisition, model training, and deployment.{' '}
          </p>
          <p>
            Check out our detailed{' '}
            <a
              href="https://carenuityblog.wixsite.com/embedded-ai-journal/post/template-how-to-write-a-tips-blog-post"
              className="text-success"
            >
              <strong>blog post</strong>
            </a>{' '}
            to create your own object detection system.
          </p>
          <div className="mb-4">
            <h5>Tutorial for this level</h5>
            <iframe
              width="1300"
              height="450"
              src="https://www.youtube.com/embed/bZIKVaD3dRk"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <h5 className="mb-4">Reward:</h5>
            <p>
              The reward for completing this level is a C3-Mini microcontroller,
              which is prerequisite for the next level.
            </p>
          </div>
          <div>
            <h5>Gained Soft Skills</h5>
            <p>
              In Level 1, students will develop essential communication skills
              by documenting their soldering process and explaining their sensor
              integration. They will enhance their problem-solving abilities by
              troubleshooting any issues that arise during soldering. Time
              management skills will be honed as they balance learning new
              techniques with completing tasks. Attention to detail is crucial
              for precise soldering, and resilience is built as they overcome
              initial challenges.
            </p>
          </div>

          <div>
            <h5>Summary for this Level</h5>
            <p>
              In the first level of the IoT Smart Home Challenge, students will
              embark on their journey by learning the basics of soldering. They
              will work on soldering triple adapters, which is a fundamental
              skill in electronics. Additionally, students will familiarize
              themselves with the WOKWI simulator, a powerful tool for
              simulating various sensor solutions. This level aims to build a
              strong foundation in practical electronics and simulation,
              ensuring that students are comfortable with basic hardware tasks
              and virtual environments. By the end of this level, students will
              have gained essential skills in soldering and using simulation
              tools, setting the stage for more complex projects.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
