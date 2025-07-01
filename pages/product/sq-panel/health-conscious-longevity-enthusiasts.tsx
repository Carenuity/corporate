import React from 'react';
import Head from 'next/head';
import { useContext } from 'react';
import PageTitle from '../../../components/PageTitle';
import { LanguageSwitchContext } from '../../../components/context/LanguageSwitch';
import Translatable from '../../../components/Translatable';
import Link from 'next/link';

const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'Health Conscious Longevity Enthusiasts';
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
                  src="/img/content/product/health.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    height: '350px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />
              </div>
              <div className="col-md-8 mb-4">
                <p>
                  {state === 'en' && (
                    <>
                      <strong>Health Conscious Longevity Enthusiasts</strong>{' '}
                      are individuals dedicated to extending their healthspan by
                      actively managing all aspects of their physical and mental
                      well-being. They focus not only on diet, exercise, and
                      sleep but also on optimizing their daily environment to
                      reduce long-term health risks. These individuals are
                      highly informed, often integrating technology and data
                      into their wellness routines to make smarter, more
                      proactive choices that support a longer, healthier life.
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      <strong>
                        Gesundheitsbewusste Langlebigkeitsbegeisterte
                      </strong>{' '}
                      sind Personen, die sich dafür einsetzen, ihre Gesundheit
                      zu verlängern, indem sie alle Aspekte ihres körperlichen
                      und geistigen Wohlbefindens aktiv verwalten. Sie
                      konzentrieren sich nicht nur auf Ernährung, Bewegung und
                      Schlaf, sondern auch auf die Optimierung ihrer täglichen
                      Umgebung, um langfristige Gesundheitsrisiken zu
                      reduzieren. Diese Personen sind hochinformiert und
                      integrieren häufig Technologie und Daten in ihre
                      Wellness-Routinen, um intelligentere, proaktivere
                      Entscheidungen zu treffen, die ein längeres und gesünderes
                      Leben unterstützen.
                    </>
                  )}
                </p>
                <p>
                  {state === 'en' && (
                    <>
                      The <strong>SQ panel</strong> is a powerful tool for this
                      lifestyle, providing real-time insights into key indoor
                      environmental factors that directly affect health. By
                      displaying data on air quality, temperature, humidity, air
                      pressure, carbon dioxide (CO₂), total volatile organic
                      compounds (TVOC), and presence detection, the panel helps
                      users identify and respond to invisible threats in their
                      surroundings. This allows longevity enthusiasts to
                      fine-tune their environment for better sleep, focus, and
                      overall wellness—turning their living space into an active
                      part of their health strategy.
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      Das <strong>SQ-Panel</strong> ist ein leistungsstarkes
                      Tool für diesen Lebensstil und bietet Echtzeit-Einblicke
                      in wichtige Raumklimafaktoren, die sich direkt auf die
                      Gesundheit auswirken. Durch die Anzeige von Daten zu
                      Luftqualität, Temperatur, Luftfeuchtigkeit, Luftdruck,
                      Kohlendioxid (CO₂), Gesamtgehalt flüchtiger organischer
                      Verbindungen (TVOC) und Anwesenheitserkennung hilft das
                      Panel Benutzern, unsichtbare Bedrohungen in ihrer Umgebung
                      zu erkennen und darauf zu reagieren. Dadurch können
                      Langlebigkeitsbegeisterte ihre Umgebung für besseren
                      Schlaf, Konzentration und allgemeines Wohlbefinden
                      optimieren und so ihren Wohnraum zu einem aktiven Teil
                      ihrer Gesundheitsstrategie machen.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
          <h4 className="mb-4">
            {state === 'en' && (
              <>
                Reasons Why Health-Conscious Longevity Enthusiasts Should Buy
                the Carenuity SQ-Panel
              </>
            )}
            {state === 'de' && (
              <>
                Warum gesundheitsbewusste Langlebigkeitsbegeisterte das
                Carenuity SQ-Panel kaufen sollten
              </>
            )}
          </h4>

          <h5>
            {state === 'en' && <>1. Proactive environmental sensing</>}
            {state === 'de' && <>1. Proaktive umweltüberwachung</>}
          </h5>
          <p>
            {state === 'en' && (
              <>
                The SQ-Panel continuously monitors air quality, temperature,
                humidity, and more. For those prioritizing long-term health,
                having real-time insight into your environment helps you
                proactively reduce exposure to harmful conditions that
                accelerate aging or cause chronic issues.
              </>
            )}
            {state === 'de' && (
              <>
                Das SQ-Panel überwacht kontinuierlich Luftqualität, Temperatur,
                Luftfeuchtigkeit und mehr. Wer seine Gesundheit langfristig
                schützen will, profitiert von Echtzeitdaten zur Reduzierung
                gesundheitsschädlicher Umwelteinflüsse - ein wichtiger Schritt
                zur Prävention.
              </>
            )}
          </p>

          <h5>
            {state === 'en' && <>2. Smart alerts for a safer lifestyle</>}
            {state === 'de' && (
              <>2. Intelligente warnungen für ein sicheres leben</>
            )}
          </h5>
          <p>
            {state === 'en' && (
              <>
                Whether it&apos;s detecting harmful gases, unusual humidity that
                could lead to mold, or temperature fluctuations — the panel
                notifies you immediately. It&apos;s like having a silent
                guardian keeping your living or working space optimized for
                long-term wellness.
              </>
            )}
            {state === 'de' && (
              <>
                Ob schädliche Gase, zu hohe Luftfeuchtigkeit (Schimmelgefahr)
                oder plötzliche Temperaturschwankungen - das Panel warnt Sie
                sofort. Es ist wie ein stiller Wächter, der Ihr Zuhause oder
                Büro auf gesundheitliche Risiken prüft.
              </>
            )}
          </p>

          <h5>
            {state === 'en' && <>3. Data-driven longevity</>}
            {state === 'de' && <>3. Datengesteuerte Langlebigkeit</>}
          </h5>
          <p>
            {state === 'en' && (
              <>
                Track trends over time to understand how your environment
                impacts your sleep, energy, and well-being. Make smarter
                lifestyle choices based on actual conditions, not guesswork.
              </>
            )}
            {state === 'de' && (
              <>
                Verfolgen Sie Umwelttrends über Zeiträume hinweg, um zu
                verstehen, wie Ihre Umgebung Ihren Schlaf, Ihre Energie und Ihr
                Wohlbefinden beeinflusst. Treffen Sie fundierte Entscheidungen
                für Ihre Gesundheit - basierend auf Fakten, nicht Vermutungen.
              </>
            )}
          </p>

          <h5>
            {state === 'en' && <>4. Integrates with your wellness ecosystem</>}
            {state === 'de' && (
              <>4. Integriert sich in Ihr Wellness-Ökosystem</>
            )}
          </h5>
          <p>
            {state === 'en' && (
              <>
                The Carenuity SQ-Panel can integrate with smart homes, HVAC
                systems, and wellness platforms. That means automation: when CO2
                is high, windows open. When the air is too dry, your humidifier
                activates. It optimizes your space to support better breathing,
                deeper sleep, and cleaner air.
              </>
            )}
            {state === 'de' && (
              <>
                Das Carenuity SQ-Panel lässt sich in Smart-Home-Systeme,
                Lüftungsanlagen oder Gesundheitsplattformen integrieren.
                Beispiel: Bei zu hoher CO₂-Konzentration öffnen sich Fenster
                automatisch. Ist die Luft zu trocken, startet der
                Luftbefeuchter. So wird Ihr Wohnraum zum Wohlfühlraum -
                automatisch optimiert für Ihre Gesundheit.
              </>
            )}
          </p>

          <h5>
            {state === 'en' && <>5. Built by experts in embedded health tech</>}
            {state === 'de' && (
              <>
                5. Entwickelt von Experten für eingebettete
                Gesundheitstechnologie
              </>
            )}
          </h5>
          <p className='mb-8'>
            {state === 'en' && (
              <>
                Carenuity and ChipGlobe bring years of experience in embedded
                systems for healthcare and safety. This isn&apos;t a gimmick —
                it&apos;s engineered with precision for people who take health
                seriously.
              </>
            )}
            {state === 'de' && (
              <>
                Carenuity und ChipGlobe bringen jahrelange Erfahrung in der
                Entwicklung medizinischer und sicherheitsrelevanter Systeme mit.
                Das SQ-Panel ist kein Spielzeug - es ist ein hochpräzises
                Werkzeug für alle, die Gesundheit ernst nehmen.
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
                                  'btn btn-lg btn-success rounded-pill'
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
                                  'btn btn-lg btn-success rounded-pill'
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
                                  'btn btn-lg btn-success rounded-pill'
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
                                  'btn btn-lg btn-success rounded-pill'
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
