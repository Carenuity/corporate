import React from 'react';
import Head from 'next/head';
import PageTitle from '../../components/PageTitle';

const Page = () => {
  const pageTitle = 'Home Challenge Certificate';
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
        <div className="container" >

         <div className='col-md-8'
         style={{
            border: '3px solid #198754',
            padding: '10px',
            textAlign:"center"
         }}>
            <div
            style={{
                border: '6px solid #198754',
                padding: '50px',
             }}>
            
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/logos/carenuity-logo.png"
                className=" wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                    height:'80px',
                  animationName: 'fadeIn',
                }}
              />
            </div>
            <div className='mb-4'>
            <h2>Certificate of Achievement</h2>
            <i >This certifies that:</i>
            
            </div>
            <h2 ><u>Student's Name</u></h2>
            <p>has successfully completed the Carenuity Home Challenge, showcasing exceptional skills
            and knowledge in the fields of <strong>Internet of Things (IoT)</strong> and <strong>Artificial Intelligence (AI)</strong>.</p>

            <h4>Competencies Demonstrated:</h4>
            <ul style={{ listStyleType: 'square',textAlign:"left" }}>
                  <li>Comprehensive understanding of IoT product development and deployment</li>
                  <li>Proficiency in designing and implementing large scale IoT solutions</li>
                  <li>Ability to collect and analyze data from IoT devices for ML/AI</li>
                  <li>Knowledge of best practices in IoT security from server to edge devices</li>
                  <li>Application of AI techniques in IoT systems & cloud</li>
                  <li>Integration of AI algorithms for data processing and decision-making</li>
                  
                </ul>
            <p>This certificate is an informal recognition of the competencies gained</p>
            <p>through the Carenuity Home Challenge.</p>
            <hr style={{border: '1px solid #198754',}}/>
            <i>
            <p>ChipGlobe, with over 15 years of experience as trusted provider of talent, proudly 
            acknowledges the dedication and expertise demonstrated by the participants in this challenge.</p>
            <p>Note: This certificate becomes a non-fungeable token on Blockchain (NFT).</p>  
            </i>
         </div>
         </div>
        </div>
      </section>
    </>
  );
};

export default Page;







// Certificate of Achievement

// This certifies that

// [Student's Name]

// has successfully completed the Carenuity Home Challenge, showcasing exceptional skills
 //and knowledge in the fields of Internet of Things (IoT) and Artificial Intelligence (AI).

// Competencies Demonstrated:

// Expertise in setting up and configuring IoT devices
//  - Comprehensive understanding of IoT communication protocols
//  - Proficiency in designing and implementing IoT solutions
//  - Ability to collect and analyze data from IoT devices
//  - Knowledge of best practices in IoT security
//  - Application of AI techniques in IoT systems
//  - Integration of AI algorithms for data processing and decision-making

// This certificate is an informal recognition of the competencies gained through
//  the Carenuity Home Challenge.

// ChipGlobe, with over 15 years of experience as a trusted provider of talent, proudly 
//acknowledges the dedication and expertise demonstrated by the participants in this challenge.
