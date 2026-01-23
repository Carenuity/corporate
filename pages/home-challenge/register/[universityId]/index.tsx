import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next';
import React, { useEffect, useRef, useState } from 'react';
import PageTitle from '../../../../components/PageTitle';
import Head from 'next/head';
import SubscriptionWidget from '../../../../components/SubscriptionWidget';
import Link from 'next/link';

type UniversityId =
  | 'uop'
  | 'tuk'
  | 'thws'
  | 'auth'
  | 'cuk'
  | 'haw'
  | 'oauth'
  | 'tum'
  | 'duth'
  | 'night-sessions'
  | 'nairobi'  ;
type UniversitySubscriptionWidgetProps = {
  universityId: UniversityId;
  openPositionsRef: React.RefObject<HTMLInputElement>;
  internshipRef: React.RefObject<HTMLInputElement>;
  openOfficeDayRef: React.RefObject<HTMLInputElement>;
  chipGlobeProductsRef: React.RefObject<HTMLInputElement>;
  homeChallengeRef: React.RefObject<HTMLInputElement>;
};

const UniversitySubscriptionWidget: React.FC<
  UniversitySubscriptionWidgetProps
> = ({ universityId, ...props }) => {
  switch (universityId) {
    case 'auth':
      return <SubscriptionWidget categoryId={4} {...props} />;

    case 'thws':
      return <SubscriptionWidget categoryId={5} {...props} />;

    case 'tuk':
      return <SubscriptionWidget categoryId={7} {...props} />;

    case 'uop':
      return <SubscriptionWidget categoryId={6} {...props} />;

    case 'cuk':
      return <SubscriptionWidget categoryId={8} {...props} />;

    case 'haw':
      return <SubscriptionWidget categoryId={9} {...props} />;

    case 'oauth':
      return <SubscriptionWidget categoryId={10} {...props} />;

    case 'tum':
      return <SubscriptionWidget categoryId={15} {...props} />;
    case 'duth':
      return <SubscriptionWidget categoryId={15} {...props} />;

    case 'night-sessions':
      return <SubscriptionWidget categoryId={16} {...props} />;
      case 'nairobi':
      return <SubscriptionWidget categoryId={15} {...props} />;
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
      return 'Open AUTH Home Challenge';

    case 'uop':
      return 'University of the Peloponnese';

    case 'cuk':
      return 'The Co-operative University of Kenya';

    case 'haw':
      return 'Hochschule für angewandte Wissenschaften Landshut';

    case 'tum':
      return 'Technical University of Mombasa';
    case 'duth':
      return 'Democritus University of Thrace ';

    case 'night-sessions':
      return 'Tech Thursdays: AI, IoT and Databases';
      
    case 'nairobi':
      return 'Nairobi ';
  }
};

const Page = ({ universityId }: { universityId: UniversityId }) => {
  const chipGlobeProductsRef = useRef<HTMLInputElement>(null);
  const internshipsRef = useRef<HTMLInputElement>(null);
  const openPositionsRef = useRef<HTMLInputElement>(null);
  const openOfficeDayRef = useRef<HTMLInputElement>(null);
  const homeChallengeRef = useRef<HTMLInputElement>(null);
  const [surveyQuery, setSurveyQuery] = useState('');

  const school = getUniversityName({ universityId });
  const pageTitle = `Registration for ${school}`;

  useEffect(() => {
    if (!window.document) {
      return;
    }
    // Set the query parameters.
    const query = new URLSearchParams();
    query.set('school', school);
    setSurveyQuery(query.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                to {getUniversityName({ universityId })} Home Challenge.
              </h5>
            </div>

            <h2 className="mb-1" style={{ textAlign: 'center' }}>
              Subscribe here!
            </h2>
            <p style={{ textAlign: 'center' }}>
              <strong>
                Please select your interests you would like to follow up.
                <br />
                <em>
                  (You will be required to verify your subscription for each of
                  your selection)
                </em>
              </strong>
            </p>

            <div className=" row mb-4" style={{ textAlign: 'center' }}>
              <div className="col-md-1 "></div>
              <div className="col-md-2 ">
                <input
                  ref={homeChallengeRef}
                  type="checkbox"
                  id="challenge"
                  name="challenge"
                  defaultChecked
                />
                <label htmlFor={'challenge'} style={{ paddingLeft: '10px' }}>
                  Home Challenge{' '}
                </label>
              </div>

              <div className="col-md-3 ">
                <input
                  ref={chipGlobeProductsRef}
                  type="checkbox"
                  id="products"
                  name="products"
                />
                <label htmlFor={'products'} style={{ paddingLeft: '5px' }}>
                  ChipGlobe products{' '}
                </label>
              </div>
              <div className="col-md-2 ">
                <input
                  ref={openPositionsRef}
                  type="checkbox"
                  id="positions"
                  name="positions"
                />
                <label htmlFor={'positions'} style={{ paddingLeft: '10px' }}>
                  Open positions{' '}
                </label>
              </div>
              <div className="col-md-2 ">
                <input
                  ref={internshipsRef}
                  type="checkbox"
                  id="internship"
                  name="internship"
                />
                <label htmlFor={'internship'} style={{ paddingLeft: '10px' }}>
                  Internship{' '}
                </label>{' '}
              </div>
              <div className="col-md-2 ">
                <input
                  ref={openOfficeDayRef}
                  type="checkbox"
                  id="office"
                  name="office"
                />
                <label htmlFor={'office'} style={{ paddingLeft: '10px' }}>
                  Open Office Day{' '}
                </label>
              </div>
            </div>

            <UniversitySubscriptionWidget
              universityId={universityId}
              chipGlobeProductsRef={chipGlobeProductsRef}
              internshipRef={internshipsRef}
              openOfficeDayRef={openOfficeDayRef}
              openPositionsRef={openPositionsRef}
              homeChallengeRef={homeChallengeRef}
            />

            <Link
              href={`/home-challenge/student-survey?${surveyQuery}`}
              className="text-success mb-4"
              style={{ textAlign: 'center' }}
            >
              <u>Fill in Carenuity student survey & questionnaire</u>
            </Link>
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
  const universityIds = [
    'uop',
    'tuk',
    'thws',
    'auth',
    'cuk',
    'haw',
    'oauth',
    'tum',
    'duth',
    'night-sessions',
    'nairobi',
  ]; // Object.keys(microcontrollers);

  const ids = universityIds.map((key: string) => ({
    params: { universityId: key.toString() },
  }));

  return {
    paths: ids,
    fallback: false,
  };
};

export default Page;
