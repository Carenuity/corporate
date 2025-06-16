import React from 'react';
import Head from 'next/head';
import { useContext } from 'react';
import PageTitle from '../../../components/PageTitle';
import { LanguageSwitchContext } from '../../../components/context/LanguageSwitch';
import Translatable from '../../../components/Translatable';
import ApplicationItem from '../../../components/ApplicationItem';

const Page = () => {
  const pageTitle = 'Volatile Organic Compounds';
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
        <title>{pageTitle}</title>
      </Head>

      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        links={[{ path: '/', title: '' }]}
        pageTitle={pageTitle}
        pageUrl=""
      />

      <section className="pt-4">
        <div className="container">
          {/* <h4 className="mb-4">
            {state === 'en' && <>VOC Measurement Methods</>}
            {state === 'de' && <>VOC-Messmethoden</>}
          </h4> */}

          <h4 className="mn-4">
            {state === 'en' && <> Invisible Threats in the Air: Why VOC Monitoring Matters</>}
            {state === 'de' && <> Unsichtbare Bedrohungen in der Luft: Warum VOC-Überwachung wichtig ist</>}
          </h4>
           <p className="mb-4">
            {state === 'en' && <>
            Volatile Organic Compounds (VOCs) are all around us—emitted from everyday items like paints, cleaning agents, furniture, 
            and even personal care products. While often undetectable by smell or sight, these invisible chemicals can have serious 
            consequences on your health when left unchecked. Prolonged exposure to high VOC levels can irritate the eyes, nose, and
             throat, trigger headaches, dizziness, and fatigue, and in more severe cases, damage the liver, kidneys, and central nervous 
             system. For vulnerable groups such as children, the elderly, and those with asthma or allergies, the risks are even greater.
            </>}
            {state === 'de' && <>
            Flüchtige organische Verbindungen (VOC) sind überall um uns herum - sie werden von alltäglichen Gegenständen wie Farben, Reinigungsmitteln, Möbeln, 
            und sogar Körperpflegeprodukten freigesetzt. Diese unsichtbaren Chemikalien, die oft weder geruchlich noch optisch wahrnehmbar sind, können schwerwiegende 
            Folgen für die Gesundheit haben, wenn sie nicht kontrolliert werden. Eine längere Exposition gegenüber hohen VOC-Werten kann Augen, Nase und
            Rachen reizen, Kopfschmerzen, Schwindel und Müdigkeit auslösen und in schwereren Fällen die Leber, die Nieren und das zentrale Nervensystem 
            schädigen. Für gefährdete Gruppen wie Kinder, ältere Menschen und Asthmatiker oder Allergiker sind die Risiken sogar noch größer.
            </>}
          </p>
           <p className="mb-4">
            {state === 'en' && <>
            Indoor environments—especially those that are sealed or poorly ventilated—can quickly accumulate harmful VOCs, turning 
            seemingly safe spaces into health hazards. Because their presence is subtle yet impactful, relying on your senses isn&apos;t 
            enough. Continuous VOC monitoring is essential to identifying exposure before symptoms arise, allowing you to take targeted 
            action to improve air quality. By staying aware and in control, you&apos;re not just managing air—you&apos;re protecting your health, 
            performance, and long-term wellbeing.
            </>}
            {state === 'de' && <>
            In Innenräumen - insbesondere in versiegelten oder schlecht belüfteten - können sich schnell schädliche flüchtige organische Verbindungen (VOC) ansammeln und 
            scheinbar sichere Räume in ein Gesundheitsrisiko verwandeln. Da ihr Vorhandensein subtil, aber dennoch wirkungsvoll ist, reicht es nicht aus, sich auf Ihre Sinne zu verlassen 
            . Eine kontinuierliche VOC-Überwachung ist unerlässlich, um die Belastung zu erkennen, bevor Symptome auftreten, so dass Sie gezielte 
            Maßnahmen zur Verbesserung der Luftqualität ergreifen können. Indem Sie sich bewusst sind und die Kontrolle behalten, können Sie nicht nur die Luft kontrollieren, sondern auch Ihre Gesundheit, Ihre Leistung 
            und Ihr langfristiges Wohlbefinden schützen.
            </>}
          </p>

          <h4 className="mb-2 h4">
                 {state === 'en' && <>Measurement Methods</>}
            {state === 'de' && <>Messmethoden</>}
                </h4>
          <p className="mn-4">
            {state === 'en' && (
              <>
                Volatile Organic Compounds (VOCs) are a group of organic
                chemicals that can affect indoor air quality and human health.
                Measuring VOC levels is crucial for various applications, such
                as environmental monitoring, indoor air quality assessment, and
                industrial process control. Here are some common methods to
                measure VOC levels:
              </>
            )}
            {state === 'de' && (
              <>
                Flüchtige organische Verbindungen (VOC) sind eine Gruppe von
                organischen Chemikalien, die die Luftqualität in Innenräumen und
                die menschliche Gesundheit beeinträchtigen können. Die Messung
                des VOC-Gehalts ist für verschiedene Anwendungen von
                entscheidender Bedeutung, z. B. für die Umweltüberwachung, die
                Bewertung der Luftqualität in Innenräumen und die Kontrolle
                industrieller Prozesse. Hier sind einige gängige Methoden zur
                Messung des VOC-Gehalts:
              </>
            )}
          </p>

          <h5 className="mn-4">
            {state === 'en' && <>1. Photoionization Detector (PID)</>}
            {state === 'de' && <>1. Photoionisationsdetektor (PID)</>}
          </h5>
          <ul className="mn-4">
            {state === 'en' && (
              <>
                <li>
                  <strong>How it works:</strong> Uses ultraviolet light to
                  ionize VOC molecules in the air.{' '}
                </li>
                <li>
                  <strong>Advantages:</strong> High sensitivity and fast
                  response time.
                </li>
                <li>
                  <strong>Applications:</strong> Ideal for industrial hygiene,
                  environmental monitoring, and emergency response.
                </li>
              </>
            )}
            {state === 'de' && (
              <>
                <li>
                  <strong>Wie es funktioniert:</strong> Verwendet ultraviolettes
                  Licht zur Ionisierung von VOC-Molekülen in der Luft.
                </li>
                <li>
                  <strong>Vorteile:</strong> Hohe Empfindlichkeit und schnelle
                  Reaktionszeit.
                </li>
                <li>
                  <strong>Anwendungen:</strong> Ideal für Industriehygiene,
                  Umweltüberwachung und Notfallmaßnahmen.
                </li>
              </>
            )}
          </ul>

          <h5 className="mn-4">
            {state === 'en' && <>2. Flame Ionization Detector (FID)</>}
            {state === 'de' && <>2. Flammen-Ionisations-Detektor (FID)</>}
          </h5>
          <ul className="mn-4">
            {state === 'en' && (
              <>
                <li>
                  <strong>How it works:</strong> Burns the VOCs in a hydrogen
                  flame and measures the ions produced.
                </li>
                <li>
                  <strong>Advantages:</strong> High accuracy and wide range of
                  detectable VOCs.
                </li>
                <li>
                  <strong>Applications:</strong> Commonly used in laboratory
                  analysis and gas chromatography.
                </li>
              </>
            )}
            {state === 'de' && (
              <>
                <li>
                  <strong>Wie es funktioniert:</strong> Er verbrennt die
                  flüchtigen organischen Verbindungen in einer Wasserstoffflamme
                  und misst die entstehenden Ionen.
                </li>
                <li>
                  <strong>Vorteile:</strong> Hohe Genauigkeit und breiter
                  Bereich von nachweisbaren VOCs.
                </li>
                <li>
                  <strong>Anwendungen:</strong> Häufig in der Laboranalyse und
                  Gaschromatografie eingesetzt.
                </li>
              </>
            )}
          </ul>

          <h5 className="mn-4">
            {state === 'en' && <>3. Metal Oxide Sensors (MOS)</>}
            {state === 'de' && <>3. Metall-Oxid-Sensoren (MOS)</>}
          </h5>
          <ul className="mn-4">
            {state === 'en' && (
              <>
                <li>
                  <strong>How it works:</strong> Uses a metal oxide layer that
                  changes its electrical resistance when exposed to VOCs.
                </li>
                <li>
                  <strong>Advantages:</strong> Compact, digital, and capable of
                  detecting multiple gases.
                </li>
                <li>
                  <strong>Applications:</strong> Suitable for smart home
                  devices, building automation, and HVAC systems.
                </li>
              </>
            )}
            {state === 'de' && (
              <>
                <li>
                  <strong>Wie es funktioniert:</strong> Verwendet eine
                  Metalloxidschicht, die ihren elektrischen Widerstand ändert,
                  wenn sie VOCs ausgesetzt wird.
                </li>
                <li>
                  <strong>Vorteile:</strong> Kompakt, digital und in der Lage,
                  mehrere Gase zu erkennen.
                </li>
                <li>
                  <strong>Anwendungen:</strong> Geeignet für Smart-Home-Geräte,
                  Gebäudeautomatisierung und HLK-Systeme.
                </li>
              </>
            )}
          </ul>

          <h5 className="mn-4">
            {state === 'en' && <>4. Photoacoustic Spectroscopy (PAS)</>}
            {state === 'de' && <>4. Photoakustische Spektroskopie (PAS)</>}
          </h5>
          <ul className="mn-4">
            {state === 'en' && (
              <>
                <li>
                  <strong>How it works:</strong> Uses a modulated laser beam to
                  excite VOC molecules and measures the resulting sound waves.
                </li>
                <li>
                  <strong>Advantages:</strong> High accuracy, small size, and
                  low power consumption.
                </li>
                <li>
                  <strong>Applications:</strong> Ideal for smart home and
                  building applications.
                </li>
              </>
            )}
            {state === 'de' && (
              <>
                <li>
                  <strong>Wie es funktioniert:</strong> Verwendet einen
                  modulierten Laserstrahl, um VOC-Moleküle anzuregen, und misst
                  die daraus resultierenden Schallwellen.
                </li>
                <li>
                  <strong>Vorteile:</strong> Hohe Genauigkeit, geringe Größe und
                  niedriger Stromverbrauch.
                </li>
                <li>
                  <strong>Anwendungen:</strong> Ideal für Smart-Home- und
                  Gebäudeanwendungen.
                </li>
              </>
            )}
          </ul>

          <h5 className="mn-4">
            {state === 'en' && (
              <>5. Gas Chromatography-Mass Spectrometry (GC-MS)</>
            )}
            {state === 'de' && (
              <>5. Gaschromatographie-Massenspektrometrie (GC-MS)</>
            )}
          </h5>
          <ul className="mn-4">
            {state === 'en' && (
              <>
                <li>
                  <strong>How it works:</strong> Separates VOCs using gas
                  chromatography and identifies them using mass spectrometry.
                </li>
                <li>
                  <strong>Advantages:</strong> Extremely accurate and capable of
                  identifying a wide range of VOCs.
                </li>
                <li>
                  <strong>Applications:</strong> Used for detailed laboratory
                  analysis and research.
                </li>
              </>
            )}
            {state === 'de' && (
              <>
                <li>
                  <strong>Wie es funktioniert:</strong> Trennt flüchtige
                  organische Verbindungen (VOC) mithilfe der Gaschromatografie
                  und identifiziert sie mithilfe der Massenspektrometrie.
                </li>
                <li>
                  <strong>Vorteile:</strong> Äußerst genau und in der Lage, eine
                  breite Palette von flüchtigen organischen Verbindungen zu
                  identifizieren.
                </li>
                <li>
                  <strong>Anwendungen:</strong> Wird für detaillierte
                  Laboranalysen und Forschung verwendet.
                </li>
              </>
            )}
          </ul>

          <h4 className="mn-4">
            {state === 'en' && <> Conclusion</>}
            {state === 'de' && <>Schlussfolgerung</>}
          </h4>
          <p className="mn-4">
            {state === 'en' && (
              <>
                These methods provide various options for measuring VOC levels,
                each with its own advantages and applications. The choice of
                method depends on the specific requirements and context of the
                measurement.
              </>
            )}
            {state === 'de' && (
              <>
                Diese Methoden bieten verschiedene Möglichkeiten zur Messung des
                VOC-Gehalts, jede mit ihren eigenen Vorteilen und Anwendungen.
                Die Wahl der Methode hängt von den spezifischen Anforderungen
                und dem Kontext der Messung ab.
              </>
            )}
          </p>

          <h4 className="mn-4">
            {state === 'en' && <> Learn More</>}
            {state === 'de' && <>Mehr erfahren</>}
          </h4>
          <p className="mn-4">
            {state === 'en' && (
              <>
                Carenuity specializes in sensor devices, offering a portfolio of
                24 sensor products that come with enclosures and can be
                customized on various levels to meet your specific needs. These
                applications are available by one-click on the Install-for-Free
                buttons.
              </>
            )}
            {state === 'de' && (
              <>
                Carenuity ist auf Sensorgeräte spezialisiert und bietet ein
                Portfolio von 24 Sensorprodukten an, die mit Gehäusen geliefert
                werden und auf verschiedenen Ebenen an Ihre spezifischen
                Anforderungen angepasst werden können. Diese Anwendungen sind
                mit einem Klick auf die Install-for-Free-Schaltflächen
                verfügbar.
              </>
            )}
          </p>
          {/* <ul className="mn-4">
            {state === 'en' && <>
            <li>Barometer</li>
            <li>Hygrometer</li>
            <li>Thermometer</li>
            <li>Motion Detector</li>
            <li>Luxmeter</li>
            <li>IR Radiometer</li>
            <li>Presence Button</li>
            </>}
            {state === 'de' && <>
           <li>Barometer</li>
            <li>Hygrometer</li>
            <li>Thermometer</li>
            <li>Bewegungsdetektor</li>
            <li>Luxmeter</li>
            <li>IR Radiometer</li>
            <li>Präsenztaste</li>
            </>}
          </ul> */}

          {state === 'en' && (
            <>
              <div className="row mb-1-9">
                <div className="col-md-6 wow fadeIn" data-wow-delay="200ms">
                  <ApplicationItem
                    name={'Barometer'}
                    url={
                      'https://solutions.carenuity.com/applications/nJMltlS83P6vqQjANMdU'
                    }
                  />
                  <ApplicationItem
                    name={'Hygrometer'}
                    url={
                      'https://solutions.carenuity.com/applications/Pz79ekXXeqNppvIgHK5r'
                    }
                  />
                  <ApplicationItem
                    name={'Thermometer'}
                    url={
                      'https://solutions.carenuity.com/applications/wzxLAKXdeVgruPEZP7lN'
                    }
                  />
                  <ApplicationItem
                    name={'Motion Detector'}
                    url={
                      'https://solutions.carenuity.com/applications/MGMRQwSXjjvSZzOu3Xj8'
                    }
                  />
                </div>
                <div className="col-md-6 wow fadeIn" data-wow-delay="400ms">
                  <ApplicationItem
                    name={'Luxmeter'}
                    url={
                      'https://solutions.carenuity.com/applications/YyvgrAa1UcVrRYcysN74'
                    }
                  />
                  <ApplicationItem
                    name={'IR Radiometer'}
                    url={
                      'https://solutions.carenuity.com/applications/X4Uz3c2SknHIQjiektgV'
                    }
                  />
                  <ApplicationItem
                    name={'Presence Button'}
                    url={
                      'https://solutions.carenuity.com/applications/VCe4FCtct0ovFUE9bnzM'
                    }
                  />
                </div>
              </div>
            </>
          )}
          {state === 'de' && (
            <>
              <div className="row mb-1-9">
                <div className="col-md-6 wow fadeIn" data-wow-delay="200ms">
                  <ApplicationItem
                    name={'Barometer'}
                    url={
                      'https://solutions.carenuity.com/applications/nJMltlS83P6vqQjANMdU'
                    }
                  />
                  <ApplicationItem
                    name={'Hygrometer'}
                    url={
                      'https://solutions.carenuity.com/applications/Pz79ekXXeqNppvIgHK5r'
                    }
                  />
                  <ApplicationItem
                    name={'Thermometer'}
                    url={
                      'https://solutions.carenuity.com/applications/wzxLAKXdeVgruPEZP7lN'
                    }
                  />
                  <ApplicationItem
                    name={'Bewegungsdetektor'}
                    url={
                      'https://solutions.carenuity.com/applications/MGMRQwSXjjvSZzOu3Xj8'
                    }
                  />
                </div>
                <div className="col-md-6 wow fadeIn" data-wow-delay="400ms">
                  <ApplicationItem
                    name={'Luxmeter'}
                    url={
                      'https://solutions.carenuity.com/applications/YyvgrAa1UcVrRYcysN74'
                    }
                  />
                  <ApplicationItem
                    name={'IR Radiometer'}
                    url={
                      'https://solutions.carenuity.com/applications/X4Uz3c2SknHIQjiektgV'
                    }
                  />
                  <ApplicationItem
                    name={'Präsenztaste'}
                    url={
                      'https://solutions.carenuity.com/applications/VCe4FCtct0ovFUE9bnzM'
                    }
                  />
                </div>
              </div>
            </>
          )}

          <p className="mn-4">
            {state === 'en' && (
              <>
                Get new applications by combining the Sensor, Microcontroller,
                and Actuator (S-M-A).
              </>
            )}
            {state === 'de' && (
              <>
                Erschließen Sie sich neue Anwendungen durch die Kombination von
                Sensor, Mikrocontroller und Aktor (S-M-A).
              </>
            )}
          </p>
        </div>
      </section>
    </>
  );
};

export default Page;
