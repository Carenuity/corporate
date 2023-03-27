import Head from 'next/head';
import React from 'react';
import AboutUs from '../components/AboutUs';
import PageTitle from '../components/PageTitle';

const about = ({ aboutUsSammury }: { aboutUsSammury: string }) => {
  const mission = `Our Mission is to provide all young and caregiving people with especially easy-to-use sensor-systems that allow them to monitor vital signs and indoor air quality parameters for their elderly family members and to select and recommend best suited sensors-systems for their safety and care.`;
  const vision = `Our vision is to empower young and caregiving people with innovative and accessible technology solutions that enhance the safety, comfort, and well-being of elderly individuals, enabling them to age in place with dignity, privacy and independence.`;
  const visionDescription = `This vision emphasizes the company's commitment to providing technology solutions that are both innovative and accessible, addressing the needs of both the elderly individuals and their caregivers. It also highlights the importance of promoting independence, privacy and dignity in aging, while recognizing the role that technology can play in supporting these goals.`;

  return (
    <>
      <Head>
        <meta
          name='keywords'
          content='Carenuity ChipGlobe Electronics Embedded Systems'
        />
        <meta
          name='description'
          content={`We're Delivering Peace-in-Mind by Vital and Environmental Sensing and Care that you See what No Else will See.`}
        />
        <title>About Carenuity</title>
      </Head>
      
      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        prevPage='Home'
        prevPageUrl='/'
        pageTitle='About Us'
        pageUrl='/about'
        // 'img/banner/page-title.jpg'
      />

      {/* <!-- ABOUT
        ================================================== --> */}
      <AboutUs
        aboutUsSammury={aboutUsSammury}
        mission={mission}
        vision={vision}
        visionDescription={visionDescription}
      />
    </>
  );
};

export default about;
