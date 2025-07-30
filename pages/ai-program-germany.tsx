import PageTitle from '../components/PageTitle';
import Head from 'next/head';

// eslint-disable-next-line no-unused-vars
const Index = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'University Program for AI - Germany';

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
        links={[{ path: '/', title: 'Home' }]}
        pageTitle={pageTitle}
        pageUrl="/ai-program-kenya"
      />

      <section className="overflow-hidden py-3">
        <div className="container position-relative z-index-3">
          <div className="row align-items-center about-style-03">
            <div
              className="col-lg-8 wow fadeIn"
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <div className="pe-lg-1-9">
                <div className="section-title mb-1-9">
                  <span className="sm-title">Germany</span>
                  <h2 className="mb-0 h3"></h2>
                </div>
                <div className="mb-1-9">
                  <div className="d-flex about-text mb-1-9">
                    <div className="flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/img/content/germany/landshut-logo.SVG"
                        alt="Hochschule für angewandte Wissenschaften Landshut"
                        className="rounded-circle shadow"
                        style={{ width: '5rem', height: '5rem' }}
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4 className="h5">
                        Hochschule für angewandte Wissenschaften Landshut (HAW)
                      </h4>
                      <p className="mb-0">News:</p>
                    </div>
                  </div>

                  <div className="d-flex about-text">
                    <div className="flex-shrink-0">
                      {/* <i className='fa-solid fa-briefcase'></i> */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/img/content/germany/thws-logo.PNG"
                        alt="Technical Hochschule Würzburg-Schweinfurt"
                        className="rounded-circle shadow"
                        style={{ width: '5rem', height: '5rem' }}
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4 className="h5">
                        Technical Hochschule Würzburg-Schweinfurt(THWS)
                      </h4>
                      <p className="mb-0">News:</p>
                    </div>
                  </div>

                  <div className="d-flex about-text">
                    <div className="flex-shrink-0">
                      {/* <i className='fa-solid fa-briefcase'></i> */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/img/content/germany/hochschule-logo.JFIF"
                        alt=" Hochschule für angewandtes Management "
                        className="rounded-circle shadow"
                        style={{ width: '5rem', height: '5rem' }}
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4 className="h5">
                        Hochschule für angewandtes Management (HAM)
                      </h4>
                      <p className="mb-0">News:</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 wow fadeIn text-white"
              data-wow-delay="400ms"
              style={{
                visibility: 'visible',
                animationDelay: '400ms',
                animationName: 'fadeIn',
              }}
            >
              <div className="ps-lg-2-9 position-relative text-center text-sm-start">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/germany/germany.JPG"
                  alt="Micro-controller"
                  className="d-sm-none d-inline-block"
                />
                <div className="about-img d-none d-sm-block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/germany/germany.JPG"
                    className="img-fluid"
                    alt="Micro-controller"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/bg/bg-06.png"
          className="position-absolute left bottom-5 opacity4"
          alt="..."
        />
      </section>
    </>
  );
};

export default Index;
