import Link from 'next/link';
import { useContext } from 'react';
import { LanguageSwitchContext } from './context/LanguageSwitch';

const Banner = ({
  bannerImage,
  slogan,
  isMobile,
}: {
  bannerImage: string;
  slogan: string;
  isMobile: boolean;
}) => {
  const { state } = useContext(LanguageSwitchContext);

  return (
    <>
      <section
        className="jarallax p-0 top-position1 full-screen video-banner dark-overlay"
        data-overlay-dark="65"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
        data-jarallax
        data-speed="0.8"
      >
        <div className="container-fluid d-flex flex-column pt-5 pb-2 py-sm-8 py-md-0 position-relative z-index-9">
          <div className="row align-items-center justify-content-center min-vh-100">
            <div className="col-md-9 col-lg-7 col-xl-8 col-xxl-6 text-center py-5">
              <div className="banner-content text-center">
                <h1 className="text-white font-weight-800 display-4 display-xl-3 mb-2-9">
                  {state === 'en' && slogan}
                  {state === 'de' && <>Immobilienelektronik ist wichtig</>}
                </h1>

                {/* {!isMobile && (
                  <Link
                    href={'/install-for-free'}
                    className={'btn btn-lg btn-success rounded-pill shadow'} // "btn-style1 animated fadeInUp"
                  >
                    <span className="animated fadeInUp">Install For Free</span>
                  </Link>
                )} */}

                {/* {isMobile && (
                  <a
                    href={'/install-for-free'}
                    className={'btn btn-lg btn-success rounded-pill shadow'} // "btn-style1 animated fadeInUp"
                  >
                    <span className="animated fadeInUp">Install For Free</span>
                  </a>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
