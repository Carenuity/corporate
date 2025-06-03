import React from 'react';

import PageTitle from '../../components/PageTitle';
import Head from 'next/head';
import SubscriptionWidget from '../../components/SubscriptionWidget';
import SolutionWidget from '../../components/SolutionWidget';
import Link from 'next/link';
import { AlignCenter } from 'lucide-react';

const Page = ({ isMobile }: { isMobile: boolean }) => {

  const pageTitle = 'C3-Mini-Triple';
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
          
        <h4>Applications for the C3-mini with Sensor & Display (Triples, continued)</h4>
          
         <div>
          {/* IR Radiometer */}
          <SolutionWidget solutionId="KzjsdjS3rA1J5ABAn9Uu" />

          {/* Logo Display */}
          <SolutionWidget solutionId="FC4a4O0YW3Q7dMKYBJJ7" />

          {/* Luxmeter */}
          <SolutionWidget solutionId="74eP4Syrjw85D0UWmqqi" />

          {/* Motion Beeper */}
          <SolutionWidget solutionId="ce57xKxHhSJGVzb4P1Jk" />

          {/* Thermometer */}
          <SolutionWidget solutionId="T8iq4WKgvGuCrREcLNzC" />

          {/* Motion Detector */}
          <SolutionWidget solutionId="UvGo54vaf9rNgSVCuuDp" />

          {/* Presence Detector */}
          <SolutionWidget solutionId="yvn3zXHy5FO0549khDk9" />

          {/* HP303B */}
          <SolutionWidget solutionId="gmwQRjIo2V8nyZ2N9D8x" />
          </div> 
          
        
        <p className='mb-4'>Find more cool applications, which you all can install just by One-Click on the Install-for-Free button.</p>
        <div style={{textAlign: 'center'} }>
          <p >
                        {!isMobile && (
                          <Link
                            href={
                              '../../install-for-free'
                            }
                            target="_blank"
                            className={'btn btn-sm btn-success rounded-pill'}
                          >
                            <span className="small"> Install for free</span>
                          </Link>
                        )}

                        {isMobile && (
                          <a
                            href={
                              '../../install-for-free'
                            }
                            target="_blank"
                            className={'btn btn-sm btn-success rounded-pill'}
                            rel="noreferrer"
                          >
                            <span className="small">
                             Install for free{' '}
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
