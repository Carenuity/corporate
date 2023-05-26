import ServiceHOC from '../components/hoc/ServiceHOC';
import { servicesUrls } from '../utils/constants';
import dynamic from 'next/dynamic';

const InstaEmbedding = dynamic(() => import('../components/InstaEmbedding'), {
 ssr: false,
 loading: () => <p>Loading Video...</p>
});

const Index = () => {
  return (
    <>
      <div className='about-style-01'>
        <div className='container'>
          <div className='row align-items-xl-center mt-n7'>
            <div className='col-lg-6 mt-7 wow fadeIn'>
              <div className='ps-lg-1-9 ps-xl-7'>
                <div className='mb-1-9 position-relative'>
                  <span className='text-primary text-uppercase small letter-spacing-4 d-block mb-2 font-weight-600 wow fadeInUp'>
                    Weather Panel
                  </span>
                </div>
                <p
                  className='mb-1-9 border-bottom pb-1-9 wow fadeInUp'
                  data-wow-delay='300ms'
                >
                  Grab that{' '}
                  <strong className='text-dark'>
                    C3-Mini™ Weather-Panel Box
                  </strong>{' '}
                  and build your own Weather Forecast device, by combining your
                  C3-Mini with that large panel.
                </p>
              </div>
            </div>
            <div className='col-lg-6 mt-7'>
              <div className='position-relative z-index-9'>
                <div className='row'>
                  <div className='col-6 wow fadeInDown' data-wow-delay='200ms'>
                    {/* <div className='image-hover position-relative overflow-hidden'>
                      <img src='img/content/about-05.jpg' alt='...' />
                    </div> */}
                    <InstaEmbedding />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='position-absolute top-5 left-n5 ani-top-bottom d-none d-md-block'>
          <img src='/img/bg/bg-01.png' alt='...' />
        </div> */}
      </div>
    </>
  );
};

export default ServiceHOC(Index, {
  servicesCategoryUrls: servicesUrls.standard,
  pageUrl: '/c3-mini-weather-panel',
  pageTitle: 'C3-Mini™ Weather-Panel',
  serviceCategory: 'Budget Friendly Not Only For Students',
});
