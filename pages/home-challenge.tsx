import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';
import Link from 'next/link';

const Page = () => {
  const pageTitle = 'Home Challenge';
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
       
        <div
                  className="e-card mb-6"
                  style={{
                    boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                    height: '300px',
                    padding: '20px'
                  }}
                >
          <div className="row">
            
            <div className="col-lg-9 ">
                
            <h5>Home Challenge</h5>
                <p>Showcase your skills and accept the Home Challenge to start your journey. 
                    For those in Munich, Mombasa, Thessaloniki, Hamburg, Trieste, Nairobi, 
                    Belgrade, Patras or Kisii get ready to experience this at no cost. 
                    Claim your free triple adapter now and join the community!</p>
            <p>
              Welcome to a journey of building your own device within  3 minutes to immediately sense whats’s going on.
            </p>

            <p><strong>Becoming a distinguished AI talent is a journey worth taking.</strong></p>
            </div>
            <div className="col-lg-3 mt-n1-9 ">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/free-offer/free-offer1.png"
                className="mt-1-9 wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  width: '260px',
                  animationName: 'fadeIn',
                }}
              />
            </div>
            </div>
          </div>

          <div>
        <h5 className=" mb-3">
          Talent Walkthrough
        </h5>
        <p>The <strong>Talents&apos; </strong>Walkthrough overview for the Home Challenge
         is a guide designed to help users navigate and complete the five levels of the 
         Home Challenge Journey offered by Carenuity. This guide includes step-by-step instructions, 
         tips, and strategies to ensure users can successfully progress through each level.</p>
        <p>Every level you complite you get a give away</p>
        </div>
        
        <div className="row">
          <div className="col-md-4 mb-4">
          <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '280px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/free-offer/free-offer3.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      width: '420px',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />
                  
                  
           
            <p style={{ padding: '10px' }}>

            <a
                        href="/free-offer"
                        className="text-success"
                        
                      >
                        <h6 className="text-success">Level 1</h6>
                      </a>
              
              <strong>Reward:</strong> D1 or C3-mini</p>
          </div>
          </div>

          <div className="col-md-4 mb-4">

          <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '280px',
                  }}
                >
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/free-offer/gpio.jpeg"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      width: '420px',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />

                  <p style={{ padding: '10px' }}>

                  <a
                              href="/gpio-viewer"
                              className="text-success"
                              
                            >
                              <h6 className="text-success">Level 2</h6>
                            </a>
  
                    <strong>Reward:</strong> 0.96 inch display</p>
            
          </div>
          </div>
          <div className="col-md-4 mb-4">

          <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '280px',
                  }}
                >
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/free-offer/solutions.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      width: '420px',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />

                  <p style={{ padding: '10px' }}>

                  <a
                              href="/api-usage"
                              
                              
                            >
                              <h6 className="text-success">Level 3</h6>
                            </a>
                    
                    <strong>Reward:</strong> DS18B20</p>
                              
          </div>
           
          </div>
          <div className="col-md-4 mb-4">

          <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '300px',
                  }}
                >
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/free-offer/gray.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      width: '420px',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />

                  <p style={{ padding: '10px' }}>

                  <a
                              href="/3d-modelling"
                              
                              
                            >
                              <h6 className="text-success">Level 4</h6>
                            </a>
                    
                    <strong>Reward:</strong> A voucher foe shop</p>

              
            
          </div>
            
          </div>

          <div className="col-md-4 mb-4">

<div
        className="e-card "
        style={{
          boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
          height: '300px',
        }}
      >
         {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/content/free-offer/gray.png"
          className="wow fadeInUp"
          data-wow-delay="100ms"
          alt="..."
          style={{
            visibility: 'visible',
            width: '420px',
            animationDelay: '100ms',
            animationName: 'fadeIn',
          }}
        />

        <p style={{ padding: '10px' }}>

        <a
                    href="/ai-algo"
                    className="text-success"
                    
                  >
                    <h6 className="text-success">Level 5</h6>
                  </a>
          
          <strong>Reward:</strong> Three years access to our cloud for data analysis / AI</p>

    
  
</div>
  
</div>
        </div>







      

        </div>
      </section>
    </>
  );
};

export default Page;