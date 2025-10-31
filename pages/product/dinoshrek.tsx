import React from 'react';
import Head from 'next/head';
import PageTitle from '../../components/PageTitle';
import { LanguageSwitchContext } from '../../components/context/LanguageSwitch';
import Translatable from '../../components/Translatable';
import { useContext } from 'react';
import ServiceHOC from '../../components/hoc/ServiceHOC';
import { servicesUrls } from '../../utils/constants';
import SubscriptionWidget from '../../components/SubscriptionWidget';


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
        <title>DinoShrek</title>
      </Head>

     

      <section className="pt-4">
        <div className="container ">
        

            <h4>Meet DinoShrek – The Motion-Hunting Party Gadget</h4>
           
                
            <p className="">
                Inspired by the legendary T-Rex, DinoShrek reacts to even the tiniest human motion. 
                Using advanced 24 GHz radar technology, it detects movement with stunning precision – 
                just like the dinosaur that could sense the faintest vibration in the air. When movement 
                is detected, the C3-Mini onboard flashes its red LED eyes, and a primal Dino roar bursts from the built-in buzzer.</p>

           
            <p>Unleash it at your next party, place it on your desk, or guard your snack bowl – no movement escapes DinoShrek.</p>
                <div >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/dinoshrek/dinoshrek.jpeg"
                  className="mt-3 mb-4 wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',

                    animationName: 'fadeIn',
                  }}
                />
              </div>

            

            <h4>How It Works</h4>
              <ul>
                <li>
                    <strong>Radar Detection (24 GHz)</strong><br/>
                    The highly sensitive motion radar scans the environment for the smallest motion or body presence.
                </li>
                <li>
                    <strong>Instant Reaction</strong><br/>
                    When it senses movement, the Carenuity C3-Mini triggers an alert sequence.
                </li>
                <li>
                    <strong>Visual & Audio Feedback</strong><br/>
                    Red LEDs flash instantly while a powerful Dino roar echoes through the room.
                </li>
                <li>
                    <strong>Plug, Play, Roar</strong><br/>
                    Thanks to the Carenuity Triple-Adapter and Type-C USB power, DinoShrek works straight out of the box.
                </li>
                </ul>


            
            <h4>Carenuity Modular Design</h4>

            <p>DinoShrek is built on the Carenuity Modular Ecosystem, making it fully reconfigurable and expandable.
                 Swap sensors, add sound effects, or integrate other Carenuity modules in seconds – no soldering, no programming, no tools required.</p>

            <p>The Carenuity Solution Builder concept means you can build, test, and modify your radar creatures in under three minutes.</p>

            <h4>Included in the Box</h4>

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
                    Component</th>

                    <th style={{
                    width: '30%',
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
                    Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
                    24 GHz Radar Sensor</td>
                    <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
                        High-precision motion and presence detection – ultra-sensitive, even through materials</td>
                </tr>
                <tr>
                    <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
                    Carenuity C3-Mini</td>
                    <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}> 
                  Compact ESP32-C3 microcontroller with integrated red status LED</td>
                </tr>
                <tr>
                    <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>Dino Buzzer</td>
                    <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>Preloaded with the authentic Dino roar sound</td>
                </tr>
                <tr>
                    <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
                    Carenuity Triple-Adapter</td>

                    <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
                    Modular board system for fast, plug-in configuration</td>
                </tr>
                <tr>
                    <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
                        3D-Printed Housing</td>
                    <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
                        Tailored for compact assembly and heat management</td>
                </tr>
                <tr>
                    <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
                        Acrylic Display Box</td>
                    <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
                        Transparent case for instant setup and visual showcase</td>
                </tr>
                <tr>
                    <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
                        USB Type-C Cable</td>
                    <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
                        Plug &amp; Play power connection for immediate operation</td>
                </tr>
                <tr>
                    <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
                        Quick-Start Guide</td>
                    <td style={{
                    border: '1px solid #dddddd',
                    padding: '8px',
                  }}>
                        Simple setup and customization instructions</td>
                </tr>
                </tbody>
            </table>

            <h4>Use Cases</h4>
            <ul>
                <li>Party sensor and sound effect gadget</li>
                <li>Desk toy that “guards” your workspace</li>
                <li>Smart motion alert demo for STEM or university projects</li>
                <li>Radar showcase for makers and AI-sensor enthusiasts</li>
            </ul>

            <h4>Why DinoShrek?</h4>
            <p>Because sometimes, you don&ap0s; detect movement – you feel it. DinoShrek combines fun,
                 engineering, and radar technology in one modular, ready-to-use system. Built by Carenuity, optimized for innovation.</p>

            <h4  >Get your DinoShrek now and let the hunt begin.</h4>

            <p> <strong>Available soon at <a href="https://chipglobe.com"><u>chipglobe.com</u></a> and <a href="https://carenuity.com"><u>carenuity.com</u></a></strong> </p>

            


          <hr className="my-7 "/>
          <div
            id="subscribe"
            className="my-5 "
            style={{ textAlign: 'center' }}
          >
            
            <h4>Product Wishlist</h4>
            <p>
              Join <strong>DinoShrek</strong> wishlist for updates when
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
  pageUrl: '/product/dinoshrek',
  pageTitle: 'DinoShrek',
  serviceCategory: 'Our Products',
});

