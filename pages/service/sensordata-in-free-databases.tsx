import { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Translatable from '../../components/Translatable';
import { LanguageSwitchContext } from '../../components/context/LanguageSwitch';
import { carenuity } from '../../utils/constants';

const PageTitle = dynamic(() => import('../../components/PageTitle'), {
  ssr: false,
});

const SensordataInFreeDatabases = () => {
  const { state } = useContext(LanguageSwitchContext);

  return (
    <>
      <Translatable />
      <Head>
        <meta
          name="keywords"
          content="sensor data, free databases, ThingSpeak, InfluxDB, Firebase, MongoDB, Adafruit IO, Prometheus, Timescale, IoT, advisory"
        />
        <meta
          name="description"
          content={
            state === 'de'
              ? 'Wir beraten, integrieren und passen Ihre Sensor-Datenlösung für kostenlose, populäre Datenbanken an – inkl. Präsentation, Live-Datenbeispielen und kundenspezifischem Code, der sich über den Solution Builder auf beliebig viele Geräte flashen lässt.'
              : 'We advise, integrate, and tailor your sensor data solution for the most popular free databases — incl. a short live presentation, real data examples, and custom code you can flash to unlimited devices via the Solution Builder.'
          }
        />
        <title>
          {state === 'de'
            ? 'Kostenlose Sensor-Datenbanken: Beratung, Implementierung & kundenspezifischer Code'
            : 'Free Sensor Databases: Advisory, Implementation & Custom Code'}
        </title>
      </Head>

      <PageTitle
        links={[{ path: '/', title: 'Home' }]}
        pageTitle={
          state === 'de'
            ? 'Kostenlose Sensor-Datenbanken'
            : 'Free Sensor Databases'
        }
        pageUrl="/service/sensordata-in-free-databases"
      />

      {/* Hero */}
      <section className="py-4 bg-light border-bottom">
        <div className="container text-center">
          <h1 className="mb-3">
            {state === 'de' ? (
              <>Ihre Sensordaten – sofort nutzbar in freien Datenbanken</>
            ) : (
              <>Your Sensor Data — instantly usable in free databases</>
            )}
          </h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
            {state === 'de' ? (
              <>
                Beratung, Implementierung und kundenspezifische Anpassung aus
                einer Hand. Wir zeigen Ihnen in einer kurzen Präsentation, wie{' '}
                <strong>Ihre</strong> Sensordaten in den beliebtesten
                kostenlosen Datenbanken aussehen – und liefern Ihnen
                anschließend den angepassten Code zur direkten Nutzung.
              </>
            ) : (
              <>
                Advisory, implementation, and custom tailoring in one service.
                In a short session, we show exactly how <strong>your</strong>{' '}
                sensor data will look in the most popular free databases — then
                hand over the customized code ready to use.
              </>
            )}
          </p>
          <div className="d-flex gap-2 justify-content-center flex-wrap mt-4">
            <Link href="#contact" className="btn btn-success rounded-pill">
              {state === 'de'
                ? 'Kostenlose Kurzpräsentation anfragen'
                : 'Request a short intro session'}
            </Link>
            <Link
              href="#process"
              className="btn btn-outline-secondary rounded-pill"
            >
              {state === 'de' ? 'So läuft es ab' : 'See the process'}
            </Link>
          </div>
        </div>
      </section>

      {/* Image + platform pills */}
      <section className="py-4 border-bottom">
        <div className="container text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/content/sensordata-in-free-databases.png"
            alt={
              state === 'de'
                ? 'Übersicht freier Datenbanken für Sensordaten'
                : 'Overview of free databases for sensor data'
            }
            className="img-fluid rounded border shadow-sm mb-3"
            style={{ maxWidth: '980px' }}
          />
          <p className="text-muted">
            ThingSpeak · Timescale · InfluxData · Adafruit IO · Prometheus ·
            Firebase · MongoDB
          </p>
        </div>
      </section>

      {/* Our focus: platform pills */}
      <section className="py-4">
        <div className="container">
          <h2 className="mb-3">
            {state === 'de' ? (
              <>Unser Fokus: populäre, kostenlose Datenbanken für Sensordaten</>
            ) : (
              <>Our focus: popular free databases for sensor data</>
            )}
          </h2>
          <div className="row g-3">
            {[
              {
                name: 'ThingSpeak',
                icon: 'https://icon.horse/icon/thingspeak.com',
              },
              {
                name: 'Timescale',
                icon: 'https://icon.horse/icon/timescale.com',
              },
              {
                name: 'InfluxData',
                icon: 'https://cdn.simpleicons.org/influxdb/22ADF6',
              },
              {
                name: 'Adafruit IO',
                icon: 'https://cdn.simpleicons.org/adafruit/D80015',
              },
              {
                name: 'Prometheus',
                icon: 'https://cdn.simpleicons.org/prometheus/E6522C',
              },
              {
                name: 'Firebase',
                icon: 'https://cdn.simpleicons.org/firebase/FFA611',
              },
              {
                name: 'MongoDB',
                icon: 'https://cdn.simpleicons.org/mongodb/00ED64',
              },
            ].map(({ name, icon }) => (
              <div key={name} className="col-6 col-sm-4 col-md-3 col-lg-auto">
                <div
                  className="card text-center px-3 py-2 h-100 d-flex flex-column align-items-center justify-content-center"
                  style={{ minWidth: '120px' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={icon}
                    alt={name}
                    width={36}
                    height={36}
                    className="mb-2"
                    style={{ objectFit: 'contain' }}
                  />
                  <span className="fw-semibold small">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="py-4 bg-light" id="services">
        <div className="container">
          <h2 className="mb-4">
            {state === 'de' ? <>Unser Service</> : <>What we deliver</>}
          </h2>
          <div className="row g-3">
            {/* Card 1 */}
            <div className="col-md-6 col-xl-3">
              <div className="card h-100">
                <div className="card-body d-flex gap-3 align-items-start">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: 56, height: 56, background: '#e8f4fd' }}
                  >
                    <i
                      className="fa-solid fa-chalkboard-user fa-lg"
                      style={{ color: '#0b3c5d' }}
                    />
                  </div>
                  <div>
                    <h5 className="card-title">
                      {state === 'de' ? (
                        <>1) Kompakte Präsentation</>
                      ) : (
                        <>1) Compact briefing &amp; comparison</>
                      )}
                    </h5>
                    <ul className="ps-3 mb-0">
                      <li className="mb-1">
                        {state === 'de' ? (
                          <>Stärken/Schwächen &amp; typische Einsatzszenarien</>
                        ) : (
                          <>Strengths/limitations &amp; typical use cases</>
                        )}
                      </li>
                      <li className="mb-1">
                        {state === 'de' ? (
                          <>
                            Datenmodelle, Retention, Abfragen &amp;
                            Visualisierung
                          </>
                        ) : (
                          <>
                            Data models, retention, queries &amp; visualization
                          </>
                        )}
                      </li>
                      <li>
                        {state === 'de' ? (
                          <>
                            Skalierung, Limits, Ökosysteme &amp; Integrationen
                          </>
                        ) : (
                          <>Scaling, limits, ecosystems &amp; integrations</>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6 col-xl-3">
              <div className="card h-100">
                <div className="card-body d-flex gap-3 align-items-start">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: 56, height: 56, background: '#e6f9f7' }}
                  >
                    <i
                      className="fa-solid fa-chart-line fa-lg"
                      style={{ color: '#18a999' }}
                    />
                  </div>
                  <div>
                    <h5 className="card-title">
                      {state === 'de' ? (
                        <>2) Ihre Daten – live demonstriert</>
                      ) : (
                        <>2) Your data — live in the target DB</>
                      )}
                    </h5>
                    <ul className="ps-3 mb-0">
                      <li className="mb-1">
                        {state === 'de' ? (
                          <>
                            Beispiel‑ oder Live‑Messwerte in der Ziel‑Datenbank
                          </>
                        ) : (
                          <>
                            Sample or live signals ingested into the chosen
                            platform
                          </>
                        )}
                      </li>
                      <li className="mb-1">
                        {state === 'de' ? (
                          <>Dashboards, Diagramme, Alarme &amp; API‑Zugriffe</>
                        ) : (
                          <>Dashboards, charts, alerts &amp; API access</>
                        )}
                      </li>
                      <li>
                        {state === 'de' ? (
                          <>
                            Sofort sichtbarer „Look &amp; Feel&quot; Ihrer
                            Lösung
                          </>
                        ) : (
                          <>Immediate look &amp; feel of your solution</>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-6 col-xl-3">
              <div className="card h-100">
                <div className="card-body d-flex gap-3 align-items-start">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: 56, height: 56, background: '#fef3e2' }}
                  >
                    <i
                      className="fa-solid fa-sliders fa-lg"
                      style={{ color: '#f59e0b' }}
                    />
                  </div>
                  <div>
                    <h5 className="card-title">
                      {state === 'de' ? (
                        <>3) Kundenspezifische Anpassung</>
                      ) : (
                        <>3) Custom tailoring</>
                      )}
                    </h5>
                    <ul className="ps-3 mb-0">
                      <li className="mb-1">
                        {state === 'de' ? (
                          <>Felder, Visuals, Events, Metadaten</>
                        ) : (
                          <>Fields, visuals, events, metadata</>
                        )}
                      </li>
                      <li className="mb-1">
                        {state === 'de' ? (
                          <>Dashboard‑Design &amp; Berechtigungen</>
                        ) : (
                          <>Dashboard design &amp; permissions</>
                        )}
                      </li>
                      <li>
                        {state === 'de' ? (
                          <>Skalierbarkeit je nach Sensoranzahl</>
                        ) : (
                          <>Scaling to your sensor fleet size</>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-6 col-xl-3">
              <div className="card h-100">
                <div className="card-body d-flex gap-3 align-items-start">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: 56, height: 56, background: '#f0fdf4' }}
                  >
                    <i
                      className="fa-solid fa-code fa-lg"
                      style={{ color: '#16a34a' }}
                    />
                  </div>
                  <div>
                    <h5 className="card-title">
                      {state === 'de' ? (
                        <>4) Code zum Mitnehmen</>
                      ) : (
                        <>4) Code you can keep</>
                      )}
                    </h5>
                    <ul className="ps-3 mb-0">
                      <li className="mb-1">
                        {state === 'de' ? (
                          <>Individuell angepasster Code für Ihre Geräte</>
                        ) : (
                          <>Fully customized code for your devices</>
                        )}
                      </li>
                      <li className="mb-1">
                        {state === 'de' ? (
                          <>
                            Direkt &amp; kostenlos über den{' '}
                            <em>Solution Builder</em> flashbar
                          </>
                        ) : (
                          <>
                            Flashable to unlimited devices via the{' '}
                            <em>Solution Builder</em>
                          </>
                        )}
                      </li>
                      <li>
                        {state === 'de' ? (
                          <>Beliebig viele Geräte – konsistente Firmware</>
                        ) : (
                          <>
                            Consistent firmware and data formats across the
                            fleet
                          </>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your benefits */}
      <section className="py-4" id="benefits">
        <div className="container">
          <h2 className="mb-4">
            {state === 'de' ? <>Ihre Vorteile</> : <>Your benefits</>}
          </h2>
          <div className="row g-3">
            <div className="col-sm-6 col-lg-4">
              <div className="card h-100">
                <div className="card-body d-flex gap-3 align-items-start">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: 48, height: 48, background: '#f0fdf4' }}
                  >
                    <i
                      className="fa-solid fa-tag fa-lg"
                      style={{ color: '#16a34a' }}
                    />
                  </div>
                  <div>
                    <strong>
                      {state === 'de' ? (
                        <>Keine Lizenzkosten</>
                      ) : (
                        <>No license fees</>
                      )}
                    </strong>
                    <br />
                    {state === 'de' ? (
                      <>Nutzung freier Datenbanken ohne Abo‑Gebühren.</>
                    ) : (
                      <>Use free databases without subscription costs.</>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card h-100">
                <div className="card-body d-flex gap-3 align-items-start">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: 48, height: 48, background: '#fef3e2' }}
                  >
                    <i
                      className="fa-solid fa-bolt fa-lg"
                      style={{ color: '#f59e0b' }}
                    />
                  </div>
                  <div>
                    <strong>
                      {state === 'de' ? (
                        <>Schnelle Ergebnisse</>
                      ) : (
                        <>Fast outcomes</>
                      )}
                    </strong>
                    <br />
                    {state === 'de' ? (
                      <>In Minuten sehen Sie echte Daten &amp; Dashboards.</>
                    ) : (
                      <>See real data &amp; dashboards within minutes.</>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card h-100">
                <div className="card-body d-flex gap-3 align-items-start">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: 48, height: 48, background: '#e8f4fd' }}
                  >
                    <i
                      className="fa-solid fa-lock-open fa-lg"
                      style={{ color: '#0b3c5d' }}
                    />
                  </div>
                  <div>
                    <strong>
                      {state === 'de' ? <>Unabhängigkeit</> : <>Independence</>}
                    </strong>
                    <br />
                    {state === 'de' ? (
                      <>Offene Plattformen statt proprietärer Lock‑ins.</>
                    ) : (
                      <>Open platforms, no vendor lock‑in.</>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card h-100">
                <div className="card-body d-flex gap-3 align-items-start">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: 48, height: 48, background: '#e6f9f7' }}
                  >
                    <i
                      className="fa-solid fa-arrow-trend-up fa-lg"
                      style={{ color: '#18a999' }}
                    />
                  </div>
                  <div>
                    <strong>
                      {state === 'de' ? <>Skalierbar</> : <>Scalable</>}
                    </strong>
                    <br />
                    {state === 'de' ? (
                      <>Vom PoC bis zum Roll‑out.</>
                    ) : (
                      <>From PoC to rollout.</>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card h-100">
                <div className="card-body d-flex gap-3 align-items-start">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: 48, height: 48, background: '#f5f3ff' }}
                  >
                    <i
                      className="fa-solid fa-users fa-lg"
                      style={{ color: '#7c3aed' }}
                    />
                  </div>
                  <div>
                    <strong>
                      {state === 'de' ? (
                        <>Wissensaufbau</>
                      ) : (
                        <>Team enablement</>
                      )}
                    </strong>
                    <br />
                    {state === 'de' ? (
                      <>Ihr Team lernt die Tools hands‑on kennen.</>
                    ) : (
                      <>Hands‑on learning for your engineers.</>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-4 bg-light" id="process">
        <div className="container">
          <h2 className="mb-4">
            {state === 'de' ? <>So läuft es ab</> : <>How it works</>}
          </h2>
          <ol className="ps-3">
            <li className="mb-2">
              <strong>
                {state === 'de' ? <>Kurzbriefing</> : <>Intro call</>}
              </strong>{' '}
              {state === 'de' ? (
                <>– Ziele, Sensoren, Datenpunkte, gewünschte Visuals.</>
              ) : (
                <>— goals, sensors, datapoints, desired visuals.</>
              )}
            </li>
            <li className="mb-2">
              <strong>
                {state === 'de' ? <>Präsentation</> : <>Presentation</>}
              </strong>{' '}
              {state === 'de' ? (
                <>– Vergleich der passenden Datenbanken.</>
              ) : (
                <>— comparison of the best‑fit databases.</>
              )}
            </li>
            <li className="mb-2">
              <strong>
                {state === 'de' ? <>Live‑Demo</> : <>Live demo</>}
              </strong>{' '}
              {state === 'de' ? (
                <>– Ihre Daten in der gewählten Plattform.</>
              ) : (
                <>— your data in the selected platform.</>
              )}
            </li>
            <li className="mb-2">
              <strong>
                {state === 'de' ? <>Anpassung</> : <>Customization</>}
              </strong>{' '}
              {state === 'de' ? (
                <>– Code, Datenmodell &amp; Dashboards nach Wunsch.</>
              ) : (
                <>— code, data model &amp; dashboards.</>
              )}
            </li>
            <li>
              <strong>{state === 'de' ? <>Übergabe</> : <>Handover</>}</strong>{' '}
              {state === 'de' ? (
                <>
                  – Sie erhalten die Lösung inkl. Flash‑Option via Solution
                  Builder.
                </>
              ) : (
                <>— solution plus flash option via Solution Builder.</>
              )}
            </li>
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section className="py-4" id="contact">
        <div className="container">
          <h2 className="mb-3">
            {state === 'de' ? <>Jetzt starten</> : <>Get started now</>}
          </h2>
          <p>
            {state === 'de' ? (
              <>
                Fragen Sie Ihre unverbindliche Kurzpräsentation an – wir zeigen
                Ihnen, wie Ihre Sensorik noch heute in einer freien Datenbank
                läuft.
              </>
            ) : (
              <>
                Book a short, no‑obligation introduction. We&apos;ll show you
                how your sensors can run in a free database today.
              </>
            )}
          </p>
          <Link
            href={`mailto:${carenuity.email}?subject=${encodeURIComponent(
              state === 'de'
                ? 'Kurzpräsentation Sensor-Datenbanken'
                : 'Intro Session: Free Sensor Databases'
            )}`}
            className="btn btn-success rounded-pill"
          >
            {state === 'de' ? 'Kurzpräsentation anfragen' : 'Request a session'}
          </Link>
          <p className="text-muted small mt-3">
            {state === 'de' ? (
              <>
                Hinweis: Die Auswahl der Plattform richtet sich nach Ihrem
                Anwendungsfall, Datenvolumen und gewünschten Visualisierungen.
              </>
            ) : (
              <>
                Note: Platform selection depends on your use case, data volume,
                and visualization needs.
              </>
            )}
          </p>
        </div>
      </section>
    </>
  );
};

export default SensordataInFreeDatabases;
