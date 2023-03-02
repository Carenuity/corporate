import React from 'react';
import Footer from './Footer';

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      {/* <!-- PAGE LOADING
    ================================================== --> */}
      <div id='preloader'></div>

      {/* <!-- MAIN WRAPPER
    ================================================== --> */}
      <div className='main-wrapper'>
        {children}
        <Footer
          phone='(44) 123-456-789'
          email='info@carenuity.com'
          address='Chipglobe GmbH Cincinnatistr. 60 81549 Munich'
        />
      </div>

      {/* <!-- SCROLL TO TOP
    ================================================== --> */}
      <a href='#!' className='scroll-to-top'>
        <i className='fas fa-angle-up' aria-hidden='true'></i>
      </a>
    </>
  );
};

export default Layout;
