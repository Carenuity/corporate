import React from 'react';
import Head from 'next/head';
import PageTitle from '../../components/PageTitle';
import { LanguageSwitchContext } from '../../components/context/LanguageSwitch';
import Translatable from '../../components/Translatable';
import { useContext } from 'react';
import ServiceHOC from '../../components/hoc/ServiceHOC';
import { servicesUrls } from '../../utils/constants';
import SubscriptionWidget from '../../components/SubscriptionWidget';
import SolutionWidget from '../../components/SolutionWidget';

const Index = () => {

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
        <title>DingDongBar</title>
      </Head>

     

      <section className="pt-4">
        <div className="container ">
        
        <div>
        <h4>DingDongBar – Motion Detection Alert Device</h4>
        <div
                      className="e-card mb-4"
                      style={{
                        boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                        maxHeight: '820px',
                        padding:"20px"
                      }}
                    >
        <div className=" row">
            <div className="col-lg-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/dingdongbar/dingdongbar.JPEG"
                className=" wow fadeInUp mb-6"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',

                  animationName: 'fadeIn',
                }}
              />
            </div>
            <div className="col-lg-8">
                <p>
        The DingDongBar is a compact, smart alert device that automatically responds to human movement by producing a distinct sound.
        It uses a PIR (Passive Infrared) motion sensor to detect infrared radiation changes caused by motion, and a buzzer to instantly
        generate an audible “ding-dong” tone whenever movement is detected.
        </p>


        
            </div>
             
            </div></div>
        <div className='mb-4'>
                <p>
        Designed for simplicity and reliability, the DingDongBar eliminates the need for physical interaction such as pressing a button.
        This makes it ideal for environments where hands-free operation is preferred — like doorways, reception areas, offices, or
        security-sensitive zones.
        </p>

       <p>
        Because it&apos;s based on low-power electronics, the DingDongBar can run continuously for long periods on a small power supply or
        battery. It can also be easily integrated into IoT systems, door alert setups, or automation projects, making it useful in both
        educational prototypes and real-world applications.
        </p>
                <a
                    href="https://www.instagram.com/reel/DPvhCTIjXhl/?igsh=MmVnYTl5Nmx5Z3pw"
                    target="blank"
                  >
                    <u>See how to assemble</u>
                    <br />
                  </a>
                </div>
        <p>Typical uses include:</p>
        <ul>
        <li>Motion-activated door alerts in offices and shops</li>
        <li>Entry notification for home or garage doors</li>
        <li>Visitor detection in reception or waiting areas</li>
        <li>Automatic reminders for motion-based events (e.g., light or sound triggers)</li>
        <li>As an educational demo for learning about sensors, microcontrollers, and basic automation logic</li>
        </ul>


        <p>
        The PIR sensor continuously monitors its surroundings for changes in infrared radiation (heat). When a person or object moves
        within its detection range, the sensor&apos;s output pin goes HIGH. The microcontroller (e.g., Arduino, ESP32, etc.) receives this
        signal. The buzzer is then activated — producing a “ding-dong” or alert sound. After a few seconds, the buzzer stops
        automatically until new motion is detected.
        </p>


        <p>Typical Components:</p>
        <ul>
        <li>PIR Sensor (e.g. HC-SR501) — Detects motion based on infrared heat changes</li>
        <li>Buzzer (Active or Piezo) — Emits a sound when triggered</li>
        <li>Microcontroller — Controls logic between PIR and buzzer</li>
        <li>Power Supply — Provides 3.3 V or 5 V depending on components</li>
        <li>Optional LED — Visual cue when motion is detected</li>
        </ul>


        <p>
        Example Circuit Logic: PIR OUT → Microcontroller input (e.g., pin D2); Microcontroller output (e.g., pin D7) → Buzzer input;
        VCC & GND → Common power lines. When motion is detected, the microcontroller briefly powers the buzzer, creating the
        “DingDong” sound.
        </p>


        <p>Features:</p>
        <ul>
        <li>Fully automatic activation — no button needed.</li>
        <li>Works in daylight or darkness.</li>
        <li>Compact and low-power, suitable for doorways, hallways, or cabinets.</li>
        <li>Can easily be extended with LEDs, OLED display, or Wi-Fi notifications.</li>
        <li>Ideal as an entry alert, motion notifier, or DIY educational project.</li>
        </ul>


        <p>Comparison with Button + OLED Version:</p>
        <table className='mb-4'
         style={{
                width: '100%',
                border: '1px solid #dddddd',
                padding: '20px',
              }}>
        <thead>
        <tr style={{ background: '#198754', color: '#ffffff' }}>
        <th style={{
                    width: '15%',
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
          Feature</th>
        <th style={{
                    width: '15%',
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
          PIR + Buzzer (Current)</th>
        <th style={{
                    width: '15%',
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
          Button + OLED (New)</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
          Activation</td>
        <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
          Automatic (motion)</td>
        <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
          Manual (button press)</td>
        </tr>
        <tr>
        <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
          Feedback</td>
        <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
          Sound only</td>
        <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
          Visual (text display)</td>
        </tr>
        <tr>
        <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
          Complexity</td>
        <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
          Simple</td>
        <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
          More advanced</td>
        </tr>
        <tr>
        <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
          Best for</td>
        <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
          Motion alerts</td>
        <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
          Interactive menu or counters</td>
        </tr>
        </tbody>
        </table>
        </div>
                  
                  <SolutionWidget  solutionId={'ce57xKxHhSJGVzb4P1Jk'} />

          <hr className="my-7 "/>
          <div
            id="subscribe"
            className="my-5 "
            style={{ textAlign: 'center' }}
          >
            
            <h4>Product Wishlist</h4>
            <p>
              Join <strong>DingDongBar</strong> wishlist for updates when
              ready
            </p>
            <SubscriptionWidget categoryId={3} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHOC(Index, {
  servicesCategoryUrls: servicesUrls.products,
  pageUrl: '/product/dingdongbar',
  pageTitle: 'DingDongBar',
  serviceCategory: 'Our Products',
});

