import React from 'react';
import Head from 'next/head';
import PageTitle from '../../components/PageTitle';
import { LanguageSwitchContext } from '../../components/context/LanguageSwitch';
import Translatable from '../../components/Translatable';
import { useContext } from 'react';

const Page = () => {
  const pageTitle = 'Serial Number';
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
        {/* JSON-LD structured data */}
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
        <div className="container ">
          <h4 className="mn-4">
            {state === 'en' && <>Description of our Serial Number</>}
            {state === 'de' && <>Beschreibung unserer Seriennummer</>}
          </h4>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/content/serial-number/serial-number.jpeg"
            className=" wow fadeInUp mb-6"
            data-wow-delay="100ms"
            alt="..."
            style={{
              visibility: 'visible',
              animationDelay: '100ms',

              animationName: 'fadeIn',
            }}
          />
          <div>
            <p className="mn-4">
              {state === 'en' && (
                <>
                  Carenuity&apos;s system for assigning serial numbers follows a
                  structured methodology designed for clarity, organization, and
                  traceability. The serial number format incorporates specific
                  identifiers that denote product type, production year, and
                  batch sequence. This systematic approach ensures that each
                  item is uniquely identifiable, facilitating inventory
                  management, quality control, and customer support.
                </>
              )}
              {state === 'de' && (
                <>
                  Carenuity&apos;s System zur Vergabe von Seriennummern folgt
                  einer strukturierten Methodik, die für Klarheit, Organisation
                  und Rückverfolgbarkeit. Das Format der Seriennummer enthält
                  spezifische Identifikatoren, die den Produkttyp, das
                  Produktionsjahr und die Chargen Reihenfolge. Dieser
                  systematische Ansatz gewährleistet, dass jeder Artikel
                  eindeutig identifizierbar ist, was die Bestandsverwaltung,
                  Qualitätskontrolle Qualitätskontrolle und Kundenbetreuung.
                </>
              )}
            </p>
            <p className="mn-4">
              {state === 'en' && (
                <>
                  The diagram illustrating this system highlights several key
                  components:
                </>
              )}
              {state === 'de' && (
                <>
                  Das Diagramm, das dieses System veranschaulicht, hebt mehrere
                  Schlüsselkomponenten hervor Komponenten:
                </>
              )}
            </p>
            <ul className="mn-4">
              {state === 'en' && (
                <>
                  <li>
                    <strong>Product Code:</strong>The initial segment represents
                    the product category or model.
                  </li>
                  <li>
                    <strong>Year Identifier: </strong>This section indicates the
                    year of manufacture, enabling chronological tracking of
                    production.
                  </li>
                  <li>
                    <strong>Batch Number:</strong>A unique code for each
                    production batch, ensuring traceability in case of recalls
                    or quality assessments.
                  </li>
                  <li>
                    <strong>Individual Item Number:</strong>A distinct
                    identifier for each item within the batch, confirming its
                    uniqueness.
                  </li>
                </>
              )}
              {state === 'de' && (
                <>
                  <li>
                    <strong>Produkt-Code:</strong>Das erste Segment stellt die
                    Produktkategorie oder das Modell.
                  </li>
                  <li>
                    <strong>Jahr Kennung: </strong>In diesem Abschnitt wird das
                    Herstellungsjahr, was eine chronologische Rückverfolgung der
                    Produktion.
                  </li>
                  <li>
                    <strong>Chargennummer:</strong>Ein eindeutiger Code für jede
                    Produktionscharge Charge, der die Rückverfolgbarkeit im
                    Falle von Rückrufen oder Qualitäts Bewertungen.
                  </li>
                  <li>
                    <strong>Einzelne Artikel-Nummer:</strong>Eine eindeutige
                    Kennung für jeden Artikel innerhalb der Charge, der seine
                    Einzigartigkeit bestätigt.
                  </li>
                </>
              )}
            </ul>

            <p className="mn-4">
              {state === 'en' && (
                <>
                  The visual representation simplifies understanding by mapping
                  these segments in a clear, linear format, with color-coded
                  sections or labels to denote each aspect of the serial number.
                </>
              )}
              {state === 'de' && (
                <>
                  Die visuelle Darstellung vereinfacht das Verständnis durch die
                  Abbildung diese Segmente in einem klaren, linearen Format mit
                  farbcodierten Abschnitten oder Etiketten zur Kennzeichnung der
                  einzelnen Aspekte der Seriennummer.
                </>
              )}
            </p>
            <p className="mn-4">
              {state === 'en' && (
                <>
                  Carenuity&apos;s systematic approach to serial number
                  assignment exemplifies its commitment to precision,
                  transparency, and reliability in product management.
                </>
              )}
              {state === 'de' && (
                <>
                  Carenuity&apos;s systematischer Ansatz bei der Vergabe von
                  Seriennummern ist ein Beispiel für unser Engagement für
                  Präzision, Transparenz und Zuverlässigkeit im
                  Produktmanagement.
                </>
              )}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
