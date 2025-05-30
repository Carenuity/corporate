import React from 'react';
import Head from 'next/head';
import PageTitle from '../../../components/PageTitle';
import Carousel from './carousel';
import Link from 'next/link';
import { useContext } from 'react';
import { LanguageSwitchContext } from '../../../components/context/LanguageSwitch';
import Translatable from '../../../components/Translatable';

const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'Autonomous Driving Car';
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
              {state === 'en' && (
                <>
                Ever wondered how to build your own self-driving car?   
                </>
              )}
              {state === 'de' && (
                <>
                Haben Sie sich schonmal gefragt, wie Sie Ihr eigenes selbstfahrendes Auto bauen können?     
                </>
              )}
            </h4>

              <p className="mn-4">
              {state === 'en' && (
                <>
                Picture this: a vehicle that drives itself, navigating the world with the power of <strong>AI and neural 
                networks</strong> —and you can build it from scratch! Introducing <strong>Autonomous Driving Car V3</strong>, an intermediate-level
                 project by Carenuity that brings the future of autonomous tech to your fingertips.  
                </>
              )}
              {state === 'de' && (
                <>
                 Stellen Sie sich vor: ein Fahrzeug, das sich selbst fährt und mit Hilfe von <strong>KI und neuronalen</strong> Netzen durch 
                 die Welt navigiert - und Sie können es von Grund auf selbst bauen! Wir stellen Ihnen das <strong>Autonomous Driving 
                 Car V3 vor,</strong> ein Projekt für Fortgeschrittene von Carenuity, das Ihnen die Zukunft der autonomen Technologie näher bringt.  
                </>
              )}
            </p>

              <p className="mn-4">
              {state === 'en' && (
                <>
                Using a <strong>Raspberry Pi 4, custom 3D-printed parts,</strong> and <strong>vision-based navigation</strong>, this project is perfect for AI enthusiasts, 
                hardware hackers, or anyone curious about the tech shaping tomorrow&apos;s roads. Plus, the C/C++ code is open-source and 
                ready for you to download, tweak, and experiment with!   
                </>
              )}
              {state === 'de' && (
                <>
                 Mit einem <strong>Raspberry Pi 4, 3D-gedruckten Teilen</strong> und<strong>visionsbasierte Navigation</strong>  ist dieses Projekt perfekt für 
                 KI-Enthusiasten, Hardware-Hacker und alle, die neugierig auf die Technologie sind, die die Straßen von morgen prägt. 
                 Außerdem steht der C/C++-Code als Open-Source-Code zum Herunterladen, Verbessern und Experimentieren bereit!   
                </>
              )}
            </p>

              <h4 className="mn-4">
              {state === 'en' && (
                <>
                Why dive in?  
                </>
              )}
              {state === 'de' && (
                <>
                Warum damit starten und eintauchen?  
                </>
              )}
            </h4>
            <ul className="mn-4">
              {state === 'en' && (
                <>
                 <li>Discover how AI powers autonomy.  </li>
                 <li>Get hands-on with 3D-printed designs you can customize. </li>
                 <li>Join a community of innovators building the future.</li>
                </>
              )}
              {state === 'de' && (
                <>
                 <li>Entdecken Sie, wie KI autonomes Fahren ermöglicht. </li>
                 <li>Machen Sie praktische Erfahrungen mit 3D-gedruckten Designs, die Sie selbst anpassen können.  </li>
                 <li>Schließen Sie sich einer Community von Innovatoren an, die die Zukunft gestalten.</li>
                </>
              )}
            </ul>
            <p className="mn-4">
              {state === 'en' && (
                <>
                 Ready to take your skills for a spin? Click below to explore the full project and start creating your own autonomous vehicle today!
                </>
              )}
              {state === 'de' && (
                <>
                 Sind Sie bereit, Ihre Fähigkeiten auf die Probe zu stellen? Klicken Sie unten, um das gesamte Projekt zu 
                 erkunden und Ihr eigenes autonomes Fahrzeug noch heute zu entwerfen!
                </>
              )}
            </p>

          <h4 className="mn-4">
              {state === 'en' && (
                <>
                 The story behind the blueprint for your first own car
                </>
              )}
              {state === 'de' && (
                <>
                  Die Geschichte hinter dem Bauplan für Ihr erstes eigenes Auto
                </>
              )}
            </h4>
          <h5 className="mn-4">
            {state === 'en' && <>
            Now Autonomously Driving: The Reincarnation of a Winner
            </>}
            {state === 'de' && <>
            Jetzt autonom fahrend: Die Reinkarnation eines Gewinners
            </>}
          </h5>
          
          <div
            className="e-card mb-6"
            style={{
              boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
              maxHeight: '1O00px',
              padding: '20px',
            }}
          >
            <div className="row">
              <div className="col-md-4 mb-4">
                <Carousel />
              </div>
              <div className="col-md-8 mb-4">
                <p className="mn-4">
                  {state === 'en' && <>
                 In the world of automotive innovation, history often serves as
                  a foundation for future advancements. The Autonomous Driving
                  Infineon Car, built by ChipGlobe&apos;s Carenuity team, is a
                  testament to this principle. This cutting-edge vehicle not
                  only embodies the latest in autonomous driving technology but
                  also pays homage to the legendary Schaeffler FAG Model MF3,
                  presented in June 2009. The shark-like design of the MF3, a
                  symbol of speed and precision, has been reincarnated in 2025
                  in a 1:10 ratio model, showcasing the seamless blend of past
                  and present engineering marvels.
                  </>}
                  {state === 'de' && <>
                 In der Welt der Automobilinnovation dient die Geschichte oft als
                  Grundlage für zukünftige Fortschritte. Das autonome Fahren
                  Infineon Auto, gebaut von ChipGlobe&apos;s Carenuity Team, ist ein
                  Beweis für dieses Prinzip. Dieses hochmoderne Fahrzeug
                  Technologie des autonomen Fahrens, sondern auch eine
                  sondern ist auch eine Hommage an das legendäre Schaeffler FAG-Modell MF3,
                  das im Juni 2009 vorgestellt wurde. Das haifischartige Design des MF3, ein
                  Symbol für Geschwindigkeit und Präzision, wurde 2025 in einem
                  im Verhältnis 1:10 wiederbelebt und zeigt die nahtlose Verschmelzung von vergangenen
                  Vergangenheit und Gegenwart.
                  </>}
                </p>
                 <p className="mn-4">
                  {state === 'en' && <>
                 The unveiling of the Schaeffler FAG Model MF3 took place at an
                  evening event at the foyer of Schaeffler. This event was
                  graced by notable figures such as Dr. Grunau, the former
                  representative of the management board of FAG Schaeffler Group
                  Industry, and Dipl.-Ing. Seubert, the former chairman of the
                  Unterfranken district association of the Verein Deutscher
                  Ingenieure (VDI). Their presence underscored the importance of
                  innovation and collaboration in the engineering community.
                  After several wins, the MF3 was finally parked on the first
                  floor of the THWS University in Schweinfurt, where it
                  continues to inspire students and engineers alike.
                  </>}
                  {state === 'de' && <>
                  Die Enthüllung des Schaeffler FAG Modells MF3 fand im Rahmen einer
                  Abendveranstaltung im Foyer von Schaeffler statt. Diese Veranstaltung wurde
                  Dr. Grunau, ein ehemaliger Vertreter der Geschäftsführung der
                  Vertreter der Geschäftsführung der FAG Schaeffler Gruppe
                  Industrie, und Dipl.-Ing. Seubert, der ehemalige Vorsitzende des
                  Bezirksvereins Unterfranken des Vereins Deutscher
                  Ingenieure (VDI). Mit ihrer Anwesenheit unterstrichen sie die Bedeutung von
                  Innovation und Zusammenarbeit in der Ingenieurgemeinschaft.
                  Nach mehreren Siegen wurde der MF3 schließlich in der ersten
                  Stock der THWS Hochschule in Schweinfurt geparkt, wo er
                  wo er weiterhin Studenten und Ingenieure gleichermaßen inspiriert.
                  </>}
                </p>
                
              </div>
            </div>
          </div>

          <div>
             <p className="mb-4">
                  {state === 'en' && <>
                 Fast forward to today, the Autonomous Driving Infineon Car
              represents a leap forward in automotive technology. Built by
              Carenuity in 2025, this model leverages advanced AI competencies
              to navigate home and office environments autonomously.
              Carenuity&apos;s expertise in AI and sensor technology ensures
              that the vehicle can make real-time decisions with precision and
              reliability, enhancing safety and efficiency on its patrols.
                  </>}
                  {state === 'de' && <>
                 Schnell zurück ins hier und jetzt: Das autonom fahrende Infineon Car
              stellt einen großen Fortschritt in der Automotive Technologie dar. Gebaut von
              Carenuity im Jahr 2025 gebaut, nutzt dieses Modell fortschrittliche KI-Algorithmen,
              um selbstständig durch Haus und Hof oder durchs Büro zu navigieren.
              Das Know-how von Carenuity in den Bereichen KI und Sensortechnik sorgt dafür, dass es
              Echtzeit-Entscheidungen mit Präzision und Zuverlässigkeit treffen kann,
              was die Sicherheit und Effizienz während seiner Patrouillen erhöht.
                  </>}
                </p>
                <p className="mb-4">
                  {state === 'en' && <>
                  The concept of autonomous driving extends beyond mere
              transportation; it transforms the vehicle into a versatile
              platform for advanced sensors. These sensors can be utilized to
              enhance the safety of smart homes and offices, potentially serving
              as patrol units that monitor and secure large environments. By
              integrating such advanced sensor technology, the Autonomous
              Driving Infineon Car can contribute to creating safer living and
              working spaces.
                  </>}
                  {state === 'de' && <>
                  Das Konzept des autonomen Fahrens geht über die reine
              Transport; es verwandelt das Fahrzeug in eine vielseitige
              Plattform für fortschrittliche Sensoren. Diese Sensoren können genutzt werden, um
              die Sicherheit von intelligenten Häusern und Büros zu erhöhen und möglicherweise
              als Patrouilleneinheiten, die große Umgebungen überwachen und sichern. Durch
              fortschrittliche Sensortechnologie kann das autonom
              fahrende Infineon Car dazu beitragen, dass Wohn- und Arbeitsräume sicherer
              werden.
                  </>}
                </p>
                <p className="mb-4">
                  {state === 'en' && <>
                 Moreover, Carenuity and Infineon are committed to transferring
              their building knowledge to selected international universities.
              This initiative aims to empower the next generation of engineers
              and researchers by providing them with access to cutting-edge
              technology and expertise. By fostering collaboration with academic
              institutions, Carenuity and Infineon are paving the way for
              continued innovation and excellence in autonomous driving and AI.
                  </>}
                  {state === 'de' && <>
               Darüber hinaus engagieren sich Carenuity und Infineon für den Wissens-Transfer von
              im Bauen des Autos an ausgewählte internationale Universitäten weiterzugeben.
              Diese Initiative zielt darauf ab, die nächste Generation von Ingenieuren
              und Forschern zu fördern, indem sie ihnen Zugang zu modernster
              Technologie und Fachwissen ermöglicht. Durch die Förderung der Zusammenarbeit mit akademischen
              Einrichtungen ebnen Carenuity und Infineon den Weg für
              für weitere Innovationen und Spitzenleistungen in den Bereichen autonomes Fahren und KI.  
                  </>}
                </p>
                <p className="mb-4">
                  {state === 'en' && <>
                 Notably, this latest autonomous driving car (V3) was built by Eren
              Arslan Ramazan, a talented student from THWS University, who
              previously won a competition for building smart real estate
              sensors in the course of the Carenuity Home Challenge. The
              Carenuity Home Challenge is an annual competition at the THWS,
              hosted by Prof. Heinz Endres, that encourages students to develop
              innovative smart home solutions. Participants are tasked with
              designing and building sensors that can improve the safety,
              efficiency, or convenience of home, office, and industrial
              environments. Eren&apos;s winning project involved creating a
              sophisticated barometer with a Bosch BMP180 / BME680 sensor, that
              could be integrated into various smart home applications,
              showcasing his ingenuity and technical skills.
                  </>}
                  {state === 'de' && <>
                 Dieses neueste autonom fahrende Auto (V3) wurde von Eren
              Arslan Ramazan, einem talentierten Studenten der THWS-Universität, der
              einen Wettbewerb für den Bau intelligenter Immobiliensensoren
              Sensoren im Rahmen der Carenuity Home Challenge gewonnen hat. Die
              Carenuity Home Challenge ist ein jährlicher Wettbewerb an der THWS,
              unter der Leitung von Prof. Heinz Endres, der Studenten dazu anregt, innovative
              innovative Smart-Home-Lösungen zu entwickeln. Die Teilnehmer haben die Aufgabe
              Sensoren zu entwerfen und zu bauen, die die Sicherheit,
              die Sicherheit, die Effizienz oder den Komfort von Haus, Büro und Industrie
              Umgebungen verbessern. Eren&apos;s Siegerprojekt umfasste die Entwicklung eines
              hochentwickeltes Barometer mit einem Bosch BMP180 / BME680 Sensor, das
              in verschiedene Smart-Home-Anwendungen integriert werden kann,
              Dabei stellte er seinen Einfallsreichtum und seine technischen Fähigkeiten unter Beweis.
                  </>}
                </p>
                <p className="mb-4">
                  {state === 'en' && <>
                The very first presentation of the Autonomous Driving Infineon Car
              (V1) was given by Harald Lehmann at a Pizza & Beer event in the
              canteen of Infineon headquarters in Neubiberg, Germany. The event
              was a showcase of technological prowess, where the car&apos;s
              capabilities were demonstrated in a controlled environment.
              Attendees were able to witness firsthand the vehicle&apos;s
              autonomous navigation and real-time decision-making processes.
              This presentation highlighted the collaborative efforts of
              Infineon in pushing the boundaries of what&apos;s possible in
              autonomous driving technology. 
                  </>}
                  {state === 'de' && <>
                 Die allererste Präsentation des Autonomous Driving Infineon Car
              (V1) wurde von Harald Lehmann bei einer Pizza & Bier Veranstaltung in der
              Kantine des Infineon-Hauptsitzes in Neubiberg, Deutschland. Die Veranstaltung
              Veranstaltung war ein Schaufenster des technologischen Könnens, bei dem die Fähigkeiten des
              Fähigkeiten in einer kontrollierten Umgebung demonstriert wurden.
              Die Teilnehmer konnten sich aus erster Hand von der autonomen
              autonomen Navigation und den Entscheidungsfindungsprozessen in Echtzeit überzeugen.
              Diese Präsentation unterstrich die gemeinsamen Bemühungen von
              Infineon, die die Grenzen des Möglichen in der Technologie des
              Technologie des autonomen Fahrens.
                  </>}
                </p>
                <p className="mb-4">
                  {state === 'en' && <>
                  Later, an improved version (V2) of the Autonomous Driving Infineon
              Car was upgraded by Daniel Gernert, further demonstrating the
              advancements and refinements made in the vehicle&apos;s autonomous
              capabilities.
                  </>}
                  {state === 'de' && <>
               Später wurde eine verbesserte Version (V2) des Autonomous Driving Infineon
              Auto von Daniel Gernert aufgerüstet, was die
              Fortschritte und Verfeinerungen des Fahrzeugs und seiner autonomen
              Fähigkeiten.   
                  </>}
                </p>
                <p className="mb-4">
                  {state === 'en' && <>
                 In conclusion, the Autonomous Driving Infineon Car is more than
              just a vehicle; it&apos;s a symbol of innovation and a tribute to
              the engineering excellence of the past with the AI powers of the
              future. As we drive forward into the future, the legacy of the
              Schaeffler FAG Model MF3 lives on, inspiring new generations of
              engineers to push the boundaries of what&apos;s possible
                  </>}
                  {state === 'de' && <>
                 Zusammenfassend lässt sich sagen, dass das autonom fahrende Infineon Car mehr ist als
              mehr als nur ein Fahrzeug; es ist ein Symbol für Innovation und ein Tribut an die
              der technischen Exzellenz der Vergangenheit mit den KI-Fähigkeiten der
              Zukunft. Auf unserem Weg in die Zukunft werden wir das Erbe des
              Schaeffler FAG Modell MF3 weiter und inspiriert neue Generationen von
              Generationen von Ingenieuren dazu inspirieren, die Grenzen des Möglichen zu erweitern.
                  </>}
                </p>
           
            
            
           
          </div>

          
                 
                 
                  
          <div>
            <h4>{state === 'en' && <>
                 Build your own Autonomous Driving Car now:
                  </>}
                  {state === 'de' && <>
                 Bauen Sie jetzt Ihr eigenes autonom fahrendes Auto:
                  </>}</h4>
                   {state === 'de' && <>
            <p>
              The following{' '}
              <a href="https://www.hackster.io/">
                <u>hackster.io </u>
              </a>
              Articles explain how to build it:
            </p>
                  </>}
                  {state === 'de' && <>
                 <p>
              Die folgenden{' '}
              <a href="https://www.hackster.io/">
                <u>hackster.io </u>
              </a>
              In den Artikeln wird erklärt, wie man sie baut:
            </p>
                  </>}
            
            <div className="row">

              {state === 'en' && <>
                 <div className="col-md-4 mb-4">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '450px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/autonomous/autonomus1.png"
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
                    <h6 className="text-success">Autonomous Driving Car</h6>

                    <p>
                      This RC car is equipped with a camera, a Raspberry Pi, an
                      XMC1100 Boot Kit and the DC Motor Control Shield with
                      BTN8982TA.
                    </p>
                    <a
                      href="https://www.hackster.io/Infineon_Team/autonomous-driving-car-5b3d03"
                      target="blank"
                    >
                      <u>Learn more</u>
                    </a>
                  </div>
                </div>
              </div>
                  </>}
                  {state === 'de' && <>
                 <div className="col-md-4 mb-4">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '450px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/autonomous/autonomus1.png"
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
                    <h6 className="text-success">Autonom fahrendes Auto</h6>

                    <p>
                      Dieses RC-Auto ist mit einer Kamera, einem Raspberry Pi, einem
                      XMC1100 Boot Kit und dem DC Motor Control Shield mit
                      BTN8982TA.
                    </p>
                    <a
                      href="https://www.hackster.io/Infineon_Team/autonomous-driving-car-5b3d03"
                      target="blank"
                    >
                      <u>Mehr erfahren</u>
                    </a>
                  </div>
                </div>
              </div>
                  </>}
              
              {state === 'en' && <>
                  <div className="col-md-4 mb-4">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '450px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/autonomous/autonomus2.png"
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
                    <h6 className="text-success">Autonomous Driving Car V2</h6>

                    <a
                      href="https://www.hackster.io/Infineon_Team/autonomous-driving-car-v2-8b5545"
                      target="blank"
                    >
                      <u>Learn more</u>
                    </a>
                  </div>
                </div>
              </div>
                  </>}
                  {state === 'de' && <>
                  <div className="col-md-4 mb-4">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '450px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/autonomous/autonomus2.png"
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
                    <h6 className="text-success">Autonomes Fahren Auto V2</h6>

                    <a
                      href="https://www.hackster.io/Infineon_Team/autonomous-driving-car-v2-8b5545"
                      target="blank"
                    >
                      <u>Mehr erfahren</u>
                    </a>
                  </div>
                </div>
              </div>
                  </>}
             
              {state === 'en' && <>
                 <div className="col-md-4 mb-4">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '450px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/autonomous/autonomus3.png"
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
                    <h6 className="text-success">Autonomous Driving Car V3</h6>

                    <a
                      href="https://www.hackster.io/ramazan-eren-arslan/autonomous-driving-car-v3-93deea"
                      target="blank"
                    >
                      <u>Learn more</u>
                    </a>
                  </div>
                </div>
              </div>
                  </>}
                  {state === 'de' && <>
                 <div className="col-md-4 mb-4">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '450px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/autonomous/autonomus3.png"
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
                    <h6 className="text-success">Autonom Fahrendes Fahrzeug V3</h6>

                    <a
                      href="https://www.hackster.io/ramazan-eren-arslan/autonomous-driving-car-v3-93deea"
                      target="blank"
                    >
                      <u>Mehr erfahren</u>
                    </a>
                  </div>
                </div>
              </div>
                  </>}
              
            </div>
          </div>

          

          <div>
            <h4 className="mn-4">
              {state === 'en' && (
                <>
                  Behind the scene - How a student ensured that you do not fail with your project
                </>
              )}
              {state === 'de' && (
                <>
                  Hinter den Kulissen - Wie ein Student dafür sorgte, dass Sie mit Ihrem Projekt nicht scheitern
                </>
              )}
            </h4>
            <h5 className="mn-4">
              {state === 'en' && (
                <>
                  Development and documentation of an autonomous driving car V3
                  by Eren Arslan Ramazan. (Degree program, semester: Computer
                  Science, 6th. Semester)
                </>
              )}
              {state === 'de' && (
                <>
                  Projektthema: Entwicklung und Dokumentation eines Autonomous
                  Driving Cars V3 by Eren Arslan Ramazan. (Studiengang, Semester:
                  Informatik, 6tes Semester)
                </>
              )}
            </h5>

            <h5 className="mn-4">
              {state === 'en' && <>The project and the main goal</>}
              {state === 'de' && <>Das Projekt und das Hauptziel</>}
            </h5>

            <p className="mn-4">
              {state === 'en' && (
                <>
                  My project was about the further development and documentation
                  of the construction of an autonomous vehicle. The aim was to
                  develop an optimized variant (V3) for the vehicle that can
                  navigate autonomously and safely through different
                  environments.
                </>
              )}
              {state === 'de' && (
                <>
                  Mein Projekt drehte sich um die Weiterentwicklung und die
                  Dokumentation des Aufbaus eines autonomen Fahrzeugs. Ziel war
                  es, eine optimierte Variante (V3) für das Fahrzeug zu
                  entwickeln, das sich selbstständig und sicher durch
                  verschiedene Umgebungen navigieren kann.
                </>
              )}
            </p>
            <p className="mn-4">
              {state === 'en' && (
                <>
                  The main goal was to create a hardware base and document it on
                  Hackster.io in such a structured way that it would be as easy
                  as possible for students to replicate it and that it would
                  also be motivating because everything was carefully
                  documented. This hardware basis can then be used to develop
                  and test AI algorithms for student competitions. Teams from
                  Germany and around the world will be able to optimize the
                  vehicle with their own advanced AI algorithms and improve it
                  with easily addable sensors so that they can then compete
                  against each other. Hardware basis: Autonomous Driving Car V3
                  - Hackster.io (documentation)
                </>
              )}
              {state === 'de' && (
                <>
                  Das Hauptziel war es, einen Hardwarebasis zu schaffen und
                  diese auf Hackster.io so strukturiert zu dokumentieren, dass
                  für Studenten ein Nachbau so leicht wie möglich stattfinden
                  kann und dieser auch motivierend wirkt, weil alles sorgfältig
                  dokumentiert wurde. Auf diese Hardwarebasis können dann
                  AI-Algorithmen für studentische Wettbewerbe entwickelt und
                  getestet werden. So sollen Teams aus Deutschland und weltweit
                  mit eigenen weiterentwickelten AI-Algorithmen das Fahrzeug
                  optimieren können und durch einfach hinzufügbare Sensoren
                  verbessern, um damit dann gegeneinander antreten könnten.
                  Hardware-Basis: Autonomous Driving Car V3 - Hackster.io
                  (Dokumentation)
                </>
              )}
            </p>
            <p className="mn-4">
              {state === 'en' && (
                <>
                  A kind of predecessor of my vehicle, the &apos;Schaeffler FAG
                  Model MF3&apos;, has been standing in the first corridor of
                  our building since 2009 and served as 
                  inspiration for a contemporary autonomous driving successor.
                </>
              )}
              {state === 'de' && (
                <>
                  Eine Art Vorgänger meines Fahrzeugs, der ,Schaeffler FAG Model
                  MF3&apos;, steht seit 2009 im ersten Flur unseres Gebäudes und
                  diente uns als Inspiration und Anregung für einen zeitgemäß
                  autonom fahrenden Nachfolger.
                </>
              )}
            </p>

            <h5 className="mn-4">
              {state === 'en' && <>Project describtion and the goal.</>}
              {state === 'de' && <>Projektbeschreibung und das Ziel.</>}
            </h5>
            <p className="mn-4">
              {state === 'en' && (
                <>
                  The project was to further develop an autonomous vehicle. My
                  personal goal was to understand and improve the technology
                  behind autonomous vehicles by optimizing sensors, algorithms
                  and control systems. The vehicle uses advanced AI capabilities
                  to make real-time decisions and navigate safely. Through my
                  work, I was also able to show how to use a simulator and
                  control this vehicle via an app.
                </>
              )}
              {state === 'de' && (
                <>
                  Das Projekt bestand darin, ein autonomes Fahrzeug
                  weiterzuentwickeln. Mein persönliches Ziel war es, die
                  Technologie hinter autonomen Fahrzeugen zu verstehen und zu
                  verbessern, indem ich Sensoren, Algorithmen und
                  Steuerungssysteme optimiere. Das Fahrzeug nutzt
                  fortschrittliche KI-Fähigkeiten, um in Echtzeit Entscheidungen
                  zu treffen und sicher zu navigieren. Durch meine Arbeit konnte
                  ich ergänzend auch zeigen, wie man einen Simulator nutzt und
                  dieses Fahrzeug per App steuert.
                </>
              )}
            </p>
            <h5 className="mb-4">
              {state === 'en' && <>How the idea for this project came up</>}
              {state === 'de' && <>Wie die Idee zu diesem Projekt entstand</>}
            </h5>
            <p className="mb-4">
              {state === 'en' && (
                <>
                  The idea came from my interest in modern technologies and the
                  growing importance of autonomous systems in the automotive
                  industry. The vehicle on display in the THWS building inspired
                  us. The history of the Schaeffler FAG Model MF3 vehicle, which
                  is exhibited in the first corridor of the THWS building, gave
                  us the idea of bringing tradition and innovation into a
                  context. I was also inspired by my participation in the
                  Carenuity Home Challenge, in which I had already successfully
                  developed innovative sensors for smart homes.
                </>
              )}
              {state === 'de' && (
                <>
                  Die Idee entstand aus meinem Interesse an modernen
                  Technologien und der wachsenden Bedeutung autonomer Systeme in
                  der Automobilindustrie. Das im THWS-Gebäude ausgestellte
                  Fahrzeug inspirierte uns. Die Geschichte des Schaeffler FAG
                  Model MF3 Fahrzeugs, welches im ersten Flur des THWS Gebäudes
                  ausgestellt ist, zeigte gab die Anregung, Tradition und
                  Innovation in einen Kontext zu bringen, zu verbinden. Zudem
                  inspirierte mich die Teilnahme am Carenuity Home Challenge,
                  bei der ich bereits erfolgreich innovative Sensoren für Smart
                  Homes entwickelt hatte.
                </>
              )}
            </p>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/content/Autonomous/project.jpeg"
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

            <h5 className="mn-4">
              {state === 'en' && <>How tasks were distributed</>}
              {state === 'de' && <>Wie die Aufgaben verteilt wurden</>}
            </h5>
            <p className="mn-4">
              {state === 'en' && (
                <>
                  Although I worked alone, the support of ChipGlobe/Carenuity
                  and the partner Infineon Technologies AG was very important.
                  Infineon and ChipGlobe provided the hardware. The exchange
                  with ChipGlobe and Infineon was constructive, and I was able
                  to learn a lot from their expertise and bring it into the
                  project.
                </>
              )}
              {state === 'de' && (
                <>
                  Obwohl ich allein gearbeitet habe, war die Unterstützung von
                  ChipGlobe/Carenuity und dem Partner Infineon Technologies AG
                  sehr wichtig. Infineon und ChipGlobe haben die Hardware
                  beigestellt. Der Austausch mit ChipGlobe und Infineon war
                  konstruktiv, und ich konnte viel von ihrer Expertise lernen
                  und ins Projekt einbringen.
                </>
              )}
            </p>
            <h5 className="mn-4">
              {state === 'en' && <>Collaboration</>}
              {state === 'de' && <>Zusammenarbeit</>}
            </h5>
            <p className="mn-4">
              {state === 'en' && (
                <>
                  The collaboration was productive and cooperative. We were able
                  to learn a lot and support each other. Fast communication via
                  a messenger was crucial for our success and brought us closer
                  together, so that I will also receive support from ChipGlobe /
                  Carenuity in another new project.
                </>
              )}
              {state === 'de' && (
                <>
                  Die Zusammenarbeit war produktiv und kooperativ. Wir konnten
                  viel lernen und uns unterstützen. Schnelle Kommunikation über
                  einen Messenger war entscheidend für unseren Erfolg und hat
                  uns näher gebracht, so dass ich auch in einem weiteren neuen
                  Projekt Unterstützung von ChipGlobe / Carenuity erfahre.
                </>
              )}
            </p>
            <h5 className="mn-4">
              {state === 'en' && (
                <>
                  The biggest challenge during the project and how we dealt with
                  these difficulties as a team
                </>
              )}
              {state === 'de' && (
                <>
                  Die größte Herausforderung während des Projekts und wie wir
                  als Team mit diesen Schwierigkeiten umgegangen sind
                </>
              )}
            </h5>
            <p className="mn-4">
              {state === 'en' && (
                <>
                  The biggest challenge was integrating the various hardware and
                  software & AI systems and ensuring that the vehicle worked
                  reliably and safely. Real-time decision making and precise
                  navigation were particularly challenging. The biggest
                  challenge for me was making sure everything worked together,
                  as some of the projects and libraries used in this car were
                  outdated and debugging took time and patience. We used a
                  messenger to communicate via picture and text to discuss
                  problems and find solutions. The support from the university
                  and my professor Dr. Heinz Endres was very helpful.
                </>
              )}
              {state === 'de' && (
                <>
                  Die größte Herausforderung war die Integration der
                  verschiedenen Hardware und Software & AI Systeme und
                  sicherzustellen, dass das Fahrzeug zuverlässig und sicher
                  funktioniert. Die Echtzeit-Entscheidungsfindung und die
                  präzise Navigation waren besonders anspruchsvoll. Die größte
                  Herausforderung für mich war, dass alles zusammen
                  funktionierte, da einige der Projekte und Bibliotheken, die in
                  diesem Auto verwendet wurden, veraltet waren und das Debugging
                  Zeit und Geduld erforderte. Wir haben uns über einen Messenger
                  per Bild und Text ausgetauscht, um Probleme zu besprechen und
                  Lösungen zu finden. Die Unterstützung durch die Hochschule und
                  meinem Professor Dr. Heinz Endres war dabei sehr hilfreich.
                </>
              )}
            </p>
            <h5 className="mn-4">
              {state === 'en' && (
                <>
                  Collaboration with the university, professors and external
                  partners
                </>
              )}
              {state === 'de' && (
                <>
                  Zusammenarbeit mit der Universität, Professoren und externen
                  Partnern
                </>
              )}
            </h5>
            <p className="mn-4">
              {state === 'en' && (
                <>
                  The support from the university and ChipGlobe GmbH/Carenuity
                  was very good. Prof. Heinz Endres gave us valuable tips, which
                  motivated us to start our project. The other partner, Infineon
                  Technologies AG, also provided support and access to suitable
                  hardware and technology. A special moment was when our vehicle
                  successfully completed a test track autonomously for the first
                  time. That was a wonderful moment and the successful
                  completion of my work on the project. The final presentation
                  and handover of the vehicle at ChipGlobe in Neubiberg was also
                  a highlight.
                </>
              )}
              {state === 'de' && (
                <>
                  Die Unterstützung durch die Hochschule und ChipGlobe
                  GmbH/Carenuity war sehr gut. Prof. Heinz Endres gab wertvolle
                  Tipps, was uns motivierte, unser Projekt zu starten. Der
                  weitere Partner Infineon Technologies AG hat ebenfalls
                  unterstützt und Zugang zu geeigneter Hardware und Technologie
                  ermöglicht. Ein besonderer Moment war, als unser Fahrzeug zum
                  ersten Mal erfolgreich eine Teststrecke autonom absolvierte.
                  Das war ein schöner Moment und der erfolgreiche Abschluss
                  meiner Arbeiten im Projekt. Auch die abschließende
                  Präsentation und Übergabe des Fahrzeugs bei ChipGlobe in
                  Neubiberg war ein Highlight.
                </>
              )}
            </p>

            <h5 className="mn-4">
              {state === 'en' && (
                <>
                  The result of the project that makes me and my team
                  particularly proud
                </>
              )}
              {state === 'de' && (
                <>
                  Das Ergebnis des Projekts, das mich und mein Team besonders
                  stolz macht
                </>
              )}
            </h5>
            <p className="mn-4">
              {state === 'en' && (
                <>
                  I am particularly proud of the fact that other students around
                  the world can now use my documentation to build their own
                  vehicle quickly and easily so that they can test and improve
                  their own AI algorithms. And this platform is available to
                  talented people worldwide, so they can build their own
                  vehicles, equip them with their algorithms and, if necessary,
                  add further sensors to further optimize the overall system.
                </>
              )}
              {state === 'de' && (
                <>
                  Ich bin besonders stolz darauf, dass nun weitere Studenten
                  weltweit mittels meiner Dokumentation ihr eigenes Fahrzeug
                  einfach und schnell aufbauen können um darauf eigene
                  AI-Algorithmen testen und verbessern können. Und diese
                  Platform steht Talenten weltweit frei, so dass sie also eigene
                  Fahrzeuge aufbauen, mit ihren Algorithmen ausstatten und
                  gegebenenfalls weiteren Sensoren hinzufügen können, um das
                  Gesamtsystem weiter zu optimieren.
                </>
              )}
            </p>

            <p className="mn-4">
              {state === 'en' && (
                <>
                  <strong>Suggestion:</strong>Perhaps we can exhibit the
                  autonomous vehicle next to the &apos;Schaeffler FAG Model
                  MF3&aapos; in the first corridor of the THWS as an inspiration
                  for further successful student projects involving sensors and
                  AI. The documented project provides numerous starting points
                  for new innovative solutions and further developments.
                </>
              )}
              {state === 'de' && (
                <>
                  <strong>Vorschlag:</strong>Vielleicht können wir im ersten
                  Flur der THWS das autonome Fahrzeug neben dem ,Schaeffler FAG
                  Model MF3&apos; ausstellen, als Anregung für weitere
                  erfolgreiche studentische Projekte rund um Sensoren und AI.
                  Das dokumentierte Projekt erlaubt zahlreiche Ansatzpunkte für
                  neue innovative Lösungen und Weiterentwicklungen.
                </>
              )}
            </p>
            <h5 className="mn-4">
              {state === 'en' && (
                <>
                  Campaign or project reception by the target group and valuable
                  feedback recieved
                </>
              )}
              {state === 'de' && (
                <>
                  Kampagnen- oder Projektannahme durch die Zielgruppe und Erhalt
                  wertvollen Feedbacks
                </>
              )}
            </h5>
            <p className="mn-4">
              {state === 'en' && (
                <>
                  The rollout at universities is still pending. Another
                  university has already been identified and approached by
                  ChipGlobe GmbH/Carenuity. The partner Infineon Technologies AG
                  will probably also provide strong support there. Perhaps the
                  THWS can also follow up with further projects.
                </>
              )}
              {state === 'de' && (
                <>
                  Der Rollout an Hochschulen steht noch aus. Eine weitere
                  Hochschule wurde von ChipGlobe GmbH/Carenuity bereits
                  identifiziert und angesprochen. Der Partner Infineon
                  Technologies AG wird voraussichtlich auch dort wieder kräftig
                  unterstützen. Vielleicht kann auch die THWS mit weiteren
                  Projekten anknüpfen.
                </>
              )}
            </p>

            <h5 className="mn-4">
              {state === 'en' && <>Important learnings from the project</>}
              {state === 'de' && <>Wichtige Erkenntnisse aus dem Projekt</>}
            </h5>
            <p className="mn-4">
              {state === 'en' && (
                <>
                  I learned how important teamwork, communication and continuous
                  learning are. Personally, I learned a lot about autonomous
                  systems and project management. As a team, we have learned how
                  important it is to be flexible and to support each other.
                  Personally, I learned how to plan and implement complex
                  systems holistically. Another particularly important learning
                  for me was how to deal with problems effectively.
                </>
              )}
              {state === 'de' && (
                <>
                  Ich habe gelernt, wie wichtig Teamarbeit, Kommunikation und
                  kontinuierliches Lernen sind. Persönlich habe ich viel über
                  autonome Systeme und Projektmanagement gelernt. Als Team haben
                  wir gelernt, wie wichtig es ist, flexibel zu sein und sich
                  gegenseitig zu unterstützen. Persönlich habe ich gelernt,
                  komplexe Systeme ganzheitlich zu planen und umzusetzen. Ein
                  besonders wichtiges Learning für mich war auch, wie man
                  effektiv mit Problemen umgeht.
                </>
              )}
            </p>

            <h5 className="mn-4">
              {state === 'en' && (
                <>New skills develop or improve through the project</>
              )}
              {state === 'de' && (
                <>
                  Durch das Projekt entwickeln oder verbessern sich neue
                  Fähigkeiten
                </>
              )}
            </h5>
            <p className="mn-4">
              {state === 'en' && (
                <>
                  The project enables students worldwide to improve their
                  technical skills in the areas of sensor technology,
                  programming and system integration. It also strengthens their
                  soft skills such as teamwork and problem solving. Working with
                  advanced AI and real-time decision making was particularly
                  valuable to me. It allowed me to significantly improve my
                  skills in embedded systems, C++ programming and documentation.
                </>
              )}
              {state === 'de' && (
                <>
                  Mit dem Projekt können Studenten weltweit ihre technischen
                  Fähigkeiten in den Bereichen Sensorik, Programmierung und
                  Systemintegration verbessern. Auch ihre Soft Skills wie
                  Teamarbeit und Problemlösung werden gestärkt. Die Arbeit mit
                  fortschrittlicher KI und Echtzeit-Entscheidungsfindung war mir
                  besonders wertvoll. So konnte ich meine Fähigkeiten in
                  Embedded Systems, C++-Programmierung und Dokumentation
                  deutlich verbessern.
                </>
              )}
            </p>

            <h5 className="mn-4">
              {state === 'en' && <>Project influence</>}
              {state === 'de' && <>Projekteinfluss</>}
            </h5>
            <p className="mn-4">
              {state === 'en' && (
                <>
                  The project showed me how exciting and diverse the
                  opportunities in my degree program are. It also sparked my
                  interest in a career in autonomous vehicle technology. The
                  experience has given me new perspectives and ideas for my
                  professional future. Definitely. I have gained many new ideas
                  and perspectives that I would like to use in future projects
                  and my professional career. Working on this project has shown
                  me the importance of innovation and continuous learning. Yes,
                  definitely. I can now see more clearly that I want to work in
                  the field of embedded systems and AI. The project has shown me
                  how exciting and diverse these topics are. It also gave me an
                  idea for my development project next semester: I might like to
                  develop an autonomous driving system for use in agriculture to
                  automate simple manual processes there.
                </>
              )}
              {state === 'de' && (
                <>
                  Das Projekt hat mir gezeigt, wie spannend und vielfältig die
                  Möglichkeiten in meinem Studiengang sind. Es hat auch mein
                  Interesse an einer Karriere in der autonomen Fahrzeugtechnik
                  geweckt. Die Erfahrung hat mir neue Perspektiven und Ideen für
                  meine berufliche Zukunft gegeben. Definitiv. Ich habe viele
                  neue Ideen und Perspektiven gewonnen, die ich in zukünftigen
                  Projekten und meiner beruflichen Laufbahn nutzen möchte. Die
                  Arbeit an diesem Projekt hat mir gezeigt, wie wichtig
                  Innovation und kontinuierliches Lernen sind. Ja, auf jeden
                  Fall. Ich sehe jetzt klarer, dass ich im Bereich Embedded
                  Systeme und KI arbeiten möchte. Das Projekt hat mir gezeigt,
                  wie spannend und vielseitig diese Themen sind. Es hat mir
                  außerdem die Idee für mein Entwicklungsprojekt im nächsten
                  Semester gegeben: Ich möchte vielleicht ein autonomes
                  Fahrsystem für den Einsatz im Landbau entwickeln, um dort
                  einfache manuelle Prozesse zu automatisieren.
                </>
              )}
            </p>

            <h5 className="mn-4">
              {state === 'en' && <>Tips for other project groups</>}
              {state === 'de' && <>Tipps für andere Projektgruppen</>}
            </h5>
            <p className="mn-4">
              {state === 'en' && (
                <>
                  Get in touch with companies. ChipGlobe GmbH/Carenuity launched
                  the Carenuity Home Challenge in the THWS lecture hall and drew
                  winners. Communication with people, in my case at ChipGlobe
                  GmbH/Carenuity, who work directly in the respective field is
                  extremely valuable. Their advice and experience often help to
                  solve problems more quickly or to gain new perspectives. Work
                  closely together, communicate and utilize the resources and
                  support available to you. Be flexible and willing to learn
                  from mistakes. Take every opportunity to upskill and develop
                  new skills.
                </>
              )}
              {state === 'de' && (
                <>
                  Nehmt Kontakt zu Unternehmen auf. Die ChipGlobe GmbH/Carenuity
                  hat im Hörsaal der THWS den Carenuity Home Challenge gestartet
                  und Gewinner ausgelost. Die Kommunikation mit den Menschen, in
                  meinem Fall bei ChipGlobe GmbH/Carenuity, die direkt in dem
                  jeweiligen Fachgebiet arbeiten, ist extrem wertvoll. Ihre
                  Ratschläge und Erfahrungen helfen oft dabei, Probleme
                  schneller zu lösen oder neue Perspektiven zu gewinnen.
                  Arbeitet eng zusammen, kommuniziert und nutzt die Ressourcen
                  und Unterstützung, die euch zur Verfügung stehen. Seid
                  flexibel und bereit, aus Fehlern zu lernen. Nutzt jede
                  Gelegenheit, um euch weiterzubilden und neue Fähigkeiten zu
                  entwickeln.
                </>
              )}
            </p>

            <h5 className="mn-4">
              {state === 'en' && <>Conclusion</>}
              {state === 'de' && <>Abschluss</>}
            </h5>
            <p className="mn-4">
              {state === 'en' && (
                <>
                  I got to know Carenuity, the company with which I implemented
                  this project, through the “Home Challenge” competition. This
                  was organized by my digital technology professor Prof. Dr.
                  Heinz Endres together with ChipGlobe/Carenuity to bring us
                  students closer to learning in a playful and practical way. In
                  the end, I was successful in the challenge and stayed in
                  contact with Carenuity. This ultimately gave rise to the
                  further idea of also tackling this “Autonomous Driving Car V3”
                  project together. I think such additional activities as part
                  of the lectures are extremely valuable - they not only offer
                  learning experiences, but also real opportunities for personal
                  and professional development. Article on the Home Challenge:
                  Practical approach to studying: building motion detectors
                  yourself
                </>
              )}
              {state === 'de' && (
                <>
                  Ich habe Carenuity, das Unternehmen, mit dem ich dieses
                  Projekt umgesetzt habe, durch den Wettbewerb „Home Challenge“
                  kennengelernt. Dieser wurde von meinem
                  Digitaltechnik-Professor Prof. Dr. Heinz Endres gemeinsam mit
                  ChipGlobe/Carenuity organisiert, um uns Studierenden das
                  Lernen auf eine spielerische und praxisnahe Weise
                  näherzubringen. Am Ende war ich in der Challenge erfolgreich
                  und blieb mit Carenuity in Kontakt. Daraus entstand
                  letztendlich die weitere Idee, gemeinsam auch dieses Projekt
                  „Autonomous Driving Car V3“ anzugehen. Ich finde, solche
                  zusätzlichen Aktivitäten im Rahmen der Vorlesungen sind extrem
                  wertvoll - sie bieten nicht nur Lernerfahrungen, sondern auch
                  reale Chancen für die persönliche und berufliche
                  Weiterentwicklung. Artikel zur Home Challenge: Praxisnah im
                  Studium: Bewegungsmelder selbst bauen
                </>
              )}
            </p>

            <h5 className="mn-4">
              {state === 'en' && <>Publication</>}
              {state === 'de' && <>Veröffentlichung</>}
            </h5>
            <p className="mn-4">
              {state === 'en' && (
                <>Our project partner has agreed to the publication.</>
              )}
              {state === 'de' && (
                <>Our project partner has agreed to the publication.</>
              )}
            </p>

            <h5 className="mn-4">
              {state === 'en' && <>Further links:</>}
              {state === 'de' && <>Weiterführende Links:</>}
            </h5>
            <p className="mn-4">
              {state === 'en' && (
                <>
                  <a href="https://www.thws.de/service/news-presse/pressearchiv/thema/praxisnah-im-studium-bewegungsmelder-selbst-bauen/">
                    <u>THWS press article on the Home Challenge</u>{' '}
                  </a>
                </>
              )}
              {state === 'de' && (
                <>
                  <a href="https://www.thws.de/service/news-presse/pressearchiv/thema/praxisnah-im-studium-bewegungsmelder-selbst-bauen/">
                    <u>THWS Presse Artikel zur Home Challenge</u>{' '}
                  </a>
                </>
              )}
            </p>
            <p className="mn-4">
              {state === 'en' && (
                <>
                  <a href="https://www.hackster.io/Carenuity/autonomous-driving-car-v3-897d80">
                    <u>
                      Project documentation Autonomous Driving Car V3 Autonomous
                    </u>{' '}
                  </a>
                </>
              )}
              {state === 'de' && (
                <>
                  <a href="https://www.hackster.io/Carenuity/autonomous-driving-car-v3-897d80">
                    <u>
                      Projektdokumentation Autonomous Driving Car V3 Autonomous{' '}
                    </u>{' '}
                  </a>
                </>
              )}
            </p>
          </div>
          <div>
             <h4>
              {state === 'en' && <>
                Build with us - your own car
                  </>}
                  {state === 'de' && <>
                 Bauen Sie mit uns - Ihr eigenes Auto
                  </>}</h4>
            <h4></h4>
            <div className="row">
              {state === 'en' && <>
                <div className="col-md-4 mb-4">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '620px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/Autonomous/shopcar.PNG"
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
                    <h6 className="text-success">Autonomous Driving Car</h6>
                    <p>
                      The Autonomous Driving Car by Infineon provides an
                      innovative solution for self-driving cars. Equipped with a
                      camera, a Raspberry Pi, and the XMC1100 Boot Kit, it
                      allows control via smartphone, tablet, or laptop.
                      Integration into the Donkeycar project offers hands-on
                      experience with artificial intelligence and neural
                      networks.
                    </p>
                    <div className="row">
                      <p className="col-md-5 mb-4">
                        {!isMobile && (
                          <Link
                            href={
                              'https://www.chipglobe.shop/en/p/autonomous-driving-car'
                            }
                            target="_blank"
                            className={'btn btn-sm btn-success rounded-pill'}
                          >
                            <span className="small"> Get your hardware</span>
                          </Link>
                        )}

                        {isMobile && (
                          <a
                            href={
                              'https://www.chipglobe.shop/en/p/autonomous-driving-car'
                            }
                            target="_blank"
                            className={'btn btn-sm btn-success rounded-pill'}
                            rel="noreferrer"
                          >
                            <span className="small">
                              Get your hardware{' '}
                              {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                            </span>
                          </a>
                        )}
                      </p>
                      <p className="col-md-5 mb-4">
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
                  </>}
                  {state === 'de' && <>
                 <div className="col-md-4 mb-4">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    maxHeight: '1020px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/Autonomous/shopcar.PNG"
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
                    <h6 className="text-success">Autonom fahrendes Auto</h6>
                    <p>
                      Das Autonomous Driving Car von Infineon bietet eine
                      innovative Lösung für selbstfahrende Autos. Ausgestattet mit einer
                      Kamera, einem Raspberry Pi und dem XMC1100 Boot Kit ausgestattet, ermöglicht es
                      ermöglicht die Steuerung über Smartphone, Tablet oder Laptop.
                      Die Integration in das Donkeycar-Projekt bietet praktische
                      Erfahrung mit künstlicher Intelligenz und neuronalen
                      Netzwerken.
                    </p>
                    <div className="row">
                      <p className="col-md-6 mb-4">
                        {!isMobile && (
                          <Link
                            href={
                              'https://www.chipglobe.shop/en/p/autonomous-driving-car'
                            }
                            target="_blank"
                            className={'btn btn-sm btn-success rounded-pill'}
                          >
                            <span className="small">  Holen Sie sich Ihre Hardware</span>
                          </Link>
                        )}

                        {isMobile && (
                          <a
                            href={
                              'https://www.chipglobe.shop/en/p/autonomous-driving-car'
                            }
                            target="_blank"
                            className={'btn btn-sm btn-success rounded-pill'}
                            rel="noreferrer"
                          >
                            <span className="small">
                              Holen Sie sich Ihre Hardware{' '}
                              {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                            </span>
                          </a>
                        )}
                      </p>
                      <p className="col-md-5 mb-4">
                        {!isMobile && (
                          <Link
                            href={''}
                            target="_blank"
                            className={'btn btn-sm btn-success rounded-pill'}
                          >
                            <span className="small"> Kostenlos installieren</span>
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
                              Kostenlos installieren{' '}
                              {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                            </span>
                          </a>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
                  </>}
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
