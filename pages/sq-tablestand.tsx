import React from 'react';
import Head from 'next/head';
import PageTitle from '../components/PageTitle';
import { useContext } from 'react';
import { LanguageSwitchContext } from '../components/context/LanguageSwitch';
import Translatable from '../components/Translatable';
import Link from 'next/link';

const Page = ({ isMobile }: { isMobile: boolean }) => {

  const pageTitle = 'SQ-TableStand';
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
          <h4 className='mb-4'>SQ-TableStand</h4>

         {/* <div
                            className="e-card mb-6"
                            style={{
                              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                              maxHeight: '1070px',
                              padding: '20PX'
                            }}
                          > */}
        <div className='row'>
            {/* <div className="col-md-3 mb-4"> */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                  {/* <img
                    src="/img/content/sq-tablestand/slide4.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible', */}
                    {/* //   height: '360px', */}
                      {/* animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />
            </div> */}

            <div className=" mb-4">
<p>
            {state === 'en' && <>
            
            The SQ-TableStand is an accessory for the Carenuity SQ-Panel, a compact touchscreen device for air quality and presence detection. It monitors
            indoor environmental conditions such as temperature, humidity, air pressure, air quality, CO₂ levels and TVOCs 
            (Total Volatile Organic Compounds) and detects human presence, meaning it can distinguish between pets and people.
            The SQ-TableStand allows the SQ-Panel to 
            be placed securely on flat surfaces like desks, shelves, or countertops, offering a convenient alternative to wall mounting. 
            This makes it ideal for flexible and temporary setups, such as in home offices, bedrooms, children&apos;s rooms, or rental 
            properties where drilling into walls may not be feasible. In addition to its functional support, the stand maintains the modern, 
            minimal aesthetic of the device, blending well with various interior styles. Overall, the SQ-Panel Stand enhances the usability 
            of the SQ-Panel by enabling easy relocation and stable positioning, ensuring optimal air quality monitoring wherever it&apos;s needed.
            </>}
            
            {state === 'de' && <>
                    
                    Der SQ-TableStand ist Zubehör für das Carenuity SQ-Panel, ein kompaktes Touchscreen-Gerät für die Luftqualitäts und Anwesendheitserkennung. Es überwacht
            im Einzelnen die Umgebungsbedingungen in Innenräumen wie Temperatur, Luftfeuchtigkeit, Luftdruck, Luftqualität, CO₂-Werte und TVOCs 
            (Total Volatile Organic Compounds) und erkennt menschliche Anwesenheit, kann also Haustiere und Menschen unterscheiden. Der Tischsockel SQ-TableStand, ermöglicht die Montage des Panels 
            kann sicher auf ebenen Flächen wie Schreibtischen, Regalen oder Arbeitsplatten platziert werden und bietet eine praktische Alternative zur Wandmontage. 
            Dadurch eignet es sich ideal für flexible und temporäre Aufstellungen, beispielsweise im Homeoffice, im Schlafzimmer, im Kinderzimmer oder zur Vermietung 
            Objekte, bei denen das Bohren in Wände möglicherweise nicht möglich ist. Neben seiner funktionalen Unterstützung behält der Ständer das moderne, 
            Minimale Ästhetik des Geräts, das sich gut in verschiedene Einrichtungsstile einfügt. Insgesamt erhöht der SQ-Panel Stand die Benutzerfreundlichkeit 
            des SQ-Panels, indem es eine einfache Verlagerung und stabile Positionierung ermöglicht und so eine optimale Luftqualitätsüberwachung überall dort gewährleistet, wo sie benötigt wird.
                    </>}
            

          </p>
            </div>

        </div>
                {/* </div> */}
          

            {state === 'en' && <>
          
                      <h4>Shop with us</h4>
                      <div className="row">
                        <div className="col-md-4 mb-4">
                          <div
                            className="e-card"
                            style={{
                              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                              maxHeight: '1070px',
                            }}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src="/img/content/sq-tablestand/sq-stand.jpeg"
                              className="wow fadeInUp"
                              data-wow-delay="100ms"
                              alt="..."
                              style={{
                                visibility: 'visible',
                                width: '420px',
                                animationDelay: '100ms',
                                animationName: 'fadeIn',
                              }}
                            />
          
                            <div style={{ padding: '10px' }}>
                              <h6 className="text-success">
                               Carenuity SQ-Tabelstand - Mobile Table Stand for SQ-Panel with USB-C
                              </h6>
                              <p>
                               The Carenuity SQ-Tablestand transforms the SQ-Panel into a flexible, mobile air quality monitoring solution -
                                ideal for dynamic environments like care rooms, workspaces...
                              </p>
                              <div className="row">
                                <p className="col-md-3 mb-4">
                                  {!isMobile && (
                                    <Link
                                      href={
                                        'https://www.chipglobe.shop/en/p/carenuity-sq-tabelstand-mobile-table-stand-for-sq-panel-with-usb-c'
                                      }
                                      target="_blank"
                                      className={'btn btn-sm btn-success rounded-pill'}
                                    >
                                      <span className="small"> Buy Now</span>
                                    </Link>
                                  )}
          
                                  {isMobile && (
                                    <a
                                      href={
                                        'https://www.chipglobe.shop/en/p/carenuity-sq-tabelstand-mobile-table-stand-for-sq-panel-with-usb-c'
                                      }
                                      target="_blank"
                                      className={'btn btn-sm btn-success rounded-pill'}
                                      rel="noreferrer"
                                    >
                                      <span className="small">
                                        Buy Now{' '}
                                        {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                                      </span>
                                    </a>
                                  )}
                                </p>
                               
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
          </>}
          
          
          {state === 'de' && <>
           <div>
                      <h4>Kaufen Sie bei uns ein</h4>
                      <div className="row">
                        <div className="col-md-4 mb-4">
                          <div
                            className="e-card"
                            style={{
                              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                              maxHeight: '1070px',
                            }}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src="/img/content/sq-tablestand/sq-stand.jpeg"
                              className="wow fadeInUp"
                              data-wow-delay="100ms"
                              alt="..."
                              style={{
                                visibility: 'visible',
                                width: '420px',
                                animationDelay: '100ms',
                                animationName: 'fadeIn',
                              }}
                            />
          
                            <div style={{ padding: '10px' }}>
                              <h6 className="text-success">
                            Carenuity SQ-Tablestand - Tischständer für mobiles SQ-Panel mit USB-C
                              </h6>
                              <p>
                              Der Carenuity SQ-Tablestand verwandelt das SQ-Panel in eine flexibel einsetzbare, mobile Lösung -
                               ideal für wechselnde Einsatzorte, Pflegebereiche, Schulungen...{' '}
                              </p>
                              <div className="row">
                                <p className="col-md-4 mb-4">
                                  {!isMobile && (
                                    <Link
                                      href={
                                        'https://www.chipglobe.shop/p/carenuity-sq-tablestand-tischstaender-fuer-mobiles-sq-panel-mit-usb-c'
                                      }
                                      target="_blank"
                                      className={'btn btn-sm btn-success rounded-pill'}
                                    >
                                      <span className="small"> Jetzt kaufen</span>
                                    </Link>
                                  )}
          
                                  {isMobile && (
                                    <a
                                      href={
                                        'https://www.chipglobe.shop/p/carenuity-sq-tablestand-tischstaender-fuer-mobiles-sq-panel-mit-usb-c'
                                      }
                                      target="_blank"
                                      className={'btn btn-sm btn-success rounded-pill'}
                                      rel="noreferrer"
                                    >
                                      <span className="small">
                                        Jetzt kaufen{' '}
                                        {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                                      </span>
                                    </a>
                                  )}
                                </p>
                               
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
          </>}
        </div>
      </section>
    </>
  );
};

export default Page;
