import Head from 'next/head';
import PageTitle from '../components/PageTitle';
import Link from 'next/link';
import ModuleImage from '../components/ModuleImage';
import { useRouter } from 'next/router';

const Actuators = ({ isMobile }: { isMobile: boolean }) => {
  const router = useRouter();
  const query = router.query;
  const pageTitle = 'Environment Selection';
  const webFlash = 'https://webflashing.vercel.app';
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Carenuity ChipGlobe Electronics Embedded Systems"
        />
        <meta
          name="description"
          content={`We're Delivering Peace-in-Mind by Vital and Environmental Sensing and Care that you See what No Else will See.`}
        />
        <title>{pageTitle}</title>
      </Head>

      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        links={[
          { path: '/install-for-free', title: 'Install For Free' },
          { path: '/sensors', title: 'Sensors' },
          { path: '/microcontrollers', title: 'Microcontrollers' },
          { path: '/actuators', title: 'Actuators' },
        ]}
        pageTitle={pageTitle}
        pageUrl="/environments"
      />

      <section className="pt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mt-n1-9">
              <div
                className="pe-lg-1-9"
                style={{
                  height: '35rem',
                  backgroundImage:
                    'url(/img/environments/environments-portfolio-bg.png)',
                  backgroundSize: 'cover',
                }}
              >
                <div className="row mt-1-9">
                  <ModuleImage
                    url={{
                      pathname: '/#!',
                      query: { ...query, environment: '0.66-OLED' },
                    }}
                    image={'/img/environments/environments-title.png'}
                    gridClass="col-12"
                  />
                  <div className="d-flex flex-column justify-content-between mt-5">
                    <ModuleImage
                      url={{
                        pathname: webFlash,
                        query: { ...query, environment: 'ha' },
                      }}
                      image={'/img/environments/Home-assistant-environment.png'}
                    />
                    <ModuleImage
                      url={{
                        pathname: webFlash,
                        query: { ...query, environment: 'ias' },
                      }}
                      image={'/img/environments/IoT-appstore-environment.png'}
                      gridClass="col-md-5 mt-3"
                    />
                  </div>
                  <div className="d-flex justify-content-between mt-5 align-items-end">
                    <ModuleImage
                      url={{
                        pathname: webFlash,
                        query: { ...query, environment: 'cloudfree' },
                      }}
                      image={'/img/environments/cloud-free-environment.png'}
                    />
                    <ModuleImage
                      url={{
                        pathname: webFlash,
                        query: { ...query, environment: 'matter' },
                      }}
                      image={'/img/environments/matter-environment.png'}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <div
                  className="wow fadeIn"
                  data-wow-delay="200ms"
                  style={{
                    visibility: 'visible',
                    animationDelay: '200ms',
                    animationName: 'fadeIn',
                  }}
                >
                  <div className="section-title left">
                    <span className="sm-title">Higlight</span>
                  </div>
                  {/* <h2 className='h1 mb-1-9'>SEO &amp; Content Writing</h2> */}
                </div>
                <p
                  className="wow fadeIn"
                  data-wow-delay="300ms"
                  style={{
                    visibility: 'visible',
                    animationDelay: '300ms',
                    animationName: 'fadeIn',
                  }}
                >
                  Choose your preferred environment for your home to enjoy
                  peace-in-mind within the ultimate Matter environment or the
                  standalone and cloud-free solution.
                </p>

                <div className="row mb-1-9">
                  <div className="col-md-6 wow fadeIn" data-wow-delay="200ms">
                    <div className="d-flex align-items-center">
                      <i className="ti-check display-26 text-primary"></i>
                      <span className="ms-3 text-dark fw-bold">
                        Home Assistant
                      </span>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="ti-check display-26 text-primary"></i>
                      <span className="ms-3 text-dark fw-bold">
                        IoT AppStore
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6 wow fadeIn" data-wow-delay="400ms">
                    <div className="d-flex align-items-center mt-4 mt-md-0">
                      <i className="ti-check display-26 text-primary"></i>
                      <span className="ms-3 text-dark fw-bold">Cloud-Free</span>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="ti-check display-26 text-primary"></i>
                      <span className="ms-3 text-dark fw-bold">Matter</span>
                    </div>
                  </div>
                </div>

                {!isMobile && (
                  <Link
                    href={webFlash}
                    className={'btn btn-lg btn-outline-success rounded-pill'} // "btn-style2 primary wow fadeInUp p-3"
                    // data-wow-delay="400ms"
                    // style={{
                    //   visibility: 'visible',
                    //   animationDelay: '400ms',
                    //   animationName: 'fadeInUp',
                    //   height: '3.5rem',
                    // }}
                  >
                    <span className="small">Install For Free</span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={webFlash}
                    className={'btn btn-lg btn-outline-success rounded-pill'} // "btn-style2 primary wow fadeInUp p-3"
                    // data-wow-delay="400ms"
                    // style={{
                    //   visibility: 'visible',
                    //   animationDelay: '400ms',
                    //   animationName: 'fadeInUp',
                    //   height: '3.5rem',
                    // }}
                  >
                    <span className="small">Install For Free</span>
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

export default Actuators;
