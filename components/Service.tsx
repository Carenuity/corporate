import React from 'react'

const Service = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => {
  return (
    <>
      <div
        className='col-md-6 col-lg-4 mt-1-9 wow fadeInUp'
        data-wow-delay='200ms'
      >
        <div className='features-box bg-white shadow border-radius-3 p-1-6 p-xl-1-9 h-100'>
          <div className='d-flex'>
            <div className='flex-shrink-0'>
              {/* <img src={iconUrl} alt='...' /> */}
              <i
                className={`${icon} me-2 display-4 `}
                style={{ color: '#55b363' }}
              ></i>
            </div>
            <div className='flex-grow-1 ps-4'>
              <h3 className='h5'>
                <a href='services.html'>{title}</a>
              </h3>
              <p className='mb-0'>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service