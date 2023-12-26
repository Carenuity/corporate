import Link from 'next/link';
import { useContext } from 'react';
import { StoreContext } from './context/Store';
import dynamic from 'next/dynamic';

const FooterUpperSection = dynamic(
  () => import('./dynamic/FooterUpperSection'),
  {
    ssr: false,
  }
);

const Newsletter = dynamic(() => import('../components/dynamic/Newsletter'), {
  ssr: false,
});

const Footer = ({ isMobile }: { isMobile: boolean }) => {
  const { state } = useContext(StoreContext);

  return (
    <>
      {/* <!-- FOOTER
        ================================================== --> */}
      <footer className="position-relative pt-0">
        <FooterUpperSection
          phone={state.companyInfo.phone}
          logoUrl={state.urls.logos[1]}
          email={state.companyInfo.email}
        />

        <div className="container">
          <div className="row mt-n5 pb-6 pb-xxl-10">
            <div
              className="col-md-6 col-lg-5 mt-5 wow fadeIn"
              data-wow-delay="200ms"
            >
              <Link href={'/about'}>
                <h3 className="text-white h5 mb-1-9">About Company</h3>
              </Link>
              <h4 className="text-white mb-1-9 fw-light w-75 display-29 lh-base opacity9">
                {/* opacity8 */}
                {state.companyInfo.Sammury}
              </h4>
              <h4 className="text-white h5 mb-1-5">
                {isMobile && (
                  <a href={'/about/#chatgpt'} className="text-white h6">
                    ChatGPT about Carenuity
                  </a>
                )}
                {!isMobile && (
                  <Link href={'/about/#chatgpt'} className="text-white h6">
                    ChatGPT about Carenuity
                  </Link>
                )}
              </h4>
              <h4 className="text-white mb-1-9 fw-light w-75 display-29 lh-base opacity8">
                {/* opacity8 */}
                Read what ChatGPT found out about us.
              </h4>
              <ul className="social-icon-style1">
                <li>
                  <a
                    href={state.urls.socialMediaHandles.facebook}
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={state.urls.socialMediaHandles.twitter}
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={state.urls.socialMediaHandles.instagram}
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={state.urls.socialMediaHandles.youTube}
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href={state.urls.socialMediaHandles.linkedIn}
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="col-md-6 col-lg-3 mt-5 wow fadeIn"
              data-wow-delay="400ms"
            >
              <div className="ps-0">
                <h3 className="text-white h5 mb-1-9">Contacts</h3>
                <ul className="footer-link mb-0 list-unstyled">
                  <li className="text-white mb-3">
                    <strong>Adress:</strong>{' '}
                    <span className="opacity8">
                      {state.companyInfo.address[0]} <br />
                      {state.companyInfo.address[1]} <br />
                      {state.companyInfo.address[2]}
                    </span>
                  </li>
                  <li className="text-white mb-3">
                    <strong>Email:</strong>{' '}
                    <a
                      href={`mailto:${state.companyInfo.email}`}
                      className="opacity8"
                    >
                      {state.companyInfo.email}
                    </a>
                  </li>
                  <li className="text-white">
                    <strong>Phone:</strong>{' '}
                    <a
                      href={`tel:${state.companyInfo.phone.replaceAll(
                        /[^0-9+]/gi,
                        ''
                      )}`}
                      className="opacity8"
                    >
                      {state.companyInfo.phone}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-3 mt-5 offset-lg-1 wow fadeIn"
              data-wow-delay="600ms"
            >
              {/* Newsletter section */}
              <Newsletter email={state.companyInfo.email} />

              <div className="text-center mt-3 display-31">
                {/* Payment & Delivery */}
                <div className="small">
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a
                    href="/payment-and-delivery/en"
                    className="text-white text-primary-hover"
                  >
                    Payment & Delivery
                  </a>{' '}
                  <span className="text-success"> / </span>
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a
                    href="/payment-and-delivery/de"
                    className="text-white text-primary-hover"
                  >
                    {' '}
                    Zahlung & Versand
                  </a>
                </div>

                {/* Terms & conditions */}
                <div className="small mt-1">
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a
                    href="/terms-and-conditions/en"
                    className="text-white text-primary-hover"
                  >
                    Terms & conditions
                  </a>{' '}
                  <span className="text-success"> / </span>
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a
                    href="/terms-and-conditions/de"
                    className="text-white text-primary-hover"
                  >
                    {' '}
                    Allgemeine Geschäftsbedingungen
                  </a>
                </div>

                {/* Right of withdrawal */}
                <div className="small mt-1">
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a
                    href="/rights-of-withdrawal/en"
                    className="text-white text-primary-hover"
                  >
                    Right of withdrawal
                  </a>{' '}
                  <span className="text-success"> / </span>
                  {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                  <a
                    href="/rights-of-withdrawal/de"
                    className="text-white text-primary-hover"
                  >
                    {' '}
                    Widerrufsrecht
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-2 border-top border-color-light-white">
          <div className="container">
            <div className="row align-items-start">
              <div
                className="col-md-3 text-center wow fadeIn"
                data-wow-delay="100ms"
              >
                <p className="d-inline-block text-white display-31">
                  {isMobile && (
                    // eslint-disable-next-line @next/next/no-html-link-for-pages
                    <a
                      href="/privacy/"
                      className="text-primary text-white-hover"
                    >
                      Privacy Policy
                    </a>
                  )}
                  {!isMobile && (
                    <Link
                      href="/privacy"
                      className="text-primary text-white-hover"
                    >
                      Privacy Policy
                    </Link>
                  )}{' '}
                  |{' '}
                  {isMobile && (
                    // eslint-disable-next-line @next/next/no-html-link-for-pages
                    <a
                      href="/datenschutz/"
                      className="text-primary text-white-hover"
                    >
                      Datenschutz
                    </a>
                  )}
                  {!isMobile && (
                    <Link
                      href="/datenschutz"
                      className="text-primary text-white-hover"
                    >
                      Datenschutz
                    </Link>
                  )}
                </p>
              </div>
              <div
                className="col-md-6 order-first order-md-0 mb-0 text-center wow fadeIn"
                data-wow-delay="100ms"
              >
                <p className="d-inline-block text-white mb-0 display-30">
                  &copy; <span className="current-year"></span> ChipGlobe GmbH{' '}
                  <br />
                  <span className="text-primary text-white-hover text-sm  display-31">
                    ChipGlobe&trade; and Carenuity&trade; are Trademarks of
                    ChipGlobe GmbH{' '}
                  </span>
                </p>
              </div>
              <div
                className="col-md-3 text-center wow fadeIn"
                data-wow-delay="100ms"
              >
                <p className="d-inline-block text-white  display-31">
                  {isMobile && (
                    // eslint-disable-next-line @next/next/no-html-link-for-pages
                    <a href="/legal/" className="text-primary text-white-hover">
                      Legal Notice
                    </a>
                  )}
                  {!isMobile && (
                    <Link
                      href="/legal"
                      className="text-primary text-white-hover"
                    >
                      Legal Notice
                    </Link>
                  )}{' '}
                  |{' '}
                  {isMobile && (
                    // eslint-disable-next-line @next/next/no-html-link-for-pages
                    <a
                      href="/impressum/"
                      className="text-primary text-white-hover"
                    >
                      Impressum
                    </a>
                  )}
                  {!isMobile && (
                    <Link
                      href="/impressum"
                      className="text-primary text-white-hover"
                    >
                      Impressum
                    </Link>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
