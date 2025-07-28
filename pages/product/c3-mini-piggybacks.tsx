import ServiceHOC from '../../components/hoc/ServiceHOC';
import { servicesUrls } from '../../utils/constants';
import Head from 'next/head';
import Link from 'next/link';



const Index = ({ isMobile }: { isMobile: boolean }) => {
    
  return (
    <>
      <Head>
        <title>C3-Mini Piggybacks</title>
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
        <div>
           <h2 className="mb-0 h6">First example:
              </h2>
            <p>C3-Mini Triple with Piggyback Sensor AHT20+BMP280</p>
              <div className="row">
                             <div className="col-md-8 mb-4">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/img/content/piggybacks/piggy2.JPEG"
                            className="wow fadeInUp"
                            data-wow-delay="100ms"
                            alt="..."
                            style={{
                              visibility: 'visible',
                              width: '420px',
                              animationDelay: '100ms',
                              animationName: 'fadeIn',
                              padding:"10px"
                            }}
                          /></div></div>
        </div>
         <div>
                   <h2 className="mb-2 h6">Shop with us</h2>
                   
                     
                        <div
                          className="e-card mb-8"
                          style={{
                            boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                            maxHeight: '1070px',
                          }}
                        >
                           <div className="row">
                             <div className="col-md-4 mb-4">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/img/content/piggybacks/piggy.JPEG"
                            className="wow fadeInUp"
                            data-wow-delay="100ms"
                            alt="..."
                            style={{
                              visibility: 'visible',
                              width: '420px',
                              animationDelay: '100ms',
                              animationName: 'fadeIn',
                              padding:"10px"
                            }}
                          /></div>
                           <div className="col-md-8 mb-4">

                          <div style={{ padding: '10px' }}>
                            <h6 className="text-success">
                              C3-Mini Sensor Module with AHT20 & BMP280 - Temperature, Humidity, Pressure
                            </h6>
                            <p>
                              The C3-Mini Sensor Piggyback combines two high-precision sensors: the AHT20 
                              for temperature and humidity, and the BMP280 for air pressure and temperature. 
                              Ideal for IoT applications,...
                            </p>
                            <div className="row">
                              <p className="col-md-3 mb-4">
                                {!isMobile && (
                                  <Link
                                    href={
                                      'https://www.chipglobe.shop/en/p/c3-mini-sensor-module-with-aht20-and-bmp280-temperature-humidity-pressure'
                                    }
                                    target="_blank"
                                    className={'btn btn-sm btn-success rounded-pill'}
                                    style={{ color: 'white' }}
                                  >
                                    <span className="small"> Buy Now</span>
                                  </Link>
                                )}
        
                                {isMobile && (
                                  <a
                                    href={
                                      'https://www.chipglobe.shop/en/p/c3-mini-sensor-module-with-aht20-and-bmp280-temperature-humidity-pressure'
                                    }
                                    target="_blank"
                                    className={'btn btn-sm btn-success rounded-pill'}
                                    rel="noreferrer"
                                    style={{ color: 'white' }}
                                  >
                                    <span className="small">
                                      Buy Now{' '}
                                      {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                                    </span>
                                  </a>
                                )}
                              </p>
                              <p className="col-md-4 mb-4">
                                {!isMobile && (
                                  <Link
                                    href={''}
                                    target="_blank"
                                    className={'btn btn-sm btn-success rounded-pill'}
                                    style={{ color: 'white' }}
                                  >
                                    <span className="small"> Install for free</span>
                                  </Link>
                                )}
        
                                {isMobile && (
                                  <a
                                    href={''}
                                    target="_blank"
                                    className={'btn btn-sm btn-success rounded-pill'}
                                    style={{ color: 'white' }}
                                    rel="noreferrer"
                                  >
                                    <span className="small">
                                      Install for free{' '}
                                      {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                                    </span>
                                  </a>
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{
                            textAlign:"center"
                          }}>
                      <p className=" mb-4">
                                {!isMobile && (
                                  <Link
                                    href={'/install-for-free'}
                                    target="_blank"
                                    className={'btn btn-lg btn-success rounded-pill'}
                                    style={{ color: 'white' }}
                                  >
                                    <span className="small"> Install for free</span>
                                  </Link>
                                )}
        
                                {isMobile && (
                                  <a
                                    href={'/install-for-free'}
                                    target="_blank"
                                    className={'btn btn-lg btn-success rounded-pill'}
                                    style={{ color: 'white' }}
                                    rel="noreferrer"
                                  >
                                    <span className="small">
                                      Install for free{' '}
                                      {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                                    </span>
                                  </a>
                                )}
                              </p>
                    </div>
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
