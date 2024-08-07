import {
  Children,
  cloneElement,
  isValidElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import Footer from './Footer';
import Header from './Header';
import VideoPopUp from './VideoPopUp';
import { StoreContext } from './context/Store';
import { handleMediaQueryChanges } from '../utils/common';
import Head from 'next/head';
import { Overpass } from '@next/font/google';

// const inter = Inter({ subsets: ['latin'] });
const overpass = Overpass({ subsets: ['latin'], weight: ['100', '200'] });

const Layout = ({ children }: { children: any }) => {
  const { state } = useContext(StoreContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    mediaQuery.addEventListener('change', (e: MediaQueryListEvent) =>
      handleMediaQueryChanges(e.matches, setIsMobile)
    );
    handleMediaQueryChanges(mediaQuery.matches, setIsMobile);

    return () => {
      mediaQuery.removeEventListener('change', (e: MediaQueryListEvent) =>
        handleMediaQueryChanges(e.matches, setIsMobile)
      );
    };
  }, []);

  return (
    <>
      <Head>
        {/* metas */}
        <meta charSet="utf-8" />
        <meta
          name="author"
          content={'https://www.linkedin.com/in/paul-otieno-software-engineer/'}
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="theme-color" content="#010101" />
        <meta
          name="p:domain_verify"
          content="29dbf3f18f2a145ddd0e32d0823c949e"
        />
      </Head>
      {/* <!-- PAGE LOADING
    ================================================== --> */}
      <div id="preloader"></div>

      {/* <!-- HEADER
        ================================================== --> */}
      {!children.props.isHome && !children.props.noHeader && (
        <Header
          classNames={['header-style2', 'navbar-brand logodefault']}
          isMobile={isMobile}
        />
      )}
      {children.props.isHome && !children.props.noHeader && (
        <Header
          classNames={['header-style1 menu_area-light', 'navbar-brand']}
          isMobile={isMobile}
        />
      )}

      {/* <!-- MAIN WRAPPER
    ================================================== --> */}
      <div className={`main-wrapper ${overpass.className}`}>
        {Children.map(children, (child) => {
          const props = child.props;
          if (isValidElement(child)) {
            const clonedChild = cloneElement<any>(child, {
              props,
              isMobile: isMobile,
            });
            return clonedChild;
          }
          return child;
        })}

        <Footer isMobile={isMobile} />
      </div>

      {/* video pop-up */}
      <VideoPopUp
        id="applications-btn"
        url={state.urls.benefitsVideo}
        show={false}
      />

      {/* <!-- SCROLL TO TOP
    ================================================== --> */}
      <a href="#!" className="scroll-to-top">
        <i className="fas fa-angle-up" aria-hidden="true"></i>
      </a>
    </>
  );
};

export default Layout;
