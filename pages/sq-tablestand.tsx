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

        
       <p className="mn-4">
            {state === 'en' && (
              <>
             The Carenuity SQ-Tablestand transforms the SQ-Panel into a flexible, mobile air quality monitoring solution - 
             ideal for dynamic environments like care rooms, workspaces, training sessions, or home use.
                
              </>
            )}
            {state === 'de' && (
              <>
              Der Carenuity SQ-Tablestand verwandelt das SQ-Panel in eine flexibel einsetzbare, mobile Lösung - 
              ideal für wechselnde Einsatzorte, Pflegebereiche, Schulungen oder Homecare-Anwendungen.
              </>
            )}
          </p>

           <p className="mn-4">
            {state === 'en' && (
              <>
              The panel simply slides onto the stand using the same mechanical connection system as the SQ-Power 
              module. Power is supplied via the USB-C port on the back of the panel.
              A compatible USB-C cable and power supply are not included and can be selected according to user preference.
                
              </>
            )}
            {state === 'de' && (
              <>
               Das Panel wird direkt auf den Ständer aufgesteckt - dank des identischen mechanischen Stecksystems wie 
               beim SQ-Power-Modul. Die Stromversorgung erfolgt über den USB-C-Anschluss auf der Rückseite des Panels.
Ein passendes Ladekabel oder Netzteil ist nicht im Lieferumfang enthalten und kann flexibel gewählt werden.
              </>
            )}
          </p>
           <p className="mn-4">
            {state === 'en' && (
              <>
             
                The stand features a non-slip, rubberized base that ensures stability on any flat surface - no wall mounting or tools required.
              </>
            )}
            {state === 'de' && (
              <>
               Der gummierte Standfuß sorgt für rutschfesten Halt - ganz ohne Montage oder Werkzeuge.
              </>
            )}
          </p>
           <  h4 className="mn-4">
            {state === 'en' && (
              <>
             Key Benefits at a Glance:
                
              </>
            )}
            {state === 'de' && (
              <>
               Vorteile auf einen Blick:
              </>
            )}
          </h4>
          <ul className="mn-4">
            {state === 'en' && (
              <>
             <li>Enables mobile use of the SQ-Panel - no wall installation required</li>
             <li>Uses the same mechanical interface as the SQ-Power module</li>
             <li>Power supplied via USB-C (adapter and cable not included)</li>
             <li>Quick setup - tool-free and instantly ready</li>
             <li>Compact, stable and lightweight for flexible deployment</li>
             <li>Rubberized base for safe placement on desks, counters, and more</li>

                
              </>
            )}
            {state === 'de' && (
              <>
               <li>Mobiler Betrieb des SQ-Panels ohne Wandmontage</li>
             <li>Kompatibel mit dem Stecksystem des SQ-Power-Moduls</li>
             <li>Stromversorgung über USB-C (flexibel wählbares Zubehör)</li>
             <li>Kein Werkzeug notwendig - sofort einsatzbereit</li>
             <li>Kompakt, leicht, stabil - ideal für Pflege, Präsentation oder Büro</li>
             <li>Rutschfeste Unterseite für sicheren Stand auf jeder Fläche</li>
              </>
            )}
          </ul>

          <  h4 className="mn-4">
            {state === 'en' && (
              <>
            Technical Specifications:
                
              </>
            )}
            {state === 'de' && (
              <>
              Technische Daten:
              </>
            )}
          </h4>
          <ul className="mn-4">
            {state === 'en' && (
              <>
             <li><strong>Function:</strong> Mobile table stand for Carenuity SQ-Panel</li>
              <li><strong>Material: </strong>Durable plastic body with rubber base</li> 
              <li><strong>Mounting system: </strong>Snap-on interface (compatible with SQ-Power)</li> 
              <li><strong>Power input: </strong>USB-C (power supply and cable not included)</li> 
              <li><strong>Installation: </strong>Tool-free, plug & use</li>
               <li><strong>Compatibility: </strong>Only compatible with Carenuity SQ-Panel</li>
             

                
              </>
            )}
            {state === 'de' && (
              <>
               <li><strong>Funktion: </strong>Mobiler Tischständer für das SQ-Panel</li>
                <li><strong>Material:</strong> Robustes Kunststoffgehäuse mit gummierter Unterseite</li>
                 <li><strong>Mechanik:</strong> Aufsteckverbindung wie bei SQ-Power</li>
                  <li><strong>Stromversorgung:</strong> Über USB-C (Kabel/Netzteil nicht enthalten)</li>
                   <li><strong>Montage:</strong> Werkzeugfrei, sofort betriebsbereit</li>
                    <li><strong>Kompatibilität:</strong> Nur für Carenuity SQ-Panel geeignet</li>
             
              </>
            )}
          </ul>

          <  h4 className="mn-4">
            {state === 'en' && (
              <>
            
                System Note:
              </>
            )}
            {state === 'de' && (
              <>
              Systemhinweis:
              </>
            )}
          </h4>
          <p className="mn-4">
            {state === 'en' && (
              <>
             
              o enable cloud connectivity and remote monitoring, a separate SQ-Connector is required (not included).
One SQ-Connector can support multiple SQ-Panels at the same time, making the system highly scalable and efficient.  
              </>
            )}
            {state === 'de' && (
              <>
               Zur Anzeige und Fernüberwachung über die Cloud wird ein separater SQ-Connector benötigt (nicht im Lieferumfang enthalten).
                Ein SQ-Connector kann mehrere Panels gleichzeitig verbinden.
              </>
            )}
          </p>
           

             <  h4 className="mn-4">
            {state === 'en' && (
              <>
            App Support:
                
              </>
            )}
            {state === 'de' && (
              <>
              App-Unterstützung:
              </>
            )}
          </h4>
          <p className="mn-4">
            {state === 'en' && (
              <>
             The free Carenuity App (available for iOS and Android) allows you to set up, monitor and configure the SQ-Panel.
                <a href='https://carenuity.com/carenuity-app-guide/' target='blank'><u>View the App Guide</u></a>  
              </>
            )}
            {state === 'de' && (
              <>
               Die kostenlose Carenuity App (iOS & Android) ermöglicht die Inbetriebnahme, Konfiguration und Anzeige der Luftqualitätsdaten.
               <a href='https://carenuity.com/carenuity-app-guide/' target='blank'><u>Zur App-Anleitung</u></a>
              </>
            )}
          </p>
            <  h4 className="mn-4">
            {state === 'en' && (
              <>
            
               Typical Use Cases: 
              </>
            )}
            {state === 'de' && (
              <>
              Typische Einsatzbereiche:
              </>
            )}
          </h4>
          <p className="mn-4">
            {state === 'en' && (
              <>
             <strong>1. Patient Rooms & Care Environments</strong><br/>
              
            In hospital or eldercare settings, the SQ-TableStand allows the SQ-Panel to be placed securely on a 
            bedside table or shelf without the need for wall installation. This enables continuous monitoring of 
            air quality parameters such as CO₂, humidity, and temperature in patient rooms—conditions that can 
            significantly impact recovery and comfort. Its ability to detect human presence (while ignoring pets 
            or movement from non-human sources) helps caregivers ensure the space is properly occupied and ventilated. 
              </>
            )}
            {state === 'de' && (
              <>
               <strong>1. Patientenzimmer und Pflegeumgebungen</strong><br/>
                
                In Krankenhäusern oder Pflegeeinrichtungen ermöglicht der SQ-TableStand die sichere Platzierung des 
                SQ-Panels auf Nachttischen oder Regalen - ganz ohne Wandmontage. So kann die Luftqualität im Patientenzimmer
                 durchgehend überwacht werden, einschließlich CO₂-Wert, Luftfeuchtigkeit und Temperatur - wichtige Faktoren 
                 für Komfort und Genesung. Die integrierte Präsenzerkennung, die zwischen Menschen und Tieren unterscheidet, 
                 unterstützt das Pflegepersonal dabei, sicherzustellen, dass Räume angemessen belegt und belüftet sind.
              </>
            )}
          </p>

            <p className="mn-4">
            {state === 'en' && (
              <>
             <strong>2. Office Desks, Reception Counters, Mobile Stations</strong><br/>
              
            In healthcare or corporate reception areas, the SQ-TableStand positions the SQ-Panel prominently on counters 
            or desks to monitor indoor environmental conditions. This is particularly useful in shared spaces, where 
            maintaining optimal air quality helps reduce the spread of airborne illnesses and improves cognitive performance. 
            As a mobile station accessory, it provides flexibility—allowing staff to relocate the device to different rooms as 
            needed without drilling or permanent installation. 
              </>
            )}
            {state === 'de' && (
              <>
               <strong>2. Schreibtische, Empfangstheken, mobile Stationen</strong><br/>
              
              An Empfangstheken in Kliniken oder Büros wird der SQ-TableStand genutzt, um das SQ-Panel gut sichtbar auf Tresen oder 
              Schreibtischen zu platzieren und so die Umgebungsbedingungen kontinuierlich zu überwachen. Besonders in gemeinsam 
              genutzten Räumen trägt dies zur Reduktion von luftübertragenen Krankheitserregern und zur Verbesserung der Konzentration 
              bei. Als Teil einer mobilen Station lässt sich das Gerät flexibel in unterschiedliche Räume mitnehmen -
               ganz ohne Bohrungen oder dauerhafte Installation.
              </>
            )}
          </p>

          <p className="mn-4">
            {state === 'en' && (
              <>
             <strong>3. Training Rooms, Exhibitions, Flexible Deployments</strong><br/>
               
            At trade fairs or internal training sessions, the SQ-TableStand enables Carenuity to showcase the SQ-Panel in 
            temporary setups. Placed on podiums or demo tables, the stand provides a stable platform to demonstrate real-time 
            environmental monitoring, making it easy to explain the features and benefits of the system. Its modern design also 
            helps maintain a clean and professional look, which is essential in exhibition environments.
              </>
            )}
            {state === 'de' && (
              <>
               <strong>3. Sch Schulungsräume, Messen, flexible Einsätze</strong><br/>
               
              Bei Messen oder Schulungen ermöglicht der SQ-TableStand eine stabile und professionelle Präsentation des 
              SQ-Panels auf Tischen oder Podesten. Das Gerät kann so flexibel aufgestellt werden, um in Echtzeit die 
              Luftqualität zu demonstrieren und die Funktionen anschaulich zu erklären. Das moderne Design des Ständers 
              sorgt dabei für eine ästhetisch ansprechende Präsentation, was gerade in Ausstellungsumgebungen besonders wichtig ist.
              </>
            )}
          </p>

          <p className="mn-4">
            {state === 'en' && (
              <>
             <strong>4. Smart Homes and Private Monitoring</strong><br/>
              
            In a smart home, the SQ-TableStand allows residents to place the SQ-Panel on a kitchen shelf or a bedroom 
            dresser to track CO₂ levels, temperature, humidity, and more—all without modifying the walls. For renters or 
            people living in temporary accommodations, this is especially valuable as it avoids damage to the property. 
            The presence detection feature adds another layer of smart automation, allowing the system to activate alerts 
            or ventilation only when people—not pets—are in the room.  
              </>
            )}
            {state === 'de' && (
              <>
               <strong>4.  Smart Homes und private Überwachung</strong><br/>
              
              Im Smart Home erlaubt der SQ-TableStand die flexible Platzierung des SQ-Panels auf Küchenregalen, 
              Schreibtischen oder Kommoden, um die Luftqualität - etwa CO₂-Werte, Temperatur oder Luftfeuchtigkeit - 
              zu überwachen. Besonders für Mietwohnungen oder temporäre Wohnsituationen ist dies ideal, da keine 
              Wandmontage nötig ist. Die integrierte Präsenzerkennung bietet zusätzliche Automatisierungsmöglichkeiten, 
              etwa zur Aktivierung von Lüftungssystemen, wenn sich Personen (nicht Haustiere) im Raum befinden.
              </>
            )}
          </p>



            {/* <div className=" mb-4">
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
            </div> */}

        
               
          

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
