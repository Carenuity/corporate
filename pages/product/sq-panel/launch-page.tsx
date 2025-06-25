import React from 'react';
import { useContext } from 'react';
import PageTitle from '../components/PageTitle';
import { LanguageSwitchContext } from '../components/context/LanguageSwitch';
import Head from 'next/head';
import Link from 'next/link';
import SubscriptionWidget from '../components/SubscriptionWidget';
import Translatable from '../components/Translatable';

// eslint-disable-next-line no-unused-vars
const Page = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'SQ-Panel Launch';
  const { state } = useContext(LanguageSwitchContext);
  return (
    <>
      <Translatable />
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

      <section className="container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <h5 className=" mb-1">
                {state === 'en' && <>Carenuity SQ-Panel Launch</>}
                {state === 'de' && <>Einführung des Carenuity SQ-Panels</>}
              </h5>
              <h1>
                {state === 'en' && (
                  <>
                    The world&apos;s first smart sensor display with built-in
                    sensors and Matter support.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Das weltweit erste Smart-Sensor-Display mit integrierten
                    Sensoren und Matter-Unterstützung.
                  </>
                )}
              </h1>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/sq-panel-plus/matter.png"
                className=" wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
            </div>
            <div className="col-lg-1 mb-4"></div>
            <div className="col-lg-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/sq-panel-plus/sq-panel.png"
                className=" wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
            </div>

            <h4 className="">
              {state === 'en' && <>The SQ-Panel is a perfect match for </>}
              {state === 'de' && (
                <>Das SQ-Panel ist das perfekte Werkzeug für</>
              )}
            </h4>

            <ul className="col-lg-6 mb-20">
              <li>
                {state === 'en' && (
                  <>
                    <Link href="/product/sq-panel/property-managers">
                      <u>Facility managers & property managers</u>
                    </Link>
                  </>
                )}
                {state === 'de' && (
                  <>
                    <Link href="/product/sq-panel/property-managers">
                      <u>Facility Manager & Immobilienverwalter</u>
                    </Link>
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    <Link href="/product/sq-panel/smart-home-enthusiasts">
                      <u>Smart home enthusiasts</u>
                    </Link>
                  </>
                )}
                {state === 'de' && (
                  <>
                    <Link href="/product/sq-panel/smart-home-enthusiasts">
                      <u>Smart-Home-Enthusiasten</u>
                    </Link>
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    <Link href="/product/sq-panel/commercial-operators">
                      <u>Office/commercial operators</u>
                    </Link>
                  </>
                )}
                {state === 'de' && (
                  <>
                    <Link href="/product/sq-panel/commercial-operators">
                      <u>Büro-/Gewerbebetreiber</u>
                    </Link>
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    <Link href="/product/sq-panel/smart-care-providers">
                      <u>Care facilities / smart care providers</u>
                    </Link>
                  </>
                )}
                {state === 'de' && (
                  <>
                    <Link href="/product/sq-panel/smart-care-providers">
                      <u>Pflegeeinrichtungen / Smart Care Anbieter</u>
                    </Link>
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    <Link href="/product/sq-panel/health-conscious-longevity-enthusiasts">
                      <u>Private households with a focus on health</u>
                    </Link>
                  </>
                )}
                {state === 'de' && (
                  <>
                    <Link href="/product/sq-panel/health-conscious-longevity-enthusiasts">
                      <u>Privathaushalte mit Fokus auf Gesundheit</u>
                    </Link>
                  </>
                )}
              </li>
            </ul>

            <div
              id="subscribe"
              className=" mb-4"
              style={{ textAlign: 'center' }}
            >
              <h2>
                {state === 'en' && (
                  <>
                    Coming soon - subscribe to the waiting list for early bird
                    discount!
                  </>
                )}
                {state === 'de' && (
                  <>
                    Demnächst erhältlich - Tragen Sie sich in die Warteliste ein
                    und sichern Sie sich den Frühbucherrabatt!
                  </>
                )}
              </h2>
              <p>
                {state === 'en' && (
                  <>Sign up for exclusive product launch discounts!</>
                )}
                {state === 'de' && (
                  <>
                    Melden Sie sich für exklusive Produkteinführungsrabatte an!
                  </>
                )}
              </p>
            </div>
            <SubscriptionWidget categoryId={1} />
            {/* <form
              method="post"
              className=" mb-20"
              style={{ textAlign: 'center' }}
            >
              <label
                className={' rounded-pill'}
                style={{ backgroundColor: '#D3D3D3' }}
                htmlFor="subscriber-email"
              >
                <input
                  type="email"
                  id="subscriber-email"
                  name="subscriber-email"
                  placeholder="Enter your email"
                  className={'btn rounded-pill'}
                  style={{
                    backgroundColor: '#D3D3D3',
                    textAlign: 'left',
                    width: '450px',
                    border: 'none',
                  }}
                  required
                ></input>
                <button
                  type="submit"
                  className={'btn btn-lg btn-success rounded-pill'}
                  style={{
                    width: '150px',
                  }}
                >
                  {' '}
                  Subcribe
                </button>
              </label>
            </form> */}
            <div className="col-lg-5 mb-6" style={{ textAlign: 'center' }}>
              <div className=" mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/sq-panel-plus/easy.png"
                  className=" wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    height: '60px',
                    animationName: 'fadeIn',
                  }}
                />{' '}
              </div>
              <h4>
                {state === 'en' && <>Super easy to use</>}
                {state === 'de' && <>Super einfach zu bedienen</>}
              </h4>
              <p>
                {state === 'en' && (
                  <>
                    Just unbox and power it. It automatically comes with proper
                    settings, shows the values and alarms, which you can
                    customise at any time.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Einfach auspacken und einschalten. Es kommt automatisch mit
                    richtig Einstellungen, zeigt die Werte und Alarme an, die
                    Sie anpassen können jederzeit.
                  </>
                )}
              </p>
            </div>
            <div className=" col-lg-1 mb-6"></div>
            <div className="col-lg-5 mb-5" style={{ textAlign: 'center' }}>
              <div className=" mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/sq-panel-plus/acts.png"
                  className=" wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    height: '60px',
                    animationName: 'fadeIn',
                  }}
                />{' '}
              </div>
              <h4>
                {state === 'en' && <>Option for Home Assistant (HA)</>}
                {state === 'de' && <>Option für Home Assistant (HA)</>}
              </h4>
              <p>
                {state === 'en' && (
                  <>
                    {' '}
                    No extra Hub needed. The SQ-Connector with HA can automate
                    your home based on sunrise/sunset, temperature, event
                    triggering, and more.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Kein zusätzlicher Hub erforderlich. Der SQ-Connector mit HA
                    kann Ihre automatisieren Zuhause basierend auf
                    Sonnenaufgang/-untergang, Temperatur, Ereignisauslösung usw
                    mehr.
                  </>
                )}
              </p>
            </div>

            <div className="col-lg-5 mb-6" style={{ textAlign: 'center' }}>
              <div className="  mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/sq-panel-plus/matter3.png"
                  className=" wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    height: '60px',
                    animationName: 'fadeIn',
                  }}
                />{' '}
              </div>
              <h4>
                {state === 'en' && <>Supports Matter</>}
                {state === 'de' && <>Unterstützt Materie</>}
              </h4>
              <p>
                {state === 'en' && (
                  <>
                    Can be used with Google, Samsung, Home Assistant or Apple
                    Home for even more smart home magic.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Kann mit Google, Samsung, Home Assistant oder Apple Home
                    verwendet werden für noch mehr Smart-Home-Zauber.
                  </>
                )}
              </p>
            </div>
            <div className=" col-lg-1 mb-6"></div>
            <div className="col-lg-5 mb-6" style={{ textAlign: 'center' }}>
              <div className="  mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/sq-panel-plus/SwitchBot.png"
                  className=" wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    height: '60px',
                    animationName: 'fadeIn',
                  }}
                />{' '}
              </div>
              <h4>
                {state === 'en' && <>Part of the Carenuity Platform</>}
                {state === 'de' && <>Teil der Carenuity-Plattform</>}
              </h4>
              <p>
                {state === 'en' && (
                  <>
                    Can be paired with more devices like the planned
                    Particle-Matter Sensor or the C3-Mini Sensors to provide you
                    with more smart home solutions.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Kann mit weiteren Geräten wie dem geplanten Particle-Matter
                    gekoppelt werden Sensor oder die C3-Mini-Sensoren, um Ihnen
                    mehr Intelligenz zu bieten Heimlösungen.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
