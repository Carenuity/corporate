import Head from 'next/head';
import React from 'react';
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
          <p>
            The Carenuity SQ-Panel continuously monitors your indoor environment
            using its integrated sensor suite. Data is processed in real time,
            visualized in the app, and can trigger alerts or smart home actions.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="e-card mb-4 "
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '300px',
                  padding: '15px',
                }}
              >
                <h6>1. Temperature</h6>
                <hr />
                <ul>
                  <li>Range: 0 – 50 °C</li>
                  <li>Accuracy: ±0.3 °C (typical)</li>
                  <li>Default comfort range: 20 – 24 °C</li>
                  <li>
                    Alerts: triggered if temperature leaves comfort range
                    (customizable in app)
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="e-card mb-4 "
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '300px',
                  padding: '15px',
                }}
              >
                <h6>2. Relative Humidity (RH)</h6>
                <hr />
                <ul>
                  <li>Range: 10 – 90 %</li>
                  <li>Accuracy: ±2 % RH</li>
                  <li>Comfort range: 40 – 60 % RH</li>
                  <li>
                    Alerts: below 30 % (dry air, risk of irritation), above 70 %
                    (risk of mold)
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="e-card mb-4 "
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '300px',
                  padding: '15px',
                }}
              >
                <h6>3. Air Pressure</h6>
                <hr />
                <ul>
                  <li>Range: 300 – 1100 hPa</li>
                  <li>Accuracy: ±1 hPa</li>
                  <li>
                    Use case: weather changes, ventilation status, altitude
                    correction
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="e-card mb-4 "
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '300px',
                  padding: '15px',
                }}
              >
                <h6>4.TVOC (Total Volatile Organic Compounds)</h6>
                <hr />
                <ul>
                  <li>Range: 0 – 60,000 ppb</li>
                  <li>Indicator levels:</li>
                  <ul>
                    <li>Range: 0 – 220 ppb = Excellent</li>
                    <li>221 – 660 ppb = Good</li>
                    <li>661 – 2200 ppb = Moderate</li>
                    <li>&gt; 2200 ppb = Poor, consider airing out</li>
                  </ul>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="e-card mb-4 "
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '300px',
                  padding: '15px',
                }}
              >
                <h6>5.Air Quality Index (AQI)</h6>
                <hr />
                <ul>
                  <li>Derived from CO₂ + TVOC</li>
                  <li>Scale: 1 (Excellent) – 5 (Poor)</li>
                  <li>AQI displayed in app with color codes (green → red)</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="e-card mb-4 "
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '300px',
                  padding: '15px',
                }}
              >
                <h6>6.Presence Detection</h6>
                <hr />
                <ul>
                  <li>Based on infrared and motion sensing</li>
                  <li>Detects movement within ~5 m range</li>
                  <li>
                    Used for adaptive monitoring and automation (e.g., only
                    trigger alerts when room is occupied)
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="e-card mb-6 "
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '290px',
                  padding: '15px',
                }}
              >
                <h6>7.Carbon Dioxide (CO₂)</h6>
                <hr />

                <ul>
                  <li>Range: 400 – 5000 ppm</li>
                  <li>Accuracy: ±50 ppm ±3 % of reading</li>
                  <li>Thresholds:</li>

                  <ul>
                    <li>&lt; 800 ppm = Good air quality</li>
                    <li>800 – 1000 ppm = Moderate</li>
                    <li>&gt; 1000 ppm = Poor, ventilation required</li>
                    <li>&gt; 1500 ppm = Very poor, alert issued</li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h4>Real-Time Alerts</h4>
            <ul>
              <li>
                Thresholds are pre-set but can be customized per user profile.
              </li>
              <li>
                Alerts appear in the Carenuity App and can optionally trigger
                push notifications or connected smart home actions (via Matter).
              </li>
              <li>
                Example: “CO₂ exceeded 1000 ppm – please ventilate your room.”
              </li>
            </ul>

            <h4>History & Trends</h4>
            <ul>
              <li>Sampling interval: every 30 s (default, adjustable).</li>
              <li>App dashboard: shows 24h, 7-day, and 30-day views.</li>
              <li>Export: CSV download for detailed analysis (upcoming).</li>
              <li>
                Benefits: identify patterns (e.g., high CO₂ during office hours,
                dry air at night).
              </li>
            </ul>

            <h4>Example Use Cases</h4>
            <ul>
              <li>
                <strong>Healthy Living:</strong> get CO₂ alerts when air gets
                stale in bedrooms or offices.
              </li>
              <li>
                <strong>Energy Savings:</strong> optimize heating/cooling by
                tracking temperature & humidity.
              </li>
              <li>
                <strong>Mold Prevention:</strong> receive warnings when humidity
                stays above 70 %.
              </li>
              <li>
                <strong>Workplace Safety:</strong> monitor CO₂ levels in meeting
                rooms to ensure concentration.
              </li>
              <li>
                <strong>Children&apos;s Rooms:</strong> alerts for high TVOC
                levels from paints, cleaning agents, or toys.
              </li>
              <li>
                <strong>Elderly Care:</strong> remote family monitoring of air
                quality and presence detection.
              </li>
              <li>
                <strong>Allergy Relief:</strong> track pollen season effects via
                pressure + VOC spikes.
              </li>
              <li>
                <strong>Smart Ventilation:</strong> integrate with HVAC to
                auto-ventilate when CO₂ is high.
              </li>
              <li>
                <strong>Sleep Quality:</strong> maintain optimal bedroom climate
                at night.
              </li>
              <li>
                <strong>Remote Offices / Schools:</strong> supervisors can check
                air quality across rooms.
              </li>
              <li>
                <strong>Presence-based Automation:</strong> lights or HVAC only
                active when people are detected.
              </li>
            </ul>

            <h4>Remote Monitoring</h4>
            <ul>
              <li>
                <strong>Accessible via Carenuity App:</strong> available on
                iOS/Android.
              </li>
              <li>
                <strong>Multi-user support:</strong> users can add family
                members or caregivers with read-only or full access.
              </li>
              <li>
                <strong>Cloud sync:</strong> ensures that measurements and
                alerts are available anywhere.
              </li>
              <li>
                <strong>Privacy first:</strong> data stored securely on European
                servers; sharing is user-controlled.
              </li>
            </ul>

            <div style={{ textAlign: 'center' }}>
              <p>
                {!isMobile && (
                  <Link
                    href={'/sq-panel'}
                    className={'btn btn-lg btn-success rounded-pill'}
                  >
                    <span className="small">Learn More on SQ-Panel</span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'/sq-panel'}
                    className={'btn btn-lg btn-success rounded-pill'}
                  >
                    <span className="small">
                      Learn More on SQ-Panel{' '}
                      {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
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
  pageTitle: 'Features & Use Cases',
  serviceCategory: 'Get Help',
});
