import dynamic from 'next/dynamic';
import PageTitle from '../../components/PageTitle';
import PageSpinner from '../../components/PageSpinner';

const Withdrawal = dynamic(
  () => import('../../components/dynamic/Withdrawal'),
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
        links={[{ path: '/', title: 'Home' }]}
        pageTitle="Rights of Withdrawal"
        pageUrl="/rights-of-withdrawal/en"
      />
      <Withdrawal />
    </>
  );
};

export default RightsOfWithdrawal;
