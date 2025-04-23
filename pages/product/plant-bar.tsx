import React from 'react';
import Head from 'next/head';
import { useContext } from 'react';
import PageTitle from '../../components/PageTitle';
import { LanguageSwitchContext } from '../../components/context/LanguageSwitch';
import Translatable from '../../components/Translatable';

const Page = () => {
  const pageTitle = 'Plant Bar';
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
                Never Thirsty Plants Again: Carenuity Plant Bar Revolutionizes Plant Care
              </>
            )}
            {state === 'de' && (
              <>
               Nie mehr verdurstete Pflanzen: Carenuity Plant Bar revolutioniert die Pflanzenpflege
              </>
            )}
          </h4>

          <p>{state === 'en' && (
              <>
               Imagine a world where your plants never suffer from thirst or neglect. The Carenuity 
               Plant Bar is here to make that dream a reality. This compact device, built on the advanced 
               C3-Mini architecture, features a vibrant 0.96-inch OLED display that brings plant care 
               into the digital age.

              </>
            )}
            {state === 'de' && (
              <>
              Stellen Sie sich eine Welt vor, in der Ihre Pflanzen nie unter Durst oder Vernachlässigung 
              leiden. Die Carenuity Plant Bar macht diesen Traum zur Realität. Dieses kompakte Gerät, 
              basierend auf der fortschrittlichen C3-Mini-Architektur, verfügt über ein lebendiges 
              0,96-Zoll-OLED-Display, das die Pflanzenpflege ins digitale Zeitalter bringt. 

              </>
            )}</p>

           
            <p>{state === 'en' && (
              <>
               With the Carenuity Solution Builder, you can effortlessly install and update the 
               latest applications, ensuring your device is always equipped with the newest features. 
               But the magic doesn't stop there. This smart tool helps you monitor essential parameters 
               like soil moisture, temperature, and humidity, making plant care easier and more efficient 
               than ever before. 
              </>
            )}
            {state === 'de' && (
              <>
                Mit dem Carenuity Solution Builder können Sie mühelos die neuesten Anwendungen 
                installieren und aktualisieren, sodass Ihr Gerät stets mit den neuesten Funktionen 
                ausgestattet ist. Aber das ist noch nicht alles. Dieses intelligente Werkzeug hilft 
                Ihnen, wichtige Parameter wie Bodenfeuchtigkeit, Temperatur und Luftfeuchtigkeit zu 
                überwachen, wodurch die Pflanzenpflege einfacher und effizienter wird.
              </>
            )}</p>

            <p>{state === 'en' && (
              <>
               Gone are the days of guessing when to water your plants. The Carenuity Plant Bar 
               provides real-time data, alerting you when your plants need attention. Whether 
               you're a seasoned gardener or a novice plant enthusiast, this device is designed 
               to simplify your life and ensure your plants thrive.
 
              </>
            )}
            {state === 'de' && (
              <>
              Die Zeiten des Rätselratens, wann Ihre Pflanzen gegossen werden müssen, sind vorbei. 
              Die Carenuity Plant Bar liefert Echtzeitdaten und benachrichtigt Sie, wenn Ihre Pflanzen 
              Aufmerksamkeit benötigen. Ob erfahrener Gärtner oder Anfänger, dieses Gerät ist darauf 
              ausgelegt, Ihr Leben zu vereinfachen und sicherzustellen, dass Ihre Pflanzen gedeihen.  
              </>
            )}</p>

            <p>{state === 'en' && (
              <>
               Plus, you can personalize your device with your own logo on the display, adding a 
               unique touch to your plant care routine. Available in a variety of colors, the 
               Carenuity Plant Bar not only performs exceptionally but also complements your style. 
              </>
            )}
            {state === 'de' && (
              <>
                Darüber hinaus können Sie Ihr Gerät mit Ihrem eigenen Logo auf dem Display personalisieren
                 und Ihrer Pflanzenpflege eine einzigartige Note verleihen. Erhältlich in verschiedenen 
                 Farben, bietet die Carenuity Plant Bar nicht nur hervorragende Leistung, sondern ergänzt 
                 auch Ihren Stil.
              </>
            )}</p>
            
        </div>
      </section>
    </>
  );
};

export default Page;
