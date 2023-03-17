import Link from 'next/link';
import React from 'react';
import Menu from './Menu';
import TopSearch from './TopSearch';

const Header = ({ classNames, logoUrl }: { classNames: string[]; logoUrl: string }) => {
  const loginUrl =
    'https://carenuity-customer-app-dot-roomsensorgcp01.ey.r.appspot.com/auth';
  const shopUrl = 'https://www.chipglobe.shop';
  const webFlashingUrl = 'https://chipglobe-dev.web.app/';
  return (
    <>
      {/* <!-- HEADER
        ================================================== --> */}
      <header className={classNames[0]}>
        <div className='navbar-default border-bottom border-color-light-white'>
          {/* <!-- start top search --> */}
          <TopSearch />
          {/* <!-- end top search --> */}

          <div className='container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9'>
            <div className='row align-items-center'>
              <div className='col-12 col-lg-12'>
                <div className='menu_area alt-font'>
                  <nav className='navbar navbar-expand-lg navbar-light p-0'>
                    <div className='navbar-header navbar-header-custom'>
                      {/* <!-- start logo --> */}
                      <Link href='/' className={classNames[1]}>
                        <img id='logo' src={logoUrl} alt='Carenuity logo' />
                      </Link>
                      {/* <!-- end logo --> */}
                    </div>

                    <div className='navbar-toggler bg-primary'></div>

                    {/* <!-- start menu area --> */}
                    <Menu
                      loginUrl={loginUrl}
                      webFlashingUrl={webFlashingUrl}
                    />
                    {/* <!-- end menu area --> */}

                    {/* <!-- start attribute navigation --> */}
                    <div className='attr-nav align-items-xl-center ms-xl-auto main-font'>
                      <ul>
                        <li className='search'>
                          <a href='#!'>
                            <i className='fas fa-search'></i>
                          </a>
                        </li>
                        <li className='d-none d-xl-inline-block'>
                          <Link href={shopUrl} className='btn-style1 medium'>
                            <span>Shop</span>
                          </Link>
                        </li>
                        <li className='d-none d-xl-inline-block'>
                          <Link href={loginUrl}>
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
