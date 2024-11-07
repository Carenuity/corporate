import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PageTitle from '../../components/PageTitle';

const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = '3D Modeling';
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
            Level 4 Photorealistic 3D Modelling and Printing of custom
            Enclosures
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
                <h5>Design custom enclosure with 3D modeling</h5>
                <p>
            Familiarize with 3D-Modelling software to build your own customized
            enclosure. You will get your own hero page on Solution Builder to
            present it. with your triple and 3D-printable case
          </p>
                <p>
                  This level not only enhances students&apos; technical skills
                  in 3D modelling and rendering, but also encourages creativity
                  and innovation in designing custom enclosures for their
                  rendered electronics. By mastering this level, students will
                  be able to create professional-looking PCBs & enclosures that
                  enhance the acceptance and aesthetics of their IoT devices.
                </p>
              </div>
              <div className="col-lg-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/home-challenge/level4.png"
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
              Level 4 focuses on 3D modelling and the creation of custom
              enclosures for electronic projects. Students will use 3D modelling
              software like SketchUp to design and build their own 3D-printable
              enclosures, which can get showcased on a students hero page, if
              wanted. This level not only awakes students&apos; technical skills
              in 3D modelling but also encourages creativity and innovation in
              designing custom solutions for their projects. By mastering these
              skills, students will be able to create professional-looking
              reditions of PCBs and enclosures that enhance the aesthetics, the
              acceptance and usability of their IoT devices.
            </p>
          </div>
          <div className="mb-4">
            <strong>Tools: </strong>TinkerCAD 3D-Tool, Home-Assistant
          </div>
          <div className="mb-4">
            <strong>Reward:</strong>
            25% voucher for ChipGlobe.shop, e.g. for a 3D-printed enclosure
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
                <strong>Level of Difficulty:</strong> advanced / AI related
              </td>
              <td
                style={{
                  border: '1px solid #dddddd',
                  padding: '8px',
                }}
              >
                <strong> Tutor:</strong> Warren
              </td>
            </tr>
          </table>
          <div className="mb-4">
            <h5>Tutorial for this level</h5>
            <iframe
              width="1300"
              height="450"
              src="https://www.youtube.com/embed/u-zJg_VkpVA"
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
              src="https://www.youtube.com/embed/Axb_8qcjv1s"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mb-4">
            <h5>Related blog:</h5>
            <a
              href="https://carenuityblog.wixsite.com/embedded-ai-journal/post/beginner-s-guide-automating-lights-with-hlk-ld2410-and-home-assistant"
              className="text-success"
            >
              <strong>
                <u>
                Beginner's Guide: Automating Lights with HLK-LD2410 and Home Assistant
                </u>
              </strong>
            </a>
          </div>
          <div className="mb-4">
            <h5>Gained Tech Competences</h5>
            <p>
              Remembering: Level 4 challenges students to design custom
              enclosures using 3D modeling software such as TinkerCAD.
              Understanding: They will integrate the electronic device of their
              choice into their 3D-printed enclosure, virtually and in real,
              enhancing both the functionality and aesthetics of their device.
              Applying: Optionally, students will learn to automate smart home
              devices using Home Assistant. Analyzing: This level combines
              hardware design with software automation, providing a
              comprehensive skill set. Evaluating: Successful completion of this
              level earns students a 25% voucher for ChipGlobe.shop, for
              evaluating results in real, e.g. by 3D-printing their 3D-model.
            </p>
          </div>
          <div>
            <h5>Gained Soft Skills</h5>
            <p>
              Remembering: Level 4 emphasizes creativity and problem-solving as
              students design custom enclosures using 3D modeling software.
              Understanding: They will improve their communication skills by
              sharing their design and explaining their choices. Applying: Time
              management is crucial for balancing design and integration tasks.
              Analyzing: Adaptability is required to learn new software tools,
              and attention to detail ensures high-quality snug-fit designs.
              Evaluating: Resilience is built as they iterate on their designs
              to achieve the desired outcome.
            </p>
          </div>

          <div>
            <h5>Summary for this Level</h5>
            <p>
              Level 4 focuses on 3D modelling and the creation of custom
              enclosures for electronic projects. Students will use 3D modelling
              software like SketchUp to design and build their own 3D-printable
              enclosures, which can get showcased on a students hero page, if
              wanted. This level not only awakes students&apos; technical skills
              in 3D modelling but also encourages creativity and innovation in
              designing custom solutions for their projects. By mastering these
              skills, students will be able to create professional-looking
              reditions of PCBs and enclosures that enhance the aesthetics, the
              acceptance and usability of their IoT devices.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-2">
              <p>
                {!isMobile && (
                  <Link
                    href={'./level-3'}
                    className={'btn btn-lg btn-success rounded-pill'}
                  >
                    <span className="small">Previous level</span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'./level-3'}
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
                    href={'./level-5'}
                    className={'btn btn-lg btn-success rounded-pill'}
                  >
                    <span className="small">Next level</span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'./level-5'}
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
