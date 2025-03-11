import Head from 'next/head';
import React from 'react';
import PageTitle from '../components/PageTitle';
import img1 from '../public/img/adafruit_api/step1.png';
import img2 from '../public/img/adafruit_api/step2.png';
import Image from 'next/image';

const Page = () => {
  const pageTitle = 'Get ThinkSpeak API Key';
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
        links={[
          { path: '/', title: 'Home' },
          { path: '/sq-labs', title: 'Team' },
        ]}
        pageTitle={pageTitle}
        pageUrl="/adafruit-api"
      />

      <section className="overflow-hidden py-3">
        <div className="container position-relative z-index-3">
          <div className="row align-items-center about-style-03">
            <div
              className="col-lg-12 wow fadeIn"
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <h2 >
                How to get the ThinkSpeak API Key
              </h2>
             <p>ThingSpeak provides API keys that let you read from or write to your channels. Here&apos;s how you get one:</p>
              <h4>Step by step</h4>
             <ol>
              <li>Sign up / Log in at ThingSpeak.</li>
              <li>Once logged in, go to Channels (top menu).</li>
              <li>Click New Channel (if you don&apos;t have one).</li>
                  <ul>
                    <li>Give your channel a name and description.</li>
                    <li>Create fields (up to 8 per channel)—these are your data fields.</li>
                  </ul>
              <li>After creating a channel:</li>
                  <ul>
                  <li>Go to your Channel Settings page.</li>
                  <li>Look under API Keys.</li>
                    <ul>
                    <li>You&apos;ll see Write API Key (for sending data).</li>
                    <li>You&apos;ll see Read API Key (for reading data).</li>
                    
                  </ul>
                  </ul>
             </ol>
              <h3>Complete guide</h3>
              <p className="fw-bold">
                For further reading{' '}
                <a
                  href="/docs/thingspeak.pdf"
                  target="_blank"
                  className="link-success"
                >
                  see this conclusive guide
                </a>
                .
              </p>
            </div>
          </div>
       
        </div>
      </section>
    </>
  );
};

export default Page;
