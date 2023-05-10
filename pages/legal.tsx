import dynamic from 'next/dynamic';
import Head from 'next/head';

const Legal = dynamic(() => import('../components/dynamic/Legal'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const legal = () => {
  return (
    <>
      <Head>
        <meta
          name='keywords'
          content='Carenuity ChipGlobe Electronics Embedded Systems Legal Notice'
        />
        <meta name='description' content='Real Estate Electronics Matter' />
        <title>Carenuity</title>
      </Head>
      
      <Legal />
    </>
  );
};

export default legal;
