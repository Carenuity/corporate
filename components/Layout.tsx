import React from 'react';
import Footer from './Footer';
import Header from './Header';
import VideoPopUp from './VideoPopUp';

const Layout = ({ aboutUsSammury, applicationVideosUrl, shopUrl, webFlashingUrl, authUrl, logoUrl, children }: { aboutUsSammury: string; applicationVideosUrl: string; shopUrl: string; webFlashingUrl: string; authUrl: string; logoUrl: string; children: any }) => {
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
          logoUrl={logoUrl}
          shopUrl={shopUrl}
          webFlashingUrl={webFlashingUrl}
          authUrl={authUrl}
        />
      )}
      {children.props.isHome && !children.props.noHeader && (
        <Header
          classNames={['header-style1 menu_area-light', 'navbar-brand']}
          logoUrl='/img/logos/logo-inner.png'
          shopUrl={shopUrl}
          webFlashingUrl={webFlashingUrl}
          authUrl={authUrl}
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

      {/* video pop-up */}
      <VideoPopUp id='applications-btn' url={applicationVideosUrl} show={false} />

      {/* <!-- SCROLL TO TOP
    ================================================== --> */}
      <a href='#!' className='scroll-to-top'>
        <i className='fas fa-angle-up' aria-hidden='true'></i>
      </a>
    </>
  );
};



export default Layout;
