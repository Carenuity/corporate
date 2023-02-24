import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Footer = ({ phone, email, address }: { phone: string; email: string; address: string }) => {
  return (
    <>
      {/* <!-- FOOTER
        ================================================== --> */}
      <footer className='position-relative pt-0'>
        <div className='bg-primary py-1-9 mb-6 mb-xxl-10'>
          <div className='container'>
            <div className='row mt-n1-9 align-items-center'>
              <div
                className='col-md-6 col-lg-4 mt-1-9 wow fadeIn'
                data-wow-delay='200ms'
              >
                <div className='d-flex align-items-center'>
                  <div className='flex-shrink-0'>
                    <img src='img/icons/07.png' alt='...' />
                  </div>
                  <div className='flex-grow-1 ms-3'>
                    <p className='mb-0 text-white'>Contact Us</p>
                    <h3 className='mb-0 h5 text-white'>{phone}</h3>
                  </div>
                </div>
              </div>
              <div
                className='col-md-6 col-lg-4 mt-1-9 text-start text-lg-center wow fadeIn'
                data-wow-delay='400ms'
              >
                <div className='footer-logo'>
                  <Link href='/'>
                    <img src='img/logos/footer-light-logo.png' alt='...' />
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
                    <h3 className='mb-0 h5 text-white'>{email}</h3>
                  </div>
                  <div className='flex-shrink-0 order-1 order-lg-2'>
                    <img src='img/icons/08.png' alt='...' />
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
                We have 14+ years experience. Helping you overcome technology
                challenges.
              </h4>
              <ul className='social-icon-style1'>
                <li>
                  <a href='#!'>
                    <i className='fab fa-facebook-f'></i>
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <i className='fab fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a href='#!'>
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
                    <span className='opacity8'>{address}</span>
                  </li>
                  <li className='text-white mb-3'>
                    <strong>Email:</strong>{' '}
                    <span className='opacity8'>{email}</span>
                  </li>
                  <li className='text-white'>
                    <strong>Phone:</strong>{' '}
                    <span className='opacity8'>{phone}</span>
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
                  action='quform/newsletter-two.php'
                  method='post'
                  encType='multipart/form-data'
                  onClick={() => {}}
                >
                  <div className='quform-elements'>
                    <div className='row'>
                      {/* <!-- Begin Text input element --> */}
                      <div className='col-md-12'>
                        <div className='quform-element mb-0'>
                          <div className='quform-input'>
                            <input
                              className='form-control'
                              id='email_address'
                              type='text'
                              name='email_address'
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
        <div className='py-4 border-top border-color-light-white'>
          <div className='container'>
            <div className='row align-items-center'>
              <div
                className='col-12 text-center wow fadeIn'
                data-wow-delay='100ms'
              >
                <p className='d-inline-block text-white mb-0'>
                  &copy; <span className='current-year'></span> Carenuity{' '}
                  {/* <a href='#!' className='text-primary text-white-hover'>
                    Website Design Templates
                  </a> */}
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