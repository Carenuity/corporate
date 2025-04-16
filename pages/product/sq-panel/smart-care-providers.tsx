import React from 'react';
import { useContext, useEffect } from 'react';
import Head from 'next/head';
import PageTitle from '../../../components/PageTitle';
import { LanguageSwitchContext } from '../../../components/context/LanguageSwitch';
import Translatable from '../../../components/Translatable';



const Page = () => {
  const pageTitle = 'Smart Care Providers';
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
              <>Reasons Why  Smart Care Providers Should Buy the Carenuity SQ-Panel?</>
            )}
            {state === 'de' && (
              <>
                Gründe, warum intelligente Pflegedienstleister das Carenuity SQ-Panel kaufen sollten?
              </>
            )}
          </h4>

          <h5>
            {state === 'en' && (
              <>1. Enhance resident safety and comfort</>
            )}
            {state === 'de' && (
              <>
                1. Erhöhen Sie die Sicherheit und den Komfort der Bewohner
              </>
            )}
            </h5>
            <p>
            {state === 'en' && (
              <>The Carenuity SQ-Panel continuously monitors indoor environmental conditions such as air 
              quality, humidity, and temperature—ensuring safer, healthier living spaces for patients, residents, or elderly individuals under care.</>
            )}
            {state === 'de' && (
              <>
               Das Carenuity SQ-Panel überwacht kontinuierlich die Raumluftqualität, 
               Luftfeuchtigkeit und Temperatur - und sorgt so für sichere, gesunde Lebensräume 
               für Patienten, Bewohner oder pflegebedürftige ältere Menschen. 
              </>
            )}
            </p>
            <h5>
            {state === 'en' && (
              <>2. Early detection for preventive action</>
            )}
            {state === 'de' && (
              <>
                2. Früherkennung für vorbeugende Maßnahmen
              </>
            )}
            </h5>
            <p>
            {state === 'en' && (
              <>By identifying issues like poor ventilation, excessive moisture, or temperature fluctuations early on, 
              care providers can intervene before conditions escalate into health risks or facility damage.</>
            )}
            {state === 'de' && (
              <>
              Durch die frühzeitige Erkennung von Problemen wie schlechter Belüftung, übermäßiger Feuchtigkeit 
              oder Temperaturschwankungen können Pflegekräfte eingreifen, bevor Gesundheitsrisiken oder Gebäudeschäden entstehen.  
              </>
            )}
            </p>
            <h5>
            {state === 'en' && (
              <>3. Data-driven care decisions</>
            )}
            {state === 'de' && (
              <>
                3. Datengesteuerte Pflegeentscheidungen
              </>
            )}
            </h5>
            <p>
            {state === 'en' && (
              <>With real-time environmental data at their fingertips, care teams can tailor responses, 
              improve patient outcomes, and provide more personalized care, particularly in assisted living or medical environments.</>
            )}
            {state === 'de' && (
              <>
                Mit Echtzeitdaten zur Umgebung können Pflegeteams gezielt reagieren, die 
                Betreuung verbessern und individuellere Pflege bieten - besonders in betreuten Wohnformen oder medizinischen Einrichtungen.
              </>
            )}
            </p>
            <h5>
            {state === 'en' && (
              <>4. Support compliance and accreditation</>
            )}
            {state === 'de' && (
              <>4. Unterstützen Sie Compliance und Akkreditierung
              </>
            )}
            </h5>
            <p>
            {state === 'en' && (
              <> Regulatory compliance and health standards are vital in care settings. The SQ-Panel helps meet 
              environmental quality guidelines and supports documentation for audits and certifications. 
</>
            )}
            {state === 'de' && (
              <>
                Regulatorische Anforderungen und Gesundheitsstandards sind in der Pflege essenziell.
                 Das SQ-Panel unterstützt die Einhaltung von Umweltrichtlinien und erleichtert Dokumentation bei Audits und Zertifizierungen.
              </>
            )}
            </p>
            <h5>
            {state === 'en' && (
              <>5. Seamless integration and remote monitoring</>
            )}
            {state === 'de' && (
              <>
                5. Nahtlose Integration und Fernüberwachung
              </>
            )}
            </h5>
            <p>
            {state === 'en' && (
              <>The device is easy to install and allows remote monitoring—enabling care staff to manage 
              multiple rooms or locations efficiently and proactively, even with limited resources.</>
            )}
            {state === 'de' && (
              <>
                Das Gerät ist leicht zu installieren und ermöglicht die Fernüberwachung 
                 so können Pflegekräfte auch bei begrenzten Ressourcen mehrere Räume oder Standorte effizient betreuen.
              </>
            )}
            </p>
            <h5>
            {state === 'en' && (
              <>6. Reinforce trust and professionalism</>
            )}
            {state === 'de' && (
              <>
                6. Stärken Sie Vertrauen und Professionalität
              </>
            )}
            </h5>
            <p>
            {state === 'en' && (
              <>Using advanced technology like the SQ-Panel demonstrates a provider&apos;s commitment to quality care, 
              building trust with families, patients, and regulatory bodies.</>
            )}
            {state === 'de' && (
              <>
                Der Einsatz moderner Technologie wie des SQ-Panels zeigt Engagement für hochwertige 
                Pflege und stärkt das Vertrauen von Familien, Patienten und Aufsichtsbehörden.
              </>
            )}
            </p>
        </div>
      </section>
    </>
  );
};

export default Page;
