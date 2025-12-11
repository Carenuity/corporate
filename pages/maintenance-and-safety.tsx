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
          <div>
            <h4>
              {state === 'en' && <>Maintenance & Safety</>}
              {state === 'de' && <>Wartung & Sicherheit</>}
            </h4>
            <p>
              {state === 'en' && (
                <>
                  Proper maintenance and safe installation ensure accurate
                  sensor readings, long device life, and reliable alerts.
                </>
              )}
              {state === 'de' && (
                <>
                  Durch richtige Wartung und sichere Installation werden genaue
                  Sensormessungen, lange Gerätelebensdauer und zuverlässige
                  Warnungen gewährleistet.
                </>
              )}
            </p>

            <h4>
              {state === 'en' && <>1. Cleaning</>}
              {state === 'de' && <>1. Reinigung</>}
            </h4>
            <ul>
              <li>
                {state === 'en' && (
                  <>
                    Use a <strong>soft, dry cloth</strong> to wipe the surface
                    of the SQ-Panel.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Verwenden Sie ein <strong>weiches, trockenes Tuch</strong>,
                    um die Oberfläche des SQ-Panels zu reinigen.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    Avoid <strong>liquids, sprays, or abrasive cleaners</strong>
                    , which can damage the sensors.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Vermeiden Sie{' '}
                    <strong>
                      Flüssigkeiten, Sprays oder scheuernde Reiniger
                    </strong>
                    , da diese die Sensoren beschädigen können.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    Do <strong>not open the device</strong>; internal components
                    are sensitive.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Öffnen Sie das Gerät <strong>nicht</strong>; interne
                    Komponenten sind empfindlich.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    Recommended cleaning frequency:{' '}
                    <strong>once a month</strong> or when dust accumulates.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Empfohlene Reinigungsfrequenz:{' '}
                    <strong>einmal im Monat</strong> oder wenn sich Staub
                    ansammelt.
                  </>
                )}
              </li>
            </ul>

            <h4>
              {state === 'en' && <>2. Power Supply</>}
              {state === 'de' && <>2. Stromversorgung</>}
            </h4>
            <ul>
              <li>
                {state === 'en' && (
                  <>
                    Use only the <strong>included USB-C power adapter</strong>.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Verwenden Sie nur den mitgelieferten{' '}
                    <strong>USB-C-Netzadapter</strong>.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && <>Voltage: 5V DC, 1.5 A minimum.</>}
                {state === 'de' && <>Spannung: 5V DC, mindestens 1,5 A.</>}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    Avoid connecting to unstable or third-party chargers with
                    unknown specifications.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Vermeiden Sie den Anschluss an instabile oder
                    Drittanbieter-Ladegeräte mit unbekannten Spezifikationen.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    Disconnect the device during{' '}
                    <strong>lightning storms</strong> or if the power source is
                    unstable.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Trennen Sie das Gerät während <strong>Gewittern</strong>{' '}
                    oder bei instabiler Stromversorgung.
                  </>
                )}
              </li>
            </ul>

            <h4>
              {state === 'en' && <>3. Safe Installation</>}
              {state === 'de' && <>3. Sichere Installation</>}
            </h4>
            <ul>
              <li>
                {state === 'en' && (
                  <>
                    Mount the SQ-Panel on a{' '}
                    <strong>stable wall or table surface</strong>.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Montieren Sie das SQ-Panel auf einer{' '}
                    <strong>stabilen Wand- oder Tischfläche</strong>.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    Avoid locations near{' '}
                    <strong>heat sources, air vents, or direct sunlight</strong>
                    .
                  </>
                )}
                {state === 'de' && (
                  <>
                    Vermeiden Sie Standorte in der Nähe von{' '}
                    <strong>
                      Wärmequellen, Lüftungsschächten oder direktem Sonnenlicht
                    </strong>
                    .
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    Ensure the device is{' '}
                    <strong>out of reach of children or pets</strong>.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Stellen Sie sicher, dass das Gerät{' '}
                    <strong>
                      außer Reichweite von Kindern oder Haustieren
                    </strong>{' '}
                    ist.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    For wall mounting, use the{' '}
                    <strong>supplied screws and anchors</strong> only.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Für die Wandmontage verwenden Sie ausschließlich die
                    mitgelieferten <strong>Schrauben und Dübel</strong>.
                  </>
                )}
              </li>
            </ul>

            <h4>
              {state === 'en' && (
                <>4. Placement Tips for Reliable Sensor Readings</>
              )}
              {state === 'de' && (
                <>4. Platzierungstipps für zuverlässige Sensormessungen</>
              )}
            </h4>
            <ul>
              <li>
                {state === 'en' && (
                  <>
                    Mount approximately <strong>1.2–1.5 m</strong> above floor
                    level for accurate temperature, humidity, and CO₂
                    measurements.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Montieren Sie das Gerät in einer Höhe von ca.{' '}
                    <strong>1,2–1,5 m</strong> über dem Boden für genaue
                    Temperatur-, Luftfeuchtigkeits- und CO₂-Messungen.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    Leave at least <strong>10 cm clearance</strong> around the
                    device.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Lassen Sie mindestens <strong>10 cm Freiraum</strong> um das
                    Gerät herum.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    Do not place near drafts, open windows, fans, or air
                    conditioning vents.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Nicht in der Nähe von Zugluft, offenen Fenstern,
                    Ventilatoren oder Klimaanlagen platzieren.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    Place centrally in the room to get representative readings.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Zentral im Raum platzieren, um repräsentative Messwerte zu
                    erhalten.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>Use additional SQ-Panels if monitoring multiple zones.</>
                )}
                {state === 'de' && (
                  <>
                    Verwenden Sie zusätzliche SQ-Panels, wenn Sie mehrere
                    Bereiche überwachen.
                  </>
                )}
              </li>
            </ul>

            <h4>
              {state === 'en' && <>5. General Safety Guidelines</>}
              {state === 'de' && <>5. Allgemeine Sicherheitsrichtlinien</>}
            </h4>
            <ul>
              <li>
                {state === 'en' && (
                  <>
                    Do not expose the device to{' '}
                    <strong>
                      water, high humidity, or extreme temperatures
                    </strong>
                    .
                  </>
                )}
                {state === 'de' && (
                  <>
                    Setzen Sie das Gerät nicht{' '}
                    <strong>
                      Wasser, hoher Luftfeuchtigkeit oder extremen Temperaturen
                    </strong>{' '}
                    aus.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    Keep the device{' '}
                    <strong>away from flammable materials</strong>.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Halten Sie das Gerät{' '}
                    <strong>von brennbaren Materialien fern</strong>.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    Always follow the{' '}
                    <strong>app prompts and firmware updates</strong> to
                    maintain safe operation.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Befolgen Sie stets die{' '}
                    <strong>App-Anweisungen und Firmware-Updates</strong>, um
                    einen sicheren Betrieb zu gewährleisten.
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHOC(Index, {
  servicesCategoryUrls: servicesUrls.helpcenter,
  pageUrl: 'maintenance-and-safety',
  pageTitle: 'Maintenance & Safety',
  serviceCategory: 'Get Help',
});
