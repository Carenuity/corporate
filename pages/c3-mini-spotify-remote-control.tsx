import Head from 'next/head';
import Spinner from '../components/Spinner';
import ServiceHOC from '../components/hoc/ServiceHOC';
import { servicesUrls } from '../utils/constants';
import dynamic from 'next/dynamic';

const InstaEmbedding = dynamic(() => import('../components/InstaEmbedding'), {
  ssr: false,
  loading: () => <Spinner />,
});

const Index = () => {
  return (
    <>
      <Head>
        <title>Spotify Remote Control</title>
      </Head>
      <div className='about-style-01'>
        <div className='container'>
          <div className='row align-items-xl-center mt-n7'>
            <div className='col-lg-6 mt-7 wow fadeIn'>
              <div className='ps-lg-1-9 ps-xl-7'>
                <div className='mb-1-9 position-relative'>
                  <span className='text-primary text-uppercase small letter-spacing-4 d-block mb-2 font-weight-600 wow fadeInUp'>
                    Spotify Remote Control
                  </span>
                </div>
                <p
                  className='mb-1-9 border-bottom pb-1-9 wow fadeInUp'
                  data-wow-delay='300ms'
                >
                  Grab that <strong>C3-Mini™ Spotify Remote Control Box</strong>{' '}
                  and play the songs from your Spotify Playlist, all
                  wall-mounted so that you always find it at the same spot.
                </p>
              </div>
            </div>
            <div className='col-lg-6 mt-7'>
              <div className='position-relative z-index-9'>
                <div className='row'>
                  <div className='col-6 wow fadeInDown' data-wow-delay='200ms'>
                    <InstaEmbedding />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 mt-7 border-start border-5 border-warning ps-4'>
              Disclaimer: Carenuity does not consider the C3-Mini™ Weather-Panel
              a finished product and therefore the C3-Mini™ Weather-Panel may
              not yet comply with some requirements applicable to finished
              products, including, but not limited to recycling (WEEE), CE, UL,
              restricted substances (ROHS), FCC, FEE, and electromagnetic
              compatibility regulations. Note: C3-Mini™ is a trademark of
              ChipGlobe GmbH.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceHOC(Index, {
  servicesCategoryUrls: servicesUrls.standard,
  pageUrl: '/c3-mini-spotify-remote-control',
  pageTitle: 'C3-Mini™ Spotify Remote Control',
  serviceCategory: 'Budget Friendly Not Only For Students',
});
