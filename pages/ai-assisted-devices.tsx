import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';

// eslint-disable-next-line no-unused-vars
const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'AI-Assisted Devices';
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
          <div className="row">
           
              
              <h4>Innovative Radar Device for Preventing Sudden Infant Death Syndrome (SIDS)</h4>

                <p>Our cutting-edge radar device is designed to help prevent Sudden Infant Death Syndrome 
                  (SIDS) by continuously monitoring your baby&apos;s vital signs without physical contact. 
                  Utilizing advanced radar technology, it detects subtle movements and breathing patterns,
                   providing real-time alerts to parents and caregivers if any irregularities are detected.
                    This non-invasive solution ensures your baby&apos;s safety and gives you peace of mind, knowing
                     that your little one is being closely monitored around the clock.</p>

                     <div>
                <h6>Radar states:</h6>
                <ol >
                  <li>Approaching object</li>
                  <li>Moving away object</li>
                  <li>Stationary object</li>
                  <li>No object</li>
                </ol>
              </div>

                     <h4 className=" mb-4">Go through the blogs to learn more about Radar Device</h4>

                     <div className="col-lg-6 mb-4">
                     <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '550px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/Ai-assisted/radar-sensor1.jpeg"
                  className=" wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',

                    animationName: 'fadeIn',
                  }}
                />
                
                    <a
                      href="https://carenuityblog.wixsite.com/embedded-ai-journal/post/template-how-to-write-a-tips-blog-post-1"
                      
                      target="_blank"
                    >
                    <h5 
                    style={{padding:'10px',
                          
                    }}><u>A Beginner's Guide to HLK-LD2410C 24GHz Radar Sensor</u></h5>
                    </a>
                
                <p style={{paddingLeft:'10px',paddingRight:'10px'}}>
                  Today, let's delve into the fascinating world of the HLK-LD2410,
                   a 24GHz Human Presence Radar Sensor. The exciting part? No coding
                    required! In this tutorial, we'll walk you through the simple yet 
                    captivating.....</p>
              </div>
              </div>

              <div className="col-lg-6 mb-4">
                     <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '550px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/Ai-assisted/radar-sensor2.jpeg"
                  className=" wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',

                    animationName: 'fadeIn',
                  }}
                />
                
                    <a
                      href="https://carenuityblog.wixsite.com/embedded-ai-journal/post/discovering-the-ld2410c-radar-sensor"
                      className="text-success"
                      target="_blank"
                    >
                    <h5  style={{padding:'10px'}}>
                      <u>Discovering the LD2410C Radar Sensor</u></h5>
                    </a>
                
                <p style={{paddingLeft:'10px',paddingRight:'10px'}}>
                What if you could see through walls, fog, and darkness, with accuracy 
                and speed? This has been made possible thanks to the LD2410C radar sensor,
                 a high sensitivity 24GHz human presence status sensing module developed by
                  Hi-Link Electronics.  In a world .....</p>
              </div>
              </div>

              

            </div>
          
        </div>
      </section>
    </>
  );
};

export default Page;
