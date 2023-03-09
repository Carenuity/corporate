import React from 'react'

const WorkingProcess = () => {
  return (
    <>
      <section className='pt-0'>
        <div className='container'>
          <div
            className='section-title mb-1-9 mb-md-6 text-center wow fadeIn'
            data-wow-delay='200ms'
          >
            <span className='sm-title'>Work Process</span>
            <h2 className='mb-0 h1'>Our Working Process</h2>
          </div>
          <div className='main-process text-center'>
            <div className='line-shape wow fadeIn' data-wow-delay='400ms'>
              <img src='img/content/process-line.png' alt='...' />
            </div>
            <div className='row mt-n6'>
              <div
                className='process-style-01 col-lg-4 col-md-6 mt-6 wow fadeInUp'
                data-wow-delay='600ms'
              >
                <div className='item'>
                  <div className='thumb'>
                    <img src='img/content/process-01.jpg' alt='...' />
                    <span>01</span>
                  </div>
                  <h5>Design</h5>
                  <p className='w-lg-80 mx-auto mb-0'>
                    We focus on the best practices for it solutions and
                    services.
                  </p>
                </div>
              </div>

              <div
                className='process-style-01 col-lg-4 col-md-6 mt-6 wow fadeInUp'
                data-wow-delay='800ms'
              >
                <div className='item'>
                  <div className='thumb'>
                    <img src='img/content/process-02.jpg' alt='...' />
                    <span>02</span>
                  </div>
                  <h5>Testing</h5>
                  <p className='w-lg-80 mx-auto mb-0'>
                    We focus on the best practices for it solutions and
                    services.
                  </p>
                </div>
              </div>

              <div
                className='process-style-01 col-lg-4 col-md-6 mt-6 wow fadeInUp'
                data-wow-delay='1000ms'
              >
                <div className='item'>
                  <div className='thumb'>
                    <img src='img/content/process-03.jpg' alt='...' />
                    <span>03</span>
                  </div>
                  <h5>Go-Live</h5>
                  <p className='w-lg-80 mx-auto mb-0'>
                    We focus on the best practices for it solutions and
                    services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkingProcess