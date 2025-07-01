import React from 'react';
import { useContext } from 'react';
import Head from 'next/head';
import PageTitle from '../../../components/PageTitle';
import { LanguageSwitchContext } from '../../../components/context/LanguageSwitch';
import Translatable from '../../../components/Translatable';
import Link from 'next/link';

const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'Smart Care Providers';
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
                  src="/img/content/product/care.png"
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
                      <strong>Smart Care Providers</strong> are healthcare
                      professionals and organizations that leverage technology
                      to enhance patient care, improve operational efficiency,
                      and promote wellness. These providers often focus on
                      creating environments that support the health and comfort
                      of individuals, especially in settings like hospitals,
                      nursing homes, rehabilitation centers, and home care
                      services. Their goal is to ensure optimal conditions for
                      patients&apos; recovery and well-being, as well as to
                      prevent health risks associated with poor environmental
                      conditions.
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      <strong>Smart Care Providers</strong> sind medizinische
                      Fachkräfte und Organisationen, die Technologie nutzen, um
                      die Patientenversorgung zu verbessern, die betriebliche
                      Effizienz zu verbessern und das Wohlbefinden zu fördern.
                      Diese Anbieter konzentrieren sich häufig auf die Schaffung
                      von Umgebungen, die die Gesundheit und das Wohlbefinden
                      des Einzelnen unterstützen, insbesondere in Einrichtungen
                      wie Krankenhäusern, Pflegeheimen, Rehabilitationszentren
                      und häuslichen Pflegediensten. Ihr Ziel ist es, optimale
                      Bedingungen für die Genesung und das Wohlbefinden der
                      Patienten zu gewährleisten und Gesundheitsrisiken im
                      Zusammenhang mit schlechten Umweltbedingungen vorzubeugen.
                    </>
                  )}
                </p>
                <p>
                  {state === 'en' && (
                    <>
                      The <strong>SQ panel</strong> is an essential tool for
                      Smart Care Providers, offering real-time monitoring of
                      indoor air quality, temperature, humidity, pressure,
                      carbon dioxide (CO₂), total volatile organic compounds
                      (TVOC), and presence. In healthcare settings, these
                      factors are critical for preventing issues such as
                      respiratory distress, infections, and discomfort. By
                      continuously displaying these key metrics, the panel
                      allows care providers to maintain optimal conditions for
                      patients, quickly adjust the environment as needed, and
                      track changes over time. This proactive approach not only
                      supports patient health and comfort but also ensures
                      compliance with health and safety regulations, enhancing
                      the overall quality of care.
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      Das <strong>SQ-Panel</strong> ist ein unverzichtbares Tool
                      für Smart-Care-Anbieter und bietet Echtzeitüberwachung der
                      Raumluftqualität, der Temperatur, der Luftfeuchtigkeit,
                      des Drucks, des Kohlendioxids (CO₂), der gesamten
                      flüchtigen organischen Verbindungen (TVOC) und der
                      Anwesenheit. Im Gesundheitswesen sind diese Faktoren
                      entscheidend für die Vorbeugung von Problemen wie Atemnot,
                      Infektionen und Beschwerden. Durch die kontinuierliche
                      Anzeige dieser Schlüsselkennzahlen ermöglicht das Panel
                      Pflegedienstleistern, optimale Bedingungen für Patienten
                      aufrechtzuerhalten, die Umgebung bei Bedarf schnell
                      anzupassen und Veränderungen im Laufe der Zeit zu
                      verfolgen. Dieser proaktive Ansatz unterstützt nicht nur
                      die Gesundheit und das Wohlbefinden der Patienten, sondern
                      stellt auch die Einhaltung von Gesundheits- und
                      Sicherheitsvorschriften sicher und verbessert so die
                      Gesamtqualität der Pflege.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
          <h4 className="mb-4">
            {state === 'en' && (
              <>
                Reasons Why Smart Care Providers Should Buy the Carenuity
                SQ-Panel
              </>
            )}
            {state === 'de' && (
              <>
                Gründe, warum intelligente Pflegedienstleister das Carenuity
                SQ-Panel kaufen sollten
              </>
            )}
          </h4>

          <h5>
            {state === 'en' && <>1. Enhance resident safety and comfort</>}
            {state === 'de' && (
              <>1. Erhöhen Sie die Sicherheit und den Komfort der Bewohner</>
            )}
          </h5>
          <p>
            {state === 'en' && (
              <>
                The Carenuity SQ-Panel continuously monitors indoor
                environmental conditions such as air quality, humidity, and
                temperature—ensuring safer, healthier living spaces for
                patients, residents, or elderly individuals under care.
              </>
            )}
            {state === 'de' && (
              <>
                Das Carenuity SQ-Panel überwacht kontinuierlich die
                Raumluftqualität, Luftfeuchtigkeit und Temperatur - und sorgt so
                für sichere, gesunde Lebensräume für Patienten, Bewohner oder
                pflegebedürftige ältere Menschen.
              </>
            )}
          </p>
          <h5>
            {state === 'en' && <>2. Early detection for preventive action</>}
            {state === 'de' && <>2. Früherkennung für vorbeugende Maßnahmen</>}
          </h5>
          <p>
            {state === 'en' && (
              <>
                By identifying issues like poor ventilation, excessive moisture,
                or temperature fluctuations early on, care providers can
                intervene before conditions escalate into health risks or
                facility damage.
              </>
            )}
            {state === 'de' && (
              <>
                Durch die frühzeitige Erkennung von Problemen wie schlechter
                Belüftung, übermäßiger Feuchtigkeit oder Temperaturschwankungen
                können Pflegekräfte eingreifen, bevor Gesundheitsrisiken oder
                Gebäudeschäden entstehen.
              </>
            )}
          </p>
          <h5>
            {state === 'en' && <>3. Data-driven care decisions</>}
            {state === 'de' && <>3. Datengesteuerte Pflegeentscheidungen</>}
          </h5>
          <p>
            {state === 'en' && (
              <>
                With real-time environmental data at their fingertips, care
                teams can tailor responses, improve patient outcomes, and
                provide more personalized care, particularly in assisted living
                or medical environments.
              </>
            )}
            {state === 'de' && (
              <>
                Mit Echtzeitdaten zur Umgebung können Pflegeteams gezielt
                reagieren, die Betreuung verbessern und individuellere Pflege
                bieten - besonders in betreuten Wohnformen oder medizinischen
                Einrichtungen.
              </>
            )}
          </p>
          <h5>
            {state === 'en' && <>4. Support compliance and accreditation</>}
            {state === 'de' && (
              <>4. Unterstützen Sie Compliance und Akkreditierung</>
            )}
          </h5>
          <p>
            {state === 'en' && (
              <>
                {' '}
                Regulatory compliance and health standards are vital in care
                settings. The SQ-Panel helps meet environmental quality
                guidelines and supports documentation for audits and
                certifications.
              </>
            )}
            {state === 'de' && (
              <>
                Regulatorische Anforderungen und Gesundheitsstandards sind in
                der Pflege essenziell. Das SQ-Panel unterstützt die Einhaltung
                von Umweltrichtlinien und erleichtert Dokumentation bei Audits
                und Zertifizierungen.
              </>
            )}
          </p>
          <h5>
            {state === 'en' && (
              <>5. Seamless integration and remote monitoring</>
            )}
            {state === 'de' && <>5. Nahtlose Integration und Fernüberwachung</>}
          </h5>
          <p>
            {state === 'en' && (
              <>
                The device is easy to install and allows remote
                monitoring—enabling care staff to manage multiple rooms or
                locations efficiently and proactively, even with limited
                resources.
              </>
            )}
            {state === 'de' && (
              <>
                Das Gerät ist leicht zu installieren und ermöglicht die
                Fernüberwachung so können Pflegekräfte auch bei begrenzten
                Ressourcen mehrere Räume oder Standorte effizient betreuen.
              </>
            )}
          </p>
          <h5>
            {state === 'en' && <>6. Reinforce trust and professionalism</>}
            {state === 'de' && (
              <>6. Stärken Sie Vertrauen und Professionalität</>
            )}
          </h5>
          <p className='mb-8'>
            {state === 'en' && (
              <>
                Using advanced technology like the SQ-Panel demonstrates a
                provider&apos;s commitment to quality care, building trust with
                families, patients, and regulatory bodies.
              </>
            )}
            {state === 'de' && (
              <>
                Der Einsatz moderner Technologie wie des SQ-Panels zeigt
                Engagement für hochwertige Pflege und stärkt das Vertrauen von
                Familien, Patienten und Aufsichtsbehörden.
              </>
            )}
          </p>

          <div className="row" style={{textAlign:"center"}}>
            <p className="col-md-2 mb-4"></p>
                          <p className="col-md-4 mb-4">
                            {!isMobile && (
                              <Link
                                href={
                                  '/product/sq-panel/launch-page'
                                }
                                target="_blank"
                                className={
                                  'btn btn-sm btn-success rounded-pill'
                                }
                              >
                                <span className="small">
                                  {' '}
                                  Get the SQ-Panel now
                                </span>
                              </Link>
                            )}

                            {isMobile && (
                              <a
                                href={
                                 '/product/sq-panel/launch-page'
                                }
                                target="_blank"
                                className={
                                  'btn btn-sm btn-success rounded-pill'
                                }
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
                                className={
                                  'btn btn-sm btn-success rounded-pill'
                                }
                              >
                                <span className="small"> Learn more on SQ-Panel</span>
                              </Link>
                            )}

                            {isMobile && (
                              <a
                                href={'/sq-panel'}
                                target="_blank"
                                className={
                                  'btn btn-sm btn-success rounded-pill'
                                }
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
