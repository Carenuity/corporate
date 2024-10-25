import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next';
import React from 'react';
import PageTitle from '../../../../components/PageTitle';
import Head from 'next/head';
import SubscriptionWidget from '../../../../components/SubscriptionWidget';

const Page = ({ universityId }: { universityId: string }) => {
  const pageTitle = `Registration Page for ${universityId}`;

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
          <SubscriptionWidget categoryId={0} />
        </div>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const universityId = context.params?.universityId;

  return {
    props: {
      universityId,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (
  // eslint-disable-next-line no-unused-vars
  context: GetStaticPathsContext
) => {
  const universityIds = ['uop', 'tuk', 'thws']; // Object.keys(microcontrollers);

  const ids = universityIds.map((key: string) => ({
    params: { universityId: key.toString() },
  }));

  return {
    paths: ids,
    fallback: false,
  };
};

export default Page;
