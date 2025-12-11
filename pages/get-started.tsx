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
          <div>
            <h4>
              {state === 'en' && <>Getting Started</>}
              {state === 'de' && <>Erste Schritte</>}
            </h4>

            <p>
              {state === 'en' && (
                <>
                  The <strong>Carenuity SQ-Panel</strong> is a smart indoor
                  climate monitor designed to measure air quality and comfort.
                  It connects via the Carenuity App and integrates into your
                  smart home through the Matter standard.
                </>
              )}
              {state === 'de' && (
                <>
                  Das <strong>Carenuity SQ-Panel</strong> ist ein intelligenter
                  Innenraumklima-Monitor zur Messung der Luftqualität und des
                  Komforts. Es verbindet sich über die Carenuity App und
                  integriert sich über den Matter-Standard in Ihr Smart Home.
                </>
              )}
            </p>

            <h4>
              {state === 'en' && <>What is the SQ-Panel?</>}
              {state === 'de' && <>Was ist das SQ-Panel?</>}
            </h4>

            <ul>
              <li>
                {state === 'en' && (
                  <>
                    A wall- or table-mountable device with multiple sensors
                    (temperature, humidity, air pressure, CO₂, VOCs, air quality
                    index, presence).
                  </>
                )}
                {state === 'de' && (
                  <>
                    Ein an der Wand oder auf dem Tisch montierbares Gerät mit
                    mehreren Sensoren (Temperatur, Luftfeuchtigkeit, Luftdruck,
                    CO₂, VOCs, Luftqualitätsindex, Präsenz).
                  </>
                )}
              </li>

              <li>
                {state === 'en' && (
                  <>
                    Provides <strong>real-time alerts</strong>,{' '}
                    <strong>trend history</strong>, and
                    <strong> remote monitoring</strong> through the Carenuity
                    App.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Bietet <strong>Echtzeitwarnungen</strong>,{' '}
                    <strong>Trendverläufe</strong> und
                    <strong> Fernüberwachung</strong> über die Carenuity App.
                  </>
                )}
              </li>

              <li>
                {state === 'en' && (
                  <>
                    Supports <strong>Matter over Thread</strong> for
                    cross-platform smart home integration (Apple, Google,
                    Amazon, SmartThings, Home Assistant).
                  </>
                )}
                {state === 'de' && (
                  <>
                    Unterstützt <strong>Matter over Thread</strong> für
                    plattformübergreifende Smart-Home-Integration (Apple,
                    Google, Amazon, SmartThings, Home Assistant).
                  </>
                )}
              </li>
            </ul>

            <h4>
              {state === 'en' && <>Package Contents</>}
              {state === 'de' && <>Lieferumfang</>}
            </h4>

            <p>
              {state === 'en' && <>Your SQ-Panel delivery includes:</>}
              {state === 'de' && <>Ihre SQ-Panel-Lieferung enthält:</>}
            </p>

            <ul>
              <li>
                {state === 'en' && <>1 × SQ-Panel device</>}{' '}
                {state === 'de' && <>1 × SQ-Panel Gerät</>}
              </li>
              <li>
                {state === 'en' && <>1 × USB-C power supply + cable</>}{' '}
                {state === 'de' && <>1 × USB-C Netzteil + Kabel</>}
              </li>
              <li>
                {state === 'en' && (
                  <>1 × Wall mounting plate + screws + anchors</>
                )}{' '}
                {state === 'de' && (
                  <>1 × Wandhalterungsplatte + Schrauben + Dübel</>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>1 × Quick Start Guide (QR link to digital manual)</>
                )}{' '}
                {state === 'de' && (
                  <>
                    1 × Schnellstartanleitung (QR-Link zum digitalen Handbuch)
                  </>
                )}
              </li>
            </ul>

            <h4>
              {state === 'en' && <>Installation Options</>}
              {state === 'de' && <>Installationsoptionen</>}
            </h4>

            <h6>
              {state === 'en' && <>a) Wall Mounting</>}
              {state === 'de' && <>a) Wandmontage</>}
            </h6>

            <ol>
              <li>
                {state === 'en' && (
                  <>
                    Select a central indoor wall, approx. 1.2–1.5 m above floor.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Wählen Sie eine zentrale Innenwand, ca. 1,2–1,5 m über dem
                    Boden.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>Avoid direct sunlight, heaters, or windows.</>
                )}
                {state === 'de' && (
                  <>
                    Direkte Sonneneinstrahlung, Heizkörper oder Fenster
                    vermeiden.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>Use included plate, screws, and anchors.</>
                )}
                {state === 'de' && (
                  <>
                    Verwenden Sie die beiliegende Platte, Schrauben und Dübel.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && <>Slide SQ-Panel onto the mounting plate.</>}
                {state === 'de' && (
                  <>Schieben Sie das SQ-Panel auf die Montageplatte.</>
                )}
              </li>
            </ol>

            <h6>
              {state === 'en' && <>b) Tabletop Mounting</>}
              {state === 'de' && <>b) Tischmontage</>}
            </h6>

            <ol>
              <li>
                {state === 'en' && (
                  <>Place SQ-Panel upright on a stable surface.</>
                )}
                {state === 'de' && (
                  <>Stellen Sie das SQ-Panel auf eine stabile Oberfläche.</>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>Avoid obstructing airflow around the device.</>
                )}
                {state === 'de' && (
                  <>
                    Vermeiden Sie eine Blockierung der Luftzufuhr rund um das
                    Gerät.
                  </>
                )}
              </li>
            </ol>

            <h4>
              {state === 'en' && <>Setup with Border Router + Carenuity App</>}
              {state === 'de' && (
                <>Einrichtung mit Border Router + Carenuity App</>
              )}
            </h4>

            <h6>
              {state === 'en' && <>Step 1: Install the App</>}
              {state === 'de' && <>Schritt 1: App installieren</>}
            </h6>

            <ul>
              <li>
                <a
                  href="https://apps.apple.com/ie/app/carenuity/id6472718918"
                  target="_blank"
                  rel="noreferrer"
                >
                  <u>
                    {state === 'en' && <>App Store (iOS)</>}
                    {state === 'de' && <>App Store (iOS)</>}
                  </u>
                </a>
              </li>

              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.carenuity.home"
                  target="_blank"
                  rel="noreferrer"
                >
                  <u>
                    {state === 'en' && <>Google Play (Android)</>}
                    {state === 'de' && <>Google Play (Android)</>}
                  </u>
                </a>
              </li>

              <li>
                {state === 'en' && (
                  <>Ensure app is updated to the latest version.</>
                )}
                {state === 'de' && (
                  <>
                    Stellen Sie sicher, dass die App auf dem neuesten Stand ist.
                  </>
                )}
              </li>
            </ul>

            <h6>
              {state === 'en' && <>Step 2: Power Up</>}
              {state === 'de' && <>Schritt 2: Einschalten</>}
            </h6>

            <ul>
              <li>
                {state === 'en' && (
                  <>Connect SQ-Panel with the supplied USB-C adapter.</>
                )}
                {state === 'de' && (
                  <>
                    Verbinden Sie das SQ-Panel mit dem mitgelieferten
                    USB-C-Netzteil.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>LED blinks → device ready for commissioning.</>
                )}
                {state === 'de' && (
                  <>LED blinkt → Gerät bereit zur Einrichtung.</>
                )}
              </li>
            </ul>

            <h6>
              {state === 'en' && <>Step 3: Add Border Router</>}
              {state === 'de' && <>Schritt 3: Border Router hinzufügen</>}
            </h6>

            <ul>
              <li>
                {state === 'en' && (
                  <>
                    Ensure a Matter-enabled Border Router is active on your
                    Wi-Fi.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Stellen Sie sicher, dass ein Matter-fähiger Border Router in
                    Ihrem WLAN aktiv ist.
                  </>
                )}
              </li>
            </ul>

            <h6>
              {state === 'en' && <>Step 4: Add Device via QR-Code</>}
              {state === 'de' && <>Schritt 4: Gerät per QR-Code hinzufügen</>}
            </h6>

            <ul>
              <li>
                {state === 'en' && (
                  <>
                    Open Carenuity App → <em>Add Device</em>.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Carenuity App öffnen → <em>Gerät hinzufügen</em>.
                  </>
                )}
              </li>

              <li>
                {state === 'en' && (
                  <>Scan QR code (back of SQ-Panel or Quick Start Guide).</>
                )}
                {state === 'de' && (
                  <>
                    QR-Code scannen (Rückseite des SQ-Panels oder
                    Schnellstartanleitung).
                  </>
                )}
              </li>

              <li>
                {state === 'en' && (
                  <>
                    Follow in-app instructions until status shows{' '}
                    <em>Connected</em>.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Befolgen Sie die Anweisungen in der App, bis der Status{' '}
                    <em>Verbunden</em> angezeigt wird.
                  </>
                )}
              </li>
            </ul>

            <h4>
              {state === 'en' && <>Matter Commissioning</>}
              {state === 'de' && <>Matter-Einrichtung</>}
            </h4>

            <ul>
              <li>
                {state === 'en' && (
                  <>SQ-Panel is automatically added to your Matter ecosystem.</>
                )}
                {state === 'de' && (
                  <>
                    Das SQ-Panel wird automatisch zu Ihrem Matter-Ökosystem
                    hinzugefügt.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    Supported ecosystems: Apple, Google, Amazon, SmartThings,
                    Home Assistant.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Unterstützte Ökosysteme: Apple, Google, Amazon, SmartThings,
                    Home Assistant.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    Use each platform’s native app to complete the final step.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Verwenden Sie die jeweilige native App der Plattform, um den
                    letzten Schritt abzuschließen.
                  </>
                )}
              </li>
            </ul>

            <h4>
              {state === 'en' && <>First Checks After Setup</>}
              {state === 'de' && <>Erste Überprüfungen nach der Einrichtung</>}
            </h4>

            <ol className="mb-6">
              <li>
                {state === 'en' && (
                  <>
                    <strong>Live readings</strong>: Verify temperature,
                    humidity, and CO₂ update in the app.
                  </>
                )}
                {state === 'de' && (
                  <>
                    <strong>Echtzeitwerte</strong>: Prüfen Sie Temperatur,
                    Luftfeuchtigkeit und CO₂-Werte in der App.
                  </>
                )}
              </li>

              <li>
                {state === 'en' && (
                  <>
                    <strong>Presence detection</strong>: Move in front of the
                    SQ-Panel and check presence indicator.
                  </>
                )}
                {state === 'de' && (
                  <>
                    <strong>Präsenz-Erkennung</strong>: Bewegen Sie sich vor dem
                    SQ-Panel und prüfen Sie den Präsenzindikator.
                  </>
                )}
              </li>

              <li>
                {state === 'en' && (
                  <>
                    <strong>Notifications</strong>: Enable push alerts in app
                    settings.
                  </>
                )}
                {state === 'de' && (
                  <>
                    <strong>Benachrichtigungen</strong>: Aktivieren Sie
                    Push-Mitteilungen in den App-Einstellungen.
                  </>
                )}
              </li>

              <li>
                {state === 'en' && (
                  <>
                    <strong>Firmware</strong>: Check{' '}
                    <em>Menu → Firmware Update</em>.
                  </>
                )}
                {state === 'de' && (
                  <>
                    <strong>Firmware</strong>: Prüfen Sie{' '}
                    <em>Menü → Firmware-Update</em>.
                  </>
                )}
              </li>
            </ol>

            <div style={{ textAlign: 'center' }}>
              <p>
                {!isMobile && (
                  <Link
                    href={'/sq-panel'}
                    className={'btn btn-lg btn-success rounded-pill'}
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
                    className={'btn btn-lg btn-success rounded-pill'}
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
  pageTitle: 'Get Started With SQ-Panel',
  serviceCategory: 'Get Help',
});
