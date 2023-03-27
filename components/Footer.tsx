import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Footer = ({ phone, email, aboutUsSammury }: { phone: string; email: string; aboutUsSammury: string; }) => {
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
                        href={`mailto:${phone.replaceAll(/[^0-9+]/g, '')}`}
                        className='text-white text-dark-hover'
                      >
                        {phone}
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
                      src='/img/logos/logo-inner.png'
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
                        href={`mailto:${email}`}
                        className='text-white text-dark-hover'
                      >
                        {email}
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
              <h4 className='text-white mb-1-9 fw-light w-75 display-27 lh-base opacity8'>
                {aboutUsSammury}
              </h4>
              <ul className='social-icon-style1'>
                <li>
                  <a href='https://www.facebook.com/C3.Mini'>
                    <i className='fab fa-facebook-f'></i>
                  </a>
                </li>
                <li>
                  <a href='https://twitter.com/search?q=c3-mini'>
                    <i className='fab fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a href='https://www.instagram.com/carenuity'>
                    <i className='fab fa-instagram'></i>
                  </a>
                </li>
                <li>
                  <a href='https://www.youtube.com/@carenuity'>
                    <i className='fab fa-youtube'></i>
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/company/carenuity/'>
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
                      Chipglobe GmbH <br />
                      Cincinnatistr. 60 <br />
                      81549 Munich
                    </span>
                  </li>
                  <li className='text-white mb-3'>
                    <strong>Email:</strong>{' '}
                    <a href={`mailto:${email}`} className='opacity8'>
                      {email}
                    </a>
                  </li>
                  <li className='text-white'>
                    <strong>Phone:</strong>{' '}
                    <a
                      href={`tel:${phone.replaceAll(/[^0-9+]/gi, '')}`}
                      className='opacity8'
                    >
                      {phone}
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
                <form
                  className='quform newsletter-form'
                  action={`mailto:${email}`}
                  method='GET'
                  encType='multipart/form-data'
                >
                  <div className='quform-elements'>
                    <div className='row'>
                      {/* <!-- Begin Text input element --> */}
                      <div className='col-md-12'>
                        <div className='quform-element mb-0'>
                          <div className='quform-input'>
                            <input
                              type='hidden'
                              name='subject'
                              value='Newsletter'
                            />
                            <input
                              className='form-control'
                              id='email_address'
                              type='text'
                              name='body'
                              placeholder='Subscribe with us'
                            />
                          </div>
                        </div>
                      </div>
                      {/* <!-- End Text input element --> */}

                      {/* <!-- Begin Submit button --> */}
                      <div className='col-md-12'>
                        <div className='quform-submit-inner'>
                          <button
                            className='btn btn-white text-white m-0'
                            type='submit'
                          >
                            <i className='fas fa-paper-plane'></i>
                          </button>
                        </div>
                        <div className='quform-loading-wrap'>
                          <span className='quform-loading'></span>
                        </div>
                      </div>
                      {/* <!-- End Submit button --> */}
                    </div>
                  </div>
                </form>
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
                <p className='d-inline-block text-white'>
                  <Link
                    href='/privacy'
                    className='text-primary text-white-hover'
                  >
                    Privacy Policy
                  </Link>{' '}
                  |{' '}
                  <Link
                    href='/datenschutz'
                    className='text-primary text-white-hover'
                  >
                    Datenschutz
                  </Link>
                </p>
              </div>
              <div
                className='col-md-6 order-first order-md-0 mb-2 text-center wow fadeIn'
                data-wow-delay='100ms'
              >
                <p className='d-inline-block text-white mb-0'>
                  &copy; <span className='current-year'></span> ChipGlobe GmbH{' '}
                  <br />
                  <span className='text-primary text-white-hover text-sm'>
                    ChipGlobe&trade; and Carenuity&trade; are Trademarks of
                    ChipGlobe GmbH{' '}
                  </span>
                </p>
              </div>
              <div
                className='col-md-3 text-center wow fadeIn'
                data-wow-delay='100ms'
              >
                <p className='d-inline-block text-white'>
                  <Link href='/legal' className='text-primary text-white-hover'>
                    Legal Notice
                  </Link>{' '}
                  |{' '}
                  <Link
                    href='/impressum'
                    className='text-primary text-white-hover'
                  >
                    Impressum
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer