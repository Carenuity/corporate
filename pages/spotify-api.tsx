import Head from 'next/head';
import React from 'react';
import PageTitle from '../components/PageTitle';
import Link from 'next/link';


const SpotifyApi = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'Get Spotify API Key';
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
        links={[
          { path: '/', title: 'Home' },
          { path: '/sq-labs', title: 'Team' },
        ]}
        pageTitle={pageTitle}
        pageUrl="/AI-Program-Kenya"
      />

      <section className="overflow-hidden py-3">
        <div className="container position-relative z-index-3">
          <div className="row align-items-center about-style-03">
            <div
              className="col-lg-7 wow fadeIn"
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <h2 className="text-muted border-bottom pb-2 mb-3">
                How to get the Spotify API Key
              </h2>
              <p>
                With this product you can remotely control your currently active
                Spotify player (smartphone, web player, dedicated device, etc)
                with a C3-Mini. After the initial authentication and
                authorization with the Spotify API the product will display the
                artwork from the currently playing song and will additionally
                display the title and the artist&apos;s name.
              </p>
              <p>
                Since the Squared Triple Adapter with 2.8 Inch Display comes
                with a touch feature you also can pause the song, continue to
                play and jump to the next and previous song. And if that is not
                enough you are welcome to ask us for getting a software code
                modification on our WebFlashing platform, e.g. for controlling
                the volume or other features offered by the Spotify API.
              </p>
              <p>
                In the below demo video you see the Squared Triple Adapter with
                2.8 Inch Display on the left and for reference an Samsung
                Smartphone on the right. Note: The music is played by the
                smartphone, not the Squared Triple Adapter with 2.8 Inch
                Display, which acts as a remote for your phone.
              </p>
            </div>
            <div
              className="col-lg-5 wow fadeIn mb-8"
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeIn',
              }}
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/xKmXMUoo8ps?si=BiOEZI3YQE6WCdaV"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <p className="my-4 border-5 border-start border-success ps-3 h5">
                More page content on{' '}
                <a href="https://github.com/ThingPulse/esp8266-spotify-remote#get-access-to-the-spotify-api">
                  How to get the Spotify API key
                  <i className="fa-solid fa-up-right-from-square ms-2 small me-1 text-success"></i>
                </a>{' '}
              </p>
            </div>


             <p className=" " style={{textAlign:"center"}}>
                {!isMobile && (
                  <Link
                    href={'https://solutions.carenuity.com/ '}
                    target='blank'
                    className={'btn btn-lg btn-success rounded-pill'} // "btn-style2 primary wow fadeInUp p-3"
                    style={{ color: 'white' }}
                  >
                    <span className="small">
                      Enjoy more free Apps on Solution Builder
                      
                    </span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'https://solutions.carenuity.com/'}
                    target='blank'
                    className={'btn btn-lg btn-success rounded-pill'}
                    style={{ color: 'white' }}
                  >
                    <span className="small">
                     Enjoy more free Apps on Solution Builder
                     
                      {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                    </span>
                  </a>
                )}
              </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpotifyApi;
