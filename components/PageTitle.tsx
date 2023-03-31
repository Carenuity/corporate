import Link from 'next/link';
import React, { useEffect } from 'react'

const PageTitle = ({
  prevPage,
  prevPageUrl,
  pageTitle,
  pageUrl,
}: {
  prevPage: string;
  prevPageUrl: string;
  pageTitle: string;
  pageUrl: string;
}) => {
  const bgImage = '/img/banner.jpg';
  useEffect(() => {
    if (typeof document !== undefined) {
      require('../utils/js/jarallax.min.js');
    }
  }, []);

  return (
    <>
      <section
        className='page-title-section bg-img cover-background mx-lg-1-6 mx-xl-2-5 mx-xxl-2-9 left-overlay-dark'
        data-overlay-dark='6'
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
        data-background={bgImage}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='position-relative'>
                <h1>{pageTitle}</h1>
              </div>
              <ul>
                <li>
                  <Link href={prevPageUrl}>{prevPage}</Link>
                </li>
                <li>
                  <Link href={pageUrl}>{pageTitle}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='line-animated'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    </>
  );
};

export default PageTitle