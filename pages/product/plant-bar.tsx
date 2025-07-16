import React from 'react';
import Head from 'next/head';
import { useContext } from 'react';
import PageTitle from '../../components/PageTitle';
import { LanguageSwitchContext } from '../../components/context/LanguageSwitch';
import Translatable from '../../components/Translatable';
import Link from 'next/link';
import { targetDomain } from '../../utils/constants';

const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'Plant Bar';
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Product',
              name: 'Plant Bar',
              image: `${targetDomain}/img/content/plant-bar/plant-bar.jpg`,
              description:
                'Plant Bar sensor system for monitoring soil moisture, temperature, and light, enabling precision care in smart gardening and agriculture.',
              sku: 'CSB-PB001',
              brand: {
                '@type': 'Brand',
                name: 'Carenuity',
              },
              offers: {
                '@type': 'Offer',
                priceCurrency: 'EUR',
                price: '1.11',
                availability: 'https://schema.org/InStock',
                url: `${targetDomain}/product/plant-bar`,
              },
            }),
          }}
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
          <h4 className="mb-2">
            {state === 'en' && <>Capacitive Soil Moisture Meter</>}
            {state === 'de' && <>Kapazitives Bodenfeuchtemessgerät</>}
          </h4>
          <p className="mb-4">
            {state === 'en' && (
              <>
                The <strong>Capacitive Soil Moisture Meter</strong> is a
                reliable and durable sensor designed to measure soil moisture
                levels using capacitive sensing technology. Unlike traditional
                resistive sensors that rely on exposed metal probes, this meter
                detects changes in the soil&apos;s dielectric constant, making
                it more resistant to corrosion and ideal for long-term use in
                both indoor and outdoor environments. It provides accurate,
                consistent readings and is easily integrated with
                microcontrollers like Arduino or ESP32, making it a popular
                choice for smart gardening, irrigation systems, and agricultural
                monitoring. Its low power consumption and stable performance
                make it an efficient tool for maintaining optimal soil
                conditions in various applications.
              </>
            )}
            {state === 'de' && (
              <>
                Das <strong>kapazitive Bodenfeuchtemessgerät</strong> ist ein
                zuverlässiger und langlebiger Sensor zur Messung der
                Bodenfeuchtigkeit mithilfe kapazitiver Sensortechnologie. Im
                Gegensatz zu herkömmlichen Widerstandssensoren, die auf
                freiliegenden Metallsonden basieren, erkennt dieses Messgerät
                Änderungen in der Dielektrizitätskonstante des Bodens, wodurch
                er korrosionsbeständiger wird und sich ideal für den
                langfristigen Einsatz sowohl im Innen- als auch im Außenbereich
                eignet. Es liefert genaue, konsistente Messwerte und lässt sich
                problemlos in Mikrocontroller wie Arduino oder ESP32
                integrieren, was es zu einer beliebten Wahl für intelligente
                Gartenarbeit, Bewässerungssysteme und landwirtschaftliche
                Überwachung macht. Sein geringer Stromverbrauch und seine
                stabile Leistung machen ihn zu einem effizienten Werkzeug zur
                Aufrechterhaltung optimaler Bodenbedingungen bei verschiedenen
                Anwendungen.
              </>
            )}
          </p>

          <div className="row">
            <div className="col-md-3 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/plant-bar/slide1.png"
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

            <div className="col-md-3 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/plant-bar/slide2.png"
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
            <div className="col-md-3 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/plant-bar/slide3.png"
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

            <div className="col-md-3 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/plant-bar/slide4.png"
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
          </div>
          <h4 className="mb-4">
            {state === 'en' && (
              <>
                Never Thirsty Plants Again: Carenuity Plant Bar Revolutionizes
                Plant Care
              </>
            )}
            {state === 'de' && (
              <>
                Nie mehr verdurstete Pflanzen: Carenuity Plant Bar
                revolutioniert die Pflanzenpflege
              </>
            )}
          </h4>
          <p>
            {state === 'en' && (
              <>
                Imagine a world where your plants never suffer from thirst or
                neglect. The Carenuity Plant Bar is here to make that dream a
                reality. This compact device, built on the advanced C3-Mini
                architecture, features a vibrant 0.96-inch OLED display that
                brings plant care into the digital age.
              </>
            )}
            {state === 'de' && (
              <>
                Stellen Sie sich eine Welt vor, in der Ihre Pflanzen nie unter
                Durst oder Vernachlässigung leiden. Die Carenuity Plant Bar
                macht diesen Traum zur Realität. Dieses kompakte Gerät,
                basierend auf der fortschrittlichen C3-Mini-Architektur, verfügt
                über ein lebendiges 0,96-Zoll-OLED-Display, das die
                Pflanzenpflege ins digitale Zeitalter bringt.
              </>
            )}
          </p>

          <p>
            {state === 'en' && (
              <>
                With the Carenuity Solution Builder, you can effortlessly
                install and update the latest applications, ensuring your device
                is always equipped with the newest features. But the magic
                doesn&apos;t stop there. This smart tool helps you monitor
                essential parameters like soil moisture, temperature, and
                humidity, making plant care easier and more efficient than ever
                before.
              </>
            )}
            {state === 'de' && (
              <>
                Mit dem Carenuity Solution Builder können Sie mühelos die
                neuesten Anwendungen installieren und aktualisieren, sodass Ihr
                Gerät stets mit den neuesten Funktionen ausgestattet ist. Aber
                das ist noch nicht alles. Dieses intelligente Werkzeug hilft
                Ihnen, wichtige Parameter wie Bodenfeuchtigkeit, Temperatur und
                Luftfeuchtigkeit zu überwachen, wodurch die Pflanzenpflege
                einfacher und effizienter wird.
              </>
            )}
          </p>

          <p>
            {state === 'en' && (
              <>
                Gone are the days of guessing when to water your plants. The
                Carenuity Plant Bar provides real-time data, alerting you when
                your plants need attention. Whether you&apos;re a seasoned
                gardener or a novice plant enthusiast, this device is designed
                to simplify your life and ensure your plants thrive.
              </>
            )}
            {state === 'de' && (
              <>
                Die Zeiten des Rätselratens, wann Ihre Pflanzen gegossen werden
                müssen, sind vorbei. Die Carenuity Plant Bar liefert
                Echtzeitdaten und benachrichtigt Sie, wenn Ihre Pflanzen
                Aufmerksamkeit benötigen. Ob erfahrener Gärtner oder Anfänger,
                dieses Gerät ist darauf ausgelegt, Ihr Leben zu vereinfachen und
                sicherzustellen, dass Ihre Pflanzen gedeihen.
              </>
            )}
          </p>

          <p>
            {state === 'en' && (
              <>
                Plus, you can personalize your device with your own logo on the
                display, adding a unique touch to your plant care routine.
                Available in a variety of colors, the Carenuity Plant Bar not
                only performs exceptionally but also complements your style.
              </>
            )}
            {state === 'de' && (
              <>
                Darüber hinaus können Sie Ihr Gerät mit Ihrem eigenen Logo auf
                dem Display personalisieren und Ihrer Pflanzenpflege eine
                einzigartige Note verleihen. Erhältlich in verschiedenen Farben,
                bietet die Carenuity Plant Bar nicht nur hervorragende Leistung,
                sondern ergänzt auch Ihren Stil.
              </>
            )}
          </p>

          <h4 className="mn-4">
            {state === 'en' && <>Structure</>}
            {state === 'de' && <>Struktur</>}
          </h4>
          <div className="col-md-4 mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/content/plant-bar/plant-bar2.png"
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
          <div>
            <h4>Shop with us</h4>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    maxHeight: '1070px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/plant-bar/capacitive-soil-moisture.png"
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
                    <h6 className="text-success">
                      Capacitive Soil Moisture Sensor, V2.0
                    </h6>
                    <p>
                      The capacitive soil moisture sensor is a reliable and
                      durable tool for measuring soil moisture. It operates at a
                      voltage of 3.3 to 5.5V ...{' '}
                    </p>
                    <div className="row">
                      <p className="col-md-3 mb-4">
                        {!isMobile && (
                          <Link
                            href={
                              'https://www.chipglobe.shop/en/p/capacitive-soil-moisture-sensor-v2-0'
                            }
                            target="_blank"
                            className={'btn btn-sm btn-success rounded-pill'}
                          >
                            <span className="small"> Buy Now</span>
                          </Link>
                        )}

                        {isMobile && (
                          <a
                            href={
                              'https://www.chipglobe.shop/en/p/capacitive-soil-moisture-sensor-v2-0'
                            }
                            target="_blank"
                            className={'btn btn-sm btn-success rounded-pill'}
                            rel="noreferrer"
                          >
                            <span className="small">
                              Buy Now{' '}
                              {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                            </span>
                          </a>
                        )}
                      </p>
                      <p className="col-md-4 mb-4">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
