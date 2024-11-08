import React from 'react';
import Head from 'next/head';
import PageTitle from '../../components/PageTitle';

const Page = () => {
  const pageTitle = 'Why should I Involve My Students as a Professor';
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
          <div className="row">
            <div>
              <h4>Why should I Involve My Students as a Professor</h4>
              <p>
                The Home Challenge offers a unique opportunity for professors to
                engage with cutting-edge IoT technology and contribute to the
                development of future industry leaders. Here are some compelling
                reasons to get involved:
              </p>
              <ul style={{ listStyleType: 'square' }}>
                <li>
                  <strong>Enhanced Curriculum: </strong>Integrating the Home
                  Challenge into your curriculum provides students with hands-on
                  experience in building IoT devices. This practical approach
                  enhances their learning and prepares them for real-world
                  challenges.
                </li>
                <li>
                  <strong>Industry Connections: </strong>Collaborating with
                  major industry players like Grecotel Hotels & Resorts,
                  Sani/Ikos Group, and Mitsis Hotels opens up opportunities for
                  research partnerships, internships, and job placements for
                  your students.
                </li>
                <li>
                  <strong>Professional Development: </strong>Stay updated with
                  the latest industry trends and technologies. Participating in
                  the Home Challenge allows you to enhance your teaching and
                  research capabilities, keeping you at the forefront of
                  technological advancements.
                </li>
                <li>
                  <strong>Innovation and Adaptability: </strong>Encourage your
                  students to innovate and adapt to new technologies. The Home
                  Challenge fosters a mindset of creativity and problem-solving,
                  essential skills in the rapidly evolving field of IoT.
                </li>
                <li>
                  <strong>Critical Evaluation of IoT Offerings: </strong>Equip
                  your students with the ability to critically evaluate various
                  IoT offerings. This skill helps them avoid vendor lock-in and
                  ensures they choose the most cost-effective and suitable
                  solutions for their needs.
                </li>
              </ul>
            </div>

            <div>
              <h4>How It Works</h4>
              <p>
                The Home Challenge is structured to provide maximum benefit to
                all participants. Here&apos;s how it works:
              </p>
              <ol>
                <li>
                  <strong>Planning and Promotion:</strong> Collaborate with
                  hospitality companies and university professors to design the
                  challenge, set objectives, and promote the event.
                </li>
                <li>
                  <strong>Execution:</strong> Students participate in the
                  challenge, building IoT devices over six levels and solving
                  real-world problems provided by the hospitality companies.
                </li>
                <li>
                  <strong>Evaluation and Awards:</strong> Joint evaluation by
                  professors and industry representatives, with awards and
                  potential internships or job offers for the best projects.
                </li>
                <li>
                  <strong>Post-Event Engagement:</strong> Share success stories
                  and outcomes through press releases, social media, and
                  academic publications.
                </li>
              </ol>
            </div>

            <div>
              <h4>Get Involved</h4>
              <p>
                Ready to contribute to the Home Challenge and make a difference
                in the future of IoT and the hospitality industry? Contact us
                today to learn more about how you can get involved and support
                this exciting initiative.
              </p>
              <div className="cta">
                <a href="mailto:info@homechallenge.com">
                  <strong>
                    <u>Contact Us</u>
                  </strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
