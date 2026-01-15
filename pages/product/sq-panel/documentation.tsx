import React, { useState } from 'react';
import Head from 'next/head';
import { useContext } from 'react';
import PageTitle from '../../../components/PageTitle';
import { LanguageSwitchContext } from '../../../components/context/LanguageSwitch';
import Translatable from '../../../components/Translatable';
import Link from 'next/link';

const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'Documentation';
  const { state } = useContext(LanguageSwitchContext);
  const [italy, setItaly] = useState(false);

  return (
    <>
      <Translatable />
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
        links={[{ path: '/', title: '' }]}
        pageTitle={pageTitle}
        pageUrl=""
      />

      <section className="pt-4">
        <div className="container">
          <div className="row  mb-8">
            <div className="col-lg-9">
              <h4 className="">
                {state === 'en' && !italy && <>SQ-Panel Documentation</>}
                {state === 'de' && !italy && <>SQ-Panel Documentation</>}
                {italy && <>SQ-Panel Documentazione</>}
              </h4>
              <p className="">
                {state === 'en' && !italy && (
                  <>
                    <div className="d-flex align-items-center">
                      <i className="ti-check display-31 text-black"></i>
                      <a
                        href="/docs/datasheet/Datasheet_SQ-Panel_V1.1.3.pdf"
                        target="_blank"
                        className="ms-2 link-success"
                        rel="noreferrer"
                      >
                        Datasheet_SQ-Panel_V1.1.3 [PDF]
                      </a>
                    </div>

                    <div className="d-flex align-items-center">
                      <i className="ti-check display-31 text-black"></i>
                      <a
                        href="/docs/datasheet/Datasheet_SQ-Power_V1.1.3.pdf"
                        target="_blank"
                        className="ms-2 link-success"
                        rel="noreferrer"
                      >
                        Datasheet_SQ-Power_V1.1.3 [PDF]
                      </a>
                    </div>

                    <div className="d-flex align-items-center">
                      <i className="ti-check display-31 text-black"></i>
                      <a
                        href="/docs/datasheet/Datasheet_SQ-Connector_V1.1.3.pdf"
                        target="_blank"
                        className="ms-2 link-success"
                        rel="noreferrer"
                      >
                        Datasheet_SQ-Connector_V1.1.3 [PDF]
                      </a>
                    </div>

                    <div className="d-flex align-items-center">
                      <i className="ti-check display-31 text-black"></i>
                      <a
                        href="/docs/declaration-of-conformity.pdf"
                        target="_blank"
                        className="ms-2 link-success"
                        rel="noreferrer"
                      >
                        Declaration-of-Conformity V.1.3.0 [PDF]
                      </a>
                    </div>

                    <div className="d-flex align-items-center">
                      <i className="ti-check display-31 text-black"></i>
                      <a
                        href="/docs/leaflet/leaflet.pdf"
                        target="_blank"
                        className="ms-2 link-success"
                        rel="noreferrer"
                      >
                        Leaflet V1.0.0 [PDF]
                      </a>
                    </div>

                    <div className="d-flex align-items-center">
                      <i className="ti-check display-31 text-black"></i>
                      <a
                        href="/docs/Commissioning-en.pdf"
                        target="_blank"
                        className="ms-2 link-success"
                        rel="noreferrer"
                      >
                        Manual-for-Commissioning 1.1.0 [PDF]
                      </a>
                    </div>

                    <div className="d-flex align-items-center">
                      <i className="ti-check display-31 text-black"></i>
                      <a
                        href="/product/serial-number"
                        target="_blank"
                        className="ms-2 link-success"
                        rel="noreferrer"
                      >
                        Serial-Number V2.0.1 [PDF]
                      </a>
                    </div>

                    <div className="d-flex align-items-center">
                      <i className="ti-check display-31 text-black"></i>
                      <a
                        href="/docs/sq-panel-user-guide.pdf"
                        target="_blank"
                        className="ms-2 link-success"
                        rel="noreferrer"
                      >
                        SQ-Panel user guide [PDF]
                      </a>
                    </div>
                  </>
                )}

                {state === 'de' && !italy && (
                  <>
                    <div className="d-flex align-items-center">
                      <i className="ti-check display-31 text-black"></i>
                      <a
                        href="/docs/datasheet/Datasheet_SQ-Panel_V1.1.3_de.pdf"
                        target="_blank"
                        className="ms-2 link-success"
                        rel="noreferrer"
                      >
                        Datasheet_SQ-Panel_V1.1.3 [PDF]
                      </a>
                    </div>

                    <div className="d-flex align-items-center">
                      <i className="ti-check display-31 text-black"></i>
                      <a
                        href="/docs/datasheet/Datasheet_SQ-Power_V1.1.3_de.pdf"
                        target="_blank"
                        className="ms-2 link-success"
                        rel="noreferrer"
                      >
                        Datasheet_SQ-Power_V1.1.3 [PDF]
                      </a>
                    </div>

                    <div className="d-flex align-items-center">
                      <i className="ti-check display-31 text-black"></i>
                      <a
                        href="/docs/datasheet/Datasheet_SQ-Connector_V1.1.3_de.pdf"
                        target="_blank"
                        className="ms-2 link-success"
                        rel="noreferrer"
                      >
                        Datasheet_SQ-Connector_V1.1.3 [PDF]
                      </a>
                    </div>

                    <div className="d-flex align-items-center">
                      <i className="ti-check display-31 text-black"></i>
                      <a
                        href="/docs/declaration-de.PDF"
                        target="_blank"
                        className="ms-2 link-success"
                        rel="noreferrer"
                      >
                        Konformitätserklärung V.1.3.0 [PDF]
                      </a>
                    </div>

                    <div className="d-flex align-items-center">
                      <i className="ti-check display-31 text-black"></i>
                      <a
                        href="/docs/leaflet/leaflet_de.pdf"
                        target="_blank"
                        className="ms-2 link-success"
                        rel="noreferrer"
                      >
                        Beipackzettel V1.0.1 [PDF]
                      </a>
                    </div>

                    <div className="d-flex align-items-center">
                      <i className="ti-check display-31 text-black"></i>
                      <a
                        href="/docs/Commissioning-de.PDF"
                        target="_blank"
                        className="ms-2 link-success"
                        rel="noreferrer"
                      >
                        Handbuch zur Inbetriebnahme 1.1.0 [PDF]
                      </a>
                    </div>

                    <div className="d-flex align-items-center">
                      <i className="ti-check display-31 text-black"></i>
                      <a
                        href="/product/serial-number"
                        target="_blank"
                        className="ms-2 link-success"
                        rel="noreferrer"
                      >
                        Serien-Nummer V2.0.1 [PDF]
                      </a>
                    </div>
                  </>
                )}

                {italy && (
                  <>
                    <div className="d-flex align-items-center">
                      <i className="ti-check display-31 text-black"></i>
                      <a
                        href="/docs/datasheet/Datasheet_SQ-Panel_V1.1.3_it.pdf"
                        target="_blank"
                        className="ms-2 link-success"
                        rel="noreferrer"
                      >
                        Scheda tecnica_SQ-Panel_V1.1.3 [PDF]
                      </a>
                    </div>

                    <div className="d-flex align-items-center">
                      <i className="ti-check display-31 text-black"></i>
                      <a
                        href="/docs/datasheet/Datasheet_SQ-Power_V1.1.3_it.pdf"
                        target="_blank"
                        className="ms-2 link-success"
                        rel="noreferrer"
                      >
                        Scheda tecnica_SQ-Power_V1.1.3 [PDF]
                      </a>
                    </div>

                    <div className="d-flex align-items-center">
                      <i className="ti-check display-31 text-black"></i>
                      <a
                        href="/docs/datasheet/Datasheet_SQ-Connector_V1.1.3_it.pdf"
                        target="_blank"
                        className="ms-2 link-success"
                        rel="noreferrer"
                      >
                        Scheda tecnica_SQ-Connector_V1.1.3 [PDF]
                      </a>
                    </div>

                    <div className="d-flex align-items-center">
                      <i className="ti-check display-31 text-black"></i>
                      <a
                        href="/docs/declaration-it.PDF"
                        target="_blank"
                        className="ms-2 link-success"
                        rel="noreferrer"
                      >
                        Dichiarazione di conformità V.1.3.0 [PDF]
                      </a>
                    </div>

                    <div className="d-flex align-items-center">
                      <i className="ti-check display-31 text-black"></i>
                      <a
                        href="/docs/leaflet/leaflet_it.pdf"
                        target="_blank"
                        className="ms-2 link-success"
                        rel="noreferrer"
                      >
                        Foglio illustrativo V1.0.0 [PDF]
                      </a>
                    </div>

                    <div className="d-flex align-items-center">
                      <i className="ti-check display-31 text-black"></i>
                      <a
                        href="/docs/commisioning-it.PDF"
                        target="_blank"
                        className="ms-2 link-success"
                        rel="noreferrer"
                      >
                        Manuale di messa in servizio 1.0.3 [PDF]
                      </a>
                    </div>

                    <div className="d-flex align-items-center">
                      <i className="ti-check display-31 text-black"></i>
                      <a
                        href="/product/serial-number"
                        target="_blank"
                        className="ms-2 link-success"
                        rel="noreferrer"
                      >
                        Numero di serie V2.0.1 [PDF]
                      </a>
                    </div>
                  </>
                )}
              </p>
            </div>
            <div className="col-lg-3" style={{ textAlign: 'right' }}>
              <label className={'btn btn-sm btn-success rounded-pill'}>
                {state === 'en' && !italy && <>Read In Italian</>}
                {state === 'de' && !italy && <>Auf Italienisch lesen</>}
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                {italy && <>Spegni l'italiano</>}

                <input
                  type="checkbox"
                  className="d-none"
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setItaly(checked);
                  }}
                />
              </label>
            </div>
          </div>
          <p style={{ textAlign: 'center' }}>
            {!isMobile && (
              <Link
                href={'/sq-panel'}
                target="blank"
                className={'btn btn-lg btn-success rounded-pill'}
              >
                <span className="small">SQ-Panel</span>
              </Link>
            )}

            {isMobile && (
              <a
                href={'/sq-panel'}
                target="blank"
                className={'btn btn-lg btn-success rounded-pill'}
              >
                <span className="small">
                  SQ-Panel{' '}
                  {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                </span>
              </a>
            )}
          </p>
        </div>
      </section>
    </>
  );
};

export default Page;
