import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { StoreContext } from './context/Store';

const Footer = ({ isMobile }: { isMobile: boolean }) => {
  const { state } = useContext(StoreContext);

  return (
    <>
      {/* <!-- FOOTER
        ================================================== --> */}
      <footer className='position-relative pt-0'>
        <div className='bg-primary py-1-9 mb-6 mb-xxl-10'>
          <div className='container'>
            <div className='row mt-n1-9 align-items-center'>
              <div
                id='contact-us'
                className='col-md-6 col-lg-4 mt-1-9 wow fadeIn'
                data-wow-delay='200ms'
              >
                <div className='d-flex align-items-center'>
                  <div className='flex-shrink-0'>
                    <Image
                      width={40}
                      height={40}
                      src='/img/icons/07.png'
                      alt='...'
                    />
                  </div>
                  <div className='flex-grow-1 ms-3'>
                    <p className='mb-0 text-white'>Contact Us</p>
                    <h3 className='mb-0 h5 text-white'>
                      <a
                        href={`tel:${state.companyInfo.phone.replaceAll(
                          /[^0-9+]/g,
                          ''
                        )}`}
                        className='text-white text-dark-hover'
                      >
                        {state.companyInfo.phone}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className='col-md-6 col-lg-4 mt-1-9 text-start text-lg-center wow fadeIn'
                data-wow-delay='400ms'
              >
                <div className='footer-logo'>
                  <Link href='/'>
                    <Image
                      width={150}
                      height={100}
                      src={state.urls.logos[1]}
                      alt='...'
                    />
                  </Link>
                </div>
              </div>
              <div
                className='col-md-6 col-lg-4 mt-1-9 wow fadeIn'
                data-wow-delay='600ms'
              >
                <div className='d-flex align-items-center text-lg-end'>
                  <div className='flex-grow-1 ms-3 ms-lg-0 me-lg-3 order-2 order-lg-1'>
                    <p className='mb-0 text-white'>Mail Us</p>
                    <h3 className='mb-0 h5 text-white'>
                      <a
                        href={`mailto:${state.companyInfo.email}`}
                        className='text-white text-dark-hover'
                      >
                        {state.companyInfo.email}
                      </a>
                    </h3>
                  </div>
                  <div className='flex-shrink-0 order-1 order-lg-2'>
                    <Image
                      width={40}
                      height={40}
                      src='/img/icons/08.png'
                      alt='...'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row mt-n5 pb-6 pb-xxl-10'>
            <div
              className='col-md-6 col-lg-5 mt-5 wow fadeIn'
              data-wow-delay='200ms'
            >
              <h3 className='text-white h5 mb-1-9'>About Company</h3>
              <h4 className='text-white mb-1-9 fw-light w-75 display-29 lh-base opacity9'>
                {/* opacity8 */}
                {state.companyInfo.Sammury}
              </h4>
              <ul className='social-icon-style1'>
                <li>
                  <a
                    href={state.urls.socialMediaHandles.facebook}
                    target={'_blank'}
                    rel='noreferrer'
                  >
                    <i className='fab fa-facebook-f'></i>
                  </a>
                </li>
                <li>
                  <a
                    href={state.urls.socialMediaHandles.twitter}
                    target={'_blank'}
                    rel='noreferrer'
                  >
                    <i className='fab fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a
                    href={state.urls.socialMediaHandles.instagram}
                    target={'_blank'}
                    rel='noreferrer'
                  >
                    <i className='fab fa-instagram'></i>
                  </a>
                </li>
                <li>
                  <a
                    href={state.urls.socialMediaHandles.youTube}
                    target={'_blank'}
                    rel='noreferrer'
                  >
                    <i className='fab fa-youtube'></i>
                  </a>
                </li>
                <li>
                  <a
                    href={state.urls.socialMediaHandles.linkedIn}
                    target={'_blank'}
                    rel='noreferrer'
                  >
                    <i className='fab fa-linkedin-in'></i>
                  </a>
                </li>
              </ul>
            </div>
            <div
              className='col-md-6 col-lg-3 mt-5 wow fadeIn'
              data-wow-delay='400ms'
            >
              <div className='ps-0'>
                <h3 className='text-white h5 mb-1-9'>Contacts</h3>
                <ul className='footer-link mb-0 list-unstyled'>
                  <li className='text-white mb-3'>
                    <strong>Adress:</strong>{' '}
                    <span className='opacity8'>
                      {state.companyInfo.address[0]} <br />
                      {state.companyInfo.address[1]} <br />
                      {state.companyInfo.address[2]}
                    </span>
                  </li>
                  <li className='text-white mb-3'>
                    <strong>Email:</strong>{' '}
                    <a
                      href={`mailto:${state.companyInfo.email}`}
                      className='opacity8'
                    >
                      {state.companyInfo.email}
                    </a>
                  </li>
                  <li className='text-white'>
                    <strong>Phone:</strong>{' '}
                    <a
                      href={`tel:${state.companyInfo.phone.replaceAll(
                        /[^0-9+]/gi,
                        ''
                      )}`}
                      className='opacity8'
                    >
                      {state.companyInfo.phone}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className='col-md-6 col-lg-3 mt-5 offset-lg-1 wow fadeIn'
              data-wow-delay='600ms'
            >
              <div className='ps-xl-4'>
                <h3 className='text-white h5 mb-1-9'>Newsletter</h3>
                <p className='text-white opacity8 mb-3'>
                  Subscribe to our newsletter to receive updates on the latest
                  news!
                </p>
                <Link href={`mailto:${state.companyInfo.email}`} className='btn-style1 secondary small text-center col-12'>
                  <span>Subscribe with us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='py-2 border-top border-color-light-white'>
          <div className='container'>
            <div className='row align-items-start'>
              <div
                className='col-md-3 text-center wow fadeIn'
                data-wow-delay='100ms'
              >
                <p className='d-inline-block text-white display-31'>
                  {isMobile && (
                    // eslint-disable-next-line @next/next/no-html-link-for-pages
                    <a
                      href='/privacy/'
                      className='text-primary text-white-hover'
                    >
                      Privacy Policy
                    </a>
                  )}
                  {!isMobile && (
                    <Link
                      href='/privacy'
                      className='text-primary text-white-hover'
                    >
                      Privacy Policy
                    </Link>
                  )}{' '}
                  |{' '}
                  {isMobile && (
                    // eslint-disable-next-line @next/next/no-html-link-for-pages
                    <a
                      href='/datenschutz/'
                      className='text-primary text-white-hover'
                    >
                      Datenschutz
                    </a>
                  )}
                  {!isMobile && (
                    <Link
                      href='/datenschutz'
                      className='text-primary text-white-hover'
                    >
                      Datenschutz
                    </Link>
                  )}
                </p>
              </div>
              <div
                className='col-md-6 order-first order-md-0 mb-0 text-center wow fadeIn'
                data-wow-delay='100ms'
              >
                <p className='d-inline-block text-white mb-0 display-30'>
                  &copy; <span className='current-year'></span> ChipGlobe GmbH{' '}
                  <br />
                  <span className='text-primary text-white-hover text-sm  display-31'>
                    ChipGlobe&trade; and Carenuity&trade; are Trademarks of
                    ChipGlobe GmbH{' '}
                  </span>
                </p>
              </div>
              <div
                className='col-md-3 text-center wow fadeIn'
                data-wow-delay='100ms'
              >
                <p className='d-inline-block text-white  display-31'>
                  {isMobile && (
                    // eslint-disable-next-line @next/next/no-html-link-for-pages
                    <a href='/legal/' className='text-primary text-white-hover'>
                      Legal Notice
                    </a>
                  )}
                  {!isMobile && (
                    <Link
                      href='/legal'
                      className='text-primary text-white-hover'
                    >
                      Legal Notice
                    </Link>
                  )}{' '}
                  |{' '}
                  {isMobile && (
                    // eslint-disable-next-line @next/next/no-html-link-for-pages
                    <a
                      href='/impressum/'
                      className='text-primary text-white-hover'
                    >
                      Impressum
                    </a>
                  )}
                  {!isMobile && (
                    <Link
                      href='/impressum'
                      className='text-primary text-white-hover'
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
