import ServiceHOC from '../../components/hoc/ServiceHOC';
import { servicesUrls } from '../../utils/constants';
import Head from 'next/head';
import Link from 'next/link';

const Index = ({ isMobile }: { isMobile: boolean }) => {
    
  return (
    <>
      <Head>
        <title>C3-Mini Piggypacks</title>
      </Head>
      <div>
        <div className="wow fadeIn" data-wow-delay="200ms">
          <div className="section-title mb-1-9">
            <span className="sm-title" style={{ fontSize: '.7em' }}>
              C3-Mini Piggypacks
            </span>
            <h2 className="mb-0 h6">
             Accelerating Prototyping with Piggyback Sensors and the C3-Mini Ecosystem
            </h2>
          </div>
          {/* <h2 className="mb-3 h3">What is the C3-Mini?</h2> */}
          <p className="mb-lg-1-9">
          
            The integration of proprietary sensor breakout boards as piggyback modules onto the C3-Mini platform 
            significantly boosts prototyping speed. Thanks to the standardized C3-Mini pinout, these sensor boards 
            can be directly mounted—without any wiring—onto the host board, typically a Triple Adapter. 
            This eliminates the need for error-prone and time-consuming wiring of cables, which even could cause 
            frying the boards, if wrongly wired.Once a Piggyback Board is attached, the Solution Builder enables 
            full initialization and operation in under three minutes. This seamless plug-and-play experience allows
             even proprietary sensor PCBs to benefit from the rapid development capabilities of the Solution Builder,
              dramatically reducing time-to-first-data and accelerating iteration cycles.
          </p>
          
        </div>
      </div>
    </>
  );
};

export default ServiceHOC(Index, {
  servicesCategoryUrls: servicesUrls.standard,
  pageUrl: '../c3-mini-piggypacks',
  pageTitle: 'C3-Mini Piggypacks',
  serviceCategory: 'Budget Friendly Not Only For Students',
});
