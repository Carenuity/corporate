import dynamic from 'next/dynamic';
import PageSpinner from '../../components/PageSpinner';
import PageTitle from '../../components/PageTitle';

const Payment = dynamic(() => import('../../components/dynamic/Payment'), {
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
        pageTitle="Payment & Delivery"
        pageUrl="/payment-and-delivery/en"
      />

      <Payment />
    </>
  );
};

export default PaymentAndDelivery;
