import React from 'react'

const PageNavigations = () => {
  return (
    <>
      <div className='col-12 wow fadeIn' data-wow-delay='600ms'>
        <div className='page-navigation mb-6 mt-2-9'>
          <div className='prev-page'>
            <div className='page-info'>
              <a href='#!'>
                <span className='image-prev'>
                  <img src='img/blog/prev-blog.jpg' alt='...' />
                </span>
                <div className='prev-link-page-info'>
                  <h4 className='prev-title'>
                    15 awesome things you can learn from web security.
                  </h4>
                  <span className='date-details'>
                    <span className='create-date'>May 16, 2022</span>
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className='next-page'>
            <div className='page-info'>
              <a href='#!'>
                <div className='next-link-page-info'>
                  <h4 className='next-title'>
                    How digital marketing can increase your profit!
                  </h4>
                  <span className='date-details'>
                    <span className='create-date'>May 29, 2022</span>
                  </span>
                </div>
                <span className='image-next'>
                  <img src='img/blog/next-blog.jpg' alt='...' />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNavigations