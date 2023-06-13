import PageTitle from '../components/PageTitle';
import Head from 'next/head';
import Link from 'next/link';
import { StoreContext } from '../components/context/Store';
import { useContext } from 'react';

const Index = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'Select what you have';
  const boardImage = '/img/content/selection-of-microcontroller-platform.webp';
  const { state } = useContext(StoreContext);

  return (
    <>
      <Head>
        <meta
          name='keywords'
          content='Carenuity ChipGlobe Electronics Embedded Systems'
        />
        <meta
          name='description'
          content={`We're Delivering Peace-in-Mind by Vital and Environmental Sensing and Care that you See what No Else will See.`}
        />
        <title>{pageTitle}</title>
      </Head>

      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        prevPage='Home'
        prevPageUrl='/'
        pageTitle={pageTitle}
        pageUrl='/microcontrollers'
      />

      <section className='overflow-hidden py-3'>
        <div className='container position-relative z-index-3'>
          <div className='row align-items-center about-style-03'>
            <div
              className='col-lg-8 wow fadeIn'
              data-wow-delay='200ms'
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <div className='pe-lg-1-9'>
                <div className='section-title mb-1-9'>
                  <span className='sm-title'>{pageTitle}</span>
                  <h2 className='mb-0 h3'>
                    For sustainability reasons we care and support your chosen
                    microcontroller platforms from the past.
                  </h2>
                </div>
                <div className='mb-1-9'>
                  <div className='d-flex about-text mb-1-9'>
                    <div className='flex-shrink-0'>
                      <i className='fa-solid fa-microchip'></i>
                    </div>
                    <div className='flex-grow-1 ms-3'>
                      <h4 className='h5'>
                        Select your preferred microcontroller
                      </h4>
                      <p className='mb-0'>
                        Our recommendation is the C3-Mini™ as it is future proof
                        for the upcoming Matter standard and it fits into the
                        3D-printed housings we prepared for you.
                      </p>

                      <p className='text-center mt-3'>
                        <a
                          href={state.urls.webFlash}
                          className='btn-style2 primary wow fadeInUp p-3'
                          data-wow-delay='400ms'
                          style={{
                            visibility: 'visible',
                            animationDelay: '400ms',
                            animationName: 'fadeInUp',
                            height: '3.5rem',
                          }}
                        >
                          <span className='small'>Install For Free</span>
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className='d-flex about-text mb-1-9'>
                    <div className='flex-shrink-0'>
                      <i className='fa-solid fa-laptop-code'></i>
                    </div>
                    <div className='flex-grow-1 ms-3'>
                      <h4 className='h5'>
                        Learn about the evolution for the C3-Mini™
                      </h4>
                      <p className='mb-0'>
                        The D1 is the predecessor of the C3-Mini™, which comes
                        additionally with Bluetooth on board. Bluetooth is
                        required for onboarding devices into the upcoming Matter
                        environments, which are targeted.
                      </p>
                    </div>
                  </div>
                  <div className='d-flex about-text'>
                    <div className='flex-shrink-0'>
                      <i className='fa-solid fa-briefcase'></i>
                    </div>
                    <div className='flex-grow-1 ms-3'>
                      <h4 className='h5'>Learn about Matter</h4>
                      <p className='mb-0'>
                        We are preparing to get the following 12 sensor
                        solutions into Matter, utilizing Matter-over-Wifi. Our
                        premium sensor device, the SQ-Panel, comes with
                        Matter-over-Thread.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='col-lg-4 wow fadeIn text-white'
              data-wow-delay='400ms'
              style={{
                visibility: 'visible',
                animationDelay: '400ms',
                animationName: 'fadeIn',
              }}
            >
              <div className='ps-lg-2-9 position-relative text-center text-sm-start'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={boardImage}
                  alt='Micro-controller'
                  className='d-sm-none d-inline-block'
                />
                <div className='about-img d-none d-sm-block'>
                  <p
                    className='px-4 py-3 text-align-justify bg-success pb-4'
                    style={{ textAlign: 'justify' }}
                  >
                    For your convenience, we have prepared these platforms we
                    support with care. Just click the desired one you possibly
                    are familiar with:
                  </p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={boardImage}
                    className='img-fluid'
                    alt='Micro-controller'
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='/img/bg/bg-06.png'
          className='position-absolute left bottom-5 opacity4'
          alt='...'
        />
      </section>
    </>
  );
};

export default Index;
