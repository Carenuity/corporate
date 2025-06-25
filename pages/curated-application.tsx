import React from 'react';
import Head from 'next/head';
import PageTitle from '../components/PageTitle';

const Page = () => {
  const pageTitle = 'Curated Application';
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
          <h4>Curated Application</h4>
          <p>Carenuity is proud to introduce a curated application designed to simplify and streamline the form-filling 
            process through the power of artificial intelligence. This intelligent platform automatically populates 
            forms on behalf of the user, significantly reducing the time and effort required for manual data entry.
             Users simply enter a prompt describing what they need, and the AI generates a tailored response or filled 
             form based on that input. Importantly, users have full control and can easily tweak the generated content 
             to better match their personal tone, style, or specific requirements. By leveraging AI, the application 
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
