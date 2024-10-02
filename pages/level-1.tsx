import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';

const Page = () => {
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
        <h4 className=" mb-4">Level 1: Solder Triple Adapter & Familiarize with WOKWI</h4>
        
        <div
            className="e-card mb-6"
            style={{
              boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
              maxHeight: '1000px',
              padding: '20px',
            }}
          >
            <div className="row ">
              <div className="col-lg-9">
                <h5>Solder Triple Adapter & Familiarize with WOKWI</h5>
                <p>
                  Soldering triple adapters and familiarize yourself with WOKWI,
                  especially with some sensor solutions.
                  <br />
                  <strong>Tools: </strong>Solder iron and WOKWI
                </p>
                <h5>Gained Tech Competences</h5>
                <p>
                  In Level 1, students begin their journey with learning a basic
                  skill, soldering. They will solder the Triple Adapter and then
                  familiarize themselves with WOKWI, a powerful simulation tool
                  for electronics and IoT projects. This level focuses on
                  understanding sensor integration and building a foundation in
                  hardware skills. By the end of this level, students will have
                  a practical understanding of soldering and the ability to
                  simulate sensor solutions using WOKWI. The reward for
                  completing this level is a C3-Mini microcontroller, which is
                  prerequisite for the next level.
                </p>
              </div>
              <div className="col-lg-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/free-offer/free-offer2.png"
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
          <div className="mb-6">
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
          <div>
         <h5 className="mb-4">Reward:</h5>
         <p>The reward for completing this level is a C3-Mini microcontroller, which is 
          prerequisite for the next level.</p>
         </div>
         <div>
            <h5>
            Gained Soft Skills
            </h5>
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
