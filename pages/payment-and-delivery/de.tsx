import PageSpinner from '../../components/PageSpinner';
import PageTitle from '../../components/PageTitle';
import dynamic from 'next/dynamic';

const Zahlung = dynamic(() => import('../../components/dynamic/Zahlung'), {
  ssr: false,
  loading: () => <PageSpinner />,
});

const PaymentAndDelivery = () => {
  return (
    <>
      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        prevPage="Home"
        prevPageUrl="/"
        pageTitle="Zahlung und Versand"
        pageUrl="/payment-and-delivery/de"
      />
      <Zahlung />
    </>
  );
};

export default PaymentAndDelivery;
