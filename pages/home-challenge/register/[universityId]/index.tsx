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
        <div className="row">
        {/* <h5 className=" mb-3">Home Challenge Regitration for {universityId} </h5> */}
        <div  className="mb-6" style={{textAlign:'center'}}>
        <h1 className='mb-3'>
                Are you a {universityId} student?<br/>
                
              </h1>
              <h4>Showcase your talent and grow your skills by subscribing <br/> 
              to {universityId} home challenge.</h4>
        </div>
            
        <h2 className='mb-6' style={{textAlign:"center"}}>
          Subscription</h2>
          <SubscriptionWidget categoryId={0} />
        </div>
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
  const universityIds = ['uop', 'tuk', 'thws', 'auth']; // Object.keys(microcontrollers);

  const ids = universityIds.map((key: string) => ({
    params: { universityId: key.toString() },
  }));

  return {
    paths: ids,
    fallback: false,
  };
};

export default Page;
