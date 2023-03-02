import React from 'react';
import AboutUs from '../components/AboutUs';
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';

const about = ({ logoUrl }: { logoUrl: string }) => {
  return (
    <>
      {/* <!-- HEADER
        ================================================== --> */}
      <Header
        classNames={['header-style2', 'navbar-brand logodefault']}
        logoUrl='img/logos/logo.png'
      />

      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        prevPage='Home'
        prevPageUrl='/'
        pageTitle='About Us'
        pageUrl='/about'
        bgImage='img/banner/page-title.jpg'
      />

      {/* <!-- ABOUT
        ================================================== --> */}
      <AboutUs />
    </>
  );
};

// export const getStaticProps: GetStaticProps = async (
//   context: GetStaticPropsContext
// ) => {
//   return {
//     props: {
//       logoUrl: 'img/logos/logo.png',
//     },
//   };
// };

export default about;
