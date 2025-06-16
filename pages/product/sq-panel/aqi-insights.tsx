import Head from 'next/head';
import PageTitle from '../../../components/PageTitle';
import Link from 'next/link';
import ApplicationItem from '../../../components/ApplicationItem';

const Sensors = () => {
  // { isMobile }: { isMobile: boolean }
  const pageTitle = 'Aqi insights';

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
        links={[{ path: '/sq-labs', title: 'Team' }]}
        pageTitle={pageTitle}
        pageUrl="/aqi-insights"
      />

      <section className="pt-4">
        <div className="container">
          
        </div>
      </section>
    </>
  );
};

export default Sensors;
