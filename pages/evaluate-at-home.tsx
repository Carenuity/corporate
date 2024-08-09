import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';
import Link from 'next/link';

const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'SQ-Labs Feature Evaluation';
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
            <div className='row'>
            <div className='col-lg-10'>    
        <h3 className=" mb-1">
        Curious about new features for the SQ-Panel?
        
            </h3>

            <p>Here you find fresh features for the SQ-Panel directly from the 
                SQ-Labs development! Are you curious about features that are 
                not yet included in your SQ-Panel? Then simply install-for-free 
                new apps onto your prototype and try them at home. We&apos;re looking 
                forward to get your feedback on features! What is your daily life 
                experience with it at your home? </p>
                <p><strong>Our motto:</strong>   integrate - evaluate -advocate!</p>
        </div>
        <div className='col-lg-2'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/Evaluate/evaluate.jpeg"
                className="mt-1-6 wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              /></div>
        
                <div className='mb-4'>
                    <h5>Which size do you prefer for feature evaluation at home?
                    </h5>

                    {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/Evaluate/sq-power-evaluate.jpeg"
                className="mt-1-6 wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
                </div>
                <h5 className=" mb-1">
        Install the prototypes
        
            </h5>

                <div className="e-card col-lg-6 mb-6"
          style={{
            boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
            maxHeight: '800px',
            alignContent:"center",
            padding: '20px',
          }}>

            <div className='row'>
                <div className='col-lg-6'> 

        

            <p> <strong>Prototype S "Triple Adapter</strong></p>
            <p>Suited for D1- and C3-Mini Boards and all Sensors</p>
            <p>Compatible with 0.66 inch and 0.96inch Displays</p>
           
                 </div>
        <div className='col-lg-6'>
        {' '}
            <Link href="/install-for-free" className="text-success">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/evaluate/install-03.png"
                className="mt-1-6 wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  alignContent:"center",
                  animationName: 'fadeIn',
                }}
              />
            </Link>
            </div>

        </div>
         </div>
         <div className="e-card col-lg-6 mb-6"
          style={{
            boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
            maxHeight: '800px',
            alignContent:"center",
            padding: '20px',
          }}>
            <div className='row'>
                <div className='col-lg-6'> 

        

            <p> <strong>Prototype S within Sensor Selection Box</strong></p>
            <p>Suited for D1- and C3-Mini Boards and all Sensors</p>
            <p>Compatible with 0.66 inch and 0.96inch Displays</p>
           
                 </div>
                 <div className='col-lg-6'>
        {' '}
            <Link href="/install-for-free" className="text-success">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/evaluate/sma2.webp"
                className="mt-1-6 wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  alignContent:"center",
                  animationName: 'fadeIn',
                }}
              />
            </Link>
            </div>  

            </div> </div>

            <div className="e-card col-lg-6 mb-6"
          style={{
            boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
            maxHeight: '800px',
            alignContent:"center",
            padding: '20px',
          }}>
            <div className='row'>
                <div className='col-lg-6'> 

        

            <p> <strong>Prototype L for standard Displays</strong></p>
            <p>Suited for Raspberry Pi Pico-W boards with Infineon Wifi module</p>
            <p>Compatible with 0.66 inch and 0.96inch Displays</p>
           
                 </div>
                 <div className='col-lg-6'>
        {' '}
            <Link href="/install-for-free" className="text-success">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/evaluate/sma3.webp"
                className="mt-1-6 wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  alignContent:"center",
                  animationName: 'fadeIn',
                }}
              />
            </Link>
            </div>  

            </div> </div>

            <div className="e-card col-lg-6 mb-6"
          style={{
            boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
            maxHeight: '800px',
            alignContent:"center",
            padding: '20px',
          }}>
            <div className='row'>
                <div className='col-lg-6'> 

        

            <p> <strong>Prototype XL for large 2.8 inch Display</strong></p>
            <p>Suited for D1- and C3-Mini Boards and all Sensors</p>
            <p>Compatible with 2.6 inch and 2.8 inch Displays</p>
           
                 </div>
                 <div className='col-lg-6'>
        {' '}
            <Link href="/install-for-free" className="text-success">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/evaluate/sma.webp"
                className="mt-1-6 wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  alignContent:"center",
                  animationName: 'fadeIn',
                }}
              />
            </Link>
            </div>  

            </div> </div>

        
        </div>
        </div>
      </section>
    </>
  );
};

export default Page;
