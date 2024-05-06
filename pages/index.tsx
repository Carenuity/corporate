import { Inter } from '@next/font/google';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import Banner from '../components/Banner';

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
