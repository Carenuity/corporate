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
}) {const bannerImage = 'img/banner.webp';
  
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
                    height: '250px',
                    padding: '20px'
                  }}
                >
      <div className=" row "> 
      
      <div className="col-md-8 mb-6"> 
      <h5>SQ-Panel now on Kickstarter</h5>
      <p>The SQ-Panel has built-in sensors for measuring air quality, temperature, humidity, pressure, carbon dioxide, TVOC and presence. 
      The SQ-Panel connects to the Carenuity cloud via the Carenuity Border Router, which acts as a gateway between 
        your home network and the internet. This enables you to monitor the sensor values and define their threshold values from anywhere, 
        using the Carenuity Home app on your smartphone.</p> 
      <p></p>
      
     {/* <p><strong >We provide 24/7 vital, environmental sensing & care, so that you can see what no one else will see.</strong></p>

<div className=" mb-6">
      {!isMobile && (
                        <Link
                          href={'/sq-panel'}
                          className={'btn btn-lg btn-success rounded-pill'} 
                          
                   
                        >
                          <span className="small">Learn more  </span>
                        </Link>
                      )}
      </div> */}
      </div>
   

<div className="col-lg-4 mt-n1-9 mb-2">
              <video
                src="/videos/content/SQ-Panel_on_TableStand.mp4"
                loop={true}
                autoPlay={true}
                className="mt-1-9 wow fadeInUp w-100"
                data-wow-delay="100ms"
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  height: '400',
                  animationName: 'fadeIn',
                }}
              />
            </div> 
    
      </div>
      </div>

      


            <div
                  className="e-card mb-6"
                  style={{
                    boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                    height: '450px',
                    padding: '20px'
                  }}
                >
      <div className=" row "> 

      <div className="col-md-4 mb-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
                    src="/img/content/case/case5.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  /></div>
      
      <div className="col-md-8 mb-6"> 
      <h5>Why choose SQ-Panel </h5>
      <p> SQ-Panel can be connected to your mobile phone with careniuty app 
        which lets you monitor SQ-Panel sensor values from anywhere and get notification incase the values changes
        It also has a sensor that detects human presence in the room. Once you activate your alarm you will be 
        able to get an alert when a person is detected.</p> 
     
        <p>These are few resons why SQ-Panel is impotant. Click on learn more and learn the 11 use cases we have
           on SQ-Panel
        </p>
      
     <p><strong >We provide 24/7 vital, environmental sensing & care, so that you can see what no one else will see.</strong></p>

<div className=" mb-6">
      {!isMobile && (
                        <Link
                          href={'/sq-panel'}
                          className={'btn btn-lg btn-success rounded-pill'} 
                          
                   
                        >
                          <span className="small">Learn more  </span>
                        </Link>
                      )}
      </div>
      </div>
  
    
      </div>
      </div>

      <div className='row mb-4'>
        
      
        
      <div className="col-lg-9 mt-n1-9 mb-2">
              <video
                src="/videos/content/Sq-Panel.mp4"
                loop={true}
                autoPlay={true}
                className="mt-1-9 wow fadeInUp w-100"
                data-wow-delay="100ms"
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  height: '400',
                  animationName: 'fadeIn',
                }}
              />
            </div> 
            <div className="col-md-3 mb-2"
        style={{
          
          alignContent: 'center',
          
        }}>
        <div
                  className="e-card mb-6"
                  style={{
                    boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                    height: '200px',
                    alignContent: 'center',
                    padding: '20px'
                  }}
                >
        <p>The SQ-Panel is a portable device with a 2.6-inch touchscreen which be 
        can place on a table or on a flat base</p>
        
                  </div> </div>
           
      </div>

      < hr className=" mb-6" />
<div className=" mb-6">
     <div className='row mb-1'>
      
<div className="col-md-3 mb-2"
        style={{
          
          alignContent: 'center',
          
        }}>
        <div
                  className="e-card mb-6"
                  style={{
                    boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                    height: '200px',
                    alignContent: 'center',
                    padding: '20px'
                  }}
                >
        <p>You can also get a flash mount to the wall which will help you to maintain your house 
          aesthetics for their are no cables required</p>
        
                  </div> </div>
     <div className="col-lg-9 mt-n1-9 mb-2">
              <video
                src="/img/content/sq-power/sq-power.mp4"
                loop={true}
                autoPlay={true}
                className="mt-1-9 wow fadeInUp w-100"
                data-wow-delay="100ms"
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  height: '400',
                  animationName: 'fadeIn',
                }}
              />
            </div> </div></div> 
            

            <div className='row mb-1'>
            <h6>Some images showing the flash mount and the table stand SQ-Panel</h6>
            <div className="col-md-6 mb-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
                    src="/img/content/case/cv.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                      
                      animationName: 'fadeIn',
                    }}
                  /></div>
                  <div className="col-md-6 mb-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
                    src="/img/content/case/case6.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                    
                      animationName: 'fadeIn',
                    }}
                  /></div>
     </div>
 < hr className=" mb-6" />
          <div className=" mb-2">
          <div className=" mb-2">
        <p>Matter allows you to integrate your sensor device with up to five of the most 
          popular platforms at once, such as Amazon's Alexa, 
          Apple's Home, Google Home, Samsung's SmartThings, or Home Assistant (HA).</p>           
          </div> 

          <div
                  className="e-card mb-6"
                  style={{
                    boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                    height: '500px',
                    padding: '20px'
                  }}
                >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                    src="/img/content/home/Matter.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                    width: '1920px',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />
          </div>
          
          </div>
          <div className="col-lg-12 mt-n1-9 mb-2">
              <video
                src="/videos/content/Sq-Panel.mp4"
                loop={true}
                autoPlay={true}
                className="mt-1-9 wow fadeInUp w-100"
                data-wow-delay="100ms"
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  height: '400',
                  animationName: 'fadeIn',
                }}
              />
            </div> 
        
        
          </section>

      {/* <section
        className={`thirdCallToAction jarallax p-0 top-position2 full-screen video-banner dark-overlay`}
        style={{
          backgroundImage: `url(${secondaryBgImage})`,
        }}
        data-jarallax
        data-speed="0.8"
      ></section> */}
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
