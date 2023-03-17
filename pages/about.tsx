import React from 'react';
import AboutUs from '../components/AboutUs';
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';

const about = ({ aboutUsSammury }: { aboutUsSammury: string }) => {
  const mission = `Our Mission is to provide all young and caregiving people with especially easy-to-use sensor-systems that allow them to monitor vital signs and indoor air quality parameters for their elderly family members and to select and recommend best suited sensors-systems for their safety and care.`;
  const vision = `Our vision is to empower young and caregiving people with innovative and accessible technology solutions that enhance the safety, comfort, and well-being of elderly individuals, enabling them to age in place with dignity, privacy and independence.`;
  const visionDescription = `This vision emphasizes the company's commitment to providing technology solutions that are both innovative and accessible, addressing the needs of both the elderly individuals and their caregivers. It also highlights the importance of promoting independence, privacy and dignity in aging, while recognizing the role that technology can play in supporting these goals.`;

  return (
    <>
      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        prevPage='Home'
        prevPageUrl='/'
        pageTitle='About Us'
        pageUrl='/about'
        bgImage='img/banner/page-title.jpg'
      />

      {/* <!-- ABOUT
        ================================================== --> */}
      <AboutUs
        aboutUsSammury={aboutUsSammury}
        mission={mission}
        vision={vision}
        visionDescription={visionDescription}
      />

      {/* <!-- WHY CHOOSE US
        ================================================== --> */}
      {/* <WhyUs /> */}

      {/* <!-- PROCESS
        ================================================== --> */}
      {/* <WorkingProcess /> */}
    </>
  );
};

// export const getStaticProps: GetStaticProps = async (
//   context: GetStaticPropsContext
// ) => {
//   return {
//     props: {
//       logoUrl: 'img/logos/logo.png',
//     },
//   };
// };

export default about;
