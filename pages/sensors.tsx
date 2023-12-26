import Head from 'next/head';
import PageTitle from '../components/PageTitle';
import Link from 'next/link';
import ModuleImage from '../components/ModuleImage';
import { useRouter } from 'next/router';

const Sensors = ({ isMobile }: { isMobile: boolean }) => {
  const router = useRouter();
  const query = router.query;
  const pageTitle = 'Sensor Selection';

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
        prevPage="Install For Free"
        prevPageUrl="/install-for-free"
        pageTitle={pageTitle}
        pageUrl="/sensors"
      />

      <section className="pt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mt-n1-9">
              <div className="pe-lg-1-9">
                <div className="row mt-1-9">
                  <ModuleImage
                    url={{
                      pathname: '/microcontrollers',
                      query: { ...query, sensor: 'BMP180' },
                    }}
                    image={'/img/sensors/Barometer-sensor.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/microcontrollers',
                      query: { ...query, sensor: 'DHT11' },
                    }}
                    image={'/img/sensors/Hygrometer-sensor.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/microcontrollers',
                      query: { ...query, sensor: 'SHT30' },
                    }}
                    image={'/img/sensors/Hygro-Thermometer-sensor.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/microcontrollers',
                      query: { ...query, sensor: 'Ambient-Light' },
                    }}
                    image={'/img/sensors/Luxmeter-sensor.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/microcontrollers',
                      query: { ...query, sensor: 'Barometric-pressure' },
                    }}
                    image={'/img/sensors/Thermo-Barometer-sensor.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/microcontrollers',
                      query: { ...query, sensor: 'IR' },
                    }}
                    image={'/img/sensors/IR-Radiometer-sensor.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/microcontrollers',
                      query: { ...query, sensor: 'PIR' },
                    }}
                    image={'/img/sensors/Motion-Detector-sensor.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/microcontrollers',
                      query: { ...query, sensor: 'Radar' },
                    }}
                    image={'/img/sensors/Radar-Meter-sensor.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/microcontrollers',
                      query: { ...query, sensor: 'DS18B20' },
                    }}
                    image={'/img/sensors/Thermometer-sensor.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/microcontrollers',
                      query: { ...query, sensor: 'Button' },
                    }}
                    image={'/img/sensors/Presence-Detector-sensor.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/microcontrollers',
                      query: { ...query, sensor: 'SGP30' },
                    }}
                    image={'/img/sensors/Air-Qual-CO2-Meter-sensor.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/microcontrollers',
                      query: { ...query, sensor: 'Motion' },
                    }}
                    image={'/img/sensors/Motion-sensor.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/microcontrollers',
                      query: { ...query, sensor: 'Air-Parameter' },
                    }}
                    image={'/img/sensors/Air-Parameter-sensor.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/microcontrollers',
                      query: { ...query, sensor: 'Hygrometer-2' },
                    }}
                    image={'/img/sensors/Hygrometer-2-sensor.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/microcontrollers',
                      query: { ...query, sensor: 'Si1133' },
                    }}
                    image={'/img/sensors/UV-Radiometer-sensor.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/microcontrollers',
                      query: { ...query, sensor: 'Motion-Detector-2' },
                    }}
                    image={'/img/sensors/Motion-Detector-2-sensor.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/microcontrollers',
                      query: { ...query, sensor: 'CO2-Meter' },
                    }}
                    image={'/img/sensors/CO2-Meter-sensor.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/microcontrollers',
                      query: { ...query, sensor: 'SGP40' },
                    }}
                    image={'/img/sensors/Air-Quality-Meter-sensor.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/microcontrollers',
                      query: { ...query, sensor: 'Heart-Pulse-Oximeter' },
                    }}
                    image={'/img/sensors/Heart-Pulse-Oximeter-sensor.png'}
                  />
                  <ModuleImage
                    url={{
                      pathname: '/microcontrollers',
                      query: { ...query, sensor: 'Moisture-Meter' },
                    }}
                    image={'/img/sensors/Moisture-Meter-sensor.png'}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <div
                  className="wow fadeIn"
                  data-wow-delay="200ms"
                  style={{
                    visibility: 'visible',
                    animationDelay: '200ms',
                    animationName: 'fadeIn',
                  }}
                >
                  <div className="section-title left">
                    <span className="sm-title">Higlight</span>
                  </div>
                  {/* <h2 className='h1 mb-1-9'>SEO &amp; Content Writing</h2> */}
                </div>
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
