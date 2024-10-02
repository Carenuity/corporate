import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';
import Link from 'next/link';

const Page = () => {
  const pageTitle = 'AI Algorithim';
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
        <h4 className=" mb-4">Level 5: Sensor Selection and Machine Learning</h4>
        
        <div
            className="e-card mb-6"
            style={{
              boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
              maxHeight: '1000px',
              padding: '20px',
            }}
          > 
          <div className="row ">
           
            <div className='col-lg-9'>
            <h5>Train & Implement ML Model for Sensor</h5>
            <p>
            Identify a sensor of choice
            Train & implement a simple ML model for it.
            Do marketing: Describe USP of your Algo & consider to establish own startup.<br/>
            <strong>Tools: </strong>Databases and Edge-Impulse.
            </p>
          
            </div>
            
            <div className='col-lg-3'>
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/free-offer/gray.png"
                  className=" wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                  
                    animationName: 'fadeIn',
                  }}
                /></div>
           </div>
          </div>
          <h5>
           Gained Tech Competences
           </h5>
            <p>
            In Level 5, students will delve into machine learning by training and implementing a simple ML 
            model for a sensor of their choice. They will explore various databases for data storage and 
            analysis, such as ThingSpeak, InfluxData, and Firebase. This level also encourages students to 
            market their algorithms by describing their unique selling points (USP) and considering startup 
            opportunities. The focus is on developing ML skills, data management, and entrepreneurial thinking.
             The reward includes a dual-adapter for a 0.69 OLED and two years of free access to SQ-Cloud for data analysis and AI.<br/>

              Gaining competence on the various databases on IoT:  Setup your device to feed own data into one of these 6 
              databases:
              
              <ul style={{ listStyleType: 'square' }}>
                  <li><Link href="https://www.thingspeak.com " className="text-success">
                    <h6 className="text-success">https://www.thingspeak.com </h6>
                  </Link></li>
                  <li><Link href="https://www.timescale.com" className="text-success">
                    <h6 className="text-success">https://www.timescale.com</h6>
                  </Link></li>
                  <li><Link href="https://www.influxdata.com" className="text-success">
                    <h6 className="text-success">https://www.influxdata.com</h6>
                  </Link></li>
                  <li><Link href="https://io.adafruit.com" className="text-success">
                    <h6 className="text-success">https://io.adafruit.com</h6>
                  </Link></li>
                  <li><Link href="https://www.prometheus.io" className="text-success">
                    <h6 className="text-success">https://www.prometheus.io</h6>
                  </Link></li>
                  <li><Link href="https://firebase.google.com" className="text-success">
                    <h6 className="text-success">https://firebase.google.com</h6>
                  </Link></li>
                  
                </ul>
            </p>
          <div className="mb-6">
            <h5>Tutorial for this level</h5>
            <iframe
              width="1300"
              height="450"
              src="https://www.youtube.com/embed/"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div>
         <h5 className="mb-4">Reward:</h5>
         <p>The reward for completing this level is ESP32-CAM with Dual-Adapter for 0.69 OLED plus 2 years free access to SQ-Cloud 
          (Google Firebase) for data analysis / AI.</p>
         </div>
         <div>
            <h5>
            Gained Soft Skills
            </h5>
            <p>
            In Level 5, students will develop critical thinking and problem-solving skills by training and
             implementing machine learning models. They will enhance their communication skills by marketing
              their algorithms and describing their unique selling points. Entrepreneurial thinking is 
              fostered as they consider startup opportunities. Time management is key for balancing ML 
              training with data management tasks. Adaptability is required to work with various databases,
               and resilience is built as they refine their models.
            </p>
            </div> 
            
            <div>
            <h5>
            Summary for this Level
            </h5>
            <p>
            	
            The fifth level introduces students to the exciting field of machine learning. They will select
             a sensor of their choice and train a simple machine learning model for it using platforms like 
             Edge Impulse. Additionally, students will learn to market their algorithms by describing their 
             unique selling propositions (USPs) and consider the potential for establishing their own startups. This level combines technical skills with entrepreneurial thinking, preparing students to not only develop innovative solutions but also to effectively market and potentially commercialize their projects.
            </p>
            </div>      
           
   
     
        </div>
      </section>
    </>
  );
};

export default Page;
