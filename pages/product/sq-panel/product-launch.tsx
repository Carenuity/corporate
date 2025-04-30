import React from 'react';
import Head from 'next/head';
import { useContext } from 'react';
import PageTitle from '../../../components/PageTitle';
import { LanguageSwitchContext } from '../../../components/context/LanguageSwitch';
import Translatable from '../../../components/Translatable';

const Page = () => {
  const pageTitle = 'Product Launch';
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
          <h4 className="mn-4">
            {state === 'en' && <>Product Launch</>}
            {state === 'de' && <>Produkteinführung</>}
          </h4>
          <p>
            {state === 'en' && (
              <>
                We are excited to announce the upcoming launch of three distinct
                product configurations developed to meet a variety of use cases
                and customer needs. These include:
                <strong>Table Stand version,</strong> offering a compact,
                display-friendly format ideal for countertops and kiosks;{' '}
                <strong>Wall-mountable SQ-Panel,</strong> designed for seamless
                integration into vertical surfaces in commercial or residential
                environments; and
                <strong>
                  Complete Package with SQ-Power and SQ-TableStand,
                </strong>{' '}
                a fully equipped solution that includes both power functionality
                and a stand for ready-to-use deployment. Each version is
                thoughtfully packaged and tailored to different installation
                preferences, ensuring flexibility and ease of use across various
                applications.
              </>
            )}
            {state === 'de' && (
              <>
                Wir freuen uns, die bevorstehende Einführung von drei
                verschiedenen Produktkonfigurationen bekannt zu geben.
                Wir haben das SQ-Panel entwickelt, um eine Vielzahl von Anwendungsfällen und
                Kundenbedürfnissen zu erfüllen. Dazu gehören:
                <strong>Aufstellerversion</strong> bietet das kompakte
                Sensordisplay für Arbeitsflächen und Kioske;{' '}
                <strong>Wandmontierbares SQ-Panel</strong> für eine nahtlose
                Wandgestaltung und Integration in vertikale Flächen in Gewerbe- oder
                Wohnumgebungen; Und
                <strong>
                  Komplettpaket mit SQ-Power und SQ-TableStand,
                </strong>{' '}
                eine komplette Lösung die sowohl  
                Stromversorgungsfunktion über die Wand als auch den Tischaufsteller für den
                sofortigen Einsatz an verschiedenen Orten erlaubt. Jede Version ist sorgfältig verpackt
                und auf unterschiedliche Örtlichkeiten zugeschnitten.
                Das  sorgt so für Flexibilität und
                Benutzerfreundlichkeit in verschiedenen Anwendungssituationen.
              </>
            )}
          </p>
          {/* <div
                      className="e-card mb-6"
                      style={{
                        boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                        maxHeight: '1O00px',
                        padding: '20px',
                      }}
                    > */}

          <h4 className="mb-4">
            {state === 'en' && <>1.Table-Stand version with SQ-TableStand</>}
            {state === 'de' && <>1.Table-Stand-Version mit SQ-TableStand</>}
          </h4>
          <div className="row">
            <div className="col-md-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/product-launch/sq-panel.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  width: '430px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
            </div>

            <div className="col-md-8 mb-4">
              <p>
                {state === 'en' && (
                  <>
                    The Table-Stand version with SQ-TableStand offers a complete, ready-to-use 
                    setup designed for easy placement on desks, counters, and other flat surfaces. 
                    It combines the advanced environmental monitoring capabilities of the SQ panel 
                    with a specially designed SQ-TableStand that ensures a stable, ergonomic display. 
                    The stand provides a professional and clean appearance, with integrated cable
                    management and support for SQ Power, allowing for seamless plug-and-play operation. 
                    This version is ideal for spaces like offices, reception areas, conference rooms, 
                    and wellness centers where flexibility, mobility, and clear visibility are 
                    important
                  </>
                )}
                {state === 'de' && (
                  <>
                    Die Table-Stand-Version mit SQ-TableStand bietet eine komplette, sofort einsatzbereite Lösung 
                    Aufbau zur einfachen Platzierung auf Schreibtischen, Theken und anderen ebenen Flächen. 
                    Es kombiniert die erweiterten Umgebungsüberwachungsfunktionen des SQ-Panels 
                    mit einem speziell entwickelten SQ-TableStand, der eine stabile, ergonomische Präsentation gewährleistet. 
                    Der Ständer sorgt mit integriertem Kabel für ein professionelles und sauberes Erscheinungsbild
                    Verwaltung und Support für SQ Power, was einen nahtlosen Plug-and-Play-Betrieb ermöglicht. 
                    Diese Version ist ideal für Räume wie Büros, Empfangsbereiche, Konferenzräume, 
                    und Wellnesszentren, in denen Flexibilität, Mobilität und klare Sicht herrschen 
                    wichtig
                  </>
                )}
              </p>
              <h6>
                {state === 'en' && <>Packaging</>}
                {state === 'de' && <>Verpackung</>}
              </h6>
              <p>
                {state === 'en' && (
                  <>
                    The Table-Stand version with SQ-TableStand will be packed in a standard paperboard
                     box, designed to ensure both protection and ease of handling.  

                  The <strong>paperboard standard box</strong> is a lightweight, sturdy, and 
                  eco-friendly packaging solution that safely houses the SQ panel and its 
                  matching SQ-TableStand. Each component is carefully positioned inside to 
                  minimize movement during transport and reduce the risk of damage. The packaging 
                  offers a clean, organized unboxing experience, making setup fast and straightforward 
                  for the user. Thanks to the use of recyclable paperboard material, the packaging 
                  also supports sustainability goals, reducing environmental impact. 
                  This thoughtful packaging approach ensures that the Table-Stand version arrives 
                  safely and ready for quick deployment.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Die Table-Stand-Version mit SQ-TableStand wird in einem Standardkarton verpackt
                     Box, die sowohl Schutz als auch einfache Handhabung gewährleistet.  

                     Die <strong>Standardbox aus Pappe</strong> ist leicht, robust und 
                  umweltfreundliche Verpackungslösung, die das SQ-Panel und seine Komponenten sicher beherbergt 
                  passender SQ-Tischständer. Jede Komponente ist sorgfältig im Inneren positioniert 
                  Minimieren Sie Bewegungen während des Transports und verringern Sie das Risiko von Schäden. Die Verpackung 
                  bietet ein sauberes, organisiertes Auspackerlebnis und ermöglicht eine schnelle und unkomplizierte Einrichtung 
                  für den Benutzer. Dank der Verwendung von recycelbarem Kartonmaterial ist die Verpackung 
                  Unterstützt auch Nachhaltigkeitsziele und reduziert die Umweltbelastung. 
                  Dieser durchdachte Verpackungsansatz stellt sicher, dass die Table-Stand-Version ankommt 
                  sicher und schnell einsatzbereit.
                  </>
                )}
              </p>
             
            </div>
           
          </div>
          {/* </div> */}
         
          {/* <div
                      className="e-card mb-6"
                      style={{
                        boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                        maxHeight: '1O00px',
                        padding: '20px',
                      }}
                    > */}

          <h4 className="mb-4">
            {state === 'en' && <>2. Wall-mountable SQ-Panel with SQ-Power</>}
            {state === 'de' && <>2. Wandmontierbares SQ-Panel mit SQ-Power</>}
          </h4>
          <div className="row">
            <div className="col-md-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/product-launch/Slide2.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  height: '500px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
            </div>

            <div className="col-md-8 mb-4">
              <p>
                {state === 'en' && (
                  <>
                    The Wall-mountable SQ-Panel with SQ-Power is a fixed installation solution 
                    designed for seamless integration into a wide range of environments such as 
                    offices, healthcare facilities, schools, and smart buildings. It combines the 
                    advanced sensing capabilities of the SQ-Panel—which displays real-time air 
                    quality, temperature, humidity, pressure, carbon dioxide, TVOC levels, and 
                    presence detection—with the convenience of integrated SQ-Power for continuous 
                    operation. The wall-mounted design offers a clean, professional appearance while 
                    ensuring that critical environmental data is always visible and accessible. 
                    This version is ideal for permanent installations where space-saving, reliability, 
                    and a streamlined look are priorities.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Das wandmontierbare SQ-Panel mit SQ-Power ist eine Festinstallationslösung 
                    Entwickelt für die nahtlose Integration in eine Vielzahl von Umgebungen wie z 
                    Büros, Gesundheitseinrichtungen, Schulen und intelligente Gebäude. Es vereint die 
                    Erweiterte Sensorfunktionen des SQ-Panels - das Luft in Echtzeit anzeigt 
                    Qualität, Temperatur, Luftfeuchtigkeit, Druck, Kohlendioxid, TVOC-Werte und 
                    Anwesenheitserkennung - mit dem Komfort des integrierten SQ-Power für kontinuierliche 
                    Betrieb. Das wandmontierte Design sorgt für ein klares, professionelles Erscheinungsbild 
                    Sicherstellen, dass kritische Umweltdaten immer sichtbar und zugänglich sind. 
                    Diese Version ist ideal für dauerhafte Installationen, bei denen Platzersparnis, Zuverlässigkeit, 
                    und eine schlanke Optik stehen im Vordergrund.
                  </>
                )}
              </p>

              <h6>
                {state === 'en' && <>Packaging</>}
                {state === 'de' && <>Verpackung</>}
              </h6>
              <p>
                {state === 'en' && (
                  <>
                    The Wall-mountable SQ-Panel with SQ-Power will be packed in a HEXPAND box,
                    featuring the customer&apos;s own label for personalized
                    branding. The <strong>HEXPAND </strong>box is a premium,
                    purpose-designed packaging solution that offers both
                    durability and a high-end unboxing experience. Engineered
                    for secure transport and efficient storage, it includes
                    custom-fit compartments to protect the SQ panel and its
                    accessories during shipping and handling. Its modular,
                    branded design supports better organization, simplifies
                    inventory processes, and elevates the product&apos;s
                    presentation. Each unit is delivered with the
                    customer&apos;s own label already applied or included,
                    reflecting personalized branding or private labeling
                    requirements. This ensures a professional, ready-for-market
                    appearance that aligns with the customer&apos;s identity.
                    Ideal for OEM partnerships or direct-to-consumer channels,
                    this packaging approach supports brand consistency while
                    maintaining high-quality product protection.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Das an der Wandmontierbares SQ-Panel mit SQ-Power wird in einer
                    HEXPAND-Box verpackt und mit dem eigenen Etikett des Kunden
                    zur individuellen Kennzeichnung versehen. Die{' '}
                    <strong>HEXPAND-Box</strong> ist eine hochwertige, speziell
                    entwickelte Verpackungslösung, die sowohl Haltbarkeit als
                    auch ein erstklassiges Auspackerlebnis bietet. Es wurde für
                    sicheren Transport und effiziente Lagerung entwickelt und
                    verfügt über passgenaue Fächer zum Schutz des SQ-Panels und
                    seines Zubehörs während des Transports und der Handhabung.
                    Sein modulares Markendesign unterstützt eine bessere
                    Organisation, vereinfacht Lagerprozesse und wertet die
                    Produktpräsentation auf. Jede Einheit wird mit dem eigenen
                    Etikett des Kunden geliefert, das bereits angebracht oder
                    enthalten ist und so personalisiertes Branding oder
                    Private-Labeling-Anforderungen widerspiegelt. Dies
                    gewährleistet einen professionellen, marktreifen Auftritt,
                    der zur Identität des Kunden passt. Dieser Verpackungsansatz
                    ist ideal für OEM-Partnerschaften oder
                    Direct-to-Consumer-Kanäle und unterstützt die
                    Markenkonsistenz bei gleichzeitiger Aufrechterhaltung eines
                    hochwertigen Produktschutzes.
                  </>
                )}
              </p>
             
            </div>
            
          </div>
          {/* </div> */}
         
          <div>
            <h4 className="mb-2">
              {state === 'en' && (
                <>3. Complete kit with SQ-Panel, SQ-Power and SQ-TableStand</>
              )}
              {state === 'de' && (
                <>3. Komplettes Set mit SQ-Panel, SQ-Power und SQ-TableStand</>
              )}
            </h4>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/product-launch/Slide1.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
            </div>

            <div className='mb-6'>
              <p>
                {state === 'en' && (
                  <>
                    The Complete Kit with SQ-Panel, SQ-Power, and SQ-TableStand offers a flexible, 
                    future-proof solution for customers who value adaptability. With this kit, users 
                    can first set up the SQ-Panel easily on the included SQ-TableStand, allowing them 
                    to test and monitor environmental conditions—such as air quality, temperature, 
                    humidity, pressure, carbon dioxide, TVOC levels, and presence detection—directly 
                    at their location of interest. If needed later, the same SQ-Panel can be detached 
                    from the stand and wall-mounted for a more permanent installation, offering complete 
                    flexibility without having to purchase a new setup. Additionally, customers have the 
                    option to buy an additional SQ-Panel separately and reuse the original SQ-TableStand,
                     making it a cost-effective and scalable solution as needs grow or spaces evolve.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Das Komplettset mit SQ-Panel, SQ-Power und SQ-TableStand bietet eine flexible, 
                    zukunftssichere Lösung für Kunden, die Wert auf Anpassungsfähigkeit legen. Mit diesem Kit, Benutzer 
                    Sie können das SQ-Panel zunächst ganz einfach auf dem mitgelieferten SQ-TableStand aufstellen und so die 
                    zum Testen und Überwachen von Umgebungsbedingungen wie Luftqualität, Temperatur, 
                    Luftfeuchtigkeit, Druck, Kohlendioxid, TVOC-Werte und Anwesenheitserkennung - direkt 
                    an ihrem interessierenden Ort. Bei späterem Bedarf kann das gleiche SQ-Panel abgenommen werden 
                    vom Ständer und an der Wand montiert für eine dauerhaftere Installation, die ein Komplettangebot bietet 
                    Flexibilität, ohne ein neues Setup kaufen zu müssen. Darüber hinaus haben Kunden die 
                    Option, ein zusätzliches SQ-Panel separat zu kaufen und den ursprünglichen SQ-TableStand wiederzuverwenden,
                     Dies macht es zu einer kostengünstigen und skalierbaren Lösung, wenn der Bedarf wächst oder sich die Räume verändern.
                  </>
                )}
              </p>
              <h6>
                {state === 'en' && <>Packaging</>}
                {state === 'de' && <>Verpackung</>}
              </h6>
              <p>
                {state === 'en' && (
                  <>
                    The Complete Kit with SQ-Panel, SQ-Power, and SQ-TableStand will be packed in a 
                    standard paperboard box, designed to provide secure, efficient, and environmentally 
                    friendly packaging. The paperboard standard box ensures that each component—the 
                    SQ-Panel, SQ-Power, and SQ-TableStand—is safely positioned in dedicated compartments, 
                    reducing movement and protecting the products from damage during shipping. 
                    Lightweight yet sturdy, the box makes handling and unpacking easy while offering 
                    a clean and professional presentation to the customer. The packaging is also 
                    recyclable, supporting sustainable practices. This thoughtful packaging 
                    approach ensures the Complete Kit arrives in perfect condition, ready for quick 
                    testing on the table stand and later optional wall installation.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Das komplette Kit mit SQ-Panel, SQ-Power und SQ-TableStand wird in einem verpackt 
                    Standardkarton, der sicher, effizient und umweltfreundlich ist 
                    freundliche Verpackung. Die Standardbox aus Pappe stellt sicher, dass jede Komponente - die 
                    SQ-Panel, SQ-Power und SQ-TableStand - werden sicher in speziellen Fächern positioniert, 
                    Reduziert die Bewegung und schützt die Produkte vor Beschädigungen während des Transports. 
                    Die leichte und dennoch robuste Box erleichtert die Handhabung und das Auspacken beim Anbieten 
                    eine saubere und professionelle Präsentation beim Kunden. Die Verpackung ist auch 
                    recycelbar und unterstützt nachhaltige Praktiken. Diese durchdachte Verpackung 
                    Dieser Ansatz stellt sicher, dass das komplette Kit in einwandfreiem Zustand ankommt und schnell einsatzbereit ist 
                    Testen am Tischständer und später optionale Wandmontage.
                  </>
                )}
              </p>
              
            </div>
            <hr/>
          </div>
          <h4 className="mn-4">
            {state === 'en' && <>JUNG designer 
              frame</>}
            {state === 'de' && <>JUNG-Designer 
              rahmen</>}
          </h4>
          <div className="row">
            <div className="col-md-2 mb-4">
           
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/product-launch/jung.jpeg"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  width: '150px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
            </div>

          
          <p className="col-md-10 mb-4">
            {state === 'en' && <>Each product will include one piece of the optional JUNG designer 
            frame, a decorative element that offers an elegant way to integrate the SQ-Panel into the 
            interior design of your space. This frame is designed to match the style of popular switches
             and power sockets used in modern homes and offices, allowing the panel to blend seamlessly 
             into existing surroundings. While optional, the JUNG frame enhances the overall aesthetic, 
             making the installation look more intentional and cohesive with the room&apos;s design. It 
             provides customers with the flexibility to maintain a consistent visual theme without 
             compromising on functionality or performance.</>}
            {state === 'de' && <>Unsere Verpackungsvarianten</>}
          </p>
              </div>
          <h4 className="mb-2">
            {state === 'en' && <>Our Packaging Variants</>}
            {state === 'de' && <>Unsere Verpackungsvarianten</>}
          </h4>

          <p className="mn-4">
            {state === 'en' && (
              <>
                Our packaging solutions include different box types designed for
                protection, presentation, and ease of deployment.
              </>
            )}
            {state === 'de' && (
              <>
                Unsere Verpackungslösungen umfassen verschiedene Kartontypen,
                die auf Schutz, Präsentation und einfache Bereitstellung
                ausgelegt sind.
              </>
            )}
          </p>

          <div className="row">
            <div className="col-md-4 mb-4">
              <h6 className="mn-4">
                {state === 'en' && <>1. Papercard standard box</>}
                {state === 'de' && <>1. Standardkarton aus Papier</>}
              </h6>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/product-launch/standard.jpeg"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  // width: '320px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
            </div>
            <div className="col-md-1 mb-4"></div>
            <div className="col-md-7 mb-4">
              <h6 className="mn-4">
                {state === 'en' && <>2. Hexpand</>}
                {state === 'de' && <>2.Hexpand</>}
              </h6>
              <div className="row">
                <div className="col-md-4 mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/product-launch/hexpand.jpeg"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      height: '360px',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />
                </div>
                <div className="col-lg-4 ">
                  <video
                    src="/videos/content/hexpand.mp4"
                    loop={true}
                    autoPlay={true}
                    muted
                    className=" wow fadeInUp w-100"
                    data-wow-delay="100ms"
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                      height: '360px',
                      animationName: 'fadeIn',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
