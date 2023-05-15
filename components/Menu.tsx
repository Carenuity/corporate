import Image from 'next/image';
import Link from 'next/link';
import { servicesUrls } from '../utils/constants';
import { ServiceUrl } from '../utils/types';

const Menu = ({
  authUrl,
  webFlashingUrl,
  shopUrl,
  isMobile,
}: {
  authUrl: string;
  webFlashingUrl: string;
  shopUrl: string;
  isMobile: boolean;
}) => {
  return (
    <>
      <ul className='navbar-nav ms-auto' id='nav'>
        <li>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          {isMobile && <a href='/'>Home</a>}
          {!isMobile && <Link href='/'>Home</Link>}
        </li>
        <li>
          <Link href='/#!'>Products</Link>
          <ul className='row megamenu'>
            <li className='col-lg-2 pt-3'>
              <Image
                width={300}
                height={300}
                src='/img/banner/PRODUCTS_left_Modular-Sensors-Selection_190x190.png'
                alt=''
                className='img-fluid'
              />
            </li>
            <li className='col-lg-4'>
              <span className='mb-0 mb-lg-2 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-700 display-30'>
                Budget for Students
              </span>
              <ul>
                {servicesUrls.standard.map((service: ServiceUrl) => (
                  <li key={`${service.url}-${service.name}`}>
                    {!isMobile && (
                      <Link
                        href={service.url}
                        style={
                          !!!service.url
                            ? {
                                pointerEvents: 'none',
                                color: 'grey',
                              }
                            : {}
                        }
                      >
                        <i className={`${service.icon} me-2`}></i>
                        {service.name}
                      </Link>
                    )}
                    {isMobile && (
                      <a
                        href={service.url}
                        style={
                          !!!service.url
                            ? {
                                pointerEvents: 'none',
                                color: 'grey',
                              }
                            : {}
                        }
                      >
                        <i className={`${service.icon} me-2`}></i>
                        {service.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </li>
            <li className='col-lg-3'>
              <span className='mb-0 mb-lg-2 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-700 display-30'>
                Premium for the beloved of Caregivers
              </span>
              <ul>
                {/* <li>
                  <Link
                    href='#!'
                    style={{ pointerEvents: 'none', color: 'grey' }}
                  >
                    <i className='fa-solid fa-keyboard me-2'></i>
                    Modular C3-Sensor Box
                  </Link>
                </li> */}
              </ul>
            </li>
            <li className='col-lg-3'>
              <span className='mb-0 mb-lg-2 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-700 display-30'>
                Business for Real Estate Tycoons
              </span>
              <ul>
                {servicesUrls.business.map((service: ServiceUrl) => (
                  <li key={`${service.url}-${service.name}`}>
                    {!isMobile && (
                      <Link
                        href={service.url}
                        style={
                          !!!service.url
                            ? {
                                pointerEvents: 'none',
                                color: 'grey',
                              }
                            : {}
                        }
                      >
                        <i className={`${service.icon} me-2`}></i>
                        {service.name}
                      </Link>
                    )}
                    {isMobile && (
                      <a
                        href={service.url}
                        style={
                          !!!service.url
                            ? {
                                pointerEvents: 'none',
                                color: 'grey',
                              }
                            : {}
                        }
                      >
                        <i className={`${service.icon} me-2`}></i>
                        {service.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link
            href='#!'
            target='_blank'
            onClick={(e) => {
              e.preventDefault();
              window.$('#applications-btn').click();
            }}
          >
            Benefits
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
              <Link href='#contact-us'>Contact Us</Link>
            </li>
            <li>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              {isMobile && <a href='/about/'>About Us</a>}
              {!isMobile && <Link href='/about'>About Us</Link>}
            </li>
          </ul>
        </li>
        <li className='d-lg-none d-inline-block'>
          <Link href={shopUrl} target='_blank'>
            Shop
          </Link>
        </li>
        <li className='d-lg-none d-inline-block'>
          <Link href={authUrl}>Login / Register</Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
