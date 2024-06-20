import PageTitle from '../components/PageTitle';
import Head from 'next/head';

const Index = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'University Program for AI - Kenya ​';
  const boardImage = 'https://vemaps.com/uploads/img/large/ke-03.jpg';
  const KSU =
    'https://kisiiuniversity.ac.ke/storage/public/logo/qJfhn58VTUvfuCxVTix87Xf7fIAevJwMgg2VDRta.png';
  const TUK = 'https://cdn1.vc4a.com/media/2018/03/tuk1.png';
  const TUM =
    'https://upload.wikimedia.org/wikipedia/en/a/a5/Technical_University_of_Mombasa.logo.png';

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
        pageUrl="/AI-Program-Kenya"
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
                  <span className="sm-title">Kenya</span>
                  <h2 className="mb-0 h3">
                    We are hiring AI experts and interns from selected
                    universities at our Kenya subsidiary.
                  </h2>
                </div>
                <div className="mb-1-9">
                  <div className="d-flex about-text mb-1-9">
                    <div className="flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={KSU}
                        alt="Kisii University"
                        className="rounded-circle shadow"
                        style={{ width: '5rem', height: '5rem' }}
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4 className="h5">Kisii University</h4>
                      <p className="mb-0">
                        News: The Kisii University recently specialized in their
                        courses on the Raspberry Pi Pico W, with Wifi on board,
                        from Infineon Technologies AG.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex about-text mb-1-9">
                    <div className="flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={TUK}
                        alt="Technical University of Kenya"
                        className="rounded-circle shadow"
                        style={{ width: '5rem', height: '5rem' }}
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4 className="h5">
                        Technical University of Kenya (TUK)
                      </h4>
                      <p className="mb-2 pb-2 border-bottom">
                        News: December 2023, an Intern from Nairobi will finish
                        his remotely mentored internship on AI-assisted Edge
                        Devices, with focus on Object Detection using Edge
                        Impulse.
                      </p>
                      <em>
                        TUK News November 2023, Cyntia participated at IEEE TUK
                        SB INNOVATION WEEK & INDUSTRY SYMPOSIUM <br />
                        <a
                          href="https://edu.ieee.org/ke-tuk"
                          target="_blank"
                          rel="noreferrer"
                        >
                          https://edu.ieee.org/ke-tuk
                        </a>
                      </em>
                    </div>
                  </div>
                  <div className="d-flex about-text">
                    <div className="flex-shrink-0">
                      {/* <i className='fa-solid fa-briefcase'></i> */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={TUM}
                        alt="Technical University of Mombasa"
                        className="rounded-circle shadow"
                        style={{ width: '5rem', height: '5rem' }}
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4 className="h5">
                        Technical University of Mombasa (TUM)
                      </h4>
                      <p className="mb-0">
                        News: Students from the University of Mombasa TUM and
                        students from the Technical University of Munich (TUM)
                        plan to cooperate on AI-assisted edge-devices
                      </p>
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
                  src={boardImage}
                  alt="Micro-controller"
                  className="d-sm-none d-inline-block"
                />
                <div className="about-img d-none d-sm-block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={boardImage}
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
