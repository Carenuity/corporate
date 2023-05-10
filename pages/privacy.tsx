import dynamic from 'next/dynamic';
import Head from 'next/head';

const PrivacyPolicy = dynamic(() => import('../components/dynamic/Privacy'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
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
