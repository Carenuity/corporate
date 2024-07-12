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
        <h5>Level 5</h5>
        
       
        <div
                  className="e-card mb-6"
                  style={{
                    boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                    height: '250px',
                    padding: '20px'
                  }}
                >
          <div className="row">
            
            <div className="col-lg-8 ">
                
            <p>Watch a <a
                        href=""
                        className="text-success"
                        
                      >
                         video 
                      </a> to learn more on level 5 challenge</p> 
            
                <p> Buy a sensor of choise</p>
                <p>Train a simple model</p>
                <p>Consinder to start your own startup</p>
                <p><strong>Reward:</strong> Three years access to our cloud for data analysis / AI</p>

                     
            </div>
            
            </div>
          </div>


        </div>
      </section>
    </>
  );
};

export default Page;
