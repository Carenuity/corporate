import Head from 'next/head';
import PageTitle from '../../../components/PageTitle';
import Link from 'next/link';
import ApplicationItem from '../../../components/ApplicationItem';
import { useContext } from 'react';
import { LanguageSwitchContext } from '../../../components/context/LanguageSwitch';
import Translatable from '../../../components/Translatable';


const Sensors = () => {
  // { isMobile }: { isMobile: boolean }
  const pageTitle = 'Air Quality Index ';
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
        pageUrl="/aqi-insights"
      />

      <section className="pt-4">
        <div className="container">
         
          <div>
            <h4 className="mn-4">
            {state === 'en' && <>The Air You Breathe Shapes Your Health—Stay Ahead of Pollution Risks </>}
            {state === 'de' && <>Die Luft, die Sie atmen, prägt Ihre Gesundheit - bleiben Sie den Risiken der Umweltverschmutzung voraus</>}
          </h4>
           <p className="mb-4">
            {state === 'en' && <>
            Air may look clean, but harmful pollutants often linger undetected—especially indoors. The Air Quality Index (AQI) is a 
            critical measure of what you're really breathing in, tracking pollutants like particulate matter (PM2.5 and PM10), ozone, 
            nitrogen dioxide, and more. When AQI levels rise, so do health risks. Short-term exposure to poor air quality can cause 
            irritation of the eyes, nose, and throat, trigger asthma attacks, and reduce lung function. Long-term exposure has been 
            linked to heart disease, respiratory illnesses, and even shortened life expectancy.
            </>}
            {state === 'de' && <>
            Die Luft sieht zwar sauber aus, aber schädliche Schadstoffe bleiben oft unentdeckt - vor allem in Innenräumen. Der Luftqualitätsindex 
            (AQI) ist ein wichtiges Maß dafür, was Sie wirklich einatmen. Er erfasst Schadstoffe wie Feinstaub (PM2,5 und PM10), Ozon, Stickstoffdioxid 
            und mehr. Wenn die AQI-Werte steigen, steigt auch das Gesundheitsrisiko. Kurzfristige Belastung durch schlechte Luftqualität kann zu Reizungen 
            der Augen, der Nase und des Rachens führen, Asthmaanfälle auslösen und die Lungenfunktion beeinträchtigen. Langfristige Belastung wird mit 
            Herzkrankheiten, Atemwegserkrankungen und sogar einer verkürzten Lebenserwartung in Verbindung gebracht.
            </>}
          </p>
           <p className="mb-4">
            {state === 'en' && <>
            Without active monitoring, poor air quality can silently affect your concentration, energy levels, and overall wellbeing. Vulnerable 
            groups—such as children, seniors, and individuals with chronic conditions—face an even higher risk. That&apos;s why real-time AQI monitoring 
            isn&apos;t just a feature—it&apos;s a frontline defense for your health. By keeping AQI levels under control, you protect your environment, enhance 
            your performance, and most importantly, safeguard your long-term health.
            </>}
            {state === 'de' && <>
           Ohne aktive Überwachung kann sich eine schlechte Luftqualität unbemerkt auf Ihre Konzentration, Ihr Energieniveau und Ihr allgemeines 
           Wohlbefinden auswirken. Besonders gefährdete Gruppen - wie Kinder, Senioren und Menschen mit chronischen Erkrankungen - sind einem noch 
           höheren Risiko ausgesetzt. Aus diesem Grund ist die AQI-Überwachung in Echtzeit nicht nur eine Funktion, sondern ein wichtiger Schutz für 
           Ihre Gesundheit. Indem Sie die AQI-Werte unter Kontrolle halten, schützen Sie Ihre Umwelt, steigern Ihre Leistungsfähigkeit und - was am 
           wichtigsten ist - schützen Ihre langfristige Gesundheit.
            </>}
          </p>
          </div>
          <div>
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

          </div>
        </div>
      </section>
    </>
  );
};

export default Sensors;
