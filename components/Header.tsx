import Link from 'next/link';
import { useContext } from 'react';
import Menu from './Menu';
import { StoreContext } from './context/Store';

const Header = ({
  classNames,
  isMobile,
}: {
  classNames: string[];
  isMobile: boolean;
}) => {
  const { state } = useContext(StoreContext);
  let logoUrl = state.urls.logos[0];

  if (classNames[1] === 'navbar-brand') {
    logoUrl = state.urls.logos[1];
  }

  return (
    <>
      {/* <!-- HEADER
        ================================================== --> */}
      <header className={classNames[0]}>
        <div className="navbar-default border-bottom border-color-light-white">
          {/* <!-- start top search --> */}
          {/* <TopSearch /> */}
          {/* <!-- end top search --> */}

          <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
            <div className="row align-items-center">
              <div className="col-12 col-lg-12">
                <div className="menu_area alt-font">
                  <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <div className="navbar-header navbar-header-custom">
                      {/* <!-- start logo --> */}
                      <Link href="/" className={classNames[1]}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img id="logo" src={logoUrl} alt="Carenuity logo" />
                      </Link>
                      {/* <!-- end logo --> */}
                    </div>

                    <div className="navbar-toggler bg-primary"></div>

                    {/* <!-- start menu area --> */}
                    <Menu
                      isMobile={isMobile}
                      authUrl={state.urls.auth}
                      shopUrl={state.urls.shop}
                    />
                    {/* <!-- end menu area --> */}

                    {/* <!-- start attribute navigation --> */}
                    <div className="attr-nav align-items-xl-center ms-xl-auto main-font">
                      <ul>
                        {/* <li className='search'>
                          <a href='#!'>
                            <i className='fas fa-search'></i>
                          </a>
                        </li> */}
                        <li className="d-none d-xl-inline-block">
                          {/* <Link
                            href={state.urls.shop}
                            target="_blank"
                            className="btn-style1 medium"
                          >
                            <span>Shop</span>
                          </Link> */}

                          <div>
                            <Link
                              href={'/install-for-free'}
                              className={
                                'btn btn-lg btn-success rounded-pill shadow'
                              } // "btn-style1 animated fadeInUp"
                            >
                              <span className="animated fadeInUp">
                                Install For Free
                              </span>
                            </Link>
                          </div>
                        </li>
                        <li className="d-none d-xl-inline-block">
                          <Link href={state.urls.auth}>
                            <span>Login / Register</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- end attribute navigation --> */}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
