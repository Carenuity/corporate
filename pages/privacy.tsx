import dynamic from 'next/dynamic';
import Head from 'next/head';
import PageSpinner from '../components/PageSpinner';

const PrivacyPolicy = dynamic(() => import('../components/dynamic/Privacy'), {
  ssr: false,
  loading: () => (
    <PageSpinner />
  ),
});

const Privacy = () => {
  return (
    <>
      <Head>
        <meta
          name='keywords'
          content='Carenuity ChipGlobe Electronics Embedded Systems Privacy Policy'
        />
        <meta name='description' content='Real Estate Electronics Matter' />
        <title>Carenuity</title>
      </Head>

      <PrivacyPolicy />
    </>
  );
};

export default Privacy;
