import React from 'react';
import Head from 'next/head';
import PageTitle from '../../../components/PageTitle';
import Link from 'next/link';

const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'SQ-Panel User Guide ';
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
        links={[{ path: '/', title: '' }]}
        pageTitle={pageTitle}
        pageUrl=""
      />

      <section className="pt-4">
        <div className="container">
          <h4>SQ-Panel User Guide </h4>
          <div className='row'>
             
           <div className="col-lg-12 mb-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/sq-panel-guide/guide3.PNG"
                className=" wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',

                  animationName: 'fadeIn',
                }}
              />
            </div>
             <div className="col-lg-12 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/sq-panel-guide/guide4.PNG"
                className=" wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',

                  animationName: 'fadeIn',
                }}
              />
            </div>

             <div style={{ textAlign:"center" }} >
                          <p>
                            {!isMobile && (
                              <Link
                                href={'/carenuity-app-guide'}
                                className={'btn btn-lg btn-success rounded-pill'}
                              >
                                <span className="small">Mobile App User Guide</span>
                              </Link>
                            )}
            
                            {isMobile && (
                              <a
                                href={'/carenuity-app-guide'}
                                className={'btn btn-lg btn-success rounded-pill'}
                              >
                                <span className="small">
                                 Mobile App User Guide{' '}
                                  {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                                </span>
                              </a>
                            )}
                          </p>
                        </div>
         </div>
        </div>
      </section>
    </>
  );
};

export default Page;
