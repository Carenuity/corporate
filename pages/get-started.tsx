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
            <div >
                <h4>Getting Started</h4>
                <p>The <strong>Carenuity SQ-Panel</strong> is a smart indoor climate monitor designed to measure air quality and comfort. It connects via the Carenuity App and integrates into your smart home through the Matter standard.</p>

                <h4>What is the SQ-Panel?</h4>
                <ul>
                <li>A wall- or table-mountable device with multiple sensors (temperature, humidity, air pressure, CO₂, VOCs, air quality index, presence).</li>
                <li>Provides <strong>real-time alerts</strong>, <strong>trend history</strong>, and <strong>remote monitoring</strong> through the Carenuity App.</li>
                <li>Supports <strong>Matter over Thread</strong> for cross-platform smart home integration (Apple, Google, Amazon, SmartThings, Home Assistant).</li>
                </ul>
                

                <h4>Package Contents</h4>
                <p>Your SQ-Panel delivery includes:</p>
                <ul>
                <li>1 × SQ-Panel device</li>
                <li>1 × USB-C power supply + cable</li>
                <li>1 × Wall mounting plate + screws + anchors</li>
                <li>1 × Quick Start Guide (QR link to digital manual)</li>
                </ul>

                <h4>Installation Options</h4>

                <h6>a) Wall Mounting</h6>
                <ol>
                <li>Select a central indoor wall, approx. 1.2–1.5 m above floor.</li>
                <li>Avoid direct sunlight, heaters, or windows.</li>
                <li>Use included plate, screws, and anchors.</li>
                <li>Slide SQ-Panel onto the mounting plate.</li>
                </ol>

                <h6>b) Tabletop Mounting</h6>
                <ol>
                <li>Place SQ-Panel upright on a stable surface.</li>
                <li>Avoid obstructing airflow around the device.</li>
                </ol>

                <h4>Setup with Border Router + Carenuity App</h4>

                <h6>Step 1: Install the App</h6>
                <ul>
                <li><a
                href="https://apps.apple.com/ie/app/carenuity/id6472718918"
                target="_blank"
                rel="noreferrer"
                  ><u>App Store (iOS)</u></a></li>
                <li><a
                href="https://play.google.com/store/apps/details?id=com.carenuity.home"
                target="_blank"
                rel="noreferrer"
              ><u>Google Play (Android)</u></a></li>
                <li>Ensure app is updated to the latest version.</li>
                </ul>

                <h6>Step 2: Power Up</h6>
                <ul>
                <li>Connect SQ-Panel with the supplied USB-C adapter.</li>
                <li>LED blinks → device ready for commissioning.</li>
                </ul>

                <h6>Step 3: Add Border Router</h6>
                <ul>
                <li>Ensure a Matter-enabled Border Router (e.g., HomePod mini, Google Nest Hub, or Carenuity router) is active on your Wi-Fi.</li>
                </ul>

                <h6>Step 4: Add Device via QR-Code</h6>
                <ul>
                <li>Open Carenuity App → <em>Add Device</em>.</li>
                <li>Scan QR code (back of SQ-Panel or in Quick Start Guide).</li>
                <li>Follow in-app instructions until status shows <em>Connected</em>.</li>
                </ul>

                <h4>Matter Commissioning</h4>
                <ul>
                <li>During setup, SQ-Panel is automatically added to your Matter ecosystem.</li>
                <li>Supported ecosystems: Apple Home, Google Home, Amazon Alexa, Samsung SmartThings, Home Assistant.</li>
                <li>Use each platform&apos;s native app to complete the final step.</li>
                </ul>

                <h4>First Checks After Setup</h4>
                <ol className='mb-6'>
                <li><strong>Live readings</strong>: Verify temperature, humidity, and CO₂ update in the app.</li>
                <li><strong>Presence detection</strong>: Move in front of the SQ-Panel and check presence indicator.</li>
                <li><strong>Notifications</strong>: Enable push alerts in app settings.</li>
                <li><strong>Firmware</strong>: Check <em>Menu → Firmware Update</em>.</li>
                </ol>

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
  pageTitle: 'Get Started With SQ-Panel',
  serviceCategory: 'Get Help',
});
