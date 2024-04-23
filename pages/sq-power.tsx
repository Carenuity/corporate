import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';

const Page = () => {
  const pageTitle = 'SQ Power';
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
        prevPage="Install For Free"
        prevPageUrl="/install-for-free"
        pageTitle={pageTitle}
        pageUrl="/sensors"
      />

      <section className="pt-4">
        <div className="container">
          <div className="row">
            <h5>High quality wall mount power module</h5>
            <br />
            <div className="col-lg-6  mb-5">
              <img
                src="/img/content/sq-power/sq-power-front.png"
                className="mt-1-9 wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
            </div>
            <div className="col-lg-6  mb-5">
              <img
                src="/img/content/sq-power/sq-power-back.png"
                className="mt-1-9 wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
            </div>

            {/* <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '300px',
                  }}
                >  */}
              <div className="container">
                <div className="row">
                <div className="col-lg-4 mt-n1-9 mb-5">
                <br />
                <h5>Basic Information</h5>
                <b>Product series:</b>Wall mounting power module<br />
                <b>Type:</b>Flyback<br />
                <b>Voltage:</b>85-265 VAC 50/60Hz<br />
                <b>Max power:</b>5W 1A<br />
                <b>Safety standard:</b>EN 60669-2-5<br />
                <b>Installation category:</b>III<br /> 
                <b>Certification:</b>CE/ROHS/WEEE<br />
                
                </div>

                <div className="col-lg-4 mt-n1-9 mb-5">
                <br />
                <h5>Appearance</h5>
                <b>Weight:</b>49g<br />
                <b>Casing materials:</b>PCLEXAN121R<br />

                
                <h5>Working Environment</h5>
                <b>Applicable place:</b>Indoor<br />
                <b>Working temperature:</b>-40 ~ 80 °C<br />
                <b>Working humidity:</b>Up to 90 % RH<br /> 
                <b>Certification:</b>CE/ROHS/WEEE<br />
                
                </div>

                <div className="col-lg-4 mt-n1-9 mb-5">
                <br />
                <h5>Installation</h5>
                <b>Installation method:</b>Flush mounting box<br />
                <b>Installation type:</b>Screws installation<br />
                <b>Wiring way:</b>N and L<br />
                <b>Wire diameter:</b>0.75 – 2.5 mm2<br />
                </div>
                </div>
              </div>
              
             
                <hr className="mb-5 "/>
              <div className="container">
          <div className="row">
            <h5 >Sq-Power Drawings</h5>
            <br />
            <div className="col-lg-6 ">
    
              <img
                src="/img/content/sq-powerdrawing1.png"
                className="mt-1-9 wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
            </div>
            <div className="col-lg-6 ">
              <img
                src="/img/content/sq-powerdrawing2.png"
                className="mt-1-9 wow fadeInUp"
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
