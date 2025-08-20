import React from 'react';
import Head from 'next/head';
import PageTitle from '../../components/PageTitle';
import { LanguageSwitchContext } from '../../components/context/LanguageSwitch';
import Translatable from '../../components/Translatable';
import { useContext } from 'react';

const Page = () => {
  const pageTitle = 'AquaBar';
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
        <div className="container ">
          <h3 className="mn-4">
            {state === 'en' && <>Carenuity AquaBar — Protect Your Aquarium with Smart Temperature Monitoring</>}
            {state === 'de' && <>Carenuity AquaBar – Schützen Sie Ihr Aquarium mit intelligenter Temperaturüberwachung
Hero-Bereich</>}
          </h3>

          <h4 className="mn-4">
            {state === 'en' && <>Keep your aquarium life safe — even when you are away.</>}
            {state === 'de' && <>Schützen Sie Ihr Aquarium – auch wenn Sie nicht zu Hause sind.</>}
          </h4>
          <p className="mn-4">
            {state === 'en' && <>AquaBar monitors water temperature continuously and alerts you instantly if conditions become unsafe.</>}
            {state === 'de' && <>AquaBar überwacht kontinuierlich die Wassertemperatur und alarmiert Sie sofort, wenn die Bedingungen unsicher werden.</>}
          </p>

          <div className='row'>
            <div className='col-lg-8'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/content/freshcheck/aquarium.png"
            className=" wow fadeInUp mb-6"
            data-wow-delay="100ms"
            alt="..."
            style={{
              visibility: 'visible',
              animationDelay: '100ms',

              animationName: 'fadeIn',
            }}
          />
            </div>
          </div>
                 
            <h4 className="mn-4">
            {state === 'en' && <>The Problem</>}
            {state === 'de' && <>Das Problem</>}
          </h4>   
          <p className="mn-4">
            {state === 'en' && <>Aquariums are highly sensitive ecosystems. Even small temperature fluctuations can cause severe 
            stress or death for fish, corals, or plants.</>}
            {state === 'de' && <>Aquarien sind hochsensible Ökosysteme. Selbst kleine Temperaturschwankungen können für Fische, Korallen oder Pflanzen zu starkem Stress oder zum Tod führen.
            </>}
                
          </p> 

           <ul className="mn-4">
            {state === 'en' && <>
            <li>Heaters can fail or overheat unexpectedly.</li>
            <li>Sudden room temperature changes or power outages can destabilize water conditions.</li>
            <li>Problems often occur when no one is at home — especially during vacations.</li>
            <li>By the time you notice, it may already be too late.</li>
            </>}
            {state === 'de' && <>
            <li>Heizungen können unerwartet ausfallen oder überhitzen.</li>
            <li>Plötzliche Änderungen der Raumtemperatur oder Stromausfälle können die Wasserbedingungen destabilisieren.</li>
            <li>Probleme treten oft auf, wenn niemand zu Hause ist - insbesondere während des Urlaubs.</li>
            <li>Wenn Sie es bemerken, kann es bereits zu spät sein.</li>
            </>}
          </ul>
           <h4 className="mn-4">
            {state === 'en' && <>The Solution</>}
            {state === 'de' && <>Die Lösung</>}
          </h4>   
          <p className="mn-4">
            {state === 'en' && <>Carenuity AquaBar is a compact smart sensor that 
            continuously tracks aquarium water temperature and alerts you immediately 
            when something goes wrong.

            
            </>}
            {state === 'de' && <>
           Carenuity AquaBar ist ein kompakter intelligenter Sensor, der kontinuierlich 
           die Wassertemperatur im Aquarium überwacht und Sie sofort benachrichtigt, 
           wenn etwas nicht in Ordnung ist.
           
            </>}
          </p>
          <ul className="mn-4">
            {state === 'en' && <>
            <li><strong>Green</strong> Temperature stable and safe.</li>
            <li><strong>Orange</strong>Warning — outside ideal range.</li>
            <li><strong>Red</strong>Danger — immediate action required.</li>
            <li><strong>Smart Alerts:</strong>Instant notifications on your 
            phone if water temperature drifts or heater fails.</li>
            </>}
            {state === 'de' && <>
            <li><strong>Grün:</strong>Temperatur stabil und sicher.</li>
            <li><strong>Orange:</strong>außerhalb des idealen Bereichs.</li>
            <li><strong>Rot:</strong> ofortiges Handeln erforderlich.</li>
            <li><strong>Intelligente Benachrichtigungen:</strong>Sofortige Benachrichtigungen 
            auf Ihrem Smartphone, wenn die Wassertemperatur schwankt oder die Heizung ausfällt.</li>
            </>}
          </ul> 
           <h4 className="mn-4">
            {state === 'en' && <>Key Benefits</>}
            {state === 'de' && <>Die wichtigsten Vorteile
</>}
          </h4>   
          <ul className="mn-4">
            {state === 'en' && <>
          
                    <li><strong>Protect aquatic life:</strong>Safeguard fish, corals, and plants from critical temperature swings.</li>
                     <li><strong>Peace of mind on vacation:</strong>Always know your aquarium is safe, wherever you are.</li>
                      <li><strong>Early failure detection:</strong>Recognize heater or chiller malfunctions before it&apos;s too late.</li>
                      <li><strong>Simple setup: </strong>Works in 3 minutes with Carenuity Solution Builder.</li>
                      <li><strong>Smart integration: </strong>Compatible with Matter, Home Assistant, Google Home, Alexa, Apple Home.</li>
                      
               
            </>}
            {state === 'de' && <>
           
                    <li><strong>Schützen Sie Wasserlebewesen:</strong> Schützen Sie Fische, Korallen und Pflanzen vor kritischen Temperaturschwankungen.</li>
                    <li><strong>Sorgloser Urlaub:</strong>Sie können sich immer sicher sein, dass Ihr Aquarium in Sicherheit ist, egal wo Sie sich gerade befinden.</li>
                    <li><strong>Frühzeitige Fehlererkennung:</strong>Erkennen Sie Fehlfunktionen der Heizung oder Kühlung, bevor es zu spät ist.</li>
                    <li><strong>Einfache Einrichtung: </strong>Funktioniert in 3 Minuten mit Carenuity Solution Builder.</li>
                    <li><strong>Intelligente Integration: </strong>Kompatibel mit Matter, Home Assistant, Google Home, Alexa, Apple Home.</li>
                     
               
            </>}
          </ul> 
           <h4 className="mn-4">
            {state === 'en' && <>How It Works</>}
            {state === 'de' && <>So funktioniert es</>}
          </h4>   
          <ol className="mn-4">
            {state === 'en' && <>
            
                <li> Place AquaBar sensor in the aquarium.</li>
                <li> Connect via USB or battery pack.</li>
                <li> Configure through Carenuity Solution Builder.</li>
                <li> LED indicator shows safe/alert state at a glance.</li>
                <li>Optional push notifications keep you informed while away.</li>
            </>}
            {state === 'de' && <>
            
               <li>Platzieren Sie den AquaBar-Sensor im Aquarium.</li>
               <li>Verbinden Sie ihn über USB oder einen Akku.</li>
               <li>Konfigurieren Sie ihn über Carenuity Solution Builder.</li>
               <li>Die LED-Anzeige zeigt auf einen Blick den Sicherheits-/Alarmstatus an.</li>
               <li>Optionale Push-Benachrichtigungen halten Sie auch unterwegs auf dem Laufenden.</li>
            
            </>}
          </ol>    
           <h4 className="mn-4">
            {state === 'en' && <>Who It&apos;s For</>}
            {state === 'de' && <>Für wen ist es geeignet?</>}
          </h4>   
          <ul className="mn-4">
            {state === 'en' && <>
          
                <li>Aquarium owners who travel frequently.</li>
                <li>Reef keepers and marine aquariums (high sensitivity).</li>
                <li>Freshwater tanks with delicate fish species.</li>
                <li>Smart home enthusiasts who want real-time aquarium data.</li>
                
           
            </>}
            {state === 'de' && <>
            
           
                <li>Aquarienbesitzer, die häufig verreisen.</li>
                 <li>Riffaquarianer und Meerwasseraquarien (hohe Empfindlichkeit).</li>
                  <li>Süßwasseraquarien mit empfindlichen Fischarten.</li>
                   <li>Smart-Home-Enthusiasten, die Echtzeitdaten aus ihrem Aquarium erhalten möchten.</li>
                
            
            </>}
          </ul>    
           <h4 className="mn-4">
            {state === 'en' && <>Get Yours Today</>}
            {state === 'de' && <>Holen Sie sich Ihr Exemplar noch heute</>}
          </h4>   
          <ul className="mn-4">
            {state === 'en' && <>
            Available now in two options:
               
                <li>DIY Kit - C3-Mini, waterproof sensor probe, LED ring, power cable, quick-start guide.</li>
                <li>Ready-to-Use Device - Preassembled, sealed housing, plug & play.</li>
          
            </>}
            {state === 'de' && <>
            Jetzt in zwei Optionen erhältlich:
            
            
                <li>DIY-Kit – C3-Mini, wasserdichte Sensorsonde, LED-Ring, Netzkabel, Schnellstartanleitung.</li>
                <li>Gebrauchsfertiges Gerät – Vormontiert, versiegeltes Gehäuse, Plug & Play.</li>
          
            </>}
          </ul>    
          
     
          
        </div>
      </section>
    </>
  );
};

export default Page;
