import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';

const Page = () => {
  const pageTitle = 'API-usage';
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
          <h4 className=" mb-4">Level 3: API Usage and App Development</h4>

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
                  Create App with API Keys & use AI for coding in Arduino IDE
                  (ChatGPT)
                </h5>
                <p>
                  Use Solution Builder with own API-keys, create own app
                  (coding/binary) in Arduino IDE and upload on Solution Builder.
                  Share your success on LinkedIn. <br />
                  <strong>Tools: </strong>API-keys, Arduino, ChatGPT and
                  Solution Builder
                </p>
              </div>
              <div className="col-lg-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/home-challenge/level3.png"
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
              In Level 3, students will advance to creating and coding
              applications in the Arduino IDE. They will use their own API keys
              to integrate external services and upload their projects on
              Solution Builder. This level encourages students to share their
              success on LinkedIn, promoting their work within the professional
              community. The focus is on developing coding skills, managing
              projects, and leveraging API integrations to enhance
              functionality.
            </p>
          </div>
          <div className="mb-4">
            <h5>Tutorial for this level</h5>
            <iframe
              width="1300"
              height="450"
              src="https://www.youtube.com/embed/YT0UzGVj38I"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <h5 className="mb-4">Reward:</h5>
            <p>
              The reward for completing this level is Sensor DS18B20 or Oximeter
              Sensor.
            </p>
          </div>
          <div>
            <h5>Gained Soft Skills</h5>
            <p>
              In Level 3, students will enhance their communication skills by
              sharing their projects on LinkedIn. They will develop critical
              thinking and problem-solving skills by integrating API keys and
              coding applications. Time management is key as they juggle
              multiple tasks, and adaptability is required to learn and use new
              APIs. Leadership and initiative are demonstrated by promoting
              their work within the professional community.
            </p>
          </div>

          <div>
            <h5>Summary for this Level</h5>
            <p>
              In the third level, students will delve into the world of API
              usage and app development. They will use API keys to create their
              own applications in the Arduino IDE and upload them to the
              Solution Builder. This level also encourages students to share
              their project successes on LinkedIn, fostering a sense of
              community and collaboration. By the end of this level, students
              will have a solid understanding of how to integrate APIs into
              their projects, develop and upload applications, and effectively
              communicate their achievements to a broader audience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
