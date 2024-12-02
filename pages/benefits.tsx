import React from 'react';
import Head from 'next/head';
import PageTitle from '../components/PageTitle';

const Page = () => {
  const pageTitle = 'Benefits';
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

      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        links={[{ path: '/', title: '' }]}
        pageTitle={pageTitle}
        pageUrl=""
      />

      <section className="pt-4">
        <div className="container">
        <h4>What Makes Carenuity's Offerings Stand Out?</h4>
        <div className='mb-4'>
        <iframe
              width="1150"
              height="450"
              src="https://www.youtube.com/embed/i3pwQ2BWTO8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          
        </div>
            <h4>
            Swapable Sensors
            </h4>
          <p>The C3-Mini devices are quite versatile, and one of their standout features is the ability 
            to swap sensors easily. This flexibility allows users to quickly change or upgrade sensors 
            based on their specific needs without having to replace the entire device. This is particularly
             useful for applications that require different types of environmental monitoring, such as 
             temperature, humidity, air quality, and more</p>
          <h4>Long Range 868 MHz Communication</h4>
          <p>A key feature of Carenuity&apos;s SQ-Products is their long-range communication capability 
            using the 868 MHz frequency. This allows for reliable and extended range connectivity, making
             these products ideal for applications that require robust and wide-area coverage. The 868 MHz
              frequency is particularly effective in penetrating obstacles and providing stable connections
               over long distances, enhancing the overall performance and reliability of the system.
          </p>
          <h4>Instant Applications & Quick Change Feature
          </h4>
          <p>One of the standout features of Carenuity&apos;s C3-Mini offerings is the ability to deploy
             instant applications in just three minutes, thanks to the innovative Solution Builder. This tool
              streamlines the setup process, allowing users to quickly launch and share applications tailored
               to their specific needs, for use by their friends without extensive technical expertise. This
                rapid deployment capability significantly reduces time-to-market and enhances operational 
                efficiency, suited as well for industrial usecases.</p>
         
        </div>
      </section>
    </>
  );
};

export default Page;
