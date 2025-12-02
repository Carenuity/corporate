import React from 'react';
import Head from 'next/head';
import { LanguageSwitchContext } from '../../components/context/LanguageSwitch';
import Translatable from '../../components/Translatable';
import { useContext } from 'react';
import ServiceHOC from '../../components/hoc/ServiceHOC';
import { servicesUrls } from '../../utils/constants';
import SubscriptionWidget from '../../components/SubscriptionWidget';
import Link from 'next/link';

const Index = ({ isMobile }: { isMobile: boolean }) => {
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
        <title>Magnetic Traffic Counting</title>
      </Head>

      <section className="pt-4">
        <div className='container'>
  <h4>
    {state === 'en' && <>Magnetic Traffic Counting — Powered by the Carenuity Triple-Adapter Ecosystem</>}
    {state === 'de' && <>Magnetische Verkehrszählung — Angetrieben vom Carenuity Triple-Adapter-Ökosystem</>}
  </h4>
  <p>
    {state === 'en' && <>Magnetic sensing offers an efficient and unobtrusive way to detect vehicles in
     motion. Cars contain significant amounts of ferromagnetic material, which locally distorts the 
     Earth&apos;s magnetic field. A compact sensor module can measure these disturbances with microtesla 
     sensitivity, enabling reliable traffic counting in real time. Fast response, long-term temperature 
     stability and low power consumption make this approach ideal for outdoor deployments, even in remote 
     locations.</>}

    {state === 'de' && <>Magnetische Sensorik bietet eine effiziente und unauffällige Möglichkeit, 
    Fahrzeuge in Bewegung zu erkennen. Autos enthalten erhebliche Mengen ferromagnetischen Materials,
     das das Erdmagnetfeld lokal verzerrt. Ein kompaktes Sensormodul kann diese Störungen mit
      Mikrotelsa-Empfindlichkeit messen und ermöglicht so eine zuverlässige Verkehrszählung in Echtzeit. 
      Schnelle Reaktion, langfristige Temperaturstabilität und geringer Stromverbrauch machen diesen 
      Ansatz ideal für den Außeneinsatz, selbst an abgelegenen Standorten.</>}
  </p>

  <p>
    {state === 'en' && <>Carenuity provides a complete, modular hardware foundation to deploy such sensing 
    systems rapidly. The system integrates Infineon magnetic sensors with Carenuity&apos;s plug-and-play 
    Triple-Adapter architecture, enabling fast prototyping, fast field deployment and seamless integration
     into existing IoT platforms.</>}

    {state === 'de' && <>Carenuity bietet eine komplette, modulare Hardware-Basis, um solche Sensornetzwerke 
    schnell zu implementieren. Das System integriert Infineon-Magnetsensoren in Carenuitys Plug-and-Play 
    Triple-Adapter-Architektur, wodurch schnelles Prototyping, schnelle Feldbereitstellung und nahtlose 
    Integration in bestehende IoT-Plattformen möglich werden.</>}
  </p>

  <h4>
    {state === 'en' && <>Infineon Sensors Integrated into Carenuity Modules</>}
    {state === 'de' && <>Infineon-Sensoren in Carenuity-Module integriert</>}
  </h4>
  <p>
    {state === 'en' && <>Carenuity supports high-precision sensors from leading manufacturers, including 
    magnetic sensors suitable for traffic detection. The Infineon TLV493D-A1B6 3D Hall sensor is particularly
     well suited. It measures changes in all three magnetic axes with ample dynamic range and is easy to 
     integrate into low-power microcontroller systems.</>}

    {state === 'de' && <>Carenuity unterstützt hochpräzise Sensoren führender Hersteller, einschließlich
     Magnetsensoren, die sich für die Verkehrserkennung eignen. Der Infineon TLV493D-A1B6 3D-Hall-Sensor
      ist besonders gut geeignet. Er misst Änderungen in allen drei magnetischen Achsen mit großem 
      Dynamikbereich und lässt sich einfach in stromsparende Mikrocontrollersysteme integrieren.</>}
  </p>

  <p>
    {state === 'en' && <>Carenuity&apos;s C3-Mini ecosystem is specifically designed for such integrations. 
    Sensors can be plugged directly into the platform, swapped within minutes and combined with any C3-Mini 
    microcontroller or actuator module. This modularity is a core feature of the Triple-Adapter system: Slot
     S for the sensor, Slot M for the microcontroller and Slot A for the actuator. Together, these S+M+A
      components build a complete IoT device.</>}

    {state === 'de' && <>Das C3-Mini-Ökosystem von Carenuity ist speziell für solche Integrationen
     konzipiert. Sensoren können direkt in die Plattform eingesteckt, innerhalb weniger Minuten 
     ausgetauscht und mit jedem C3-Mini-Mikrocontroller oder Aktuatormodul kombiniert werden. Diese
      Modularität ist ein Kernmerkmal des Triple-Adapter-Systems: Slot S für den Sensor, Slot M für 
      den Mikrocontroller und Slot A für den Aktuator. Zusammen bilden diese S+M+A-Komponenten ein 
      vollständiges IoT-Gerät.</>}
  </p>

  <h4>
    {state === 'en' && <>The Carenuity Triple-Adapter Advantage</>}
    {state === 'de' && <>Der Carenuity Triple-Adapter-Vorteil</>}
  </h4>
  <p>
    {state === 'en' && <>The Triple-Adapter is designed to make sensor systems fast to assemble, deploy 
    and iterate. It provides a universal interface for sensors, controllers and actuators, so designers 
    can prototype or deploy a full device by stacking the required modules. Compatibility with ESP32- and 
    ESP8266-based Carenuity microcontrollers enables efficient data processing and wireless communication.
     Native integration with Home Assistant, Matter ecosystems and cloud-free local setups is also supported.</>}

    {state === 'de' && <>Der Triple-Adapter wurde entwickelt, um Sensornetzwerke schnell zusammenzubauen, 
    einzusetzen und zu iterieren. Er bietet eine universelle Schnittstelle für Sensoren, Controller und 
    Aktuatoren, sodass Designer ein vollständiges Gerät prototypisch erstellen oder bereitstellen können, 
    indem sie die erforderlichen Module stapeln. Die Kompatibilität mit ESP32- und ESP8266-basierten 
    Carenuity-Mikrocontrollern ermöglicht effiziente Datenverarbeitung und drahtlose Kommunikation. 
    Native Integration in Home Assistant, Matter-Ökosysteme und lokale Cloud-freie Setups wird ebenfalls
     unterstützt.</>}
  </p>

  <h4>
    {state === 'en' && <>Build Your Traffic Counter in Under 3 Minutes</>}
    {state === 'de' && <>Bauen Sie Ihren Verkehrszähler in unter 3 Minuten</>}
  </h4>
  <p>
    {state === 'en' && <>Carenuity&apos;s Solution Builder provides an automated installation workflow that 
    eliminates programming effort completely. Devices are configured by connecting them briefly via USB 
    and pressing the “Install-for-Free” button. Sensors can later be swapped in the field within minutes,
     thanks to the standardized module format and the “Quick Change” feature. This makes Carenuity ideal
      for field experiments, university projects, mobile deployments and municipal testbeds.</>}

    {state === 'de' && <>Der Solution Builder von Carenuity bietet einen automatisierten Installationsablauf,
     der den Programmieraufwand vollständig eliminiert. Geräte werden konfiguriert, indem sie kurz über USB 
     verbunden und die „Install-for-Free“-Taste gedrückt wird. Sensoren können später vor Ort innerhalb von
      Minuten ausgetauscht werden, dank des standardisierten Modulformats und der „Quick Change“-Funktion.
       Dies macht Carenuity ideal für Feldexperimente, Universitätsprojekte, mobile Einsätze und kommunale 
       Testumgebungen.</>}
  </p>

  <h4>
    {state === 'en' && <>How Magnetic Traffic Counting Works</>}
    {state === 'de' && <>Wie die magnetische Verkehrszählung funktioniert</>}
  </h4>
  <p>
    {state === 'en' && <>The module continuously measures the ambient magnetic field. When a vehicle passes,
     the magnetic signature changes sharply in at least one axis. The system detects these peaks and counts 
     them as events. Microtesla-level sensitivity is typically sufficient to capture even small passenger 
     cars. Fast sampling ensures reliable detection up to typical urban traffic speeds. Temperature-stable 
     sensor designs support long-term outdoor use. By combining the Infineon magnetic sensor with a C3-Mini 
     controller and the Triple-Adapter architecture, Carenuity creates a compact device capable of real-time
      vehicle detection, low-power autonomous operation, wireless reporting via Wi-Fi, LoRa or other ESP-based
       transports, and OTA updates once integrated into Home Assistant or Matter networks.</>}

    {state === 'de' && <>Das Modul misst kontinuierlich das Umgebungs-Magnetfeld. Wenn ein Fahrzeug
     vorbeifährt, ändert sich die magnetische Signatur in mindestens einer Achse stark. Das System
      erkennt diese Spitzen und zählt sie als Ereignisse. Eine Mikrotelsa-Empfindlichkeit reicht in 
      der Regel aus, um selbst kleine PKWs zu erfassen. Schnelle Abtastung sorgt für zuverlässige 
      Erkennung bis zu typischen städtischen Verkehrsgeschwindigkeiten. Temperaturstabile Sensordesigns
       unterstützen den langfristigen Außeneinsatz. Durch die Kombination des Infineon-Magnetsensors 
       mit einem C3-Mini-Controller und der Triple-Adapter-Architektur erstellt Carenuity ein kompaktes 
       Gerät, das Echtzeit-Fahrzeugerkennung, stromsparenden autonomen Betrieb, drahtlose Berichterstattung
        über Wi-Fi, LoRa oder andere ESP-basierte Übertragungen sowie OTA-Updates nach Integration in Home
         Assistant- oder Matter-Netzwerke ermöglicht.</>}
  </p>

  <h4>
    {state === 'en' && <>Why Carenuity for Traffic Counting</>}
    {state === 'de' && <>Warum Carenuity für Verkehrszählung</>}
  </h4>
  <p>
    {state === 'en' && <>Carenuity offers several advantages that outperform traditional bespoke hardware
     designs: modularity with configurable S-M-A stack, rapid deployment via Install-for-Free, 
     future-proofing with easily swappable sensors, scalability for multiple nodes, and ecosystem
      integration with Home Assistant, Matter and the Solution Builder platform. These capabilities
       enable municipalities, research institutions, smart-city operators and mobility startups to 
       build and deploy magnetic traffic counters with unprecedented speed and flexibility.</>}

    {state === 'de' && <>Carenuity bietet mehrere Vorteile, die traditionelle, maßgeschneiderte 
    Hardware-Designs übertreffen: Modularität mit konfigurierbarem S-M-A-Stack, schnelle Bereitstellung 
    über Install-for-Free, Zukunftssicherheit durch einfach austauschbare Sensoren, Skalierbarkeit für
     mehrere Knoten und Ökosystemintegration mit Home Assistant, Matter und der Solution Builder-Plattform. 
     
     Diese Fähigkeiten ermöglichen es Kommunen, Forschungseinrichtungen, Smart-City-Betreibern und 
     Mobilitäts-Startups, magnetische Verkehrszähler mit beispielloser Geschwindigkeit und
      Flexibilität zu bauen und bereitzustellen.</>}
  </p>

  <h4>
    {state === 'en' && <>Start Measuring Smarter</>}
    {state === 'de' && <>Beginnen Sie intelligenter zu messen</>}
  </h4>
  <p>
    {state === 'en' && <>Carenuity supplies the complete hardware stack, installation services and
     sensor modules needed to build a magnetic traffic-monitoring system within minutes. Whether you
      are building a pilot installation for a university challenge or deploying a full traffic-analysis
       network, Carenuity accelerates development and delivers a reliable, low-cost and scalable solution.</>}
    {state === 'de' && <>Carenuity liefert den kompletten Hardware-Stack, Installationsservices und 
    Sensormodule, die benötigt werden, um innerhalb weniger Minuten ein magnetisches
     Verkehrsüberwachungssystem aufzubauen. Egal, ob Sie eine Pilotinstallation für
      eine Universitätsaufgabe erstellen oder ein vollständiges Verkehrsanalysenetzwerk 
      implementieren, Carenuity beschleunigt die Entwicklung und liefert eine zuverlässige,
       kostengünstige und skalierbare Lösung.</>}
  </p>

  <h4>Shop with us</h4>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    maxHeight: '1000px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/magnetic-traffic/infenio.JPEG"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      width: '420px',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />

                  <div style={{ padding: '10px' }}>
                    <h6 className="text-success">
                      Sensor box Shield2Go Dual Adapter - Infineon Line
                    </h6>
                    <p>
                      The kit is intended solely for your evaluation purposes.

                        By operating this kit, you agree to use this kit only for such an evaluation...
                    </p>
                    <div className="row">
                      <p className="col-md-6 mb-4">
                        {!isMobile && (
                          <Link
                            href={
                              'https://www.chipglobe.shop/en/p/sensor-array-kit-complete-bundle-with-10x-single-adapter-and-dps310'
                            }
                            target="_blank"
                            className={'btn btn-sm btn-success rounded-pill'}
                          >
                            <span className="small"> Buy Now</span>
                          </Link>
                        )}

                        {isMobile && (
                          <a
                            href={
                              'https://www.chipglobe.shop/search?q=190545-1'
                            }
                            target="_blank"
                            className={'btn btn-sm btn-success rounded-pill'}
                            rel="noreferrer"
                          >
                            <span className="small">
                              Buy Now{' '}
                              {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                            </span>
                          </a>
                        )}
                      </p>
                      <p className="col-md-6 mb-4">
                        {!isMobile && (
                          <Link
                            href={''}
                            target="_blank"
                            className={'btn btn-sm btn-success rounded-pill'}
                          >
                            <span className="small"> Install for free</span>
                          </Link>
                        )}

                        {isMobile && (
                          <a
                            href={''}
                            target="_blank"
                            className={'btn btn-sm btn-success rounded-pill'}
                            rel="noreferrer"
                          >
                            <span className="small">
                              Install for free{' '}
                              {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                            </span>
                          </a>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

  <hr className="my-7 " />
          <div id="subscribe" className="my-5 " style={{ textAlign: 'center' }}>
            <h2>Product Wishlist</h2>
            <p>
              Join <strong>Magnetic Traffic Counting</strong> wishlist for updates when
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
  pageUrl: '/product/magnetic-traffic-counting',
  pageTitle: 'Magnetic Traffic Counting',
  serviceCategory: 'Our Products',
});
