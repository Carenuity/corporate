import Link from 'next/link';
import React from 'react'

const Banner = ({
  bannerImage,
  slogan,
  applicationVideosUrl,
}: {
  bannerImage: string;
  slogan: string;
  applicationVideosUrl: string;
}) => {
  return (
    <>
      <section
        className='jarallax p-0 top-position1 full-screen video-banner dark-overlay'
        data-overlay-dark='65'
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
        data-jarallax
        data-speed='0.8'
        // data-video-src='https://www.youtube.com/watch?v=pDWUf_g2zsc'
      >
        <div className='container-fluid d-flex flex-column pt-5 pb-2 py-sm-8 py-md-0 position-relative z-index-9'>
          <div className='row align-items-center justify-content-center min-vh-100'>
            <div className='col-md-9 col-lg-7 col-xl-8 col-xxl-6 text-center py-5'>
              <div className='banner-content text-center'>
                <h1 className='text-white font-weight-800 display-4 display-xl-3 mb-2-9'>
                  {slogan}
                </h1>
                <div className='wow fadeIn' data-wow-delay='400ms'>
                  <div className='right-img position-relative z-index-9'>
                    <div className='video-box'>
                      <div className='story-video'>
                        <Link
                          href={applicationVideosUrl}
                          className='video btn-style1 animated fadeInUp'
                        >
                          <span className='animated fadeInUp'>
                            Applications
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner