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
          
          <h4 className=" mb-4">Level 4: 3D Modelling and Custom Enclosures</h4>

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
                <h5>Design Custom Enclosure with 3D Modeling</h5>
                <p>
                  Familiarize with 3D-Modelling software to build your own
                  customized enclosure. You will get your own hero page on
                  Solution Builder to present it with your triple and
                  3D-printable case.
                  <br />
                  <strong>Tools: </strong>SketchUp 3D-Tool, Home-Assistant
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
          <div className="mb-4">
            <h5>Gained Tech Competences</h5>
            <p>
              Level 4 challenges students to design custom enclosures using 3D
              modeling software such as SketchUp. They will integrate these
              3D-printed components with their electronic projects, enhancing
              both the functionality and aesthetics of their devices.
              Additionally, students will learn to automate home devices using
              Home Assistant. This level combines hardware design with software
              automation, providing a comprehensive skill set. Successful
              completion of this level earns students a 25% voucher for
              ChipGlobe.shop.
            </p>
          </div>
          <div className="mb-4">
            <h5>Tutorial for this level</h5>
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
          <div>
            <h5 className="mb-4">Reward:</h5>
            <p>
              The reward for completing this level is 25% voucher for
              ChipGlobe.shop.
            </p>
          </div>
          <div>
            <h5>Gained Soft Skills</h5>
            <p>
              Level 4 emphasizes creativity and problem-solving as students
              design custom enclosures using 3D modeling software. They will
              improve their communication skills by documenting their design
              process and explaining their choices. Time management is crucial
              for balancing design and integration tasks. Adaptability is
              required to learn new software tools, and attention to detail
              ensures high-quality designs. Resilience is built as they iterate
              on their designs to achieve the desired outcome.
            </p>
          </div>

          <div>
            <h5>Summary for this Level</h5>
            <p>
              Level 4 focuses on 3D modelling and the creation of custom
              enclosures for electronic projects. Students will use 3D modelling
              software like SketchUp to design and build their own enclosures,
              which will be showcased on a hero page. This level not only
              enhances students&apos; technical skills in 3D modelling but also
              encourages creativity and innovation in designing custom solutions
              for their projects. By mastering these skills, students will be
              able to create professional-looking enclosures that enhance the
              functionality and aesthetics of their IoT devices.
            </p>
          </div>
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
      </section>
    </>
  );
};

export default Page;
