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
          phone='(+49) 89-1222469-40'
          email='info@carenuity.com'
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
