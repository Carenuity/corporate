import dynamic from 'next/dynamic';
import PageSpinner from '../../components/PageSpinner';
import PageTitle from '../../components/PageTitle';

const Widerrufsrecht = dynamic(
  () => import('../../components/dynamic/Widerrufsrecht'),
  {
    ssr: false,
    loading: () => <PageSpinner />,
  }
);

const RightsOfWithdrawal = () => {
  return (
    <>
      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        prevPage='Home'
        prevPageUrl='/'
        pageTitle='Widerrufsrecht'
        pageUrl='/rights-of-withdrawal/de'
      />
      <Widerrufsrecht />
    </>
  );
};

export default RightsOfWithdrawal;
