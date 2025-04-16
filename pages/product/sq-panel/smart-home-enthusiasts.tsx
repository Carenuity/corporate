import React from 'react';
import { useContext } from 'react';
import Head from 'next/head';
import PageTitle from '../../../components/PageTitle';
import { LanguageSwitchContext } from '../../../components/context/LanguageSwitch';
import Translatable from '../../../components/Translatable';

const Page = () => {
  const pageTitle = 'Smart Home Enthusiasts';
  const { state } = useContext(LanguageSwitchContext);
  return (
    <>
      <Head>
        <Translatable />
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
                Reasons Why Smart Home Enthusiasts Should Buy the Carenuity
                SQ-Panel?
              </>
            )}
            {state === 'de' && (
              <>
                Gründe, warum Smart-Home-Enthusiasten das Carenuity SQ-Panel
                kaufen sollten?
              </>
            )}
          </h4>

          <h5>
            {state === 'en' && <>1. Smarter living starts with healthier air</>}
            {state === 'de' && (
              <>1. Intelligenter wohnen beginnt mit gesünderer Luft</>
            )}
          </h5>
          <p>
            {state === 'en' && (
              <>
                The Carenuity SQ-Panel continuously monitors indoor air quality,
                humidity, and temperature - ensuring your home environment is
                always optimized for comfort, health, and peace of mind.
              </>
            )}
            {state === 'de' && (
              <>
                Das Carenuity SQ-Panel überwacht kontinuierlich die
                Luftqualität, Luftfeuchtigkeit und Temperatur in Innenräumen -
                für ein Zuhause, das stets auf Komfort, Gesundheit und
                Wohlbefinden optimiert ist.
              </>
            )}
          </p>
          <h5>
            {state === 'en' && (
              <>2. Seamless integration into your smart home ecosystem</>
            )}
            {state === 'de' && (
              <>2. Nahtlose Integration in Ihr Smart-Home-Ökosystem</>
            )}
          </h5>
          <p>
            {state === 'en' && (
              <>
                Compatible with smart home platforms, the SQ-Panel can trigger
                actions such as adjusting your HVAC, sending alerts, or
                activating air purifiers when conditions change - all
                automatically.{' '}
              </>
            )}
            {state === 'de' && (
              <>
                Kompatibel mit gängigen Smart-Home-Plattformen kann das SQ-Panel
                automatisch Aktionen auslösen - z.B. das HVAC-System regulieren,
                Luftreiniger einschalten oder Benachrichtigungen senden, wenn
                sich Umweltbedingungen ändern.
              </>
            )}
          </p>
          <h5>
            {state === 'en' && <>3. Real-time insights at your fingertips</>}
            {state === 'de' && <>3. Echtzeit-Einblicke auf einen Blick</>}
          </h5>
          <p>
            {state === 'en' && (
              <>
                Track and analyze environmental trends in your home via
                intuitive dashboards. Know when to ventilate, humidify, or make
                other adjustments for peak indoor well-being.
              </>
            )}
            {state === 'de' && (
              <>
                Verfolgen und analysieren Sie Umwelttrends in Ihrem Zuhause über
                intuitive Dashboards. Erfahren Sie genau, wann Sie lüften,
                befeuchten oder andere Anpassungen vornehmen sollten - für ein
                optimales Wohnklima.
              </>
            )}
          </p>
          <h5>
            {state === 'en' && (
              <>4. Peace of mind, even when you&apos;re away</>
            )}
            {state === 'de' && <>4. Ein gutes Gefühl - auch von unterwegs</>}
          </h5>
          <p>
            {state === 'en' && (
              <>
                With remote access and alerts, you&apos;ll always know your home
                is safe, healthy, and running efficiently - whether you&apos;re
                out for the day or on vacation.
              </>
            )}
            {state === 'de' && (
              <>
                Mit Fernzugriff und Benachrichtigungen wissen Sie immer, dass
                Ihr Zuhause sicher, gesund und effizient läuft - egal ob Sie nur
                kurz weg sind oder im Urlaub.
              </>
            )}
          </p>
          <h5>
            {state === 'en' && <>5. Future-proof your smart home</>}
            {state === 'de' && <>5. Machen Sie Ihr Smart Home zukunftssicher</>}
          </h5>
          <p>
            {state === 'en' && (
              <>
                The SQ-Panel isn&apos;t just a gadget - it&apos;s a proactive
                health and energy-saving tool that keeps getting smarter via
                updates and integrations with future smart systems.
              </>
            )}
            {state === 'de' && (
              <>
                Das SQ-Panel ist kein bloßes Gadget - es ist ein aktives
                Gesundheits- und Energiespar-Tool, das durch Updates und
                Integrationen mit zukünftigen Smart-Systemen immer besser wird.
              </>
            )}
          </p>
        </div>
      </section>
    </>
  );
};

export default Page;
