import Image from 'next/image';
import Link from 'next/link';
import { navigationBannerUrls, servicesUrls } from '../utils/constants';
import { ServiceUrl } from '../utils/types';
import { useContext, useState } from 'react';
import { StoreContext } from './context/Store';

const Menu = ({
  authUrl,
  shopUrl,
  isMobile,
}: {
  authUrl: string;
  shopUrl: string;
  isMobile: boolean;
}) => {
  const [banner, setBanner] = useState(navigationBannerUrls[0]);
  const {
    state: { urls },
  } = useContext(StoreContext);

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
                src={banner}
                alt='Products'
                className='img-fluid'
              />
            </li>
            <li
              className='col-lg-4'
              onMouseEnter={() => setBanner(navigationBannerUrls[0])}
            >
              <span className='mb-0 mb-lg-2 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-700 display-30'>
                BUDGET FRIENDLY NOT ONLY FOR STUDENTS
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
            <li
              className='col-lg-3'
              onMouseEnter={() => setBanner(navigationBannerUrls[1])}
            >
              <span className='mb-0 mb-lg-2 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-700 display-30'>
                Premium for your beloved
              </span>
              <ul>
                {servicesUrls.premium.map((service: ServiceUrl) => (
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
            <li
              className='col-lg-3'
              onMouseEnter={() => setBanner(navigationBannerUrls[2])}
            >
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
                href='#!'
                // style={{ pointerEvents: 'none', color: 'grey' }}
              >
                Help Center
              </Link>
              <ul>
                <li className='border-bottom'>
                  <span className='mb-0 mb-lg-2 d-block py-2 px-4 text-uppercase sub-title small text-muted'>
                    {/* font-weight-700 px-lg-0 p-lg-0 display-31 */}
                    University Program for AI
                  </span>
                </li>
                <li>
                  <a
                    href={urls.supplimentAiMaterials}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Supplemental Materials
                  </a>
                </li>
              </ul>
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
