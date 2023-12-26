import { useContext } from 'react';
import { StoreContext } from './context/Store';

const MicrocontrollerDetails = ({
  name,
  id,
  description,
  imageUrl,
  imageHighlight,
  disclaimer,
  externalUrl,
}: {
  name: string;
  id: string;
  description: string;
  imageUrl: string;
  imageHighlight: string;
  disclaimer?: string;
  externalUrl?: string;
}) => {
  const { state } = useContext(StoreContext);
  return (
    <>
      <section className="py-4">
        <div className="container px-0">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="ps-xl-1-4">
                <div
                  className="section-title left mb-1-9 wow fadeInUp"
                  data-wow-delay="200ms"
                  style={{
                    visibility: 'visible',
                    animationDelay: '200ms',
                    animationName: 'fadeInUp',
                  }}
                >
                  <span className="sm-title">Microcontroller</span>
                  <h2 className="mb-0 h1">{name}</h2>
                </div>
                <div
                  className="wow fadeInUp"
                  data-wow-delay="200ms"
                  style={{
                    visibility: 'visible',
                    animationDelay: '200ms',
                    animationName: 'fadeInUp',
                  }}
                >
                  <p className="mb-3">{description}</p>
                </div>
                {externalUrl && (
                  <div
                    className="team-details-social wow fadeInUp"
                    data-wow-delay="200ms"
                    style={{
                      visibility: 'visible',
                      animationDelay: '200ms',
                      animationName: 'fadeInUp',
                    }}
                  >
                    <iframe
                      style={{
                        borderStyle: 'none',
                        width: '100%',
                        height: '30em',
                      }}
                      src={externalUrl}
                    ></iframe>
                  </div>
                )}

                {disclaimer && externalUrl && (
                  <div
                    className="mb-1-9 mb-lg-2-9 wow fadeInUp"
                    data-wow-delay="200ms"
                    style={{
                      visibility: 'visible',
                      animationDelay: '200ms',
                      animationName: 'fadeInUp',
                    }}
                  >
                    <div className="border-start border-warning border-5 ps-3">
                      <h4 className="h5 mb-1-9 text-warning">Disclaimer</h4>
                      <div className="row">
                        <div className="col-lg-12 mb-4 mb-lg-0">
                          <p className="mb-3">{disclaimer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div
              className="col-lg-3 col-md-8 mb-2-9 mb-lg-0 wow fadeInUp"
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeInUp',
              }}
            >
              <div className="primary-shadow">
                <div className="team-single-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="..." src={imageUrl} />
                </div>
                <div className="p-1-9">
                  <ul className="list-style1 ps-0 mb-0">
                    <li className="font-weight-700 text-dark">
                      {imageHighlight}
                    </li>
                    <li className="font-weight-700 text-dark">
                      <a
                        href={state.urls.webFlash}
                        className="btn-style2 px-3 small w-100 text-center"
                      >
                        <span>Install For Free</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MicrocontrollerDetails;
