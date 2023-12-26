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
      <div className="main-wrapper">
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
