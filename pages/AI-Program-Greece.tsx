import PageTitle from '../components/PageTitle';
import Head from 'next/head';

// eslint-disable-next-line no-unused-vars
const Index = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'University Program for AI - Greece';
  const boardImage =
    'https://static.vecteezy.com/system/resources/thumbnails/006/735/856/small_2x/greece-map-freehand-drawing-on-white-background-free-vector.jpg';
  const UOP = 'https://users.uop.gr/~nkolok/img/uop.gif';
  const calendar =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYhCddk27nPFZ-0qMAYbvje7RemkCPzeG8KhawXc2iJZGHlQ1915ab3d0Wz4d0V6eqOPw&usqp=CAU';

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
                  <span className="sm-title">Greece</span>
                  <h2 className="mb-0 h3">
                    ChipGlobe / Carenuity recently joined the HETiA Alliance,
                    formerly known as Semiconductor Alliance of Greece.
                  </h2>
                </div>
                <div className="mb-1-9">
                  <div className="d-flex about-text mb-1-9">
                    <div className="flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={UOP}
                        alt="UOP"
                        className="rounded-circle shadow"
                        style={{ width: '5rem', height: '5rem' }}
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4 className="h5">Cooperation with RENESAS and UOP</h4>
                      <p className="mb-0">
                        News: Carenuity evaluates cooperations with the
                        University of the Peloponnese and RENESAS, headquartered
                        in Patras.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex about-text mb-1-9">
                    <div className="flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={calendar}
                        alt="UOP"
                        className="rounded-circle shadow"
                        style={{ width: '5rem', height: '5rem' }}
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4 className="h5">Past Events</h4>
                      <p className="mb-0">
                        News: 19th-20th of October 2023, Carenuity participated
                        on the HETiA Emerging Tech Conference on Edge
                        Intelligence at the Aristotle University in Thessaloniki
                        and met interested students for Internships, starting in
                        March 2024.
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
            <div className="col-12">
              <iframe
                src="https://hetia.org/portfolio-item/chipglobe-en/"
                frameBorder={0}
                className="w-100"
                style={{ height: '50rem' }}
              ></iframe>
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
