import React from 'react';
import Head from 'next/head';
import PageTitle from '../../components/PageTitle';
import { LanguageSwitchContext } from '../../components/context/LanguageSwitch';
import Translatable from '../../components/Translatable';
import { useContext } from 'react';
import ServiceHOC from '../../components/hoc/ServiceHOC';
import { servicesUrls } from '../../utils/constants';

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
        <title>C3-Mini:Bluetooth Beacon</title>
      </Head>

     

      <section className="pt-4">
        <div className="container ">
                <div>
            <h4>C3-Mini: Your Compact Bluetooth Beacon for Smart Applications</h4>
            <p>
                The Carenuity C3-Mini transforms the powerful ESP32-C3 platform into a versatile Bluetooth Low Energy (BLE) beacon. Compact, efficient, and easy to deploy, it’s ideal for broadcasting presence, location, and sensor data across smart home, healthcare, retail, and industrial environments.
            </p>

            <h4>Key Features</h4>
            <ul>
                <li><strong>Compact Form Factor:</strong> Ultra-small design, perfect for discreet or mobile setups.</li>
                <li><strong>BLE Advertising Support:</strong> Compatible with iBeacon, Eddystone, or custom advertisement frames.</li>
                <li><strong>Low Power Operation:</strong> Optimized for long-lasting performance in battery-powered applications.</li>
                <li><strong>Flexible Firmware:</strong> Powered by ESP32-C3, supports Arduino, ESP-IDF, and MicroPython environments.</li>
                <li><strong>OTA-Ready:</strong> Update firmware conveniently over the air.</li>
                <li><strong>Integration Options:</strong> Extend functionality via GPIO, I²C, SPI, or UART interfaces.</li>
            </ul>

            <h4>What It Can Do as a Beacon</h4>
            <ul>
                <li>Broadcast device ID, sensor data, or location information.</li>
                <li>Enable indoor positioning and asset tracking.</li>
                <li>Trigger automation events in smart environments.</li>
                <li>Support proximity marketing and context-aware notifications.</li>
                <li>Transmit health or environmental data without requiring pairing.</li>
            </ul>

            <h4>Carenuity Standard Option</h4>
            <p>
                The Carenuity Standard Option for C3-Mini provides a ready-to-use beacon configuration that makes deployment effortless.
            </p>
            <p>Includes:</p>
            <ul>
                <li>Pre-configured BLE beacon firmware (Eddystone/iBeacon)</li>
                <li>Optimized power settings for continuous operation</li>
                <li>Quick setup through the Carenuity Solution Builder</li>
            </ul>
            <p>
                Simply download the Standard Option from the Solution Builder and turn your C3-Mini into a fully functional Bluetooth beacon within minutes.
            </p>

            <h4>Get Started Today</h4>
            <p>
                Transform your C3-Mini into a powerful Bluetooth Beacon.<br />
                 Download the Carenuity Standard Option from the Solution Builder and start broadcasting instantly.
            </p>
            </div>

        </div>
      </section>
    </>
  );
};

export default ServiceHOC(Index, {
  servicesCategoryUrls: servicesUrls.products,
  pageUrl: '/product/aquabar',
  pageTitle: 'C3-Mini:Bluetooth Beacon',
  serviceCategory: 'Our Products',
});

