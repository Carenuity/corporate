import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PageTitle from '../../components/PageTitle';
// import styles from './level1.module.css';

const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'Free offer';
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
          <h3 className=" mb-4">Level 1: Triple Adapter & WOKWI Simulation</h3>
          
          
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
                  Soldering with Triple Adapter and Familiarize with WOKWI
                </h5>
                <p>
            Attach 6 pinheaders to the Triple Adapter and familiarize yourself
            with WOKWI simulations, especially with some sensor solutions.
          </p>
                <p>
                  This level focuses on understanding electronic connections,
                  building a foundation in hardware skills. By the end of this
                  level, students have a practical understanding of soldering
                  and the ability to simulate sensor solutions using WOKWI
                </p>
              </div>
              <div className="col-lg-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/home-challenge/level1.png"
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

          <div className="mb-4">
            <h5>Summary for this Level</h5>
            <p>
              In the first level of the IoT Smart Home Challenge, students will
              embark on their journey by learning the basics of soldering. They
              will work on soldering their Triple Adapter, which is a
              fundamental skill in electronics. Additionally, students will
              familiarize themselves with the WOKWI simulator, a powerful tool
              for simulating various sensor solutions. This level aims to foster
              their foundation in practical electronics and simulation, ensuring
              that students are comfortable with basic hardware tasks and
              virtual environments. By the end of this level, students will have
              gained the essential skill of soldering and using a simulation
              tool, setting the stage for more complex projects.
            </p>
          </div>
          <div className="mb-4">
            <strong>Tools: </strong> Solder iron and WOKWI
          </div>

          <div className="mb-4">
            <strong>Reward:</strong> D1- / or C3-Mini
          </div>
          <table
            className="mb-4"
            style={{
              width: '100%',
              border: '1px solid #dddddd',
              padding: '20px',
            }}
          >
            <tr>
              <td
                style={{
                  width: '50%',
                  border: '1px solid #dddddd',
                  padding: '8px',
                }}
              >
                <strong>Level of Difficulty:</strong> Basic
              </td>
              <td
                style={{
                  border: '1px solid #dddddd',
                  padding: '8px',
                }}
              >
                <strong>Tutor:</strong> Nilu
              </td>
            </tr>
          </table>

          <div className="mb-4">
            <h5>Tutorial for this level</h5>
            <iframe
              width="1300"
              height="450"
              src="https://www.youtube.com/embed/RHMUW-Oyl9c"
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
              src="https://www.youtube.com/embed/6l9DWqb77KI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <h5 className="mb-4">Related blog:</h5>

          <div className="mb-4">
            <h5>Gained Tech Competences</h5>
            <p>
              Remembering: In Level 1, students begin their journey with the
              learning of a basic skill, the soldering of pin headers.
              Understanding: They will solder the Triple Adapter and then
              familiarize themselves with WOKWI, a powerful simulation tool for
              electronics and IoT projects . Applying: This level focuses on
              understanding sensor integration and building a foundation in
              hardware skills. Analyzing: By the end of this level, students
              will have a practical understanding of soldering and the ability
              to simulate sensor solutions using WOKWI. Evaluating: The reward
              for completing this level is a D1- / or a C3-Mini microcontroller,
              which is prerequisite for the next level.
            </p>
          </div>

          <div>
            <h5>Gained Soft Skills</h5>
            <p>
              Remembering: In Level 1, students will develop effective
              communication skills by sharing their soldering result and their
              simulation result on WOKWI. Understanding: They will enhance their
              problem-solving abilities by troubleshooting any issues that arise
              during soldering or simulating. Applying: Time management skills
              will be honed as they balance learning new techniques with
              completing tasks. Analyzing: Attention to detail is crucial for
              precise soldering, and resilience is built as they overcome
              initial challenges.
            </p>
          </div>

          <div>
            <h5>Summary for this Level</h5>
            <p>
              In the first level of the IoT Smart Home Challenge, students will
              embark on their journey by learning the basics of soldering. They
              will work on soldering their Triple Adapter, which is a
              fundamental skill in electronics. Additionally, students will
              familiarize themselves with the WOKWI simulator, a powerful tool
              for simulating various sensor solutions. This level aims to foster
              their foundation in practical electronics and simulation, ensuring
              that students are comfortable with basic hardware tasks and
              virtual environments. By the end of this level, students will have
              gained the essential skill of soldering and using a simulation
              tool, setting the stage for more complex projects.
            </p>
          </div>
          <div className="row">
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
            </div>
            <div className="col-lg-6">
              <p>
                {!isMobile && (
                  <Link
                    href={'./level-2'}
                    className={'btn btn-lg btn-success rounded-pill'}
                  >
                    <span className="small">Next level</span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'./level-2'}
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
