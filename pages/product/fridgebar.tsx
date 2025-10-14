import React from 'react';
import Head from 'next/head';
import PageTitle from '../../components/PageTitle';
import { LanguageSwitchContext } from '../../components/context/LanguageSwitch';
import Translatable from '../../components/Translatable';
import { useContext } from 'react';
import ServiceHOC from '../../components/hoc/ServiceHOC';
import { servicesUrls } from '../../utils/constants';
import SubscriptionWidget from '../../components/SubscriptionWidget';

const Index = () => {
 
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
        <title>FridgeBar</title>
      </Head>


      <section className="pt-4">
        <div className="container ">
          <h3 className="mn-4">
            {state === 'en' && (
              <>Carenuity FridgeBar — Landing Page Concept (Updated)</>
            )}
            {state === 'de' && (
              <>
                Carenuity FridgeBar – Landingpage-Konzept (aktualisiert)
                Hero-Bereich
              </>
            )}
          </h3>

          <h4 className="mn-4">
            {state === 'en' && (
              <>Carenuity FridgeBar — Protect Your Food, Assure Freshness</>
            )}
            {state === 'de' && (
              <>
                Carenuity FridgeBar – Schützen Sie Ihre Lebensmittel, sichern
                Sie ihre Frische
              </>
            )}
          </h4>
          <p className="mn-4">
            {state === 'en' && (
              <>
                Know instantly if your fridge is cold enough to keep food safe
                and fresh — powered by the C3-Mini IoT platform.
              </>
            )}
            {state === 'de' && (
              <>
                Erfahren Sie sofort, ob Ihr Kühlschrank kalt genug ist, um
                Lebensmittel sicher und frisch zu halten - dank der
                C3-Mini-IoT-Plattform.
              </>
            )}
          </p>
          <div className="row">
            <div className="">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/freshcheck/fridge.png"
                className=" wow fadeInUp mb-6"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',

                  animationName: 'fadeIn',
                }}
              />
            </div>
          </div>

          <h4 className="mn-4">
            {state === 'en' && <>The Problem</>}
            {state === 'de' && <>Das Problem</>}
          </h4>
          <p className="mn-4">
            {state === 'en' && (
              <>
                Fridges are meant to keep food safe — but temperature
                fluctuations happen more often than expected.
              </>
            )}
            {state === 'de' && (
              <>
                Kühlschränke sollen Lebensmittel sicher aufbewahren – aber
                Temperaturschwankungen treten häufiger auf als erwartet.
              </>
            )}
          </p>

          <ul className="mn-4">
            {state === 'en' && (
              <>
                <li>
                  Frequent door openings, poor sealing, or overloading can cause
                  the temperature to rise.
                </li>
                <li>
                  Kids (or adults in a hurry) may forget to close the fridge
                  door completely, letting cold air escape.
                </li>
                <li>
                  Even short periods above +4 °C can shorten food life, spoil
                  dairy and meat, or waste energy.
                </li>
                <li>
                  Without clear feedback, you only notice when it&apos;s already
                  too late.
                </li>
              </>
            )}
            {state === 'de' && (
              <>
                <li>
                  Häufiges Öffnen der Tür, schlechte Abdichtung oder Überfüllung
                  können zu einem Anstieg der Temperatur führen.
                </li>
                <li>
                  Kinder (oder Erwachsene in Eile) vergessen möglicherweise, die
                  Kühlschranktür vollständig zu schließen, sodass kalte Luft
                  entweichen kann.
                </li>
                <li>
                  Selbst kurze Zeiträume über +4 °C können die Haltbarkeit von
                  Lebensmitteln verkürzen, Milchprodukte und Fleisch verderben
                  oder Energie verschwenden.
                </li>
                <li>
                  Ohne klares Feedback bemerkt man dies erst, wenn es bereits zu
                  spät ist.
                </li>
              </>
            )}
          </ul>
          <h4 className="mn-4">
            {state === 'en' && <>The Solution</>}
            {state === 'de' && <>Die Lösung</>}
          </h4>
          <p className="mn-4">
            {state === 'en' && (
              <>
                Carenuity FridgeBar continuously monitors the fridge&apos;s
                internal temperature and shows you, at a glance, whether your
                food is stored safely.
              </>
            )}
            {state === 'de' && (
              <>
                Carenuity FridgeBar überwacht kontinuierlich die Innentemperatur
                des Kühlschranks und zeigt Ihnen auf einen Blick, ob Ihre
                Lebensmittel sicher gelagert sind.
              </>
            )}
          </p>
          <ul className="mn-4">
            {state === 'en' && (
              <>
                <li>
                  <strong>Green</strong> Safe zone, fridge is working fine.
                </li>
                <li>
                  <strong>Orange</strong>Temperature slightly elevated — check
                  door or load.
                </li>
                <li className="mb-4">
                  <strong>Red</strong>Unsafe zone — food at risk, door might be
                  left open or cooling system failing.
                </li>
                <strong>Optional smart alerts notify you if:</strong>
                <li>The fridge door stays open too long.</li>
                <li>Temperature rises above safety thresholds.</li>
                <li>Power outage or failure occurs.</li>
              </>
            )}
            {state === 'de' && (
              <>
                <li>
                  <strong>Grün:</strong>Sicherer Bereich, Kühlschrank
                  funktioniert einwandfrei.
                </li>
                <li>
                  <strong>Orange:</strong>Temperatur leicht erhöht – Tür oder
                  Beladung überprüfen.
                </li>
                <li className="mb-4">
                  <strong>Rot:</strong> Unsicherer Bereich – Lebensmittel
                  gefährdet, Tür möglicherweise offen gelassen oder Kühlsystem
                  defekt.
                </li>
                <strong>
                  Optionale intelligente Warnmeldungen benachrichtigen Sie,
                  wenn:
                </strong>
                <li>Die Kühlschranktür zu lange offen steht.</li>
                <li>Die Temperatur über die Sicherheitsgrenzwerte steigt.</li>
                <li>Ein Stromausfall oder eine Störung auftritt.</li>
              </>
            )}
          </ul>
          <h4 className="mn-4">
            {state === 'en' && <>Key Benefits</>}
            {state === 'de' && <>Die wichtigsten Vorteile</>}
          </h4>
          <ul className="mn-4">
            {state === 'en' && (
              <>
                <li>
                  <strong>Protect your family&apos;s food safety: </strong>
                  Always know your fridge is keeping food fresh.
                </li>
                <li>
                  <strong>Reduce waste: </strong>Prevent spoilage from unnoticed
                  warm-ups or forgotten doors.
                </li>
                <li>
                  <strong>Peace of mind: </strong>Get notified immediately when
                  kids forget to close the fridge.
                </li>
                <li>
                  <strong>Energy savings: </strong>Detect when cold air is
                  escaping and act early.
                </li>
                <li>
                  <strong>Simple setup: </strong>Ready in 3 minutes via
                  Carenuity Solution Builder.
                </li>
                <li>
                  <strong>Smart integration: </strong>Works with Matter, MQTT,
                  Home Assistant, Google Home, Alexa, Apple Home.
                </li>
              </>
            )}
            {state === 'de' && (
              <>
                <li>
                  <strong>
                    Schützen Sie die Lebensmittelsicherheit Ihrer Familie:{' '}
                  </strong>{' '}
                  Sie wissen immer, dass Ihr Kühlschrank Lebensmittel frisch
                  hält.
                </li>
                <li>
                  <strong>Reduzieren Sie Abfall: </strong>Verhindern Sie Verderb
                  durch unbemerktes Auftauen oder vergessene Türen.
                </li>
                <li>
                  <strong>Sorgenfreiheit: </strong>Sie werden sofort
                  benachrichtigt, wenn Kinder vergessen, den Kühlschrank zu
                  schließen.
                </li>
                <li>
                  <strong>Energieeinsparungen </strong>Erkennen Sie, wenn kalte
                  Luft entweicht, und handeln Sie frühzeitig..
                </li>
                <li>
                  <strong>Einfache Einrichtung: </strong>In 3 Minuten über den
                  Carenuity Solution Builder einsatzbereit.
                </li>
                <li>
                  <strong>Intelligente Integration: </strong> Kompatibel mit
                  Matter, MQTT, Home Assistant, Google Home, Alexa und Apple
                  Home.
                </li>
              </>
            )}
          </ul>
          <h4 className="mn-4">
            {state === 'en' && <>How It Works</>}
            {state === 'de' && <>So funktioniert es</>}
          </h4>
          <ol className="mn-4">
            {state === 'en' && (
              <>
                <li>
                  {' '}
                  Place FridgeBar inside the fridge, connect via USB or battery
                  pack.
                </li>
                <li> Configure using Carenuity Solution Builder.</li>
                <li> Device learns the baseline conditions.</li>
                <li> LED indicator shows safe/alert state.</li>
                <li>
                  Optional: receive notifications if the fridge door is left
                  open or if cooling fails.
                </li>
              </>
            )}
            {state === 'de' && (
              <>
                <li>
                  Platzieren Sie FridgeBar im Kühlschrank und schließen Sie es
                  über USB oder einen Akku an.
                </li>
                <li>
                  Konfigurieren Sie das Gerät mit dem Carenuity Solution
                  Builder.
                </li>
                <li>Das Gerät lernt die Ausgangsbedingungen.</li>
                <li>Die LED-Anzeige zeigt den Sicherheits-/Alarmstatus an.</li>
                <li>
                  Optional: Erhalten Sie Benachrichtigungen, wenn die
                  Kühlschranktür offen gelassen wird oder die Kühlung ausfällt.
                </li>
              </>
            )}
          </ol>
          <h4 className="mn-4">
            {state === 'en' && <>Who It&apos;s For</>}
            {state === 'de' && <>Für wen ist es geeignet?</>}
          </h4>
          <ul className="mn-4">
            {state === 'en' && (
              <>
                <li>Families with kids (door left open problem).</li>
                <li>
                  Households storing sensitive food, insulin, or baby formula.
                </li>
                <li>Smart home users who want fridge alerts on their phone.</li>
                <li>
                  Students/universities: simple but real-world IoT showcase.
                </li>
              </>
            )}
            {state === 'de' && (
              <>
                <li>
                  Familien mit Kindern (Problem mit offen gelassener Tür).
                </li>
                <li>
                  Haushalte, die empfindliche Lebensmittel, Insulin oder
                  Babynahrung lagern.
                </li>
                <li>
                  Smart-Home-Nutzer, die Kühlschrankwarnungen auf ihrem
                  Smartphone erhalten möchten.
                </li>
                <li>
                  Studenten/Universitäten: einfache, aber praxisnahe
                  IoT-Demonstration.
                </li>
              </>
            )}
          </ul>
          <h4 className="mn-4">
            {state === 'en' && <>Get Yours Today</>}
            {state === 'de' && <>Holen Sie sich Ihr Exemplar noch heute</>}
          </h4>
          <ul className="mn-4">
            {state === 'en' && (
              <>
                Available now in two options:
                <li>
                  DIY Kit – C3-Mini, sensor, LED ring, power cable, and
                  quick-start guide.
                </li>
                <li>
                  Ready-to-Use Device – Preassembled in sleek housing, plug &
                  play.
                </li>
              </>
            )}
            {state === 'de' && (
              <>
                Jetzt in zwei Optionen erhältlich:
                <li>
                  DIY-Kit – C3-Mini, Sensor, LED-Ring, Netzkabel und
                  Schnellstartanleitung.
                </li>
                <li>
                  Gebrauchsfertiges Gerät – Vorinstalliert in einem eleganten
                  Gehäuse, Plug & Play.
                </li>
              </>
            )}
          </ul>

           {/* wishlist */}
          <hr className="my-7 "/>
          <div
            id="subscribe"
            className="my-5 "
            style={{ textAlign: 'center' }}
          >
            
            <h2>Product Wishlist</h2>
            <p>
              Join <strong>Envirosence 680</strong> wishlist for updates when
              ready
            </p>
            <SubscriptionWidget categoryId={3} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHOC(Index, {
  servicesCategoryUrls: servicesUrls.products,
  pageUrl: '/product/fridgebar',
  pageTitle: 'FridgeBar',
  serviceCategory: 'Our Products',
});