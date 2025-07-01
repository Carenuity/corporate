import React from 'react';
import Head from 'next/head';
import { useContext } from 'react';
import PageTitle from '../../../components/PageTitle';
import { LanguageSwitchContext } from '../../../components/context/LanguageSwitch';
import Translatable from '../../../components/Translatable';
import Link from 'next/link';


const Page = ({ isMobile }: { isMobile: boolean }) => {


  const pageTitle = 'Documentation';
  const { state } = useContext(LanguageSwitchContext);
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
          <h4 className="mn-4">
            {state === 'en' && <>Documentation</>}
            {state === 'de' && <>Documentation</>}
            {/* {state === 'it' && <>Documentazione</>} */}
          </h4>
          <p className="mn-4">
            {state === 'en' && (
              <>
                <div className="d-flex align-items-center">
                  <i className="ti-check display-31 text-black"></i>
                  <a
                    href="/docs/datasheet.PDF"
                    target="_blank"
                    className="ms-2 link-success"
                    rel="noreferrer"
                  >
                    Datasheet V.1.3.0 [PDF]
                  </a>
                </div>

                <div className="d-flex align-items-center">
                  <i className="ti-check display-31 text-black"></i>
                  <a
                    href="/docs/declaration-of-conformity.PDF"
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
                    href="/docs/leaflet.PDF"
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
                    href="/docs/commisioning.PDF"
                    target="_blank"
                    className="ms-2 link-success"
                    rel="noreferrer"
                  >
                    Manual-for-Commissioning 1.0.3 [PDF]
                  </a>
                </div>

                <div className="d-flex align-items-center">
                  <i className="ti-check display-31 text-black"></i>
                  <a
                    href="../../serial-number"
                    target="_blank"
                    className="ms-2 link-success"
                    rel="noreferrer"
                  >
                    Serial-Number V2.0.1 [PDF]
                  </a>
                </div>
              </>
            )}
            {state === 'de' && (
              <>
                <div className="d-flex align-items-center">
                  <i className="ti-check display-31 text-black"></i>
                  <a
                    href="/docs/datasheet-de.PDF"
                    target="_blank"
                    className="ms-2 link-success"
                    rel="noreferrer"
                  >
                    Datenblatt V.1.3 [PDF]
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
                    href="/docs/leaflet.PDF"
                    target="_blank"
                    className="ms-2 link-success"
                    rel="noreferrer"
                  >
                    Beipackzettel V1.0.0 [PDF]
                  </a>
                </div>

                <div className="d-flex align-items-center">
                  <i className="ti-check display-31 text-black"></i>
                  <a
                    href="/docs/commisioning-de.PDF"
                    target="_blank"
                    className="ms-2 link-success"
                    rel="noreferrer"
                  >
                    Handbuch zur Inbetriebnahme 1.0.3 [PDF]
                  </a>
                </div>

                <div className="d-flex align-items-center">
                  <i className="ti-check display-31 text-black"></i>
                  <a
                    href="../../serial-number"
                    target="_blank"
                    className="ms-2 link-success"
                    rel="noreferrer"
                  >
                    Serien-Nummer V2.0.1 [PDF]
                  </a>
                </div>
              </>
            )}
            {/* {state === 'it' && (
            <>
              <div className="d-flex align-items-center">
                <i className="ti-check display-31 text-black"></i>
                <a
                  href="/docs/datasheet-it.PDF"
                  target="_blank"
                  className="ms-2 link-success"
                  rel="noreferrer"
                >
                  Scheda tecnica V.1.3.0 [PDF]
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
                  href="/docs/leaflet-it.PDF"
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
                  href="../../serial-number"
                  target="_blank"
                  className="ms-2 link-success"
                  rel="noreferrer"
                >
                  Numero di serie V2.0.1 [PDF]
                </a>
              </div>
            </>
          )} */}
          </p>
          <p style={{textAlign:"center"}}>
                            {!isMobile && (
                    <Link
                      href={'/install-for-free'}
                      target='blank'
                      className={'btn btn-lg btn-success rounded-pill'}
                    >
                      <span className="small">Install-for-Free </span>
                    </Link>
                  )}

                  {isMobile && (
                    <a
                      href={'/install-for-free'}
                      target='blank'
                      className={'btn btn-lg btn-success rounded-pill'}
                    >
                      <span className="small">
                        Install-for-Free{' '}
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
