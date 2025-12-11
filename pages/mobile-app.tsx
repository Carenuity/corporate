import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import ServiceHOC from '../components/hoc/ServiceHOC';
import { servicesUrls } from '../utils/constants';
import { LanguageSwitchContext } from '../components/context/LanguageSwitch';
import Translatable from '../components/Translatable';
import { useContext } from 'react';
const Index = ({ isMobile }: { isMobile: boolean }) => {
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
          <div>
            <h4>
              {state === 'en' && <>Account & App</>}
              {state === 'de' && <>Konto & App</>}
            </h4>

            <p>
              {state === 'en' && (
                <>
                  The Carenuity App allows you to manage your SQ-Panel, monitor
                  sensor data, configure alerts, and share access with family or
                  colleagues.
                </>
              )}
              {state === 'de' && (
                <>
                  Die Carenuity App ermöglicht es Ihnen, Ihr SQ-Panel zu
                  verwalten, Sensordaten zu überwachen, Alarme zu konfigurieren
                  und den Zugriff mit Familie oder Kollegen zu teilen.
                </>
              )}
            </p>

            <h4>
              {state === 'en' && <>1. Account Setup</>}
              {state === 'de' && <>1. Konto einrichten</>}
            </h4>

            <ol>
              <li>
                <strong>
                  {state === 'en' && <>Download & Install the App</>}
                  {state === 'de' && <>App herunterladen & installieren</>}
                </strong>

                <ul>
                  <li>
                    <a
                      href="https://apps.apple.com/ie/app/carenuity/id6472718918"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <u>
                        {state === 'en' && <>App Store (iOS)</>}
                        {state === 'de' && <>App Store (iOS)</>}
                      </u>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.carenuity.home"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <u>
                        {state === 'en' && <>Google Play (Android)</>}
                        {state === 'de' && <>Google Play (Android)</>}
                      </u>
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <strong>
                  {state === 'en' && <>Create an Account</>}
                  {state === 'de' && <>Konto erstellen</>}
                </strong>

                <ul>
                  <li>
                    {state === 'en' && (
                      <>
                        Provide email, password, and accept Terms & Conditions.
                      </>
                    )}
                    {state === 'de' && (
                      <>E-Mail, Passwort angeben und AGB akzeptieren.</>
                    )}
                  </li>
                  <li>
                    {state === 'en' && <>Verify email via confirmation link.</>}
                    {state === 'de' && (
                      <>E-Mail über Bestätigungslink verifizieren.</>
                    )}
                  </li>
                </ul>
              </li>

              <li>
                <strong>
                  {state === 'en' && <>Log In</>}
                  {state === 'de' && <>Anmelden</>}
                </strong>

                <ul>
                  <li>
                    {state === 'en' && (
                      <>Enter credentials to access your dashboard.</>
                    )}
                    {state === 'de' && (
                      <>
                        Geben Sie Ihre Zugangsdaten ein, um Ihr Dashboard zu
                        öffnen.
                      </>
                    )}
                  </li>
                </ul>
              </li>
            </ol>

            <h4>
              {state === 'en' && <>2. Permissions & Roles</>}
              {state === 'de' && <>2. Berechtigungen & Rollen</>}
            </h4>

            <ul>
              <li>
                <strong>
                  {state === 'en' && <>Owner:</>}
                  {state === 'de' && <>Eigentümer:</>}
                </strong>
                {state === 'en' && (
                  <> Full control of devices, alerts, and user management.</>
                )}
                {state === 'de' && (
                  <>
                    {' '}
                    Vollständige Kontrolle über Geräte, Alarme und
                    Benutzerverwaltung.
                  </>
                )}
              </li>

              <li>
                <strong>
                  {state === 'en' && <>Member (full access):</>}
                  {state === 'de' && <>Mitglied (Vollzugriff):</>}
                </strong>
                {state === 'en' && (
                  <> Can view and modify devices and settings.</>
                )}
                {state === 'de' && (
                  <> Kann Geräte und Einstellungen anzeigen und ändern.</>
                )}
              </li>

              <li>
                <strong>
                  {state === 'en' && <>Member (read-only):</>}
                  {state === 'de' && <>Mitglied (nur Lesen):</>}
                </strong>
                {state === 'en' && (
                  <> Can view sensor data but cannot modify settings.</>
                )}
                {state === 'de' && (
                  <>
                    {' '}
                    Kann Sensordaten einsehen, aber keine Einstellungen ändern.
                  </>
                )}
              </li>
            </ul>

            <p>
              <strong>
                {state === 'en' && <>Manage Permissions:</>}
                {state === 'de' && <>Berechtigungen verwalten:</>}
              </strong>
            </p>

            <ul>
              <li>
                {state === 'en' && (
                  <>
                    Open app → <em>Settings → Users & Permissions</em>.
                  </>
                )}
                {state === 'de' && (
                  <>
                    App öffnen →{' '}
                    <em>Einstellungen → Benutzer & Berechtigungen</em>.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && <>Invite users via email; assign role.</>}
                {state === 'de' && (
                  <>Benutzer per E-Mail einladen; Rolle zuweisen.</>
                )}
              </li>
            </ul>

            <h4>
              {state === 'en' && <>3. Multi-User Support</>}
              {state === 'de' && <>3. Mehrbenutzerunterstützung</>}
            </h4>

            <ul>
              <li>
                {state === 'en' && (
                  <>
                    Multiple users can monitor the same SQ-Panel simultaneously.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Mehrere Benutzer können dasselbe SQ-Panel gleichzeitig
                    überwachen.
                  </>
                )}
              </li>

              <li>
                {state === 'en' && (
                  <>Alerts and notifications are sent to all permitted users.</>
                )}
                {state === 'de' && (
                  <>
                    Alarme und Benachrichtigungen werden an alle berechtigten
                    Benutzer gesendet.
                  </>
                )}
              </li>

              <li>
                {state === 'en' && (
                  <>
                    Each user has a personal login; activities are logged for
                    audit.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Jeder Benutzer hat einen eigenen Login; Aktivitäten werden
                    protokolliert.
                  </>
                )}
              </li>
            </ul>

            <h4>
              {state === 'en' && <>4. Data Privacy</>}
              {state === 'de' && <>4. Datenschutz</>}
            </h4>

            <ul className="mb-6">
              <li>
                {state === 'en' && (
                  <>
                    All sensor and account data are stored securely on{' '}
                    <strong>European servers</strong>.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Alle Sensor- und Kontodaten werden sicher auf{' '}
                    <strong>europäischen Servern</strong> gespeichert.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>Users control which devices and data are shared.</>
                )}
                {state === 'de' && (
                  <>
                    Benutzer bestimmen, welche Geräte und Daten geteilt werden.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    Compliance with GDPR ensures personal information is
                    protected.
                  </>
                )}
                {state === 'de' && (
                  <>
                    DSGVO-Konformität gewährleistet den Schutz persönlicher
                    Daten.
                  </>
                )}
              </li>
              <li>
                {state === 'en' && (
                  <>
                    Data sharing with third-party apps requires explicit
                    consent.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Das Teilen von Daten mit Drittanbieter-Apps erfordert eine
                    ausdrückliche Zustimmung.
                  </>
                )}
              </li>
            </ul>

            <div style={{ textAlign: 'center' }}>
              <p>
                {!isMobile && (
                  <Link
                    href={'/carenuity-app-guide'}
                    className={'btn btn-lg btn-success rounded-pill'}
                  >
                    <span className="small">
                      {state === 'en' && <>Mobile App User Guide</>}
                      {state === 'de' && <>Mobile App Benutzerhandbuch</>}
                    </span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'/carenuity-app-guide'}
                    className={'btn btn-lg btn-success rounded-pill'}
                  >
                    <span className="small">
                      {state === 'en' && <>Mobile App User Guide</>}
                      {state === 'de' && <>Mobile App Benutzerhandbuch</>}
                    </span>
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHOC(Index, {
  servicesCategoryUrls: servicesUrls.helpcenter,
  pageUrl: 'help-center',
  pageTitle: 'Mobile App & Account',
  serviceCategory: 'Get Help',
});
