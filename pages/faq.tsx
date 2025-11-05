import React from 'react';
import Head from 'next/head';
import FAQCard from './faqcard';
import ServiceHOC from '../components/hoc/ServiceHOC';
import { servicesUrls } from '../utils/constants';

const Index = () => {
  const pageTitle = 'faq';
  const faqs = [
    {
      question: 'What is the SQ-Panel?',
      answer:
        'The SQ-Panel is a smart and user-friendly sensor display equipped with built-in environmental sensors. It provides real-time monitoring of indoor air quality and human presence detection, making it ideal for homes, offices, and shared indoor spaces.',
    },
    {
      question: 'What sensors are included in the SQ-Panel?',
      answer:
        'The SQ-Panel integrates multiple sensors for temperature, humidity, air pressure, CO2 levels, volatile organic compounds (VOCs), and air quality index (AQI). These combined measurements help you maintain a healthier and more comfortable indoor environment.',
    },
    {
      question: 'How do I set up the SQ-Panel using the Matter procedure?',
      answer:
        ' Setup is simple: open the Carenuity app and scan the QR code displayed on  the panel. The device will automatically connect to your preferred  Matter-compatible ecosystem (such as Alexa, Google Home, or Apple Home), allowing quick and seamless integration.',
    },
    {
      question: 'Do I need the Carenuity app after setup?',
      answer:
        ' The Carenuity app is mainly required for the initial setup and advanced configurations. Once connected, you can manage and control the SQ-Panel directly through your chosen Matter ecosystem, while the app remains useful for monitoring, firmware updates, and troubleshooting.',
    },

    {
      question: 'How do I manage user profiles?',
      answer:
        ' User profiles can be managed via the Carenuity app or within your Matter ecosystem. This lets you set personalized preferences, adjust notification thresholds for specific sensors, and define alerts tailored to different family members or workplace requirements.',
    },

    {
      question: 'Can the SQ-Panel be used in multiple rooms?',
      answer:
        ' Yes. You can deploy several SQ-Panels across different rooms to create a connected monitoring network. All devices can be managed from one app or ecosystem, giving you a complete overview of your indoor air quality.',
    },

    {
      question: 'What are the mounting options for the SQ-Panel?',
      answer:
        'The SQ-Panel offers flexible installation. It can be wall-mounted for a  clean, integrated look, or placed on a stand for easy relocation. Both  options ensure accessibility and visibility in various environments. ',
    },

    {
      question: ' How does the SQ-Panel ensure data security?',
      answer:
        'The SQ-Panel employs advanced end-to-end encryption for all sensor data and  communicates only with Gaia-X-certified European servers. This guarantees that your information is stored and processed under strict data protection regulations. ',
    },

    {
      question: 'Can I monitor air quality remotely?',
      answer:
        'Absolutely. With the Carenuity app, you can access real-time and historical  air quality data from anywhere. Whether at home, in the office, or while traveling, you stay informed about your indoor environment.',
    },

    {
      question: 'What is the range of the Matter-supported SQ-Panel?',
      answer:
        'The SQ-Panel supports a wireless range of up to 80 meters indoors (depending on building structure). This ensures stable and reliable connectivity within most homes and office environments. ',
    },
    {
      question: 'How can I customize sensor thresholds?',
      answer:
        'Thresholds for temperature, CO<sub>2</sub>, VOCs, and other metrics can be customized through the Carenuity app or any Matter-compatible platform. Once set, you will receive alerts when values exceed your defined safety or comfort levels. ',
    },
    {
      question: 'Is the SQ-Panel compatible with other smart home systems?',
      answer:
        ' Yes. Thanks to Matter support, the SQ-Panel integrates seamlessly with popular ecosystems including Alexa, Google Home, and Apple Home. This ensures interoperability and future-proof compatibility with your smart home setup.',
    },
  ];

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

      <section className="pt-4">
        <div className="container">
          <div className="max-w-2xl mx-auto ">
            <h4 className="text-2xl font-bold mb-1">SQ-Panel FAQ</h4>
            <p>
              Find detailed answers to the most common questions about the
              SQ-Panel, its functionality, setup, and integration with smart
              home ecosystems.
            </p>
            {faqs.map((faq, index) => (
              <FAQCard
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
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
