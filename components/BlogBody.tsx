import React from 'react'
import BlogFooter from './BlogFooter';

const BlogBody = ({
  hasFooter,
  date,
  bannerUrl,
  body,
}: {
  body: any;
  hasFooter: boolean;
  date?: string;
  bannerUrl?: string;
}) => {
  return (
    <>
      <div className='col-lg-12'>
        <article className='card border-0 primary-shadow'>
          {bannerUrl && (
            <img
              src={bannerUrl}
              alt='...'
              className='wow fadeIn'
              data-wow-delay='200ms'
            />
          )}
          <div className='card-body p-1-6 p-sm-1-9'>
            {date && (
              <ul
                className='list-unstyled mb-3 wow fadeIn'
                data-wow-delay='200ms'
              >
                <li className='d-inline-block me-3'>
                  <a href='#!' className='display-31'>
                    <i className='ti-calendar me-1 text-primary'></i> {date}
                  </a>
                </li>
                {/* <li className='d-inline-block'>
                  <a href='#!' className='display-31'>
                    <i className='fas fa-comment me-1 text-primary'></i> 10
                    Comment
                  </a>
                </li> */}
              </ul>
            )}

            {body}

            {hasFooter && <BlogFooter />}
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogBody