import React from 'react';
import PageTitle from '../../components/PageTitle';
import Head from 'next/head';
import SolutionWidget from '../../components/SolutionWidget';
import Link from 'next/link';

const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'C3-Mini-Triple';
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
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Product',
              name: 'C3 Mini Triple',
              image:
                'https://carenuity.netlify.app/img/content/c3-mini-triple/c3-mini-triple.jpg',
              description:
                'Compact embedded platform integrating ESP-C3 microcontroller with triple sensor capability, ideal for IoT and smart applications.',
              sku: 'CSB-C3T001',
              brand: {
                '@type': 'Brand',
                name: 'Carenuity',
              },
              offers: {
                '@type': 'Offer',
                priceCurrency: 'EUR',
                price: '89.00',
                availability: 'https://schema.org/InStock',
                url: 'https://carenuity.netlify.app/product/c3-mini-triple',
              },
            }),
          }}
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
          <h4 className="mb-4">
            Applications for the C3-mini with Sensor & Display (Triples,
            continued)
          </h4>

          <div className="row mb-4">
            <div className="col-lg-8">
              {/* IR Radiometer */}
              <SolutionWidget solutionId="KzjsdjS3rA1J5ABAn9Uu" />

              {/* Logo Display */}
              <SolutionWidget solutionId="FC4a4O0YW3Q7dMKYBJJ7" />

              {/* Luxmeter */}
              <SolutionWidget solutionId="74eP4Syrjw85D0UWmqqi" />

              {/* Motion Beeper */}
              <SolutionWidget solutionId="ce57xKxHhSJGVzb4P1Jk" />

              {/* Thermometer */}
              <SolutionWidget solutionId="T8iq4WKgvGuCrREcLNzC" />

              {/* Motion Detector */}
              <SolutionWidget solutionId="UvGo54vaf9rNgSVCuuDp" />

              {/* Presence Detector */}
              <SolutionWidget solutionId="yvn3zXHy5FO0549khDk9" />

              {/* HP303B */}
              <SolutionWidget solutionId="gmwQRjIo2V8nyZ2N9D8x" />
            </div>
          </div>

          <p className="mb-8">
            Find more cool applications, which you all can install just by
            One-Click on the Install-for-Free button.
          </p>
          <div style={{ textAlign: 'center' }}>
            <p>
              {!isMobile && (
                <Link
                  href={'../../install-for-free'}
                  target="_blank"
                  className={'btn btn-lg btn-success rounded-pill'}
                  style={{ color: 'white' }}
                >
                  <span className="small"> Install for free</span>
                </Link>
              )}

              {isMobile && (
                <a
                  href={'../../install-for-free'}
                  target="_blank"
                  className={'btn btn-lg btn-success rounded-pill'}
                  style={{ color: 'white' }}
                  rel="noreferrer"
                >
                  <span className="small">
                    Install for free{' '}
                    {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                  </span>
                </a>
              )}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
