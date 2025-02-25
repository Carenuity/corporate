import { useContext, useRef, useEffect } from 'react';
import { LanguageSwitchContext } from './context/LanguageSwitch';

const Banner = ({
  bannerImage,
  slogan,
  // eslint-disable-next-line no-unused-vars
  isMobile,
  hasKickStarter,
}: {
  bannerImage: string;
  slogan: string;
  isMobile: boolean;
  hasKickStarter?: boolean;
}) => {
  const { state } = useContext(LanguageSwitchContext);
  const kickstarterRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (hasKickStarter) {
      if (kickstarterRef.current /* && state === 'de'*/) {
        kickstarterRef.current.click();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <>
      <section
        className={`primaryCallToAction jarallax p-0 top-position1 full-screen video-banner dark-overlay`}
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
                  {slogan}
                </h1>

                {/* Kickstarter button */}
                <button
                  ref={kickstarterRef}
                  type="button"
                  className="btn-style1 border-0 medium invisible"
                  data-bs-toggle="modal"
                  data-bs-target="#grid"
                >
                  <span>Grid modal</span>
                </button>

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
