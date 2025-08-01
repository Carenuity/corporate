import Head from 'next/head';
import React from 'react';
import PageTitle from '../components/PageTitle';
import img1 from '../public/img/youtube_api/step1.png';
import img2 from '../public/img/youtube_api/step2.png';
import img3 from '../public/img/youtube_api/step3.png';
import img4 from '../public/img/youtube_api/step4.png';
import img5 from '../public/img/youtube_api/step5.png';
import img6 from '../public/img/youtube_api/step6.png';
import img7 from '../public/img/youtube_api/step7.png';
import img8 from '../public/img/youtube_api/step8.png';
import img9 from '../public/img/youtube_api/step9.png';
import img10 from '../public/img/youtube_api/step10.png';
import Image from 'next/image';
import Link from 'next/link';

const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'Get YouTube API Key';
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
          { path: '/', title: 'Home' },
          { path: '/sq-labs', title: 'Team' },
        ]}
        pageTitle={pageTitle}
        pageUrl="/youtube-api"
      />

      <section className="overflow-hidden py-3">
        <div className="container position-relative z-index-3">
          <div className="row align-items-center about-style-03">
            <div
              className="col-lg-12 wow fadeIn"
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <h2 className="text-muted border-bottom pb-2 mb-3">
                How to get the YouTube API Key
              </h2>
              <p>
                Navigate to{' '}
                <a
                  href="https://console.cloud.google.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="link-success"
                >
                  Google Cloud Console
                </a>{' '}
                to begin the journey.
              </p>
            </div>
            <div
              className="col-lg-12 wow fadeIn"
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <h3>Step 1</h3>
              <Image src={img1} alt="step one" />
            </div>
            <div
              className="col-lg-12 wow fadeIn"
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <h3>Step 2</h3>
              <Image src={img2} alt="step two" />
            </div>
            <div
              className="col-lg-12 wow fadeIn"
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <h3>Step 3</h3>
              <Image src={img3} alt="step three" />
            </div>
            <div
              className="col-lg-12 wow fadeIn"
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <h3>Step 4</h3>
              <Image src={img4} alt="step four" />
            </div>
            <div
              className="col-lg-12 wow fadeIn"
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <h3>Step 5</h3>
              <Image src={img5} alt="step five" />
            </div>
            <div
              className="col-lg-12 wow fadeIn"
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <h3>Step 6</h3>
              <Image src={img6} alt="step six" />
            </div>
            <div
              className="col-lg-12 wow fadeIn"
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <h3>Step 7</h3>
              <Image src={img7} alt="step seven" />
            </div>
            <div
              className="col-lg-12 wow fadeIn"
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <h3>Step 8</h3>
              <Image src={img8} alt="step eight" />
            </div>
            <div
              className="col-lg-12 wow fadeIn"
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <h3>Step 9</h3>
              <Image src={img9} alt="step nine" />
            </div>
            <div
              className="col-lg-12 wow fadeIn mb-8"
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <h3>Step 10</h3>
              <Image src={img10} alt="step ten" />
            </div>

            <p className=" " style={{ textAlign: 'center' }}>
              {!isMobile && (
                <Link
                  href={'https://solutions.carenuity.com'}
                  target="blank"
                  className={'btn btn-lg btn-success rounded-pill'} // "btn-style2 primary wow fadeInUp p-3"
                  style={{ color: 'white' }}
                >
                  <span className="small">
                    Enjoy more free Apps on Solution Builder
                  </span>
                </Link>
              )}

              {isMobile && (
                <a
                  href={'https://solutions.carenuity.com/'}
                  target="blank"
                  className={'btn btn-lg btn-success rounded-pill'}
                  style={{ color: 'white' }}
                >
                  <span className="small">
                    Enjoy more free Apps on Solution Builder
                    {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                  </span>
                </a>
              )}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
