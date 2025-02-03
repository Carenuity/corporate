import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useContext, useEffect } from 'react';
import Banner from '../components/Banner';
import Link from 'next/link';
import { LanguageSwitchContext } from '../components/context/LanguageSwitch';
import Translatable from '../components/Translatable';

export default function Home({
  // eslint-disable-next-line no-unused-vars
  isHome,
  isMobile,
}: {
  isHome: boolean;
  isMobile: boolean;
}) {
  const { state } = useContext(LanguageSwitchContext);
  const bannerImage = 'img/banner.webp';

  // const secondaryBgImage = 'img/content/SQ-Panel-sideview.webp';

  useEffect(() => {
    if (document !== undefined) {
      const { jarallax, jarallaxVideo } = require('jarallax');
      jarallaxVideo();
      jarallax(document.querySelectorAll('.primaryCallToAction'), {
        speed: 0.2,
        videoSrc: 'https://youtu.be/AKU9gWlLrDY', //  'https://youtu.be/H8q8TKi6OZQ', 'https://www.youtube.com/watch?v=i3pwQ2BWTO8',
      });

      jarallax(document.querySelectorAll('.secondaryCallToAction'), {
        speed: 0.2,
        videoSrc: 'https://youtu.be/nCnTdzlanPo',
      });

      jarallax(document.querySelectorAll('.thirdCallToAction'), {
        speed: 0.2,
        videoSrc: 'https://youtu.be/kLtLz_UDwzY',
      });
    }
  }, []);

  return (
    <>
      <Translatable />
      <Head>
        <meta
          name="keywords"
          content="Carenuity ChipGlobe Electronics Embedded Systems"
        />
        <meta name="description" content="Real Estate Electronics Matter" />
        <title>Carenuity</title>
      </Head>

      {/* <!-- BANNER
        ================================================== --> */}
      <Banner
        bannerImage={bannerImage}
        slogan="Real Estate Electronics Matter"
        isMobile={isMobile}
        hasKickStarter={false}
      />
      {/* <!--
      <section
        className={`secondaryCallToAction jarallax p-0 top-position2 full-screen video-banner dark-overlay`}
        // secondary-video p-0 top-position1 full-screen video-banner dark-overlay
        // data-overlay-dark="65"
        style={{
          backgroundImage: `url(${secondaryBgImage})`,
        }}
        data-jarallax
        data-speed="0.8"
      ></section> --> */}

      <section className="container">
        <div
          className="e-card mb-6"
          style={{
            boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',

            maxHeight: '800px',
            padding: '20px',
          }}
        >
          <div className=" row ">
            <div className="col-md-8 ">
              <h5>
                {state === 'en' && (
                  <>The SQ-Panel shows the Air Quality level you breathe</>
                )}
                {state === 'de' && (
                  <>Das SQ-Panel zeigt die Luftqualität an, die Sie einatmen</>
                )}
              </h5>
              <p>
                {state === 'en' && (
                  <>
                    The SQ-Panel has built-in sensors for measuring air quality,
                    temperature, humidity, pressure, carbon dioxide, TVOC and
                    presence. The SQ-Panel connects to the Carenuity cloud via
                    the Carenuity Border Router, which acts as a gateway between
                    your home network and the internet. This enables you to
                    monitor the sensor values and define their threshold values
                    from anywhere, using the Carenuity Home app on your
                    smartphone.
                  </>
                )}

                {state === 'de' && (
                  <>
                    Das SQ-Panel verfügt über eingebaute Sensoren zur Messung
                    der Luftqualität, Temperatur, Feuchtigkeit, Druck,
                    Kohlendioxid, TVOC und Anwesenheit. Das SQ-Panel ist über
                    den Carenuity Border Router mit der Carenuity-Cloud
                    verbunden. Carenuity Border Router, der als Gateway zwischen
                    Ihrem Heimnetzwerk und dem Internet fungiert. So können Sie
                    die Sensorwerte überwachen Sensorwerte zu überwachen und
                    deren Schwellenwerte von überall aus festzulegen, mit der
                    Carenuity Home App auf Ihrem Smartphone.
                  </>
                )}
              </p>
              <p></p>
            </div>

            <div className="col-lg-4 mt-n1-9 ">
              <video
                src="/videos/content/sq-panel_on_table-stand.mp4"
                loop={true}
                autoPlay={true}
                muted
                className="mt-1-9 wow fadeInUp w-100"
                data-wow-delay="100ms"
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  height: '400',
                  animationName: 'fadeIn',
                }}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-2">
            <div
              className="e-card mb-6"
              style={{
                boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                maxHeight: '1000px',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/case/SQ-Panel_Quote_Patricia.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',

                  animationName: 'fadeIn',
                }}
              />
              <p
                style={{
                  padding: '10px',
                }}
              >
                {state === 'en' && (
                  <>
                    I support the Carenuity SQ-Panel for its impressive
                    features. The air quality monitoring, real-time alerts, and
                    remote access via the app are essential for keeping my
                    family healthy. The historical data and insights help me
                    ensure our living environment is safe and comfortable.
                    It&apos;s a smart choice for anyone who values home
                    wellness.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Ich unterstütze das Carenuity SQ-Panel aufgrund seiner
                    beeindruckenden Funktionen. Die Überwachung der
                    Luftqualität, Echtzeitwarnungen und der Fernzugriff über die
                    App sind für die Gesunderhaltung meiner Familie
                    unerlässlich. Die historischen Daten und Einblicke helfen
                    mir, unser Wohnumfeld Umgebung sicher und komfortabel ist.
                    Es ist eine kluge Wahl für jeden, der Wert auf Wellness zu
                    Hause legt.
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="col-md-6 ">
            <div
              className="e-card"
              style={{
                boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
                maxHeight: '1000px',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/case/SQ-Panel_Quote_Patric.png"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',

                  animationName: 'fadeIn',
                }}
              />
              <p
                style={{
                  padding: '10px',
                }}
              >
                {state === 'en' && (
                  <>
                    I back the Carenuity SQ-Panel for its top-notch features.
                    The comprehensive air quality monitoring, real-time alerts,
                    and remote access via the app help me maintain a healthy
                    home for my family. The historical data and insights are a
                    bonus, making it a smart investment for anyone serious about
                    home comfort and safety.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Ich unterstütze das Carenuity SQ-Panel wegen seiner
                    erstklassigen Eigenschaften. Das umfassende Überwachung der
                    Luftqualität, Echtzeit-Warnungen und Fernzugriff über die
                    App helfen mir, ein gesundes Zuhause für meine Familie. Die
                    historischen Daten und Einblicke sind ein Bonus und machen
                    es eine kluge Investition für jeden, der Wert auf Komfort
                    und Sicherheit in seinem Sicherheit.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>

        <div
          className="e-card mb-6"
          style={{
            boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
            maxHeight: '800px',
            padding: '20px',
          }}
        >
          <div className=" row ">
            <div
              className="col-md-4 "
              style={{
                alignContent: 'center',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/case/children01.png"
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

            <div className="col-md-8 ">
              <h5>{state === 'en' && <>Why choose SQ-Panel</>} </h5>
              {state === 'de' && <>Warum SQ-Panel wählen</>}
              <p>
                {' '}
                {state === 'en' && (
                  <>
                    The SQ-Panel comes with a smartphone app which lets you
                    monitor SQ-Panel sensor values from anywhere and get
                    notification incase the values change. It also has a sensor
                    that detects human presence in the room. Once you activate
                    your alarm you will be able to get an alert when a person is
                    detected.These are few reasons why SQ-Panel is beneficial.
                    Click on learn more and learn the 11 use cases you get by
                    the SQ-Panel
                  </>
                )}
                {state === 'de' && (
                  <>
                    Das SQ-Panel wird mit einer Smartphone-App geliefert, mit
                    der Sie die SQ-Panel-Sensorwerte von überall aus überwachen
                    und sich bei sich die Werte ändern. Außerdem verfügt es über
                    einen Sensor, der die menschliche Anwesenheit im Raum
                    erkennt. Sobald Sie Ihren Alarm aktivieren, werden Sie Dies
                    sind nur wenige Gründe, warum das SQ-Panel so nützlich ist.
                    Gründe, warum SQ-Panel vorteilhaft ist. Klicken Sie auf Mehr
                    erfahren und und erfahren Sie mehr über die 11
                    Anwendungsfälle, die Sie mit dem SQ-Panel erhalten
                  </>
                )}
              </p>

              <p>
                <strong>
                  {state === 'en' && (
                    <>
                      We provide 24/7 vital, environmental sensing & care, so
                      that you can see what no one else will see.
                    </>
                  )}
                  {state === 'de' && (
                    <>
                      Wir bieten rund um die Uhr lebenswichtige, umweltbezogene
                      Gefahrenerkennung und Vorsorge, damit Sie erkennnen
                      können, was man sonst nicht sehen kann.
                    </>
                  )}
                </strong>
              </p>

              <p className=" ">
                {!isMobile && (
                  <Link
                    href={'/sq-panel'}
                    className={'btn btn-lg btn-success rounded-pill'} // "btn-style2 primary wow fadeInUp p-3"
                  >
                    <span className="small">
                      {state === 'en' && <>Learn More</>}{' '}
                      {state === 'de' && <> Mehr erfahren</>}{' '}
                    </span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'/sq-panel'}
                    className={'btn btn-lg btn-success rounded-pill'} // "btn-style2 primary wow fadeInUp p-3"
                    // data-wow-delay="400ms"
                    // style={{
                    //   visibility: 'visible',
                    //   animationDelay: '400ms',
                    //   animationName: 'fadeInUp',
                    //   height: '3.5rem',
                    // }}
                  >
                    <span className="small">
                      {state === 'en' && <>Learn More</>}{' '}
                      {state === 'de' && <> Mehr erfahren</>}{' '}
                      {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                    </span>
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className=" mt-n1-9 ">
          {state === 'en' && (
            <>
              <video
                src="/videos/content/sq-panel_v.mp4"
                loop={true}
                autoPlay={true}
                muted
                className="mt-1-9 wow fadeInUp w-100"
                data-wow-delay="100ms"
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  height: '400',
                  animationName: 'fadeIn',
                }}
              />
            </>
          )}
          {state === 'de' && (
            <>
              <video
                src="/videos/content/sq-panelv01.mp4"
                loop={true}
                autoPlay={true}
                muted
                className="mt-1-9 wow fadeInUp w-100"
                data-wow-delay="100ms"
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  height: '400',
                  animationName: 'fadeIn',
                }}
              />
            </>
          )}
        </div>

        <div className=" mt-n1-9 mb-6 ">
          {state === 'en' && (
            <>
              <video
                src="/videos/content/sq-power01.mp4"
                loop={true}
                autoPlay={true}
                muted
                className="mt-1-9 wow fadeInUp w-100"
                data-wow-delay="100ms"
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  height: '400',
                  animationName: 'fadeIn',
                }}
              />
            </>
          )}
          {state === 'de' && (
            <>
              <video
                src="/videos/content/sq-power02.mp4"
                loop={true}
                autoPlay={true}
                muted
                className="mt-1-9 wow fadeInUp w-100"
                data-wow-delay="100ms"
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  height: '400',
                  animationName: 'fadeIn',
                }}
              />
            </>
          )}
        </div>
        {/* < hr className=" mb-6" />   */}

        <div className="row mb-1">
          <h4>
            {state === 'en' && (
              <>
                Some images showing the flush wall mounting and the table stand
                for the SQ-Panel
              </>
            )}
            {state === 'de' && (
              <>
                Einige Bilder zeigen die wandbündige Anbringung und den
                Tischständer für das SQ-Panel
              </>
            )}
          </h4>
          <p>
            {' '}
            {state === 'en' && (
              <>
                Get one and improve the air quality, comfort in your home and
                breathe healthy air. It will also connect you with your loved
                ones and know that they are safe and well ventilated even from a
                distance.
              </>
            )}
            {state === 'de' && (
              <>
                Holen Sie sich eine und verbessern Sie die Luftqualität, den
                Komfort in Ihrem Haus und atmen Sie gesunde Luft. Es wird Sie
                auch mit Ihren Lieben verbinden und wissen, dass sie sicher und
                gut belüftet sind, auch aus der Entfernung.
              </>
            )}
          </p>

          <div className="col-md-6 mb-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/content/case/home.png"
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

          <div className="col-md-6 mb-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/content/case/case6.png"
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
        </div>
        <hr className=" mb-3" />
        <div className=" mb-2">
          <div className=" mb-2">
            <p>
              {state === 'en' && (
                <>
                  Matter allows you to integrate your sensor device with up to
                  five of the most popular platforms at once, such as
                  Amazon&apos;s Alexa, Apple&apos;s Home, Google Home,
                  Samsung&apos;s SmartThings, or Home Assistant (HA).
                </>
              )}
              {state === 'de' && (
                <>
                  Matter ermöglicht Ihnen die Integration Ihres Sensorgeräts in
                  bis zu fünf der beliebtesten Plattformen auf einmal, wie
                  Amazon&apos;s Alexa, Apple&apos;s Home, Google Home,
                  Samsung&apos;s SmartThings, oder Home Assistant (HA).
                </>
              )}
            </p>
          </div>

          <div
            className="e-card mb-6"
            style={{
              boxShadow: '0px 0px 15px 0px  hsla(0, 0%, 90%)',
              maxHeight: '800px',
              padding: '20px',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/content/home/matter.png"
              className="wow fadeInUp"
              data-wow-delay="100ms"
              alt="..."
              style={{
                visibility: 'visible',
                width: '1920px',
                animationDelay: '100ms',
                animationName: 'fadeIn',
              }}
            />
          </div>
        </div>
        <div className="col-lg-12 mt-n1-9 mb-2">
          {state === 'en' && (
            <>
              <video
                src="/videos/content/das-sq-panel.mp4"
                loop={true}
                autoPlay={true}
                muted
                className="mt-1-9 wow fadeInUp w-100"
                data-wow-delay="100ms"
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  height: '400',
                  animationName: 'fadeIn',
                }}
              />
            </>
          )}
          {state === 'de' && (
            <>
              <video
                src="/videos/content/das-sq-panel2.mp4"
                loop={true}
                autoPlay={true}
                muted
                className="mt-1-9 wow fadeInUp w-100"
                data-wow-delay="100ms"
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  height: '400',
                  animationName: 'fadeIn',
                }}
              />
            </>
          )}
        </div>
        <div className="col-lg-12 mt-n1-9 mb-4">
          <video
            src="/videos/content/sq-panel2.mp4"
            loop={true}
            autoPlay={true}
            muted
            className="mt-1-9 wow fadeInUp w-100"
            data-wow-delay="100ms"
            style={{
              visibility: 'visible',
              animationDelay: '100ms',
              height: '400',
              animationName: 'fadeIn',
            }}
          />
        </div>
        <p style={{ textAlign: 'center' }}>
          {!isMobile && (
            <Link
              href={'/sq-panel'}
              className={'btn btn-lg btn-success rounded-pill'} // "btn-style2 primary wow fadeInUp p-3"
            >
              <span className="small">
                {state === 'en' && <>Learn More</>}{' '}
                {state === 'de' && <> Mehr erfahren</>}{' '}
              </span>
            </Link>
          )}

          {isMobile && (
            <a
              href={'/sq-panel'}
              className={'btn btn-lg btn-success rounded-pill'} // "btn-style2 primary wow fadeInUp p-3"
            >
              <span className="small">
                {state === 'en' && <>Learn More</>}{' '}
                {state === 'de' && <> Mehr erfahren</>}{' '}
                {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
              </span>
            </a>
          )}
        </p>
      </section>

      {/* <section
        className={`thirdCallToAction jarallax p-0 top-position2 full-screen video-banner dark-overlay`}
        style={{
          backgroundImage: `url(${secondaryBgImage})`,
        }}
        data-jarallax
        data-speed="0.8"
      ></section> */}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      isHome: true,
    },
  };
};
