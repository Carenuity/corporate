import Head from 'next/head';
import PageTitle from '../components/PageTitle';
import Link from 'next/link';
import ApplicationItem from '../components/ApplicationItem';

const Sensors = () => {
  // { isMobile }: { isMobile: boolean }
  const pageTitle = 'CO2 Measurement Methods';

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
        links={[{ path: '/sq-labs', title: 'Team' }]}
        pageTitle={pageTitle}
        pageUrl="/co2-insights"
      />

      <section className="pt-4">
        <div className="container">
          <div className="section-title left mb-1-9">
            <span className="sm-title">
              Co<sub>2</sub> Insights
            </span>
          </div>
          <div className="row">
            <div className="mb-4">
              <h4 className="mb-2 h4">Introduction</h4>
              Carbon dioxide (CO<sub>2</sub>) is a greenhouse gas that affects
              the climate and the quality of life on Earth. Measuring the CO
              <sub>2</sub> level in the air is important for various
              applications, such as environmental monitoring, industrial process
              control, indoor air quality, and health and safety. There are
              different methods to measure the CO<sub>2</sub> level in the air,
              depending on the purpose and the range of concentration. Some of
              the common methods are:
            </div>

            <div className="mb-4 col-lg-5">
              <div
                className="e-card "
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 90%)',
                  height: '600px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/co2/Cavity Ring-Down Spectroscopy (CRDS).png"
                  className=" wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    animationDelay: '100ms',
                    width: '560px',
                    animationName: 'fadeIn',
                  }}
                />

                <div style={{ padding: '20px' }}>
                  <h4 className="mb-2 h5">
                    Cavity Ring-Down Spectroscopy <strong>(CRDS)</strong>
                  </h4>
                  This method uses a laser beam that is reflected inside a
                  cavity with mirrors. The laser light is absorbed by the CO2
                  molecules in the cavity, and the time it takes for the light
                  to decay is measured. This method is very precise and
                  accurate, and can measure CO2 levels from ambient to high
                  concentrations .
                </div>
              </div>
            </div>
            <div className="mb-4 col-lg-5">
              <div
                className="e-card  "
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 90%)',
                  height: '600px',
                }}
              >
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/co2/Non-Dispersive Infrared (NDIR).png"
                    className=" wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                      width: '560px',
                      boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                      animationName: 'fadeIn',
                    }}
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <h4 className="mb-2 h5">
                    Non-Dispersive Infrared <strong>(NDIR)</strong> e.g.
                    TechnolineWL1030{' '}
                  </h4>
                  This method uses an infrared light source that passes through
                  a sample of air. The CO<sub>2</sub> molecules in the air
                  absorb some of the infrared light, and the remaining light is
                  detected by a sensor. The amount of light absorbed is
                  proportional to the CO<sub>2</sub>
                  concentration in the air. This method is simple and
                  inexpensive, but less accurate than CRDS. It is widely used
                  for indoor air quality monitoring and industrial applications
                  .
                </div>
              </div>
            </div>
            <div className="mb-6 col-lg-5">
              <div
                className="e-card "
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 90%)',
                  height: '650px',
                }}
              >
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/co2/Gas Chromatography (GC).png"
                    className=" wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                      boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 90%)',
                      animationName: 'fadeIn',
                    }}
                  />
                </div>

                <div style={{ padding: '20px' }}>
                  <h4 className="mb-2 h5">
                    Gas Chromatography <strong>(GC)</strong>
                  </h4>
                  This method separates the different components of a gas
                  mixture using a column and a carrier gas. The separated
                  components are then detected by a detector, such as a flame
                  ionization detector <strong> (FID)</strong> or a thermal
                  conductivity detector <strong>(TCD)</strong>. The CO2
                  concentration is calculated based on the peak area and the
                  calibration curve. This method is accurate and sensitive, but
                  requires more complex equipment and calibration. It is used
                  for laboratory analysis and research purposes .
                </div>
              </div>
            </div>
            <div className="mb-6 col-lg-5">
              <div
                className="e-card "
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 90%)',
                  height: '650px',
                }}
              >
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/co2/Photoacoustic Spectroscopy (PAS) e.g. Infineon PAS CO2.png"
                    className=" wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                      boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 90%)',
                      animationName: 'fadeIn',
                      width: '560px',
                    }}
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <h4 className="mb-2 h5">
                    Photoacoustic Spectroscopy <strong>(PAS)</strong> e.g.
                    Infineon PAS CO
                    <sub>2</sub>
                  </h4>
                  This method uses a modulated laser beam to excite the CO2
                  molecules and measure the resulting sound waves. This method
                  is very small, accurate, and low-power, and can be used for
                  smart home and building applications45 Infineon&apos;s
                  XENSIV™ PAS CO2 sensor is the first real CO2 sensor in an SMD
                  package, and it can measure CO2 concentrations from 0 to
                  10,000 ppm5 It also meets the criteria of the WELL Building
                  Standard, which is a global rating system for healthy
                  buildings .
                </div>
              </div>
            </div>
            <div className="mb-4 ">
              <div
                className="e-card "
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 90%)',
                  maxHeight: '1000px',
                  padding: '20px',
                }}
              >
                <div className="row">
                  <div className="col-lg-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/img/content/co2/Metal Oxide (MOX) e.g. Carenuity SQ-Panel.png"
                      className=" wow fadeInUp"
                      data-wow-delay="100ms"
                      alt="..."
                      style={{
                        visibility: 'visible',
                        animationDelay: '100ms',
                        boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 90%)',
                        animationName: 'fadeIn',
                      }}
                    />
                  </div>
                  <div className="col-lg-8" style={{}}>
                    <h4 className="mb-2 h5">
                      Metal Oxide <strong>(MOX)</strong> e.g. Carenuity SQ-Panel
                    </h4>
                    This method uses a metal oxide layer that changes its
                    electrical resistance when it interacts with gas molecules.
                    This method is based on the detection of volatile organic
                    compounds (VOCs) that are correlated with CO<sub>2</sub>{' '}
                    levels. This method is compact, digital, and multi-gas, and
                    can provide outputs such as equivalent CO<sub>2</sub>
                    (eCO<sub>2</sub>), total VOCs (TVOC), and air quality index
                    (AQI)78 ScioSense&apos;sENS160 is a digital metal oxide
                    multi-gas sensor that uses four sensor elements and an
                    independent hotplate control to detect a wide range of VOCs
                    and oxidizing gases with superior sensitivity It is ideal
                    for home appliances, IoT devices, building automation, and
                    HVAC applications .
                  </div>
                </div>
              </div>
            </div>

            <div className="pe-lg-1-9 mb-3">
              <h3 className="mb-2 h5">Conclusion</h3>
              These are the main methods to measure the CO<sub>2</sub> level in
              the air. Each method has its own advantages and disadvantages, and
              the choice of the best method depends on the application and the
              requirements.
            </div>

            <p style={{ textAlign: 'center' }}>
              <Link
                href={'/sq-panel'}
                className={'btn btn-lg btn-success rounded-pill'}
              >
                <span className="small">Learn more</span>
              </Link>
            </p>

            <div className="col-lg-">
              <div>
                <p
                  className="wow fadeIn"
                  data-wow-delay="300ms"
                  style={{
                    visibility: 'visible',
                    animationDelay: '300ms',
                    animationName: 'fadeIn',
                  }}
                >
                  Carenuity specializes in sensor devices, offering a portfolio
                  of 24 sensor products that come with enclosures and can be
                  customized on various levels to meet your specific needs.
                </p>

                <p>
                  These Applications are available by One-Click on the
                  Install-for-Free Buttons
                </p>

                <div className="row mb-1-9">
                  <div className="col-md-6 wow fadeIn" data-wow-delay="200ms">
                    <ApplicationItem
                      name={'Barometer'}
                      url={
                        'https://solutions.carenuity.com/applications/nJMltlS83P6vqQjANMdU'
                      }
                    />
                    <ApplicationItem
                      name={'Hygrometer'}
                      url={
                        'https://solutions.carenuity.com/applications/Pz79ekXXeqNppvIgHK5r'
                      }
                    />
                    <ApplicationItem
                      name={'Thermometer'}
                      url={
                        'https://solutions.carenuity.com/applications/wzxLAKXdeVgruPEZP7lN'
                      }
                    />
                    <ApplicationItem
                      name={'Motion Detector'}
                      url={
                        'https://solutions.carenuity.com/applications/MGMRQwSXjjvSZzOu3Xj8'
                      }
                    />
                  </div>
                  <div className="col-md-6 wow fadeIn" data-wow-delay="400ms">
                    <ApplicationItem
                      name={'Luxmeter'}
                      url={
                        'https://solutions.carenuity.com/applications/YyvgrAa1UcVrRYcysN74'
                      }
                    />
                    <ApplicationItem
                      name={'IR Radiometer'}
                      url={
                        'https://solutions.carenuity.com/applications/X4Uz3c2SknHIQjiektgV'
                      }
                    />
                    <ApplicationItem
                      name={'Presence Button'}
                      url={
                        'https://solutions.carenuity.com/applications/VCe4FCtct0ovFUE9bnzM'
                      }
                    />
                  </div>
                </div>

                <p>
                  Get new Applications by combining the Sensor, Microcontroller
                  and Actuator (S-M-A)
                </p>

                <div className="row">
                  <div className="col-sm-4">
                    <Link
                      href={'/sensors'}
                      className={'btn btn-success rounded-pill'}
                    >
                      <span className="small">Select Sensor</span>
                    </Link>
                  </div>
                  <div className="col-sm-4">
                    <Link
                      href={'/microcontrollers'}
                      className={'btn btn-success rounded-pill'}
                    >
                      <span className="small">Select Microcontroller</span>
                    </Link>
                  </div>
                  <div className="col-sm-4">
                    <Link
                      href={'/actuators'}
                      className={'btn btn-success rounded-pill'}
                    >
                      <span className="small">Select Actuator</span>
                    </Link>
                  </div>
                </div>

                {/* {!isMobile && (
                  <Link
                    href={'/sensors'}
                    className="btn-style2 primary wow fadeInUp p-3"
                    data-wow-delay="400ms"
                    style={{
                      visibility: 'visible',
                      animationDelay: '400ms',
                      animationName: 'fadeInUp',
                      height: '3.5rem',
                    }}
                  >
                    <span className="small">Select Sensor </span>
                  </Link>
                )}

                {isMobile && (
                  <a
                    href={'/microcontrollers'}
                    className="btn-style2 primary wow fadeInUp p-3"
                    data-wow-delay="400ms"
                    style={{
                      visibility: 'visible',
                      animationDelay: '400ms',
                      animationName: 'fadeInUp',
                      height: '3.5rem',
                    }}
                  >
                    <span className="small">Select Microcontroller </span>
                  </a>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sensors;
