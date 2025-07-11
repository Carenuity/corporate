import Head from 'next/head';
import React from 'react';
import PageTitle from '../components/PageTitle';
import img1 from '../public/img/adafruit_api/step1.png';
import img2 from '../public/img/adafruit_api/step2.png';
import Image from 'next/image';
import SolutionWidget from '../components/SolutionWidget';
import Link from 'next/link';

// eslint-disable-next-line no-unused-vars
const Page = ({ isMobile }: { isMobile: boolean }) => {

  const pageTitle = 'Get Adafruit IO API Key';
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
        pageUrl="/adafruit-api"
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
                How to get the Adafruit IO API Key
              </h2>
              <p>
                Navigate to{' '}
                <a
                  href="https://io.adafruit.com"
                  target="_blank"
                  rel="noreferrer"
                  className="link-success"
                >
                  Adafruit IO Portal
                </a>{' '}
                to begin the journey. You will have to either signIn or SignUp
                to proceed.
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
              <Image src={img2} alt="step one" />
            </div>
            <div
              className="col-lg-12 wow fadeIn mt-3"
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <h3>Complete guide</h3>
              <p className="fw-bold">
                For further reading{' '}
                <a
                  href="/docs/adafruit_IO.pdf"
                  target="_blank"
                  className="link-success"
                >
                  see this conclusive guide
                </a>
                .
              </p>
            </div>
             <hr/>
            <div className="col-lg-8 wow fadeIn mt-3 mb-8">
              <h3 className='mb-4'>Applications</h3>
              <SolutionWidget solutionId="Wxzylq6d697T6mkUL74J" />
            </div>
            <p className=" " style={{textAlign:"center"}}>
                {!isMobile && (
                  <Link
                    href={'https://solutions.carenuity.com/ '}
                    target='blank'
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
                    target='blank'
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
