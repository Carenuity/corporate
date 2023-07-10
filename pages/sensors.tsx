import Head from "next/head";
import PageTitle from "../components/PageTitle";
import Link from "next/link";

const sensors = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'Sensor Selection';
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
        prevPage='Install For Free'
        prevPageUrl='/install-for-free'
        pageTitle={pageTitle}
        pageUrl='/sensors'
      />

      <section className='pt-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 mt-n1-9'>
              <div className='pe-lg-1-9'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src='/img/content/sensor-portfolio.webp'
                  className='mt-1-9 wow fadeInUp'
                  data-wow-delay='100ms'
                  alt='...'
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />
              </div>
            </div>
            <div className='col-lg-4'>
              <div>
                <div
                  className='wow fadeIn'
                  data-wow-delay='200ms'
                  style={{
                    visibility: 'visible',
                    animationDelay: '200ms',
                    animationName: 'fadeIn',
                  }}
                >
                  <div className='section-title left'>
                    <span className='sm-title'>Higlight</span>
                  </div>
                  {/* <h2 className='h1 mb-1-9'>SEO &amp; Content Writing</h2> */}
                </div>
                <p
                  className='wow fadeIn'
                  data-wow-delay='300ms'
                  style={{
                    visibility: 'visible',
                    animationDelay: '300ms',
                    animationName: 'fadeIn',
                  }}
                >
                  Carenuity is a sensor device specialist with a portfolio of 24
                  devices, which you get with an enclosure as well as customized
                  for your needs.
                </p>

                <div className='row mb-1-9'>
                  <div className='col-md-6 wow fadeIn' data-wow-delay='200ms'>
                    <div className='d-flex align-items-center'>
                      <i className='ti-check display-26 text-primary'></i>
                      <span className='ms-3 text-dark fw-bold'>Barometer</span>
                    </div>
                    <div className='d-flex align-items-center mt-4'>
                      <i className='ti-check display-26 text-primary'></i>
                      <span className='ms-3 text-dark fw-bold'>Hygrometer</span>
                    </div>
                    <div className='d-flex align-items-center mt-4'>
                      <i className='ti-check display-26 text-primary'></i>
                      <span className='ms-3 text-dark fw-bold'>
                        Thermometer
                      </span>
                    </div>
                    <div className='d-flex align-items-center mt-4'>
                      <i className='ti-check display-26 text-primary'></i>
                      <span className='ms-3 text-dark fw-bold'>
                        Motion Detector
                      </span>
                    </div>
                  </div>
                  <div className='col-md-6 wow fadeIn' data-wow-delay='400ms'>
                    <div className='d-flex align-items-center mt-4 mt-md-0'>
                      <i className='ti-check display-26 text-primary'></i>
                      <span className='ms-3 text-dark fw-bold'>Luxmeter</span>
                    </div>
                    <div className='d-flex align-items-center mt-4'>
                      <i className='ti-check display-26 text-primary'></i>
                      <span className='ms-3 text-dark fw-bold'>
                        IR Radiometer
                      </span>
                    </div>
                    <div className='d-flex align-items-center mt-4'>
                      <i className='ti-check display-26 text-primary'></i>
                      <span className='ms-3 text-dark fw-bold'>
                        Presence Button
                      </span>
                    </div>
                  </div>
                </div>

                {!isMobile && (
                  <Link
                    href={'/microcontrollers'}
                    className='btn-style2 primary wow fadeInUp p-3'
                    data-wow-delay='400ms'
                    style={{
                      visibility: 'visible',
                      animationDelay: '400ms',
                      animationName: 'fadeInUp',
                      height: '3.5rem',
                    }}
                  >
                    <span className='small'>Select Microcontroller </span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'/microcontrollers'}
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
                      Select Microcontroller{' '}
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default sensors;
