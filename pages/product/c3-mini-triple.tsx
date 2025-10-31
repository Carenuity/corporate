import React from 'react';
import PageTitle from '../../components/PageTitle';
import Head from 'next/head';
import SolutionWidget from '../../components/SolutionWidget';
import Link from 'next/link';
import ServiceHOC from '../../components/hoc/ServiceHOC';
import { servicesUrls } from '../../utils/constants';
import SubscriptionWidget from '../../components/SubscriptionWidget';

import { targetDomain } from '../../utils/constants';

const Index = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'C3-Mini Triples';
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
              name: 'More C3-Mini Triples',
              image: `${targetDomain}/img/content/c3-mini-triple/c3-mini-triple.jpg`,
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
                url: `${targetDomain}/product/c3-mini-triple`,
              },
            }),
          }}
        />

        <title>C3 Mini Triple</title>
      </Head>

      

      <section className="pt-4">
        <div className="container">
          <h4 className="mb-4">
            More applications for the C3-Mini with Sensor & Display (Triples,
            continued)
          </h4>

          <div className="row mb-4">
            <div className="">
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

          {/* wishlist */}
          <hr className="my-7 "/>
          <div
            id="subscribe"
            className="my-5 "
            style={{ textAlign: 'center' }}
          >
            
            <h2>Product Wishlist</h2>
            <p>
              Join <strong>C3-Mini Triples</strong> wishlist for updates when
              ready
            </p>
            <SubscriptionWidget categoryId={3} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHOC(Index, {
  servicesCategoryUrls: servicesUrls.products,
  pageUrl: '/product/c3-mini-triple',
  pageTitle: 'C3 Mini Triple',
  serviceCategory: 'Our Products',
});