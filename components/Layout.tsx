import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ aboutUsSammury, children }: { aboutUsSammury: string; children: any }) => {
  return (
    <>
      {/* <!-- PAGE LOADING
    ================================================== --> */}
      <div id='preloader'></div>

      {/* <!-- HEADER
        ================================================== --> */}
      {!children.props.isHome && !children.props.noHeader && (
        <Header
          classNames={['header-style2', 'navbar-brand logodefault']}
          logoUrl='img/logos/logo.png'
        />
      )}
      {children.props.isHome && !children.props.noHeader && (
        <Header
          classNames={['header-style1 menu_area-light', 'navbar-brand']}
          logoUrl='img/logos/logo-inner.png'
        />
      )}

      {/* <!-- MAIN WRAPPER
    ================================================== --> */}
      <div className='main-wrapper'>
        {children}
        <Footer
          phone='(+49) 89-1222469-40'
          email='info@carenuity.com'
          aboutUsSammury={aboutUsSammury}
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
