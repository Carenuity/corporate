import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PageTitle from '../../components/PageTitle';

const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'AI-assisted Edge Device';
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
          <h3 className=" mb-4">
            Level 6: Object Detection by an AI-assisted Edge Device
          </h3>
          <h5>
          Train & implement AI-assisted device for object detection
          </h5>
          <ul style={{ listStyleType: 'square' }}>
                  <li>Use ESP32-CAM for image recognition.</li>
                  <li>Training AI models with Edge Impulse</li>
                  <li>
                    Cup or vegetable detection using ESP32-CAM, deploying
                    machine learning models on ESP32-CAM
                  </li>
                  <li>Edge computing with ESP32-CAM and Edge Impulse.</li>
                </ul>
          <p>
          Grow visibility, open a Shopify shop Start promoting your
          AI-assisted device.
          </p>

          <div
            className="e-card mb-4"
            style={{
              boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
              maxHeight: '1000px',
              padding: '20px',
            }}
          >
            <div className="row ">
              <div className="col-lg-9">
                <h5>Train & implement AI-assisted device for object detection</h5>
                
                <p>
                 
                This level covers data acquisition, model training, deployment 
                and AI-assisted edge computing using Edge Impulse for object 
                detection. Students will learn to describe, promote and 
                optionally market their AI-assisted device on a sharing platform.
                  
                </p>
              </div>
              <div className="col-lg-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/home-challenge/level06.png"
                  className=" wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',

                    animationName: 'fadeIn',
                  }}
                />
              </div>
            </div>

            
          </div>
          
          <div>
            <h5>Summary for this Level</h5>
            <p>
              	
            In the final level of the challenge, students will work on computer vision,
             using the ESP32-CAM module to develop an image recognition system for object
              detection. They will train AI models using Edge Impulse for tasks such as 
              detecting  a cup or vegetables. These models will be deployed on the ESP32-CAM,
               and students will describe and promote their AI-assisted device. This level
                provides a understanding of image processing, AI model training, and edge 
                computing. By the end of this level, students will have the skills to create
                 sophisticated image recognition systems and understand the basics of 
                 deploying AI models on edge devices.
            </p>
          </div>
          <div className="mb-4" >
          <strong>Tools: </strong>Edge-Impulse and Solution-Builder.
          </div>
           
          <div className="mb-4">
            <h5>Tutorial for this level</h5>
            <iframe
              width="1300"
              height="450"
              src="https://www.youtube.com/embed/vCr0-iMy2AA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mb-4">
            <p><strong >Reward:</strong>
            CAM Dual-Adapter for 0.66-OLED / or Hero-Website with own device (H-A result), free shop stocking of 5 own 
            devices, incl. fulfillment, getting 100% sales profit.</p>
          </div>
          <table className='mb-4'
            style={{
                          width:"100%",
                          border:"1px solid #dddddd",
                          padding:"20px"
            }}
            >
              <tr>
                <td style={{
                          width:"50%",
                          border:"1px solid #dddddd",
                          padding:"8px"}}>
                     <strong>Level of Difficulty:</strong> advanced / AI related     
                  </td>
                <td style={{
                          
                          border:"1px solid #dddddd",
                          padding:"8px"}}>
                          <strong> Tutor:</strong> 	Melina
                            </td>
                
              </tr>
              </table>
              <div className="mb-4">
            <h5>Motivational or Reference Video</h5>
            <iframe
              width="1300"
              height="450"
              src="https://www.youtube.com/embed/bZIKVaD3dRk"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mb-4">
              <h5>
            Related Blog</h5>
            <a
              href="https://carenuityblog.wixsite.com/embedded-ai-journal/post/template-how-to-write-a-tips-blog-post"
              className="text-success"
            >
              <strong><u>Turning Your ESP32-CAM into a Smart Object Detector with Edge Impulse</u></strong>
            </a></div>
          <div>
          <h5>Gained Tech Competences</h5>
          <p>
          Remembering: Level 6 is the culmination of the challenge, where students will build an
           image recognition system using the ESP32-CAM module to identify vegetables like tomatoes,
            potatoes, and onions. Understanding: They will train and deploy machine learning models
             on the ESP32-CAM to validate them and to identify objects such as vegetables. They will
              also learn the basics of edge computing, data acquisition, model training, and deployment.
               Applying: This level covers edge computing concepts, data acquisition, model training, 
               and deployment using Edge Impulse. Students can refer to a blog post of the experts to 
               create their own object detection system. Analyzing: Students analyze and refine their device&apos;s
                description on Solution Builder. Evaluating: Completing this level provides students with free 
                stocking and sales of five devices, including fulfillment and 100% sales profit. The results 
                of their work are displayed on an OLED screen for easy viewing. Creating: Using the Edge Impulse
                 platform, they train and deploy a machine learning model to run directly on the ESP32-CAM, 
                 with AI-assisted object detection displayed on an OLED screen for validation.
          </p>
          </div>
          <div>
            <h5>Gained Soft Skills</h5>
            <p>
            Remembering: Level 6 focuses on advanced problem-solving and critical thinking as
             students build image recognition systems. Understanding: They will enhance their
              communication skills by describing and promoting their AI-assisted devices. 
              Applying: Leadership and initiative are demonstrated by managing their developments
               and marketing efforts. Analyzing: Time management is crucial for balancing model 
               training, deployment, and promotion tasks. Evaluating: Adaptability is required to
                learn and use edge computing concepts, and attention to detail ensures accurate 
                image recognition. Creating: Resilience is built as they overcome challenges in 
                deploying high accuracy to their device.
            </p>
          </div>

          <div>
            <h5>Summary for this Level</h5>
            <p>
              	
            In the final level of the challenge, students will work on computer vision,
             using the ESP32-CAM module to develop an image recognition system for object
              detection. They will train AI models using Edge Impulse for tasks such as 
              detecting  a cup or vegetables. These models will be deployed on the ESP32-CAM,
               and students will describe and promote their AI-assisted device. This level
                provides a understanding of image processing, AI model training, and edge 
                computing. By the end of this level, students will have the skills to create
                 sophisticated image recognition systems and understand the basics of 
                 deploying AI models on edge devices.
            </p>
          </div>
          <div className='row'>
          <div className='col-lg-2'>
          <p>
            {!isMobile && (
              <Link
                href={'./level-5'}
                className={'btn btn-lg btn-success rounded-pill'}
              >
                <span className="small">Previous level</span>
              </Link>
            )}

            {isMobile && (
              <a
                href={'./level-5'}
                className={'btn btn-lg btn-success rounded-pill'}
              >
                <span className="small">
                  Previous level{' '}
                  {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                </span>
              </a>
            )}
          </p>
          
          </div>
          <div className='col-lg-3'>
          <p>
            {!isMobile && (
              <Link
                href={'/home-challenge'}
                className={'btn btn-lg btn-success rounded-pill'}
              >
                <span className="small">Back to Home Challenge</span>
              </Link>
            )}

            {isMobile && (
              <a
                href={'/home-challenge'}
                className={'btn btn-lg btn-success rounded-pill'}
              >
                <span className="small">
                  Back to Home Challenge{' '}
                  {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                </span>
              </a>
            )}
          </p>
          </div>
         
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
