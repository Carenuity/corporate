import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';
import Link from 'next/link';

// eslint-disable-next-line no-unused-vars
const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'SQ-Panel Plus';
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

      <section className="container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-20">
              <h4 className=" mb-1">
              Carenuity SQ-Panel Plus
              </h4>
              <h1>
              The world's first smart sensor display with built-in sensors and Matter support.
              </h1>
              
              {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/img/content/sq-panel-plus/matter1.jpeg"
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
        <div className="col-lg-5 mb-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/img/content/sq-panel-plus/sq-panel1.png"
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
        <div className=" mb-4"style={{textAlign:'center'}}>
            <h2>
                Subscription
            </h2>
            <p>
            Sign up for exclusive product launch discounts!
            </p>
        </div>
        <div className=" mb-20" style={{textAlign:'center'}}>
            <label  className={' rounded-pill'}style={{backgroundColor:'#D3D3D3',}}>

                <input type='text' placeholder='Enter your email' 
                className={'btn btn-lg  rounded-pill'}
                style={{backgroundColor:'#D3D3D3',
                    textAlign:'left',
                    width:'450px',
                    
                }}></input>
                <button className={'btn btn-lg btn-success rounded-pill'}
                style={{
                    width:'150px'
                    
                }}> Subcribe</button>
            </label>
        </div>
        <div className="col-lg-5 mb-6" style={{textAlign:'center'}}>
        <div  className=" mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/img/content/sq-panel-plus/installation.png"
                className=" wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  height:'60px',
                  animationName: 'fadeIn',
                }}
              /> </div>
               <h3>
               Super easy to use
            </h3>
               <p>
               Just unbox and power it. It automatically comes with proper 
               settings, shows the values and alarms, which you can customize at any time.
            </p>
        </div>
        <div  className=" col-lg-1 mb-6"></div>
        <div className="col-lg-5 mb-5" style={{textAlign:'center'}}>
            <div  className=" mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/img/content/sq-panel-plus/acts.png"
                className=" wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  height:'60px',
                  animationName: 'fadeIn',
                }}
              /> </div>
               <h3>
               Acts as a Gateway
            </h3>
               <p>
               No Hub needed. Smart Relay Switch can automate scenarios based on 
               sunrise/sunset, temperature, event triggering, and more.
            </p>
        </div>
        
        <div className="col-lg-5 mb-6" style={{textAlign:'center'}}>
        <div  className="  mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/img/content/sq-panel-plus/matter3.png"
                className=" wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  height:'60px',
                  animationName: 'fadeIn',
                }}
              /> </div>
               <h3>
               Supports Matter
            </h3>
               <p>
               Can be used with Apple Home for even more smart home magic.
            </p>
        </div>
        <div  className=" col-lg-1 mb-6"></div>
        <div className="col-lg-5 mb-6" style={{textAlign:'center'}}>
        <div  className="  mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/img/content/sq-panel-plus/SwitchBot.png"
                className=" wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  height:'60px',
                  animationName: 'fadeIn',
                }}
              /> </div>
               <h3>
               Part of SwitchBot Ecosystem
            </h3>
               <p>
               Can be paired with more devices to provide you with more smart home scene solutions.
            </p>
        </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Page;