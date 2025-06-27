import React from 'react';
import Head from 'next/head';
import PageTitle from '../components/PageTitle';

const Page = () => {
  const pageTitle = 'AI-assisted Services for You';
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
          <h4>Carenuity's AI-assisted Web Form-Pre-Filling for any Webpage</h4>
          <p>Carenuity simplifies and streamlines the form-filling process on websites, so that users will not leave forms empty any more. 
             The backround service automatically pre-populates fields of web forms in a meaningful way, so that the user can accept or customize, but not will leave empty.  
             Pre-filling forms on behalf of the user is significantly reducing the time and effort for user required for manual data entry.
             Users simply find a pre-filled field, filled with what they typically fill, based on previous form inputs. Importantly, users keep full control and can easily 
             tweak the generated content to better match their personal tone, style, or specific requirements. By leveraging AI, the application 
             ensures both efficiency and flexibility, delivering a seamless and highly personalized user experience.</p>
            <p>
              We welcome other companies and organizations to reach out to us if they are interested in integrating 
              this curated service into their workflow. Whether you're looking to improve internal processes or offer 
              your clients a more efficient digital experience, Carenuity is ready to collaborate and tailor the 
              solution to meet your needs.
            </p>

            <h4>Examples</h4>

            {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/cureted/cureted-application-01.png"
                className="wow fadeInUp mb-4"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  // width: '100px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
              src="/img/content/cureted/cureted-application-02.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  // width: '100px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
        </div>
      </section>
    </>
  );
};

export default Page;
