import dynamic from "next/dynamic";
import PageTitle from "../../components/PageTitle";
import PageSpinner from "../../components/PageSpinner";

const TermsAndConditions = dynamic(
  () => import('../../components/dynamic/TermsAndConditions'),
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
        prevPage='Home'
        prevPageUrl='/'
        pageTitle='Terms and Conditions'
        pageUrl='/terms-and-conditions/en'
      />
      
      <TermsAndConditions />
    </>
  );
};

export default Index;
