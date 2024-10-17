import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PageTitle from '../../components/PageTitle';
// import styles from './level1.module.css';

const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'THWS Home Challenge';
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
        {/* <div className='container'>
            <iframe src="https://thws-home-challenge.my.canva.site/" width="100%" height="2000px"></iframe>

        </div> */}

<div className='container'>
  <iframe loading="lazy" className='mb-4'
    src="https://www.canva.com/design/DAGTv8E29BE/vw2sd2l1Wp4OwFOmFTSw1A/view?embed" width="100%" height="600px" >
  </iframe>

<a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGTv8E29BE&#x2F;vw2sd2l1Wp4OwFOmFTSw1A&#x2F;view?utm_content=DAGTv8E29BE&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener"><u>THWS Home Challenge</u></a> by carenuity
</div>
      </section>
    </>
  );
};

export default Page;
