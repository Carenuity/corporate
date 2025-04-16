import React from 'react';
import Head from 'next/head';
import { useContext, useEffect } from 'react';
import PageTitle from '../../../components/PageTitle';
import { LanguageSwitchContext } from '../../../components/context/LanguageSwitch';
import Translatable from '../../../components/Translatable';



const Page = () => {
  const pageTitle = 'Commercial Operators';
  const { state } = useContext(LanguageSwitchContext);
  return (
    <>
      <Head>
      <Translatable />
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
              <>Reasons Why Commercial Operators Should Buy the Carenuity SQ-Panel</>
            )}
            {state === 'de' && (
              <>
                Gründe, warum gewerbliche Betreiber das Carenuity SQ-Panel kaufen sollten
              </>
            )}
          </h4>

          <h5>
            {state === 'en' && (
              <>1. Protect people, enhance reputation</>
            )}
            {state === 'de' && (
              <>
                1. Menschen schützen, image stärken
              </>
            )}
            </h5>
            <p>
            {state === 'en' && (
              <>Indoor air quality, temperature, and humidity directly affect health, comfort, and productivity. 
              By installing the SQ-Panel, you show your commitment to a safe and healthy environment—whether for customers, tenants, or employees.</>
            )}
            {state === 'de' && (
              <>
               Luftqualität, Temperatur und Luftfeuchtigkeit haben direkten Einfluss auf Gesundheit, 
               Komfort und Produktivität. Mit dem SQ-Panel zeigen Sie Verantwortung für ein sicheres 
               und gesundes Umfeld - ob für Kunden, Mieter oder Mitarbeitende. 
              </>
            )}
            </p>

            <h5>
            {state === 'en' && (
              <>2. Prevent costly damage</>
            )}
            {state === 'de' && (
              <>
               2. Teure schäden vermeiden 
              </>
            )}
            </h5>
            <p>
            {state === 'en' && (
              <>The SQ-Panel alerts you to conditions that can lead to mold, 
              equipment failure, or poor air quality. Early detection means 
              you can act fast—saving on repairs, liability, and operational downtime.</>
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
            {state === 'en' && (
              <>3. Meet sustainability and compliance Goals</>
            )}
            {state === 'de' && (
              <>
               3. Nachhaltigkeits- und compliance-ziele erfüllen 
              </>
            )}
            </h5>
            <p>
            {state === 'en' && (
              <>Environmental monitoring is key to meeting modern ESG (Environmental, Social, Governance) 
              and workplace safety standards. The SQ-Panel provides measurable data to support 
              certifications like LEED, WELL, or ISO standards.</>
            )}
            {state === 'de' && (
              <>
               Umweltüberwachung ist zentral für ESG-Ziele (Environmental, Social, Governance) und Arbeitssicherheitsstandards. 
               Das SQ-Panel liefert messbare Daten zur Unterstützung von Zertifizierungen wie LEED, WELL oder ISO. 
              </>
            )}
            </p>

            <h5>
            {state === 'en' && (
              <>4. Smart building integration</>
            )}
            {state === 'de' && (
              <>
              4. Integration in smarte gebäudetechnik  
              </>
            )}
            </h5>
            <p>
            {state === 'en' && (
              <>Whether managing an office, retail space, hotel, or residential complex, 
              the SQ-Panel connects easily with HVAC systems, building automation tools, 
              and cloud platforms—making buildings smarter, greener, and more efficient.</>
            )}
            {state === 'de' && (
              <>
               Ob Bürogebäude, Verkaufsflächen, Hotels oder Wohnanlagen - das 
               SQ-Panel lässt sich einfach mit HLK-Systemen, Gebäudeautomatisierung 
               und Cloud-Plattformen vernetzen. Für effizientere, intelligentere und 
               nachhaltigere Gebäude. 
              </>
            )}
            </p>

            <h5>
            {state === 'en' && (
              <>5. Scalable across locations</>
            )}
            {state === 'de' && (
              <>
                5. Skalierbar für mehrere standorte
              </>
            )}
            </h5>
            <p>
            {state === 'en' && (
              <>Need to monitor multiple rooms, floors, or buildings? The Carenuity SQ-Panel 
              supports scalable deployment, remote access, and centralized monitoring—ideal for 
              operators managing several properties or large facilities.</>
            )}
            {state === 'de' && (
              <>
               Sie betreiben mehrere Räume, Etagen oder Gebäude? Das Carenuity SQ-Panel unterstützt 
               eine skalierbare Nutzung mit Fernzugriff und zentralem Monitoring - perfekt für 
               Betreiber mit mehreren Liegenschaften. 
              </>
            )}
            </p>

            <h5>
            {state === 'en' && (
              <>6. Built for reliability by experts</>
            )}
            {state === 'de' && (
              <>
               6. Zuverlässigkeit made by experten 
              </>
            )}
            </h5>
            <p>
            {state === 'en' && (
              <>Backed by ChipGlobe's and Carenuity's expertise in embedded systems and industrial-grade 
              tech, the SQ-Panel is engineered for long-term, 24/7 reliability in demanding environments.</>
            )}
            {state === 'de' && (
              <>
                Entwickelt mit der Industriekompetenz von ChipGlobe und Carenuity bietet das 
                SQ-Panel langlebige, hochverfügbare Technologie für den Dauerbetrieb in anspruchsvollen Umgebungen.
              </>
            )}
            </p>


        </div>
      </section>
    </>
  );
};

export default Page;
