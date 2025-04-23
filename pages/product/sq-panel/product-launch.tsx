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
      <Head>
      {/* <Translatable /> */}

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
            {state === 'en' && (
              <>
                Product Launch
              </>
            )}
            {state === 'de' && (
              <>
              Produkteinführung
              </>
            )}
          </h4>
          <p>
          {state === 'en' && (
              <>
                We are excited to announce the upcoming launch of three distinct product configurations 
          designed to meet a variety of use cases and customer needs. These include: 
          <strong>Table Tent version,</strong>  offering a compact, display-friendly format ideal for 
          countertops and kiosks; <strong>Wall-mountable SQ panel,</strong> designed for seamless 
          integration into vertical surfaces in commercial or residential environments; and
          <strong>Complete Package with SQ power and table stand,</strong> a fully equipped solution 
           that includes both power functionality and a stand for ready-to-use deployment. 
           Each version is thoughtfully packaged and tailored to different installation 
           preferences, ensuring flexibility and ease of use across various applications.
              </>
            )}
            {state === 'de' && (
              <>
              Wir freuen uns, die bevorstehende Einführung von drei verschiedenen Produktkonfigurationen bekannt zu geben 
          Entwickelt, um eine Vielzahl von Anwendungsfällen und Kundenbedürfnissen zu erfüllen. Dazu gehören: 
          <strong>Tischzeltversion</strong> bietet ein kompaktes, displayfreundliches Format, ideal für 
          Arbeitsplatten und Kioske; <strong>Wandmontierbares SQ-Panel</strong> für eine nahtlose Gestaltung 
          Integration in vertikale Flächen in Gewerbe- oder Wohnumgebungen; Und
          <strong>Komplettpaket mit SQ-Stromversorgung und Tischständer,</strong> eine voll ausgestattete Lösung 
           Das umfasst sowohl Stromversorgungsfunktionen als auch einen Ständer für den gebrauchsfertigen Einsatz. 
           Jede Version ist sorgfältig verpackt und auf unterschiedliche Installationen zugeschnitten 
           Präferenzen und sorgt so für Flexibilität und Benutzerfreundlichkeit in verschiedenen Anwendungen.
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
            {state === 'en' && (
              <>
                1.Table Tent Version 
              </>
            )}
            {state === 'de' && (
              <>
              1.Tischzelt-Version
              </>
            )}
          </h4>
          <div className='row'>
            <div className="col-md-4 mb-4">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img
                    src="/img/content/product-launch/sq-panel.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      // width: '220px',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />
            </div>
            
         
          <div className="col-md-8 mb-4">
          <p>
          {state === 'en' && (
              <>
               The Table Tent version is a sleek, compact display unit designed to sit upright on flat 
               surfaces such as desks, counters, or reception areas—making it ideal for offices, retail 
               environments, hospitality, and wellness spaces. Its angled form factor ensures high 
               visibility and easy interaction, while maintaining a minimal footprint. This version 
               is perfect for displaying real-time environmental data in a clear, accessible way 
               without requiring wall installation or additional mounting hardware. 
              </>
            )}
            {state === 'de' && (
              <>
              Die Table Tent-Version ist eine schlanke, kompakte Präsentationseinheit, die so konzipiert ist, dass sie aufrecht und flach aufgestellt werden kann 
               Oberflächen wie Schreibtische, Theken oder Empfangsbereiche - ideal für Büros und Einzelhandel 
               Umgebungen, Gastfreundschaft und Wellnessbereiche. Sein abgewinkelter Formfaktor sorgt für eine hohe 
               Sichtbarkeit und einfache Interaktion bei minimalem Platzbedarf. Diese Version 
               eignet sich perfekt für die übersichtliche und leicht zugängliche Darstellung von Echtzeit-Umweltdaten 
               ohne dass eine Wandinstallation oder zusätzliche Montageteile erforderlich sind.
              </>
            )}
          </p>

          <h6>
          {state === 'en' && (
              <>
             Packaging
              </>
            )}
            {state === 'de' && (
              <>
              Verpackung
              </>
            )}
          </h6>
          <p>
          {state === 'en' && (
              <>
                The Table Tent version will be packed in a standard box, with labels bundled separately 
                for flexible application.

                  The <strong>Standard box</strong>  is a clean, protective packaging format designed for safe transport 
                  and easy storage. It is not custom-branded, making it ideal for bulk handling, internal 
                  use, or further customization downstream. Inside the box, all components of the Table 
                  Tent version are neatly organized to ensure minimal movement and maximum protection 
                  during shipping.<br/>

                  The <strong>Labels</strong>  are bundled separately—included inside the package but not pre-applied to 
                  the product. This approach allows distributors or end-users to apply the labels as 
                  needed, whether for branding, compliance, or organizational purposes. It offers greater 
                  flexibility, especially for partners who manage multiple product variations or need to 
                  localize labeling after delivery.
              </>
            )}
            {state === 'de' && (
              <>
              Die Table Tent-Version wird in einem Standardkarton verpackt, wobei die Etiketten separat gebündelt sind 
                für flexiblen Einsatz.

                  Der <strong>Standardkarton</strong> ist ein sauberes, schützendes Verpackungsformat, das für den sicheren Transport konzipiert ist 
                  und einfache Lagerung. Es ist nicht mit einer individuellen Marke versehen und daher ideal für den internen Massenumschlag geeignet 
                  Verwendung oder weitere nachgelagerte Anpassungen. In der Box befinden sich alle Komponenten des Tisches 
                  Die Zeltversion ist übersichtlich organisiert, um minimale Bewegung und maximalen Schutz zu gewährleisten 
                  während des Versands.<br/>

                  Die <strong>Etiketten</strong>  sind separat gebündelt - sie sind im Paket enthalten, aber nicht bereits angebracht 
                  das Produkt. Dieser Ansatz ermöglicht es Händlern oder Endverbrauchern, die Etiketten so anzubringen 
                  erforderlich, sei es für Branding, Compliance oder organisatorische Zwecke. Es bietet mehr 
                  Flexibilität, insbesondere für Partner, die mehrere Produktvarianten verwalten oder verwalten müssen 
                  Etikettierung nach Lieferung lokalisieren.
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
            {state === 'en' && (
              <>
                2. Wall-mountable SQ panel  
              </>
            )}
            {state === 'de' && (
              <>
              2. An der Wand montierbares SQ-Panel
              </>
            )}
          </h4>
          <div className='row'>
            <div className="col-md-4 mb-4">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img
                    src="/img/content/product-launch/wall-sq-panel.jpeg"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      // width: '220px',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />
            </div>
            
         
          <div className="col-md-8 mb-4">
          <p>
          {state === 'en' && (
              <>
                The Wall-mountable SQ panel is a streamlined, fixed-installation solution designed for 
                environments where space optimization, visibility, and durability are key. Ideal for 
                offices, healthcare settings, schools, and smart buildings, this version is meant to 
                be securely mounted on walls, offering a clean, integrated look that blends seamlessly 
                with modern interiors. It continuously displays critical indoor environmental 
                data—including air quality, temperature, humidity, pressure, CO₂, TVOC levels, 
                and presence—helping users maintain healthy, comfortable, and compliant spaces.
              </>
            )}
            {state === 'de' && (
              <>
              
              Das an der Wand montierbare SQ-Panel ist eine optimierte Lösung für die feste Installation 
                Umgebungen, in denen Platzoptimierung, Sichtbarkeit und Haltbarkeit von entscheidender Bedeutung sind. Ideal für 
                Diese Version ist für Büros, Gesundheitseinrichtungen, Schulen und intelligente Gebäude gedacht 
                können sicher an Wänden montiert werden und bieten ein klares, integriertes Erscheinungsbild, das sich nahtlos einfügt 
                mit modernem Interieur. Es zeigt kontinuierlich kritische Raumklimabedingungen an 
                Daten - einschließlich Luftqualität, Temperatur, Luftfeuchtigkeit, Druck, CO₂, TVOC-Werte, 
                und Präsenz - und hilft Benutzern, gesunde, komfortable und konforme Räume zu bewahren.
              </>
            )}
          </p>

          <h6>
          {state === 'en' && (
              <>
             Packaging
              </>
            )}
            {state === 'de' && (
              <>
              Verpackung
              </>
            )}
          </h6>
          <p>
          {state === 'en' && (
              <>
               The Wall-mountable SQ panel will be packed in a HEXPAND box, featuring the customer&apos;s 
               own label for personalized branding.

              The <strong>HEXPAND </strong>box is a premium, purpose-designed packaging solution that offers both 
              durability and a high-end unboxing experience. Engineered for secure transport and 
              efficient storage, it includes custom-fit compartments to protect the SQ panel and 
              its accessories during shipping and handling. Its modular, branded design supports 
              better organization, simplifies inventory processes, and elevates the product's presentation.

              Each unit is delivered with the customer's own label already applied or included, 
              reflecting personalized branding or private labeling requirements. This ensures a 
              professional, ready-for-market appearance that aligns with the customer&apos;s 
              identity. Ideal for OEM partnerships or direct-to-consumer channels, this packaging 
              approach supports brand consistency while maintaining high-quality product protection. 
              </>
            )}
            {state === 'de' && (
              <>
              Das an der Wand montierbare SQ-Panel wird in einer HEXPAND-Box verpackt und mit dem
               eigenen Etikett des Kunden zur individuellen Kennzeichnung versehen.

              Die <strong>HEXPAND-Box</strong> ist eine hochwertige, speziell entwickelte Verpackungslösung, 
              die sowohl Haltbarkeit als auch ein erstklassiges Auspackerlebnis bietet. Es 
              wurde für sicheren Transport und effiziente Lagerung entwickelt und verfügt über 
              passgenaue Fächer zum Schutz des SQ-Panels und seines Zubehörs während des Transports 
              und der Handhabung. Sein modulares Markendesign unterstützt eine bessere Organisation, 
              vereinfacht Lagerprozesse und wertet die Produktpräsentation auf.

              Jede Einheit wird mit dem eigenen Etikett des Kunden geliefert, das bereits angebracht 
              oder enthalten ist und so personalisiertes Branding oder Private-Labeling-Anforderungen 
              widerspiegelt. Dies gewährleistet einen professionellen, marktreifen Auftritt, der zur 
              Identität des Kunden passt. Dieser Verpackungsansatz ist ideal für OEM-Partnerschaften 
              oder Direct-to-Consumer-Kanäle und unterstützt die Markenkonsistenz bei gleichzeitiger 
              Aufrechterhaltung eines hochwertigen Produktschutzes.
                            </>
            )}
          </p>
          </div>
          </div>
          {/* </div> */}

          <div>
          <h4 className="mn-4">
            {state === 'en' && (
              <>
                3. Complete package with SQ power and table stand
              </>
            )}
            {state === 'de' && (
              <>
              3. Komplettpaket mit SQ Power und Tischständer
              </>
            )}
          </h4>
            <div>
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img
                    src="/img/content/product-launch/sq-stand.png"
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
            
         
          <div>
          <p>
          {state === 'en' && (
              <>
               The Complete Package with SQ Power and Table Stand is a fully equipped, ready-to-deploy 
               solution designed for users who want everything included in one convenient bundle. 
               This version combines the advanced environmental monitoring capabilities of the SQ 
               panel with integrated SQ power functionality and a stable, ergonomic table stand, 
               making it ideal for high-traffic environments like reception desks, meeting rooms, 
               retail counters, or healthcare check-in stations. It offers plug-and-play simplicity
                with no need for additional accessories or installation tools.
              </>
            )}
            {state === 'de' && (
              <>
              Das Komplettpaket mit SQ Power und Tischständer ist komplett ausgestattet und sofort einsatzbereit 
               Lösung für Benutzer, die alles in einem praktischen Paket enthalten möchten. 
               Diese Version kombiniert die erweiterten Umgebungsüberwachungsfunktionen des SQ 
               Panel mit integrierter SQ-Power-Funktionalität und einem stabilen, ergonomischen Tischständer, 
               Damit eignet es sich ideal für stark frequentierte Umgebungen wie Empfangstheken, Besprechungsräume, 
               Einzelhandelsschalter oder Check-in-Stationen im Gesundheitswesen. Es bietet Plug-and-Play-Einfachheit
                ohne dass zusätzliches Zubehör oder Installationswerkzeuge erforderlich sind.
              </>
            )}
          </p>
          <h6>
          {state === 'en' && (
              <>
             Packaging
              </>
            )}
            {state === 'de' && (
              <>
              Verpackung
              </>
            )}
          </h6>
          <p>
          {state === 'en' && (
              <>
               The Complete Package with SQ Power and Table Stand will be packed in a dedicated 
               stand box, with labels bundled separately for flexible application.

                The <strong>Stand box</strong> is specifically designed to accommodate the SQ panel, 
                power components, and table stand in a secure, organized layout. It provides robust 
                protection during shipping while also offering a clean and professional presentation 
                for end users. Each component has its own compartment within the box, minimizing 
                movement and reducing the risk of damage in transit. This packaging format is ideal 
                for customers who want a ready-to-use, all-in-one solution without the need for 
                additional setup or accessories.<br/>

                Included inside the box are <strong>Separately Bundled Labels</strong>, which are not pre-applied 
                to the device or packaging. This allows for greater flexibility in branding, compliance 
                marking, or localization based on region or customer requirements. By separating the 
                labels, users or distributors can apply them at the most appropriate time—whether 
                during installation, inventory management, or final deployment—ensuring a smooth 
                and customizable rollout process. 
                              </>
            )}
            {state === 'de' && (
              <>
              Das Complete Package mit SQ Power und Tischständer wird in einer speziell entwickelten
              Standbox verpackt, wobei die Etiketten separat gebündelt beigelegt werden, 
               um eine flexible Anwendung zu ermöglichen.

              Die <strong>Standbox</strong> ist speziell dafür konzipiert, das SQ-Panel, die 
              Stromversorgungskomponenten und den Tischständer in einer sicheren und organisierten 
              Anordnung aufzunehmen. Sie bietet einen robusten Schutz während des Transports und zugleich 
              eine saubere und professionelle Präsentation für den Endnutzer. Jedes Element hat sein 
              eigenes Fach innerhalb der Verpackung, was Bewegungen minimiert und das Risiko von 
              Transportschäden reduziert. Dieses Verpackungskonzept ist ideal für Kunden, die eine 
              sofort einsatzbereite All-in-One-Lösung ohne zusätzlichen Installationsaufwand wünschen.

              In der Box befinden sich **separat gebündelte Etiketten**, die nicht vorab am Gerät oder 
              an der Verpackung angebracht sind. Dies ermöglicht eine höhere Flexibilität bei der 
              Markenkennzeichnung, bei regulatorischen Anforderungen oder bei der Lokalisierung je 
              nach Region oder Kundenwunsch. Durch die separate Beigabe können Nutzer oder Distributoren 
              die Etiketten genau dann anbringen, wenn es am sinnvollsten ist - sei es während der 
              Installation, Lagerverwaltung oder beim finalen Rollout - und so einen reibungslosen 
              und anpassbaren Einsatz sicherstellen.
              </>
            )}
          </p>
          </div>
          
          </div>
          
          <h4 className="mn-4">
            {state === 'en' && (
              <>
              Our Packaging Variants
              </>
            )}
            {state === 'de' && (
              <>
           Unsere Verpackungsvarianten
              </>
            )}
          </h4>

          <p className="mn-4">
            {state === 'en' && (
              <>
            Our packaging solutions include different box types designed for protection, 
            presentation, and ease of deployment.
              </>
            )}
            {state === 'de' && (
              <>
          Unsere Verpackungslösungen umfassen verschiedene Kartontypen, die auf Schutz, 
          Präsentation und einfache Bereitstellung ausgelegt sind.
              </>
            )}
          </p>

          <div className='row'>
            <div className="col-md-4 mb-4">
            <h4 className="mn-4">
            {state === 'en' && (
              <>
             1. Standard box
              </>
            )}
            {state === 'de' && (
              <>
           1. Standardbox
              </>
            )}
          </h4>
           {/* eslint-disable-next-line @next/next/no-img-element */}
           <img
                    src="/img/content/product-launch/standard.jpeg"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      width: '320px',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />
            </div>
            <div className="col-md-8 mb-4">
              
            <h4 className="mn-4">
            {state === 'en' && (
              <>
             2. Hexpand
              </>
            )}
            {state === 'de' && (
              <>
           2.Hexpand
              </>
            )}
          </h4>
          <div className='row'>
          <div className="col-md-4 mb-4">
           {/* eslint-disable-next-line @next/next/no-img-element */}
           <img
                    src="/img/content/product-launch/hexpand.jpeg"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      width: '320px',
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
