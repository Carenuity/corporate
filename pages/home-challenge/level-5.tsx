import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PageTitle from '../../components/PageTitle';

const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'AI Algorithim';
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
          <h3 className=" mb-4">
            Level 5: Choosing and feeding databases by sensor data logging for
            AI Machine Learning
          </h3>

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
                <h5>
                  Select the right database for your / industrial AI usecase
                </h5>
                <p>
                  Identify a suitable database, consider industrial use cases,
                  describe the USP of your targeted algos and consider how it
                  could solve problems or benefit solutions.
                </p>
                <p>
                  Level 5 focuses on recording and analyzing sensor data.
                  Students commission a sensor device, visualize and analyze its
                  data in a database in order to later develop algorithms for
                  machine learning and predictive models. The focus is on the
                  selection of a suitable database for target achievement and
                  automation in real time. At the end of this level, students
                  will implement a data logger to use the data for smart
                  AI-assisted solutions.
                </p>
              </div>

              <div className="col-lg-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/home-challenge/level05.png"
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
          <div>
            <h5>Summary for this Level</h5>
            <p>
              The fifth level introduces students to the exciting field of
              machine learning. They will use a sensor and store it&apos;s
              measured data in a cloud-based database for machine learning
              purposes, prepareing for platforms like Edge Impulse to use the
              data for training an algorithm. Additionally, students will select
              from various features of databases to match these with the unique
              selling propositions (USPs), they might have in mind for their
              project. Possibly they consider the potential for establishing an
              own startup around their project, which could become a product.
              This level combines technical skills in infrastructure with
              entrepreneurial thinking, preparing students to not only develop
              innovative solutions but also to consider marketing database
              features like viewing option on historic data and potentially
              commercialize their electronics project.
            </p>
          </div>
          <div className="mb-4">
            <strong>Tools: </strong>Databases and Edge-Impulse.
          </div>
          <div className="mb-4">
            <strong>Reward: </strong>ESP32-CAM (opt. with Dual-Adapter for
            0.66-OLED) plus opt. 1 year free access to SQ-Cloud (Google
            Firebase) for data upload & AI analysis
          </div>
          <table
            className="mb-4"
            style={{
              width: '100%',
              border: '1px solid #dddddd',
              padding: '20px',
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    width: '50%',
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  <strong>Level of Difficulty:</strong> advanced / AI related
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  <strong> Tutor:</strong> Cynthia
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mb-4">
            <h5>Tutorial for this level</h5>
            <iframe
              width="1300"
              height="450"
              src="https://www.youtube.com/embed/G6ccogmR_no"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mb-4">
            <h5>Motivational or Reference Video</h5>
            <iframe
              width="1300"
              height="450"
              src="https://www.youtube.com/embed/wBWTj-1XiRU"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          {/* <h5 className="mb-4">Related blog:</h5> */}
          <div className="mb-4">
            <h5>Gained Tech Competences</h5>
            <p>
              Remembering: In Level 5, students explore machine learning by
              first selecting an appropriate database of their choice.
              Understanding: They will explore different databases for data
              storage and analysis, e.g. ThingSpeak, InfluxData and Firebase.
              Apply: Setting up their device to feed data into a database like
            </p>
            <ul style={{ listStyleType: 'square' }}>
              <li>
                <Link
                  href="https://www.thingspeak.com "
                  className="text-success"
                >
                  <h6 className="text-success">https://www.thingspeak.com </h6>
                </Link>
              </li>
              <li>
                <Link href="https://www.timescale.com" className="text-success">
                  <h6 className="text-success">https://www.timescale.com</h6>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.influxdata.com"
                  className="text-success"
                >
                  <h6 className="text-success">https://www.influxdata.com</h6>
                </Link>
              </li>
              <li>
                <Link href="https://io.adafruit.com" className="text-success">
                  <h6 className="text-success">https://io.adafruit.com</h6>
                </Link>
              </li>
              <li>
                <Link href="https://www.prometheus.io" className="text-success">
                  <h6 className="text-success">https://www.prometheus.io</h6>
                </Link>
              </li>
              <li>
                <Link
                  href="https://firebase.google.com"
                  className="text-success"
                >
                  <h6 className="text-success">https://firebase.google.com</h6>
                </Link>
              </li>
            </ul>
            <p>
              At this stage, students may also be inclined to think about the
              possible commercialization of their device, for example by
              considering its possible unique selling proposition (USP) and
              potential start-up opportunities. Analyze: Focus on developing ML
              skills, data management and entrepreneurial thinking. Evaluating:
              The reward includes a ESP32-CAM with an optional dual adapter for
              a 0.66 OLED and one year of free access to the SQ-Cloud for data
              analytics and AI.
            </p>
          </div>

          <div>
            <h5>Gained Soft Skills</h5>
            <p>
              Remembering: In Level 5, students will develop critical thinking
              and problem-solving skills by training and implementing machine
              learning models. Understanding: They will enhance their
              communication skills by marketing their algorithms and describing
              their unique selling points. Applying: Entrepreneurial thinking is
              fostered as they consider startup opportunities. Analyzing: Time
              management is key for balancing ML training with data management
              tasks. Evaluating: Adaptability is required to work with various
              databases, and resilience is built as they refine their models.
            </p>
          </div>

          <div>
            <h5>Summary for this Level</h5>
            <p>
              The fifth level introduces students to the exciting field of
              machine learning. They will use a sensor and store it&apos;s
              measured data in a cloud-based database for machine learning
              purposes, prepareing for platforms like Edge Impulse to use the
              data for training an algorithm. Additionally, students will select
              from various features of databases to match these with the unique
              selling propositions (USPs), they might have in mind for their
              project. Possibly they consider the potential for establishing an
              own startup around their project, which could become a product.
              This level combines technical skills in infrastructure with
              entrepreneurial thinking, preparing students to not only develop
              innovative solutions but also to consider marketing database
              features like viewing option on historic data and potentially
              commercialize their electronics project.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-2">
              <p>
                {!isMobile && (
                  <Link
                    href={'./level-4'}
                    className={'btn btn-lg btn-success rounded-pill'}
                  >
                    <span className="small">Previous level</span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'./level-4'}
                    className={'btn btn-lg btn-success rounded-pill'}
                  >
                    <span className="small">
                      Previous level{' '}
                      {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                    </span>
                  </a>
                )}
              </p>
            </div>
            <div className="col-lg-3">
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
                    href={'/home-challenge'}
                    className={'btn btn-lg btn-success rounded-pill'}
                  >
                    <span className="small">
                      Back to Home Challenge{' '}
                      {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                    </span>
                  </a>
                )}
              </p>
            </div>
            <div className="col-lg-3">
              <p>
                {!isMobile && (
                  <Link
                    href={'./level-6'}
                    className={'btn btn-lg btn-success rounded-pill'}
                  >
                    <span className="small">Next level</span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'./level-6'}
                    className={'btn btn-lg btn-success rounded-pill'}
                  >
                    <span className="small">
                      Next level{' '}
                      {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                    </span>
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
