import React from 'react';
import Head from 'next/head';
import { useContext } from 'react';
import PageTitle from '../../../components/PageTitle';
import { LanguageSwitchContext } from '../../../components/context/LanguageSwitch';
import Translatable from '../../../components/Translatable';
import Link from 'next/link';

const Page = ({ isMobile }: { isMobile: boolean }) => {

  const pageTitle = 'JUNG Designer Frame';
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
            {state === 'en' && (
              <>
              JUNG LS 990 Designer Frame for the SQ-Panel - Single and Double Frames in Black or White

              </>
            )}
            {state === 'de' && (
              <>
                JUNG LS 990 Designer-Rahmen für das SQ-Panel - Einzel- und Doppelrahmen in Schwarz oder Weiß

              </>
            )}
          </h4>

          <p className="mn-4">
            {state === 'en' && (
              <>
              Give your SQ-Panel the perfect frame - with the iconic JUNG LS 990 design. Whether in elegant 
              black or classic white, as a single or double frame, these premium design frames combine timeless 
              aesthetics with functional precision and integrate seamlessly into modern living and working environments.


              </>
            )}
            {state === 'de' && (
              <>
              Verleihen Sie Ihrem SQ-Panel den perfekten Rahmen - mit dem ikonischen JUNG LS 990 Design. Ob in elegantem 
              Schwarz oder klassischem Weiß, als Einzel- oder Doppelrahmen: Diese hochwertigen Designrahmen verbinden zeitlose 
              Ästhetik mit funktionaler Präzision und fügen sich nahtlos in moderne Wohn- und Arbeitsumgebungen ein.
  
              </>
            )}
          </p>

          <h4 className="mn-4">
            {state === 'en' && (
              <>
             
                Design Meets Function

              </>
            )}
            {state === 'de' && (
              <>
              Design trifft Funktion
 
              </>
            )}
          </h4>
          <p className="mn-4">
            {state === 'en' && (
              <>
              The LS 990 series by JUNG stands for clean lines, subtle elegance, and top-tier craftsmanship. 
              Inspired by Bauhaus principles, these frames provide a stylish enclosure for the SQ-Panel - and, 
              in the case of double frames, also for additional components such as light switches or sockets.


              </>
            )}
            {state === 'de' && (
              <>
               Die LS 990 Serie von JUNG steht für klare Linien, dezente Eleganz und höchste Verarbeitungsqualität. 
               Inspiriert vom Bauhaus-Stil, bieten die Rahmen eine stilvolle Einfassung für das SQ-Panel - und bei Bedarf auch 
               für zusätzliche Komponenten wie Lichtschalter oder Steckdosen (bei Doppelrahmen).
 
              </>
            )}
          </p>
         
          <h4 className="mn-4">
            {state === 'en' && (
              <>
             We offer four Variants - Maximum Design Flexibility


              </>
            )}
            {state === 'de' && (
              <>
               Wir bieten vier Varianten – für maximale Gestaltungsfreiheit

              </>
            )}
          </h4>
          <ul className="mn-4">
            {state === 'en' && (
              <>
              <li><strong>Single Frame Black: </strong>For a bold, technical look with depth and character.</li>
              <li><strong>Single Frame White: </strong>For a bright, minimalist appearance that blends effortlessly into any space. </li>
              <li><strong>Double Frame Black: </strong>Ideal for combining the SQ-Panel with other JUNG modules - in sleek graphite black</li>
              <li><strong>Double Frame White: </strong>For harmonious integration in bright interiors with added functionality.</li>

              </>
            )}
            {state === 'de' && (
              <>
               <li><strong>Einzelrahmen Schwarz: </strong>Für ein markantes, technisches Erscheinungsbild mit Tiefe und Charakter.</li>
              <li><strong>Einzelrahmen Weiß: </strong>Für einen hellen, minimalistischen Look, der sich dezent in jede Umgebung einfügt. </li>
              <li><strong>Doppelrahmen Schwarz: </strong>Ideal zur Kombination des SQ-Panels mit weiteren JUNG Modulen - in edlem Graphitschwarz</li>
              <li><strong>Doppelrahmen Weiß: </strong>Für harmonische Integration in helle Räume mit zusätzlicher Funktionalität.</li> 
              </>
            )}
          </ul>

         <h4 className="mn-4">
            {state === 'en' && (
              <>
             
                Premium Materials & Matte Finishes

              </>
            )}
            {state === 'de' && (
              <>
               Hochwertige Materialien & matte Oberflächen

              </>
            )}
          </h4>
          <p className="mn-4">
            {state === 'en' && (
              <>
              All variants feature durable, high-quality materials and a matte surface that reflects light elegantly while minimizing fingerprints.


              </>
            )}
            {state === 'de' && (
              <>
              Alle Varianten überzeugen durch ihre langlebige Qualität und eine angenehm matte Oberfläche, die Licht elegant reflektiert und Fingerabdrücke minimiert.
  
              </>
            )}
          </p>
         
            <h4 className="mn-4">
            {state === 'en' && (
              <>
             Perfect for Smart Homes


              </>
            )}
            {state === 'de' && (
              <>
               Perfekt für Smart Homes

              </>
            )}
          </h4>
          <p className="mn-4">
            {state === 'en' && (
              <>
              
            In combination with the SQ-Panel, these frames create a modern, intelligent solution for 
            monitoring and managing indoor climate - technically advanced and visually refined.

              </>
            )}
            {state === 'de' && (
              <>
              In Kombination mit dem SQ-Panel entsteht eine moderne, intelligente Lösung zur Überwachung und
               Gestaltung des Raumklimas - technisch durchdacht und optisch überzeugend.
  
              </>
            )}
          </p>
          <h4 className="mb-4">
            {state === 'en' && (
              <>
             
                Information for frame 1-gang, alpine white LSD 981 WW

              </>
            )}
            {state === 'de' && (
              <>
              Informationen für Rahmen 1fach, alpinweiß LSD 981 WW

              </>
            )}
          </h4>

 {state === 'en' && (
              <>
            
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src="/img/content/jung/slide2.png"
                              className="wow fadeInUp mb-4"
                              data-wow-delay="100ms"
                              alt="..."
                              style={{
                                visibility: 'visible',
                                // width: '`1020px',
                                animationDelay: '100ms',
                                animationName: 'fadeIn',
                              }}
                            />
              </>
            )}
            {state === 'de' && (
              <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src="/img/content/jung/slide1.png"
                              className="wow fadeInUp mb-4"
                              data-wow-delay="100ms"
                              alt="..."
                              style={{
                                visibility: 'visible',
                            //    width: '1020px',
                                animationDelay: '100ms',
                                animationName: 'fadeIn',
                              }}
                            />
              </>
            )}

           <h4 className="mn-4">
            {state === 'en' && (
              <>
             Information for frame 2-gang, alpine white LSD 982 WW

              </>
            )}
            {state === 'de' && (
              <>
              Informationen für Rahmen 2fach, alpinweiß LSD 982 WW
              </>
            )}
          </h4>

             {state === 'en' && (
              <>
            
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src="/img/content/jung/slide4.png"
                              className="wow fadeInUp mb-4"
                              data-wow-delay="100ms"
                              alt="..."
                              style={{
                                visibility: 'visible',
                               // width: '420px',
                                animationDelay: '100ms',
                                animationName: 'fadeIn',
                              }}
                            />
              </>
            )}
            {state === 'de' && (
              <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src="/img/content/jung/slide3.png"
                              className="wow fadeInUp mb-4"
                              data-wow-delay="100ms"
                              alt="..."
                              style={{
                                visibility: 'visible',
                               // width: '420px',
                                animationDelay: '100ms',
                                animationName: 'fadeIn',
                              }}
                            />
              </>
            )}
            
            <div>
                 <h4 className="mn-4">
            {state === 'en' && (
              <>
                Documentation
              </>
            )}
            {state === 'de' && (
              <>
                Documentation
              </>
            )}
          </h4>
          <p className="mn-4">
            {state === 'en' && (
              <>
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-black"></i>
              <a
                href="/docs/de_LSD981WW_adP.pdf"
                target="_blank"
                className="ms-2 link-success"
                rel="noreferrer"
              >
               Product data sheet with price 1-gang [PDF]

              </a>
            </div>
         
          
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-black"></i>
              <a
                href="/docs/de_LSD981WW_ad.pdf"
                target="_blank"
                className="ms-2 link-success"
                rel="noreferrer"
              >
               Article data sheet 1-gang [PDF]
              </a>
            </div>
        
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-black"></i>
              <a
                href="/docs/de_LSD982WW_adP"
                target="_blank"
                className="ms-2 link-success"
                rel="noreferrer"
              >
               Product data sheet with price 2-gang [PDF]

              </a>
            </div>
         
          
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-black"></i>
              <a
                href="/docs/de_LSD982WW_ad.pdf"
                target="_blank"
                className="ms-2 link-success"
                rel="noreferrer"
              >
               Article data sheet 2-gang [PDF]
              </a>
            </div>
          
              </>
            )}
            {state === 'de' && (
              <>
                     
          
        
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-black"></i>
              <a
                href="/docs/de_LSD981WW_adP.pdf"
                target="_blank"
                className="ms-2 link-success"
                rel="noreferrer"
              >
              Artikeldatenblatt mit Preis 1fach [PDF]

              </a>
            </div>
         
        
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-black"></i>
              <a
                 href="/docs/de_LSD981WW_ad.pdf"
                target="_blank"
                className="ms-2 link-success"
                rel="noreferrer"
              >
             Artikeldatenblatt 1fach [PDF]
              </a>
            </div>

             <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-black"></i>
              <a
                href="/docs/de_LSD982WW_adP"
                target="_blank"
                className="ms-2 link-success"
                rel="noreferrer"
              >
              Artikeldatenblatt mit Preis 2fach [PDF]

              </a>
            </div>
         
        
            <div className="d-flex align-items-center">
              <i className="ti-check display-31 text-black"></i>
              <a
               href="/docs/de_LSD982WW_ad.pdf"
                target="_blank"
                className="ms-2 link-success"
                rel="noreferrer"
              >
             Artikeldatenblatt 2fach [PDF]
              </a>
            </div>
         
       
         
              </>
            )}
          </p>
            </div>

          {state === 'en' && <>
          
                      <h4>Shop with us</h4>
                      <div className="row">
                        <div className="col-md-4 mb-4">
                          <div
                            className="e-card"
                            style={{
                              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                              height: '600px',
                            }}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src="/img/content/jung/single.jpeg"
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
                              <h6 className="mb-5">
                              Single frame, vertical and horizontal mounting, Duroplast, LS-DESIGN, alpine white
                              </h6>
                              
                              <div className="row">
                                <p className="col-md-3 mb-4">
                                  {!isMobile && (
                                    <Link
                                      href={
                                        'https://www.jung-group.com/de-AT/p/Rahmen-1fach-alpinweiss/LSD-981-WW'
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
                                        'https://www.jung-group.com/de-AT/p/Rahmen-1fach-alpinweiss/LSD-981-WW'
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

                        <div className="col-md-4 mb-4">
                          <div
                            className="e-card"
                            style={{
                              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                              height: '600px',
                            }}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src="/img/content/jung/double.jpeg"
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
                              <h6 className="mb-5">
                              Double frame, vertical and horizontal mounting, Duroplast, LS-DESIGN, alpine white
                              </h6>
                              
                              <div className="row">
                                <p className="col-md-3 mb-4">
                                  {!isMobile && (
                                    <Link
                                      href={
                                        'https://www.jung-group.com/de-AT/p/Rahmen-2fach-alpinweiss/LSD-982-WW'
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
                                        'https://www.jung-group.com/de-AT/p/Rahmen-2fach-alpinweiss/LSD-982-WW'
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
                              height: '600px',
                            }}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src="/img/content/jung/single.jpeg"
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
                              <h6 className="mb-5">
                            Rahmen 1fach, senkrechte und waagerechte Montage, Duroplast, LS-DESIGN, alpinweiß
                              </h6>
                              
                              <div className="row">
                                <p className="col-md-4 mb-4">
                                  {!isMobile && (
                                    <Link
                                      href={
                                        'https://www.jung-group.com/de-AT/p/Rahmen-1fach-alpinweiss/LSD-981-WW'
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
                                        'https://www.jung-group.com/de-AT/p/Rahmen-1fach-alpinweiss/LSD-981-WW'
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

                         <div className="col-md-4 mb-4">
                          <div
                            className="e-card"
                            style={{
                              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                              height: '600px',
                            }}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src="/img/content/jung/double.jpeg"
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
                              <h6 className="mb-5">
                            Rahmen 2fach, senkrechte und waagerechte Montage, Duroplast, LS-DESIGN, alpinweiß
                              </h6>
                              
                              <div className="row">
                                <p className="col-md-4 mb-4">
                                  {!isMobile && (
                                    <Link
                                      href={
                                        'https://www.jung-group.com/de-AT/p/Rahmen-2fach-alpinweiss/LSD-982-WW'
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
                                        'https://www.jung-group.com/de-AT/p/Rahmen-2fach-alpinweiss/LSD-982-WW'
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
