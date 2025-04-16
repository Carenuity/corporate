import React from 'react';
import Head from 'next/head';
import { useContext } from 'react';
import PageTitle from '../../../components/PageTitle';
import { LanguageSwitchContext } from '../../../components/context/LanguageSwitch';
import Translatable from '../../../components/Translatable';

const Page = () => {
  const pageTitle = 'Health Conscious Longevity Enthusiasts';
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
                Reasons Why Health-Conscious Longevity Enthusiasts Should Buy
                the Carenuity SQ-Panel
              </>
            )}
            {state === 'de' && (
              <>
                Warum gesundheitsbewusste Langlebigkeitsbegeisterte das
                Carenuity SQ-Panel kaufen sollten
              </>
            )}
          </h4>

          <h5>
            {state === 'en' && <>1. Proactive environmental sensing</>}
            {state === 'de' && <>1. Proaktive umweltüberwachung</>}
          </h5>
          <p>
            {state === 'en' && (
              <>
                The SQ-Panel continuously monitors air quality, temperature,
                humidity, and more. For those prioritizing long-term health,
                having real-time insight into your environment helps you
                proactively reduce exposure to harmful conditions that
                accelerate aging or cause chronic issues.
              </>
            )}
            {state === 'de' && (
              <>
                Das SQ-Panel überwacht kontinuierlich Luftqualität, Temperatur,
                Luftfeuchtigkeit und mehr. Wer seine Gesundheit langfristig
                schützen will, profitiert von Echtzeitdaten zur Reduzierung
                gesundheitsschädlicher Umwelteinflüsse - ein wichtiger Schritt
                zur Prävention.
              </>
            )}
          </p>

          <h5>
            {state === 'en' && <>2. Smart alerts for a safer lifestyle</>}
            {state === 'de' && (
              <>2. Intelligente warnungen für ein sicheres leben</>
            )}
          </h5>
          <p>
            {state === 'en' && (
              <>
                Whether it&apos;s detecting harmful gases, unusual humidity that
                could lead to mold, or temperature fluctuations — the panel
                notifies you immediately. It&apos;s like having a silent
                guardian keeping your living or working space optimized for
                long-term wellness.
              </>
            )}
            {state === 'de' && (
              <>
                Ob schädliche Gase, zu hohe Luftfeuchtigkeit (Schimmelgefahr)
                oder plötzliche Temperaturschwankungen - das Panel warnt Sie
                sofort. Es ist wie ein stiller Wächter, der Ihr Zuhause oder
                Büro auf gesundheitliche Risiken prüft.
              </>
            )}
          </p>

          <h5>
            {state === 'en' && <>3. Data-driven longevity</>}
            {state === 'de' && <>3. Datengesteuerte Langlebigkeit</>}
          </h5>
          <p>
            {state === 'en' && (
              <>
                Track trends over time to understand how your environment
                impacts your sleep, energy, and well-being. Make smarter
                lifestyle choices based on actual conditions, not guesswork.
              </>
            )}
            {state === 'de' && (
              <>
                Verfolgen Sie Umwelttrends über Zeiträume hinweg, um zu
                verstehen, wie Ihre Umgebung Ihren Schlaf, Ihre Energie und Ihr
                Wohlbefinden beeinflusst. Treffen Sie fundierte Entscheidungen
                für Ihre Gesundheit - basierend auf Fakten, nicht Vermutungen.
              </>
            )}
          </p>

          <h5>
            {state === 'en' && <>4. Integrates with your wellness ecosystem</>}
            {state === 'de' && (
              <>4. Integriert sich in Ihr Wellness-Ökosystem</>
            )}
          </h5>
          <p>
            {state === 'en' && (
              <>
                The Carenuity SQ-Panel can integrate with smart homes, HVAC
                systems, and wellness platforms. That means automation: when CO2
                is high, windows open. When the air is too dry, your humidifier
                activates. It optimizes your space to support better breathing,
                deeper sleep, and cleaner air.
              </>
            )}
            {state === 'de' && (
              <>
                Das Carenuity SQ-Panel lässt sich in Smart-Home-Systeme,
                Lüftungsanlagen oder Gesundheitsplattformen integrieren.
                Beispiel: Bei zu hoher CO₂-Konzentration öffnen sich Fenster
                automatisch. Ist die Luft zu trocken, startet der
                Luftbefeuchter. So wird Ihr Wohnraum zum Wohlfühlraum -
                automatisch optimiert für Ihre Gesundheit.
              </>
            )}
          </p>

          <h5>
            {state === 'en' && <>5. Built by experts in embedded health tech</>}
            {state === 'de' && (
              <>
                5. Entwickelt von Experten für eingebettete
                Gesundheitstechnologie
              </>
            )}
          </h5>
          <p>
            {state === 'en' && (
              <>
                Carenuity and ChipGlobe bring years of experience in embedded
                systems for healthcare and safety. This isn&apos;t a gimmick —
                it&apos;s engineered with precision for people who take health
                seriously.
              </>
            )}
            {state === 'de' && (
              <>
                Carenuity und ChipGlobe bringen jahrelange Erfahrung in der
                Entwicklung medizinischer und sicherheitsrelevanter Systeme mit.
                Das SQ-Panel ist kein Spielzeug - es ist ein hochpräzises
                Werkzeug für alle, die Gesundheit ernst nehmen.
              </>
            )}
          </p>
        </div>
      </section>
    </>
  );
};

export default Page;
