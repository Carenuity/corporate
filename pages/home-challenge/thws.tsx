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
        <div className='container'>
            <iframe src="https://thws-home-challenge.my.canva.site/" width="100%" height="2000px"></iframe>

        </div>
      </section>
    </>
  );
};

export default Page;
