import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react';
import Banner from '../components/Banner';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  useEffect(() => {
    if (typeof document !== undefined) {
      const {
        jarallax,
        jarallaxVideo,
      } = require('jarallax');
      jarallaxVideo();
      jarallax(document.querySelectorAll('.jarallax'), {
        speed: 0.2,
        videoSrc: 'https://www.youtube.com/watch?v=pDWUf_g2zsc',
      });
    }
  }, []);

  return (
    <>
      {/* <!-- BANNER
        ================================================== --> */}
      <Banner
        bannerImage='img/banner.jpg'
        slogan='Lighting the chip world'
      />

      {/* <!-- WHAT WE DO
        ================================================== --> */}
      <section className='card-style09 py-0 overflow-visible bg-transparent'>
        <div className='container'>
          <div className='feature-inner'>
            <div className='row g-xl-5 mt-n1-9'>
              <div
                className='col-md-6 col-lg-4 mt-1-9 wow fadeInUp'
                data-wow-delay='200ms'
              >
                <div className='features-box bg-white shadow border-radius-3 p-1-6 p-xl-1-9 h-100'>
                  <div className='d-flex'>
                    <div className='flex-shrink-0'>
                      <img src='img/icons/18.png' alt='...' />
                    </div>
                    <div className='flex-grow-1 ps-4'>
                      <h3 className='h5'>
                        <a href='services.html'>Web Development</a>
                      </h3>
                      <p className='mb-0'>
                        We focus on the best practices for it solutions and
                        services
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='col-md-6 col-lg-4 mt-1-9 wow fadeInUp'
                data-wow-delay='400ms'
              >
                <div className='features-box bg-white shadow border-radius-3 p-1-6 p-xl-1-9 h-100'>
                  <div className='d-flex'>
                    <div className='flex-shrink-0'>
                      <img src='img/icons/19.png' alt='...' />
                    </div>
                    <div className='flex-grow-1 ps-4'>
                      <h3 className='h5'>
                        <a href='services.html'>Branding Services</a>
                      </h3>
                      <p className='mb-0'>
                        We focus on the best practices for it solutions and
                        services
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='col-md-6 col-lg-4 mt-1-9 wow fadeInUp'
                data-wow-delay='600ms'
              >
                <div className='features-box bg-white shadow border-radius-3 p-1-6 p-xl-1-9 h-100'>
                  <div className='d-flex'>
                    <div className='flex-shrink-0'>
                      <img src='img/icons/20.png' alt='...' />
                    </div>
                    <div className='flex-grow-1 ps-4'>
                      <h3 className='h5'>
                        <a href='services.html'>Digital Marketing</a>
                      </h3>
                      <p className='mb-0'>
                        We focus on the best practices for it solutions and
                        services
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- COUNTER
        ================================================== --> */}
      <section className='counter-style-01 bg-light pt-20 pb-16 py-sm-20 overflow-visible'>
        <div className='container overflow-hidden'>
          <div className='row align-items-end g-5 g-lg-0 position-relative z-index-9 mt-n1-9'>
            <div
              className='col-md-6 col-lg-3 order-2 order-lg-1 mt-1-9 wow fadeInUp'
              data-wow-delay='200ms'
            >
              <div className='text-start text-lg-end'>
                <h3 className='display-3 font-weight-800 mb-3 lh-1 text-primary'>
                  <span className='countup'>78</span>+
                </h3>
                <span className='text-uppercase letter-spacing-4 d-block font-weight-700 mb-2'>
                  Branches
                </span>
                <p className='mb-0'>
                  We work to understand your issues and are driven to ask better
                  questions.
                </p>
              </div>
            </div>
            <div
              className='col-lg-6 order-1 order-lg-2 mt-1-9 wow fadeInUp'
              data-wow-delay='400ms'
            >
              <div className='text-center'>
                <span
                  className='bg-img cover-background count-no'
                  data-background='img/bg/bg-08.jpg'
                >
                  58
                </span>
                <span className='text-primary text-uppercase letter-spacing-4 d-block font-weight-700'>
                  Years Of Experience
                </span>
              </div>
            </div>
            <div
              className='col-md-6 col-lg-3 order-2 mt-1-9 wow fadeInUp'
              data-wow-delay='600ms'
            >
              <div className='text-start'>
                <div className='mb-3'>
                  <img src='img/icons/14.png' alt='...' />
                </div>
                <span className='text-uppercase letter-spacing-4 d-block font-weight-700 mb-2'>
                  Trusted By 9700 Clients
                </span>
                <p className='mb-0'>
                  We work to understand your issues and are driven to ask better
                  questions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className='position-absolute top-100 start-50 translate-middle z-index-9 wow fadeIn'
          data-wow-delay='800ms'
        >
          <img src='img/content/about-03.jpg' alt='...' className='count-img' />
        </div>
        <div className='position-absolute bottom-0 left-0 opacity3'>
          <img src='img/bg/bg-06.png' alt='...' />
        </div>
      </section>

      {/* <!-- ABOUT US
        ================================================== --> */}
      <section className='about-style-02 pt-18 pt-lg-24'>
        <div className='container'>
          <div className='border-bottom border-color-light-black mb-6 mb-lg-10 pb-6 pb-lg-10'>
            <div className='row align-items-xl-center mt-n2-9'>
              <div
                className='col-lg-6 mt-2-9 wow fadeIn'
                data-wow-delay='200ms'
              >
                <h2 className='h1 mb-4'>
                  Digital solutions for your agency{' '}
                  <span className='text-primary'>great success.</span>
                </h2>
                <div className='text-center'>
                  <div className='row align-items-start'>
                    <div className='col-5'>
                      <div className='image-hover position-relative overflow-hidden'>
                        <img src='img/content/about-02.jpg' alt='...' />
                      </div>
                    </div>
                    <div className='col-7'>
                      <div className='image-hover position-relative overflow-hidden'>
                        <img src='img/content/about-01.jpg' alt='...' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='col-lg-6 mt-2-9 wow fadeIn'
                data-wow-delay='400ms'
              >
                <div className='ps-lg-6 ps-xl-10'>
                  <blockquote>
                    <div className='icon'>&quot;</div>
                    <h3 className='mb-0 text-white'>
                      It was popularised in the 1960s with the release sheets.
                      We bring the right people together.
                    </h3>
                  </blockquote>
                  <div className='d-flex align-items-center'>
                    <div className='flex-shrink-0'>
                      <img
                        src='img/avatars/avatar-04.jpg'
                        alt='...'
                        className='border border-width-1 p-2 border-secondary'
                      />
                    </div>
                    <div className='flex-grow-1 ms-4'>
                      <img
                        src='img/content/signature-1.png'
                        alt='...'
                        className='mb-2'
                      />
                      <h6>CEO & Co-Founder</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='clients02-carousel owl-carousel owl-theme wow fadeIn'
            data-wow-delay='600ms'
          >
            <div className='text-center clients-img'>
              <a href='#!'>
                <img src='img/clients/01.png' alt='...' className='main-img' />
              </a>
            </div>
            <div className='text-center clients-img'>
              <a href='#!'>
                <img src='img/clients/02.png' alt='...' className='main-img' />
              </a>
            </div>
            <div className='text-center clients-img'>
              <a href='#!'>
                <img src='img/clients/03.png' alt='...' className='main-img' />
              </a>
            </div>
            <div className='text-center clients-img'>
              <a href='#!'>
                <img src='img/clients/04.png' alt='...' className='main-img' />
              </a>
            </div>
            <div className='text-center clients-img'>
              <a href='#!'>
                <img src='img/clients/05.png' alt='...' className='main-img' />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- SERVICES
        ================================================== --> */}
      <section className='calltoaction-style02 py-0'>
        <div className='bg-secondary pt-6 pb-18 pt-lg-10 pb-lg-20 pt-xl-12 pb-xl-24 position-relative'>
          <div className='container-fluid px-1-6 px-sm-6 px-xxl-10'>
            <div className='row position-relative z-index-9 mt-n1-9'>
              <div
                className='col-md-6 col-xl-3 mt-1-9 wow fadeInUp'
                data-wow-delay='200ms'
              >
                <div className='card card-style08 bg-transparent border-0'>
                  <div className='card-body text-center p-xxl-1-9'>
                    <div className='card-icon'>
                      <img src='img/icons/21.png' alt='...' />
                    </div>
                    <h3 className='h5'>
                      <a
                        className='text-white'
                        href='information-security.html'
                      >
                        Information Security
                      </a>
                    </h3>
                    <p className='text-white'>
                      We focus on the best practices for it solutions and
                      services.
                    </p>
                    <a
                      href='information-security.html'
                      className='text-white text-primary-hover'
                    >
                      Read More<i className='ti-arrow-right ms-3'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className='col-md-6 col-xl-3 mt-1-9 wow fadeInUp'
                data-wow-delay='400ms'
              >
                <div className='card card-style08 bg-transparent border-0'>
                  <div className='card-body text-center p-xxl-1-9'>
                    <div className='card-icon'>
                      <img src='img/icons/22.png' alt='...' />
                    </div>
                    <h3 className='h5'>
                      <a className='text-white' href='mobile-platforms.html'>
                        Mobile Platforms
                      </a>
                    </h3>
                    <p className='text-white'>
                      We focus on the best practices for it solutions and
                      services.
                    </p>
                    <a
                      href='mobile-platforms.html'
                      className='text-white text-primary-hover'
                    >
                      Read More<i className='ti-arrow-right ms-3'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className='col-md-6 col-xl-3 mt-1-9 wow fadeInUp'
                data-wow-delay='600ms'
              >
                <div className='card card-style08 bg-transparent border-0'>
                  <div className='card-body text-center p-xxl-1-9'>
                    <div className='card-icon'>
                      <img src='img/icons/23.png' alt='...' />
                    </div>
                    <h3 className='h5'>
                      <a
                        className='text-white'
                        href='data-synchronization.html'
                      >
                        Data Synchronization
                      </a>
                    </h3>
                    <p className='text-white'>
                      We focus on the best practices for it solutions and
                      services.
                    </p>
                    <a
                      href='data-synchronization.html'
                      className='text-white text-primary-hover'
                    >
                      Read More<i className='ti-arrow-right ms-3'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className='col-md-6 col-xl-3 mt-1-9 wow fadeInUp'
                data-wow-delay='800ms'
              >
                <div className='card card-style08 bg-transparent border-0'>
                  <div className='card-body text-center p-xxl-1-9'>
                    <div className='card-icon'>
                      <img src='img/icons/24.png' alt='...' />
                    </div>
                    <h3 className='h5'>
                      <a className='text-white' href='process-automation.html'>
                        Process Automation
                      </a>
                    </h3>
                    <p className='text-white'>
                      We focus on the best practices for it solutions and
                      services.
                    </p>
                    <a
                      href='process-automation.html'
                      className='text-white text-primary-hover'
                    >
                      Read More<i className='ti-arrow-right ms-3'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='position-absolute bottom-0 left-0'>
            <img src='img/bg/bg-01.png' alt='..' />
          </div>
        </div>
        <div>
          <div className='container'>
            <div className='row align-items-center mt-n1-9'>
              <div
                className='col-lg-6 mt-1-9 order-2 order-lg-1 wow fadeIn'
                data-wow-delay='200ms'
              >
                <div className='pe-xl-6 pe-xxl-10 mt-lg-6 mt-xl-0'>
                  <h2 className='h1 mb-4'>
                    We help to achieve your{' '}
                    <span className='text-primary'>mutual goals.</span>
                  </h2>
                  <p className='mb-1-6'>
                    We are committed to providing our customers with exceptional
                    service while offering our employees the best training.
                  </p>
                  <h4 className='mb-4'>Why work with us?</h4>
                  <div className='row'>
                    <div className='col-xl-6 mb-2 mb-xl-0'>
                      <ul className='list-style2 mb-0'>
                        <li>Flexible Time Off</li>
                        <li>24/7 parking.</li>
                        <li>Full medical benefits</li>
                      </ul>
                    </div>
                    <div className='col-xl-6'>
                      <ul className='list-style2 mb-0'>
                        <li>Collaborative environment</li>
                        <li>Health, Dental, And Vision</li>
                        <li>Flexible hours</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='col-lg-6 mt-n1-9 order-1 order-lg-2 wow fadeIn'
                data-wow-delay='400ms'
              >
                <div className='right-img position-relative z-index-9'>
                  <img src='img/content/whychooseus-img-01.jpg' alt='...' />
                  <div className='video-box'>
                    <div className='story-video'>
                      <a
                        className='video video_btn'
                        href='https://www.youtube.com/watch?v=pDWUf_g2zsc'
                      >
                        <i className='fa fa-play'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- TESTIMONIALS
        ================================================== --> */}
      <section className='testimonials-style02'>
        <div className='container'>
          <div className='row g-5'>
            <div className='col-lg-4 wow fadeIn' data-wow-delay='200ms'>
              <h2 className='h1 mb-4'>
                Read incredible stories of{' '}
                <span className='text-primary'>our clients.</span>
              </h2>
              <a href='about.html' className='btn-style1 medium'>
                <span>Read More</span>
              </a>
            </div>
            <div className='col-lg-8 wow fadeIn' data-wow-delay='400ms'>
              <div>
                <div className='row mt-n2-9'>
                  <div className='col-lg-6 mt-2-9'>
                    <div>
                      <blockquote>
                        <div className='icon'>&quot;</div>
                        <p className='mb-0 display-sm-27'>
                          Man, this thing is getting better and better as I
                          learn more about it. We were treated like royalty. IT
                          solution should be nominated for service of the year.
                          I made back the purchase price in just 48 hours!
                        </p>
                      </blockquote>
                      <div className='d-flex align-items-center'>
                        <div className='flex-shrink-0'>
                          <img
                            src='img/avatars/avatar-01.jpg'
                            className='border border-width-1 p-2 border-secondary'
                            alt='...'
                          />
                        </div>
                        <div className='flex-grow-1 ms-4'>
                          <h4 className='h5 mb-0 text-secondary'>
                            Tyson Perivolaris
                          </h4>
                          <p className='mb-0'>Intranet Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 mt-2-9'>
                    <div>
                      <blockquote>
                        <div className='icon'>&quot;</div>
                        <p className='mb-0 display-sm-27'>
                          IT solution is the most valuable business resource we
                          have EVER purchased. I am completely blown away. I
                          love your system. It&apos;s exactly what I&apos;ve
                          been looking for. I love business. It really saves me
                          time and effort.
                        </p>
                      </blockquote>
                      <div className='d-flex align-items-center'>
                        <div className='flex-shrink-0'>
                          <img
                            src='img/avatars/avatar-02.jpg'
                            className='border border-width-1 p-2 border-secondary'
                            alt='...'
                          />
                        </div>
                        <div className='flex-grow-1 ms-4'>
                          <h4 className='h5 mb-0 text-secondary'>
                            Gemma Krischock
                          </h4>
                          <p className='mb-0'>Web Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- BLOG
        ================================================== --> */}
      <section className='bg-light'>
        <div className='container'>
          <h2
            className='h1 mb-2-9 text-center wow fadeIn'
            data-wow-delay='200ms'
          >
            Read our latest <span className='text-primary'>insights.</span>
          </h2>
          <div className='row g-xl-5 mt-n2-2'>
            <div
              className='col-md-6 col-lg-4 mt-2-2 wow fadeIn'
              data-wow-delay='400ms'
            >
              <article className='card card-style-04 h-100 rounded-0'>
                <div className='blog-img position-relative overflow-hidden'>
                  <img src='img/blog/blog-01.jpg' alt='...' />
                  <div className='card-list'>
                    <a href='#!'>Solutions</a>
                  </div>
                </div>
                <div className='card-body p-1-6 p-sm-1-9'>
                  <span className='text-primary d-block mb-2 font-weight-600'>
                    June 01, 2022
                  </span>
                  <h3 className='h4 mb-0'>
                    <a href='blog-details.html' className='fw-bold'>
                      10 reliable sources to learn about IT solution.
                    </a>
                  </h3>
                </div>
                <div className='d-flex fw-bold border-top px-1-6 px-sm-1-9 py-3 border-color-light-black justify-content-between'>
                  <a href='blog-details.html'>Read more</a>
                  <a href='blog-details.html'>
                    <i className='ti-arrow-right'></i>
                  </a>
                </div>
              </article>
            </div>
            <div
              className='col-md-6 col-lg-4 mt-2-2 wow fadeIn'
              data-wow-delay='600ms'
            >
              <article className='card card-style-04 h-100 rounded-0'>
                <div className='blog-img position-relative overflow-hidden'>
                  <img src='img/blog/blog-02.jpg' alt='...' />
                  <div className='card-list'>
                    <a href='#!'>Marketing</a>
                  </div>
                </div>
                <div className='card-body p-1-6 p-sm-1-9'>
                  <span className='text-primary d-block mb-2 font-weight-600'>
                    May 29, 2022
                  </span>
                  <h3 className='h4 mb-0'>
                    <a href='blog-details.html' className='fw-bold'>
                      How digital marketing can increase your profit!
                    </a>
                  </h3>
                </div>
                <div className='d-flex fw-bold border-top px-1-6 px-sm-1-9 py-3 border-color-light-black justify-content-between'>
                  <a href='blog-details.html'>Read more</a>
                  <a href='blog-details.html'>
                    <i className='ti-arrow-right'></i>
                  </a>
                </div>
              </article>
            </div>
            <div
              className='col-md-6 col-lg-4 mt-2-2 wow fadeIn'
              data-wow-delay='800ms'
            >
              <article className='card card-style-04 h-100 rounded-0'>
                <div className='blog-img position-relative overflow-hidden'>
                  <img src='img/blog/blog-03.jpg' alt='...' />
                  <div className='card-list'>
                    <a href='#!'>Development</a>
                  </div>
                </div>
                <div className='card-body p-1-6 p-sm-1-9'>
                  <span className='text-primary d-block mb-2 font-weight-600'>
                    May 25, 2022
                  </span>
                  <h3 className='h4 mb-0'>
                    <a href='blog-details.html' className='fw-bold'>
                      Simple guidance for you in web development.
                    </a>
                  </h3>
                </div>
                <div className='d-flex fw-bold border-top px-1-6 px-sm-1-9 py-3 border-color-light-black justify-content-between'>
                  <a href='blog-details.html'>Read more</a>
                  <a href='blog-details.html'>
                    <i className='ti-arrow-right'></i>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
