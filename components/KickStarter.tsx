import Link from 'next/link';
import React, { useContext } from 'react';
import { LanguageSwitchContext } from './context/LanguageSwitch';

const KickStarter = () => {
  const defaultUrl =
    'https://www.kickstarter.com/projects/sq-panel/735960833?token=dd0fed1a';
  const { state } = useContext(LanguageSwitchContext);
  // const [url, setUrl] = useState(defaultUrl);

  // useEffect(() => {
  //   if (!window.document) {
  //     return;
  //   }

  //   switch (state) {
  //     case 'de':
  //       setUrl(
  //         'https://www.kickstarter.com/projects/sq-panel/endlich-ein-einfach-bedienbares-sensor-display-in-matter'
  //       );
  //       break;

  //     case 'en':
  //       setUrl(defaultUrl);
  //       break;
  //   }
  // }, [state]);

  return (
    <>
      <div
        className="modal fade bg-white bg-opacity-50"
        id="grid"
        tabIndex={-1}
        aria-labelledby="gridLabel"
        style={{ display: 'none' }}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header p-0 position-relative border-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/KICKSTARTER.png"
                alt="kickstarter"
                className="position-absolute w-25 top-0 end-0 mt-3 me-3"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/KICKSTARTER.png"
                alt="kickstarter"
                className="position-absolute w-25 bottom-0 start-0 ms-3"
              />
              <video
                src="/videos/content/sq-panel-latest.mp4"
                autoPlay
                playsInline
                muted
                loop
                // controls
                className="img-fluid rounded-top"
              ></video>
              {/* <h5 className="modal-title" id="gridLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button> */}
            </div>
            <div className="modal-body pt-0 px-0 bg-white">
              <div style={{ overflow: 'hidden' }} className="">
                <svg
                  preserveAspectRatio="none"
                  viewBox="0 0 1200 120"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    fill: '#000000',
                    width: '164%',
                    height: 75,
                    transform: 'scaleX(-1)',
                  }}
                >
                  <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
                </svg>
              </div>
              <div className="position-absolute top-0 start-0 end-0 d-flex justify-content-center">
                <Link
                  href={defaultUrl}
                  target="_blank"
                  className="btn btn-lg btn-success rounded-pill shadow"
                >
                  {state === 'en' && '10% Discount'}
                  {state === 'de' && '10% Rabatt'}
                  {/* Mehr Infos */}
                </Link>
              </div>
              <div className="ps-3 fw-bold fs-3 hstack gap-2">
                <span className="border-success border-bottom text-uppercase text-nowrap">
                  SQ-PANEL
                </span>{' '}
                <span className="text-success small text-center">
                  {state === 'en' && (
                    <>
                      Early Bird Offer
                      {/* An investment <br /> in health! ✨ */}
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      Frühbucherangebot
                      {/* Ein Invest in <br /> Gesundheit! ✨ */}
                    </>
                  )}
                </span>
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/SQ_PANEL.jpeg"
                className="position-absolute end-0 top-0 mt-3 me-2"
                style={{ width: '25%', height: 'auto' }}
                alt="download app qr code"
              />
            </div>
            <div className="modal-footer border-none p-0 m-0">
              <div
                style={{ overflow: 'hidden' }}
                className="w-100 m-0 rounded-bottom"
              >
                <svg
                  preserveAspectRatio="none"
                  viewBox="0 0 1200 120"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    fill: '#003e14',
                    width: '185%',
                    height: 45,
                    transform: 'rotate(180deg)',
                  }}
                >
                  <path
                    d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
                    opacity=".25"
                  />
                  <path
                    d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
                    opacity=".5"
                  />
                  <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
                </svg>
              </div>
              {/* <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KickStarter;
