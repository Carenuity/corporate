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
        <title>Leaf Temperature Measurement</title>
      </Head>

     

      <section className="pt-4">
        <div className="container ">
         
                <div>
        <h4> Leaf Temperature Measurement - Precise Insights into Plant Physiology</h4>
        <p>
            Leaf temperature is a key indicator of a plant&apos;s physiological state. It provides 
            valuable information about water stress, photosynthetic activity, transpiration, and 
            environmental responses. Accurate measurement helps to better understand plants, optimize 
            irrigation, and detect diseases at an early stage.
        </p>

        <h4> Why is leaf temperature important?</h4>
        <ul>
            <li><strong>Detecting water stress:</strong> If plants cannot absorb enough water, leaf temperature rises due to reduced transpiration.</li>
            <li><strong>Monitoring photosynthesis:</strong> Temperature changes affect the efficiency of photosynthesis.</li>
            <li><strong>Early detection of diseases and stress:</strong> Deviations in temperature can indicate biotic or abiotic stress.</li>
            <li><strong>Optimizing irrigation and fertilization:</strong> Data-driven decisions improve resource efficiency.</li>
        </ul>

        <h4> Suitable Sensors for Leaf Temperature Measurement</h4>

        <h4> C3-Mini with Connector Attachment</h4>
        <ul>
            <li>Recommended for professional applications</li>
            <li>Compact, robust, and specifically designed for environmental and plant measurements</li>
            <li>Compatible with various loggers and gateways</li>
            <li>Ideal for long-term monitoring in the field or greenhouse</li>
        </ul>

        <h4> MLX90614 (NCIR - Non-Contact Infrared Sensor)</h4>
        <ul>
            <li>Non-contact, measures infrared radiation from the leaf surface</li>
            <li>Cost-effective and easy to integrate into microcontroller systems</li>
            <li><strong>Limitations:</strong></li>
            <ul>
            <li>Wide field of view (~35°) → potential environmental interference</li>
            <li>Sensitive to sunlight and wind</li>
            <li>Requires precise alignment and possibly shielding</li>
            </ul>
        </ul>

        <h4> Application Guidelines for Accurate Measurements</h4>
        <ul>
            <li><strong>Sensor positioning:</strong> As close as possible and perpendicular to the leaf surface</li>
            <li><strong>Measurement timing:</strong> Preferably in the morning or under controlled conditions</li>
            <li><strong>Shielding:</strong> Avoid direct sunlight</li>
            <li><strong>Calibration:</strong> Consider leaf surface emissivity (typically ~0.98)</li>
            <li><strong>Data integration:</strong> Can be combined with environmental parameters such as humidity, light, and soil moisture</li>
        </ul>
        </div>

         {/* wishlist */}
          <hr className="my-7 "/>
          <div
            id="subscribe"
            className="my-5 "
            style={{ textAlign: 'center' }}
          >
            
            <h2>Product Wishlist</h2>
            <p>
              Join <strong>Envirosence 680</strong> wishlist for updates when
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
  pageUrl: '/product/aquabar',
  pageTitle: 'Leaf Temperature Measurement',
  serviceCategory: 'Our Products',
});

