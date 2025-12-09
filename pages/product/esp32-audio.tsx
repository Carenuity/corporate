import React from 'react';
import Head from 'next/head';
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
        <title>ESP32 Audio</title>
      </Head>

      <section className="pt-4">
        <div className="container">
          <h4>
            {/* Modular */}
            {state === 'en' && (
              <>ESP32 Audio Project Based on the Carenuity Architecture</>
            )}
            {state === 'de' && (
              <>
                Modulares ESP32-Audio-Projekt basierend auf der
                Carenuity-Architektur
              </>
            )}
          </h4>
          <div
            className="e-card mb-4"
            style={{
              boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
              maxHeight: '1020px',
              padding: '10px',
            }}
          >
            <div className="row">
              <div className="col-lg-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/audio/audio.JPEG"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    // width: '420px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />
              </div>
              <div className="col-lg-8">
                <p>
                  {state === 'en' && (
                    <>
                      This project provides a modular and user-friendly solution
                      for building an ESP32-based audio recording and playback
                      device. It integrates a high-quality microphone, wireless
                      connectivity, SD-card storage, optional LED control, and a
                      streamlined setup process without requiring programming
                      skills.
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      Dieses Projekt bietet eine modulare und
                      benutzerfreundliche Lösung zum Aufbau eines
                      ESP32-basierten Audioaufnahme- und Wiedergabegeräts. Es
                      integriert ein hochwertiges Mikrofon, kabellose
                      Konnektivität, SD-Kartenspeicher, optionale LED-Steuerung
                      und einen vereinfachten Einrichtungsprozess ohne
                      Programmierkenntnisse.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          <h4>
            {state === 'en' && <>Your Requirements</>}
            {state === 'de' && <>Ihre Anforderungen</>}
          </h4>
          <p>
            {state === 'en' && (
              <>
                The system is designed to meet the following functional
                requirements: integrated microphone for audio capture, ESP32
                microcontroller with Wi-Fi and Bluetooth, SD-card storage,
                physical control buttons, addressable LED support, and complete
                documentation.
              </>
            )}
            {state === 'de' && (
              <>
                Das System wurde entwickelt, um die folgenden funktionalen
                Anforderungen zu erfüllen: integriertes Mikrofon zur
                Audioaufnahme, ESP32-Mikrocontroller mit Wi-Fi und Bluetooth,
                SD-Kartenspeicher, physische Steuerungstasten, adressierbare
                LED-Unterstützung und vollständige Dokumentation.
              </>
            )}
          </p>

          <h4>
            {state === 'en' && <>Reference Design</>}
            {state === 'de' && <>Referenzdesign</>}
          </h4>
          <p>
            {state === 'en' && (
              <>
                For comparison and inspiration, the following ESP32 audio
                recorder project demonstrates a related architecture:
              </>
            )}
            {state === 'de' && (
              <>
                Zum Vergleich und zur Inspiration zeigt das folgende
                ESP32-Audiorecorder-Projekt eine ähnliche Architektur:
              </>
            )}
          </p>
          <ul>
            <li>
              {state === 'en' && (
                <>
                  Documentation:{' '}
                  <a href="https://docs.cirkitdesigner.com/project/published/e39a1639-a2e9-4fa3-92d3-89d96a50dac6/esp32-based-audio-recorder-and-playback-system">
                    <u>
                      {' '}
                      https://docs.cirkitdesigner.com/project/published/e39a1639-a2e9-4fa3-92d3-89d96a50dac6/esp32-based-audio-recorder-and-playback-system{' '}
                    </u>
                  </a>
                </>
              )}
              {state === 'de' && (
                <>
                  Dokumentation:{' '}
                  <a href="https://docs.cirkitdesigner.com/project/published/e39a1639-a2e9-4fa3-92d3-89d96a50dac6/esp32-based-audio-recorder-and-playback-system">
                    <u>
                      {' '}
                      https://docs.cirkitdesigner.com/project/published/e39a1639-a2e9-4fa3-92d3-89d96a50dac6/esp32-based-audio-recorder-and-playback-system{' '}
                    </u>
                  </a>
                </>
              )}
            </li>
            <li>
              {state === 'en' && (
                <>
                  Project view:{' '}
                  <a href="https://app.cirkitdesigner.com/project/e39a1639-a2e9-4fa3-92d3-89d96a50dac6">
                    <u>
                      {' '}
                      https://app.cirkitdesigner.com/project/e39a1639-a2e9-4fa3-92d3-89d96a50dac6
                    </u>
                  </a>
                </>
              )}
              {state === 'de' && (
                <>
                  Projektansicht:{' '}
                  <a href="https://app.cirkitdesigner.com/project/e39a1639-a2e9-4fa3-92d3-89d96a50dac6">
                    <u>
                      {' '}
                      https://app.cirkitdesigner.com/project/e39a1639-a2e9-4fa3-92d3-89d96a50dac6
                    </u>
                  </a>
                </>
              )}
            </li>
          </ul>

          <h4>
            {state === 'en' && <>Our Concept</>}
            {state === 'de' && <>Unser Konzept</>}
          </h4>
          <p>
            {state === 'en' && (
              <>
                The recommended solution is based on the Carenuity S-M-A
                principle, consisting of Sensor, Microcontroller, and Actuator
                modules. All blocks are implemented on Triple-Adapters and
                designed for quick assembly without any technical background.
                The system can be set up through the Carenuity Solution Builder,
                which performs all configuration steps automatically.
              </>
            )}

            {state === 'de' && (
              <>
                Die empfohlene Lösung basiert auf dem Carenuity S-M-A-Prinzip,
                bestehend aus Sensor-, Mikrocontroller- und Aktuatorenmodulen.
                Alle Bausteine sind auf Triple-Adaptern implementiert und für
                eine schnelle Montage ohne technische Vorkenntnisse ausgelegt.
                Das System kann über den Carenuity Solution Builder eingerichtet
                werden, der alle Konfigurationsschritte automatisch ausführt.
              </>
            )}
          </p>
          <p>
            {state === 'en' && (
              <>
                Solution Builder:{' '}
                <a href="https://solutions.carenuity.com">
                  <u> https://solutions.carenuity.com</u>
                </a>
              </>
            )}
            {state === 'de' && (
              <>
                Solution Builder:{' '}
                <a href="https://solutions.carenuity.com">
                  <u> https://solutions.carenuity.com</u>
                </a>
              </>
            )}
          </p>

          <h4>
            {state === 'en' && <>Functional Modules</>}
            {state === 'de' && <>Funktionale Module</>}
          </h4>

          <h6>
            {state === 'en' && <>Sensor Block (S)</>}
            {state === 'de' && <>Sensorblock (S)</>}
          </h6>
          <p>
            {state === 'en' && (
              <>
                MAX9814 electret microphone with integrated amplifier for clean
                audio capture, including a WS2812B LED output for optional LED
                strips.
              </>
            )}
            {state === 'de' && (
              <>
                MAX9814 Electret-Mikrofon mit integriertem Verstärker für
                saubere Audioaufnahme, einschließlich WS2812B-LED-Ausgang für
                optionale LED-Streifen.
              </>
            )}
          </p>
          <p>
            {state === 'en' && (
              <>
                LED reference:{' '}
                <a href="https://github.com/wled/WLED">
                  <u>https://github.com/wled/WLED</u>
                </a>
              </>
            )}
            {state === 'de' && (
              <>
                LED-Referenz:{' '}
                <a href="https://github.com/wled/WLED">
                  <u>https://github.com/wled/WLED</u>
                </a>
              </>
            )}
          </p>

          <h6>
            {state === 'en' && <>Microcontroller Block (M)</>}
            {state === 'de' && <>Mikrocontrollerblock (M)</>}
          </h6>
          <p>
            {state === 'en' && (
              <>
                ESP32-WROOM-32 module with Wi-Fi and Bluetooth connectivity,
                fully compatible with the Arduino IDE.
              </>
            )}
            {state === 'de' && (
              <>
                ESP32-WROOM-32-Modul mit Wi-Fi- und Bluetooth-Konnektivität,
                vollständig kompatibel mit der Arduino IDE.
              </>
            )}
          </p>
          <p>
            {state === 'en' && (
              <>
                Product link:
                <a href="https://www.chipglobe.shop/p/esp32-wroom-32-modul-mit-bluetooth-und-wi-fi">
                  <u>
                    {' '}
                    https://www.chipglobe.shop/p/esp32-wroom-32-modul-mit-bluetooth-und-wi-fi
                  </u>
                </a>
              </>
            )}
            {state === 'de' && (
              <>
                Produktlink:
                <a href="https://www.chipglobe.shop/p/esp32-wroom-32-modul-mit-bluetooth-und-wi-fi">
                  <u>
                    {' '}
                    https://www.chipglobe.shop/p/esp32-wroom-32-modul-mit-bluetooth-und-wi-fi
                  </u>
                </a>
              </>
            )}
          </p>

          <h6>
            {state === 'en' && <>Actuator Block (A)</>}
            {state === 'de' && <>Aktuatorblock (A)</>}
          </h6>
          <p>
            {state === 'en' && (
              <>
                MAX98357A digital-to-audio converter enabling direct speaker
                output for audio playback.
              </>
            )}
            {state === 'de' && (
              <>
                MAX98357A Digital-zu-Audio-Wandler für direkte
                Lautsprecherausgabe zur Audiowiedergabe.
              </>
            )}
          </p>

          <h4>
            {state === 'en' && <>Storage Module</>}
            {state === 'de' && <>Speichermodul</>}
          </h4>
          <p>
            {state === 'en' && (
              <>Micro-SD expansion board for SPI-based audio file storage.</>
            )}
            {state === 'de' && (
              <>
                Micro-SD-Erweiterungsboard zur SPI-basierten Speicherung von
                Audiodateien.
              </>
            )}
          </p>
          <p>
            {state === 'en' && (
              <>
                Product link:
                <a href="https://www.chipglobe.shop/p/micro-sd-speicher-erweiterungsboard-fuer-d1-mini-tf-kartenmodul-mit-spi-mit-ohne-geloetete-pins">
                  <u>
                    {' '}
                    https://www.chipglobe.shop/p/micro-sd-speicher-erweiterungsboard-fuer-d1-mini-tf-kartenmodul-mit-spi-mit-ohne-geloetete-pins
                  </u>
                </a>
              </>
            )}
            {state === 'de' && (
              <>
                Produktlink:
                <a href="https://www.chipglobe.shop/p/micro-sd-speicher-erweiterungsboard-fuer-d1-mini-tf-kartenmodul-mit-spi-mit-ohne-geloetete-pins">
                  <u>
                    {' '}
                    https://www.chipglobe.shop/p/micro-sd-speicher-erweiterungsboard-fuer-d1-mini-tf-kartenmodul-mit-spi-mit-ohne-geloetete-pins
                  </u>
                </a>
              </>
            )}
          </p>

          <h4>
            {state === 'en' && <>Advantages of the Carenuity System</>}
            {state === 'de' && <>Vorteile des Carenuity-Systems</>}
          </h4>
          <p>
            {state === 'en' && (
              <>
                All modules are fully compatible with the Carenuity ecosystem.
                Installation is completed within minutes through the
                Install-for-Free service. Firmware updates are provided
                over-the-air, and comprehensive documentation is included. The
                modules can be prepared free of charge, with an expected lead
                time of three to four weeks.
              </>
            )}
            {state === 'de' && (
              <>
                Alle Module sind vollständig kompatibel mit dem
                Carenuity-Ökosystem. Die Installation erfolgt innerhalb von
                Minuten über den Install-for-Free-Service. Firmware-Updates
                werden Over-the-Air bereitgestellt und umfassende Dokumentation
                ist enthalten. Die Module können kostenlos vorbereitet werden,
                mit einer erwarteten Lieferzeit von drei bis vier Wochen.
              </>
            )}
          </p>

          <h4>
            {state === 'en' && <>Design Options</>}
            {state === 'de' && <>Designoptionen</>}
          </h4>
          <p>
            {state === 'en' && (
              <>
                A circular baseboard with a diameter of approximately six
                centimetres is available to host all building blocks. Square or
                rectangular layouts are also supported. Example enclosures
                produced via 3D printing are showcased on our Instagram channel:
              </>
            )}

            {state === 'de' && (
              <>
                Eine runde Basisplatte mit einem Durchmesser von ca. sechs
                Zentimetern steht zur Verfügung, um alle Bausteine zu hosten.
                Quadratische oder rechteckige Layouts werden ebenfalls
                unterstützt. Beispielgehäuse, die per 3D-Druck hergestellt
                wurden, werden auf unserem Instagram-Kanal gezeigt:
              </>
            )}
          </p>
          <p>
            {state === 'en' && (
              <>
                <a href="https://www.instagram.com/solutions.carenuity/">
                  https://www.instagram.com/solutions.carenuity/
                </a>
              </>
            )}
            {state === 'de' && (
              <>
                <a href="https://www.instagram.com/solutions.carenuity/">
                  https://www.instagram.com/solutions.carenuity/
                </a>
              </>
            )}
          </p>

          <h4>
            {state === 'en' && <>Get Started</>}
            {state === 'de' && <>Loslegen</>}
          </h4>
          <p>
            {state === 'en' && (
              <>
                If you are interested in this modular ESP32 audio solution,
                please let us know your preferred form factor. We will prepare
                the complete module set for you and provide all required setup
                instructions.
              </>
            )}
            {state === 'de' && (
              <>
                Wenn Sie an dieser modularen ESP32-Audiolösung interessiert
                sind, teilen Sie uns bitte Ihr bevorzugtes Formfaktor mit. Wir
                bereiten das komplette Modulset für Sie vor und stellen alle
                erforderlichen Installationsanweisungen bereit.
              </>
            )}
          </p>

          <hr className="my-7 " />
          <div id="subscribe" className="my-5 " style={{ textAlign: 'center' }}>
            <h2>Product Wishlist</h2>
            <p>
              Join <strong>ESP32 Audio</strong> wishlist for updates when ready
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
  pageUrl: '/product/esp32-audio',
  pageTitle: 'ESP32 Audio',
  serviceCategory: 'Our Products',
});
