import React from 'react';
import Head from 'next/head';
import PageTitle from '../components/PageTitle';

const Page = () => {
  const pageTitle = 'Serial Number';
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
        <div className="container ">
            <h4>Description of our Serial Number</h4>
           {/* eslint-disable-next-line @next/next/no-img-element */}
           <img
                src="/img/content/serial-number/serial-number.jpeg"
                className=" wow fadeInUp mb-6"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',

                  animationName: 'fadeIn',
                }}
              />
              <div>
              <p>
        Carenuity&apos;s system for assigning serial numbers follows a structured methodology designed for clarity, 
        organization, and traceability. The serial number format incorporates specific identifiers that denote 
        product type, production year, and batch sequence. This systematic approach ensures that each item is 
        uniquely identifiable, facilitating inventory management, quality control, and customer support.
        </p>
        <p>The diagram illustrating this system highlights several key components:</p>
        <ul>
          <li><strong>Product Code:</strong>The initial segment represents the product category or model.</li>
          <li><strong>Year Identifier: </strong>This section indicates the year of manufacture, 
          enabling chronological tracking of production.</li>
          <li><strong>Batch Number:</strong>A unique code for each production batch, ensuring 
          traceability in case of recalls or quality assessments.</li>
          <li><strong>Individual Item Number:</strong>A distinct identifier for each item 
          within the batch, confirming its uniqueness.</li>
        </ul>
        <p>The visual representation simplifies understanding by mapping 
          these segments in a clear, linear format, with color-coded sections or labels to 
          denote each aspect of the serial number.</p>
      <p>Carenuity's systematic approach to serial number assignment exemplifies its commitment 
        to precision, transparency, and reliability in product management.</p>
              </div>
        </div>
        
      </section>
    </>
  );
};

export default Page;
