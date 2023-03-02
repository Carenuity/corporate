import React from 'react'

const AboutUs = () => {
  return (
    <>
      <section className='overflow-visible'>
        <div className='container position-relative z-index-3'>
          <div className='row align-items-center about-style-03'>
            <div className='col-lg-6 wow fadeIn' data-wow-delay='200ms'>
              <div className='pe-lg-1-9'>
                <div className='section-title mb-1-9'>
                  <span className='sm-title'>About Us</span>
                  <h2 className='mb-0 h1'>
                    We’re Delivering The Best Customer Experience
                  </h2>
                </div>
                <div className='mb-1-9'>
                  <div className='d-flex about-text mb-1-9'>
                    <div className='flex-shrink-0'>
                      <i className='fa-brands fa-gitter'></i>
                    </div>
                    <div className='flex-grow-1 ms-3'>
                      <h4 className='h5'>Our Mission</h4>
                      <p className='mb-0'>
                        Our Mission is to be the industry&apos;s top-ratede
                        provider issuer enterprise targeting satisfying the most
                        to our clients.
                      </p>
                    </div>
                  </div>
                  <div className='d-flex about-text'>
                    <div className='flex-shrink-0'>
                      <i className='fa-brands fa-unity'></i>
                    </div>
                    <div className='flex-grow-1 ms-3'>
                      <h4 className='h5'>Our Vision</h4>
                      <p className='mb-0'>
                        Our Vision is to be a top Web Design company in the IT
                        sector and progress in our current position in the
                        market.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 wow fadeIn' data-wow-delay='400ms'>
              <div className='ps-lg-2-9 position-relative text-center text-sm-start'>
                <img src='img/content/about7.jpg' alt='...' />
                <div className='about-img d-none d-sm-block'>
                  <img src='img/content/about6.jpg' alt='...' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src='img/bg/bg-06.png'
          className='position-absolute left bottom-5 opacity4'
          alt='...'
        />
      </section>
    </>
  );
}

export default AboutUs