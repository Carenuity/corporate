import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PageTitle from '../../components/PageTitle';

const Page = ({ isMobile }: { isMobile: boolean }) => {
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
          <h3 className=" mb-4">
            Level 3: API Usage & App Development (Solution Builder)
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
                  Create own App by Arduino IDE in Solution Builder & utilize AI
                  for coding (ChatGPT)
                </h5>
                <p>
            Create own app by ChatGPT-assisted coding in Arduino IDE with own
            API-keys and upload code, your binary, to Solution Builder.
            Optionally: Share your success on LinkedIn.
          </p>
                <p>
                  The third level encourages students to share their success
                  within the solution builder community. The focus is on
                  developing coding skills in Arduino, optimizing sketches by
                  AI, and leveraging API integrations to enhance functionality
                  of own Apps.
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

          <div>
            <h5>Summary for this Level</h5>
            <p>
              In the third level, students will delve into the world of API
              usage and app development. They will learn to use API keys for
              accessing external services, consider to create their own
              applications in the Arduino IDE and share their result on Solution
              Builder. This level also encourages students to contribute their
              successes to a community and tell about it, e.g. on LinkedIn,
              growing a sense of beeing visibly part of a community and
              collaboration. By the end of this level, students will have a
              understanding of how to use abnd possibly integrate APIs into
              their projects, develop, upload and share applications, and
              effectively communicate their achievements to a broader audience.
            </p>
          </div>
          <div className="mb-4">
            <strong>Tools: </strong>API-keys, Arduino, ChatGPT and Solution
            Builder
          </div>
          <div className="mb-4">
            <strong>Reward: </strong>DS18B20 Sensor / or Oximeter Sensor
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
                <strong> Tutor:</strong> Paul
              </td>
            </tr>
          </table>
          <div className="mb-4">
            <h5>Tutorial for this level</h5>
            <iframe
              width="1300"
              height="450"
              src="https://www.youtube.com/embed/Ngnzw_W662s"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <h5>Deliverables for achieving Level 3</h5>
            <p> 
            To accomplish Level 3, a custom app must be uploaded to the Solution Builder at
            {''}
                 <a
                 href='https://solutions.carenuity.com' target='blank'>
                  <u>https://solutions.carenuity.com</u>
                 </a>
                 {''}
             . 
             First, an Arduino code should be created or an existing code example should be 
             used and modified to make it an own. Optionally, an API from a third-party service
              can be implemented, and ChatGPT should be used for coding, check for the latest
              &apos;canvas on ChatGPT&apos;feature, see {''}
                 <a
                 href='https://www.heise.de/news/ChatGPT-bekommt-Canvas-OpenAI-bietet-neue-APIs-an-9961813.html' target='blank'>
                  <u>https://www.heise.de/news/ChatGPT-bekommt-Canvas-OpenAI-bietet-neue-APIs-an-9961813.html</u>
                 </a>
                 {''}
                .
                In the Arduino IDE, the so-called &apos;merged binary&apos; is automatically generated, which needs 
                to get uploaded to {''}
                 <a
                 href='https://solutions.carenuity.com' target='blank'>
                  <u>https://solutions.carenuity.com.</u>
                 </a>
                 {''}
               
              </p>
                  <p> Once that is done, simply send the link (URL) of your own new
                     app on Solution Builder to <strong>team@carenuity.com</strong> for sharing your success.
                  </p>
          </div>
         
         
          <div className="mb-4">
            <h5>Motivational or Reference Video</h5>
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
          {/* <h5 className="mb-4">Related blog:</h5> */}
          <div className="mb-4">
            <h5>Gained Tech Competences</h5>
            <p>
              Remembering: In Level 3, students will advance to creating and
              coding applications in the Arduino IDE. Understanding: They will
              optionally use own API keys to integrate external services in
              their code and then upload their code as binary on Solution
              Builder. Applying: This level as well encourages students to share
              their success on a social platform, sharing their result for
              friends on Solution Builder. Analyzing: The focus is on developing
              coding skills, uploading projects and leveraging API integrations
              to enhance functionality. Evaluating: The rewarded sensor allows
              to compare locally measured values with globally available values
              from the Internet.
            </p>
          </div>
          <div>
            <h5>Gained Soft Skills</h5>
            <p>
              Remembering: In Level 3, students will enhance their communication
              skills by sharing their results on Solution Builder.
              Understanding: They will develop critical thinking and
              problem-solving skills by integrating API keys and coding
              applications. Applying: Time management is key as they juggle
              multiple tasks, and adaptability is required to learn and use new
              APIs. Analyzing: Leadership and initiative are demonstrated by
              promoting their work within the professional community.
            </p>
          </div>

          <div>
            <h5>Summary for this Level</h5>
            <p>
              In the third level, students will delve into the world of API
              usage and app development. They will learn to use API keys for
              accessing external services, consider to create their own
              applications in the Arduino IDE and share their result on Solution
              Builder. This level also encourages students to contribute their
              successes to a community and tell about it, e.g. on LinkedIn,
              growing a sense of beeing visibly part of a community and
              collaboration. By the end of this level, students will have a
              understanding of how to use abnd possibly integrate APIs into
              their projects, develop, upload and share applications, and
              effectively communicate their achievements to a broader audience.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-2">
              <p>
                {!isMobile && (
                  <Link
                    href={'./level-2'}
                    className={'btn btn-lg btn-success rounded-pill'}
                  >
                    <span className="small">Previous level</span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'./level-2'}
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
                    href={'./level-4'}
                    className={'btn btn-lg btn-success rounded-pill'}
                  >
                    <span className="small">Next level</span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'./level-4'}
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
