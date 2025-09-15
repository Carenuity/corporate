import Head from 'next/head';
import React from 'react';
import PageTitle from '../components/PageTitle';
import Link from 'next/link';
import ServiceHOC from '../components/hoc/ServiceHOC';
import { servicesUrls } from '../utils/constants';

const Index = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'Help Center';
  return (
    <>
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
            <div className='row'>
                <h4>Troubleshooting</h4>
                <p>This section helps you quickly identify and resolve common issues with your SQ-Panel and Carenuity App. 
                    Each flow guides you step by step. If the issue persists, you&apos;ll find an escalation checklist and support options at the end.</p>
            </div>
          <div>
            <h4>1. Connectivity Issues</h4>
<ol>
  <li>Is your SQ-Panel powered on?
    <ul>
      <li>No → Check USB power adapter and cable. Try another socket.</li>
      <li>Yes → Continue.</li>
    </ul>
  </li>
  <li>Does the Border Router show as online in your app?
    <ul>
      <li>No → Restart the Border Router. Check your Wi-Fi connection.</li>
      <li>Yes → Continue.</li>
    </ul>
  </li>
  <li>Does the SQ-Panel LED blink during pairing?
    <ul>
      <li>No → Hold the reset button for 5 seconds and retry.</li>
      <li>Yes → Continue.</li>
    </ul>
  </li>
  <li>Still not connecting?
    <ul>
      <li>Try pairing via QR code again.</li>
      <li>Move the device closer to the Border Router (&lt;5 m for setup).</li>
    </ul>
  </li>
</ol>
<p><strong>If unresolved:</strong> Collect serial number (back of device), app version, and firmware version, then open a ticket.</p>

<h4>2. App Sync Problems</h4>
<ol>
  <li>Are measurements visible on the SQ-Panel but not in the app?
    <ul>
      <li>No → Device might be offline (see “Connectivity”).</li>
      <li>Yes → Continue.</li>
    </ul>
  </li>
  <li>Is your app up to date?
    <ul>
      <li>No → Update via App Store / Google Play.</li>
      <li>Yes → Continue.</li>
    </ul>
  </li>
  <li>Log out of the app and log in again.</li>
  <li>If data still does not sync → reinstall the app.</li>
</ol>
<p><strong>If unresolved:</strong> Provide screenshots, app version, and date/time of failed sync when contacting support.</p>

<h4>3. Sensor Values Look Wrong</h4>
<ol>
  <li>Temperature/Humidity out of expected range?
    <ul>
      <li>Device may be near heat sources, direct sunlight, or draft. Move to central location.</li>
    </ul>
  </li>
  <li>CO₂ readings too high indoors?
    <ul>
      <li>Cross-check with another calibrated meter if available.</li>
      <li>Ensure no nearby CO₂ sources (candles, stoves, many people).</li>
    </ul>
  </li>
  <li>VOC values high after cleaning/painting?
    <ul>
      <li>This is expected; values normalize after airing out.</li>
    </ul>
  </li>
</ol>
<p><strong>If unresolved:</strong> Provide 2–3 sample values, room type, and environment conditions in your support ticket.</p>

<h4>4. Alarms Not Triggering</h4>
<ol>
  <li>Check if alerts are enabled in the app (Settings → Notifications).</li>
  <li>Has the threshold been reached?
    <ul>
      <li>Example: CO₂ alarm triggers &gt;1000 ppm (customizable).</li>
    </ul>
  </li>
  <li>Is “Do Not Disturb” mode active on your phone?</li>
  <li>Restart the app and re-test alarm with a manual threshold.</li>
</ol>
<p><strong>If unresolved:</strong> Provide screenshots of alarm settings and app notification settings.</p>

<h4>5. Firmware Updates</h4>
<ol>
  <li>Does the app show an available firmware update?
    <ul>
      <li>No → Your device is up to date.</li>
      <li>Yes → Continue.</li>
    </ul>
  </li>
  <li>Place SQ-Panel within 3 m of Border Router.</li>
  <li>Keep app open until update completes.</li>
  <li>If update fails: restart device and retry once.</li>
</ol>
<p><strong>If unresolved:</strong> Send device serial number, firmware version (Settings → Device Info), and app version to support.</p>

<h4>Escalation Checklist</h4>
<p>Before contacting Carenuity Support, please collect:</p>
<ul>
  <li>Device serial number (back of panel)</li>
  <li>App version (Settings → About)</li>
  <li>Firmware version (Settings → Device Info)</li>
  <li>Border Router model and firmware version</li>
  <li>Description of issue, steps already tried, and screenshots if possible</li>
</ul>

<h4>Contact Support</h4>
<p>If none of the above steps solved your issue:</p>
<ul>
  
  <li><strong>Email:</strong> <a href="mailto:support@carenuity.com">info@carenuity.com</a></li>
  <li><strong>Phone:</strong> (+49) 89-1222469-40 (Mon–Fri, 9:00–17:00 CET)</li>
</ul>
<p>We aim to respond within 24 h (working days).</p>

          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHOC(Index, {
  servicesCategoryUrls: servicesUrls.helpcenter,
  pageUrl: 'help-center',
  pageTitle: 'Troubleshooting',
  serviceCategory: 'Get Help',
});
