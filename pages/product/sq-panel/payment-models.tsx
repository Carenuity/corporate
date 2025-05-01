import React from 'react';
import { useContext } from 'react';
import Head from 'next/head';
import PageTitle from '../../../components/PageTitle';
import { LanguageSwitchContext } from '../../../components/context/LanguageSwitch';
import Translatable from '../../../components/Translatable';

const Page = () => {
  const pageTitle = 'Payment Models';
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
         
          <h4 className="mb-4">
            {state === 'en' && (
              <>
               Carenuity payment models
              </>
            )}
            {state === 'de' && (
              <>
                Carenuity Bezahl Modelle
              </>
            )}
          </h4>

          <h5 className="mb-2">
            {state === 'en' && (
              <>
               Purchase
              </>
            )}
            {state === 'de' && (
              <>
                Kauf
              </>
            )}
          </h5>

          
          <p>
            {state === 'en' && (
              <>
               One-time payment: Pay the full price of the device in one go and it's yours immediately. This option is ideal for customers 
               who want to pay the entire amount immediately and own the device without any further obligations. Installment payment: 
               Pay off the price of the device in monthly installments. For a term of 1 year, the monthly rate is EUR 34.24. At 
               for a term of 2 years, the monthly rate is EUR 17.55. With a term of 3 years, the monthly rate is EUR 11.99. 
              </>
            )}
            {state === 'de' && (
              <>
               Einmalzahlung: Zahle den vollen Preis des Geräts auf einmal und es gehört sofort dir. Diese Option ist ideal für Kunden, 
               die den gesamten Betrag sofort begleichen möchten und das Gerät ohne weitere Verpflichtungen besitzen wollen. Ratenzahlung: 
               Zahle den Preis des Geräts in monatlichen Raten ab. Bei einer Laufzeit von 1 Jahr beträgt die monatliche Rate 34,24 EUR. Bei 
               einer Laufzeit von 2 Jahren beträgt die monatliche Rate 17,55 EUR. Bei einer Laufzeit von 3 Jahren beträgt die monatliche Rate 11,99 EUR. 
              </>
            )}
          </p>

          <h5 className="mb-2">
            {state === 'en' && (
              <>
              Rent
              </>
            )}
            {state === 'de' && (
              <>
                Miete
              </>
            )}
          </h5>

          <p>
            {state === 'en' && (
              <>
               Monthly Rental: Pay a monthly fee to use the device. The device remains the property of Carenuity. This option offers 
               flexibility as you can return the device or exchange it for a newer model if necessary. For a term of 1 year, the monthly 
               rent is EUR 34.24. With a term of 2 years, the monthly rent is EUR 17.55. With a term of 3 years, the monthly rent is EUR 11.99. 
               MicroServices Processing: The management and billing of the monthly rent can be carried out efficiently via MicroServices, which 
               enables quick adjustment and scaling. 
              </>
            )}
            {state === 'de' && (
              <>
               Monatliche Miete: Zahle eine monatliche Gebühr für die Nutzung des Geräts. Das Gerät bleibt Eigentum von Carenuity. Diese Option 
               bietet Flexibilität, da du das Gerät bei Bedarf zurückgeben oder gegen ein neueres Modell tauschen kannst. Bei einer Laufzeit von 
               1 Jahr beträgt die monatliche Miete 34,24 EUR. Bei einer Laufzeit von 2 Jahren beträgt die monatliche Miete 17,55 EUR. Bei einer 
               Laufzeit von 3 Jahren beträgt die monatliche Miete 11,99 EUR. MicroServices Abwicklung: Die Verwaltung und Abrechnung der monatlichen 
               Miete können effizient über MicroServices erfolgen, was eine schnelle Anpassung und Skalierung ermöglicht.
 
              </>
            )}
          </p>

          <h5 className="mb-2">
            {state === 'en' && (
              <>
              Leasing
              </>
            )}
            {state === 'de' && (
              <>
                Leasing
              </>
            )}
          </h5>

          <p>
            {state === 'en' && (
              <>
              Finance leasing: Pay monthly leasing installments and have the option of purchasing the device at a residual value at the end of the term 
               to buy. With a term of 1 year, the monthly leasing rate is EUR 34.24. With a term of 2 years 
               the monthly leasing rate is EUR 17.55. With a term of 3 years, the monthly leasing rate is EUR 11.99. Operating lease: 
               Pay monthly installments, but the device remains the property of Carenuity and is returned after the term. This option is ideal 
               for customers who want regular access to the latest technologies without making a long-term commitment. MicroServices Processing: The 
               Processing of leasing installments and the management of contract conditions can be supported by MicroServices, which increases efficiency 
               and adaptability increased.  
              </>
            )}
            {state === 'de' && (
              <>
               Finanzierungs-Leasing: Zahle monatliche Leasingraten und habe am Ende der Laufzeit die Möglichkeit, das Gerät zu einem Restwert 
               zu kaufen. Bei einer Laufzeit von 1 Jahr beträgt die monatliche Leasingrate 34,24 EUR. Bei einer Laufzeit von 2 Jahren beträgt 
               die monatliche Leasingrate 17,55 EUR. Bei einer Laufzeit von 3 Jahren beträgt die monatliche Leasingrate 11,99 EUR. Operating-Leasing: 
               Zahle monatliche Raten, aber das Gerät bleibt Eigentum von Carenuity und wird nach der Laufzeit zurückgegeben. Diese Option ist ideal 
               für Kunden, die regelmäßig auf neueste Technologien zugreifen möchten, ohne sich langfristig zu binden. MicroServices Abwicklung: Die 
               Abwicklung der Leasingraten und die Verwaltung der Vertragsbedingungen können durch MicroServices unterstützt werden, was die Effizienz 
               und Anpassungsfähigkeit erhöht. 
              </>
            )}
          </p>

          <h5 className="mb-2">
            {state === 'en' && (
              <>
             Hire purchase
              </>
            )}
            {state === 'de' && (
              <>
               Mietkauf
              </>
            )}
          </h5>


          <p>
            {state === 'en' && (
              <>
               Rent-to-own: A combination of renting and buying. Pay monthly installments and have the option to purchase the device at the end of the term 
               to buy at a reduced price. With a term of 1 year, the monthly rate is EUR 34.24. With a term of 2 
               years, the monthly rate is EUR 17.55. With a term of 3 years, the monthly rate is EUR 11.99. This option 
               gives you the flexibility of renting with the option to ultimately own the unit. 
              </>
            )}
            {state === 'de' && (
              <>
               Mietkauf: Eine Kombination aus Miete und Kauf. Zahle monatliche Raten und habe am Ende der Laufzeit die Möglichkeit, das Gerät zu 
               einem reduzierten Preis zu kaufen. Bei einer Laufzeit von 1 Jahr beträgt die monatliche Rate 34,24 EUR. Bei einer Laufzeit von 2 
               Jahren beträgt die monatliche Rate 17,55 EUR. Bei einer Laufzeit von 3 Jahren beträgt die monatliche Rate 11,99 EUR. Diese Option 
               bietet dir die Flexibilität der Miete mit der Möglichkeit, das Gerät letztendlich zu besitzen. 
              </>
            )}
          </p>

         
         

         
          
        </div>
      </section>
    </>
  );
};

export default Page;
