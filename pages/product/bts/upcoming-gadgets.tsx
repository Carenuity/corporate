import React from 'react';
import Head from 'next/head';
import PageTitle from '../../../components/PageTitle';

const Page = () => {
  const pageTitle = 'Upcoming Gadgets';
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

        {/* JSON-LD structured data */}

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
          <h4>We make it so that you can build it in 3 min</h4>
        </div>
      </section>
    </>
  );
};

export default Page;
