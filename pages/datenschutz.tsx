import Head from 'next/head';
import dynamic from 'next/dynamic';
import PageSpinner from '../components/PageSpinner';

const PrivacyPolicy = dynamic(
  () => import('../components/dynamic/Datenschutz'),
  {
    ssr: false,
    loading: () => <PageSpinner />,
  }
);

const Datenschutz = () => {
  return (
    <>
      <Head>
        <meta
          name='keywords'
          content='Carenuity ChipGlobe Electronics Embedded Systems Datenschutz'
        />
        <meta
          name='description'
          content='Carenuity ChipGlobe Electronics Embedded Systems Privacy Policy'
        />
        <title>Datenschutz</title>
      </Head>

      {/* <!-- BLOG DETAILS
        ================================================== --> */}
      <PrivacyPolicy />
    </>
  );
};

export default Datenschutz;
