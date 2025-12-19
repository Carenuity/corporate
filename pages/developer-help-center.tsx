import Head from 'next/head';
import React from 'react';
import ServiceHOC from '../components/hoc/ServiceHOC';
import { servicesUrls } from '../utils/constants';
import { LanguageSwitchContext } from '../components/context/LanguageSwitch';
import Translatable from '../components/Translatable';
import { useContext } from 'react';
import FAQCard from './faqcard';

const Index = () => {
  const { state } = useContext(LanguageSwitchContext);
  const pageTitle = 'Help Center';
  const general = [
    {
      question: {
        en: 'What is Carenuity?',
        de: 'Was ist Carenuity?',
      },
      answer: {
        en: 'Carenuity is a modular IoT ecosystem focused on rapid, user-friendly creation of smart home and sensor-based devices. It combines standardized hardware, pre-configured software, and cloud-based installation services to enable fully functional IoT devices within minutes.',
        de: 'Carenuity ist ein modulares IoT-Ökosystem, das sich auf die schnelle und benutzerfreundliche Erstellung von Smart-Home- und sensorbasierten Geräten konzentriert. Es kombiniert standardisierte Hardware, vorkonfigurierte Software und cloudbasierte Installationsdienste, um voll funktionsfähige IoT-Geräte innerhalb von Minuten bereitzustellen.',
      },
    },

    {
      question: {
        en: 'Who is Carenuity for?',
        de: 'Für wen ist Carenuity geeignet?',
      },
      answer: {
        en: 'Carenuity addresses end users without programming knowledge, advanced makers, students, and professional developers who want fast prototyping, reliable sensor data, and long-term upgradability.',
        de: 'Carenuity richtet sich an Endbenutzer ohne Programmierkenntnisse, fortgeschrittene Maker, Studenten und professionelle Entwickler, die schnelles Prototyping, zuverlässige Sensordaten und langfristige Upgrade-Fähigkeit wünschen.',
      },
    },
  ];

  const sma = [
    {
      question: {
        en: 'What does S–M–A mean?',
        de: 'Was bedeutet S–M–A?',
      },
      answer: {
        en: 'S–M–A stands for Sensor, Microcontroller, and Actuator. These three components form the core building blocks of every Carenuity IoT device.',
        de: 'S–M–A steht für Sensor, Mikrocontroller und Aktuator. Diese drei Komponenten bilden die Kernbausteine jedes Carenuity-IoT-Geräts.',
      },
    },
    {
      question: {
        en: 'Why is the S–M–A concept important?',
        de: 'Warum ist das S–M–A-Konzept wichtig?',
      },
      answer: {
        en: 'It enables full modularity. Sensors, microcontrollers, and actuators can be exchanged independently, allowing rapid iteration, easy upgrades, and reuse of components.',
        de: 'Es ermöglicht vollständige Modularität. Sensoren, Mikrocontroller und Aktuatoren können unabhängig ausgetauscht werden, was schnelles Iterieren, einfache Upgrades und Wiederverwendung von Komponenten erlaubt.',
      },
    },
  ];

  const c3Mini = [
    {
      question: {
        en: 'What is the C3-Mini?',
        de: 'Was ist das C3-Mini?',
      },
      answer: {
        en: 'The C3-Mini is a compact ESP8266/ESP32-based microcontroller designed as the central processing unit for Carenuity IoT devices. It shares a standardized pinout compatible with common boards such as the D1 Mini.',
        de: 'Das C3-Mini ist ein kompakter Mikrocontroller auf ESP8266/ESP32-Basis, der als zentrale Verarbeitungseinheit für Carenuity-IoT-Geräte dient. Es verfügt über ein standardisiertes Pinout, das mit gängigen Boards wie dem D1 Mini kompatibel ist.',
      },
    },
    {
      question: {
        en: 'What makes the C3-Mini unique?',
        de: 'Was macht das C3-Mini einzigartig?',
      },
      answer: {
        en: 'The C3-Mini supports plug-and-play sensor integration, Install-for-Free provisioning, OTA updates, Matter compatibility, and seamless Home Assistant integration.',
        de: 'Das C3-Mini unterstützt Plug-and-Play-Sensorintegration, Install-for-Free-Bereitstellung, OTA-Updates, Matter-Kompatibilität und nahtlose Home-Assistant-Integration.',
      },
    },
    {
      question: {
        en: 'Can I program the C3-Mini myself?',
        de: 'Kann ich das C3-Mini selbst programmieren?',
      },
      answer: {
        en: 'Yes. Users may install custom firmware, write their own applications, or deploy AI algorithms in addition to using Carenuity’s pre-installed apps.',
        de: 'Ja. Benutzer können eigene Firmware installieren, eigene Anwendungen schreiben oder KI-Algorithmen bereitstellen, zusätzlich zu den vorinstallierten Carenuity-Apps.',
      },
    },
  ];

  const tripleAdapter = [
    {
      question: {
        en: 'What is a Carenuity Triple-Adapter?',
        de: 'Was ist ein Carenuity Triple-Adapter?',
      },
      answer: {
        en: 'The Triple-Adapter is a standardized connector board with three slots labeled S (Sensor), M (Microcontroller), and A (Actuator).',
        de: 'Der Triple-Adapter ist eine standardisierte Anschlussplatine mit drei Slots, beschriftet mit S (Sensor), M (Mikrocontroller) und A (Aktuator).',
      },
    },
    {
      question: {
        en: 'Are the slots technically different?',
        de: 'Sind die Slots technisch unterschiedlich?',
      },
      answer: {
        en: 'No. The slots are electrically identical. The printed labels are a functional guide to simplify configuration.',
        de: 'Nein. Die Slots sind elektrisch identisch. Die Beschriftungen dienen lediglich als funktionale Orientierung zur Vereinfachung der Konfiguration.',
      },
    },
    {
      question: {
        en: 'What is the benefit of the Triple-Adapter?',
        de: 'Was ist der Vorteil des Triple-Adapters?',
      },
      answer: {
        en: 'It allows fast stacking, swapping, and recombination of components, turning individual boards into a complete IoT solution within minutes.',
        de: 'Es ermöglicht schnelles Stapeln, Austauschen und Neukombinieren von Komponenten und verwandelt einzelne Boards in wenigen Minuten in eine vollständige IoT-Lösung.',
      },
    },
  ];

  const sensorBoxes = [
    {
      question: {
        en: 'What is a Sensorbox?',
        de: 'Was ist eine Sensorbox?',
      },
      answer: {
        en: 'A Sensorbox is a complete, ready-to-use IoT device consisting of a sensor, a C3-Mini microcontroller, an actuator, a Triple-Adapter, and a USB-C data cable.',
        de: 'Eine Sensorbox ist ein komplettes, einsatzbereites IoT-Gerät, bestehend aus Sensor, C3-Mini-Mikrocontroller, Aktuator, Triple-Adapter und USB-C-Datenkabel.',
      },
    },
    {
      question: {
        en: 'What is pre-installed on a Sensorbox?',
        de: 'Was ist auf einer Sensorbox vorinstalliert?',
      },
      answer: {
        en: 'Each Sensorbox ships with a pre-installed application. By default, it operates as a hygrometer using a DHT11 sensor.',
        de: 'Jede Sensorbox wird mit einer vorinstallierten Anwendung geliefert. Standardmäßig funktioniert sie als Hygrometer mit einem DHT11-Sensor.',
      },
    },
    {
      question: {
        en: 'What is an All-for-One Sensor Box?',
        de: 'Was ist eine All-for-One Sensor Box?',
      },
      answer: {
        en: 'An All-for-One Sensor Box is a packaged Sensorbox including a specific high-precision sensor (or sensor combination), a C3-Mini, a 0.96-inch OLED display, a Triple-Adapter, a USB-C cable, and a 3D-printed enclosure, all delivered in an acrylic box.',
        de: 'Eine All-for-One Sensor Box ist eine verpackte Sensorbox, die einen bestimmten Hochpräzisionssensor (oder Sensorenkombination), ein C3-Mini, ein 0,96-Zoll-OLED-Display, einen Triple-Adapter, ein USB-C-Kabel und ein 3D-gedrucktes Gehäuse enthält, alles in einer Acrylbox geliefert.',
      },
    },
    {
      question: {
        en: 'How many All-for-One Sensor Boxes are available?',
        de: 'Wie viele All-for-One Sensor Boxes gibt es?',
      },
      answer: {
        en: 'There are currently 23 variants, covering environmental sensing, air quality, radar-based presence detection, biometric sensing, and gas detection.',
        de: 'Derzeit gibt es 23 Varianten, die Umweltmessung, Luftqualität, radarbasierte Anwesenheitserkennung, biometrische Messung und Gaserkennung abdecken.',
      },
    },
  ];

  const sensors = [
    {
      question: {
        en: 'Which sensor manufacturers are supported?',
        de: 'Welche Sensorhersteller werden unterstützt?',
      },
      answer: {
        en: 'Carenuity integrates sensors from leading manufacturers such as Bosch, Sensirion, Aosong, AMS, ScioSense, Hi-Link, Maxim Integrated, SGX Sensortech, and Winsen.',
        de: 'Carenuity integriert Sensoren führender Hersteller wie Bosch, Sensirion, Aosong, AMS, ScioSense, Hi-Link, Maxim Integrated, SGX Sensortech und Winsen.',
      },
    },
    {
      question: {
        en: 'Can sensors be swapped?',
        de: 'Können Sensoren ausgetauscht werden?',
      },
      answer: {
        en: 'Yes. Sensors can be exchanged within approximately three minutes using the Quick-Change feature.',
        de: 'Ja. Sensoren können innerhalb von etwa drei Minuten über die Quick-Change-Funktion ausgetauscht werden.',
      },
    },
    {
      question: {
        en: 'Do I need to change software when swapping sensors?',
        de: 'Muss die Software beim Austausch von Sensoren geändert werden?',
      },
      answer: {
        en: 'No manual programming is required. Carenuity provides matching YAML integrations and apps via its portals.',
        de: 'Es ist keine manuelle Programmierung erforderlich. Carenuity stellt passende YAML-Integrationen und Apps über seine Portale bereit.',
      },
    },
  ];

  const actuators = [
    {
      question: {
        en: 'What actuators are supported?',
        de: 'Welche Aktuatoren werden unterstützt?',
      },
      answer: {
        en: 'Common actuators include OLED displays (0.66-inch and 0.96-inch), buzzers, and other output devices compatible with ESP-based systems.',
        de: 'Gängige Aktuatoren umfassen OLED-Displays (0,66 Zoll und 0,96 Zoll), Summer und andere Ausgabegeräte, die mit ESP-basierten Systemen kompatibel sind.',
      },
    },
    {
      question: {
        en: 'Can actuators be exchanged like sensors?',
        de: 'Können Aktuatoren wie Sensoren ausgetauscht werden?',
      },
      answer: {
        en: 'Yes. Actuators follow the same modular principle and can be swapped freely.',
        de: 'Ja. Aktuatoren folgen demselben modularen Prinzip und können frei ausgetauscht werden.',
      },
    },
  ];

  const installation = [
    {
      question: {
        en: 'What is Install-for-Free?',
        de: 'Was ist Install-for-Free?',
      },
      answer: {
        en: 'Install-for-Free is Carenuity’s provisioning service. Users connect the device via USB, open a browser, and install a complete application with a single click.',
        de: 'Install-for-Free ist der Bereitstellungsdienst von Carenuity. Benutzer verbinden das Gerät über USB, öffnen einen Browser und installieren mit einem Klick eine vollständige Anwendung.',
      },
    },
    {
      question: {
        en: 'Is any software installation required on my PC?',
        de: 'Ist eine Softwareinstallation auf meinem PC erforderlich?',
      },
      answer: {
        en: 'No. Only a Chrome browser is required.',
        de: 'Nein. Es wird nur ein Chrome-Browser benötigt.',
      },
    },
    {
      question: {
        en: 'Are OTA updates supported?',
        de: 'Werden OTA-Updates unterstützt?',
      },
      answer: {
        en: 'Yes. Once connected to Home Assistant, devices receive wireless Over-the-Air updates.',
        de: 'Ja. Sobald sie mit Home Assistant verbunden sind, erhalten Geräte drahtlose Over-the-Air-Updates.',
      },
    },
  ];

  const ecosystem = [
    {
      question: {
        en: 'Which smart home systems are supported?',
        de: 'Welche Smart-Home-Systeme werden unterstützt?',
      },
      answer: {
        en: 'Carenuity devices integrate with Home Assistant and Matter coordinators such as Amazon Alexa, Google Home, Apple HomeKit, and Samsung SmartThings.',
        de: 'Carenuity-Geräte integrieren sich in Home Assistant und Matter-Koordinatoren wie Amazon Alexa, Google Home, Apple HomeKit und Samsung SmartThings.',
      },
    },
    {
      question: {
        en: 'Is Matter mandatory?',
        de: 'Ist Matter verpflichtend?',
      },
      answer: {
        en: 'No. Matter is supported but not required. Devices can also operate cloud-free with Home Assistant.',
        de: 'Nein. Matter wird unterstützt, ist aber nicht erforderlich. Geräte können auch cloudfrei mit Home Assistant betrieben werden.',
      },
    },
  ];

  const solutionBuilder = [
    {
      question: {
        en: 'What is the Solution Builder?',
        de: 'Was ist der Solution Builder?',
      },
      answer: {
        en: 'The Solution Builder is a web platform that allows users to select hardware, install pre-configured apps, and deploy ready-to-use IoT solutions within minutes.',
        de: 'Der Solution Builder ist eine Webplattform, die es Benutzern ermöglicht, Hardware auszuwählen, vorkonfigurierte Apps zu installieren und innerhalb von Minuten einsatzbereite IoT-Lösungen bereitzustellen.',
      },
    },
    {
      question: {
        en: 'What is the Sensorbox Portal?',
        de: 'Was ist das Sensorbox-Portal?',
      },
      answer: {
        en: 'The Sensorbox Portal allows users to install additional applications, modify device behavior, and experiment with new use cases.',
        de: 'Das Sensorbox-Portal ermöglicht Benutzern, zusätzliche Anwendungen zu installieren, das Geräteverhalten zu ändern und neue Anwendungsfälle auszuprobieren.',
      },
    },
  ];

  const services = [
    {
      question: {
        en: 'What is Evaluate-at-Home?',
        de: 'Was ist Evaluate-at-Home?',
      },
      answer: {
        en: 'Evaluate-at-Home enables users to test sensor solutions in real environments before committing to a final purchase.',
        de: 'Evaluate-at-Home ermöglicht es Benutzern, Sensorsysteme in realen Umgebungen zu testen, bevor sie sich für einen Kauf entscheiden.',
      },
    },
    {
      question: {
        en: 'What is Swap-your-Sensor?',
        de: 'Was ist Swap-your-Sensor?',
      },
      answer: {
        en: 'Swap-your-Sensor allows users to test and replace sensors quickly until the optimal sensor for a specific use case is found.',
        de: 'Swap-your-Sensor ermöglicht es Benutzern, Sensoren schnell zu testen und auszutauschen, bis der optimale Sensor für einen bestimmten Anwendungsfall gefunden ist.',
      },
    },
    {
      question: {
        en: 'What is the Home-Challenge?',
        de: 'Was ist die Home-Challenge?',
      },
      answer: {
        en: 'The Home-Challenge is a program for students and makers to develop, share, and refine IoT devices using Carenuity hardware and platforms.',
        de: 'Die Home-Challenge ist ein Programm für Studenten und Maker, um IoT-Geräte mit Carenuity-Hardware und -Plattformen zu entwickeln, zu teilen und zu optimieren.',
      },
    },
  ];

  const housingKit = [
    {
      question: {
        en: 'What is the Housing Extension Kit?',
        de: 'Was ist das Housing Extension Kit?',
      },
      answer: {
        en: 'It is an add-on for the C3-Mini Sensor Selection Box that provides a complete 3D-printed enclosure system.',
        de: 'Es ist ein Add-on für die C3-Mini Sensor Selection Box, das ein komplettes 3D-gedrucktes Gehäusesystem bereitstellt.',
      },
    },
    {
      question: {
        en: 'What problem does it solve?',
        de: 'Welches Problem löst es?',
      },
      answer: {
        en: 'It improves durability, aesthetics, environmental protection, and acceptance in living spaces.',
        de: 'Es verbessert Haltbarkeit, Ästhetik, Umweltschutz und Akzeptanz in Wohnräumen.',
      },
    },
    {
      question: {
        en: 'What is included in the kit?',
        de: 'Was ist im Kit enthalten?',
      },
      answer: {
        en: 'The kit contains twelve snap-fit caps for sensors, microcontrollers, and actuators, including variants with open or closed GPIO access.',
        de: 'Das Kit enthält zwölf Steckkappen für Sensoren, Mikrocontroller und Aktuatoren, einschließlich Varianten mit offenem oder geschlossenem GPIO-Zugang.',
      },
    },
    {
      question: {
        en: 'Are additional designs available?',
        de: 'Gibt es zusätzliche Designs?',
      },
      answer: {
        en: 'Yes. Sensor-specific snap-fit caps are available on Thingiverse for self-printing.',
        de: 'Ja. Sensorspezifische Steckkappen sind auf Thingiverse zum Selbstdrucken verfügbar.',
      },
    },
  ];

  const developers = [
    {
      question: {
        en: 'Is the platform open to developers?',
        de: 'Ist die Plattform für Entwickler offen?',
      },
      answer: {
        en: 'Yes. Developers can build, share, and distribute applications and solutions through the Carenuity ecosystem.',
        de: 'Ja. Entwickler können Anwendungen und Lösungen über das Carenuity-Ökosystem erstellen, teilen und vertreiben.',
      },
    },
    {
      question: {
        en: 'How do users and makers interact?',
        de: 'Wie interagieren Benutzer und Entwickler?',
      },
      answer: {
        en: 'Users provide feedback and use-case ideas, while makers refine and improve apps through rapid deployment and testing cycles.',
        de: 'Benutzer geben Feedback und Anwendungsbeispiele, während Entwickler Apps durch schnelle Bereitstellung und Testzyklen verfeinern und verbessern.',
      },
    },
  ];

  const summary = [
    {
      question: {
        en: 'What is the key benefit of Carenuity?',
        de: 'Was ist der Hauptvorteil von Carenuity?',
      },
      answer: {
        en: 'Carenuity combines modular hardware, zero-friction installation, and an open ecosystem to enable fast, flexible, and future-proof IoT solutions for users and developers alike.',
        de: 'Carenuity kombiniert modulare Hardware, installationsfreie Einrichtung und ein offenes Ökosystem, um schnelle, flexible und zukunftssichere IoT-Lösungen für Benutzer und Entwickler gleichermaßen zu ermöglichen.',
      },
    },
  ];

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
          <h4>
            {state === 'en' && (
              <>Carenuity – Frequently Asked Questions (FAQ)</>
            )}
            {state === 'de' && (
              <>Carenuity – Frequently Asked Questions (FAQ)</>
            )}
          </h4>

          <h5 style={{ color: '#198754', paddingTop: '10px' }}>
            {state === 'en' && <>General</>}
            {state === 'de' && <>General</>}
          </h5>
          {general.map((faq, index) => (
            <FAQCard
              key={index}
              question={state === 'en' ? faq.question.en : faq.question.de}
              answer={state === 'en' ? faq.answer.en : faq.answer.de}
            />
          ))}
          <h5 style={{ color: '#198754', paddingTop: '10px' }}>
            {state === 'en' && <>Core Concept: S–M–A Architecture</>}
            {state === 'de' && <>Kernkonzept: S–M–A-Architektur</>}
          </h5>
          {sma.map((faq, index) => (
            <FAQCard
              key={index}
              question={state === 'en' ? faq.question.en : faq.question.de}
              answer={state === 'en' ? faq.answer.en : faq.answer.de}
            />
          ))}

          <h5 style={{ color: '#198754', paddingTop: '10px' }}>
            {state === 'en' && <>C3-Mini</>}
            {state === 'de' && <>C3-Mini</>}
          </h5>
          {c3Mini.map((faq, index) => (
            <FAQCard
              key={index}
              question={state === 'en' ? faq.question.en : faq.question.de}
              answer={state === 'en' ? faq.answer.en : faq.answer.de}
            />
          ))}

          <h5 style={{ color: '#198754', paddingTop: '10px' }}>
            {state === 'en' && <>Triple-Adapter</>}
            {state === 'de' && <>Triple-Adapter</>}
          </h5>
          {tripleAdapter.map((faq, index) => (
            <FAQCard
              key={index}
              question={state === 'en' ? faq.question.en : faq.question.de}
              answer={state === 'en' ? faq.answer.en : faq.answer.de}
            />
          ))}
          <h5 style={{ color: '#198754', paddingTop: '10px' }}>
            {state === 'en' && <>Sensorboxes and All-for-One Sensor Boxes</>}
            {state === 'de' && <>Sensorboxen und All-for-One-Sensorboxen</>}
          </h5>
          {sensorBoxes.map((faq, index) => (
            <FAQCard
              key={index}
              question={state === 'en' ? faq.question.en : faq.question.de}
              answer={state === 'en' ? faq.answer.en : faq.answer.de}
            />
          ))}
          <h5 style={{ color: '#198754', paddingTop: '10px' }}>
            {state === 'en' && <>Sensors</>}
            {state === 'de' && <>Sensoren</>}
          </h5>
          {sensors.map((faq, index) => (
            <FAQCard
              key={index}
              question={state === 'en' ? faq.question.en : faq.question.de}
              answer={state === 'en' ? faq.answer.en : faq.answer.de}
            />
          ))}
          <h5 style={{ color: '#198754', paddingTop: '10px' }}>
            {state === 'en' && <>Actuators</>}
            {state === 'de' && <>Stellantriebe</>}
          </h5>
          {actuators.map((faq, index) => (
            <FAQCard
              key={index}
              question={state === 'en' ? faq.question.en : faq.question.de}
              answer={state === 'en' ? faq.answer.en : faq.answer.de}
            />
          ))}

          <h5 style={{ color: '#198754', paddingTop: '10px' }}>
            {state === 'en' && <>Installation and Updates</>}
            {state === 'de' && <>Installation and Updates</>}
          </h5>
          {installation.map((faq, index) => (
            <FAQCard
              key={index}
              question={state === 'en' ? faq.question.en : faq.question.de}
              answer={state === 'en' ? faq.answer.en : faq.answer.de}
            />
          ))}
          <h5 style={{ color: '#198754', paddingTop: '10px' }}>
            {state === 'en' && <>Ecosystem Integration</>}
            {state === 'de' && <>Ökosystemintegration</>}
          </h5>
          {ecosystem.map((faq, index) => (
            <FAQCard
              key={index}
              question={state === 'en' ? faq.question.en : faq.question.de}
              answer={state === 'en' ? faq.answer.en : faq.answer.de}
            />
          ))}
          <h5 style={{ color: '#198754', paddingTop: '10px' }}>
            {state === 'en' && <>Solution Builder and Sensorbox Portal</>}
            {state === 'de' && <>Lösungsgenerator und Sensorbox-Portal</>}
          </h5>
          {solutionBuilder.map((faq, index) => (
            <FAQCard
              key={index}
              question={state === 'en' ? faq.question.en : faq.question.de}
              answer={state === 'en' ? faq.answer.en : faq.answer.de}
            />
          ))}
          <h5 style={{ color: '#198754', paddingTop: '10px' }}>
            {state === 'en' && <>Services</>}
            {state === 'de' && <>Dienstleistungen</>}
          </h5>
          {services.map((faq, index) => (
            <FAQCard
              key={index}
              question={state === 'en' ? faq.question.en : faq.question.de}
              answer={state === 'en' ? faq.answer.en : faq.answer.de}
            />
          ))}
          <h5 style={{ color: '#198754', paddingTop: '10px' }}>
            {state === 'en' && <>Housing Extension Kit</>}
            {state === 'de' && <>Wohnraum-Erweiterungsset</>}
          </h5>
          {housingKit.map((faq, index) => (
            <FAQCard
              key={index}
              question={state === 'en' ? faq.question.en : faq.question.de}
              answer={state === 'en' ? faq.answer.en : faq.answer.de}
            />
          ))}
          <h5 style={{ color: '#198754', paddingTop: '10px' }}>
            {state === 'en' && <>Developers and Makers</>}
            {state === 'de' && <>Entwickler und Hersteller</>}
          </h5>
          {developers.map((faq, index) => (
            <FAQCard
              key={index}
              question={state === 'en' ? faq.question.en : faq.question.de}
              answer={state === 'en' ? faq.answer.en : faq.answer.de}
            />
          ))}
          <h5 style={{ color: '#198754', paddingTop: '10px' }}>
            {state === 'en' && <>Summary</>}
            {state === 'de' && <>Zusammenfassung</>}
          </h5>
          {summary.map((faq, index) => (
            <FAQCard
              key={index}
              question={state === 'en' ? faq.question.en : faq.question.de}
              answer={state === 'en' ? faq.answer.en : faq.answer.de}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ServiceHOC(Index, {
  servicesCategoryUrls: servicesUrls.helpcenter,
  pageUrl: 'help-center',
  pageTitle: 'Developer Help Center',
  serviceCategory: 'Get Help',
});
