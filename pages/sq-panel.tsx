import { useContext, useEffect } from 'react';
import { LanguageSwitchContext } from '../components/context/LanguageSwitch';
import Head from 'next/head';
import PageTitle from '../components/PageTitle';
import Link from 'next/link';
import Translatable from '../components/Translatable';

export const SqPanel = () => {
  const pageTitle = 'SQ-Panel';
  const { state } = useContext(LanguageSwitchContext);
  const bannerImage = '/img/content/SQ-Panel-sideview.webp';

  useEffect(() => {
    if (document !== undefined) {
      const { jarallax, jarallaxVideo } = require('jarallax');
      jarallaxVideo();
      jarallax(document.querySelectorAll('.videoOne'), {
        speed: 0.2,
        videoSrc: 'https://youtu.be/5rwa3OWmB0Q',
      });

      jarallax(document.querySelectorAll('.videoTwo'), {
        speed: 0.2,
        videoSrc: 'https://youtu.be/b_ILJvUFYYY',
      });

      jarallax(document.querySelectorAll('.videoThree'), {
        speed: 0.2,
        videoSrc: 'mp4:/videos/content/sq-panel_on_table-stand.mp4',
      });
    }
  }, []);

  return (
    <>
      <Translatable />
      <Head>
        <meta
          name="keywords"
          content="Carenuity ChipGlobe Electronics Embedded Systems SQ-Panel C3-Mini Solution Builder"
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
        links={[{ path: '/', title: 'Home' }]}
        pageTitle={pageTitle}
        pageUrl="/sq-panel"
      />

      <section className="container">
        {/* kickstarter */}
        <div className="row">
          <div className="mb-2">
            <iframe
              width="1150"
              height="450"
              src="https://www.youtube.com/embed/5rwa3OWmB0Q"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <h4 className="">
            {state === 'en' && (
              <>The SQ-Panel easy-to-use sensor display, Matter-compatible</>
            )}
            {state === 'de' && (
              <>
                Das SQ-Panel - endlich ein einfach-bedienbares Sensor Display,
                Matter-kompatibel
              </>
            )}
          </h4>
          <p>
            {state === 'en' && (
              <>
                SQ-Panel for the indoor air quality display, attached to the
                SQ-TableStand. Alternatively, we recommend cable-free wall
                mounting.
              </>
            )}
            {state === 'de' && (
              <>
                SQ-Panel für die Raumluftqualitäts-Anzeige, hier aufgesteckt auf
                den SQ-Tischaufsteller. Alternativ empfehlen wir die kabelfreie
                Wandmontage.
              </>
            )}
          </p>
          <div className="mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/content/sq-panel-frontview.webp"
              className="mt-1-9 wow fadeInUp img-fluid"
              data-wow-delay="100ms"
              alt="..."
              style={{
                visibility: 'visible',
                animationDelay: '100ms',
                animationName: 'fadeIn',
              }}
            />
          </div>

          <h4>
            {state === 'en' && <>What is the SQ-Panel exactly?</>}
            {state === 'de' && <>Was ist das SQ-Panel genau?</>}
          </h4>
          <p>
            {state === 'en' && (
              <>
                The SQ-Panel is a display with built-in environmental sensors to
                show air quality and human presence to keep you feeling
                comfortable and protected. If necessary, it warns you if
                something is wrong.
              </>
            )}
            {state === 'de' && (
              <>
                Das SQ-Panel ist ein Display mit integrierten
                Umgebungs-Sensoren, um die Luftqualität und die Anwesenheit von
                Personen anzuzeigen, damit Sie sich stets wohl und geschützt
                fühlen. Es warnt Sie notfalls, wenn etwas nicht stimmt.
              </>
            )}
          </p>
          <h4>
            {state === 'en' && <>What components does it consist of?</>}
            {state === 'de' && <>Aus welchen Komponenten besteht es?</>}
          </h4>
          <p>
            {state === 'en' && (
              <>
                The starter set of the SQ-Panel consists of the display with
                built-in sensors for measuring air quality and presence, a
                connector for a higher range that is mesh-capable and is
                connected to the Internet (e.g. Fritz-Box) and an app (Apple or
                Android ) to put the SQ-Panel into operation so that you can
                monitor the sensor values and define their threshold values.
              </>
            )}
            {state === 'de' && (
              <>
                Das SQ-Panel besteht im Starter-Set aus dem Display mit
                eingebauten Sensoren zur Messung der Luftqualität und der
                Anwesenheit, einem Verbinder für höhere Reichweite, der
                meshfähig ist und ans Internet (z.B. Fritz-Box) angeschlossen
                wird und einer App (Apple oder Android), um das SQ-Panel in
                Betrieb zu nehmen, so dass Sie die Sensorwerte überwachen und
                deren Schwell-Werte definieren können.
              </>
            )}
          </p>
          {state === 'en' && (
            <>
              <div className="col-lg-6 mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/kickstarter/starter-kit02.PNG"
                  className="mt-1-9 wow fadeInUp img-fluid"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />
              </div>
            </>
          )}
          {state === 'de' && (
            <>
              <div className="col-lg-6 mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/kickstarter/starter-kit.PNG"
                  className="mt-1-9 wow fadeInUp img-fluid"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />
              </div>
            </>
          )}

          <div className="col-lg-6 mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/content/kickstarter/sq-panel.PNG"
              className="mt-1-9 wow fadeInUp img-fluid"
              data-wow-delay="100ms"
              alt="..."
              style={{
                visibility: 'visible',
                animationDelay: '100ms',
                animationName: 'fadeIn',
              }}
            />
          </div>
          <p>
            {state === 'en' && (
              <>
                The sensors in the display check the air quality by monitoring
                the current room temperature, air pressure, CO2 content, air
                quality index, relative humidity and organic compounds (tVOC) in
                the indoor air and displaying them on the display. You can
                operate as many SQ-Panels as you like on one connector and
                manage them with the app. One connector is required per
                apartment.
              </>
            )}
            {state === 'de' && (
              <>
                Die Sensoren im Display prüfen die Luftqualität, indem sie die
                aktuellen Raum-Temperatur, den Luftdruck, den CO2-Gehalt, den
                Luftqualitäts-Index, die relative Luftfeuchte und die
                organischen Verbindungen (tVOC) in der Innenraumluft überwachen
                und auf dem Display anzeigen. An einem Verbinder können Sie
                beliebig viele SQ-Panels betreiben und mit der App verwalten. Es
                ist ein Verbinder pro Wohnung notwendig.
              </>
            )}
          </p>
          <h4>
            {state === 'en' && (
              <>
                The measurement results from the sensors are displayed on six
                clear tiles and in the app:
              </>
            )}
            {state === 'de' && (
              <>
                Die Messergebnisse von den Sensoren werden auf sechs
                übersichtlichen Kacheln und in der App dargestellt:
              </>
            )}
          </h4>
          <p>
            {state === 'en' && (
              <>
                These tiles can change color to red or blue and start flashing
                when preset thresholds are exceeded or not reached. You can see
                the SQ-Panel in operation in the video.
                <br />
                With your help, the harmful particles PM1, PM2.5 and PM10 could
                soon also monitor your ambient air for the benefit of your
                health, in addition to the sensors already implemented in the
                device.
              </>
            )}
            {state === 'de' && (
              <>
                Diese Kacheln können die Farbe nach rot oder blau wechseln und
                beginnen zu blinken, wenn vor-eingestellte Schwellwerte unter-
                oder überschritten werden. Sie sehen das SQ-Panel im Video in
                Betrieb.
                <br />
                Bald könnten mit Ihrer Unterstützung auch die schädliche
                Partikel PM1, PM2.5 und PM10 ergänzend zu den bereits im Gerät
                implementierten Sensoren über Ihre Umgebungsluft zum Wohl Ihrer
                Gesundheit wachen.
              </>
            )}
          </p>
          <h4>
            {state === 'en' && (
              <>
                During normal operation you will see the following 6 tiles in
                the two columns:
              </>
            )}
            {state === 'de' && (
              <>
                Folgende 6 Kacheln sehen Sie bei Normalbetrieb in den beiden
                Spalten:
              </>
            )}
          </h4>

          <div className="col-lg-6 ">
            <ul style={{ listStyleType: 'square' }}>
              <li>
                {state === 'en' && <>Room temperature</>}
                {state === 'de' && <>Raumtemperatur</>}
              </li>

              <li>
                {state === 'en' && <>Relative humidity</>}
                {state === 'de' && <>Relative Luftfeuchte</>}
              </li>

              <li>
                {state === 'en' && <>Air pressure (soon in mbar)</>}
                {state === 'de' && <>Luftdruck (bald in mbar)</>}
              </li>

              <li>
                {state === 'en' && <>Air quality index</>}
                {state === 'de' && <>Luftqualitäts-Index</>}
              </li>

              <li>
                {state === 'en' && <>Carbon dioxide content of the air / CO2</>}
                {state === 'de' && <>Kohlendioxid-Gehalt der Luft / CO2</>}
              </li>

              <li>
                {state === 'en' && <>Number of organic comp. VOC</>}
                {state === 'de' && <>Anzahl organischer Komp. VOC</>}
              </li>
            </ul>
          </div>
          <div className="col-lg-6 mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/content/kickstarter/sq-panel02.PNG"
              className=" wow fadeInUp img-fluid"
              data-wow-delay="100ms"
              alt="..."
              style={{
                visibility: 'visible',
                animationDelay: '100ms',
                animationName: 'fadeIn',
                height: '150px',
              }}
            />
          </div>

          <h4>
            {state === 'en' && (
              <>Room temperature, humidity, etc. with alarm function</>
            )}
            {state === 'de' && (
              <>Raumtemperatur, Luftfeuchte, etc. mit Alarmfunktion</>
            )}
          </h4>
          <p>
            {state === 'en' && (
              <>
                To monitor the temperature and humidity as well as other air
                parameters, you can set threshold values that, if exceeded,
                automatically trigger a flashing alarm on the display and a
                notification on your smartphone. <br />
              </>
            )}
            {state === 'de' && (
              <>
                Für die Überwachung der Temperatur und der Luftfeuchte sowie der
                anderen Luft-Parametern, können Sie Schwellwerte setzen, die bei
                Überschreitung automatisch einen blinkenden Alarm auf dem
                Display und eine Benachrichtigung auf Ihrem Smartphone auslösen.{' '}
                <br />
              </>
            )}
          </p>

          <div className="col-lg-4 mb-6 wow fadeIn  ">
            <div
              className="e-card"
              style={{
                boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                height: '520px',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/kickstarter/temp.PNG"
                className=" wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
              <p style={{ padding: '10px' }}>
                {state === 'en' && (
                  <>
                    Here is an example of the setting option for the temperature
                  </>
                )}
                {state === 'de' && (
                  <>
                    Hier sehen Sie exemplarisch die Einstellmöglichkeit für die
                    Temperatur:
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="col-lg-4 mb-6 wow fadeIn  ">
            <div
              className="e-card"
              style={{
                boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                height: '520px',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/kickstarter/humidity.PNG"
                className=" wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
              <p style={{ padding: '10px' }}>
                {state === 'en' && (
                  <>
                    Control and display of the humidity. This can help you
                    prevent possible mold formation.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Kontrolle und Anzeige der Luftfeuchte. Das kann Ihnen
                    helfen, einer möglichen Schimmelbildung vorzubeugen.
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="col-lg-4 mb-6 wow fadeIn  ">
            <div
              className="e-card"
              style={{
                boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                height: '520px',
              }}
            >
              {state === 'en' && (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/kickstarter/tile.PNG"
                    className=" wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                      height: '480px',
                      animationName: 'fadeIn',
                    }}
                  />
                </>
              )}
              {state === 'de' && (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/kickstarter/tile02.PNG"
                    className=" wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                      height: '480px',
                      animationName: 'fadeIn',
                    }}
                  />
                </>
              )}

              <p style={{ padding: '10px' }}>
                {state === 'en' && <>All tiles at a glance</>}
                {state === 'de' && <>Alle Kacheln im Überblick</>}
              </p>
            </div>
          </div>
          <h4>
            {state === 'en' && <>Operating the display (demonstration)</>}
            {state === 'de' && <>Bedienung des Displays (Demonstration)</>}
          </h4>
          <div className="mb-2">
            <iframe
              width="1150"
              height="450"
              src="https://www.youtube.com/embed/azuZXhZeEnw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <h4>
              {state === 'en' && (
                <>What other radar features are on the roadmap?</>
              )}
              {state === 'de' && (
                <>Welche weiteren Radar-Features stehen auf der Roadmap?</>
              )}
            </h4>
            <p>
              {state === 'en' && (
                <>
                  A latest 60 GHz radar sensor (mmWave) is integrated in the
                  SQ-Panel, which will allow further features to be activated on
                  the SQ-Panel. This allows us to enable various functions for
                  your smart home that improve energy efficiency as well as
                  security and comfort. Here are some features that will be
                  implemented once the funding goal is reached:
                </>
              )}
              {state === 'de' && (
                <>
                  Im SQ-Panel ist ein aktueller 60GHz Radarsensor (mmWave)
                  integriert, der es erlauben wird, weitere Features auf dem
                  SQ-Panel freizuschalten. So können wir für Ihr Smart Home
                  verschiedene Funktionen ermöglichen, die sowohl die
                  Energieeffizienz als auch die Sicherheit und den Komfort
                  verbessern. Hier sind einige Features, die nach erreichen des
                  Finanzierungsziels realisiert werden sollen:
                </>
              )}
            </p>

            <ul style={{ listStyleType: 'square' }}>
              <li>
                {state === 'en' && (
                  <>
                    <strong>Energy efficiency :</strong> By monitoring
                    occupancy, the sensor can detect whether people are in the
                    room and control the activity of devices accordingly to save
                    energy1.
                  </>
                )}
                {state === 'de' && (
                  <>
                    <strong>Energieeffizienz:</strong> Durch die Überwachung der
                    Anwesenheit kann der Sensor erkennen, ob Personen im Raum
                    sind und entsprechend die Aktivität von Geräten steuern, um
                    Energie zu sparen1.
                  </>
                )}
              </li>

              <li>
                {state === 'en' && (
                  <>
                    <strong>Safety :</strong> Radar sensors can help improve
                    safety by detecting movement and triggering alarms when an
                    unauthorized person is detected or when a person is in
                    danger of falling or falls and assistance is needed
                  </>
                )}
                {state === 'de' && (
                  <>
                    <strong>Sicherheit:</strong> Radar-Sensoren können zur
                    Verbesserung der Sicherheit beitragen, indem sie Bewegungen
                    erkennen und Alarme auslösen, wenn eine unbefugte Person
                    erkannt wird oder wenn eine Person sturz-gefährdet ist, bzw.
                    stürzt und Hilfe benötigt wird
                  </>
                )}
              </li>

              <li>
                {state === 'en' && (
                  <>
                    <strong>Comfort :</strong> Automatic lighting and
                    temperature control based on the detection of people in the
                    room for greater comfort.
                  </>
                )}
                {state === 'de' && (
                  <>
                    <strong>Komfort:</strong> Automatische Lichtsteuerung und
                    Temperaturregelung basierend auf der Erkennung von Personen
                    im Raum für mehr Komfort.
                  </>
                )}
              </li>

              <li>
                {state === 'en' && (
                  <>
                    <strong>Non-invasive monitoring :</strong> For the elderly
                    or patients, the sensor can monitor movements and vital
                    signs without violating privacy.
                  </>
                )}
                {state === 'de' && (
                  <>
                    <strong>Nicht-invasive Überwachung:</strong> Für ältere
                    Menschen oder Patienten kann der Sensor Bewegungen und
                    Vitalfunktionen überwachen, ohne die Privatsphäre zu
                    verletzen.
                  </>
                )}
              </li>

              <li>
                {state === 'en' && (
                  <>
                    <strong>Precise motion detection :</strong> With high
                    sensitivity, even sub-millimeter movements can be detected,
                    which can be useful for applications such as sleep
                    monitoring or sensitive gesture control.
                  </>
                )}
                {state === 'de' && (
                  <>
                    <strong>Präzise Bewegungserkennung:</strong> Mit hoher
                    Sensitivität können selbst submillimeterkleine Bewegungen
                    erfasst werden, was für Anwendungen wie Schlafüberwachung
                    oder feinfühlige Gestensteuerung nützlich sein kann.
                  </>
                )}
              </li>
            </ul>
            <p>
              {state === 'en' && (
                <>
                  <strong>Your participation is desired:</strong> Join our
                  community via our website to be directly involved in defining
                  and prioritizing these features. Your voice and suggestions
                  will help us to make the SQ-Panel the central building block
                  for every room monitoring.
                </>
              )}
              {state === 'de' && (
                <>
                  <strong>Ihre Mitwirkung ist gewünscht:</strong> Treten Sie
                  über unsere Website unserer Community bei, um bei der
                  Definition und Priorisierung dieser Features direkt dabei zu
                  sein. Ihre Stimme und Anregungen helfen uns, das SQ-Panel zum
                  zentralen Baustein für jedes Raum-Monitoring zu machen.
                </>
              )}
            </p>
            <p>
              {state === 'en' && (
                <>
                  Our <strong>AI competence team</strong> is constantly
                  developing concepts to recognize recurring patterns from the
                  wealth of different measurement data from the SQ-Panel. These
                  patterns represent relevant life situations that can further
                  improve the comfort of the smart home at home or in the
                  office.
                </>
              )}
              {state === 'de' && (
                <>
                  Unser <strong>Team für KI-Kompetenz</strong> entwickelt stetig
                  Konzepte, um aus der Fülle verschiedener Messdaten des
                  SQ-Panels wiederkehrende Muster zu erkennen. Diese Muster
                  repräsentieren relevante Lebenssituationen, die den Komfort im
                  Smart Home zu Hause oder Büro weiter verbessern können.
                </>
              )}
            </p>
          </div>
          <h4>
            {state === 'en' && (
              <>
                What can the app do and why do I need the app if the Smart Home
                Standard Matter is supported by the SQ-Panel?
              </>
            )}
            {state === 'de' && (
              <>
                Was kann die App und warum benötige ich die App, wenn doch der
                Smart-Home Standard Matter vom SQ-Panel unterstützt wird?
              </>
            )}
          </h4>
          <div>
            <p>
              {state === 'en' && (
                <>
                  You use the Carenuity app, which is available for Apple and
                  Android, to put the SQ-Panel and connector into operation.
                  This is done very easily using a QR code that is shown
                  directly on the display. The app also allows you to monitor
                  the sensor values over time in a particularly suitable way.
                  Example of a measurement curve, time course
                </>
              )}
              {state === 'de' && (
                <>
                  Sie nutzen die Carenuity App, die für Apple und Android zur
                  Verfügung steht, um das SQ-Panel und den Verbinder in Betrieb
                  zu nehmen. Dies erfolgt in einfachster Weise über einen
                  QR-Code, der direkt auf dem Display angezeigt wird. Außerdem
                  lassen sich mit der App die Sensorwerte über die Zeit in einer
                  besonders geeigneter Weise monitoren. Beispiel einer
                  Messkurve, zeitlicher Verlauf
                </>
              )}
            </p>
          </div>
          <div className="mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/content/kickstarter/curve.PNG"
              className=" wow fadeInUp"
              data-wow-delay="100ms"
              alt="..."
              style={{
                visibility: 'visible',
                animationDelay: '100ms',
                animationName: 'fadeIn',
              }}
            />
          </div>

          <div className="">
            <p>
              {state === 'en' && (
                <>
                  Using the app after the initial setup is then optional. With
                  the integration into Matter, you can use the SQ-Panel
                  exclusively in your preferred ecosystem (multi-admin mode) and
                  rely on these well-known standard apps:
                  <strong>
                    Amazon&apos;s Alexa, Apple&apos;s Home, Google Home,
                    Samsung&apos;s SmartThings, or Home Assistant (HA)
                  </strong>
                  <br />
                  The Carenuity app will soon provide additional information on
                  what measures should be taken if measured values exceed the
                  predefined thresholds.
                </>
              )}
              {state === 'de' && (
                <>
                  Die Verwendung der App nach der Erst-Einrichtung ist dann
                  optional. Mit der Integration in Matter können Sie das
                  SQ-Panel ausschließlich in Ihrem bevorzugten Ökosystem
                  (Multi-Admin-Modus) verwenden und dabei auf diese bekannten
                  Standard-Apps zurückgreifen:
                  <strong>
                    Amazon&apos;s Alexa, Apple&apos;s Home, Google Home,
                    Samsung&apos;s SmartThings, or Home Assistant (HA)
                  </strong>
                  <br />
                  Über die Carenuity-App werden bald zusätzlich Hinweise
                  gegeben, welche Maßnahmen sinnvoller Weise zu ergreifen sind,
                  wenn Messwerte die vordefinierten Schwellwerte übersteigen.
                </>
              )}
            </p>
          </div>
          <div className="col-lg- mb-6 wow fadeIn  ">
            <h4>
              {state === 'en' && <>All tiles with explanation at a glance.</>}
              {state === 'de' && <>Alle Kacheln mit Erklärung im Überblick.</>}
            </h4>
            <p>
              {state === 'en' && (
                <>
                  The tiles change color as soon as values become critical.
                  Using the colors of a traffic light, for example, this tile
                  changes to red when the CO2 level is high.
                </>
              )}
              {state === 'de' && (
                <>
                  Die Kacheln wechseln die Farbe, sobald Werte kritisch werden.
                  Mittels den Farben einer Ampel wechselt beispielsweise bei
                  hoher CO2-Konzentration diese Kachel auf eine rote Farbe.
                </>
              )}
            </p>

            {state === 'en' && (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/kickstarter/slide1.PNG"
                  className=" wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />
              </>
            )}
            {state === 'de' && (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/kickstarter/slide2.PNG"
                  className=" wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />
              </>
            )}
          </div>
          <div className=" mb-6 wow fadeIn  ">
            <h4>
              {state === 'en' && <>Commissioning.</>}
              {state === 'de' && <>Inbetriebnahme.</>}
            </h4>
            <p>
              {state === 'en' && (
                <>
                  Detailed instructions and explanatory videos are available for
                  commissioning. You can view or download these on our channels.
                  <br />
                  <strong>Note:</strong> The parts in red, Fritzbox and cable,
                  are not included in the starter kit.
                </>
              )}
              {state === 'de' && (
                <>
                  Zur Inbetriebnahme erhalten Sie ausführliche Anleitungen und
                  Erklärvideos. Diese können Sie auf unserern Kanälen anschauen
                  oder herunterladen. <br />
                  <strong>Hinweis:</strong> Die in rot gehaltenen Teile,
                  Fritzbox und Kabel, sind nicht im Starter-Kit enthalten.
                </>
              )}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/content/kickstarter/long-range.PNG"
              className=" wow fadeInUp"
              data-wow-delay="100ms"
              alt="..."
              style={{
                visibility: 'visible',
                animationDelay: '100ms',
                animationName: 'fadeIn',
              }}
            />
          </div>
          <h4>
            {state === 'en' && (
              <>Connecting the green USB cable to the connector.</>
            )}
            {state === 'de' && (
              <>Anschluss des grünen USB-Kabels an den Verbinder.</>
            )}
          </h4>
          <div className="col-lg-6 mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/content/kickstarter/connection.PNG"
              className=" wow fadeInUp"
              data-wow-delay="100ms"
              alt="..."
              style={{
                visibility: 'visible',
                animationDelay: '100ms',
                animationName: 'fadeIn',
              }}
            />
          </div>
          <div className="col-lg-6 mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/content/kickstarter/connection02.PNG"
              className=" wow fadeInUp"
              data-wow-delay="100ms"
              alt="..."
              style={{
                visibility: 'visible',
                animationDelay: '100ms',
                animationName: 'fadeIn',
              }}
            />
          </div>
          <div className="mb-4">
            <h4>
              {state === 'en' && <>Can I place the SQ-Panel anywhere?</>}
              {state === 'de' && <>Kann ich das SQ-Panel überall platzieren?</>}
            </h4>
            <p>
              {state === 'en' && (
                <>
                  On our website we offer you detailed information on what
                  considerations you should make in order to identify the
                  optimal location for the SQ-Panel. <br />
                  Using the SQ-Panel as a tabletop device or wall-mounted offers
                  its own advantages:
                </>
              )}
              {state === 'de' && (
                <>
                  Auf unserer Webseite bieten wir Ihnen detaillierte Hinweise,
                  welche Überlegungen Sie anstellen sollten, um den optimalen
                  Platz für das SQ-Panel zu identifizieren.
                  <br />
                  Die Verwendung des SQ-Panels als Tischgerät oder in
                  Wandmontage bietet jeweils eigene Vorteile:
                </>
              )}
            </p>
            <ul style={{ listStyleType: 'square' }}>
              <li>
                {state === 'en' && (
                  <>
                    <strong>Flexibility:</strong> Easy to move and reposition.
                  </>
                )}
                {state === 'de' && (
                  <>
                    <strong>Flexibilität:</strong> Leicht zu bewegen und
                    umzupositionieren.
                  </>
                )}
              </li>

              <li>
                {state === 'en' && (
                  <>
                    <strong>Easy installation:</strong> No need for drilling or
                    wall mounting.
                  </>
                )}
                {state === 'de' && (
                  <>
                    <strong>Einfache Installation:</strong> Keine Notwendigkeit
                    für Bohrungen oder Wandbefestigungen.
                  </>
                )}
              </li>

              <li>
                {state === 'en' && (
                  <>
                    <strong>Accessibility:</strong> Easy access for maintenance
                    or replacement, but less reliable operation.
                  </>
                )}
                {state === 'de' && (
                  <>
                    <strong>Zugänglichkeit:</strong> Einfacher Zugang für
                    Wartung oder Austausch, allerdings weniger verlässlicher
                    Betrieb
                  </>
                )}
              </li>
            </ul>
            <div className="mb-2">
              <iframe
                width="1150"
                height="450"
                src="https://www.youtube.com/embed/nCnTdzlanPo"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div>
            <h4>
              {state === 'en' && (
                <>
                  Wall mounting with SQ-Power in the flush-mounted installation,
                  which supplies the SQ-Panel with 220V:
                </>
              )}
              {state === 'de' && (
                <>
                  Wandmontage mit SQ-Power im Unterputz, der das SQ-Panel mit
                  220V versorgt:
                </>
              )}
            </h4>
            <strong>
              {state === 'en' && (
                <>
                  The advantages of the flush-mounted solution are in the wall:
                </>
              )}
              {state === 'de' && (
                <>Die Vorteile der Unterputz-Lösung liegen in der Wand:</>
              )}
            </strong>
            <ul style={{ listStyleType: 'square' }}>
              <li>
                {state === 'en' && (
                  <>
                    <strong>Space-saving: </strong> The SQ-Panel does not take
                    up valuable space on work surfaces or shelves such as
                    tables, dressers or shelves.
                  </>
                )}
                {state === 'de' && (
                  <>
                    <strong>Platzsparend:</strong> Das SQ-Panel nimmt keinen
                    wertvollen Platz auf Arbeits- / oder Stellflächen wie Tisch,
                    Kommode oder Regal ein.
                  </>
                )}
              </li>

              <li>
                {state === 'en' && (
                  <>
                    <strong>Aesthetics:</strong> Wall mounting ensures a modern
                    and tidy appearance. No cables - cable-free!
                  </>
                )}
                {state === 'de' && (
                  <>
                    <strong>Ästhetik:</strong> Die Wandmontage sorgt für ein
                    modernes und aufgeräumtes Erscheinungsbild. Keine Kabel -
                    kabelfrei!
                  </>
                )}
              </li>

              <li>
                {state === 'en' && (
                  <>
                    <strong>Safety:</strong> Reduced risk of the device being
                    knocked over or moved. Accuracy and comparability of
                    measurement results. Ensuring that the SQ-Panel is not
                    accidentally or intentionally switched off, thereby
                    deactivating safety functions.
                  </>
                )}
                {state === 'de' && (
                  <>
                    <strong>Sicherheit:</strong> Weniger Risiko, dass das Gerät
                    umgestoßen oder verschoben wird. Genauigkeit und
                    Vergleichbarkeit der Messergebnisse. Sicherstellung, dass
                    das SQ-Panel nicht versehentlich oder absichtlich
                    ausgeschaltet wird und damit Sicherheitsfunktionen
                    inaktiviert werden.
                  </>
                )}
              </li>
            </ul>
            <div className="mb-2">
              <iframe
                width="1150"
                height="450"
                src="https://www.youtube.com/embed/kLtLz_UDwzY"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <h4>
                {state === 'en' && (
                  <>Theft protection through flush-mounted installation. </>
                )}
                {state === 'de' && <>Diebstahlschutz durch Unterputzmontage.</>}
              </h4>
            </div>
            <div>
              <p>
                {state === 'en' && (
                  <>
                    To minimize the risk of the Carenuity SQ panel being stolen
                    in public spaces, Flush mounting is recommended instead of
                    placing it on a table as a 5V USB device. By flush-mounting,
                    the display is firmly integrated into the wall, which
                    increases the likelihood The risk of theft is significantly
                    reduced compared to a free-standing device with a USB cable.
                    This Measure can be viewed as a form of structural security
                    in accordance with applicable safety standards.{' '}
                  </>
                )}
                {state === 'de' && (
                  <>
                    Um das Risiko eines Diebstahls des SQ-Panels von Carenuity
                    im öffentlichen Raum zu minimieren, empfiehlt sich eine
                    Unterputzmontage anstelle einer Platzierung als 5V-USB-Gerät
                    auf einem Tisch. Durch die Unterputzmontage wird das Display
                    fest in die Wand integriert, was die Wahrscheinlichkeit
                    eines Diebstahls im Vergleich zu einem frei stehenden Gerät
                    mit USB-Kabel erheblich reduziert. Diese Maßnahme kann als
                    eine Form der baulichen Sicherung gemäß den geltenden
                    Sicherheitsstandards betrachtet werden.
                  </>
                )}
              </p>
              <p>
                {state === 'en' && (
                  <>
                    Although the display can still be removed, it is less likely
                    to be stolen because it is firmly anchored probably.
                    Additionally, the cloud-bound device can be configured to
                    allow removal from the wall is registered. This enables a
                    warning if the device is removed without authorization and
                    therefore increases the security of the system. In legal
                    terms, this is considered a preventive measure to secure
                    Property in accordance with relevant regulations and
                    standards.{' '}
                  </>
                )}
                {state === 'de' && (
                  <>
                    Obwohl das Display weiterhin abgezogen werden kann, ist der
                    Diebstahl durch die feste Verankerung weniger
                    wahrscheinlich. Zusätzlich kann das Cloud gebundene Gerät so
                    konfiguriert werden, dass ein Entfernen aus der Wand
                    registriert wird. Dies ermöglicht eine Warnung, falls das
                    Gerät unbefugt entfernt wird, und erhöht somit die
                    Sicherheit des Systems. In rechtlicher Hinsicht gilt dies
                    als eine präventive Maßnahme zur Sicherung von Eigentum
                    gemäß den einschlägigen Vorschriften und Normen.
                  </>
                )}
              </p>

              <div />
            </div>
          </div>

          <div className="mb-4"></div>
          <div></div>
          <div>
            <h4>
              {state === 'en' && <>Conclusion on the mounting options. </>}
              {state === 'de' && <>Fazit zu den Montageoptionen.</>}
            </h4>
            <p>
              {state === 'en' && (
                <>
                  Both mounting options have their advantages and the choice
                  depends on your specific requirements and preferences. We
                  recommend wall mounting for permanent installation and table
                  stand (docking station) for the initial phase of familiarizing
                  yourself with the SQ-Panel.
                </>
              )}
              {state === 'de' && (
                <>
                  Beide Montage-Optionen haben ihre Vorzüge, und die Wahl hängt
                  von Ihren spezifischen Anforderungen und Präferenzen ab. Wir
                  empfehlen für die dauerhafte Montage die Anbringung an der
                  Wand, und für die erste Phase des Vertraut-Werdens mit dem
                  SQ-Panel die Aufstellung mittels Tischständer
                  (Docking-Station).
                </>
              )}
            </p>
          </div>

          <div className="mb-6">
            {state === 'en' && <> </>}
            {state === 'de' && <></>}
            <h4>
              {state === 'en' && <>Technical Details </>}
              {state === 'de' && <>Technische Details</>}
            </h4>
            <table
              style={{
                width: '100%',
                border: '1px solid #dddddd',
                padding: '20px',
              }}
            >
              <tr style={{ background: '#198754', color: '#ffffff' }}>
                <th
                  style={{
                    width: '30%',
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <>Feature </>}
                  {state === 'de' && <>Besonderheit</>}
                </th>
                <th
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <>Details </>}
                  {state === 'de' && <>Details</>}
                </th>
              </tr>
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <>Product Type </>}
                  {state === 'de' && <>Produkttyp</>}
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <>Sensor Panel </>}
                  {state === 'de' && <>Sensorpanel</>}
                </td>
              </tr>
              <tr style={{ background: '#eeeeee' }}>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <>Power Consumption </>}
                  {state === 'de' && <>Stromverbrauch</>}
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && (
                    <>
                      {' '}
                      (direct connection with 220-240V AC Transformer) max 5W
                      120-240AC 50/60Hz
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      {' '}
                      (direkter Anschluss mit 220-240V AC Transformator) max 5W
                      120-240AC 50/60Hz
                    </>
                  )}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <> Light Output</>}
                  {state === 'de' && <>Lichtleistung</>}
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && (
                    <>
                      {' '}
                      200 lumen/meter<sup>2</sup>/steradian
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      200 lumen/meter<sup>2</sup>/steradian
                    </>
                  )}
                </td>
              </tr>
              {/* <tr style={{ background: '#eeeeee' }}>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <>Color Temperature </>}
                  {state === 'de' && <>Farbtemperatur</>}
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <>4200K (Neutral White) </>}
                  {state === 'de' && <>4200K (Neutralweiß)</>}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <> Panel Size</>}
                  {state === 'de' && <>Panelgröße</>}
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <>Slim / SQ-15 </>}
                  {state === 'de' && <>Schlank / SQ-15</>}
                </td>
              </tr>
              <tr style={{ background: '#eeeeee' }}>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <> LED Type</>}
                  {state === 'de' && <>LED-Typ</>}
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <>SMD (Surface-Mounted Diode) </>}
                  {state === 'de' && <>SMD (Oberflächenmontierte Diode)</>}
                </td>
              </tr> */}
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <>Display Size </>}
                  {state === 'de' && <>Anzeigegröße</>}
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <>2.6-inch touchscreen </>}
                  {state === 'de' && <>2,6-Zoll-Touchscreen</>}
                </td>
              </tr>
              <tr style={{ background: '#eeeeee' }}>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <>60-GHz Radar Sensor </>}
                  {state === 'de' && <>60-GHz-Radarsensor</>}
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <> 60-GHz Radar Sensor</>}
                  {state === 'de' && <>60-GHz-Radarsensor</>}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <>Radar Field of View (FoV) </>}
                  {state === 'de' && <>Radarsichtfeld</>}
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && (
                    <>
                      90° Horizontal Plane Beamwidth (HPBW) -+45<sup>o</sup>{' '}
                      Azimuth & +40<sup>o</sup> Elevation FoV{' '}
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      90° horizontale ebene Strahlbreite (HPBW) -+45<sup>o</sup>{' '}
                      Azimuth & +40<sup>o</sup> Elevation FoV
                    </>
                  )}
                </td>
              </tr>
              <tr style={{ background: '#eeeeee' }}>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <>Radar Applications </>}
                  {state === 'de' && <>Radaranwendungen</>}
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && (
                    <>Micro-motion detection, industrial and consumer IoT </>
                  )}
                  {state === 'de' && (
                    <>
                      Mikrobewegungserkennung, industriell und Verbraucher-IoT
                    </>
                  )}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <>Antenna</>}
                  {state === 'de' && <>Antenne</>}
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && (
                    <>
                      {' '}
                      Antennas-in-Package (AIP) design for compact integration
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      Antennas-in-Package (AIP)-Design für kompakte Integration
                    </>
                  )}
                </td>
              </tr>
              {/* <tr style={{ background: '#eeeeee' }}>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <>Power Consumption </>}
                  {state === 'de' && <>Stromverbrauch</>}
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <>200 mA </>}
                  {state === 'de' && <>200 mA</>}
                </td>
              </tr> */}
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <> Environmental Usage</>}
                  {state === 'de' && <>Umweltnutzung</>}
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && (
                    <> Suitable for indoor applications, optimized for IoT</>
                  )}
                  {state === 'de' && (
                    <>Geeignet für Innenanwendungen, optimiert für IoT</>
                  )}
                </td>
              </tr>
              <tr style={{ background: '#eeeeee' }}>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <> Temperature Sensor</>}
                  {state === 'de' && <>Temperatursensor</>}
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && (
                    <>
                      {' '}
                      Monitors the ambient temperature, enabling climate control
                      systems and user comfort adjustments
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      Überwacht die Umgebungstemperatur, Ermöglicht
                      Klimatisierungssysteme und Anpassungen des
                      Benutzerkomforts
                    </>
                  )}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <> Humidity Sensor</>}
                  {state === 'de' && <>Feuchtigkeitssensor</>}
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && (
                    <>
                      Tracks humidity levels to support air quality monitoring
                      and HVAC optimization{' '}
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      Verfolgt die Luftfeuchtigkeit, um die Luft zu unterstützen
                      Qualitätsüberwachung und HVAC-Optimierung
                    </>
                  )}
                </td>
              </tr>
              <tr style={{ background: '#eeeeee' }}>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <> VOC Sensor</>}
                  {state === 'de' && <>VOC-Sensor</>}
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && (
                    <>
                      {' '}
                      Measures total volatile organic compounds to monitor air
                      quality
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      Misst die Gesamtmenge an flüchtigen organischen Stoffen
                      Verbindungen zur Überwachung der Luftqualität
                    </>
                  )}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <>CO2 Sensor </>}
                  {state === 'de' && <>CO2-Sensor</>}
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && (
                    <>
                      {' '}
                      Monitors carbon dioxide levels to ensure a healthy indoor
                      environment
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      Überwacht den Kohlendioxidgehalt, um sicherzustellen ein
                      gesundes Raumklima
                    </>
                  )}
                </td>
              </tr>
              <tr style={{ background: '#eeeeee' }}>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <>Indoor Air Quality Sensor </>}
                  {state === 'de' && (
                    <>Sensor für die Luftqualität in Innenräumen</>
                  )}
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && (
                    <>
                      Monitors overall air quality, combining data from multiple
                      sensors{' '}
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      Überwacht die allgemeine Luftqualität, Kombinieren von
                      Daten mehrerer Sensoren
                    </>
                  )}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <>Pressure Sensor </>}
                  {state === 'de' && <>Drucksensor</>}
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && (
                    <>
                      {' '}
                      Measures air pressure to provide comprehensive
                      environmental monitoring
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      Misst den Luftdruck sorgen für eine umfassende
                      Umweltüberwachung
                    </>
                  )}
                </td>
              </tr>
              {/* <tr style={{ background: '#eeeeee' }}>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && <> Proximity Sensor</>}
                  {state === 'de' && <>Näherungssensor</>}
                </td>
                <td
                  style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}
                >
                  {state === 'en' && (
                    <>
                      {' '}
                      Senses nearby objects to enable automatic activation of
                      features like lighting when someone is present
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      Erkennt Objekte in der Nähe, um die automatische
                      Aktivierung zu ermöglichen Aktivierung von Funktionen wie
                      Beleuchtung, wenn jemand anwesend ist
                    </>
                  )}
                </td>
              </tr> */}
            </table>
          </div>

          <div className="mb-4">
            <h4>
              {state === 'en' && (
                <>Information video on the technology used. </>
              )}
              {state === 'de' && (
                <>Informationsvideo zur eingesetzten Technik</>
              )}
            </h4>
            <div className="mb-2">
              <iframe
                width="1150"
                height="450"
                src="https://www.youtube.com/embed/b_ILJvUFYYY"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div>
            <h4>
              {state === 'en' && <>Advantages of the 868 MHz Frequency </>}
              {state === 'de' && <>Vorteile der 868 MHz-Frequenz</>}
            </h4>
            <ul style={{ listStyleType: 'square' }}>
              <li>
                {state === 'en' && (
                  <>
                    <strong> Increased Range: </strong>
                    The 868 MHz frequency allows for a greater range of wireless
                    connections, which is particularly beneficial in larger
                    homes or buildings.
                  </>
                )}
                {state === 'de' && (
                  <>
                    <strong>Erhöhte Reichweite: </strong>
                    Die 868 MHz-Frequenz ermöglicht eine größere Reichweite der
                    Funkverbindungen, was besonders in größeren Häusern oder
                    Gebäuden von Vorteil ist.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    <strong>Better Wall Penetration: </strong>
                    Frequency has better penetration through thick walls
                    compared to 2.4 GHz, leading to more reliable connections
                    indoors.
                  </>
                )}
                {state === 'de' && (
                  <>
                    <strong>Bessere Durchdringung von Wänden: </strong>
                    Diese Frequenz hat eine bessere Durchdringung von dicken
                    Wänden im Vergleich zu 2,4 GHz, was zu einer zuverlässigeren
                    Verbindung in Innenräumen führt.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    <strong>
                      Less Interference and More Bandwidth for Your Home
                      Network:{' '}
                    </strong>
                    Since the 868 MHz frequency is less congested than the 2.4
                    GHz band, there is less interference from other devices like
                    Wi-Fi or Bluetooth, resulting in more speed and bandwidth
                    for your devices.
                  </>
                )}
                {state === 'de' && (
                  <>
                    <strong>
                      Weniger Störungen und mehr Bandbreite für Ihre Geräte:{' '}
                    </strong>
                    Da die 868 MHz-Frequenz weniger überlastet ist als das 2,4
                    GHz-Band, gibt es weniger Störungen durch andere Geräte wie
                    WLAN oder Bluetooth und mehr Geschwindigkeit und Bandbreite
                    für Ihre Geräte.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    <strong>Energy Efficiency: </strong>
                    Devices operating on 868 MHz can be more energy-efficient as
                    they require less power to penetrate walls.
                  </>
                )}
                {state === 'de' && (
                  <>
                    <strong> Sparsamer dank Energieeffizienz: </strong>
                    Geräte, die auf 868 MHz senden, können energieeffizienter
                    sein, da sie weniger Energie benötigen, um durch Wände zu
                    dringen.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    <strong>Security and Reliability: </strong>
                    The bidirectional communication and encryption of all radio
                    packets enhance the security and reliability of the system.
                  </>
                )}
                {state === 'de' && (
                  <>
                    <strong>Sicherheit und Zuverlässigkeit: </strong>
                    Die bidirektionale Kommunikation und die Verschlüsselung
                    aller Funkpakete erhöhen die Sicherheit und Zuverlässigkeit
                    des Systems.
                  </>
                )}
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h4>
              {state === 'en' && <>Topic: Data security </>}
              {state === 'de' && <>Thema Datensicherheit</>}
            </h4>
            <p>
              {state === 'en' && (
                <>
                  The SQ-Panel meets the highest security requirements and has
                  end-to-end encryption. A special security chip (HW-Security)
                  contains our certificate, which ensures a continuous secure
                  connection of the sensor data to our servers. We are a
                  registered partner of Gaia-X and plan to store all data
                  exclusively on European servers. This infrastructure complies
                  with German security standards. Your personal cloud for the
                  automatic storage of your sensor data will be based on the
                  European cloud initiative Gaia-X as soon as it is available.
                </>
              )}
              {state === 'de' && (
                <>
                  Das SQ-Panel entspricht den höchsten Sicherheitsanforderungen
                  und verfügt über eine Ende-zu-Ende-Verschlüsselung. Ein
                  spezieller Sicherheitschip (HW-Security) enthält unser
                  Zertifikat, das eine kontinuierliche sichere Verbindung der
                  Sensordaten zu unseren Servern gewährleistet. Wir sind
                  eingetragener Partner von Gaia-X und planen alle Daten
                  ausschließlich auf europäischen Servern zu speichern. Diese
                  Infrastruktur entspricht den deutschen Sicherheitsnormen. Ihre
                  persönliche Cloud für die automatische Ablage Ihrer
                  Sensordaten wird sobald verfügbar auf der europäischen
                  Cloud-Initiative Gaia-X basieren.
                </>
              )}
            </p>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/content/kickstarter/gaia-x.PNG"
              className=" wow fadeInUp"
              data-wow-delay="100ms"
              alt="..."
              style={{
                visibility: 'visible',
                animationDelay: '100ms',
                animationName: 'fadeIn',
              }}
            />
            <p>
              {state === 'en' && (
                <>
                  Gaia-X is an initiative we actively support that aims to
                  create a secure and trusted data infrastructure for Europe.{' '}
                  <br />
                  <strong>The benefits on Gaia-X include:</strong>
                </>
              )}
              {state === 'de' && (
                <>
                  Gaia-X ist eine Initiative, die wir aktiv unterstützen und die
                  darauf abzielt, eine sichere und vertrauenswürdige
                  Dateninfrastruktur für Europa zu schaffen. <br />
                  <strong> Die Vorteile auf Gaia-X umfassen: </strong>
                </>
              )}
            </p>
            <ul style={{ listStyleType: 'square' }}>
              <li>
                {state === 'en' && (
                  <>
                    <strong>Security and data protection : </strong> End-to-end
                    encryption ensures that your data remains safe a nd
                    protected during transmission and storage in accordance with
                    European standards1.
                  </>
                )}
                {state === 'de' && (
                  <>
                    <strong>Sicherheit und Datenschutz:</strong> Durch
                    End-to-End-Verschlüsselung bleiben Ihre Daten während der
                    Übertragung und Speicherung sicher und geschützt nach
                    europäischen Standards1.
                  </>
                )}
              </li>

              <li>
                {state === 'en' && (
                  <>
                    <strong>Flexibility and interoperability :</strong> An open
                    architecture enables easy integration and promotes
                    collaboration between different cloud services1.
                  </>
                )}
                {state === 'de' && (
                  <>
                    <strong>Flexibilität und Interoperabilität:</strong>Eine
                    offene Architektur ermöglicht eine einfache Integration und
                    fördert die Zusammenarbeit zwische verschiedenen
                    Cloud-Diensten1.
                  </>
                )}
              </li>

              <li>
                {state === 'en' && (
                  <>
                    <strong>Innovation and competition :</strong> Gaia-X
                    promotes innovation and strengthens competition by
                    supporting European principles such as data sovereignty,
                    GDPR compliance, transparency and open source2.
                  </>
                )}
                {state === 'de' && (
                  <>
                    <strong>Innovation und Wettbewerb: </strong> Gaia-X fördert
                    Innovationen und stärkt den Wettbewerb durch die
                    Unterstützung von europäischen Prinzipien wie
                    Datensouveränität, DSGVO-Konformität, Transparenz und Open
                    Source2.
                  </>
                )}
              </li>
            </ul>
            <p>
              {state === 'en' && (
                <>
                  In addition, Gaia-X aims to tap into decentralized data pools
                  and sources and bring them together in a harmonized manner to
                  enable seamless and efficient use for you.
                </>
              )}
              {state === 'de' && (
                <>
                  Zusätzlich zielt Gaia-X darauf ab, dezentrale Datenpools und
                  -quellen zu erschließen und auf harmonisierte Weise
                  zusammenzubringen, um medienbruchfreie und effiziente Nutzung
                  für Sie zu ermöglichen.
                </>
              )}
            </p>
          </div>
          <div>
            <h4>
              {state === 'en' && <>Unique selling point reach.</>}
              {state === 'de' && <>Alleinstellungsmerkmal Reichweite.</>}
            </h4>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/content/kickstarter/hz.PNG"
              className=" wow fadeInUp"
              data-wow-delay="100ms"
              alt="..."
              style={{
                visibility: 'visible',
                animationDelay: '100ms',
                animationName: 'fadeIn',
              }}
            />
            <p>
              {state === 'en' && (
                <>
                  The extended range is about 80m, which is significantly
                  further than any WLAN.
                </>
              )}
              {state === 'de' && (
                <>
                  Die erweiterte Reichweite beträgt ca. 80m, das ist deutlich
                  weiter als jedes WLAN.
                </>
              )}
            </p>
          </div>
          <div>
            <h4>
              {state === 'en' && (
                <>Perfect design - a question of good taste: JUNG</>
              )}
              {state === 'de' && <></>}
            </h4>

            <p>
              {state === 'en' && (
                <>
                  The SQ-Panel integrates perfectly into the JUNG design switch
                  system, allowing you to control your household appliances in a
                  proven location near the door next to classic JUNG switches,
                  possibly in a multiple frame (two, three, four frames), and
                  enable you to control the settings via the display in an
                  extremely convenient way. In addition to the precise
                  compatibility with JUNG, which arose from direct cooperation
                  with the manufacturer&apos;s team, we are also planning
                  integration into other renowned switch systems, such as those
                  from Busch-Jäger and Gira.
                </>
              )}
              {state === 'de' && (
                <>
                  Das SQ-Panel integriert sich perfekt in das Schaltersystem von
                  JUNG-Design, um an bewährter Stelle in Tür-Nähe neben
                  klassischen JUNG Schaltern gegebenenfalls im Mehrfachrahmen
                  (Zweier, Dreier-Vierer-Rahmen) Ihre Haushaltsgeräte zu steuern
                  und es Ihnen ermöglichen, die Einstellungen über das Display
                  auf äußerst bequeme Weise zu kontrollieren. Neben der
                  passgenauen Kompatibilität mit JUNG, die aus der direkten
                  Zusammenarbeit mit dem Hersteller-Team entstand, planen wir
                  auch die Integration in weitere renommierte Schaltersysteme,
                  wie die von Busch-Jäger und Gira.
                </>
              )}
            </p>
            <p>
              {state === 'en' && (
                <>
                  Do you want a specific setting to maintain the temperature and
                  brightness of the room when you are working, sleeping or just
                  watching a movie?
                  <br />
                  With SQ-Panel, you will preset different scenes based on
                  certain conditions detected by radar and AI algorithms, which
                  you can then trigger at any time. This can mean that with just
                  a gesture, a tap of the finger or when tiredness is detected,
                  you can automatically switch from watching movies (cinema
                  mode) to sleep mode, and all settings are adjusted for the new
                  situation.
                  <br />
                  Or imagine that sometimes when you come home you only want to
                  turn on one of the lights in the living room to enjoy alone
                  and in peace, but sometimes you may want to turn on all the
                  lights in the living room to welcome family or friends. With
                  the SQ-Panel you can control the same type of smart home
                  devices for yourself individually or for a group of people,
                  depending on the number of people detected in the room. You
                  can easily change these settings as you wish, giving you the
                  freedom to let your smart home act automatically exactly as
                  you want. You can also be informed about a change in the room
                  situation via voice assistants and release an automatically
                  detected change via your voice, gesture or touch.
                </>
              )}
              {state === 'de' && (
                <>
                  Möchten Sie eine bestimmte Einstellung, um die Temperatur und
                  Helligkeit des Raumes zu erhalten, wenn Sie arbeiten, schlafen
                  oder einfach nur einen Film ansehen?
                  <br />
                  Mit SQ-Panel werden Sie auf bestimmte Bedingungen, die mittels
                  Radar und AI-Algorithmen erfasst werden, verschiedene Szenen
                  vor einstellen, die Sie dann jederzeit auslösen lassen können.
                  Das kann bedeuten, dass Sie mit nur einer Geste, einem
                  Fingertipp oder bei erkannter Müdigkeit automatisch vom
                  Filme-Schauen (Kino-Modus) in den Schlafmodus wechseln, und
                  alle Einstellungen für die neue Situation angepasst werden.
                  <br />
                  Oder Stellen Sie sich vor, dass Sie manchmal, wenn Sie nach
                  Hause kommen, nur eines der Lichter im Wohnzimmer einschalten
                  möchten, um alleine und in Ruhe zu genießen, aber manchmal
                  möchten Sie vielleicht auch alle Lichter im Wohnzimmer
                  einschalten, um Familie oder Freunde zu begrüßen. Mit dem
                  SQ-Panel können Sie dieselbe Art von Smart-Home-Geräten für
                  sich einzeln oder für eine Gruppe von Menschen steuern, je
                  nach der Anzahl der erkannten Personen im Raum. Sie können
                  diese Einstellungen ganz einfach nach Belieben ändern und
                  haben so die Freiheit, Ihr Smart Home genau nach Ihren
                  Vorstellungen automatisch agieren zu lassen. Sie können sich
                  aber auch über Sprachassistenten vor einer Änderung der
                  Raumsituation darüber informieren lassen und eine automatische
                  erkannte Veränderung über ihre Sprache, Geste oder Touch
                  freigeben.
                </>
              )}
            </p>
            <p>
              {state === 'en' && (
                <>
                  So that you can also control other devices with the SQ-Panel
                  in the future, the device is equipped with a touch screen and
                  gesture recognition, so that you can see and control the
                  devices you like to use as an alternative to the room
                  parameter display on the display, just as you have previously
                  set it with classic switches.
                </>
              )}
              {state === 'de' && (
                <>
                  Damit Sie mit dem SQ-Panel zukünftig auch andere Geräte
                  steuern können, ist das Gerät mit einem Touch-Screen und
                  Gesten-Erkennung ausgestattet, so dass Sie die von Ihnen gerne
                  genutzten Geräte alternativ zur Raumparameteranzeige auf dem
                  Display sehen und steuern können, so wie Sie es bisher mit
                  klassischen Schaltern einstellen.
                </>
              )}
            </p>
          </div>
          <div className="col-lg-8 ">
            <p>
              {state === 'en' && (
                <>
                  With the SQ-Panel, which integrates perfectly with every app
                  of the Matter standard, your smart home experience is
                  significantly optimized. Control over your household
                  appliances is expanded to include automatic situation
                  recognition thanks to radar. In addition to direct control on
                  the SQ-Panel or in the house, you can also provide aspects of
                  security and care for family members in your smart home
                  remotely via the app and be alerted in critical situations.
                  <br />
                  With the SQ-Panel, your devices can remain in energy-saving
                  mode when you are away and automatically switch to standby
                  when you are there. This helps save money. The SQ-Panel will
                  also help you monitor your regular household appliances via
                  the display, automate them with gesture or simple voice
                  control via Alexa, Google, Home Assistant or Siri, making your
                  home smarter and more comfortable.
                  <br />
                  With powerful built-in sensors and the Thread connection to
                  Matter, the SQ-Panel not only enables comprehensive automation
                  control, but also more information about your environment,
                  including weather, outside temperature, inside temperature,
                  device status, alarm indicator, time and date.
                </>
              )}
              {state === 'de' && (
                <>
                  Mit dem SQ-Panel, das sich perfekt in jede App des Matter
                  Standards integriert, wird Ihr Smart-Home-Erlebnis deutlich
                  optimiert. Die Kontrolle über Ihre Haushaltsgeräte ist dank
                  Radar um eine automatische Situationserkennung erweitert.
                  Neben der direkten Steuerung am SQ-Panel oder im Haus können
                  Sie auch Aspekte der Sicherheit und die Fürsorge für
                  Familienmitgliedern in Ihrem Smart Home über die App aus der
                  Ferne geben und in kritischen Situationen alarmiert werden.
                  <br />
                  Mit dem SQ-Panel können Ihre Geräte bei Abwesenheit im
                  Energiespar-Modus bleiben, und automatisch in den Stand-by
                  wechseln, wenn Sie anwesend sind. Das hilft Geld zu sparen.
                  Das SQ-Panel wird Ihnen auch helfen, Ihre normalen
                  Haushaltsgeräte über das Display zu monitoren, mit Geste oder
                  einfacher Sprachsteuerung über Alexa, Google, Home-Assistant
                  oder Siri zu automatisieren und damit Ihr Zuhause
                  intelligenter und komfortabler zu gestalten. <br />
                  Mit leistungsstarken eingebauten Sensoren und der Thread
                  Verbindung zu Matter ermöglicht das SQ-Panel nicht nur eine
                  umfängliche Automatisierungssteuerung, sondern auch mehr
                  Informationen über Ihre Umgebung, einschließlich Wetter,
                  Außentemperatur, Innentemperatur, Geräte-Status, Alarmanzeige,
                  Uhrzeit und Datum.
                </>
              )}
            </p>
          </div>
          <div className="col-lg-4 ">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/content/kickstarter/sq-panel03.PNG"
              className=" wow fadeInUp"
              data-wow-delay="100ms"
              alt="..."
              style={{
                visibility: 'visible',
                animationDelay: '100ms',
                animationName: 'fadeIn',
              }}
            />
          </div>
          <div>
            <h4>
              {state === 'en' && <>Outlook</>}
              {state === 'de' && <>Ausblick</>}
            </h4>
            <p>
              {state === 'en' && (
                <>
                  How would it be if the SQ-Panel gave you an easy way to
                  monitor and control other devices in your home or to record
                  other environmental parameters by adding more sensors - and
                  still control all of this with a glance at the SQ-Panel
                  display? Thatr&apos;s exactly what the SQ-Panel should offer
                  you: the display of lights, open windows, energy consumption
                  and even electric blinds and curtains - the world of home
                  automation should remain accessible to you at a glance and
                  improve your comfort!
                  <br />
                  Use the touchscreen up close, get information using voice
                  assistants without being near the SQ-Panel, or use your
                  standard app to control the SQ-Panel in conjunction with all
                  your devices thanks to Matter and monitor your smart home,
                  even if you are miles away! And when you are within sight, you
                  should be able to adjust the font size of the letters a nd
                  numbers on the tiles of the display depending on the distance.
                </>
              )}
              {state === 'de' && (
                <>
                  Wie wäre es, wenn Sie mit dem SQ-Panel eine einfache
                  Möglichkeit hätten, auch andere Geräte in Ihrem Haus zu
                  monitoren und zu steuern oder weitere Umgebungsparameter durch
                  Hinzufügen von weiteren Sensoren zu erfassen- und das alles
                  weiterhin mit einem Blick auf das SQ-Panel Display zu
                  kontrollieren? Genau das soll Ihnen SQ-Panel bieten: Die
                  Anzeige von Lichtern, offenen Fenstern, Energieverbräuchen bis
                  hin zu elektrischen Rollos und Vorhängen - die Welt der
                  Hausautomation soll Ihnen auf einem Blick zugänglich bleiben
                  und Ihren Komfort verbessern!
                  <br />
                  Verwenden Sie den Touchscreen aus nächster Nähe, informieren
                  Sie sich mittels Sprachassistenten, ohne in der Nähe des
                  SQ-Panels zu sein, oder verwenden Sie Ihre Standard-App, um
                  das SQ-Panel im Zusammenspiel mit allen Ihren Geräten dank
                  Matter zu steuern und Ihr intelligentes Zuhause zu überwachen,
                  auch wenn Sie meilenweit entfernt sind! Und wenn sie in
                  Sichtweite sind sollen Sie sich abstandabhängig die
                  Schriftgröße der Buchstaben und Zahlen auf den Kacheln des
                  Displays anpassen lassen können.
                </>
              )}
            </p>
          </div>
          <div>
            <h4>
              {state === 'en' && <>Funding: What we use your support for.</>}
              {state === 'de' && (
                <>Funding: Wofür wir Ihre Unterstützung einsetzen.</>
              )}
            </h4>
            <p>
              {state === 'en' && (
                <>
                  Prototypes have already been developed to test the whole
                  concept. <br />
                  The funds raised and your support will help us:
                </>
              )}
              {state === 'de' && (
                <>
                  Es wurden bereits Prototypen entwickelt, um das gesamte
                  Konzept zu testen.
                  <br />
                  Die gesammelten Gelder und Ihre Unterstützung werden uns dabei
                  helfen:
                </>
              )}
            </p>
            <ul style={{ listStyleType: 'square' }}>
              <li>
                {state === 'en' && (
                  <>
                    Replacing the radar sensor for better accuracy and
                    additional features
                  </>
                )}
                {state === 'de' && (
                  <>
                    Austausch des Radar-Sensors für eine bessere Genauigkeit und
                    weitere Features{' '}
                  </>
                )}
              </li>

              <li>
                {state === 'en' && (
                  <>Improvement of software interfaces (APIs) </>
                )}
                {state === 'de' && (
                  <>Verbesserung der Software-Schnittstellen (APIs)</>
                )}
              </li>

              <li>
                {state === 'en' && (
                  <>
                    Finalization of the design for the table stand as a docking
                    station
                  </>
                )}
                {state === 'de' && (
                  <>
                    Finalisierung des Designs für den Tischaufsteller als
                    Docking-Station
                  </>
                )}
              </li>

              <li>
                {state === 'en' && <>Optimization of production</>}
                {state === 'de' && <>Optimierung der Produktion</>}
              </li>

              <li>
                {state === 'en' && (
                  <>
                    Completion of certifications (CE, Matter) and in-depth
                    integration into Home Assistant.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Abschluss der Zertifizierungen (CE, Matter) und vertiefte
                    Integration in Home Assistant.
                  </>
                )}
              </li>
            </ul>
          </div>
          <div>
            <h4>
              {state === 'en' && <>Risks and challenges.</>}
              {state === 'de' && <>Risiken und Herausforderungen</>}
            </h4>
            <p>
              {state === 'en' && (
                <>
                  ChipGlobe GmbH, the parent company of Carenuity, is very well
                  equipped to ensure high-quality and consistent production of
                  the SQ-Panel. We have a mature infrastructure for the
                  operation and updates of the SQ-Panels (OTA updates), have
                  production-ready prototypes and have thus already carried out
                  a field test of this small series (prototypes). We now need
                  your support to start production of the SQ-Panel series
                  production. We are ready to fulfill all order quantities.
                  Should there be any delays in delivery, we will do our best to
                  find a solution for you. You can also rest assured that we
                  will keep you regularly informed about the status of things.
                  We are prepared for the requirements of order processing and
                  plan to deliver by July 2025.
                </>
              )}
              {state === 'de' && (
                <>
                  ChipGlobe GmbH, die Muttergesellschaft von Carenuity, ist sehr
                  gut gerüstet, um eine hochwertige und konstante Produktion des
                  SQ-Panels zu gewährleisten. Wir verfügen über eine ausgereifte
                  Infrastruktur für den Betrieb und die Updates der SQ-Panels
                  (OTA-Updates), haben produktionsreife Prototypen und damit
                  bereits einen Feldtest dieser Kleinserie (Prototypen)
                  durchgeführt. Wir benötigen nun Ihre Unterstützung für den
                  Produktionsstart der SQ-Panel-Serienfertigung. Wir sind
                  bereit, alle Bestellmengen zu erfüllen. Sollte es zu
                  Verzögerungen bei der Lieferung kommen, werden wir unser
                  Bestes tun, um eine Lösung für Sie zu finden. Sie können sich
                  auch darauf verlassen, dass wir Sie regelmäßig über den Stand
                  der Dinge informieren werden. Wir sind auf die Anforderungen
                  der Auftragsabwicklung vorbereitet und planen bis Juli 2025 zu
                  liefern.
                </>
              )}
            </p>
            <a
              href="https://www.kickstarter.com/projects/sq-panel/endlich-ein-einfach-bedienbares-sensor-display-in-matter"
              className="text-success"
            >
              {state === 'en' && (
                <>
                  <strong> Learn about accountability on Kickstarter</strong>
                </>
              )}
              {state === 'de' && (
                <>
                  <strong>
                    {' '}
                    Erfahren Sie mehr über Verantwortung auf Kickstarter
                  </strong>
                </>
              )}
            </a>{' '}
          </div>
          <div>
            <h4>
              {state === 'en' && <>Use of AI</>}
              {state === 'de' && <>Einsatz von KI</>}
            </h4>
            <p>
              {state === 'en' && (
                <>I plan to use AI-generated content in my project.</>
              )}
              {state === 'de' && (
                <>
                  Ich habe vor, in meinem Projekt KI-generierte Inhalte zu
                  verwenden.
                </>
              )}
            </p>
            <h6>
              {state === 'en' && (
                <>
                  What parts of your project will use AI generated content?
                  Please be as specific as possible.
                </>
              )}
              {state === 'de' && (
                <>
                  In welchen Teilen Ihres Projekts werden KI-generierte Inhalte
                  verwendet? Bitte seien Sie so konkret wie möglich.
                </>
              )}
            </h6>
            <p>
              {state === 'en' && (
                <>
                  Do you have the consent of owners of the works that were (or
                  will be) used to produce the AI generated portion of your
                  projects? Please explain.
                </>
              )}
              {state === 'de' && (
                <>
                  Haben Sie die Zustimmung der Eigentümer der Werke, die zur
                  Produktion des KI-generierten Teils Ihrer Projekte verwendet
                  wurden (oder werden)? Bitte erläutern Sie es.
                </>
              )}
            </p>
            <h6>
              {state === 'en' && (
                <>
                  What parts of your project will use AI generated content?
                  Please be as specific as possible.
                </>
              )}
              {state === 'de' && (
                <>
                  In welchen Teilen Ihres Projekts werden KI-generierte Inhalte
                  verwendet? Bitte seien Sie so konkret wie möglich.
                </>
              )}
            </h6>
            <p>
              {state === 'en' && (
                <>
                  We have the consent of the artists as we have been using a
                  professional license
                  <a href="https://www.synthesia.io/" className="text-success">
                    <strong> (Synthesia.io) </strong>
                  </a>{' '}
                  to generate that storyteller
                  <a
                    href="https://pictory.ai/?el=2000&htrafficsource=pictoryblog"
                    className="text-success"
                  >
                    <strong> (Avatar) </strong>
                  </a>{' '}
                  inside the videos and we are using pictory.ai for the video
                  sequences inside our videos.
                </>
              )}
              {state === 'de' && (
                <>
                  Wir haben die Zustimmung der Künstler, da wir eine
                  professionelle Lizenz
                  <a href="https://www.synthesia.io/" className="text-success">
                    <strong> (Synthesia.io) </strong>
                  </a>{' '}
                  verwendet haben, um diesen Geschichtenerzähler
                  <a
                    href="https://pictory.ai/?el=2000&htrafficsource=pictoryblog"
                    className="text-success"
                  >
                    <strong> (Avatar)</strong>
                  </a>{' '}
                  in den Videos zu generieren, und wir verwenden pictory.ai für
                  die Videosequenzen in unseren Videos.
                </>
              )}
            </p>
          </div>
          <div>
            <h4>
              {state === 'en' && (
                <>I am incorporating AI in my project in another way.</>
              )}
              {state === 'de' && <></>}
            </h4>
            <p>
              {state === 'en' && (
                <>
                  Our Project is not raising funds for an AI tool nor device,
                  nor are we using elements for building the SQ-Panel, that were
                  generated by AI. However, we plan in future (after kickstarter
                  campaign) to offer own developed and optional AI-algorithms
                  for expanding the SQ-Panelr&apos;s features. For transparence,
                  users will get enabled to explicitely opt-in for these.
                </>
              )}
              {state === 'de' && <></>}
            </p>
            <a
              href="https://help.kickstarter.com/hc/en-us/articles/16848396410267-Can-I-use-AI-generated-content-or-create-AI-technology-in-my-project?_gl=1%2A15t54qv%2A_gcl_au%2AODY3MTkzMjc1LjE3MjA0Nzk3ODc.%2A_ga%2AMTIzNjQ1OTE3Ni4xNzIwNDc5Nzg4%2A_ga_C7KQJW1SFV%2AMTcyNTU0NjIxMi42LjEuMTcyNTU2MDIzNC42MC4wLjA."
              className="text-success"
            >
              <strong> Learn about AI policy on Kickstarter</strong>
            </a>{' '}
          </div>
          <div>
            <h4>
              {state === 'en' && <>Environmental commitments</>}
              {state === 'de' && <>Umweltverpflichtungen</>}
            </h4>
            <p>
              {state === 'en' && (
                <>
                  <a
                    href="https://www.kickstarter.com/environment"
                    className="text-success"
                  >
                    <strong> Visit our Environmental Resources Center </strong>
                  </a>{' '}
                  to learn how Kickstarter encourages sustainable practices.
                </>
              )}
              {state === 'de' && (
                <>
                  <a
                    href="https://www.kickstarter.com/environment"
                    className="text-success"
                  >
                    <strong>
                      {' '}
                      Besuchen Sie unser Zentrum für Umweltressourcen{' '}
                    </strong>
                  </a>{' '}
                  um zu erfahren, wie Kickstarter nachhaltige Praktiken fördert.
                </>
              )}
            </p>
            <h6>
              {state === 'en' && <>Long-lasting design</>}
              {state === 'de' && <>Langlebiges Design</>}
            </h6>
            <p>
              {state === 'en' && (
                <>
                  The design of the SQ-Panel was developed in collaboration with
                  the German switch system manufacturer JUNG, which is known for
                  its timeless design.
                </>
              )}
              {state === 'de' && (
                <>
                  Das Design des SQ-Panels wurde in Zusammenarbeit mit dem
                  deutschen Schaltersystemhersteller JUNG entwickelt, der für
                  sein zeitloses Design bekannt ist.
                </>
              )}
            </p>
          </div>
        </div>
        <hr className="mb-8" />
        {/* sq-panel */}
        <div className="row">
          <div className="col-lg-6 mt-n1-9 mb-4 ">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/content/sq-panel-frontview.webp"
              className="mt-1-9 wow fadeInUp img-fluid"
              data-wow-delay="100ms"
              alt="..."
              style={{
                visibility: 'visible',
                animationDelay: '100ms',
                animationName: 'fadeIn',
              }}
            />
          </div>
          <div className="col-lg-6 mt-n1-9 ">
            <video
              src="/videos/content/sq-panel_on_table-stand.mp4"
              loop={true}
              autoPlay={true}
              className="mt-1-9 wow fadeInUp w-100"
              data-wow-delay="100ms"
              style={{
                visibility: 'visible',
                animationDelay: '100ms',
                animationName: 'fadeIn',
              }}
            />
          </div>

          <div className="col-lg-10 mt-n1-9" style={{ textAlign: 'justify' }}>
            <p className="mt-5">
              {state === 'en' && (
                <>
                  Would you like to make your home smarter, safer and healthier?
                </>
              )}
              {state === 'de' && (
                <>
                  Möchten Sie Ihr Zuhause intelligenter, sicherer und gesünder
                  gestalten?
                </>
              )}{' '}
              <br />
              {state === 'en' && (
                <>
                  Would you like to monitor and improve the air quality and
                  comfort in your home and breathe healthy air?
                </>
              )}
              {state === 'de' && (
                <>
                  Möchten Sie die Luftqualität und den Komfort in Ihrem Zuhause
                  überwachen, verbessern und gesunde Luft atmen?
                </>
              )}
              <br />
              {state === 'en' && (
                <>
                  Would you like to stay in touch with your loved ones and know
                  that they are safe and well ventilated even from a distance?
                </>
              )}
              {state === 'de' && (
                <>
                  Möchten Sie mit Ihren Lieben in Verbindung bleiben und sie
                  auch aus der Ferne wohlbehalten in guter Raumluft wissen und
                  sehen dass regelmäßig gelüftet wird?
                </>
              )}
              <br />
              {state === 'en' && (
                <>
                  If you answered yes to any of these questions, then you need
                  the <strong>Carenuity SQ-Panel</strong> - the smart device
                  that helps you live a healthy and connected life with your
                  loved ones.
                </>
              )}
              {state === 'de' && (
                <>
                  Wenn Sie eine dieser Fragen mit „Ja“ beantwortet haben,
                  benötigen Sie das <strong>Carenuity SQ-Panel</strong> - das
                  intelligente Gerät, das Ihnen hilft, ein gesundes und
                  vernetztes Leben mit Ihren Lieben zu führen.
                </>
              )}
            </p>
            <p className="mt-1">
              {state === 'en' && (
                <>
                  The Carenuity SQ-Panel is a 2.6-inch touchscreen with built-in
                  sensors. It displays the relevant sensor values of the room
                  air. These are temperature, humidity, air pressure, carbon
                  dioxide (C02) and airborne organic compounds (TVOC). It also
                  detects the presence of people in the room, which it can
                  detect and monitor up to 6m.
                </>
              )}
              {state === 'de' && (
                <>
                  Das Carenuity SQ-Panel ist ein 2.6-Zoll-Touchscreen mit
                  eingebauten Sensoren. Es zeigt die relevanten Sensorwerte der
                  Raumluft an. Dies sind Temperatur, Luftfeuchtigkeit,
                  Luftdruck, Kohlendioxid (C02) und organische Verbindungen in
                  der Luft (TVOC). Es erkennt auch die Anwesenheit von Personen
                  im Raum, den er bis zu 6m erfassen und überwachen kann.
                </>
              )}
            </p>
            <p className="mt-1">
              {state === 'en' && (
                <>
                  The Carenuity smartphone app allows you to access the SQ-Panel
                  while on the move and lets you monitor the SQ-Panel from
                  anywhere and, for example, activate the alarm when you are
                  away.
                </>
              )}
              {state === 'de' && (
                <>
                  Die Carenuity Smartphone App erlaubt Ihnen den Zugriff auf das
                  SQ-Panel von unterwegs und lässt Sie das SQ-Panel von überall
                  aus monitoren und beispielsweise den Alarm bei Abwesenheit
                  aktivieren.
                </>
              )}
            </p>
            <p className="mt-1">
              {state === 'en' && (
                <>
                  The Carenuity SQ-Panel connects to the Carenuity cloud via the
                  Carenuity Border Router, which acts as a gateway between your
                  home network and the internet. This enables you to access and
                  control your Carenuity SQ-Panel from anywhere, using the
                  Carenuity Home app on your smartphone.
                </>
              )}
              {state === 'de' && (
                <>
                  Das Carenuity SQ-Panel stellt über das eine Verbindung zur
                  Carenuity-Cloud her Carenuity Border Router, der als Gateway
                  zwischen Ihnen fungiert Heimnetzwerk und Internet. Dies
                  ermöglicht Ihnen den Zugriff auf und Steuern Sie Ihr Carenuity
                  SQ-Panel von überall aus mit dem Carenuity Home-App auf Ihrem
                  Smartphone.
                </>
              )}
            </p>
            <p className="mt-1">
              {state === 'en' && <>With the Carenuity Home app, you can</>}{' '}
              {state === 'de' && (
                <>Mit der Carenuity Home-App ist das möglich</>
              )}
              :
            </p>
            <div className="col-10 ms-4 wow fadeIn" data-wow-delay="200ms">
              <div className="d-flex align-items-center">
                <i className="ti-check display-26 text-primary"></i>
                <span className="ms-3 text-dark fw-bold">
                  {state === 'en' && (
                    <>
                      View the sensor values of your Carenuity SQ panel in real
                      time, from anywhere and at any time.
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      Sehen Sie sich die Sensorwerte Ihres Carenuity SQ-Panels
                      in Echtzeit an, von überall und jederzeit.
                    </>
                  )}
                </span>
              </div>
              <div className="d-flex align-items-center">
                <i className="ti-check display-26 text-primary"></i>
                <span className="ms-3 text-dark fw-bold">
                  {state === 'en' && (
                    <>
                      Receive alerts and notifications if the sensor values
                      exceed or fall below the threshold values you have set.
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      Erhalten Sie Warnungen und Benachrichtigungen, wenn der
                      Sensor Werte die von Ihnen festgelegten Schwellenwerte
                      überschreiten oder unterschreiten.
                    </>
                  )}
                </span>
              </div>
              <div className="d-flex align-items-center">
                <i className="ti-check display-26 text-primary"></i>
                <span className="ms-3 text-dark fw-bold">
                  {state === 'en' && (
                    <>
                      Monitor the air quality over time at your loved ones&apos;
                      location or in your home and communicate with your loved
                      ones if you notice that an expected airing or other daily
                      routine has not or not yet taken place.
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      Überwachen Sie den zeitlichen Verlauf der Luftqualität am
                      Standort Ihrer Lieben oder in Ihrem Zuhause und
                      kommunizieren Sie mit ihren Lieben, wenn Sie bemerken,
                      dass ein erwartetes Lüften oder eine andere Alltagsroutine
                      nicht oder noch nicht stattgefunden hat.
                    </>
                  )}
                </span>
              </div>
              <div className="d-flex align-items-center">
                <i className="ti-check display-26 text-primary"></i>
                <span className="ms-3 text-dark fw-bold">
                  {state === 'en' && (
                    <>
                      The historical data and trends of the sensor values can
                      also be helpful. Get personalized insights and tips to
                      improve air quality and safety in your home.
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      Auch die historische Daten und Trends der Sensorwerte
                      können hilfreich sein. Erhalten Sie individuelle Einblicke
                      und Tipps zur Verbesserung der Luftqualität und Sicherheit
                      in Ihrem Zuhause.
                    </>
                  )}
                </span>
              </div>
            </div>
            <p className="mt-3">
              {state === 'en' && (
                <>
                  The Carenuity SQ panel is easy to install and use. You can
                  have it mounted in the wall, in which case it is wireless, or
                  you can simply place it on a table, chest of drawers or shelf.
                  You can adjust the display settings such as brightness and
                  color to suit your preferences.
                </>
              )}
              {state === 'de' && (
                <>
                  Das Carenuity SQ-Panel ist einfach zu installieren und zu
                  verwenden. Sie können es in die Wand montieren lassen, dann
                  ist es kabellos, oder Sie stellen es einfach auf einen Tisch,
                  eine Kommode oder ins Regal. Sie können die
                  Anzeigeeinstellungen wie Helligkeit und Farbe anpassen, ganz
                  nach Ihren Vorlieben.
                </>
              )}
            </p>
            <p className="mt-1">
              {state === 'en' && (
                <>
                  The Carenuity SQ panel is more than just a device: it&apos;s a
                  good and totally discreet way to show your loved ones you
                  care, and for yourself too. It helps to create a comfortable,
                  healthy and safe environment in your home.It also keeps you
                  connected to your loved ones and allows you to care for and
                  support them even when you are not physically there.
                </>
              )}
              {state === 'de' && (
                <>
                  Das Carenuity SQ-Panel ist mehr als nur ein Gerät: Es ist gute
                  und absolut diskrete Art und Weise, ihren Lieben Ihre Fürsorge
                  zu zeigen, und auch für Sie selbst. Es hilft eine komfortable,
                  gesunde und sichere Umgebung in Ihrem Heim zu schaffen. Es
                  hält Sie auch mit Ihren Lieben in einer Verbindung und
                  ermöglicht Ihnen, sie zu betreuen und zu unterstützen, auch
                  wenn Sie sich nicht physisch vor Ort befinden.
                </>
              )}
            </p>
            <p className="mt-1">
              {state === 'en' && (
                <>
                  The Carenuity SQ panel is the solution for your smart home.
                  Support us on Kickstarter and order it today.
                </>
              )}
              {state === 'de' && (
                <>
                  Das Carenuity SQ-Panel ist die Lösung für Ihr Smart Home.
                  Unterstützen Sie uns auf Kickstarter und bestellen Sie es noch
                  heute.
                </>
              )}
            </p>
          </div>
        </div>

        {/* <!--casestudy --> */}

        <hr />
        <h4>
          {state === 'en' && <>Case study for the SQ-Panel</>}
          {state === 'de' && <>Fallstudie zum SQ-Panel</>}
        </h4>
        <div className="container mt-5">
          <div className="row">
            {/* case1 */}
            <div className="col-lg-4 mt-n1-9 mb-5">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '620px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/case/case1.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />

                <div style={{ padding: '10px' }}>
                  <h5>
                    {state === 'en' && <>Home office</>}{' '}
                    {state === 'de' && <>Heimbüro</>}:
                  </h5>
                  <p>
                    {state === 'en' && (
                      <>
                        You work from home and want to ensure that the indoor
                        air quality is optimal.
                        <br />
                        The SQ-Panel shows you the current valuesand warns you
                        if necessary so that you can concentrate on your work.
                      </>
                    )}
                    {state === 'de' && (
                      <>
                        Sie arbeiten von zu Hause aus und möchten sicherstellen,
                        dass die Innenräume gewährleistet sind Die Luftqualität
                        ist optimal.
                        <br />
                        Das SQ-Panel zeigt Ihnen die aktuellen Werte an und
                        warnt Sie bei Bedarf, damit Sie sich auf Ihre Arbeit
                        konzentrieren können.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* case2 */}
            <div className="col-lg-4 mt-n1-9 mb-5">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '620px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/case/case2.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />

                <div style={{ padding: '10px' }}>
                  <h5>
                    {state === 'en' && <>Bedroom</>}{' '}
                    {state === 'de' && <>Schlafzimmer</>}:
                  </h5>
                  <p>
                    {state === 'en' && (
                      <>
                        Before you go to sleep, check the air quality. If the
                        CO2 level is too high, open the window or switch on an
                        air purifier.
                      </>
                    )}
                    {state === 'de' && (
                      <>
                        Überprüfen Sie vor dem Schlafengehen die Luftqualität.
                        Wenn das CO2 Wenn der Füllstand zu hoch ist, öffnen Sie
                        das Fenster oder schalten Sie die Lüftung ein
                        Luftreiniger.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* case3 */}
            <div className="col-lg-4 mt-n1-9 mb-5">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '620px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/case/case3.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />
                <div style={{ padding: '10px' }}>
                  <h5>
                    {state === 'en' && <>Children&apos;s room</>}
                    {state === 'de' && <>Kinderzimmer</>}:
                  </h5>
                  <p>
                    {state === 'en' && (
                      <>
                        The SQ-Panel warns you if the air quality is not ideal.
                        <br />
                        This allows you to take timely action to protect your
                        children&apos;s health
                      </>
                    )}
                    {state === 'de' && (
                      <>
                        Das SQ-Panel warnt Sie, wenn die Luftqualität nicht
                        optimal ist.
                        <br />
                        So können Sie rechtzeitig Maßnahmen zum Schutz Ihres
                        Unternehmens ergreifen Gesundheit der Kinder
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* case4 */}
            <div className="col-lg-4 mt-n1-9 mb-5">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '620px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/case/case4.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />

                <div style={{ padding: '10px' }}>
                  <h5>
                    {state === 'en' && <>Large offices</>}
                    {state === 'de' && <>Große Büros</>}:
                  </h5>
                  <p>
                    {state === 'en' && (
                      <>
                        You work from home and want to ensure that the indoor
                        air quality is optimal.
                        <br />
                        The SQ-Panel shows you the current values and warns you
                        if necessary so that you can concentrate on your work.
                      </>
                    )}
                    {state === 'de' && (
                      <>
                        Sie arbeiten von zu Hause aus und möchten die Raumluft
                        sicherstellen Qualität ist optimal.
                        <br />
                        Das SQ-Panel zeigt Ihnen die aktuellen Werte an und
                        warnt Sie ggf notwendig, damit Sie sich auf Ihre Arbeit
                        konzentrieren können.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* case5 */}
            <div className="col-lg-4 mt-n1-9 mb-5">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '620px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/case/case5.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />

                <div style={{ padding: '10px' }}>
                  <h5>
                    {state === 'en' && <>Vaccation Home</>}
                    {state === 'de' && <>Ferienhaus</>}:
                  </h5>
                  <p>
                    {state === 'en' && (
                      <>
                        Even if you are far away, you can use the app to check
                        the indoor air parameters in your vacation home and make
                        sure everything is in order.
                      </>
                    )}
                    {state === 'de' && (
                      <>
                        Auch wenn Sie weit weg sind, können Sie dies mit der App
                        überprüfen Überprüfen Sie die Raumluftparameter in Ihrem
                        Ferienhaus und stellen Sie sicher alles ist in ordnung.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* case6 */}
            <div className="col-lg-4 mt-n1-9 mb-5">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '620px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/case/case6.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />
                <div style={{ padding: '10px' }}>
                  <h5>
                    {state === 'en' && <>Kitchen and cooking</>}
                    {state === 'de' && <>Küche und Kochen</>}:
                  </h5>
                  <p>
                    {state === 'en' && (
                      <>
                        You are preparing a feast and want to monitor the air
                        quality in the kitchen. The SQ-Panel shows you the
                        current values and helps you to optimize the air
                        circulation. If the VOC content rises, it&apos;s time to
                        ventilate.
                      </>
                    )}
                    {state === 'de' && (
                      <>
                        Sie bereiten ein Festmahl vor und möchten die
                        Luftqualität in der Küche überwachen. Das SQ-Panel zeigt
                        Ihnen die aktuellen Werte an und hilft Ihnen dabei, die
                        Luftzirkulation zu optimieren. Wenn der VOC-Gehalt
                        steigt, wird es Zeit zu lüften.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* case7 */}
            <div className="col-lg-4 mt-n1-9 mb-5">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '620px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/case/case7.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />
                <div style={{ padding: '10px' }}>
                  <h5>
                    {state === 'en' && <>Motorhome in the front garden</>}
                    {state === 'de' && <>Wohnmobil im Vorgarten</>}:
                  </h5>
                  <p>
                    {state === 'en' && (
                      <>
                        Your motorhome is parked in the front garden and you
                        want to make sure it&apos;s comfortable inside before
                        you set off on a journey.
                        <br />
                        The SQ-Panel shows you the indoor air parameters so that
                        you can take measures in advance.
                      </>
                    )}
                    {state === 'de' && (
                      <>
                        Ihr Wohnmobil parkt im Vorgarten und Sie möchten Stellen
                        Sie sicher, dass es drinnen bequem ist, bevor Sie es
                        aufstellen auf eine Reise.
                        <br />
                        Das SQ-Panel zeigt Ihnen die Raumluftparameter an Sie
                        können bereits im Vorfeld Maßnahmen ergreifen.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* case8 */}
            <div className="col-lg-4 mt-n1-9 mb-5">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '620px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/case/case8.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />
                <div style={{ padding: '10px' }}>
                  <h5>Garage:</h5>
                  <p>
                    {state === 'en' && (
                      <>
                        Even in a remote garden shed or garage, you can use the
                        SQ-Panel to monitor the presence of people (CO2) or
                        vehicles (VOC).
                      </>
                    )}
                    {state === 'de' && (
                      <>
                        Selbst in einem abgelegenen Gartenhaus oder einer Garage
                        können Sie den nutzen SQ-Panel zur Überwachung der
                        Anwesenheit von Personen (CO2) bzw Fahrzeuge (VOC).
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* case8b */}
            <div className="col-lg-4 mt-n1-9 mb-5">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '620px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/case/case8b.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />
                <div style={{ padding: '10px' }}>
                  <h5>
                    {state === 'en' && <>Garden shed</>}
                    {state === 'de' && <>Gartenschuppen</>}:
                  </h5>
                  <p>
                    {state === 'en' && (
                      <>
                        If you store tools or plant equipment there, it is
                        important to know if the humidity is too high to prevent
                        mold growth.
                      </>
                    )}
                    {state === 'de' && (
                      <>
                        Wenn Sie dort Werkzeuge oder Betriebsgeräte lagern, ist
                        dies der Fall Es ist wichtig zu wissen, ob die
                        Luftfeuchtigkeit zu hoch ist, um dies zu verhindern
                        Schimmelbildung.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* case9 */}
            <div className="col-lg-4 mt-n1-9 mb-5">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '620px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/case/case9.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />
                <div style={{ padding: '10px' }}>
                  <h5>
                    {state === 'en' && (
                      <>Guest comfort and indoor air quality</>
                    )}
                    {state === 'de' && <>Gästekomfort und Raumluftqualität</>}:
                  </h5>
                  <p>
                    {state === 'en' && (
                      <>
                        The SQ-Panel monitors indoor air parameters such as
                        temperature, humidity, CO2 and VOC. If the room is too
                        warm or too stuffy, you can take timely action to
                        improve the comfort of your guests.
                      </>
                    )}
                    {state === 'de' && (
                      <>
                        Das SQ-Panel überwacht Raumluftparameter wie z
                        Temperatur, Luftfeuchtigkeit, CO2 und VOC. Wenn das
                        Zimmer auch ist Wenn es zu warm oder zu stickig ist,
                        können Sie rechtzeitig Abhilfe schaffen den Komfort
                        Ihrer Gäste.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* case10 */}
            <div className="col-lg-4 mt-n1-9 mb-5">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '620px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/case/case10.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />
                <div style={{ padding: '10px' }}>
                  <h5>
                    {state === 'en' && (
                      <>Energy efficiency and guest presence</>
                    )}
                    {state === 'de' && <>Energieeffizienz und Gästepräsenz</>}:
                  </h5>
                  <p>
                    {state === 'en' && (
                      <>
                        When guests leave the room, the device detects their
                        absence. Users can now switch off the light or turn down
                        the heating to save energy until guests return. The
                        device provides information and ensures comfort.
                      </>
                    )}
                    {state === 'de' && (
                      <>
                        Wenn Gäste den Raum verlassen, erkennt das Gerät die
                        Abwesenheit. Nutzer können das Licht nun ausschalten
                        bzw. die Heizung herunterdrehen, um Energie zu sparen,
                        bis Gäste wieder kommen. Das Gerät informiert und sorgt
                        für Komfort.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
            {/* case11 */}
            <div className="col-lg-4 mt-n1-9 mb-5">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '620px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/case/case11.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />
                <div style={{ padding: '10px' }}>
                  <h5>
                    {state === 'en' && <>Security and notifications</>}
                    {state === 'de' && <>Sicherheit und Benachrichtigungen</>}:
                  </h5>
                  <p>
                    {state === 'en' && (
                      <>
                        The SQ-Panel can notify you of expected and unexpected
                        events. For example, if a window is left open or if
                        cooking is taking place in a room, you will receive a
                        notification.
                      </>
                    )}
                    {state === 'de' && (
                      <>
                        Das SQ-Panel kann Sie bei erwarteten und unerwarteten
                        Ereignissen benachrichtigen. Zum Beispiel, wenn ein
                        Fenster offen gelassen wird oder wenn in einem Raum
                        gekocht wird, erhalten Sie eine Benachrichtigung.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h4>SQ-Panel Kickstarter - November 2024</h4>
              <p>
                We have a major upgrade for the SQ-Panel following the proposals
                from our community. To get early news, insights and potentially
                get a free Eval-Kit for early bird testing of new features, pls
                subscribe{' '}
                <Link href="/sq-panel-kickstarter" className="text-success">
                  <strong className="text-success">here </strong>
                </Link>
                and stay tuned.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container"></section>

      <section
        className={`videoTwo jarallax p-0 top-position2 full-screen video-banner dark-overlay`}
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
        data-jarallax
        data-speed="0.8"
      ></section>
    </>
  );
};

export default SqPanel;
