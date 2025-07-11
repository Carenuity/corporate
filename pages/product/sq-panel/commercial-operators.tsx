import React from 'react';
import Head from 'next/head';
import { useContext } from 'react';
import PageTitle from '../../../components/PageTitle';
import { LanguageSwitchContext } from '../../../components/context/LanguageSwitch';
import Translatable from '../../../components/Translatable';
import Link from 'next/link';

const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'Commercial Operators';
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
          <div
            className="e-card mb-6"
            style={{
              boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
              maxHeight: '1O00px',
              padding: '20px',
            }}
          >
            <div className="row">
              <div className="col-md-4 mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/product/Commercial.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    height: '400px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />
              </div>
              <div className="col-md-8 mb-4">
                <p>
                  {state === 'en' && (
                    <>
                      <strong>Commercial Operators</strong>—such as facility
                      managers, office administrators, and building owners—are
                      responsible for maintaining safe, comfortable, and
                      efficient environments for employees, customers, and
                      visitors. They focus on optimizing indoor spaces to meet
                      health standards, improve occupant satisfaction, and
                      support productivity, all while managing energy use and
                      operational efficiency. Ensuring high air quality and
                      environmental comfort is increasingly becoming a priority,
                      especially in workplaces, hospitality venues, and retail
                      environments.
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      <strong>Gewerbliche Betreiber</strong>- wie Facility
                      Manager, Büroadministratoren und Gebäudeeigentümer - sind
                      für die Aufrechterhaltung einer sicheren, komfortablen und
                      effizienten Umgebung für Mitarbeiter, Kunden und Besucher
                      verantwortlich. Sie konzentrieren sich auf die Optimierung
                      von Innenräumen, um Gesundheitsstandards zu erfüllen, die
                      Zufriedenheit der Bewohner zu verbessern und die
                      Produktivität zu unterstützen, während gleichzeitig der
                      Energieverbrauch und die Betriebseffizienz gesteuert
                      werden. Die Gewährleistung einer hohen Luftqualität und
                      eines hohen Umweltkomforts wird zunehmend zu einer
                      Priorität, insbesondere an Arbeitsplätzen, im Gastgewerbe
                      und im Einzelhandel.
                    </>
                  )}
                </p>
                <p>
                  {state === 'en' && (
                    <>
                      The <strong>SQ panel</strong> serves as a vital tool for
                      Commercial Operators by providing real-time, visible data
                      on key indoor environmental conditions. It displays
                      crucial metrics such as air quality, temperature,
                      humidity, atmospheric pressure, carbon dioxide (CO₂),
                      total volatile organic compounds (TVOC), and presence
                      detection. With this data, operators can proactively
                      address ventilation issues, adjust HVAC systems, and
                      create healthier, more responsive indoor environments. The
                      panel not only supports regulatory compliance and
                      sustainability goals but also builds trust with occupants
                      by promoting transparency around indoor air quality and
                      comfort.
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      Das <strong>SQ-Panel</strong> dient als wichtiges Werkzeug
                      für gewerbliche Betreiber, indem es in Echtzeit sichtbare
                      Daten über wichtige Raumklimabedingungen liefert. Es zeigt
                      wichtige Messwerte wie Luftqualität, Temperatur,
                      Luftfeuchtigkeit, Luftdruck, Kohlendioxid (CO₂),
                      Gesamtgehalt flüchtiger organischer Verbindungen (TVOC)
                      und Anwesenheitserkennung an. Mit diesen Daten können
                      Betreiber Lüftungsprobleme proaktiv angehen, HVAC-Systeme
                      anpassen und gesündere, reaktionsfähigere Innenumgebungen
                      schaffen. Das Gremium unterstützt nicht nur die Einhaltung
                      gesetzlicher Vorschriften und Nachhaltigkeitsziele,
                      sondern schafft auch Vertrauen bei den Bewohnern, indem es
                      Transparenz in Bezug auf Raumluftqualität und -komfort
                      fördert.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
          <h4 className="mn-4">
            {state === 'en' && (
              <>
                Reasons Why Commercial Operators Should Buy the Carenuity
                SQ-Panel
              </>
            )}
            {state === 'de' && (
              <>
                Gründe, warum gewerbliche Betreiber das Carenuity SQ-Panel
                kaufen sollten
              </>
            )}
          </h4>

          <h5>
            {state === 'en' && <>1. Protect people, enhance reputation</>}
            {state === 'de' && <>1. Menschen schützen, image stärken</>}
          </h5>
          <p>
            {state === 'en' && (
              <>
                Indoor air quality, temperature, and humidity directly affect
                health, comfort, and productivity. By installing the SQ-Panel,
                you show your commitment to a safe and healthy
                environment—whether for customers, tenants, or employees.
              </>
            )}
            {state === 'de' && (
              <>
                Luftqualität, Temperatur und Luftfeuchtigkeit haben direkten
                Einfluss auf Gesundheit, Komfort und Produktivität. Mit dem
                SQ-Panel zeigen Sie Verantwortung für ein sicheres und gesundes
                Umfeld - ob für Kunden, Mieter oder Mitarbeitende.
              </>
            )}
          </p>

          <h5>
            {state === 'en' && <>2. Prevent costly damage</>}
            {state === 'de' && <>2. Teure schäden vermeiden</>}
          </h5>
          <p>
            {state === 'en' && (
              <>
                The SQ-Panel alerts you to conditions that can lead to mold,
                equipment failure, or poor air quality. Early detection means
                you can act fast—saving on repairs, liability, and operational
                downtime.
              </>
            )}
            {state === 'de' && (
              <>
                Das SQ-Panel warnt Sie frühzeitig bei Risiken wie
                Schimmelbildung, Geräteausfällen oder schlechter Luftqualität.
                So können Sie rechtzeitig eingreifen und Reparaturkosten,
                Haftungsrisiken und Betriebsausfälle vermeiden.
              </>
            )}
          </p>

          <h5>
            {state === 'en' && <>3. Meet sustainability and compliance Goals</>}
            {state === 'de' && (
              <>3. Nachhaltigkeits- und compliance-ziele erfüllen</>
            )}
          </h5>
          <p>
            {state === 'en' && (
              <>
                Environmental monitoring is key to meeting modern ESG
                (Environmental, Social, Governance) and workplace safety
                standards. The SQ-Panel provides measurable data to support
                certifications like LEED, WELL, or ISO standards.
              </>
            )}
            {state === 'de' && (
              <>
                Umweltüberwachung ist zentral für ESG-Ziele (Environmental,
                Social, Governance) und Arbeitssicherheitsstandards. Das
                SQ-Panel liefert messbare Daten zur Unterstützung von
                Zertifizierungen wie LEED, WELL oder ISO.
              </>
            )}
          </p>

          <h5>
            {state === 'en' && <>4. Smart building integration</>}
            {state === 'de' && <>4. Integration in smarte gebäudetechnik</>}
          </h5>
          <p>
            {state === 'en' && (
              <>
                Whether managing an office, retail space, hotel, or residential
                complex, the SQ-Panel connects easily with HVAC systems,
                building automation tools, and cloud platforms—making buildings
                smarter, greener, and more efficient.
              </>
            )}
            {state === 'de' && (
              <>
                Ob Bürogebäude, Verkaufsflächen, Hotels oder Wohnanlagen - das
                SQ-Panel lässt sich einfach mit HLK-Systemen,
                Gebäudeautomatisierung und Cloud-Plattformen vernetzen. Für
                effizientere, intelligentere und nachhaltigere Gebäude.
              </>
            )}
          </p>

          <h5>
            {state === 'en' && <>5. Scalable across locations</>}
            {state === 'de' && <>5. Skalierbar für mehrere standorte</>}
          </h5>
          <p>
            {state === 'en' && (
              <>
                Need to monitor multiple rooms, floors, or buildings? The
                Carenuity SQ-Panel supports scalable deployment, remote access,
                and centralized monitoring—ideal for operators managing several
                properties or large facilities.
              </>
            )}
            {state === 'de' && (
              <>
                Sie betreiben mehrere Räume, Etagen oder Gebäude? Das Carenuity
                SQ-Panel unterstützt eine skalierbare Nutzung mit Fernzugriff
                und zentralem Monitoring - perfekt für Betreiber mit mehreren
                Liegenschaften.
              </>
            )}
          </p>

          <h5>
            {state === 'en' && <>6. Built for reliability by experts</>}
            {state === 'de' && <>6. Zuverlässigkeit made by experten</>}
          </h5>
          <p className="mb-8">
            {state === 'en' && (
              <>
                Backed by ChipGlobe&apos;s and Carenuity&apos;s expertise in
                embedded systems and industrial-grade tech, the SQ-Panel is
                engineered for long-term, 24/7 reliability in demanding
                environments.
              </>
            )}
            {state === 'de' && (
              <>
                Entwickelt mit der Industriekompetenz von ChipGlobe und
                Carenuity bietet das SQ-Panel langlebige, hochverfügbare
                Technologie für den Dauerbetrieb in anspruchsvollen Umgebungen.
              </>
            )}
          </p>
         <div className="row" style={{ textAlign: 'center' }}>
            <p className="col-md-2 mb-4"></p>
            <p className="col-md-4 mb-4">
              {!isMobile && (
                <Link
                  href={'/product/sq-panel/launch-page'}
                  target="_blank"
                  className={'btn btn-lg btn-success rounded-pill'}
                  style={{ color: 'white' }}
                >
                  <span className="small"> Get the SQ-Panel now</span>
                </Link>
              )}

              {isMobile && (
                <a
                  href={'/product/sq-panel/launch-page'}
                  target="_blank"
                  className={'btn btn-lg btn-success rounded-pill'}
                  style={{ color: 'white' }}
                  rel="noreferrer"
                >
                  <span className="small">
                    Get the SQ-Panel now{' '}
                    {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                  </span>
                </a>
              )}
            </p>
            <p className="col-md-4 mb-4">
              {!isMobile && (
                <Link
                  href={'/sq-panel'}
                  target="_blank"
                  className={'btn btn-lg btn-success rounded-pill'}
                  style={{ color: 'white' }}
                >
                  <span className="small"> Learn more on SQ-Panel</span>
                </Link>
              )}

              {isMobile && (
                <a
                  href={'/sq-panel'}
                  target="_blank"
                  className={'btn btn-lg btn-success rounded-pill'}
                  style={{ color: 'white' }}
                  rel="noreferrer"
                >
                  <span className="small">
                    Learn more on SQ-Panel{' '}
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

export default Page;
