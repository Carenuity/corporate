import React from 'react';
import { useContext } from 'react';
import Head from 'next/head';
import PageTitle from '../../../components/PageTitle';
import { LanguageSwitchContext } from '../../../components/context/LanguageSwitch';
import Translatable from '../../../components/Translatable';

const Page = () => {
  const pageTitle = 'Property Managers';
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
          <h4 className="mb-4">
            {state === 'en' && (
              <>
                Reasons Why Property Managers Should Buy the Carenuity SQ-Panel
              </>
            )}
            {state === 'de' && (
              <>
                Gründe, warum Immobilienverwalter das Carenuity SQ-Panel kaufen
                sollten
              </>
            )}
          </h4>

          <h5>
            {state === 'en' && <>1. Protect tenants and property</>}
            {state === 'de' && <>1. Mieter und Eigentum schützen</>}
          </h5>
          <p>
            {state === 'en' && (
              <>
                The Carenuity SQ-Panel helps monitor air quality, humidity, and
                temperature in real time—crucial for maintaining safe and
                comfortable living environments. It helps prevent issues like
                mold, poor air circulation, or overheating.
              </>
            )}
            {state === 'de' && (
              <>
                Das Carenuity SQ-Panel überwacht in Echtzeit die Luftqualität,
                Luftfeuchtigkeit und Temperatur - entscheidend für ein sicheres
                und komfortables Wohnumfeld. So können Probleme wie
                Schimmelbildung, schlechte Luftzirkulation oder Überhitzung
                frühzeitig verhindert werden.
              </>
            )}
          </p>

          <h5>
            {state === 'en' && <>2. Reduce maintenance costs</>}
            {state === 'de' && <>2. Reduzieren Sie die Wartungskosten</>}
          </h5>
          <p>
            {state === 'en' && (
              <>
                Early warnings for environmental issues can help property
                managers take action before problems become costly
                repairs—saving time, money, and tenant complaints.
              </>
            )}
            {state === 'de' && (
              <>
                Frühzeitige Warnungen vor Umweltproblemen ermöglichen schnelles
                Handeln, bevor kostspielige Reparaturen notwendig werden - das
                spart Zeit, Geld und Beschwerden von Mietern.
              </>
            )}
          </p>

          <h5>
            {state === 'en' && <>3. Enhance property value and appeal</>}
            {state === 'de' && (
              <>3. Wert und Attraktivität einer Immobilie steigern</>
            )}
          </h5>
          <p>
            {state === 'en' && (
              <>
                Smart, health-conscious building technologies are in high
                demand. The SQ-Panel adds modern functionality that improves
                tenant satisfaction and makes your properties more competitive.
              </>
            )}
            {state === 'de' && (
              <>
                Moderne, gesundheitsbewusste Gebäudetechnologien sind stark
                gefragt. Das SQ-Panel bietet smarte Funktionen, die die
                Zufriedenheit der Mieter erhöhen und Ihre Immobilie
                wettbewerbsfähiger machen.
              </>
            )}
          </p>

          <h5>
            {state === 'en' && (
              <>4. Support regulatory compliance and sustainability goals</>
            )}
            {state === 'de' && (
              <>
                4. Unterstützen Sie die Einhaltung gesetzlicher Vorschriften und
                Nachhaltigkeitsziele
              </>
            )}
          </h5>
          <p>
            {state === 'en' && (
              <>
                Whether it&apos;s meeting indoor air quality standards or ESG
                targets, the SQ-Panel provides actionable data to help comply
                with local regulations and sustainability certifications.
              </>
            )}
            {state === 'de' && (
              <>
                Ob zur Erfüllung gesetzlicher Anforderungen an die Luftqualität
                oder zur Erreichung von ESG-Zielen - das SQ-Panel liefert
                verwertbare Daten zur Einhaltung von Standards und
                Nachhaltigkeitszertifizierungen.
              </>
            )}
          </p>
          <h5>
            {state === 'en' && <>5. Easy installation and remote monitoring</>}
            {state === 'de' && (
              <>5. Einfache Installation und Fernüberwachung</>
            )}
          </h5>
          <p>
            {state === 'en' && (
              <>
                With simple setup and integration into existing systems, the
                SQ-Panel allows remote access and centralized monitoring—perfect
                for managing multiple units or buildings efficiently.
              </>
            )}
            {state === 'de' && (
              <>
                Dank unkomplizierter Einrichtung und Integration in bestehende
                Systeme ist eine zentrale und ortsunabhängige Überwachung
                möglich - ideal für die Verwaltung mehrerer Einheiten oder
                Gebäude.
              </>
            )}
          </p>
        </div>
      </section>
    </>
  );
};

export default Page;
