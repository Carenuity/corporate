import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PageTitle from '../../components/PageTitle';

const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'GPIO-Viewer';
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
          <h4 className=" mb-4">Level 2: PCB-Design & GPIO-Viewer</h4>
          
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
                  Show Pins by GPIO-Viewer and modify a PCB-Design with KiCAD
                </h5>
                <p>
            GPIO Viewer & PCB-Desing (add your own logo) design modification
          </p>
                <p>
                  In this level, PCB design modification skills are practiced
                  using the KiCAD tool. Upon completion of this course, students
                  will be able to update and store a PCB design and furthermore
                  monitor the pins of a microcontroller live on their
                  smartphone.
                  
                </p>
              </div>
              <div className="col-lg-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/home-challenge/level2.png"
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
              The second level introduces students to the PCB design using KiCAD
              and the GPIO Viewer. Students will learn to modify a printed
              circuit board (PCBs) design, including the integration of a custom
              logos or symbol of their choice. This level emphasizes basics of
              PCB design and the importance of understanding GPIO pins, which
              are crucial for creating aesthetically pleasing and functional
              electronic devices. By mastering these skills, students will gain
              confidence to handle their own PCBs and understand the intricacies
              of hardware design, preparing them for more advanced tasks in the
              subsequent levels.
            </p>
          </div>
          <div className="mb-4">
            <strong>Tools: </strong>GPIO-Viewer and KiCAD
          </div>
          <div className="mb-4">
            <strong>Reward:</strong> 0.66 / or 0.96 OLED Display
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
                <strong> Tutor:</strong> Timothy
              </td>
            </tr>
          </table>
          <div className="mb-4">
            <h5>Tutorial for this level</h5>
            <iframe
              width="1300"
              height="450"
              src="https://www.youtube.com/embed/bVDYgPTKcjw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
         
          <div className="mb-4">
            <h5>Motivational or Reference Video</h5>
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img
                  src="/img/content/home-challenge/level2.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    width: '500px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                /><br/>
                <a
                      href="https://www.youtube.com/watch?v=UxkOosaNohU" target="_blank"
                      className="text-success mb-4"
                    >
                      <u>Revolutionize Your ESP32 Projects with Live GPIO Pin Monitoring!</u>
                    </a>
                
            {/* <iframe
              width="1300"
              height="450"
              src="https://www.youtube.com/embed/UxkOosaNohU"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe> */}
          </div>
          
          {/* <h5 className="mb-4">Related blog:</h5> */}
          <div>
            <h5>Gained Tech Competences</h5>
            <p>
              Remembering: Level 2 introduces students to the world of PCB
              (Printed Circuit Board) design. Understanding: Using the GPIO
              Viewer, students will monitor pins and re-design their own PCBs,
              including adding their custom logo. Applying: This level
              emphasizes the importance of precise design and modification
              skills using tools like KiCAD. Analyzing: By completing this
              level, students will gain familiarity in PCB design and the
              ability to re-design customized electronic components. Evaluating:
              By the reward, an OLED display, students get their hands on a
              flexible printed circuit board.
            </p>
          </div>
          <div>
            <h5>Gained Soft Skills</h5>
            <p>
              Remembering: Level 2 focuses on teamwork and collaboration as
              students may seek feedback on their PCB designs. Understanding:
              They will improve their adaptability by learning to use new tools
              like KiCAD. Applying: Leadership and initiative are fostered as
              they take ownership of their own design project. Analyzing:
              Attention to detail is further developed through precise PCB
              re-design, and creativity is encouraged in adding custom logos.
            </p>
          </div>

          <div>
            <h5>Summary for this Level</h5>
            <p>
              The second level introduces students to the PCB design using KiCAD
              and the GPIO Viewer. Students will learn to modify a printed
              circuit board (PCBs) design, including the integration of a custom
              logos or symbol of their choice. This level emphasizes basics of
              PCB design and the importance of understanding GPIO pins, which
              are crucial for creating aesthetically pleasing and functional
              electronic devices. By mastering these skills, students will gain
              confidence to handle their own PCBs and understand the intricacies
              of hardware design, preparing them for more advanced tasks in the
              subsequent levels.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-2">
              <p>
                {!isMobile && (
                  <Link
                    href={'./level-1'}
                    className={'btn btn-lg btn-success rounded-pill'}
                  >
                    <span className="small">Previous level</span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'./level-1'}
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
            <div className="col-lg-3">
              <p>
                {!isMobile && (
                  <Link
                    href={'./level-3'}
                    className={'btn btn-lg btn-success rounded-pill'}
                  >
                    <span className="small">Next level</span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'./level-3'}
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
