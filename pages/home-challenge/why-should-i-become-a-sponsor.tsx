import React from 'react';
import Head from 'next/head';
import PageTitle from '../../components/PageTitle';

const Page = () => {
  const pageTitle = 'Why should I become a sponsor';
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
              <h4>Why Sponsors Should Contribute to the Home Challenge</h4>
              <p>
                The Home Challenge offers a unique opportunity for professors to
                engage with cutting-edge IoT technology and contribute to the
                development of future industry leaders. Here are some compelling
                reasons to get involved:
              </p>
              <ul style={{ listStyleType: 'square' }}>
                <li>
                  <strong>Enhanced Brand Visibility: </strong>Sponsoring the
                  Home Challenge will increase your visibility among young,
                  tech-savvy individuals and position your company as a
                  forward-thinking organization that supports innovation and
                  education.
                </li>
                <li>
                  <strong>Access to a Talent Pipeline: </strong>Gain access to a
                  pool of talented students trained in IoT technologies, which
                  are increasingly important in the hospitality industry for
                  improving guest experiences and operational efficiency
                </li>
                <li>
                  <strong>Corporate Social Responsibility (CSR): </strong>
                  Sponsoring educational initiatives aligns with your CSR goals,
                  showcasing your commitment to community development and
                  education.
                </li>
                <li>
                  <strong>Cost-Effective Solutions: </strong>Home-Challenge
                  trained employees are equipped to critically evaluate various
                  IoT offerings, avoiding vendor lock-in and ensuring the most
                  cost-effective and suitable solutions for your needs. This can
                  lead to significant cost savings and more flexible, scalable
                  IoT implementations.
                </li>
                <li>
                  <strong>Innovation and Adaptability: </strong>Encourage
                  innovation and adaptability within your organization. The Home
                  Challenge fosters a mindset of creativity and problem-solving,
                  essential skills in the rapidly evolving field of IoT.
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
