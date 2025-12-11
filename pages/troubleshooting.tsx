import Head from 'next/head';
import React from 'react';
import ServiceHOC from '../components/hoc/ServiceHOC';
import { servicesUrls } from '../utils/constants';
import { LanguageSwitchContext } from '../components/context/LanguageSwitch';
import Translatable from '../components/Translatable';
import { useContext } from 'react';

const Index = () => {
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
          <div className="row">
            <h4>
              {state === 'en' && <>Troubleshooting</>}
              {state === 'de' && <>Fehlerbehebung</>}
            </h4>

            <p>
              {state === 'en' && (
                <>
                  This section helps you quickly identify and resolve common
                  issues with your SQ-Panel and Carenuity App. Each flow guides
                  you step by step. If the issue persists, you&apos;ll find an
                  escalation checklist and support options at the end.
                </>
              )}
              {state === 'de' && (
                <>
                  Dieser Abschnitt hilft Ihnen dabei, häufige Probleme mit Ihrem
                  SQ-Panel und der Carenuity App schnell zu erkennen und zu
                  beheben. Jeder Ablauf führt Sie Schritt für Schritt. Wenn das
                  Problem weiterhin besteht, finden Sie am Ende eine
                  Eskalations-Checkliste und Supportoptionen.
                </>
              )}
            </p>
          </div>

          <div>
            {/* ------------------------- 1. CONNECTIVITY ------------------------- */}
            <h4>
              {state === 'en' && <>1. Connectivity Issues</>}
              {state === 'de' && <>1. Verbindungsprobleme</>}
            </h4>

            <ol>
              <li>
                {state === 'en' && <>Is your SQ-Panel powered on?</>}
                {state === 'de' && <>Ist Ihr SQ-Panel eingeschaltet?</>}

                <ul>
                  <li>
                    {state === 'en' && (
                      <>
                        No → Check USB power adapter and cable. Try another
                        socket.
                      </>
                    )}
                    {state === 'de' && (
                      <>
                        Nein → USB-Netzteil und Kabel prüfen. Andere Steckdose
                        ausprobieren.
                      </>
                    )}
                  </li>
                  <li>
                    {state === 'en' && <>Yes → Continue.</>}
                    {state === 'de' && <>Ja → Weiter.</>}
                  </li>
                </ul>
              </li>

              <li>
                {state === 'en' && (
                  <>Does the Border Router show as online in your app?</>
                )}
                {state === 'de' && (
                  <>Wird der Border Router in Ihrer App als online angezeigt?</>
                )}

                <ul>
                  <li>
                    {state === 'en' && (
                      <>
                        No → Restart the Border Router. Check your Wi-Fi
                        connection.
                      </>
                    )}
                    {state === 'de' && (
                      <>
                        Nein → Border Router neu starten. WLAN-Verbindung
                        prüfen.
                      </>
                    )}
                  </li>
                  <li>
                    {state === 'en' && <>Yes → Continue.</>}
                    {state === 'de' && <>Ja → Weiter.</>}
                  </li>
                </ul>
              </li>

              <li>
                {state === 'en' && (
                  <>Does the SQ-Panel LED blink during pairing?</>
                )}
                {state === 'de' && (
                  <>Blinkt die SQ-Panel-LED während des Pairings?</>
                )}

                <ul>
                  <li>
                    {state === 'en' && (
                      <>No → Hold the reset button for 5 seconds and retry.</>
                    )}
                    {state === 'de' && (
                      <>
                        Nein → Reset-Taste 5 Sekunden gedrückt halten und erneut
                        versuchen.
                      </>
                    )}
                  </li>
                  <li>
                    {state === 'en' && <>Yes → Continue.</>}
                    {state === 'de' && <>Ja → Weiter.</>}
                  </li>
                </ul>
              </li>

              <li>
                {state === 'en' && <>Still not connecting?</>}
                {state === 'de' && <>Immer noch keine Verbindung?</>}

                <ul>
                  <li>
                    {state === 'en' && <>Try pairing via QR code again.</>}
                    {state === 'de' && <>Erneut über QR-Code koppeln.</>}
                  </li>
                  <li>
                    {state === 'en' && (
                      <>
                        Move the device closer to the Border Router (&lt;5 m for
                        setup).
                      </>
                    )}
                    {state === 'de' && (
                      <>
                        Gerät näher an den Border Router bringen (&lt;5 m für
                        Einrichtung).
                      </>
                    )}
                  </li>
                </ul>
              </li>
            </ol>

            <p>
              <strong>
                {state === 'en' && <>If unresolved:</>}
                {state === 'de' && <>Wenn weiterhin ungelöst:</>}
              </strong>
              {state === 'en' && (
                <>
                  {' '}
                  Collect serial number, app version, and firmware version, then
                  open a ticket.
                </>
              )}
              {state === 'de' && (
                <>
                  {' '}
                  Seriennummer, App-Version und Firmware-Version erfassen und
                  ein Ticket eröffnen.
                </>
              )}
            </p>

            {/* ------------------------- 2. APP SYNC ------------------------- */}
            <h4>
              {state === 'en' && <>2. App Sync Problems</>}
              {state === 'de' && <>2. Probleme mit der App-Synchronisierung</>}
            </h4>

            <ol>
              <li>
                {state === 'en' && (
                  <>
                    Are measurements visible on the SQ-Panel but not in the app?
                  </>
                )}
                {state === 'de' && (
                  <>
                    Sind Messwerte auf dem SQ-Panel sichtbar, aber nicht in der
                    App?
                  </>
                )}

                <ul>
                  <li>
                    {state === 'en' && (
                      <>No → Device might be offline (see “Connectivity”).</>
                    )}
                    {state === 'de' && (
                      <>
                        Nein → Gerät könnte offline sein (siehe
                        „Verbindungsprobleme“).
                      </>
                    )}
                  </li>
                  <li>
                    {state === 'en' && <>Yes → Continue.</>}
                    {state === 'de' && <>Ja → Weiter.</>}
                  </li>
                </ul>
              </li>

              <li>
                {state === 'en' && <>Is your app up to date?</>}
                {state === 'de' && <>Ist Ihre App auf dem neuesten Stand?</>}

                <ul>
                  <li>
                    {state === 'en' && (
                      <>No → Update via App Store / Google Play.</>
                    )}
                    {state === 'de' && (
                      <>Nein → Über App Store / Google Play aktualisieren.</>
                    )}
                  </li>
                  <li>
                    {state === 'en' && <>Yes → Continue.</>}
                    {state === 'de' && <>Ja → Weiter.</>}
                  </li>
                </ul>
              </li>

              <li>
                {state === 'en' && <>Log out of the app and log in again.</>}
                {state === 'de' && <>Ausloggen und erneut einloggen.</>}
              </li>

              <li>
                {state === 'en' && (
                  <>If data still does not sync → reinstall the app.</>
                )}
                {state === 'de' && (
                  <>
                    Wenn Daten weiterhin nicht synchronisieren → App neu
                    installieren.
                  </>
                )}
              </li>
            </ol>

            <p>
              <strong>
                {state === 'en' && <>If unresolved:</>}
                {state === 'de' && <>Wenn weiterhin ungelöst:</>}
              </strong>
              {state === 'en' && (
                <>
                  {' '}
                  Provide screenshots, app version, and date/time of failed
                  sync.
                </>
              )}
              {state === 'de' && (
                <>
                  {' '}
                  Screenshots, App-Version und Datum/Uhrzeit des
                  fehlgeschlagenen Syncs bereitstellen.
                </>
              )}
            </p>

            {/* ------------------------- 3. SENSOR VALUES ------------------------- */}
            <h4>
              {state === 'en' && <>3. Sensor Values Look Wrong</>}
              {state === 'de' && <>3. Sensorwerte scheinen falsch</>}
            </h4>

            <ol>
              <li>
                {state === 'en' && (
                  <>Temperature/Humidity out of expected range?</>
                )}
                {state === 'de' && (
                  <>
                    Temperatur/Luftfeuchtigkeit außerhalb des erwarteten
                    Bereichs?
                  </>
                )}

                <ul>
                  <li>
                    {state === 'en' && (
                      <>
                        Device may be near heat sources or drafts. Move to
                        central location.
                      </>
                    )}
                    {state === 'de' && (
                      <>
                        Gerät könnte nahe Wärmequellen oder Zugluft stehen.
                        Zentral platzieren.
                      </>
                    )}
                  </li>
                </ul>
              </li>

              <li>
                {state === 'en' && <>CO₂ readings too high indoors?</>}
                {state === 'de' && <>CO₂-Werte in Innenräumen zu hoch?</>}

                <ul>
                  <li>
                    {state === 'en' && (
                      <>
                        Cross-check with another calibrated meter if available.
                      </>
                    )}
                    {state === 'de' && (
                      <>
                        Mit einem anderen kalibrierten Messgerät gegenprüfen
                        (falls verfügbar).
                      </>
                    )}
                  </li>
                  <li>
                    {state === 'en' && <>Ensure no nearby CO₂ sources.</>}
                    {state === 'de' && (
                      <>
                        Sicherstellen, dass keine CO₂-Quellen in der Nähe sind.
                      </>
                    )}
                  </li>
                </ul>
              </li>

              <li>
                {state === 'en' && (
                  <>VOC values high after cleaning/painting?</>
                )}
                {state === 'de' && (
                  <>VOC-Werte hoch nach Reinigung/Streichen?</>
                )}

                <ul>
                  <li>
                    {state === 'en' && (
                      <>This is expected; values normalize after airing out.</>
                    )}
                    {state === 'de' && (
                      <>
                        Das ist normal; Werte normalisieren sich nach dem
                        Lüften.
                      </>
                    )}
                  </li>
                </ul>
              </li>
            </ol>

            <p>
              <strong>
                {state === 'en' && <>If unresolved:</>}
                {state === 'de' && <>Wenn weiterhin ungelöst:</>}
              </strong>
              {state === 'en' && (
                <> Provide sample values, room type, and conditions.</>
              )}
              {state === 'de' && (
                <> Beispielwerte, Raumtyp und Bedingungen angeben.</>
              )}
            </p>

            {/* ------------------------- 4. ALARMS ------------------------- */}
            <h4>
              {state === 'en' && <>4. Alarms Not Triggering</>}
              {state === 'de' && <>4. Alarme werden nicht ausgelöst</>}
            </h4>

            <ol>
              <li>
                {state === 'en' && <>Check if alerts are enabled in the app.</>}
                {state === 'de' && (
                  <>Prüfen, ob Benachrichtigungen in der App aktiviert sind.</>
                )}
              </li>
              <li>
                {state === 'en' && <>Has the threshold been reached?</>}
                {state === 'de' && <>Wurde der Schwellenwert erreicht?</>}

                <ul>
                  <li>
                    {state === 'en' && (
                      <>Example: CO₂ alarm triggers &gt;1000 ppm.</>
                    )}
                    {state === 'de' && (
                      <>Beispiel: CO₂-Alarm löst &gt;1000 ppm aus.</>
                    )}
                  </li>
                </ul>
              </li>
              <li>
                {state === 'en' && (
                  <>Is “Do Not Disturb” mode active on your phone?</>
                )}
                {state === 'de' && (
                  <>Ist der „Nicht stören“-Modus auf Ihrem Handy aktiv?</>
                )}
              </li>
              <li>
                {state === 'en' && <>Restart the app and re-test the alarm.</>}
                {state === 'de' && (
                  <>App neu starten und Alarm erneut testen.</>
                )}
              </li>
            </ol>

            <p>
              <strong>
                {state === 'en' && <>If unresolved:</>}
                {state === 'de' && <>Wenn weiterhin ungelöst:</>}
              </strong>
              {state === 'en' && <> Provide screenshots of alarm settings.</>}
              {state === 'de' && (
                <> Screenshots der Alarmeinstellungen bereitstellen.</>
              )}
            </p>

            {/* ------------------------- 5. FIRMWARE ------------------------- */}
            <h4>
              {state === 'en' && <>5. Firmware Updates</>}
              {state === 'de' && <>5. Firmware-Updates</>}
            </h4>

            <ol>
              <li>
                {state === 'en' && (
                  <>Does the app show an available firmware update?</>
                )}
                {state === 'de' && (
                  <>Zeigt die App ein verfügbares Firmware-Update an?</>
                )}

                <ul>
                  <li>
                    {state === 'en' && <>No → Your device is up to date.</>}
                    {state === 'de' && (
                      <>Nein → Gerät ist auf dem neuesten Stand.</>
                    )}
                  </li>
                  <li>
                    {state === 'en' && <>Yes → Continue.</>}
                    {state === 'de' && <>Ja → Weiter.</>}
                  </li>
                </ul>
              </li>

              <li>
                {state === 'en' && (
                  <>Place SQ-Panel within 3 m of Border Router.</>
                )}
                {state === 'de' && (
                  <>SQ-Panel innerhalb von 3 m zum Border Router platzieren.</>
                )}
              </li>
              <li>
                {state === 'en' && <>Keep app open until update completes.</>}
                {state === 'de' && (
                  <>App geöffnet lassen, bis das Update abgeschlossen ist.</>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>If update fails: restart device and retry once.</>
                )}
                {state === 'de' && (
                  <>
                    Wenn Update fehlschlägt: Gerät neu starten und erneut
                    versuchen.
                  </>
                )}
              </li>
            </ol>

            <p>
              <strong>
                {state === 'en' && <>If unresolved:</>}
                {state === 'de' && <>Wenn weiterhin ungelöst:</>}
              </strong>
              {state === 'en' && (
                <> Send serial number, firmware version, and app version.</>
              )}
              {state === 'de' && (
                <> Seriennummer, Firmware-Version und App-Version senden.</>
              )}
            </p>

            {/* ------------------------- ESCALATION ------------------------- */}
            <h4>
              {state === 'en' && <>Escalation Checklist</>}
              {state === 'de' && <>Eskalations-Checkliste</>}
            </h4>

            <p>
              {state === 'en' && (
                <>Before contacting support, please collect:</>
              )}
              {state === 'de' && (
                <>
                  Vor Kontaktaufnahme mit dem Support bitte Folgendes sammeln:
                </>
              )}
            </p>

            <ul>
              <li>
                {state === 'en' && <>Device serial number (back of panel)</>}
                {state === 'de' && (
                  <>Seriennummer des Geräts (Rückseite des Panels)</>
                )}
              </li>
              <li>
                {state === 'en' && <>App version</>}
                {state === 'de' && <>App-Version</>}
              </li>
              <li>
                {state === 'en' && <>Firmware version</>}
                {state === 'de' && <>Firmware-Version</>}
              </li>
              <li>
                {state === 'en' && <>Border Router model/firmware</>}
                {state === 'de' && <>Modell/Firmware des Border Routers</>}
              </li>
              <li>
                {state === 'en' && <>Issue description and steps tried</>}
                {state === 'de' && (
                  <>Problembeschreibung und bereits durchgeführte Schritte</>
                )}
              </li>
            </ul>

            {/* ------------------------- SUPPORT ------------------------- */}
            <h4>
              {state === 'en' && <>Contact Support</>}
              {state === 'de' && <>Support kontaktieren</>}
            </h4>

            <p>
              {state === 'en' && (
                <>If none of the above steps solved your issue:</>
              )}
              {state === 'de' && (
                <>
                  Wenn keiner der oben genannten Schritte Ihr Problem gelöst
                  hat:
                </>
              )}
            </p>

            <ul>
              <li>
                <strong>
                  {state === 'en' && <>Email:</>}
                  {state === 'de' && <>E-Mail:</>}
                </strong>{' '}
                info@carenuity.com
              </li>
              <li>
                <strong>
                  {state === 'en' && <>Phone:</>}
                  {state === 'de' && <>Telefon:</>}
                </strong>{' '}
                (+49) 89-1222469-40 (Mon–Fri, 9:00–17:00 CET)
              </li>
            </ul>

            <p>
              {state === 'en' && (
                <>We aim to respond within 24 h (working days).</>
              )}
              {state === 'de' && (
                <>
                  Wir bemühen uns, innerhalb von 24 Stunden (Werktage) zu
                  antworten.
                </>
              )}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHOC(Index, {
  servicesCategoryUrls: servicesUrls.helpcenter,
  pageUrl: 'help-center',
  pageTitle: 'Troubleshooting',
  serviceCategory: 'Get Help',
});
