import PageTitle from '../components/PageTitle';
import Head from 'next/head';
import Link from 'next/link';

const Index = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'Install For Free';
  const boardImage =
    '/img/content/triple-adapter-with-letters-S-M-A-for-orientation.webp';
  // const { state } = useContext(StoreContext);

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
        links={[{ path: '/', title: 'Home' }]}
        pageTitle={pageTitle}
        pageUrl="/install-for-free"
      />

     <section>
      <h4>Install for free</h4>
     </section>
    </>
  );
};

export default Index;
