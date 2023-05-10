// import { Inter } from '@next/font/google';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import Banner from '../components/Banner';

// const inter = Inter({ subsets: ['latin'] });

export default function Home({ isHome }: { isHome: boolean }) {
  useEffect(() => {
    if (typeof document !== undefined) {
      const { jarallax, jarallaxVideo } = require('jarallax');
      jarallaxVideo();
      jarallax(document.querySelectorAll('.jarallax'), {
        speed: 0.2,
        videoSrc: 'https://www.youtube.com/watch?v=i3pwQ2BWTO8', // 'https://www.youtube.com/watch?v=pDWUf_g2zsc',
      });
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name='keywords'
          content='Carenuity ChipGlobe Electronics Embedded Systems'
        />
        <meta name='description' content='Real Estate Electronics Matter' />
        <title>Carenuity</title>
      </Head>

      {/* <!-- BANNER
        ================================================== --> */}
      <Banner
        bannerImage='img/banner.jpg'
        slogan='Real Estate Electronics Matter'
      />
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
