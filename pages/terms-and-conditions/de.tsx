import dynamic from 'next/dynamic';
import PageTitle from '../../components/PageTitle';
import PageSpinner from '../../components/PageSpinner';

const Allgemeine = dynamic(
  () => import('../../components/dynamic/Allgemeine'),
  {
    ssr: false,
    loading: () => <PageSpinner />,
  }
);

const Index = () => {
  return (
    <>
      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        links={[{ path: '/', title: 'STARTSEITE' }]}
        pageTitle="Allgemeine Geschäftsbedingungen"
        pageUrl="/terms-and-conditions/en"
      />

      <Allgemeine />
    </>
  );
};

export default Index;
