import Link from 'next/link';
import React from 'react'

const Menu = ({
  authUrl,
  webFlashingUrl,
  applicationVideosUrl,
}: {
  authUrl: string;
  webFlashingUrl: string;
  applicationVideosUrl: string;
}) => {
  return (
    <>
      <ul className='navbar-nav ms-auto' id='nav'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/#!'>Products</Link>
          <ul className='row megamenu'>
            <li className='col-lg-2 pt-3'>
              <img
                src='/img/banner/PRODUCTS_left_Modular-Sensors-Selection_190x190.png'
                alt=''
                className='img-fluid'
              />
            </li>
            <li className='col-lg-4'>
              <span className='mb-0 mb-lg-2 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-700 display-30'>
                Our Products
              </span>
              <ul>
                <li>
                  <Link
                    href='#!'
                    style={{ pointerEvents: 'none', color: 'grey' }}
                  >
                    <i className='fa-solid fa-keyboard me-2'></i>
                    Modular C3-Sensor Box
                  </Link>
                </li>
                <li>
                  <Link
                    href='#!'
                    style={{ pointerEvents: 'none', color: 'grey' }}
                  >
                    <i className='fa-solid fa-plug me-2'></i>
                    SQ-Power Supply (launch 1st H.2023)
                  </Link>
                </li>
                <li>
                  <Link
                    href='#!'
                    style={{ pointerEvents: 'none', color: 'grey' }}
                  >
                    <i className='fa-solid fa-cloud me-2'></i>
                    SQ-Weather (launch 2nd H.2023)
                  </Link>
                </li>
                <li>
                  <Link
                    href='#!'
                    style={{ pointerEvents: 'none', color: 'grey' }}
                  >
                    <i className='fa-solid fa-gauge me-2'></i>
                    SQ-Panel (launch 2024)
                  </Link>
                </li>
              </ul>
            </li>
            <li className='col-lg-3'>
              <img
                src='img/banner/PRODUCTS_right_C3-Installer_Service_190x190.png'
                alt=''
                className='img-fluid'
              />
            </li>
            <li className='col-lg-3'>
              <span className='mb-0 mb-lg-2 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-700 display-30'>
                Our Services
              </span>
              <ul>
                <li>
                  <Link href={webFlashingUrl}>
                    <i className='fas fa-code me-2'></i>
                    WebFlashing
                  </Link>
                </li>
                <li>
                  <Link
                    href='#!'
                    style={{ pointerEvents: 'none', color: 'grey' }}
                  >
                    <i className='fas fa-microchip me-2'></i>
                    SQ-APP (Launch 2024)
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link href={applicationVideosUrl} target='_blank'>
            Applications
          </Link>
        </li>
        <li>
          <a href='#!'>Contact</a>
          <ul>
            <li>
              <Link
                href='/team'
                style={{ pointerEvents: 'none', color: 'grey' }}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                href='/blogs'
                style={{ pointerEvents: 'none', color: 'grey' }}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href='/videos'
                style={{ pointerEvents: 'none', color: 'grey' }}
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link href='/#contact-us'>Contact Us</Link>
            </li>
            <li>
              <Link href='/about'>About Us</Link>
            </li>
          </ul>
        </li>
        <li className='d-lg-none d-inline-block'>
          <Link href={authUrl} className=''>
            <span>Login / Register</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Menu