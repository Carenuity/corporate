import React from 'react';
import { useContext } from 'react';
import Head from 'next/head';
import PageTitle from '../../../components/PageTitle';
import { LanguageSwitchContext } from '../../../components/context/LanguageSwitch';
import Translatable from '../../../components/Translatable';
import Link from 'next/link';

const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'Schools and Kindergartens';
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
                  src="/img/content/product/school.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    // height: '400px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />
              </div>
              <div className="col-md-8 mb-4">
                <p>
                  {state === 'en' && (
                    <>
                      The SQ-Panel helps monitor and improve indoor air quality
                      by measuring parameters like VOCs (volatile organic
                      compounds), CO₂, humidity, and temperature. In schools and
                      kindergartens, where children spend many hours indoors,
                      maintaining healthy air is critical for concentration,
                      learning, and overall well-being. Poor air quality can
                      lead to headaches, fatigue, and reduced cognitive
                      performance, and may increase the risk of respiratory
                      problems over time.
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      Das SQ-Panel hilft bei der Überwachung und Verbesserung
                      der Luftqualität in Innenräumen durch Messung von
                      Parametern wie VOC (flüchtige organische Verbindungen),
                      CO₂, Luftfeuchtigkeit und Temperatur. In Schulen und
                      Kindergärten, in denen Kinder viele Stunden in Innenräumen
                      verbringen, ist eine gesunde Luft entscheidend für die
                      Konzentration, das Lernen, und das allgemeine
                      Wohlbefinden. Schlechte Luftqualität kann zu
                      Kopfschmerzen, Müdigkeit und verminderter kognitiver
                      Leistung führen und im Laufe der Zeit das Risiko von
                      Atemproblemen erhöhen.
                    </>
                  )}
                </p>
                <p>
                  {state === 'en' && (
                    <>
                      By using the SQ-Panel, schools and kindergartens can
                      detect when ventilation is needed, ensure classrooms stay
                      within recommended air quality standards, and create a
                      healthier environment that supports children&apos;s
                      development and learning outcomes. It also provides data
                      to staff and facility managers, helping them make informed
                      decisions about ventilation and maintenance.
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      Mit dem SQ-Panel können Schulen und Kindergärten erkennen,
                      wann gelüftet werden muss, und sicherstellen, dass
                      Klassenräume die empfohlenen Luftqualitätsstandards
                      einhalten und eine gesündere Umgebung schaffen, die die
                      Entwicklung und die Lernergebnisse der Kinder unterstützt.
                      Außerdem liefert es Daten für das Personal und die
                      Verantwortlichen der Einrichtung und hilft ihnen,
                      fundierte Entscheidungen über Belüftung und Wartung zu
                      treffen.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
          <h4 className="mb-4">
            {state === 'en' && (
              <>
                Reasons Why Schools and Kindergartens Should Buy the Carenuity
                SQ-Panel
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
            {state === 'en' && <>1. Protect Children&apos;s Health</>}
            {state === 'de' && <>1. Schutz der Gesundheit von Kindern</>}
          </h5>
          <p>
            {state === 'en' && (
              <>
                Young children are more sensitive to poor air quality. The
                SQ-Panel continuously monitors harmful substances like VOCs and
                CO₂, helping reduce risks of headaches, fatigue, asthma, or
                long-term respiratory issues.
              </>
            )}
            {state === 'de' && (
              <>
                Kleine Kinder reagieren besonders empfindlich auf schlechte
                Luftqualität. Das SQ-Panel überwacht kontinuierlich Schadstoffe
                wie VOCs und CO₂ und trägt dazu bei, das Risiko von
                Kopfschmerzen, Müdigkeit, Asthma oder langfristigen
                Atemproblemen zu verringern.
              </>
            )}
          </p>

          <h5>
            {state === 'en' && <>2. Improve Learning and Concentration</>}
            {state === 'de' && (
              <>2. Verbesserung von Lernen und Konzentration</>
            )}
          </h5>
          <p>
            {state === 'en' && (
              <>
                Studies show that fresh, clean air boosts attention spans,
                memory, and academic performance. By ensuring optimal air
                quality, the SQ-Panel supports better learning environments.
              </>
            )}
            {state === 'de' && (
              <>
                Studien zeigen, dass frische, saubere Luft die
                Aufmerksamkeitsspanne, das Gedächtnis und die schulischen
                Leistungen verbessert. Durch die Gewährleistung einer optimalen
                Luftqualität unterstützt das SQ-Panel eine bessere Lernumgebung.
              </>
            )}
          </p>

          <h5>
            {state === 'en' && <>3. Immediate Alerts for Action</>}
            {state === 'de' && <>3. Sofortige Warnungen</>}
          </h5>
          <p>
            {state === 'en' && (
              <>
                The device provides real-time data and alerts when air quality
                drops below healthy levels, so teachers or staff can quickly
                ventilate rooms or adjust conditions.
              </>
            )}
            {state === 'de' && (
              <>
                Das Gerät liefert Echtzeitdaten und -warnungen, wenn die
                Luftqualität unter ein gesundes Niveau sinkt, so dass Lehrer
                oder Mitarbeiter schnell lüften oder die Bedingungen anpassen
                können.
              </>
            )}
          </p>

          <h5>
            {state === 'en' && <>4. Compliance with Health Standards</>}
            {state === 'de' && <>4. Einhaltung von Gesundheitsstandards</>}
          </h5>
          <p>
            {state === 'en' && (
              <>
                Many local regulations and health guidelines now emphasize
                indoor air quality. The SQ-Panel helps schools document and
                maintain compliance effortlessly.
              </>
            )}
            {state === 'de' && (
              <>
                Viele örtliche Verordnungen und Gesundheitsrichtlinien legen
                heute Wert auf die Luftqualität in Innenräumen. Mit dem SQ-Panel
                können Schulen die Einhaltung dieser Vorschriften mühelos
                dokumentieren und einhalten.
              </>
            )}
          </p>
          <h5>
            {state === 'en' && <>5. Build Trust with Parents</>}
            {state === 'de' && <>5.Vertrauen bei den Eltern aufbauen</>}
          </h5>
          <p>
            {state === 'en' && (
              <>
                Parents value schools and kindergartens that actively safeguard
                their children&apos;s environment. Showing your commitment to
                healthy indoor air enhances your reputation and builds trust.
              </>
            )}
            {state === 'de' && (
              <>
                Eltern schätzen Schulen und Kindergärten, die sich aktiv für die
                Umwelt ihrer Kinder einsetzen. Wenn Sie Ihr Engagement für
                gesunde Innenraumluft zeigen, verbessert das Ihren Ruf und
                schafft Vertrauen.
              </>
            )}
          </p>
          <h5>
            {state === 'en' && <>6. Easy to Use and Maintain</>}
            {state === 'de' && <>6.Einfache Bedienung und Wartung</>}
          </h5>
          <p className="mb-8">
            {state === 'en' && (
              <>
                Carenuity&apos;s SQ-Panel is designed to be user-friendly,
                requiring minimal training or upkeep, so staff can focus on
                teaching, not managing complex systems.
              </>
            )}
            {state === 'de' && (
              <>
                Das SQ-Panel von Carenuity ist benutzerfreundlich gestaltet und
                erfordert nur minimale Schulung oder Wartung, so dass sich das
                Personal auf den Unterricht konzentrieren kann, anstatt komplexe
                Systeme zu verwalten.
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
                >
                  <span className="small"> Get the SQ-Panel now</span>
                </Link>
              )}

              {isMobile && (
                <a
                  href={'/product/sq-panel/launch-page'}
                  target="_blank"
                  className={'btn btn-lg btn-success rounded-pill'}
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
                >
                  <span className="small"> Learn more on SQ-Panel</span>
                </Link>
              )}

              {isMobile && (
                <a
                  href={'/sq-panel'}
                  target="_blank"
                  className={'btn btn-lg btn-success rounded-pill'}
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
