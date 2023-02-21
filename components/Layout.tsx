import React from 'react'
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      {/* <!-- PAGE LOADING
    ================================================== --> */}
      <div id='preloader'></div>

      {/* <!-- MAIN WRAPPER
    ================================================== --> */}
      <div className='main-wrapper'>
       <Header /> 
       {children}
       <Footer />
       </div>

      {/* <!-- SCROLL TO TOP
    ================================================== --> */}
      <a href='#!' className='scroll-to-top'>
        <i className='fas fa-angle-up' aria-hidden='true'></i>
      </a>
    </>
  );
};

export default Layout