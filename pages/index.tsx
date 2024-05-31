import { Inter } from '@next/font/google';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import Banner from '../components/Banner';
import Operand from '../components/Operand';
import IoTComponentsCount from '../components/IoTComponentsCount';
import EcosystemCard from '../components/EcosystemCard';

const inter = Inter({ subsets: ['latin'] });

export default function Home({
  isHome,
  isMobile,
}: {
  isHome: boolean;
  isMobile: boolean;
}) {
  const bannerImage = 'img/banner.webp';
  const secondaryBgImage = 'img/content/SQ-Panel-sideview.webp';

  useEffect(() => {
    if (typeof document !== undefined) {
      const { jarallax, jarallaxVideo } = require('jarallax');
      jarallaxVideo();
      jarallax(document.querySelectorAll('.primaryCallToAction'), {
        speed: 0.2,
        videoSrc: 'https://www.youtube.com/watch?v=i3pwQ2BWTO8', // 'https://www.youtube.com/watch?v=cquz--Q62dA', // 'https://www.youtube.com/watch?v=pDWUf_g2zsc',
      });

      jarallax(document.querySelectorAll('.secondaryCallToAction'), {
        speed: 0.2,
        videoSrc: 'https://youtu.be/nCnTdzlanPo',
      });
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Carenuity ChipGlobe Electronics Embedded Systems"
        />
        <meta name="description" content="Real Estate Electronics Matter" />
        <title>Carenuity</title>
      </Head>

      {/* <!-- BANNER
        ================================================== --> */}
      <Banner
        bannerImage={bannerImage}
        slogan="Real Estate Electronics Matter"
        isMobile={isMobile}
      />

      <section
        className={`secondaryCallToAction jarallax p-0 top-position2 full-screen video-banner dark-overlay`}
        // secondary-video p-0 top-position1 full-screen video-banner dark-overlay
        // data-overlay-dark="65"
        style={{
          backgroundImage: `url(${secondaryBgImage})`,
        }}
        data-jarallax
        data-speed="0.8"
      ></section>
      <section className="container">
        <h2 className="text-black mb-3">
          Build your own device within 3 minutes to immediately sense
          what&apos;s going on.
        </h2>

        <div className="row">
          {/* hstack justify-content-center align-items-center gap-2 */}
          <div className="col-md-3 d-flex">
            <IoTComponentsCount count={28} label="Sensors" bgColor="#3d8346" />
            <Operand operand="x" />
          </div>

          <div className="col-md-3 d-flex">
            <IoTComponentsCount
              count={5}
              label="Microcontrollers"
              bgColor="#493356"
            />
            <Operand operand="x" />
          </div>

          <div className="col-md-3 d-flex">
            <IoTComponentsCount
              count={12}
              label="Actuators"
              bgColor="#065988"
            />
            <Operand operand="=>" />
          </div>

          <div className="col-md-3">
            <IoTComponentsCount
              count={1500}
              label="Solutions"
              bgColor="#275b37"
            />
          </div>
        </div>

        <h2 className="display-6 mt-5 mb-3">
          Providing 16 Smart Home Applications in four EcoSystems
        </h2>
        <div className="row">
          <div className="col-md-3">
            <EcosystemCard
              image="/img/content/ecosystems/EcoSystem_CloudFree.png"
              label="Cloudfree"
            />
          </div>
          <div className="col-md-3">
            <EcosystemCard
              image="/img/content/ecosystems/EcoSystem_HomeAssistant.png"
              label="Home Assistant"
            />
          </div>
          <div className="col-md-3">
            <EcosystemCard
              image="/img/content/ecosystems/EcoSystem_IoT-AppStore.png"
              label="IoT AppStore"
            />
          </div>
          <div className="col-md-3">
            <EcosystemCard
              image="/img/content/ecosystems/EcoSystem_Matter.png"
              label="Matter"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      isHome: true,
    },
  };
};
