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

type UniversityId = 'uop' | 'tuk' | 'thws' | 'auth';

const UniversitySubscriptionWidget: React.FC<{
  universityId: UniversityId;
}> = ({ universityId }) => {
  switch (universityId) {
    case 'auth':
      return <SubscriptionWidget categoryId={4} />;

    case 'thws':
      return <SubscriptionWidget categoryId={5} />;

    case 'tuk':
      return <SubscriptionWidget categoryId={7} />;

    case 'uop':
      return <SubscriptionWidget categoryId={6} />;
  }
};

const getUniversityName = ({
  universityId,
}: {
  universityId: UniversityId;
}) => {
  switch (universityId) {
    case 'auth':
      return 'Aristotle University of Thessaloniki';

    case 'thws':
      return 'Technische Hochschule';

    case 'tuk':
      return 'Technical University of Kenya';

    case 'uop':
      return 'University of the Peloponnese';
  }
};

const Page = ({ universityId }: { universityId: UniversityId }) => {
  const pageTitle = `Registration for ${getUniversityName({ universityId })}`;

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
            
            <div className="mb-6" style={{ textAlign: 'center' }}>
              <h2 className="mb-3 mt-4">
                Are you a {getUniversityName({ universityId })} student?
                <br />
              </h2>
              <h5>
                Showcase your talent and grow your skills by subscribing <br />
                to {getUniversityName({ universityId })} home challenge.
              </h5>
            </div>

            <h2 className="mb-1" style={{ textAlign: 'center' }}>
              Subscribe here!
            </h2>
            <p  style={{ textAlign: 'center' }}><strong>Note:</strong> Please check your spam folder for the subscription email</p>
            <UniversitySubscriptionWidget universityId={universityId} />
            
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
