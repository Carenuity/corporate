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
import Link from 'next/link';

type UniversityId = 'uop' | 'tuk' | 'thws' | 'auth' | 'cuk' | 'haw' | 'oauth';

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

    case 'cuk':
      return <SubscriptionWidget categoryId={8} />;

    case 'haw':
      return <SubscriptionWidget categoryId={9} />;
    
      case 'oauth':
        return <SubscriptionWidget categoryId={10} />;

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
    
      case 'oauth':
      return 'Aristotle University of Thessaloniki';

    case 'uop':
      return 'University of the Peloponnese';

    case 'cuk':
      return 'The Co-operative University of Kenya';

    case 'haw':
      return 'Hochschule für angewandte Wissenschaften Landshut';

    
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
            <p style={{ textAlign: 'center' }}>
              <strong>Note:</strong> Please check your spam folder for the
              subscription email should it be flagged as spam.
            </p>

            <div className=" row mb-4" style={{ textAlign: 'center' }}>
              <div className="col-md-1 "></div>
              <div className="col-md-2 ">
                <input type="checkbox" id="challenge" name="challenge" />
                <label style={{ paddingLeft: '10px' }}>Home challenge </label>
              </div>

              <div className="col-md-3 ">
                <input type="checkbox" id="v" name="products" />
                <label style={{ paddingLeft: '5px' }}>
                  ChipGlobe products{' '}
                </label>
              </div>
              <div className="col-md-2 ">
                <input type="checkbox" id="positions" name="positions" />
                <label style={{ paddingLeft: '10px' }}>Open positions </label>
              </div>
              <div className="col-md-2 ">
                <input type="checkbox" id="internship" name="internship" />
                <label style={{ paddingLeft: '10px' }}>Internship </label>{' '}
              </div>
              {/* <div className="col-md-2 "></div> */}
              <div className="col-md-2 ">
                <input type="checkbox" id="positions" name="positions" />
                <label style={{ paddingLeft: '10px' }}>Open office day </label>
              </div>
            </div>

            <Link
              href="/home-challenge/student-survey"
              className="text-success mb-4"
              style={{ textAlign: 'center' }}
            >
              <u>Fill in Carenuity student survey & questionnaire</u>
            </Link>
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
  const universityIds = ['uop', 'tuk', 'thws', 'auth', 'cuk', 'haw', 'oauth']; // Object.keys(microcontrollers);

  const ids = universityIds.map((key: string) => ({
    params: { universityId: key.toString() },
  }));

  return {
    paths: ids,
    fallback: false,
  };
};

export default Page;
