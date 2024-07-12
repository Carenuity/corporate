import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';
import Link from 'next/link';

const Page = () => {
  const pageTitle = 'GPIO-Viewer';
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
        <h5>Level 2</h5>
        
       
        <div
                  className="e-card mb-6"
                  style={{
                    boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                    height: '220px',
                    padding: '20px'
                  }}
                >
          <div className="row">
            
            <div className="col-lg-8 ">
                
            
            
                <p>GPIO stands for General Purpose Input/Output. It refers to the pins on a 
                    microcontroller or a computer board that can be programmed to serve either 
                    as digital input or output. GPIO pins are crucial in embedded systems and IoT 
                    (Internet of Things) applications where they allow the microcontroller or 
                    computer to interact with the outside world by reading sensors, controlling 
                    actuators, and communicating with other devices.</p>

                    <p>Watch a <a
                        href="https://www.youtube.com/watch?v=j9v6RvyUrvc"
                        className="text-success"
                        
                      >
                         video 
                      </a> to learn more on level 2 challenge</p>  
            </div>
            <div className="col-lg-4 mt-n1-9 ">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/free-offer/gpio.jpeg"
                className="mt-1-9 wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  width: '350px',
                  animationName: 'fadeIn',
                }}
              />
            </div>
            </div>
          </div>


        </div>
      </section>
    </>
  );
};

export default Page;
