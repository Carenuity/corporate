import { useContext } from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';
import { StoreContext } from '../components/context/Store';
import Link from 'next/link';

const Index = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'Install For Free';
  const boardImage =
    '/img/content/triple-adapter-with-letters-S-M-A-for-orientation.webp';
  // const { state } = useContext(StoreContext);

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
        pageUrl='/install-for-free'
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
                    Grab & plug your Triple (S, M & A) e.g. from your drawer or
                    go shopping
                  </h2>
                </div>
                <div className='mb-1-9'>
                  <div className='d-flex about-text mb-1-9'>
                    <div className='flex-shrink-0'>
                      <i className='fa-solid fa-microchip'></i>
                    </div>
                    <div className='flex-grow-1 ms-3'>
                      <h4 className='h5'>Get your hardware at hand</h4>
                      <p className='mb-0'>
                        As all these boards are so popular, we assume that you
                        possibly have them at your hand. If you want to refill
                        your drawer, find all parts in dedicated assortment
                        boxes or buy any part separately as spare parts in our
                        store, e.g. to build more devices of a desired kind:
                        Here is a{' '}
                        <a
                          href='https://www.chipglobe.shop/en/'
                          className='text-success'
                        >
                          recommended link
                        </a>{' '}
                        to re-fill your drawer.
                      </p>

                      <p className='text-center mt-3'>
                        {!isMobile && (
                          <Link
                            href={'/sensors'}
                            className='btn-style2 primary wow fadeInUp p-3'
                            data-wow-delay='400ms'
                            style={{
                              visibility: 'visible',
                              animationDelay: '400ms',
                              animationName: 'fadeInUp',
                              height: '3.5rem',
                            }}
                          >
                            <span className='small'>
                              Select Sensor{' '}
                            </span>
                          </Link>
                        )}

                        {isMobile && (
                          <a
                            href={'/sensors'}
                            className='btn-style2 primary wow fadeInUp p-3'
                            data-wow-delay='400ms'
                            style={{
                              visibility: 'visible',
                              animationDelay: '400ms',
                              animationName: 'fadeInUp',
                              height: '3.5rem',
                            }}
                          >
                            <span className='small'>
                              Select Sensor{' '}
                              {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                            </span>
                          </a>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className='d-flex about-text mb-1-9'>
                    <div className='flex-shrink-0'>
                      <i className='fa-solid fa-laptop-code'></i>
                    </div>
                    <div className='flex-grow-1 ms-3'>
                      <h4 className='h5'>Install the desired software</h4>
                      <p className='mb-0'>
                        For building your own desired device, you select from a
                        wide range of sensors to build your own device, e.g. a
                        Barometer, Hygrometer, Thermometer, Luxmeter, IR
                        Radiometer, Motion Detector or a Presence Button. Simply
                        use the{' '}
                        <a
                          href='https://chipglobe-dev.web.app/cloudfree'
                          className='text-success'
                        >
                          Install-For-Free App
                        </a>{' '}
                        to seamlessly transition between the different types of
                        devices. Whether you&apos;re tracking atmospheric
                        changes, monitoring moisture levels, or detecting
                        motion, the possibilities are endless.
                      </p>
                    </div>
                  </div>
                  <div className='d-flex about-text'>
                    <div className='flex-shrink-0'>
                      <i className='fa-solid fa-briefcase'></i>
                    </div>
                    <div className='flex-grow-1 ms-3'>
                      <h4 className='h5'>
                        Housing your device, e.g. by an card board enclosure
                      </h4>
                      <p className='mb-0'>
                        Discover the joy of customization and unlock your
                        creative potential e.g. in housing the electronics in a
                        hand made card paper enclosure. Don&apos;t miss out to
                        the{' '}
                        <a href='https://www.chipglobe.shop/c/zubehoer/3d-print-for-makers'>
                          printed ones from our store
                        </a>
                        .
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
                    For your orientation, we have simplified the stacking by
                    these letters S, M and A onto the Triple-Adapter. This makes
                    it as simple as possible to attach the three boards. Follow
                    the respective illustrations for building your own device.
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
