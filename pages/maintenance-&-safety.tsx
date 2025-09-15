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
            <div>
                <h4>Maintenance & Safety</h4>
                    <p>Proper maintenance and safe installation ensure accurate sensor readings, long device life, and reliable alerts.</p>

                    <h4>1. Cleaning</h4>
                    <ul>
                    <li>Use a <strong>soft, dry cloth</strong> to wipe the surface of the SQ-Panel.</li>
                    <li>Avoid <strong>liquids, sprays, or abrasive cleaners</strong>, which can damage the sensors.</li>
                    <li>Do <strong>not open the device</strong>; internal components are sensitive.</li>
                    <li>Recommended cleaning frequency: <strong>once a month</strong> or when dust accumulates.</li>
                    </ul>

                    <h4>2. Power Supply</h4>
                    <ul>
                    <li>Use only the <strong>included USB-C power adapter</strong>.</li>
                    <li>Voltage: 5V DC, 1.5 A minimum.</li>
                    <li>Avoid connecting to unstable or third-party chargers with unknown specifications.</li>
                    <li>Disconnect the device during <strong>lightning storms</strong> or if the power source is unstable.</li>
                    </ul>

                    <h4>3. Safe Installation</h4>
                    <ul>
                    <li>Mount the SQ-Panel on a <strong>stable wall or table surface</strong>.</li>
                    <li>Avoid locations near <strong>heat sources, air vents, or direct sunlight</strong>.</li>
                    <li>Ensure the device is <strong>out of reach of children or pets</strong>.</li>
                    <li>For wall mounting, use the <strong>supplied screws and anchors</strong> only.</li>
                    </ul>

                    <h4>4. Placement Tips for Reliable Sensor Readings</h4>
                    <ul>
                    <li><strong>Height:</strong> Mount approximately <strong>1.2–1.5 m</strong> above floor level for accurate temperature, humidity, and CO₂ measurements.</li>
                    <li><strong>Distance from walls:</strong> Leave at least <strong>10 cm clearance</strong> around the device.</li>
                    <li><strong>Avoid drafts:</strong> Do not place near open windows, fans, or air conditioning vents.</li>
                    <li><strong>Room coverage:</strong> Place centrally in the room to get representative readings of the overall environment.</li>
                    <li><strong>Multi-room setups:</strong> Use additional SQ-Panels if monitoring multiple zones.</li>
                    </ul>

                    <h4>5. General Safety Guidelines</h4>
                    <ul>
                    <li>Do not expose the device to <strong>water, high humidity, or extreme temperatures</strong>.</li>
                    <li>Keep the device <strong>away from flammable materials</strong>.</li>
                    <li>Always follow the <strong>app prompts and firmware updates</strong> to maintain safe operation.</li>
                    </ul>

            </div>
          
        </div>
      </section>
    </>
  );
};

export default ServiceHOC(Index, {
  servicesCategoryUrls: servicesUrls.helpcenter,
  pageUrl: 'maintenance-&-safety',
  pageTitle: 'Maintenance & Safety',
  serviceCategory: 'Get Help',
});
