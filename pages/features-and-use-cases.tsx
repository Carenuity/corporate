import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import ServiceHOC from '../components/hoc/ServiceHOC';
import { servicesUrls } from '../utils/constants';
import { LanguageSwitchContext } from '../components/context/LanguageSwitch';
import Translatable from '../components/Translatable';
import { useContext } from 'react';

const Index = ({ isMobile }: { isMobile: boolean }) => {
  const { state } = useContext(LanguageSwitchContext);
  const pageTitle = 'Help Center';
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

      <section className="overflow-hidden py-3">
        <div className="container position-relative z-index-3">
          <p>
            {state === 'en' && (
              <>
                The Carenuity SQ-Panel continuously monitors your indoor
                environment using its integrated sensor suite. Data is processed
                in real time, visualized in the app, and can trigger alerts or
                smart home actions.
              </>
            )}
            {state === 'de' && (
              <>
                Das Carenuity SQ-Panel überwacht Ihre Innenraumumgebung
                kontinuierlich mithilfe seines integrierten Sensorsystems. Die
                Daten werden in Echtzeit verarbeitet, in der App visualisiert
                und können Warnmeldungen oder Smart-Home-Aktionen auslösen.
              </>
            )}
          </p>

          <div className="row">
            {/* 1 Temperature */}
            <div className="col-lg-6">
              <div
                className="e-card mb-4"
                style={{
                  boxShadow: '3px 3px 15px 3px hsla(0,0%,80%)',
                  height: '300px',
                  padding: '15px',
                }}
              >
                <h6>
                  {state === 'en' && <>1. Temperature</>}
                  {state === 'de' && <>1. Temperatur</>}
                </h6>
                <hr />
                <ul>
                  <li>
                    {state === 'en' && <>Range: 0 – 50 °C</>}
                    {state === 'de' && <>Bereich: 0 – 50 °C</>}
                  </li>
                  <li>
                    {state === 'en' && <>Accuracy: ±0.3 °C (typical)</>}
                    {state === 'de' && <>Genauigkeit: ±0,3 °C (typisch)</>}
                  </li>
                  <li>
                    {state === 'en' && <>Default comfort range: 20 – 24 °C</>}
                    {state === 'de' && <>Komfortbereich: 20 – 24 °C</>}
                  </li>
                  <li>
                    {state === 'en' && (
                      <>
                        Alerts: triggered if temperature leaves comfort range
                        (customizable in app)
                      </>
                    )}
                    {state === 'de' && (
                      <>
                        Warnungen: werden ausgelöst, wenn die Temperatur den
                        Komfortbereich verlässt (in der App anpassbar)
                      </>
                    )}
                  </li>
                </ul>
              </div>
            </div>

            {/* 2 Humidity */}
            <div className="col-lg-6">
              <div
                className="e-card mb-4"
                style={{
                  boxShadow: '3px 3px 15px 3px hsla(0,0%,80%)',
                  height: '300px',
                  padding: '15px',
                }}
              >
                <h6>
                  {state === 'en' && <>2. Relative Humidity (RH)</>}
                  {state === 'de' && <>2. Relative Luftfeuchtigkeit (RH)</>}
                </h6>
                <hr />
                <ul>
                  <li>
                    {state === 'en' && <>Range: 10 – 90 %</>}
                    {state === 'de' && <>Bereich: 10 – 90 %</>}
                  </li>
                  <li>
                    {state === 'en' && <>Accuracy: ±2 % RH</>}
                    {state === 'de' && <>Genauigkeit: ±2 % RH</>}
                  </li>
                  <li>
                    {state === 'en' && <>Comfort range: 40 – 60 % RH</>}
                    {state === 'de' && <>Komfortbereich: 40 – 60 % RH</>}
                  </li>
                  <li>
                    {state === 'en' && (
                      <>
                        Alerts: below 30 % (dry air), above 70 % (risk of mold)
                      </>
                    )}
                    {state === 'de' && (
                      <>
                        Warnungen: unter 30 % (trockene Luft), über 70 %
                        (Schimmelgefahr)
                      </>
                    )}
                  </li>
                </ul>
              </div>
            </div>

            {/* 3 Air Pressure */}
            <div className="col-lg-6">
              <div
                className="e-card mb-4"
                style={{
                  boxShadow: '3px 3px 15px 3px hsla(0,0%,80%)',
                  height: '300px',
                  padding: '15px',
                }}
              >
                <h6>
                  {state === 'en' && <>3. Air Pressure</>}
                  {state === 'de' && <>3. Luftdruck</>}
                </h6>
                <hr />
                <ul>
                  <li>
                    {state === 'en' && <>Range: 300 – 1100 hPa</>}
                    {state === 'de' && <>Bereich: 300 – 1100 hPa</>}
                  </li>
                  <li>
                    {state === 'en' && <>Accuracy: ±1 hPa</>}
                    {state === 'de' && <>Genauigkeit: ±1 hPa</>}
                  </li>
                  <li>
                    {state === 'en' && (
                      <>
                        Use case: weather changes, ventilation status, altitude
                        correction
                      </>
                    )}
                    {state === 'de' && (
                      <>
                        Anwendungsfälle: Wetteränderungen, Lüftungsstatus,
                        Höhenkorrektur
                      </>
                    )}
                  </li>
                </ul>
              </div>
            </div>

            {/* 4 TVOC */}
            <div className="col-lg-6">
              <div
                className="e-card mb-4"
                style={{
                  boxShadow: '3px 3px 15px 3px hsla(0,0%,80%)',
                  height: '300px',
                  padding: '15px',
                }}
              >
                <h6>
                  {state === 'en' && (
                    <>4. TVOC (Total Volatile Organic Compounds)</>
                  )}
                  {state === 'de' && (
                    <>4. TVOC (Flüchtige organische Verbindungen)</>
                  )}
                </h6>
                <hr />
                <ul>
                  <li>
                    {state === 'en' && <>Range: 0 – 60,000 ppb</>}
                    {state === 'de' && <>Bereich: 0 – 60.000 ppb</>}
                  </li>
                  <li>
                    {state === 'en' && <>Indicator levels:</>}
                    {state === 'de' && <>Indikatorstufen:</>}
                  </li>
                  <ul>
                    <li>
                      {state === 'en' && <>0 – 220 ppb = Excellent</>}
                      {state === 'de' && <>0 – 220 ppb = Exzellent</>}
                    </li>
                    <li>
                      {state === 'en' && <>221 – 660 ppb = Good</>}
                      {state === 'de' && <>221 – 660 ppb = Gut</>}
                    </li>
                    <li>
                      {state === 'en' && <>661 – 2200 ppb = Moderate</>}
                      {state === 'de' && <>661 – 2200 ppb = Mittel</>}
                    </li>
                    <li>
                      {state === 'en' && (
                        <>Above 2200 ppb = Poor, consider airing out</>
                      )}
                      {state === 'de' && (
                        <>Über 2200 ppb = Schlecht, Lüften empfohlen</>
                      )}
                    </li>
                  </ul>
                </ul>
              </div>
            </div>

            {/* 5 AQI */}
            <div className="col-lg-6">
              <div
                className="e-card mb-4"
                style={{
                  boxShadow: '3px 3px 15px 3px hsla(0,0%,80%)',
                  height: '300px',
                  padding: '15px',
                }}
              >
                <h6>
                  {state === 'en' && <>5. Air Quality Index (AQI)</>}
                  {state === 'de' && <>5. Luftqualitätsindex (AQI)</>}
                </h6>
                <hr />
                <ul>
                  <li>
                    {state === 'en' && <>Derived from CO₂ + TVOC</>}
                    {state === 'de' && <>Abgeleitet aus CO₂ + TVOC</>}
                  </li>
                  <li>
                    {state === 'en' && <>Scale: 1 (Excellent) – 5 (Poor)</>}
                    {state === 'de' && <>Skala: 1 (Exzellent) – 5 (Schlecht)</>}
                  </li>
                  <li>
                    {state === 'en' && (
                      <>AQI displayed in app with color codes</>
                    )}
                    {state === 'de' && (
                      <>AQI wird in der App farbcodiert angezeigt</>
                    )}
                  </li>
                </ul>
              </div>
            </div>

            {/* 6 Presence Detection */}
            <div className="col-lg-6">
              <div
                className="e-card mb-4"
                style={{
                  boxShadow: '3px 3px 15px 3px hsla(0,0%,80%)',
                  height: '300px',
                  padding: '15px',
                }}
              >
                <h6>
                  {state === 'en' && <>6. Presence Detection</>}
                  {state === 'de' && <>6. Anwesenheitserkennung</>}
                </h6>
                <hr />
                <ul>
                  <li>
                    {state === 'en' && (
                      <>Based on infrared and motion sensing</>
                    )}
                    {state === 'de' && (
                      <>Basierend auf Infrarot- und Bewegungssensorik</>
                    )}
                  </li>
                  <li>
                    {state === 'en' && <>Detects movement within ~5 m range</>}
                    {state === 'de' && (
                      <>Erkennt Bewegungen im Bereich von ~5 m</>
                    )}
                  </li>
                  <li>
                    {state === 'en' && (
                      <>Used for adaptive monitoring and automation</>
                    )}
                    {state === 'de' && (
                      <>
                        Für adaptive Überwachung und Automatisierung verwendet
                      </>
                    )}
                  </li>
                </ul>
              </div>
            </div>

            {/* 7 CO₂ */}
            <div className="col-lg-12">
              <div
                className="e-card mb-6"
                style={{
                  boxShadow: '3px 3px 15px 3px hsla(0,0%,80%)',
                  height: '290px',
                  padding: '15px',
                }}
              >
                <h6>
                  {state === 'en' && <>7. Carbon Dioxide (CO₂)</>}
                  {state === 'de' && <>7. Kohlendioxid (CO₂)</>}
                </h6>
                <hr />
                <ul>
                  <li>
                    {state === 'en' && <>Range: 400 – 5000 ppm</>}
                    {state === 'de' && <>Bereich: 400 – 5000 ppm</>}
                  </li>
                  <li>
                    {state === 'en' && <>Accuracy: ±50 ppm ±3%</>}
                    {state === 'de' && <>Genauigkeit: ±50 ppm ±3%</>}
                  </li>
                  <li>
                    {state === 'en' && <>Thresholds:</>}
                    {state === 'de' && <>Schwellenwerte:</>}
                  </li>
                  <ul>
                    <li>
                      {state === 'en' && <>Less than 800 ppm = Good</>}
                      {state === 'de' && <>Unter 800 ppm = Gut</>}
                    </li>
                    <li>
                      {state === 'en' && <>800 – 1000 ppm = Moderate</>}
                      {state === 'de' && <>800 – 1000 ppm = Mittel</>}
                    </li>
                    <li>
                      {state === 'en' && <>Over 1000 ppm = Poor</>}
                      {state === 'de' && <>Über 1000 ppm = Schlecht</>}
                    </li>
                    <li>
                      {state === 'en' && (
                        <>Over 1500 ppm = Very poor, alert issued</>
                      )}
                      {state === 'de' && (
                        <>Über 1500 ppm = Sehr schlecht, Warnung</>
                      )}
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>

          {/* Real-Time Alerts */}
          <div>
            <h4>
              {state === 'en' && <>Real-Time Alerts</>}
              {state === 'de' && <>Echtzeitwarnungen</>}
            </h4>

            <ul>
              <li>
                {state === 'en' && (
                  <>Thresholds are pre-set but customizable.</>
                )}
                {state === 'de' && (
                  <>Schwellenwerte sind voreingestellt, aber anpassbar.</>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    Alerts appear in the app and can trigger smart home actions.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Warnmeldungen erscheinen in der App und können
                    Smart-Home-Aktionen auslösen.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>Example: “CO₂ exceeded 1000 ppm – ventilate your room.”</>
                )}
                {state === 'de' && (
                  <>Beispiel: „CO₂ übersteigt 1000 ppm – bitte lüften.“</>
                )}
              </li>
            </ul>

            {/* History */}
            <h4>
              {state === 'en' && <>History & Trends</>}
              {state === 'de' && <>Verlauf & Trends</>}
            </h4>

            <ul>
              <li>
                {state === 'en' && <>Sampling every 30s</>}
                {state === 'de' && <>Messintervall: alle 30 Sekunden</>}
              </li>
              <li>
                {state === 'en' && <>App shows 24h / 7d / 30d</>}
                {state === 'de' && <>App zeigt 24h / 7 Tage / 30 Tage</>}
              </li>
              <li>
                {state === 'en' && <>Export via CSV (coming soon)</>}
                {state === 'de' && <>Export als CSV (bald verfügbar)</>}
              </li>
              <li>
                {state === 'en' && (
                  <>Identify trends like high CO₂ or dry air.</>
                )}
                {state === 'de' && (
                  <>
                    Erkennen Sie Muster wie hohe CO₂-Werte oder trockene Luft.
                  </>
                )}
              </li>
            </ul>

            {/* Use cases */}
            <h4>
              {state === 'en' && <>Example Use Cases</>}
              {state === 'de' && <>Beispielanwendungen</>}
            </h4>

            <ul>
              <li>
                <strong>
                  {state === 'en' && <>Healthy Living:</>}
                  {state === 'de' && <>Gesundes Leben:</>}
                </strong>
                {state === 'en' && <> get CO₂ alerts at home or office.</>}
                {state === 'de' && <> CO₂-Warnungen zu Hause oder im Büro.</>}
              </li>

              <li>
                <strong>
                  {state === 'en' && <>Energy Savings:</>}
                  {state === 'de' && <>Energieeinsparung:</>}
                </strong>
                {state === 'en' && <> optimize heating/cooling.</>}
                {state === 'de' && <> Heizung/Kühlung optimieren.</>}
              </li>

              <li>
                <strong>
                  {state === 'en' && <>Mold Prevention:</>}
                  {state === 'de' && <>Schimmelprävention:</>}
                </strong>
                {state === 'en' && <> alerts when humidity stays above 70%.</>}
                {state === 'de' && (
                  <> Warnungen bei Luftfeuchtigkeit über 70 %.</>
                )}
              </li>

              <li>
                <strong>
                  {state === 'en' && <>Workplace Safety:</>}
                  {state === 'de' && <>Arbeitsplatzsicherheit:</>}
                </strong>
                {state === 'en' && <> monitor CO₂ in meeting rooms.</>}
                {state === 'de' && <> CO₂ in Besprechungsräumen überwachen.</>}
              </li>

              <li>
                <strong>
                  {state === 'en' && <>Children&apos;s Rooms:</>}
                  {state === 'de' && <>Kinderzimmer:</>}
                </strong>
                {state === 'en' && <> TVOC alerts from paints or toys.</>}
                {state === 'de' && (
                  <> TVOC-Warnungen durch Farben oder Spielzeug.</>
                )}
              </li>

              <li>
                <strong>
                  {state === 'en' && <>Elderly Care:</>}
                  {state === 'de' && <>Seniorenbetreuung:</>}
                </strong>
                {state === 'en' && (
                  <> remote monitoring for air and presence.</>
                )}
                {state === 'de' && (
                  <> Fernüberwachung von Luftqualität und Anwesenheit.</>
                )}
              </li>

              <li>
                <strong>
                  {state === 'en' && <>Allergy Relief:</>}
                  {state === 'de' && <>Allergieerleichterung:</>}
                </strong>
                {state === 'en' && <> track pressure + VOC spikes.</>}
                {state === 'de' && <> Druck- und VOC-Anstiege verfolgen.</>}
              </li>

              <li>
                <strong>
                  {state === 'en' && <>Smart Ventilation:</>}
                  {state === 'de' && <>Intelligente Lüftung:</>}
                </strong>
                {state === 'en' && <> automate HVAC when CO₂ is high.</>}
                {state === 'de' && (
                  <> HVAC automatisch steuern, wenn CO₂ hoch ist.</>
                )}
              </li>

              <li>
                <strong>
                  {state === 'en' && <>Sleep Quality:</>}
                  {state === 'de' && <>Schlafqualität:</>}
                </strong>
                {state === 'en' && <> maintain optimal bedroom climate.</>}
                {state === 'de' && (
                  <> optimales Schlafzimmerklima aufrechterhalten.</>
                )}
              </li>

              <li>
                <strong>
                  {state === 'en' && <>Remote Offices / Schools:</>}
                  {state === 'de' && <>Remote-Büros / Schulen:</>}
                </strong>
                {state === 'en' && <> supervisors check multiple rooms.</>}
                {state === 'de' && (
                  <> Aufsichtspersonen können mehrere Räume prüfen.</>
                )}
              </li>

              <li>
                <strong>
                  {state === 'en' && <>Presence-based Automation:</>}
                  {state === 'de' && <>Präsenzbasierte Automatisierung:</>}
                </strong>
                {state === 'en' && <> lights or HVAC run only when occupied.</>}
                {state === 'de' && (
                  <> Licht oder HVAC nur bei Anwesenheit aktiv.</>
                )}
              </li>
            </ul>

            {/* Remote Monitoring */}
            <h4>
              {state === 'en' && <>Remote Monitoring</>}
              {state === 'de' && <>Fernüberwachung</>}
            </h4>

            <ul>
              <li>
                <strong>
                  {state === 'en' && <>Accessible via Carenuity App:</>}
                  {state === 'de' && <>Über die Carenuity-App zugänglich:</>}
                </strong>
                {state === 'en' && <> available on iOS/Android.</>}
                {state === 'de' && <> verfügbar auf iOS/Android.</>}
              </li>

              <li>
                <strong>
                  {state === 'en' && <>Multi-user support:</>}
                  {state === 'de' && <>Mehrbenutzerunterstützung:</>}
                </strong>
                {state === 'en' && (
                  <> share access with family or caregivers.</>
                )}
                {state === 'de' && (
                  <> Zugriff mit Familie oder Pflegepersonen teilen.</>
                )}
              </li>

              <li>
                <strong>
                  {state === 'en' && <>Cloud sync:</>}
                  {state === 'de' && <>Cloud-Synchronisierung:</>}
                </strong>
                {state === 'en' && <> measurements available anywhere.</>}
                {state === 'de' && <> Messwerte überall verfügbar.</>}
              </li>

              <li>
                <strong>
                  {state === 'en' && <>Privacy first:</>}
                  {state === 'de' && <>Datenschutz zuerst:</>}
                </strong>
                {state === 'en' && <> stored on European servers.</>}
                {state === 'de' && <> auf europäischen Servern gespeichert.</>}
              </li>
            </ul>

            <div style={{ textAlign: 'center' }}>
              <p>
                {!isMobile && (
                  <Link
                    href={'/sq-panel'}
                    className="btn btn-lg btn-success rounded-pill"
                  >
                    <span className="small">
                      {state === 'en' && <>Learn More on SQ-Panel</>}
                      {state === 'de' && <>Mehr über das SQ-Panel</>}
                    </span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'/sq-panel'}
                    className="btn btn-lg btn-success rounded-pill"
                  >
                    <span className="small">
                      {state === 'en' && <>Learn More on SQ-Panel</>}
                      {state === 'de' && <>Mehr über das SQ-Panel</>}
                    </span>
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHOC(Index, {
  servicesCategoryUrls: servicesUrls.helpcenter,
  pageUrl: 'help-center',
  pageTitle: 'Features & Use Cases',
  serviceCategory: 'Get Help',
});
