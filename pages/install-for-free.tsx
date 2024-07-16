import PageTitle from '../components/PageTitle';
import Head from 'next/head';
import Link from 'next/link';

const Index = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'Install For Free';
  const boardImage =
    '/img/content/triple-adapter-with-letters-S-M-A-for-orientation.webp';
  // const { state } = useContext(StoreContext);

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

      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        links={[{ path: '/', title: 'Home' }]}
        pageTitle={pageTitle}
        pageUrl="/install-for-free"
      />

     <section className='container'>
      <div className='row'>
        {/* How to install */}
        <div className=" mb-4">
        <h5 className=" mb-1" >
           How to build your own device within 3 minutes to immediately sense
           what&apos;s going on.
           </h5>
                
            <strong className=" mb-1">
              Grab & plug your Triple (S, M & A) e.g. from your drawer or
              go shopping
              </strong>
        </div>
          
            <div className="col-lg-4 wow fadeIn  ">
            <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '280px',
                  }}
                >
              
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/Install/install-03.png"
                className="mt-1-6 wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
              <p style={{ padding: '10px' }}>
              <strong>1. Make Your Triple</strong>
              </p>
            </div>
            </div>

            
            <div className="col-lg-4 wow fadeIn  ">
            <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '280px',
                  }}
                >

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/Install/install-02.png"
                className="mt-1-9 wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
              <p style={{ padding: '10px' }}>
               <strong>2. Install one of the various prepared applications to your tripple</strong>
               </p>
            </div>
            </div>

            <div className="col-lg-4 mb-6 wow fadeIn ">

            <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '280px',
                  }}
                >
              
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/Install/install-01.png"
                className="mt-1-9 wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
              <p style={{ padding: '10px' }}>
              <strong>3. Enclose and place in your home</strong>
              </p>
            </div>
            </div>
      </div>
     </section>
    </>
  );
};

export default Index;
