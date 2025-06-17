import Head from 'next/head';
import PageTitle from '../../../components/PageTitle';
import Link from 'next/link';
import ApplicationItem from '../../../components/ApplicationItem';
import { useContext } from 'react';
import { LanguageSwitchContext } from '../../../components/context/LanguageSwitch';
import Translatable from '../../../components/Translatable';

const Sensors = () => {
  // { isMobile }: { isMobile: boolean }
  const pageTitle = 'CO2 Measurement Methods';

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
        links={[{ path: '/sq-labs', title: 'Team' }]}
        pageTitle={pageTitle}
        pageUrl="/co2-insights"
      />

      <section className="pt-4">
        <div className="container">
          <div className="section-title left mb-1-9">
            <span className="sm-title">
              Co<sub>2</sub> Insights
            </span>
          </div>
          <div className="row">
            <div className="mb-4">
              <h4 className="mb-2 h4">
                 {state === 'en' && <>Breathe Easy, Live Better: Why CO₂ Awareness is Essential for Your Health</>}
            {state === 'de' && <>Einfacher atmen, besser leben: Warum CO₂-Bewusstsein wichtig für Ihre Gesundheit ist</>}
                </h4>
                <p>
                  {state === 'en' && <>
                  We often take indoor air for granted, but its quality plays a critical role in our overall health and wellbeing. 
                  One of the most underestimated factors affecting indoor environments is carbon dioxide (CO₂). While CO₂ is naturally 
                  present in the air, poor ventilation can cause it to accumulate to unhealthy levels in homes, offices, classrooms, 
                  and other enclosed spaces. Elevated CO₂ levels have been directly linked to headaches, fatigue, poor concentration, 
                  drowsiness, and even reduced cognitive function. Over time, consistent exposure can lead to chronic discomfort, poor 
                  sleep, and a decline in mental performance—especially concerning for children, the elderly, and those with respiratory conditions.
                  </>}
                  {state === 'de' && <>
                  Wir nehmen die Raumluft oft als selbstverständlich hin, aber ihre Qualität spielt eine entscheidende Rolle für unsere allgemeine 
                  Gesundheit und unser Wohlbefinden. Einer der am meisten unterschätzten Faktoren, die das Innenraumklima beeinflussen, 
                  ist Kohlendioxid (CO₂). CO₂ ist zwar von Natur aus in der Luft vorhanden, doch kann es sich bei schlechter Belüftung in 
                  Wohnungen, Büros, Klassenzimmern und anderen geschlossenen Räumen in ungesunden Mengen anreichern. Erhöhte CO₂-Werte stehen 
                  in direktem Zusammenhang mit Kopfschmerzen, Müdigkeit, Konzentrationsschwäche, Schläfrigkeit und sogar eingeschränkten 
                  kognitiven Funktionen. Im Laufe der Zeit kann eine anhaltende Belastung zu chronischen Beschwerden, schlechtem Schlaf 
                  und einem Rückgang der geistigen Leistungsfähigkeit führen - besonders bedenklich für Kinder, ältere Menschen und Personen 
                  mit Atemwegserkrankungen.

               
                  </>}
                </p>

                 <p>
                  {state === 'en' && <>
                  The danger lies in CO₂&apos;s invisibility—it has no color or smell, so its presence often goes unnoticed until symptoms arise. 
                  This makes regular monitoring essential. Understanding and controlling indoor CO₂ levels is not just about comfort; it&apos;s 
                  about safeguarding your health. With real-time insights and proactive ventilation strategies, you can ensure your indoor 
                  environment supports focus, energy, and long-term wellness. Staying ahead of this invisible threat empowers you to create 
                  spaces that promote clarity, safety, and peace of mind.
                  </>}
                  {state === 'de' && <>
                  Die Gefahr liegt in der Unsichtbarkeit von CO₂ - es hat keine Farbe und keinen Geruch, so dass seine Anwesenheit oft unbemerkt bleibt, bis Symptome auftreten. 
                  Dies macht eine regelmäßige Überwachung unerlässlich. Das Verständnis und die Kontrolle der CO₂-Werte in Innenräumen sind nicht nur eine Frage des Komforts, 
                  sondern auch des Gesundheitsschutzes ( 
                  ). Mit Echtzeit-Einblicken und proaktiven Belüftungsstrategien können Sie sicherstellen, dass Ihre Innenraumumgebung 
                  Konzentration, Energie und langfristiges Wohlbefinden fördert. Dieser unsichtbaren Bedrohung einen Schritt voraus zu sein, ermöglicht es Ihnen, 
                  Räume zu schaffen, die Klarheit, Sicherheit und Seelenfrieden fördern.

                 
                  </>}
                </p>

             
            </div>

            <div>
              <h4 className="mb-2 h4">
                 {state === 'en' && <>Measurement Methods</>}
            {state === 'de' && <>Messmethoden</>}
                </h4>
                <p>
                 {state === 'en' && <>
                  Carbon dioxide (CO<sub>2</sub>) is a greenhouse gas that affects
              the climate and the quality of life on Earth. Measuring the CO
              <sub>2</sub> level in the air is important for various
              applications, such as environmental monitoring, industrial process
              control, indoor air quality, and health and safety. There are
              different methods to measure the CO<sub>2</sub> level in the air,
              depending on the purpose and the range of concentration. Some of
              the common methods are:
                 </>}
            {state === 'de' && <>
             Kohlendioxid (CO<sub>2</sub>) ist ein Treibhausgas, das
              das Klima und die Lebensqualität auf der Erde beeinflusst. Die Messung des CO
              <sub>2</sub>-Gehalts in der Luft ist für verschiedene
              Anwendungen wichtig, z. B. für die Umweltüberwachung, die Kontrolle industrieller Prozesse
              , die Luftqualität in Innenräumen sowie für Gesundheit und Sicherheit. Es gibt
              verschiedene Methoden zur Messung des CO<sub>2</sub>-Gehalts in der Luft,
              je nach Zweck und Konzentrationsbereich. Einige der
              gängigen Methoden sind:
            </>} 
                </p>
            </div>
               
                
            <div className="mb-4 ">
              <div
                className="e-card "
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 90%)',
                  maxHeight: '1200px',
                   padding: '20px' ,
                }}
              >
                <div className='row'>
                  <div className='col-lg-4'>

                  
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/co2/Cavity Ring-Down Spectroscopy (CRDS).png"
                  className=" wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    // width: '560px',
                    animationName: 'fadeIn',
                  }}
                />
               </div>
               <div className='col-lg-8'>
                  {state === 'en' && <>
                  <div>
                  <h4 className="mb-2 h5">
                    Cavity Ring-Down Spectroscopy <strong>(CRDS)</strong>
                  </h4>
                  This method uses a laser beam that is reflected inside a
                  cavity with mirrors. The laser light is absorbed by the CO2
                  molecules in the cavity, and the time it takes for the light
                  to decay is measured. This method is very precise and
                  accurate, and can measure CO2 levels from ambient to high
                  concentrations .
                </div>
                  </>}
                  {state === 'de' && <>
                  <div >
                  <h4 className="mb-2 h5">
                    Hohlraum-Ring-Down-Spektroskopie <strong></strong>
                  </h4>
                  Bei dieser Methode wird ein Laserstrahl in einem
                  Hohlraum mit Spiegeln reflektiert. Das Laserlicht wird von den CO2-Molekülen
                  im Hohlraum absorbiert, und es wird die Zeit gemessen, die das Licht
                  zum Abklingen benötigt. Diese Methode ist sehr präzise und
                  genau und kann CO2-Konzentrationen von der Umgebung bis hin zu hohen Konzentrationen messen
                  .
                </div>
                  </>}
               
                    </div>
                </div>
                
              </div>
            </div>
            <div className="mb-4 ">
              <div
                className="e-card  "
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 90%)',
                  maxHeight: '1200px',
                   padding: '20px' ,
                }}
              >
                 <div className='row'>
                  <div className='col-lg-4'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/co2/Non-Dispersive Infrared (NDIR).png"
                    className=" wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                      // width: '560px',
                      boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                      animationName: 'fadeIn',
                    }}
                  />
                </div>
              
                  {state === 'en' && <>
                   <div  className='col-lg-8'>
                  <h4 className="mb-2 h5">
                    Non-Dispersive Infrared <strong>(NDIR)</strong> e.g.
                    TechnolineWL1030{' '}
                  </h4>
                  This method uses an infrared light source that passes through
                  a sample of air. The CO<sub>2</sub> molecules in the air
                  absorb some of the infrared light, and the remaining light is
                  detected by a sensor. The amount of light absorbed is
                  proportional to the CO<sub>2</sub>
                  concentration in the air. This method is simple and
                  inexpensive, but less accurate than CRDS. It is widely used
                  for indoor air quality monitoring and industrial applications
                  .
                </div>
                  </>}
                  {state === 'de' && <>
                   <div  className='col-lg-8'>
                  <h4 className="mb-2 h5">
                    Nicht-dispersives Infrarot  e.g.
                    TechnolineWL1030{' '}
                  </h4>
                  Bei dieser Methode wird eine Infrarotlichtquelle verwendet, die eine Luftprobe
                  durchdringt. Die CO<sub>2</sub>-Moleküle in der Luft
                  absorbieren einen Teil des Infrarotlichts, und das restliche Licht wird
                  von einem Sensor erfasst. Die Menge des absorbierten Lichts ist
                  proportional zur CO<sub>2</sub>
                  Konzentration in der Luft. Diese Methode ist einfach und
                  kostengünstig, aber weniger genau als CRDS. Sie ist weit verbreitet
                  für die Überwachung der Luftqualität in Innenräumen und für industrielle Anwendungen.
                  
                </div>
                  </>}
               
               </div>
              </div>
            </div>
            <div className="mb-4 ">
              <div
                className="e-card "
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 90%)',
                  maxHeight: '1250px',
                   padding: '20px' ,
                }}
              >
                <div className='row'>
                  <div className='col-lg-4'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/co2/Gas Chromatography (GC).png"
                    className=" wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                      boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 90%)',
                      animationName: 'fadeIn',
                    }}
                  />
                </div>
                     {state === 'en' && <>
                     <div  className='col-lg-8'>
                  <h4 className="mb-2 h5">
                    Gas Chromatography <strong>(GC)</strong>
                  </h4>
                  This method separates the different components of a gas
                  mixture using a column and a carrier gas. The separated
                  components are then detected by a detector, such as a flame
                  ionization detector <strong> (FID)</strong> or a thermal
                  conductivity detector <strong>(TCD)</strong>. The CO2
                  concentration is calculated based on the peak area and the
                  calibration curve. This method is accurate and sensitive, but
                  requires more complex equipment and calibration. It is used
                  for laboratory analysis and research purposes .
                </div>
                  </>}
                  {state === 'de' && <>
                  <div  className='col-lg-8'>
                  <h4 className="mb-2 h5">
                   Gaschromatographie 
                  </h4>
                 <p>
                   Bei dieser Methode werden die verschiedenen Komponenten eines Gasgemischs
                  mithilfe einer Säule und eines Trägergases getrennt. Die abgetrennten
                  Komponenten werden dann mit einem Detektor wie einem Flammen
                  Ionisationsdetektor  oder einem thermischen
                  Leitfähigkeitsdetektor nachgewiesen. Die CO2-Konzentration
                  wird auf der Grundlage der Peakfläche und der Kalibrierungskurve
                  berechnet. Diese Methode ist genau und empfindlich, aber
                  erfordert eine komplexere Ausrüstung und Kalibrierung. Sie wird
                  für Laboranalysen und Forschungszwecke verwendet.
                 </p>
                </div>
                  </>}
                
              </div> </div>
            </div>
            <div className="mb-4 ">
              <div
                className="e-card "
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 90%)',
                   maxHeight: '1250px',
                     padding: '20px' ,
                }}
              >
                <div className='row'>
                  <div className='col-lg-4'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/co2/Photoacoustic Spectroscopy (PAS) e.g. Infineon PAS CO2.png"
                    className=" wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                     
                      visibility: 'visible',
                      animationDelay: '100ms',
                      boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 90%)',
                      animationName: 'fadeIn',
                      width: '560px',
                    }}
                  />
                </div>
                 {state === 'en' && <>
                 <div  className='col-lg-8'>
                  <h4 className="mb-2 h5">
                    Photoacoustic Spectroscopy <strong>(PAS)</strong> e.g.
                    Infineon PAS CO
                    <sub>2</sub>
                  </h4>
                  This method uses a modulated laser beam to excite the CO2
                  molecules and measure the resulting sound waves. This method
                  is very small, accurate, and low-power, and can be used for
                  smart home and building applications45 Infineon&apos;s
                  XENSIV™ PAS CO2 sensor is the first real CO2 sensor in an SMD
                  package, and it can measure CO2 concentrations from 0 to
                  10,000 ppm5 It also meets the criteria of the WELL Building
                  Standard, which is a global rating system for healthy
                  buildings .
                </div>
                  </>}
                  {state === 'de' && <>
                  <div style={{ padding: '20px' }} className='col-lg-8'>
                  <h4 className="mb-2 h5">
                    Photoakustische Spektroskopie  e.g.
                    Infineon PAS CO
                    <sub>2</sub>
                  </h4>
                  Bei dieser Methode wird ein modulierter Laserstrahl verwendet, um die CO2
                -Moleküle anzuregen und die daraus resultierenden Schallwellen zu messen. Diese Methode
                ist sehr klein, genau und stromsparend und kann für
                Smart-Home- und Gebäudeanwendungen eingesetzt werden45 Der CO2-Sensor
                XENSIV™ PAS von Infineon ist der erste echte CO2-Sensor in einem SMD-Gehäuse
                und kann CO2-Konzentrationen von 0 bis
                10.000 ppm5 messen. Er erfüllt auch die Kriterien des WELL Building
                Standards, einem globalen Bewertungssystem für gesunde
                Gebäude.
                </div>
                  </>}
                
              </div> </div>
            </div>
            <div className="mb-4 ">
              <div
                className="e-card "
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 90%)',
                  maxHeight: '1200px',
                  paddingTop: '20px',
                }}
              >
                <div className="row">
                  <div className="col-lg-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/img/content/co2/Metal Oxide (MOX) e.g. Carenuity SQ-Panel.png"
                      className=" wow fadeInUp"
                      data-wow-delay="100ms"
                      alt="..."
                      style={{
                        visibility: 'visible',
                        animationDelay: '100ms',
                        boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 90%)',
                        animationName: 'fadeIn',
                      }}
                    />
                  </div>
                   {state === 'en' && <>
                   <div className="col-lg-8" style={{}}>
                    <h4 className="mb-2 h5">
                      Metal Oxide <strong>(MOX)</strong> e.g. Carenuity SQ-Panel
                    </h4>
                    This method uses a metal oxide layer that changes its
                    electrical resistance when it interacts with gas molecules.
                    This method is based on the detection of volatile organic
                    compounds (VOCs) that are correlated with CO<sub>2</sub>{' '}
                    levels. This method is compact, digital, and multi-gas, and
                    can provide outputs such as equivalent CO<sub>2</sub> 
                    (eCO<sub>2</sub>), total VOCs (TVOC), and air quality index
                    (AQI)78 ScioSense&apos;s ENS160 is a digital metal oxide
                    multi-gas sensor that uses four sensor elements and an
                    independent hotplate control to detect a wide range of VOCs
                    and oxidizing gases with superior sensitivity It is ideal
                    for home appliances, IoT devices, building automation, and
                    HVAC applications .
                  </div>
                  </>}
                  {state === 'de' && <>
                  <div className="col-lg-8" style={{}}>
                    <h4 className="mb-2 h5">
                      Metal Oxide <strong>(MOX)</strong> e.g. Carenuity SQ-Panel
                    </h4>
                    Bei dieser Methode wird eine Metalloxidschicht verwendet, die ihren
                    elektrischen Widerstand ändert, wenn sie mit Gasmolekülen in Kontakt kommt.
                    Die Methode basiert auf dem Nachweis flüchtiger organischer
                    Verbindungen (VOC), die mit CO<sub>2</sub>{' '} korreliert sind
                    . Diese Methode ist kompakt, digital und mehrgasfähig und
                    kann Ergebnisse wie äquivalentes CO<sub>2</sub>
                    (eCO<sub>2</sub>), gesamte VOCs (TVOC) und den Luftqualitätsindex
                    (AQI)78 Der ENS160 von ScioSense ist ein digitaler Metalloxid
                    Mehrgassensor, der vier Sensorelemente und eine
                    unabhängige Heizplattensteuerung verwendet, um eine breite Palette von VOCs
                    und oxidierenden Gasen mit hervorragender Empfindlichkeit zu erkennen. Er ist ideal
                    für Haushaltsgeräte, IoT-Geräte, Gebäudeautomatisierung und
                    HLK-Anwendungen.
                  </div>
                  </>}
                  
                </div>
              </div>
            </div>
                     {state === 'en' && <>
                     <div className="pe-lg-1-9 mb-3">
              <h3 className="mb-2 h5">Conclusion</h3>
              These are the main methods to measure the CO<sub>2</sub> level in
              the air. Each method has its own advantages and disadvantages, and
              the choice of the best method depends on the application and the
              requirements.
            </div>
                  </>}
                  {state === 'de' && <>
                  <div className="pe-lg-1-9 mb-3">
              <h3 className="mb-2 h5">Abschluss</h3>
            Dies sind die wichtigsten Methoden zur Messung des CO<sub>2</sub>-Gehalts in
            der Luft. Jede Methode hat ihre eigenen Vor- und Nachteile, und
            die Wahl der besten Methode hängt von der Anwendung und den
            Anforderungen ab.
            </div>
                  </>}
            

                     {state === 'en' && <>
                      <p style={{ textAlign: 'center' }}>
              <Link
                href={'/sq-panel'}
                className={'btn btn-lg btn-success rounded-pill'}
              >
                <span className="small">Learn more</span>
              </Link>
            </p>
                  </>}
                  {state === 'de' && <>
                   <p style={{ textAlign: 'center' }}>
              <Link
                href={'/sq-panel'}
                className={'btn btn-lg btn-success rounded-pill'}
              >
                <span className="small">Mehr erfahren</span>
              </Link>
            </p>
                  </>}
                  
              <div>
                <p
                  className="wow fadeIn"
                  data-wow-delay="300ms"
                  style={{
                    visibility: 'visible',
                    animationDelay: '300ms',
                    animationName: 'fadeIn',
                  }}
                >
                   {state === 'en' && <>
                   Carenuity specializes in sensor devices, offering a portfolio
                  of 24 sensor products that come with enclosures and can be
                  customized on various levels to meet your specific needs.
                  </>}
                  {state === 'de' && <>
                  Carenuity hat sich auf Sensorgeräte spezialisiert und bietet unter
                  ein Portfolio von 24 Sensorprodukten an, die mit Gehäusen geliefert werden und unter
                  auf verschiedenen Ebenen an Ihre spezifischen Anforderungen angepasst werden können.
                  </>}
                  
                </p>

                <p>
                   {state === 'en' && <>
                   These Applications are available by One-Click on the
                  Install-for-Free Buttons
                  </>}
                  {state === 'de' && <>
                  Diese Anwendungen sind mit einem Klick auf die
                  Install-for-Free-Buttons verfügbar
                  </>}
                  
                </p>

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

                <p>
                   {state === 'en' && <>
                   Get new Applications by combining the Sensor, Microcontroller
                  and Actuator (S-M-A)
                  </>}
                  {state === 'de' && <>
                   Neue Anwendungen durch Kombination von Sensor, Mikrocontroller
                und Aktor 
                  </>}
                 
                </p>

                <div className="row">
                  <div className="col-sm-4">
                    <Link
                      href={'/sensors'}
                      className={'btn btn-success rounded-pill'}
                    >
                      <span className="small">
                         {state === 'en' && <>
                         Select Sensor
                  </>}
                  {state === 'de' && <>
                  Sensor auswählen

                  </>}</span>
                    </Link>
                  </div>
                  <div className="col-sm-4">
                    <Link
                      href={'/microcontrollers'}
                      className={'btn btn-success rounded-pill'}
                    >
                      <span className="small">
                         {state === 'en' && <>
                         Select Microcontroller
                  </>}
                  {state === 'de' && <>
                  Mikrocontroller auswählen
                  </>}</span>
                    </Link>
                  </div>
                  <div className="col-sm-4">
                    <Link
                      href={'/actuators'}
                      className={'btn btn-success rounded-pill'}
                    >
                      <span className="small">
                         {state === 'en' && <>
                         Select Actuator
                  </>}
                  {state === 'de' && <>
                  Aktuator auswählen
                  </>}</span>
                    </Link>
                  </div>
                </div>

                {/* {!isMobile && (
                  <Link
                    href={'/sensors'}
                    className="btn-style2 primary wow fadeInUp p-3"
                    data-wow-delay="400ms"
                    style={{
                      visibility: 'visible',
                      animationDelay: '400ms',
                      animationName: 'fadeInUp',
                      height: '3.5rem',
                    }}
                  >
                    <span className="small">Select Sensor </span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'/microcontrollers'}
                    className="btn-style2 primary wow fadeInUp p-3"
                    data-wow-delay="400ms"
                    style={{
                      visibility: 'visible',
                      animationDelay: '400ms',
                      animationName: 'fadeInUp',
                      height: '3.5rem',
                    }}
                  >
                    <span className="small">Select Microcontroller </span>
                  </a>
                )} */}
              </div>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default Sensors;
