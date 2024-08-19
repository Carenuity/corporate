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
                <h3>Our motto:  integrate - evaluate -advocate!</h3>
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


        <div className="row">
          <div className="col-md-4 mb-2">
            <div
              className="e-card mb-6"
              style={{
                boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                height: '800px',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/Evaluate/evaluate1.jpeg"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',

                  animationName: 'fadeIn',
                }}
              />
              <h4 style={{
                  padding: '10px',
                }}>Integrate</h4>
              <p
                style={{
                  padding: '10px',
                }}
              >
              Integrate your SQ-Panel Prototype at home, right at the 
              desired and very specific spot. Place it e.g. right at 
              the location to be e.g. beside your bed, on your desk or 
              on top of your cupboard or even inside something specific.</p>
              <p style={{
                  padding: '10px',
                }}>
                Contact us for very special places …  (mailto Max)
              </p> 
            </div>
          </div>

          <div className="col-md-4 mb-2">
            <div
              className="e-card mb-6"
              style={{
                boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                height: '800px',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/Evaluate/evaluate2.jpeg"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',

                  animationName: 'fadeIn',
                }}
              />
              <h4 style={{
                  padding: '10px',
                }}>Evaluate</h4>
              <p
                style={{
                  padding: '10px',
                }}
              >

              Evaluate your desired feature for the next weeks at home until you are 100% 
              happy with it, e.g. on what the SQ-Panel Prototype notifies to you and that 
              your automations work as desired.SQ-Panel Credit Program: </p>
              <p style={{
                  padding: '10px',
                }}>
                Return the prototype with a money-back guarantee when buying an SQ-Panel. 
              Your prototype purchase amount will be credited towards the SQ-Panel, reducing its cost.
              Ideally as a mouse-over message    for the   'SQ-Panel Credit Program'
              </p> 
            </div>
          </div>


          <div className="col-md-4 mb-2">
            <div
              className="e-card mb-6"
              style={{
                boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                height: '800px',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/Evaluate/evaluate3.jpeg"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',

                  animationName: 'fadeIn',
                }}
              />
              <h4 style={{
                  padding: '10px',
                }}>Advocate</h4>
              <p
                style={{
                  padding: '10px',
                }}
              >
              Advocate your solution and post it on Social Media for getting 
              more people into it. Possibly your solution makes a trend and becomes 
              an asked feature for many homes.
              </p> 
            </div>
          </div>

          <div className='col-md-2 mb-2 '>
                <h6>Results</h6>
                 {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/Evaluate/check1.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  height:"100px",
                  animationName: 'fadeIn',
                }}
              />
          </div>
          <div className='col-md-6 mb-2 '>
            <h6>From SQ-Panel Prototype to an implemented feature of SQ-Panel</h6>

            <div className="d-flex align-items-center">
                <i className="ti-check display-26 text-primary"></i>
                <span className="ms-3 text-dark fw-bold">
                It works at that specific place in your home.
                  </span>
                  </div>

                  <div className="d-flex align-items-center">
                <i className="ti-check display-26 text-primary"></i>
                <span className="ms-3 text-dark fw-bold">
                It continuously adds value over a period of time.
                  </span>
                  </div>

                  <div className="d-flex align-items-center">
                <i className="ti-check display-26 text-primary"></i>
                <span className="ms-3 text-dark fw-bold">
                It is interesting for more users with similar usecases.
                  </span>
                  </div>

        
          </div>
          <div className='col-md-1 mb-2 '>
            
            <img
                src="/img/content/Evaluate/arrow.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  height:"120px",
                  animationName: 'fadeIn',
                }}
              />
          </div>


          <div className='col-md-3 mb-2 '>
            <h6>Implementation of the feature</h6>
            <img
                src="/img/content/Evaluate/sq-panel.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  height:"100px",
                  animationName: 'fadeIn',
                }}
              />
          </div>
          </div>



        
        
                <div className='mb-4'>
                    <h5>What size do you prefer for evaluating features at home?
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
                {/* <h5 className=" mb-1">
        Install the prototypes
        
            </h5> */}

                

            <div className='row'>
                {/* <div className='col-lg-6'> 

        

            <p> <strong>Prototype S "Triple Adapter</strong></p>
            <p>Suited for D1- and C3-Mini Boards and all Sensors</p>
            <p>Compatible with 0.66 inch and 0.96inch Displays</p>
           
                 </div> */}
        <div className='col-lg-12'>
        {' '}
            <Link href="/install-for-free" className="text-success">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/evaluate/sma01.jpeg"
                className="mt-1-6 wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  width:"1980px",
                  animationName: 'fadeIn',
                }}
              />
            </Link>
            </div>
                <div className='mb-2'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/evaluate/sq-panel2.jpeg"
                className="mt-1-6 wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  width:"1980px",
                  animationName: 'fadeIn',
                }}
              />
              
                </div>

                <div>
                <h6>You can download the STL from here:</h6>
              <ul style={{ listStyleType: 'square' }}>
                    <li>Prototype S: Triple-Adapter</li>
                    <li>Prototype L: Standard</li>
                    <li>Protoype XL: Large</li>
                </ul>
                </div>
      
         </div>
        

        
        </div>
        </div>
      </section>
    </>
  );
};

export default Page;
