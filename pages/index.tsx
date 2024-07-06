import { Inter } from '@next/font/google';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import Banner from '../components/Banner';
import Operand from '../components/Operand';
import IoTComponentsCount from '../components/IoTComponentsCount';
import EcosystemCard from '../components/EcosystemCard';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });
export default function Home({
  isHome,
  isMobile,
}: {
  isHome: boolean;
  isMobile: boolean;
}) {
  const bannerImage = 'img/banner.webp';
  const secondaryBgImage = 'img/content/SQ-Panel-sideview.webp';
  

  useEffect(() => {
    if (typeof document !== undefined) {
      const { jarallax, jarallaxVideo } = require('jarallax');
      jarallaxVideo();
      jarallax(document.querySelectorAll('.primaryCallToAction'), {
        speed: 0.2,
        videoSrc: 'https://www.youtube.com/watch?v=i3pwQ2BWTO8', // 'https://www.youtube.com/watch?v=cquz--Q62dA', // 'https://www.youtube.com/watch?v=pDWUf_g2zsc',
      });

      jarallax(document.querySelectorAll('.secondaryCallToAction'), {
        speed: 0.2,
        videoSrc: 'https://youtu.be/nCnTdzlanPo',
      });

      jarallax(document.querySelectorAll('.thirdCallToAction'), {
        speed: 0.2,
        videoSrc: 'https://youtu.be/kLtLz_UDwzY',
      });
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Carenuity ChipGlobe Electronics Embedded Systems"
        />
        <meta name="description" content="Real Estate Electronics Matter" />
        <title>Carenuity</title>
      </Head>

      {/* <!-- BANNER
        ================================================== --> */}
      <Banner
        bannerImage={bannerImage}
        slogan="Real Estate Electronics Matter"
        isMobile={isMobile}
      />
{/* <!--
      <section
        className={`secondaryCallToAction jarallax p-0 top-position2 full-screen video-banner dark-overlay`}
        // secondary-video p-0 top-position1 full-screen video-banner dark-overlay
        // data-overlay-dark="65"
        style={{
          backgroundImage: `url(${secondaryBgImage})`,
        }}
        data-jarallax
        data-speed="0.8"
      ></section> --> */}
      
      
      

      <section className="container">
        
      <div
                  className="e-card mb-6"
                  style={{
                    boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                    height: '440px',
                    padding: '20px'
                  }}
                >
      <div className=" row "> 
      
      <div 
          className="col-md-8 mb-6"
          style={{
            verticalAlign: 'center'
          }}> 
      <h4>About Us</h4>
      <p>We provides modular and highly customizable sensor solutions for monitoring 
      vital signs and real estate air quality.</p> 
      <p>The goal is to provide all young and caregiving 
      people with especially easy-to-use sensor-systems that allow them to monitor vital signs 
      and indoor air quality parameters for their elderly family members and to select and recommend
      best suited sensors-systems for their safety and care.</p>
      
     <p><strong >We provide 24/7 vital, environmental sensing & care inside 
     one device, so that you can see what no one else will see.</strong></p>

<div className=" mb-6">
      {!isMobile && (
                        <Link
                          href={'/about'}
                          className={'btn btn-lg btn-success rounded-pill'} 
                          
                   
                        >
                          <span className="small">Learn more about us </span>
                        </Link>
                      )}
      </div>
      </div>
      <div className="col-md-4">
      <img
                    src="/img/content/case/case5.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      width: '400px',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />
      </div>
      </div>
      </div>
     
        <div className="container position-relative z-index-3">
          <div className="row align-items-center about-style-03 mb-4">
            
          <h3 >Getting started</h3>       
                   {/* Getting started */}
                   <div className="col-lg-8 mb-4 wow fadeIn">
              <div className="pe-lg-1-9">
                <div className="d-flex about-text mb-1-9">
                  <div className="flex-shrink-0">
                    <i className="fa-solid fa-microchip"></i>
                  </div>
                  <div className="flex-grow-1 ms-3">
                      
                    <h4 className="h5">Get your hardware at hand</h4>
                    <p className="mb-0">
                    As all these boards are super popular, we assume you have them at your hand. 
                    If not, checkout our free offer below or refill your drawers: You find all parts 
                    in dedicated assortment boxes or buy any individual part, e.g. spare parts from our store. 
                    Here is a {' '}
                      <a
                        href="https://www.chipglobe.shop/en/"
                        className="text-success"
                      >
                        recommended link
                      </a>{' '}
                      to re-fill your drawer.
                    </p>

                    <p className=" mt-3">
                      {!isMobile && (
                        <Link
                          href={'/freeOffer'}
                          className={'btn btn-lg btn-success rounded-pill'} // "btn-style2 primary wow fadeInUp p-3"
                          // data-wow-delay="400ms"
                          // style={{
                          //   visibility: 'visible',
                          //   animationDelay: '400ms',
                          //   animationName: 'fadeInUp',
                          //   height: '3.5rem',
                          // }}
                        >
                          <span className="small">Free Offer </span>
                        </Link>
                      )}

                      {isMobile && (
                        <a
                          href={'/freeOffer'}
                          className={'btn btn-lg btn-success rounded-pill'} // "btn-style2 primary wow fadeInUp p-3"
                          // data-wow-delay="400ms"
                          // style={{
                          //   visibility: 'visible',
                          //   animationDelay: '400ms',
                          //   animationName: 'fadeInUp',
                          //   height: '3.5rem',
                          // }}
                        >
                          <span className="small">
                            Free Offer{' '}
                            {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                          </span>
                        </a>
                      )}
                    </p>
                  </div>
                </div>
                <div className="d-flex about-text mb-1-9">
                  <div className="flex-shrink-0">
                    <i className="fa-solid fa-laptop-code"></i>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h4 className="h5">Install the desired software</h4>
                    <p className="mb-0">
                    For building your own device within 3 minutes, you can select from a wide range of 
                    sensors to build your own device, e.g. a Barometer, Hygrometer, Thermometer, Luxmeter, 
                    IR Radiometer, Motion Detector or a Presence Button. Simply use the
                    {' '}
                      <a
                        href="https://chipglobe-dev.web.app/cloudfree"
                        className="text-success"
                      >
                        Install-For-Free App
                      </a>{' '}
                      directly from browser to seamlessly transition between the different types
                     of devices. No software install on your PC is required. Whether you&apos;re tracking 
                     atmospheric changes of the weather, monitoring moisture levels downstairs, 
                     or detecting motion at your entrance, the possibilities are endless.

                     <p className=" mt-3">
                      {!isMobile && (
                        <Link
                          href={'/sensors'}
                          className={'btn btn-lg btn-success rounded-pill'} // "btn-style2 primary wow fadeInUp p-3"
                          // data-wow-delay="400ms"
                          // style={{
                          //   visibility: 'visible',
                          //   animationDelay: '400ms',
                          //   animationName: 'fadeInUp',
                          //   height: '3.5rem',
                          // }}
                        >
                          <span className="small">Select Sensor </span>
                        </Link>
                      )}

                      {isMobile && (
                        <a
                          href={'/sensors'}
                          className={'btn btn-lg btn-success rounded-pill'} // "btn-style2 primary wow fadeInUp p-3"
                          // data-wow-delay="400ms"
                          // style={{
                          //   visibility: 'visible',
                          //   animationDelay: '400ms',
                          //   animationName: 'fadeInUp',
                          //   height: '3.5rem',
                          // }}
                        >
                          <span className="small">
                            Select Sensor{' '}
                            {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                          </span>
                        </a>
                      )}
                    </p> 

                      
                    </p>
                  </div>
                </div>
                <div className="d-flex about-text">
                  <div className="flex-shrink-0">
                    <i className="fa-solid fa-briefcase"></i>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h4 className="h5">
                      Housing your device, e.g. by an card board enclosure
                    </h4>
                    <p className="mb-0">
                    Discover the joy of perfect customization and unlock your creative 
                    potential e.g. in housing the electronics you have built, to give 
                    them to your beloved. You can do this in various ways, e.g. by a 
                    handmade card paper enclosure or a 3D-print. Don&apos;t miss out to the
                    {' '}
                      <a 
                      href="https://www.chipglobe.shop/c/zubehoer/3d-print-for-makers"
                      className="text-success"
                      >
                        printed ones from our store
                      </a>{' '}
                      or challenge our community of 3D-design artists, who will realize the 
                      3D-print as you specify.
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 wow fadeIn text-white"
              data-wow-delay="400ms"
              style={{
                visibility: 'visible',
                animationDelay: '400ms',
                animationName: 'fadeIn',
              }}
            >


              
              <div className="ps-lg-2-9 position-relative text-center text-sm-start">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/micro-controler.webp"
                  alt="Micro-controller"
                  className="d-sm-none d-inline-block"
                />
                <div className="about-img d-none d-sm-block">
                  <p
                    className="px-4 py-3 text-align-justify bg-success pb-4"
                    style={{ textAlign: 'justify' }}
                  >
                    For your orientation, we have simplified the stacking by
                    these letters S, M and A onto the Triple-Adapter. This makes
                    it as simple as possible to attach the three boards. Follow
                    the respective illustrations for building your own device.
                  </p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/micro-controler.webp"
                    className="img-fluid"
                    alt="Micro-controller"
                    style={{ width: '100%' }}
                  />
                  
                </div>
                </div>
                </div>

       <hr className="mb-6 " />

       {/* sensors */}

       <h4 className=" mb-4" >
          We have <strong>28</strong> sensors, <strong>5</strong> Microcontrollers <strong>12</strong> Actuators that you can use to get upto <strong>500</strong> solutions
         
        </h4>

        <div className="row mb-6">
          {/* hstack justify-content-center align-items-center gap-2 */}
          <div className="col-md-3 d-flex">
            <IoTComponentsCount 
              count={28} 
              label="Sensors" 
              bgColor="#3d8346" />
            
          </div>

          <div className="col-md-3 d-flex">
            <IoTComponentsCount
              count={5}
              label="Microcontrollers"
              bgColor="#493356"
            />
            
          </div>

          <div className="col-md-3 d-flex">
            <IoTComponentsCount
              count={12}
              label="Actuators"
              bgColor="#065988"
            />
          
          </div>

          <div className="col-md-3">
            <IoTComponentsCount
              count={1500}
              label="Solutions"
              bgColor="#275b37"
            />
          </div>
        </div>

        {/* How to install */}
          <h4 className=" mb-1" >
           How to build your own device within 3 minutes to immediately sense
           what&apos;s going on.
           </h4>
                
            <strong className=" mb-1">
              Grab & plug your Triple (S, M & A) e.g. from your drawer or
              go shopping
              </strong>
            <div className="col-lg-4 wow fadeIn  ">
              
              
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/Install/"
                className="mt-1-6 wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
              <strong>1. Make Your Triple</strong>
            </div>

            
            <div className="col-lg-4 wow fadeIn  ">
             

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/Install/"
                className="mt-1-9 wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
               <strong>2. Install one of the various prepared applications to your tripple</strong>
            </div>

            <div className="col-lg-4 mb-6 wow fadeIn ">
              
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/Install/"
                className="mt-1-9 wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
              <strong>3. Enclose and place in your home</strong>
              
            </div>
                    
          
            </div>
            </div>
        
      


        <h4 className=" mb-3">
          Providing 16 Smart Home Applications in four EcoSystems
        </h4>
        <div className="row">
          <div className="col-md-3">
          <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '550px',
                  }}
                >
                  <img
                    src="/img/content/ecosystems/EcoSystem_CloudFree.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      width: '320px',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />
                  
                  
           
            <p style={{ padding: '10px' }}>
              <h5>Cloudfree</h5>
              The most secure and simple device does not relate to the internet at all. 
              You install it and it just works. This device category is the best, if you do 
              not need features besides the major task of sensing something.</p>
          </div>
          </div>

          <div className="col-md-3">

          <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '550px',
                  }}
                >
                  <img
                    src="/img/content/ecosystems/EcoSystem_HomeAssistant.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      width: '320px',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />

              <p style={{ padding: '10px' }}>
              <h5>Home Assistant</h5>
              Home Assistant specifies in detail, which actions is to be taken, 
              if a device senses a certain situation. HA is currently the 
              worlds most popular environment for smart home devices.</p>
            
          </div>
          </div>
          <div className="col-md-3">

          <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '550px',
                  }}
                >
                  <img
                    src="/img/content/ecosystems/EcoSystem_IoT-AppStore.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      width: '320px',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />

              <p style={{ padding: '10px' }}>
              <h5>IoT AppStore</h5>
              If you have the idea of more devices, which you want to jointly orchester 
              by updates over the air, possibly at remote locations (e.g. at your parents home) 
              the IoT solution is your first choice. </p>
            
          </div>
           
          </div>
          <div className="col-md-3">

          <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '550px',
                  }}
                >
                  <img
                    src="/img/content/ecosystems/EcoSystem_Matter.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      width: '320px',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />

              <p style={{ padding: '10px' }}>
              <h5>Matter</h5>
              Matter allows you to integrate your sensor device with up to five of the most 
              popular platforms at once, such as Amazon's Alexa, Apple's Home, 
              Google Home, Samsung's SmartThings, or Home Assistant (HA). 
              </p>
            
          </div>
            
          </div>
        </div>
          </section>

      <section
        className={`thirdCallToAction jarallax p-0 top-position2 full-screen video-banner dark-overlay`}
        style={{
          backgroundImage: `url(${secondaryBgImage})`,
        }}
        data-jarallax
        data-speed="0.8"
      ></section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      isHome: true,
    },
  };
};
