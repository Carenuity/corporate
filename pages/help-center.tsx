import Head from 'next/head';
import React from 'react';
import ServiceHOC from '../components/hoc/ServiceHOC';
import { servicesUrls } from '../utils/constants';
import { LanguageSwitchContext } from '../components/context/LanguageSwitch';
import Translatable from '../components/Translatable';
import { useContext } from 'react';
import Link from 'next/link';

const Index = () => {
  const { state } = useContext(LanguageSwitchContext);
  const pageTitle = 'Help Center';
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

      <section className="overflow-hidden py-3">
        <div className="container position-relative z-index-3">
          <h4 className="mb-4">SQ-Panel</h4>
          <div className="row">
            <div className="col-lg-4">
              <Link href="/get-started">
                <div
                  className="e-card mb-4"
                  style={{
                    boxShadow: '3px 3px 15px 3px hsla(0, 0%, 80%)',
                    height: '100px',
                    padding: '15px',
                    backgroundColor: '#198754',
                    color: '#eeeeee',
                    justifyContent: 'center',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h5 style={{ color: '#eeeeee' }}>
                    {state === 'en' && <>Get Started (SQ-Panel)</>}
                    {state === 'de' && <>Erste Schritte (SQ-Panel)</>}
                  </h5>
                  <p></p>
                </div>
              </Link>
            </div>

            <div className="col-lg-4">
              <Link href="/troubleshooting">
                <div
                  className="e-card mb-4"
                  style={{
                    boxShadow: '3px 3px 15px 3px hsla(0, 0%, 80%)',
                    height: '100px',
                    padding: '15px',
                    backgroundColor: '#198754',
                    color: '#eeeeee',
                    justifyContent: 'center',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h5 style={{ color: '#eeeeee' }}>
                    {state === 'en' && <>Troubleshooting</>}
                    {state === 'de' && <>Fehlerbehebung</>}
                  </h5>
                </div>
              </Link>
            </div>

            <div className="col-lg-4">
              <Link href="/mobile-app">
                <div
                  className="e-card mb-4"
                  style={{
                    boxShadow: '3px 3px 15px 3px hsla(0, 0%, 80%)',
                    height: '100px',
                    padding: '15px',
                    backgroundColor: '#198754',
                    color: '#eeeeee',
                    textAlign: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h5 style={{ color: '#eeeeee' }}>
                    {state === 'en' && <>Mobile App</>}
                    {state === 'de' && <>Mobile App</>}
                  </h5>
                </div>
              </Link>
            </div>

            <div className="col-lg-4">
              <Link href="/features-and-use-cases">
                <div
                  className="e-card mb-4"
                  style={{
                    boxShadow: '3px 3px 15px 3px hsla(0, 0%, 80%)',
                    height: '100px',
                    padding: '15px',
                    backgroundColor: '#198754',
                    color: '#eeeeee',
                    textAlign: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h5 style={{ color: '#eeeeee' }}>
                    {state === 'en' && <>Features & Use Cases</>}
                    {state === 'de' && <>Funktionen & Anwendungsfälle</>}
                  </h5>
                </div>
              </Link>
            </div>

            <div className="col-lg-4">
              <Link href="/faq">
                <div
                  className="e-card mb-4"
                  style={{
                    boxShadow: '3px 3px 15px 3px hsla(0, 0%, 80%)',
                    height: '100px',
                    padding: '15px',
                    backgroundColor: '#198754',
                    color: '#eeeeee',
                    textAlign: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h5 style={{ color: '#eeeeee' }}>
                    {state === 'en' && <>FAQ</>}
                    {state === 'de' && <>FAQ</>}
                  </h5>
                </div>
              </Link>
            </div>

            <div className="col-lg-4">
              <Link href="/maintenance-and-safety">
                <div
                  className="e-card mb-4"
                  style={{
                    boxShadow: '3px 3px 15px 3px hsla(0, 0%, 80%)',
                    height: '100px',
                    padding: '15px',
                    backgroundColor: '#198754',
                    color: '#eeeeee',
                    textAlign: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h5 style={{ color: '#eeeeee' }}>
                    {state === 'en' && <>Maintenance & Safety</>}
                    {state === 'de' && <>Wartung & Sicherheit</>}
                  </h5>
                </div>
              </Link>
            </div>

            <div className="col-lg-12">
              <Link href="/product/sq-panel/documentation">
                <div
                  className="e-card mb-4"
                  style={{
                    boxShadow: '3px 3px 15px 3px hsla(0, 0%, 80%)',
                    height: '100px',
                    padding: '15px',
                    backgroundColor: '#198754',
                    color: '#eeeeee',
                    textAlign: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h5 style={{ color: '#eeeeee' }}>
                    {state === 'en' && <>Documentation</>}
                    {state === 'de' && <>Dokumentation</>}
                  </h5>
                </div>
              </Link>
            </div>
          </div>

          <div
            className="e-card mb-4"
            style={{
              boxShadow: '3px 3px 15px 3px hsla(0, 0%, 80%)',
              maxHeight: '500px',
              padding: '15px',
            }}
          >
            <p>
              {state === 'en' && (
                <>If you haven&apos;t received help, feel free to contact us:</>
              )}
              {state === 'de' && (
                <>
                  Wenn Sie keine Hilfe erhalten haben, können Sie uns gerne
                  kontaktieren:
                </>
              )}
            </p>

            <ul>
              <li>
                <strong>Email:</strong>{' '}
                <Link href="mailto:support@carenuity.com">
                  info@carenuity.com
                </Link>
              </li>
              <li>
                <strong>
                  {state === 'en' && <>Phone:</>}
                  {state === 'de' && <>Telefon:</>}
                </strong>{' '}
                (+49) 89-1222469-40 (Mon–Fri, 9:00–17:00 CET)
              </li>
            </ul>

            <p>
              {state === 'en' && <>Or contact us through our </>}
              {state === 'de' && <>Oder kontaktieren Sie uns über unsere </>}

              <Link href="/contact-us">
                <u>
                  {state === 'en' && <>contact page.</>}
                  {state === 'de' && <>Kontaktseite.</>}
                </u>
              </Link>

              {state === 'en' && (
                <> We aim to respond within 24 h (working days).</>
              )}
              {state === 'de' && (
                <> Wir antworten innerhalb von 24 Stunden (werktags).</>
              )}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHOC(Index, {
  servicesCategoryUrls: servicesUrls.helpcenter,
  pageUrl: 'help-center',
  pageTitle: 'Help Center',
  serviceCategory: 'Get Help',
});
