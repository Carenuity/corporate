import Head from 'next/head';
import PageTitle from '../components/PageTitle';
import Link from 'next/link';

const Sensors = ({ isMobile }: { isMobile: boolean }) => {
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
            <div className="col-lg-8 mt-n1-9">
              <div className="pe-lg-1-9 mb-3">
                <h3 className="mb-2 h4">Introduction</h3>
                Carbon dioxide (CO<sub>2</sub>) is a greenhouse gas that affects
                the climate and the quality of life on Earth. Measuring the CO
                <sub>2</sub> level in the air is important for various
                applications, such as environmental monitoring, industrial
                process control, indoor air quality, and health and safety.
                There are different methods to measure the CO<sub>2</sub> level
                in the air, depending on the purpose and the range of
                concentration. Some of the common methods are:
              </div>

              <div className="pe-lg-1-9 mb-3">
                <h3 className="mb-2 h5">
                  Cavity Ring-Down Spectroscopy <strong>(CRDS)</strong>
                </h3>
                This method uses a laser beam that is reflected inside a cavity
                with mirrors. The laser light is absorbed by the CO2 molecules
                in the cavity, and the time it takes for the light to decay is
                measured.{' '}
                <a
                  className="text-decoration-underline"
                  href="https://gml.noaa.gov/ccgg/about/co2_measurements.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  This method is very precise and accurate, and can measure CO2
                  levels from ambient to high concentrations
                </a>
                .
              </div>

              <div className="pe-lg-1-9 mb-3">
                <h3 className="mb-2 h5">
                  Non-Dispersive Infrared <strong>(NDIR)</strong> e.g.{' '}
                  <a
                    className="text-decoration-underline"
                    href="https://amzn.eu/d/28nFdEt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {' '}
                    TechnolineWL1030
                  </a>
                </h3>
                This method uses an infrared light source that passes through a
                sample of air. The CO<sub>2</sub> molecules in the air absorb
                some of the infrared light, and the remaining light is detected
                by a sensor. The amount of light absorbed is proportional to the
                CO<sub>2</sub>
                concentration in the air. This method is simple and inexpensive,
                but less accurate than CRDS.{' '}
                <a
                  className="text-decoration-underline"
                  href="https://gml.noaa.gov/ccgg/about/co2_measurements.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  It is widely used for indoor air quality monitoring and
                  industrial applications
                </a>
                .
              </div>

              <div className="pe-lg-1-9 mb-3">
                <h3 className="mb-2 h5">
                  Gas Chromatography <strong>(GC)</strong>
                </h3>
                This method separates the different components of a gas mixture
                using a column and a carrier gas. The separated components are
                then detected by a detector, such as a flame ionization detector
                <strong>(FID)</strong> or a thermal conductivity detector{' '}
                <strong>(TCD)</strong>. The CO2 concentration is calculated
                based on the peak area and the calibration curve. This method is
                accurate and sensitive, but requires more complex equipment and
                calibration.{' '}
                <a
                  className="text-decoration-underline"
                  href="https://gml.noaa.gov/ccgg/about/co2_measurements.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  It is used for laboratory analysis and research purposes
                </a>
                .
              </div>

              <div className="pe-lg-1-9 mb-3">
                <h3 className="mb-2 h5">
                  Photoacoustic Spectroscopy <strong>(PAS)</strong> e.g.
                  Infineon PAS CO
                  <sub>2</sub>
                </h3>
                This method uses a modulated laser beam to excite the CO2
                molecules and measure the resulting sound waves.{' '}
                <a
                  className="text-decoration-underline"
                  href="https://www.digikey.de/de/product-highlight/s/sciosense/ens160-air-quality-sensor"
                  target="_blank"
                  rel="noreferrer"
                >
                  This method is very small, accurate, and low-power, and can be
                  used for smart home and building applications45
                </a>
                .{' '}
                <a
                  className="text-decoration-underline"
                  href="https://www.sciosense.com/wp-content/uploads/2023/12/ENS160-Datasheet.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Infineon&apos;s XENSIV™ PAS CO2 sensor is the first real CO2
                  sensor in an SMD package, and it can measure CO2
                  concentrations from 0 to 10,000 ppm5
                </a>
                .{' '}
                <a
                  className="text-decoration-underline"
                  href="https://www.mouser.de/new/sciosense/sciosense-ens160-sensors/"
                  target="_blank"
                  rel="noreferrer"
                >
                  It also meets the criteria of the WELL Building Standard,
                  which is a global rating system for healthy buildings
                </a>
                .
              </div>

              <div className="pe-lg-1-9 mb-3">
                <h3 className="mb-2 h5">
                  Metal Oxide <strong>(MOX)</strong> e.g. Carenuity SQ-Panel
                </h3>
                This method uses a metal oxide layer that changes its electrical
                resistance when it interacts with gas molecules. This method is
                based on the detection of volatile organic compounds (VOCs) that
                are correlated with CO<sub>2</sub> levels.{' '}
                <a
                  className="text-decoration-underline"
                  href="https://www.infineon.com/cms/en/product/sensor/co2-sensors/"
                  target="_blank"
                  rel="noreferrer"
                >
                  This method is compact, digital, and multi-gas, and can
                  provide outputs such as equivalent CO<sub>2</sub>
                  (eCO<sub>2</sub>), total VOCs (TVOC), and air quality index
                  (AQI)78
                </a>
                .{' '}
                <a
                  className="text-decoration-underline"
                  href="https://www.infineon.com/cms/en/product/sensor/co2-sensors/pasco2v01/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ScioSense&apos;sENS160 is a digital metal oxide multi-gas
                  sensor that uses four sensor elements and an independent
                  hotplate control to detect a wide range of VOCs and oxidizing
                  gases with superior sensitivity
                </a>
                .{' '}
                <a
                  className="text-decoration-underline"
                  href="https://www.infineon.com/cms/en/product/sensor/co2-sensors/"
                  target="_blank"
                  rel="noreferrer"
                >
                  It is ideal for home appliances, IoT devices, building
                  automation, and HVAC applications
                </a>
                .
              </div>

              <div className="pe-lg-1-9 mb-3">
                <h3 className="mb-2 h5">Conclusion</h3>
                These are the main methods to measure the CO<sub>2</sub> level
                in the air. Each method has its own advantages and
                disadvantages, and the choice of the best method depends on the
                application and the requirements.
              </div>
            </div>
            <div className="col-lg-4">
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
                  Carenuity is a sensor device specialist with a portfolio of 24
                  devices, which you get with an enclosure as well as customized
                  for your needs.
                </p>

                <div className="row mb-1-9">
                  <div className="col-md-6 wow fadeIn" data-wow-delay="200ms">
                    <div className="d-flex align-items-center">
                      <i className="ti-check display-26 text-primary"></i>
                      <span className="ms-3 text-dark fw-bold">Barometer</span>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="ti-check display-26 text-primary"></i>
                      <span className="ms-3 text-dark fw-bold">Hygrometer</span>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="ti-check display-26 text-primary"></i>
                      <span className="ms-3 text-dark fw-bold">
                        Thermometer
                      </span>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="ti-check display-26 text-primary"></i>
                      <span className="ms-3 text-dark fw-bold">
                        Motion Detector
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6 wow fadeIn" data-wow-delay="400ms">
                    <div className="d-flex align-items-center mt-4 mt-md-0">
                      <i className="ti-check display-26 text-primary"></i>
                      <span className="ms-3 text-dark fw-bold">Luxmeter</span>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="ti-check display-26 text-primary"></i>
                      <span className="ms-3 text-dark fw-bold">
                        IR Radiometer
                      </span>
                    </div>
                    <div className="d-flex align-items-center mt-4">
                      <i className="ti-check display-26 text-primary"></i>
                      <span className="ms-3 text-dark fw-bold">
                        Presence Button
                      </span>
                    </div>
                  </div>
                </div>

                {!isMobile && (
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
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sensors;
