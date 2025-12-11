import React from 'react';
import Head from 'next/head';
import FAQCard from './faqcard';
import ServiceHOC from '../components/hoc/ServiceHOC';
import { servicesUrls } from '../utils/constants';
import { LanguageSwitchContext } from '../components/context/LanguageSwitch';
import Translatable from '../components/Translatable';
import { useContext } from 'react';

const Index = () => {
  const { state } = useContext(LanguageSwitchContext);

  const pageTitle = 'faq';
  // const faqs = [
  //   {
  //     question: 'What is the SQ-Panel?',
  //     answer:
  //       'The SQ-Panel is a smart and user-friendly sensor display equipped with built-in environmental sensors. It provides real-time monitoring of indoor air quality and human presence detection, making it ideal for homes, offices, and shared indoor spaces.',
  //   },
  //   {
  //     question: 'What sensors are included in the SQ-Panel?',
  //     answer:
  //       'The SQ-Panel integrates multiple sensors for temperature, humidity, air pressure, CO2 levels, volatile organic compounds (VOCs), and air quality index (AQI). These combined measurements help you maintain a healthier and more comfortable indoor environment.',
  //   },
  //   {
  //     question: 'How do I set up the SQ-Panel using the Matter procedure?',
  //     answer:
  //       ' Setup is simple: open the Carenuity app and scan the QR code displayed on  the panel. The device will automatically connect to your preferred  Matter-compatible ecosystem (such as Alexa, Google Home, or Apple Home), allowing quick and seamless integration.',
  //   },
  //   {
  //     question: 'Do I need the Carenuity app after setup?',
  //     answer:
  //       ' The Carenuity app is mainly required for the initial setup and advanced configurations. Once connected, you can manage and control the SQ-Panel directly through your chosen Matter ecosystem, while the app remains useful for monitoring, firmware updates, and troubleshooting.',
  //   },

  //   {
  //     question: 'How do I manage user profiles?',
  //     answer:
  //       ' User profiles can be managed via the Carenuity app or within your Matter ecosystem. This lets you set personalized preferences, adjust notification thresholds for specific sensors, and define alerts tailored to different family members or workplace requirements.',
  //   },

  //   {
  //     question: 'Can the SQ-Panel be used in multiple rooms?',
  //     answer:
  //       ' Yes. You can deploy several SQ-Panels across different rooms to create a connected monitoring network. All devices can be managed from one app or ecosystem, giving you a complete overview of your indoor air quality.',
  //   },

  //   {
  //     question: 'What are the mounting options for the SQ-Panel?',
  //     answer:
  //       'The SQ-Panel offers flexible installation. It can be wall-mounted for a  clean, integrated look, or placed on a stand for easy relocation. Both  options ensure accessibility and visibility in various environments. ',
  //   },

  //   {
  //     question: ' How does the SQ-Panel ensure data security?',
  //     answer:
  //       'The SQ-Panel employs advanced end-to-end encryption for all sensor data and  communicates only with Gaia-X-certified European servers. This guarantees that your information is stored and processed under strict data protection regulations. ',
  //   },

  //   {
  //     question: 'Can I monitor air quality remotely?',
  //     answer:
  //       'Absolutely. With the Carenuity app, you can access real-time and historical  air quality data from anywhere. Whether at home, in the office, or while traveling, you stay informed about your indoor environment.',
  //   },

  //   {
  //     question: 'What is the range of the Matter-supported SQ-Panel?',
  //     answer:
  //       'The SQ-Panel supports a wireless range of up to 80 meters indoors (depending on building structure). This ensures stable and reliable connectivity within most homes and office environments. ',
  //   },
  //   {
  //     question: 'How can I customize sensor thresholds?',
  //     answer:
  //       'Thresholds for temperature, CO<sub>2</sub>, VOCs, and other metrics can be customized through the Carenuity app or any Matter-compatible platform. Once set, you will receive alerts when values exceed your defined safety or comfort levels. ',
  //   },
  //   {
  //     question: 'Is the SQ-Panel compatible with other smart home systems?',
  //     answer:
  //       ' Yes. Thanks to Matter support, the SQ-Panel integrates seamlessly with popular ecosystems including Alexa, Google Home, and Apple Home. This ensures interoperability and future-proof compatibility with your smart home setup.',
  //   },
  // ];

  const faqs = [
    {
      question: {
        en: 'What is the SQ-Panel?',
        de: 'Was ist das SQ-Panel?',
      },
      answer: {
        en: 'The SQ-Panel is a smart and user-friendly sensor display equipped with built-in environmental sensors. It provides real-time monitoring of indoor air quality and human presence detection, making it ideal for homes, offices, and shared indoor spaces.',
        de: 'Das SQ-Panel ist ein intelligentes und benutzerfreundliches Sensordisplay mit integrierten Umweltsensoren. Es bietet eine Echtzeitüberwachung der Raumluftqualität und der Anwesenheit von Personen, ideal für Wohnungen, Büros und gemeinsame Innenräume.',
      },
    },
    {
      question: {
        en: 'What sensors are included in the SQ-Panel?',
        de: 'Welche Sensoren sind im SQ-Panel enthalten?',
      },
      answer: {
        en: 'The SQ-Panel integrates multiple sensors for temperature, humidity, air pressure, CO2 levels, volatile organic compounds (VOCs), and air quality index (AQI). These combined measurements help you maintain a healthier and more comfortable indoor environment.',
        de: 'Das SQ-Panel integriert mehrere Sensoren für Temperatur, Luftfeuchtigkeit, Luftdruck, CO2-Werte, flüchtige organische Verbindungen (VOCs) und Luftqualitätsindex (AQI). Diese kombinierten Messungen helfen Ihnen, ein gesünderes und komfortableres Innenraumklima zu erhalten.',
      },
    },
    {
      question: {
        en: 'How do I set up the SQ-Panel using the Matter procedure?',
        de: 'Wie richte ich das SQ-Panel über das Matter-Verfahren ein?',
      },
      answer: {
        en: 'Setup is simple: open the Carenuity app and scan the QR code displayed on the panel. The device will automatically connect to your preferred Matter-compatible ecosystem (such as Alexa, Google Home, or Apple Home), allowing quick and seamless integration.',
        de: 'Die Einrichtung ist einfach: Öffnen Sie die Carenuity-App und scannen Sie den auf dem Panel angezeigten QR-Code. Das Gerät verbindet sich automatisch mit Ihrem bevorzugten Matter-kompatiblen Ökosystem (z. B. Alexa, Google Home oder Apple Home) und ermöglicht eine schnelle und nahtlose Integration.',
      },
    },
    {
      question: {
        en: 'Do I need the Carenuity app after setup?',
        de: 'Brauche ich die Carenuity-App nach der Einrichtung?',
      },
      answer: {
        en: 'The Carenuity app is mainly required for the initial setup and advanced configurations. Once connected, you can manage and control the SQ-Panel directly through your chosen Matter ecosystem, while the app remains useful for monitoring, firmware updates, and troubleshooting.',
        de: 'Die Carenuity-App wird hauptsächlich für die anfängliche Einrichtung und erweiterte Konfigurationen benötigt. Nach der Verbindung können Sie das SQ-Panel direkt über Ihr ausgewähltes Matter-Ökosystem steuern, während die App weiterhin für Überwachung, Firmware-Updates und Fehlerbehebung nützlich ist.',
      },
    },
    {
      question: {
        en: 'How do I manage user profiles?',
        de: 'Wie verwalte ich Benutzerprofile?',
      },
      answer: {
        en: 'User profiles can be managed via the Carenuity app or within your Matter ecosystem. This lets you set personalized preferences, adjust notification thresholds for specific sensors, and define alerts tailored to different family members or workplace requirements.',
        de: 'Benutzerprofile können über die Carenuity-App oder innerhalb Ihres Matter-Ökosystems verwaltet werden. So können Sie persönliche Einstellungen festlegen, Benachrichtigungsschwellen für bestimmte Sensoren anpassen und Warnungen für unterschiedliche Familienmitglieder oder Arbeitsumgebungen definieren.',
      },
    },
    {
      question: {
        en: 'Can the SQ-Panel be used in multiple rooms?',
        de: 'Kann das SQ-Panel in mehreren Räumen verwendet werden?',
      },
      answer: {
        en: 'Yes. You can deploy several SQ-Panels across different rooms to create a connected monitoring network. All devices can be managed from one app or ecosystem, giving you a complete overview of your indoor air quality.',
        de: 'Ja. Sie können mehrere SQ-Panels in verschiedenen Räumen installieren, um ein vernetztes Überwachungsnetzwerk zu erstellen. Alle Geräte können über eine App oder ein Ökosystem verwaltet werden, sodass Sie einen vollständigen Überblick über die Raumluftqualität haben.',
      },
    },
    {
      question: {
        en: 'What are the mounting options for the SQ-Panel?',
        de: 'Welche Montageoptionen gibt es für das SQ-Panel?',
      },
      answer: {
        en: 'The SQ-Panel offers flexible installation. It can be wall-mounted for a clean, integrated look, or placed on a stand for easy relocation. Both options ensure accessibility and visibility in various environments.',
        de: 'Das SQ-Panel bietet eine flexible Installation. Es kann für ein sauberes, integriertes Erscheinungsbild an der Wand montiert oder auf einem Ständer platziert werden, um eine einfache Standortänderung zu ermöglichen. Beide Optionen gewährleisten Zugänglichkeit und Sichtbarkeit in verschiedenen Umgebungen.',
      },
    },
    {
      question: {
        en: 'How does the SQ-Panel ensure data security?',
        de: 'Wie gewährleistet das SQ-Panel die Datensicherheit?',
      },
      answer: {
        en: 'The SQ-Panel employs advanced end-to-end encryption for all sensor data and communicates only with Gaia-X-certified European servers. This guarantees that your information is stored and processed under strict data protection regulations.',
        de: 'Das SQ-Panel verwendet fortschrittliche End-to-End-Verschlüsselung für alle Sensordaten und kommuniziert ausschließlich mit Gaia-X-zertifizierten europäischen Servern. Dies garantiert, dass Ihre Informationen unter strengen Datenschutzbestimmungen gespeichert und verarbeitet werden.',
      },
    },
    {
      question: {
        en: 'Can I monitor air quality remotely?',
        de: 'Kann ich die Luftqualität aus der Ferne überwachen?',
      },
      answer: {
        en: 'Absolutely. With the Carenuity app, you can access real-time and historical air quality data from anywhere. Whether at home, in the office, or while traveling, you stay informed about your indoor environment.',
        de: 'Absolut. Mit der Carenuity-App können Sie jederzeit auf Echtzeit- und historische Luftqualitätsdaten zugreifen. Ob zu Hause, im Büro oder unterwegs – Sie bleiben über Ihre Innenraumumgebung informiert.',
      },
    },
    {
      question: {
        en: 'What is the range of the Matter-supported SQ-Panel?',
        de: 'Wie groß ist die Reichweite des Matter-kompatiblen SQ-Panels?',
      },
      answer: {
        en: 'The SQ-Panel supports a wireless range of up to 80 meters indoors (depending on building structure). This ensures stable and reliable connectivity within most homes and office environments.',
        de: 'Das SQ-Panel unterstützt eine kabellose Reichweite von bis zu 80 Metern im Innenbereich (abhängig von der Gebäudestruktur). Dies gewährleistet eine stabile und zuverlässige Verbindung in den meisten Wohnungen und Büros.',
      },
    },
    {
      question: {
        en: 'How can I customize sensor thresholds?',
        de: 'Wie kann ich die Sensorschwellenwerte anpassen?',
      },
      answer: {
        en: 'Thresholds for temperature, CO<sub>2</sub>, VOCs, and other metrics can be customized through the Carenuity app or any Matter-compatible platform. Once set, you will receive alerts when values exceed your defined safety or comfort levels.',
        de: 'Schwellenwerte für Temperatur, CO<sub>2</sub>, VOCs und andere Messgrößen können über die Carenuity-App oder jede Matter-kompatible Plattform angepasst werden. Sobald festgelegt, erhalten Sie Warnungen, wenn Werte Ihre definierten Sicherheits- oder Komfortgrenzen überschreiten.',
      },
    },
    {
      question: {
        en: 'Is the SQ-Panel compatible with other smart home systems?',
        de: 'Ist das SQ-Panel mit anderen Smart-Home-Systemen kompatibel?',
      },
      answer: {
        en: 'Yes. Thanks to Matter support, the SQ-Panel integrates seamlessly with popular ecosystems including Alexa, Google Home, and Apple Home. This ensures interoperability and future-proof compatibility with your smart home setup.',
        de: 'Ja. Dank Matter-Unterstützung lässt sich das SQ-Panel nahtlos in beliebte Ökosysteme wie Alexa, Google Home und Apple Home integrieren. Dies gewährleistet Interoperabilität und zukunftssichere Kompatibilität mit Ihrem Smart-Home-Setup.',
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

      <section className="pt-4">
        <div className="container">
          <div className="max-w-2xl mx-auto ">
            <h4>
              {state === 'en' && <>SQ-Panel FAQ</>}
              {state === 'de' && <>SQ-Panel FAQ</>}
            </h4>

            <p>
              {state === 'en' && (
                <>
                  Find detailed answers to the most common questions about the
                  SQ-Panel, its functionality, setup, and integration with smart
                  home ecosystems.
                </>
              )}
              {state === 'de' && (
                <>
                  Finden Sie ausführliche Antworten auf die häufigsten Fragen
                  zum SQ-Panel, seiner Funktion, Einrichtung und Integration in
                  Smart-Home-Ökosysteme.
                </>
              )}
            </p>

            {faqs.map((faq, index) => (
              <FAQCard
                key={index}
                question={state === 'en' ? faq.question.en : faq.question.de}
                answer={state === 'en' ? faq.answer.en : faq.answer.de}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHOC(Index, {
  servicesCategoryUrls: servicesUrls.helpcenter,
  pageUrl: 'help-center',
  pageTitle: 'Mobile App & Account',
  serviceCategory: 'Get Help',
});
