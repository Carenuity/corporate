import Head from 'next/head';
import React from 'react';
import ServiceHOC from '../components/hoc/ServiceHOC';
import { servicesUrls } from '../utils/constants';

const Index = () => {
  const pageTitle = 'Help Center';
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

      <section className="overflow-hidden py-3">
        <div className="container position-relative z-index-3">
          <div className="row">
            <div className="col-lg-4">
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/get-started">
                <div
                  className="e-card mb-4 "
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '100px',
                    padding: '15px',
                    backgroundColor: '#198754',
                    color: '#eeeeee',
                    justifyContent: 'center',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h5 style={{ color: '#eeeeee' }}>Get Started (SQ-Panel)</h5>
                  <p>{/* (SQ-Panel setup) */}</p>
                </div>
              </a>
            </div>
            <div className="col-lg-4">
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/troubleshooting">
                <div
                  className="e-card mb-4 "
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '100px',
                    padding: '15px',
                    backgroundColor: '#198754',
                    color: '#eeeeee',
                    justifyContent: 'center',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h5 style={{ color: '#eeeeee' }}>Troubleshooting</h5>
                  {/* <p>(Connection)</p> */}
                </div>
              </a>
            </div>
            <div className="col-lg-4">
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/mobile-app">
                <div
                  className="e-card mb-4 "
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '100px',
                    padding: '15px',
                    backgroundColor: '#198754',
                    color: '#eeeeee',
                    textAlign: 'center',
                    justifyContent: 'center',

                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h5 style={{ color: '#eeeeee' }}> Mobile App </h5>
                </div>
              </a>
            </div>

            <div className="col-lg-4">
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/features-and-use-cases">
                <div
                  className="e-card mb-4 "
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '100px',
                    padding: '15px',
                    backgroundColor: '#198754',
                    color: '#eeeeee',
                    textAlign: 'center',
                    justifyContent: 'center',

                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h5 style={{ color: '#eeeeee' }}> Features & Use Cases</h5>
                </div>
              </a>
            </div>

            <div className="col-lg-4">
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/faq">
                <div
                  className="e-card mb-4 "
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '100px',
                    padding: '15px',
                    backgroundColor: '#198754',
                    color: '#eeeeee',
                    textAlign: 'center',
                    justifyContent: 'center',

                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h5 style={{ color: '#eeeeee' }}> FAQ</h5>
                </div>
              </a>
            </div>

            <div className="col-lg-4">
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/maintenance-and-safety">
                <div
                  className="e-card mb-4 "
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '100px',
                    padding: '15px',
                    backgroundColor: '#198754',
                    color: '#eeeeee',
                    textAlign: 'center',
                    justifyContent: 'center',

                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h5 style={{ color: '#eeeeee' }}> Maintenance & Safety</h5>
                </div>
              </a>
            </div>
          </div>
          <div
            className="e-card mb-4 "
            style={{
              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
              maxHeight: '500px',

              padding: '15px',
            }}
          >
            <p>If you haven&apos;t received help, feel free to contact us:</p>
            <ul>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:support@carenuity.com">info@carenuity.com</a>
              </li>
              <li>
                <strong>Phone:</strong> (+49) 89-1222469-40 (Mon–Fri, 9:00–17:00
                CET)
              </li>
            </ul>
            <p>
              Or contact us through our{' '}
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/contact-us">
                <u>contact page.</u>
              </a>{' '}
              We aim to respond within 24 h (working days).
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHOC(Index, {
  servicesCategoryUrls: servicesUrls.helpcenter,
  pageUrl: 'help-center',
  pageTitle: 'Help Center',
  serviceCategory: 'Get Help',
});
