import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';
import Link from 'next/link';

const Page = () => {
  const pageTitle = 'Partners-Program';
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
            <div className=' mt-6'>
                <h2 className='mb-4'>
                The Boby.pro affiliate program
                
                </h2>
                </div>
                <div className='col-md-6 mb-6' style={{borderLeft:'solid',
                            borderColor:'#198754',
                            borderWidth:'5px'  
                }}>
                <p style={{paddingLeft:'10px'}}>Are you an influencer/blogger, kitchen builder, electrician, or 
                    something similar in the Smart Home sector? Then become an advertising 
                    partner or affiliate, because we have something smart for you. By advertising
                     and marketing our Boby products, you get a commission and your 
                     customers/prospects get something great for their home.</p>

                     <Link href="/partners-program" className="text-success">
                    <h5 className="text-success" style={{paddingLeft:'10px'}}>Register now for free!</h5>
                  </Link>
                  </div>
                  
                  <div className='col-md-6 mb-6'>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/partners/hand.jpeg"
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
                </div>

            <div className='mb-12' style={{backgroundColor:'#eeeeee',
                        textAlign:'center'
            }}>
                <div className='row '>
                    <div className='col-md-4 '>
                    <img
                  src="/img/content/partners/tick.png"
                  className="mt-3 mb-2 wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    width: '420px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                    maxWidth:'40px'
                    
                  }}
                />
                    <h6>10% commission</h6>
                    <p>per successfully paid invoice</p>
                    </div>
                    <div className='col-md-4'>
                    <img
                  src="/img/content/partners/tick.png"
                  className="mt-3 mb-2 wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    width: '420px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                    maxWidth:'40px'
                    
                  }}
                />
                    <h6>Personal dashboard</h6>
                    <p>with your KPIs</p>
                    </div>
                    <div className='col-md-4'>
                    <img
                  src="/img/content/partners/tick.png"
                  className="mt-3 mb-2 wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    width: '420px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                    maxWidth:'40px'
                    
                  }}
                />
                    <h6>90 days</h6>
                    <p>cookie tracking</p>
                    </div>

                  
                </div>
                
            </div>

            <h4 className='mb-4' style={{textAlign:'center'}}>HOW TO REGISTER </h4>
            <div className='row'>
                <div className='col-md-4 mb-12' style={{ textAlign:'center'}}>
                <div
            className="e-card mb-4"
            style={{
              boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
              maxHeight: '1000px',
              padding: '20px',
            }}
          > 
                <button
                  type="submit"
                  className={'btn btn-lg btn-success rounded-pill mt-3 mb-2'}
                  style={{
                    width: '250px',
                    height:'30px',
                    paddingTop:'2px'
                    
                  }}
                >
                  {' '}
                 Step 1
                </button>
                  <div>
                  <img
                  src="/img/content/partners/carenuity-logo.png"
                  className=" mb-2 wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    width: '420px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                    maxWidth:'200px'
                    
                  }}
                />
                  </div>
                
                  <h6>Registration</h6>
                  <p>Register for free.</p>
                </div>
                </div>
                <div className='col-md-4 mb-12' style={{ textAlign:'center'}}>
                <div
            className="e-card mb-4"
            style={{
              boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
              maxHeight: '1000px',
              padding: '20px',
            }}
          > 
                <button
                  type="submit"
                  className={'btn btn-lg btn-success rounded-pill mt-3 mb-2'}
                  style={{
                    width: '250px',
                    height:'30px',
                    paddingTop:'2px'
                    
                  }}
                >
                  {' '}
                 Step 2
                </button>
                  <div>
                  <img
                  src="/img/content/partners/step2.png"
                  className="mt-3 mb-2 wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    width: '420px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                    maxWidth:'95px'
                    
                  }}
                />
                  </div>
                
                  <h6>Release</h6>
                  <p>After successful verification, we will release you to your dashboard.</p>
                </div>
                </div>
                <div className='col-md-4 mb-12' style={{textAlign:'center'}}>
                <div
                    className="e-card mb-4"
                    style={{
                    boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                    maxHeight: '1000px',
                    padding: '20px',
                    }}
                > 
                <button
                  type="submit"
                  className={'btn btn-lg btn-success rounded-pill mt-3 mb-2'}
                  style={{
                    width: '250px',
                    height:'30px',
                    paddingTop:'2px'
                    
                  }}
                >
                  {' '}
                 Step 3
                </button>
                  <div>
                  <img
                  src="/img/content/partners/step3.png"
                  className="mt-3 mb-2 wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    width: '420px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                    maxWidth:'115px'
                    
                  }}
                />
                  </div>
                
                  <h6>Embed link</h6>
                  <p>Embed a link, advertise and earn money!</p>
                </div>
                </div>
                  <div style={{textAlign:'center'}}>
                  {/* <h2>Register</h2> */}

                  </div>
            </div>
         </div >
          
        </div>
      </section>
    </>
  );
};

export default Page;
