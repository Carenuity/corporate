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
      <ul className="navbar-nav ms-auto" id="nav">
        <li>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          {isMobile && <a href="/">Home</a>}
          {!isMobile && <Link href="/">Home</Link>}
        </li>
        <li>
          <Link href="/#!">Products</Link>
          <ul className="row megamenu">
            <li className="col-lg-2 pt-3">
              <Image
                width={300}
                height={300}
                src={banner}
                alt="Products"
                className="img-fluid"
              />
            </li>
            <li
              className="col-lg-4 has-sub"
              onMouseEnter={() => setBanner(navigationBannerUrls[0])}
            >
              <span className="submenu-button"></span>
              <span className="mb-0 mb-lg-2 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-700 display-30">
                BUDGET FRIENDLY NOT ONLY FOR STUDENTS
              </span>
              <ul className="sub-menu">
                {servicesUrls.standard.map((service: ServiceUrl) => (
                  <li key={`${service.url}-${service.name}`}>
                    {!isMobile && (
                      <Link
                        className="ms-3"
                        href={service.url}
                        style={
                          // !!!service.url
                          //   ? {
                          //       pointerEvents: 'none',
                          //       color: 'grey',
                          //     }
                          //   : {}
                          {
                            textAlign: 'left',
                          }
                        }
                      >
                        <i className={`${service.icon} me-2`}></i>
                        {service.name}
                      </Link>
                    )}
                    {isMobile && (
                      <a
                        className="ms-3"
                        href={service.url}
                        style={
                          // !!!service.url
                          //   ? {
                          //       pointerEvents: 'none',
                          //       color: 'grey',
                          //     }
                          //   : {}
                          {
                            textAlign: 'left',
                          }
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
              className="col-lg-3 has-sub"
              onMouseEnter={() => setBanner(navigationBannerUrls[1])}
            >
              <span className="submenu-button"></span>
              <span className="mb-0 mb-lg-2 d-block py-2 p-lg-0 px-2 px-lg-0 text-uppercase sub-title font-weight-700 display-30">
                Premium for your beloved
              </span>
              <ul className="sub-menu">
                {servicesUrls.premium.map((service: ServiceUrl) => (
                  <li key={`${service.url}-${service.name}`}>
                    {!isMobile && (
                      <Link
                        className="ms-3"
                        href={service.url}
                        style={
                          !!!service.url
                            ? {
                                pointerEvents: 'none',
                                color: 'grey',
                                textAlign: 'left',
                              }
                            : { textAlign: 'left' }
                        }
                      >
                        <i className={`${service.icon} me-2`}></i>
                        {service.name}
                      </Link>
                    )}
                    {isMobile && (
                      <a
                        className="ms-3"
                        href={service.url}
                        style={
                          !!!service.url
                            ? {
                                pointerEvents: 'none',
                                color: 'grey',
                                textAlign: 'left',
                              }
                            : { textAlign: 'left' }
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
              className="col-lg-3 has-sub"
              onMouseEnter={() => setBanner(navigationBannerUrls[2])}
            >
              <span className="submenu-button"></span>
              <span className="mb-0 mb-lg-2 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-700 display-30">
                B2B for Real Estate Tycoons
              </span>
              <ul className="sub-menu">
                {servicesUrls.business.map((service: ServiceUrl) => (
                  <li key={`${service.url}-${service.name}`}>
                    {!isMobile && (
                      <Link
                        className="ms-3"
                        href={service.url}
                        style={
                          !!!service.url
                            ? {
                                pointerEvents: 'none',
                                color: 'grey',
                                textAlign: 'left',
                              }
                            : { textAlign: 'left' }
                        }
                      >
                        <i className={`${service.icon} me-2`}></i>
                        {service.name}
                      </Link>
                    )}
                    {isMobile && (
                      <a
                        className="ms-3"
                        href={service.url}
                        style={
                          !!!service.url
                            ? {
                                pointerEvents: 'none',
                                color: 'grey',
                                textAlign: 'left',
                              }
                            : { textAlign: 'left' }
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
            href="#!"
            target="_blank"
            onClick={(e) => {
              e.preventDefault();
              window.$('#applications-btn').click();
            }}
          >
            Benefits
          </Link>
        </li>
        <li>
          <a href="#!">Contact</a>
          <ul>
            <li>
              <Link href="/sq-labs" style={{ textAlign: 'left' }}>
                Team
              </Link>
            </li>
            <li>
              <Link
                href="https://chipglobe.wixsite.com/embedded-ai-journal"
                style={{ textAlign: 'left' }}
              >
                Blogs
              </Link>
            </li>
            <li className="has-sub">
              <span className="submenu-button"></span>
              <Link
                href="#!"
                style={{ textAlign: 'left' }}
                // style={{ pointerEvents: 'none', color: 'grey' }}
              >
                Help Center
              </Link>
              <ul className="sub-menu">
                <li className="border-bottom">
                  <span
                    className="mb-0 mb-lg-2 d-block py-2 px-4 text-uppercase sub-title small text-muted"
                    style={{ textAlign: 'left' }}
                  >
                    {/* font-weight-700 px-lg-0 p-lg-0 display-31 */}
                    University Program for AI
                  </span>
                </li>
                <li>
                  <Link
                    href={'/AI-Program-Kenya'}
                    style={{ textAlign: 'left' }}
                  >
                    🇰🇪 Kenya
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/AI-Program-Greece'}
                    style={{ textAlign: 'left' }}
                  >
                    🇬🇷 Greece
                  </Link>
                </li>
                <li>
                  <a
                    href={urls.supplimentAiMaterials}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textAlign: 'left' }}
                  >
                    🦾 Supplemental Materials
                  </a>
                </li>
                <li>
                  <span
                    className="mb-0 mb-lg-1 d-block py-2 px-4 text-uppercase sub-title small text-muted"
                    style={{ textAlign: 'left' }}
                  >
                    {/* font-weight-700 px-lg-0 p-lg-0 display-31 */}
                    Guides
                  </span>
                </li>
                <li>
                  <Link
                    href={'/open-weather-map'}
                    className="text-nowrap"
                    style={{ textAlign: 'left' }}
                  >
                    🔑 Get OpenWeather API Key
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/spotify-api'}
                    className="text-nowrap"
                    style={{ textAlign: 'left' }}
                  >
                    🔑 Get Spotify API Key
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/c3-mini-spotify-remote-control'}
                    className="text-wrap"
                    style={{ textAlign: 'left' }}
                  >
                    🎼 C3-Mini™ Spotify Remote Control (launch 4th Quarter of
                    2024)
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#contact-us" style={{ textAlign: 'left' }}>
                Contact Us
              </Link>
            </li>
            <li>
              {isMobile && (
                /* eslint-disable-next-line @next/next/no-html-link-for-pages */
                <a href="/about/" style={{ textAlign: 'left' }}>
                  About Us
                </a>
              )}
              {!isMobile && (
                <Link href="/about" style={{ textAlign: 'left' }}>
                  About Us
                </Link>
              )}
            </li>
          </ul>
        </li>
        <li className="d-lg-none d-inline-block">
          <Link href={shopUrl} target="_blank">
            Shop
          </Link>
        </li>
        <li className="d-lg-none d-inline-block">
          <Link href={authUrl}>Login / Register</Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
