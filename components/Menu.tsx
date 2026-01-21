import Image from 'next/image';
import Link from 'next/link';
import {
  navigationBannerUrls,
  servicesUrls,
  SOLUTIONS_BUILDER_URL,
} from '../utils/constants';
import { ServiceUrl } from '../utils/types';
import { useContext, useEffect, useRef, useState } from 'react';
import { StoreContext } from './context/Store';
import { LanguageSwitchContext } from './context/LanguageSwitch';

const Menu = ({
  authUrl,
  shopUrl,
  isMobile,
}: {
  authUrl: string;
  shopUrl: string;
  isMobile: boolean;
}) => {
  const [banner, setBanner] = useState(navigationBannerUrls[1]);
  const {
    state: { urls },
  } = useContext(StoreContext);
  const { state: language } = useContext(LanguageSwitchContext);
  const { state } = useContext(LanguageSwitchContext);
  const installBtnRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (installBtnRef && installBtnRef.current) {
      const isKickStarterPage = document.querySelector('#kickstarter');
      if (isKickStarterPage) {
        installBtnRef.current.classList.remove('d-none');
      }
    }
  }, []);

  return (
    <>
      <ul className="navbar-nav ms-auto" id="nav">
        <li>
          {/* {isMobile && ( */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/">
            {language.includes('en') && 'Home'}
            {language.includes('de') && 'STARTSEITE'}
          </a>
          {/* )} */}
          {/* {!isMobile && (
            <Link href="/">
              {language.includes('en') && 'Home'}
              {language.includes('de') && 'STARTSEITE'}
            </Link>
          )} */}
        </li>
        <li>
          <Link href="/#!">
            {language.includes('en') && 'Products'}
            {language.includes('de') && 'PRODUKTE'}
          </Link>
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
              className="col-lg-3 has-sub"
              onMouseEnter={() => setBanner(navigationBannerUrls[1])}
            >
              <span className="submenu-button"></span>
              <span className="mb-0 mb-lg-2 d-block py-2 p-lg-0 px-2 px-lg-0 text-uppercase sub-title font-weight-700 display-30">
                {state === 'en' && <>Premium for your beloved</>}
                {state === 'de' && <>Premium für Ihre Liebsten</>}
              </span>
              <ul className="sub-menu">
                {servicesUrls.premium.map((service: ServiceUrl) => (
                  <li key={`${service.url}-${service.name}`}>
                    {/* {!isMobile && (
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
                    {isMobile && ( */}
                    <a
                      className="ms-3"
                      href={service.url}
                      style={
                        !service.url
                          ? {
                              pointerEvents: 'none',
                              color: 'grey',
                              textAlign: 'left',
                            }
                          : { textAlign: 'left' }
                      }
                    >
                      {service.type === 'icon' && (
                        <i className={`${service.icon} me-2`}></i>
                      )}

                      {service.type === 'image' && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={service.icon}
                          className={'me-1'}
                          style={{
                            width: '1.25rem',
                            height: 'auto',
                            margin: '.2rem 0',
                          }}
                          alt={service.name}
                        />
                      )}

                      {service.name}
                    </a>
                    {/* )} */}
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
                {state === 'en' && <>B2B for Real Estate Tycoons</>}
                {state === 'de' && <>B2B für Immobilien profis</>}
              </span>
              <ul className="sub-menu">
                {servicesUrls.business.map((service: ServiceUrl) => (
                  <li key={`${service.url}-${service.name}`}>
                    {!isMobile && (
                      <Link
                        className="ms-3"
                        href={service.url}
                        target={
                          service.url.startsWith('http') ? '_blank' : undefined
                        }
                        style={
                          !service.url
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
                        target={
                          service.url.startsWith('http') ? '_blank' : undefined
                        }
                        style={
                          !service.url
                            ? {
                                pointerEvents: 'none',
                                color: 'grey',
                                textAlign: 'left',
                              }
                            : { textAlign: 'left' }
                        }
                        rel="noreferrer"
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
              className="col-lg-4 has-sub"
              onMouseEnter={() => setBanner(navigationBannerUrls[0])}
            >
              <span className="submenu-button"></span>
              <span className="mb-0 mb-lg-2 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-700 display-30">
                {state === 'en' && <>BUDGET FRIENDLY NOT ONLY FOR STUDENTS</>}
                {state === 'de' && (
                  <>Budgetfreundlich, nicht nur für Studierende</>
                )}
              </span>
              <ul className="sub-menu">
                {servicesUrls.standard.map((service: ServiceUrl) => (
                  <li key={`${service.url}-${service.name}`}>
                    {!isMobile && (
                      <Link
                        className="ms-3"
                        href={service.url}
                        style={
                          !service.url
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
                        style={{
                          textAlign: 'left',
                        }}
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
        <li className="d-lg-none d-inline-block">
          <a href={SOLUTIONS_BUILDER_URL} target={'_blank'} rel="noreferrer">
            Solutions Builder
          </a>
        </li>
        <li>
          <Link
            href="/benefits"
            // target="_blank"
            // onClick={(e) => {
            //   e.preventDefault();
            //   window.$('#applications-btn').click();
            // }}
          >
            {language.includes('en') && 'Benefits'}
            {language.includes('de') && 'VORTEILE'}
          </Link>
        </li>
        <li>
          <a href="#!">
            {language.includes('en') && 'RESOURCES'}
            {language.includes('de') && 'RESOURCEN'}
          </a>
          <ul>
            <li>
              <Link href={'/help-center'} style={{ textAlign: 'left' }}>
                Help Center
              </Link>
            </li>
             <li className="has-sub">
              <span className="submenu-button"></span>
              <Link href="#!" style={{ textAlign: 'left' }}>
                University Program/Guides/API Keys.
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
                    href={'/ai-program-kenya'}
                    style={{ textAlign: 'left' }}
                  >
                    🇰🇪 Kenya
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/ai-program-greece'}
                    style={{ textAlign: 'left' }}
                  >
                    🇬🇷 Greece
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/ai-program-germany'}
                    style={{ textAlign: 'left' }}
                  >
                    🇩🇪 Germany
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
                    href={'/q-weather'}
                    className="text-nowrap"
                    style={{ textAlign: 'left' }}
                  >
                    🔑 Get Q-Weather API Key
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
                    href={'/youtube-api'}
                    className="text-nowrap"
                    style={{ textAlign: 'left' }}
                  >
                    🔑 Get YouTube API Key
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/adafruit-api'}
                    className="text-nowrap"
                    style={{ textAlign: 'left' }}
                  >
                    🔑 Get Adafruit IO API Key
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/thingspeak-api'}
                    className="text-nowrap"
                    style={{ textAlign: 'left' }}
                  >
                    🔑 Get ThingSpeak API Key
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/c3-mini-spotify-remote-control'}
                    className="text-wrap"
                    style={{ textAlign: 'left' }}
                  >
                    🎼 C3-Mini™ Spotify Remote Control (launch 4th Quarter of
                    2025)
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/faq'}
                    className="text-wrap"
                    style={{ textAlign: 'left' }}
                  >
                    ❓FAQ
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={'/blog'} style={{ textAlign: 'left' }}>
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/sq-labs" style={{ textAlign: 'left' }}>
                Team
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
            
            {/* <li>
              <Link
                href={shopUrl}
                target="_blank"
                style={{ textAlign: 'left' }}
              >
                Shop
              </Link>
            </li> */}
            
            
           
            <li>
              {isMobile && (
                /* eslint-disable-next-line @next/next/no-html-link-for-pages */
                <a href="/contact-us/" style={{ textAlign: 'left' }}>
                  Contact Us
                </a>
              )}
              {!isMobile && (
                <Link href="/contact-us" style={{ textAlign: 'left' }}>
                  Contact Us
                </Link>
              )}
            </li>
            
          </ul>
        </li>
        {/* <li>
          <a href="#!">Lang</a>
          <ul>
            <li>
              <a
                className="fw-light"
                style={{ textAlign: 'left', cursor: 'pointer' }}
                onClick={() => {
                  dispatch({ lang: 'en', type: 'SET' });
                }}
              >
                English - EN
              </a>
              <a
                className="fw-light"
                style={{ textAlign: 'left', cursor: 'pointer' }}
                onClick={() => {
                  dispatch({ lang: 'de', type: 'SET' });
                }}
              >
                German - DE
              </a>
            </li>
          </ul>
        </li> */}
        <li
          ref={installBtnRef}
          className="d-lg-none d-inline-block px-3 d-none"
        >
          {/* <Link href={shopUrl} target="_blank">
            Shop
          </Link> */}

          <Link
            href={'/install-for-free'}
            className={
              'btn btn-lg btn-success text-white rounded-pill shadow my-1'
            }
          >
            <span className="animated fadeInUp">Install For Free</span>
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
