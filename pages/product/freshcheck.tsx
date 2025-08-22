import React from 'react';
import Head from 'next/head';
import PageTitle from '../../components/PageTitle';
import { LanguageSwitchContext } from '../../components/context/LanguageSwitch';
import Translatable from '../../components/Translatable';
import { useContext } from 'react';
import ServiceHOC from '../../components/hoc/ServiceHOC';
import { servicesUrls } from '../../utils/constants';


const Index = () => {

  const { state } = useContext(LanguageSwitchContext);
  return (
    <>
      <Translatable />
      <Head>
   
        <title>FreshCheck</title>
      </Head>

      
      <section className="pt-4">
        <div className="container ">
          <h4 className="mn-4">
            {state === 'en' && <>Carenuity FreshCheck - Smart Bathroom Air Quality Monitor</>}
            {state === 'de' && <>Carenuity FreshCheck - Intelligenter Luftqualitätsmonitor für Badezimmer</>}
          </h4>
                 {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/content/freshcheck/bathroom.jpeg"
            className=" wow fadeInUp mb-6"
            data-wow-delay="100ms"
            alt="..."
            style={{
              visibility: 'visible',
              animationDelay: '100ms',

              animationName: 'fadeIn',
            }}
          />
            <h4 className="mn-4">
            {state === 'en' && <>The Problem</>}
            {state === 'de' && <>Das Problem</>}
          </h4>   
          <p className="mn-4">
            {state === 'en' && <>Nobody likes leaving a bathroom unsure if the air is still 
            unpleasant for the next person. Traditional solutions rely on guesswork or waiting - not very efficient.</>}
            {state === 'de' && <>Niemand verlässt gerne ein Badezimmer, ohne zu wissen, ob die Luft für die nächste Person 
            noch unangenehm ist. Herkömmliche Lösungen basieren auf Vermutungen oder Warten - nicht sehr effizient.</>}
                
          </p> 
           <h4 className="mn-4">
            {state === 'en' && <>The Solution</>}
            {state === 'de' && <>Die Lösung</>}
          </h4>   
          <p className="mn-4">
            {state === 'en' && <>Carenuity FreshCheck instantly measures the air quality in your bathroom and tells you if 
            the air is fresh or if it still needs ventilation. Powered by our C3-Mini IoT controller and a high-precision 
            VOC sensor, FreshCheck provides a simple “traffic light” signal:
            <ul>
                    <li><strong>Green</strong> Fresh air, all clear.</li>
                     <li><strong>Orange</strong>Slight residual odor.</li>
                      <li><strong>Red</strong>Ventilation recommended.</li>
                </ul>
            </>}
            {state === 'de' && <>
            Carenuity FreshCheck misst sofort die Luftqualität in Ihrem Badezimmer und zeigt Ihnen an, ob die Luft frisch 
            ist oder noch gelüftet werden muss. Angetrieben von unserem C3-Mini-IoT-Controller und einem hochpräzisen VOC-Sensor, liefert FreshCheck ein einfaches „Ampelsignal“:
            <ul>
                    <li><strong>Grün:</strong>Frische Luft, alles in Ordnung.</li>
                     <li><strong>Orange:</strong>Leichter Restgeruch.
</li>
                      <li><strong>Rot:</strong> Lüftung empfohlen.</li>
                </ul>
            </>}
          </p> 
           <h4 className="mn-4">
            {state === 'en' && <>Key Benefits</>}
            {state === 'de' && <>Die wichtigsten Vorteile
</>}
          </h4>   
          <p className="mn-4">
            {state === 'en' && <>
             <ul>
                    <li><strong>Instant feedback:</strong>Know immediately if the bathroom is fresh.</li>
                     <li><strong>Easy setup:</strong>Ready in under 3 minutes using Carenuity&apos;s Solution Builder.
</li>
                      <li><strong>Flexible form: </strong>Available as DIY Kit for tech enthusiasts 
                      or as a ready-to-use device for convenience.</li>
                      <li><strong>Smart Home integration: </strong>Connects via Wi-Fi, MQTT, 
                      or Matter to your existing ecosystem (Home Assistant, Google Home, Alexa, Apple Home).</li>
                      <li><strong>Modular & sustainable:</strong>Based on the 
                      Carenuity C3-Mini and sensor modules - easy to upgrade or repurpose.</li>
                      
                </ul>
            </>}
            {state === 'de' && <>
            <ul>
                    <li><strong>Sofortiges Feedback:</strong></li>
                     <li><strong></strong>Sie wissen sofort, ob die Luft im Badezimmer frisch ist.</li>
                      <li><strong>Einfache Einrichtung: </strong>Mit dem Solution Builder von Carenuity 
                      in weniger als 3 Minuten einsatzbereit.</li>
                      <li><strong>Flexible Form:</strong>Erhältlich als DIY-Kit für Technikbegeisterte oder als 
                      gebrauchsfertiges Gerät für mehr Komfort.</li>
                      <li><strong>Smart-Home-Integration:</strong>Verbindung über WLAN, MQTT oder Matter mit Ihrem
                       bestehenden Ökosystem (Home Assistant, Google Home, Alexa, Apple Home).</li>
                      <li><strong>Modular und nachhaltig:</strong>Basierend auf dem Carenuity C3-Mini und Sensormodulen -
                       einfach zu aktualisieren oder umzufunktionieren.</li>
                </ul>
            </>}
          </p> 
           <h4 className="mn-4">
            {state === 'en' && <>How It Works</>}
            {state === 'de' && <>So funktioniert es</>}
          </h4>   
          <p className="mn-4">
            {state === 'en' && <>
            <ol>
                <li> The device continuously learns the baseline of your room air.</li>
                <li> When air quality drops due to odors, the sensor detects increased VOC levels.</li>
                <li> The display or LED ring shows a clear traffic-light signal.</li>
                <li> Optionally, you receive a push notification in your Smart Home app.</li>
            </ol>   
            </>}
            {state === 'de' && <>
            <ol>
                <li>Das Gerät lernt kontinuierlich die Basiswerte der Raumluft.</li>
                <li>Wenn die Luftqualität aufgrund von Gerüchen sinkt, erkennt der Sensor erhöhte VOC-Werte.</li>
                <li>Das Display oder der LED-Ring zeigt ein klares Ampelsignal an.</li>
                <li>Optional erhalten Sie eine Push-Benachrichtigung in Ihrer Smart Home-App.</li>
            </ol>
            </>}
          </p>    
           <h4 className="mn-4">
            {state === 'en' && <>Who It&apos;s For</>}
            {state === 'de' && <>Für wen ist es geeignet?</>}
          </h4>   
          <p className="mn-4">
            {state === 'en' && <>
            <ul>
                <li>Families wanting a more comfortable bathroom experience.</li>
                <li>Smart Home users looking to integrate bathroom air quality into their automation.
            </li>
                <li>Universities and students as a quick DIY showcase project.</li>
                
            </ul>
            </>}
            {state === 'de' && <>
            
             <ul>
                <li>Familien, die sich ein angenehmeres Badezimmererlebnis wünschen.</li>
                <li>Smart-Home-Nutzer, die die Luftqualität im Badezimmer in ihre 
                    Automatisierung integrieren möchten.</li>
                <li>Universitäten und Studenten als schnelles DIY-Vorzeigeprojekt.</li>
                
            </ul>
            </>}
          </p>    
           <h4 className="mn-4">
            {state === 'en' && <>Get Yours Today</>}
            {state === 'de' && <>Holen Sie sich Ihr Exemplar noch heute</>}
          </h4>   
          <p className="mn-4">
            {state === 'en' && <>
            Available now in two options:
               <ul>
                <li>DIY Kit - Build it yourself in minutes.</li>
                <li>Ready-to-Use Device - Plug in and start monitoring.</li>
            </ul> 
            </>}
            {state === 'de' && <>
            Jetzt in zwei Optionen erhältlich:
            
             <ul>
                <li>DIY-Kit - Bauen Sie es in wenigen Minuten selbst zusammen.</li>
                <li>Gebrauchsfertiges Gerät - Einstecken und mit der Überwachung beginnen.</li>
            </ul> 
            </>}
          </p>    
          
     
          
        </div>
      </section>
    </>
  );
};

export default ServiceHOC(Index, {
  servicesCategoryUrls: servicesUrls.products,
  pageUrl: '../freshcheck',
  pageTitle: 'FreshCheck',
  serviceCategory: 'Our Products',
});

