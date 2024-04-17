import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';

const Page = () => {
  const pageTitle = 'SQ Power';
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
        prevPage="Install For Free"
        prevPageUrl="/install-for-free"
        pageTitle={pageTitle}
        pageUrl="/sensors"
      />

      <section className="pt-4">
        <div className="container">
          <div className="row">
            {/* You can start from here but you are flexible should you want to get creative with the page */}
            SQ-POWER
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
