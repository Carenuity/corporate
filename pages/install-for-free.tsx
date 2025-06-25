import PageTitle from '../components/PageTitle';
import Head from 'next/head';
import Link from 'next/link';
import IoTComponentsCount from '../components/IoTComponentsCount';

const Index = ({ isMobile }: { isMobile: boolean }) => {
  const pageTitle = 'Install For Free';
  // const boardImage =
  //   '/img/content/triple-adapter-with-letters-S-M-A-for-orientation.webp';
  // const { state } = useContext(StoreContext);

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
        links={[{ path: '/', title: 'Home' }]}
        pageTitle={pageTitle}
        pageUrl="/install-for-free"
      />

      <section className="container">
        <div className="row">
          {/* How to install */}
          <div className=" mb-4">
            <h3 className=" mb-1">
              Build your own device within 3 minutes to immediately sense
              what&apos;s going on.
            </h3>

            <strong className=" mb-1">
              Select your S-M-A Triple, grab the available parts from your
              drawer or go{' '}
              <a
                href="https://www.chipglobe.shop/c/iot-systeme/d1-c3-mini-shield"
                className="text-success"
              >
                shopping
              </a>{' '}
              for getting more suited sensor boxes.
            </strong>
          </div>

          <div className="col-lg-4 mb-6 wow fadeIn  ">
            <div
              className="e-card"
              style={{
                boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                height: '500px',
              }}
            >
              <video
                src="/videos/content/sma02.mp4"
                loop={true}
                autoPlay={true}
                muted
                className="wow fadeInUp w-100"
                data-wow-delay="100ms"
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',

                  animationName: 'fadeIn',
                }}
              />
              <h6 style={{ padding: '10px' }}>1. Make Your Triple</h6>
              <p style={{ padding: '10px' }}>
                Make your S-M-A Triple by attaching the three basic components
                of any IoT solution, the Sensor, the Microcontroller and the
                Actuator onto the black Triple-Adapter.
              </p>
            </div>
          </div>

          <div className="col-lg-4 mb-6 wow fadeIn  ">
            <div
              className="e-card"
              style={{
                boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                height: '500px',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/Install/install.png"
                className="mt-1-9 wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
              <h6 style={{ padding: '10px' }}>
                2. Install one of the various prepared applications to your
                tripple
              </h6>
              <p style={{ padding: '10px' }}>
                Inject an application from Solution Builder website into your
                Triple by using any browser on your laptop or pc, no extra
                pc-software-installation is required.
              </p>
            </div>
          </div>

          <div className="col-lg-4 mb-6 wow fadeIn ">
            <div
              className="e-card"
              style={{
                boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                height: '500px',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/Install/Install-for-Free.png"
                className="mt-1-9 wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
              <h6 style={{ padding: '10px' }}>
                3. Enclose and place in your home
              </h6>
              <p style={{ padding: '10px' }}>
                House your Triple by a 3D-printed enclosure (optional) and place
                it in your apartment, powered by a phone charger, no pc
                required.
              </p>
            </div>
          </div>

          <div className="mb-4 ">
            <h4 className=" mb-1">How to build your own device in detail</h4>
          </div>

          {/* Getting started */}
          <div className="col-lg-8 mb-4 wow fadeIn">
            <div className="pe-lg-1-9">
              <div className="d-flex about-text mb-1-9">
                <div className="flex-shrink-0">
                  <i className="fa-solid fa-microchip"></i>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h4 className="h5">Get your hardware at hand</h4>
                  <p>
                    As all these boards are super popular, we assume you have
                    them at your hand. If not, checkout our free offer below or
                    refill your drawers. You will find all parts in dedicated
                    assortment boxes or buy any individual part, e.g. spare
                    parts from our store. Here is a{' '}
                    <a
                      href="https://www.chipglobe.shop/en/"
                      className="text-success"
                    >
                      recommended link
                    </a>{' '}
                    to re-fill your drawer.
                  </p>
                </div>
              </div>
              <div className="d-flex about-text mb-1-9">
                <div className="flex-shrink-0">
                  <i className="fa-solid fa-laptop-code"></i>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h4 className="h5">Install the desired software</h4>
                  <p className="mb-0">
                    For building your own device within 3 minutes, you can
                    select from a wide range of sensors to build your own
                    device, e.g. a Barometer, Hygrometer, Thermometer, Luxmeter,
                    IR Radiometer, Motion Detector or a Presence Button. Simply
                    use the{' '}
                    <a
                      href="https://chipglobe-dev.web.app/cloudfree"
                      className="text-success"
                    >
                      Install-For-Free App
                    </a>{' '}
                    directly from browser to seamlessly transition between the
                    different types of devices. No software install on your PC
                    is required. Whether you&apos;re tracking atmospheric
                    changes of the weather, monitoring moisture levels
                    downstairs, or detecting motion at your entrance, the
                    possibilities are endless.{' '}
                  </p>
                  <p className=" mt-3">
                    {!isMobile && (
                      <Link
                        href={'/sensors'}
                        className={'btn btn-lg btn-success rounded-pill'}
                      >
                        <span className="small">Select Sensor </span>
                      </Link>
                    )}

                    {isMobile && (
                      <a
                        href={'/sensors'}
                        className={'btn btn-lg btn-success rounded-pill'}
                      >
                        <span className="small">
                          Select Sensor{' '}
                          {/* <i className='fa-solid fa-arrow-right ps-1'></i>display-10 */}
                        </span>
                      </a>
                    )}
                  </p>
                </div>
              </div>
              <div className="d-flex about-text">
                <div className="flex-shrink-0">
                  <i className="fa-solid fa-briefcase"></i>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h4 className="h5">
                    Housing your device, e.g. by an card board enclosure
                  </h4>
                  <p>
                    Discover the joy of perfect customization and unlock your
                    creative potential e.g. in housing the electronics you have
                    built, to give them to your beloved. You can do this in
                    various ways, e.g. by a handmade card paper enclosure or a
                    3D-print. Don&apos;t miss out to the{' '}
                    <a
                      href="https://www.chipglobe.shop/c/zubehoer/3d-print-for-makers"
                      className="text-success"
                    >
                      printed ones from our store
                    </a>{' '}
                    or challenge our community of 3D-design artists, who will
                    realize the 3D-print as you specify. .
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 wow fadeIn text-white"
            data-wow-delay="400ms"
            style={{
              visibility: 'visible',
              animationDelay: '400ms',
              animationName: 'fadeIn',
            }}
          >
            <div className="ps-lg-2-9 position-relative text-center text-sm-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/micro-controler.webp"
                alt="Micro-controller"
                className="d-sm-none d-inline-block"
              />
              <div className="about-img d-none d-sm-block">
                <p
                  className="px-4 py-3 text-align-justify bg-success pb-4"
                  style={{ textAlign: 'justify' }}
                >
                  For your orientation, we have simplified the stacking by these
                  letters S, M and A onto the Triple-Adapter. This makes it as
                  simple as possible to attach the three boards. Follow the
                  respective illustrations for building your own device.
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/micro-controler.webp"
                  className="img-fluid"
                  alt="Micro-controller"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
          </div>

          <div>
            <h5 className=" mb-3">
              Providing 16 Smart Home Applications in four EcoSystems
            </h5>
          </div>

          <div className="row mb-6">
            <div className="col-md-3">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '550px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/ecosystems/EcoSystem_CloudFree.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    width: '320px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />
                <h6 style={{ padding: '10px' }}>Cloudfree</h6>
                <p style={{ padding: '10px' }}>
                  The most secure and simple device does not relate to the
                  internet at all. You install it and it just works. This device
                  category is the best, if you do not need features besides the
                  major task of sensing something.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '550px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/ecosystems/EcoSystem_HomeAssistant.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    width: '320px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />
                <h6 style={{ padding: '10px' }}>Home Assistant</h6>
                <p style={{ padding: '10px' }}>
                  Home Assistant specifies in detail, which actions is to be
                  taken, if a device senses a certain situation. HA is currently
                  the worlds most popular environment for smart home devices.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '550px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/ecosystems/EcoSystem_IoT-AppStore.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    width: '320px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />
                <h6 style={{ padding: '10px' }}>IoT AppStore</h6>
                <p style={{ padding: '10px' }}>
                  If you have the idea of more devices, which you want to
                  jointly orchester by updates over the air, possibly at remote
                  locations (e.g. at your parents home) the IoT solution is your
                  first choice.{' '}
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="e-card"
                style={{
                  boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                  height: '550px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/content/ecosystems/EcoSystem_Matter.png"
                  className="wow fadeInUp"
                  data-wow-delay="100ms"
                  alt="..."
                  style={{
                    visibility: 'visible',
                    width: '320px',
                    animationDelay: '100ms',
                    animationName: 'fadeIn',
                  }}
                />
                <h6 style={{ padding: '10px' }}>Matter</h6>
                <p style={{ padding: '10px' }}>
                  Matter allows you to integrate your sensor device with up to
                  five of the most popular platforms at once, such as
                  Amazon&apos;s Alexa, Apple&apos;s Home, Google Home,
                  Samsung&apos;s SmartThings, or Home Assistant (HA).
                </p>
              </div>
            </div>
          </div>

          <div className=" mb-4">
            <h4>
              Discover our sustainability promise: Combining Sensor,
              Microcontroller, and Actuator
            </h4>
            <p>
              At the heart of our innovation lies{' '}
              <strong>Green Modularity</strong>, a groundbreaking concept that
              combines Sensors, Microcontrollers, and Actuators (S- M- & A-
              boards) as distinct, replaceable parts and following the
              systematic of any IoT product. This approach not only drives
              smarter business solutions but also promotes environmental
              sustainability by reducing electronic waste. By enabling
              individual component replacement rather than full device disposal,
              we extend the lifecycle of our products and support a circular
              economy.
            </p>
          </div>
          <div className=" mb-4 row">
            <div className="col-md-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/install/qr-code.jpeg"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  // width: '100px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
            </div>
            <div className="col-md-11">
              <p>
                As part of our commitment to sustainability, we fully comply
                with the{' '}
                <strong>
                  {' '}
                  Waste Electrical and Electronic Equipment (WEEE) Directive{' '}
                </strong>
                . This directive ensures the proper collection, recycling, and
                disposal of electronic products to minimize their environmental
                impact. Each of our products bears the
                <strong> crossed-out wheeled bin symbol</strong>, signaling that
                it must not be discarded with household waste but instead
                recycled responsibly.
              </p>
            </div>
            
            <div className="col-md-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/install/waste.jpeg"
                className="wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  width: '120px',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
            </div>
            <div className="col-md-8">
              <p>
                As space is limited on Printed Circuit Boards (PCBs), we
                facilitate direct access to this Info- and Sustainability
                website with our WEEE details by the QR-code printed on all our
                PCBs.
              </p>
            </div>
          </div>

          <div>
            <p>
              Via this QR-code the <strong>WEEE Compliance Information</strong>{' '}
              (Waste Electrical and Electronic Equipment) become accessible:
              <ul>
                <li>
                  <strong>WEEE Registration Number: </strong> DE 53301452.
                </li>
                <li>
                  <strong>Company Information: </strong> Carenuity acting as
                  Chipglobe GmbH, Cincinnatistrasse 60, 81549 Munich, Germany.{' '}
                </li>
                <li>
                  <strong>Contact Information: </strong> Reach us at
                  info@chipglobe.com or call us at (+49) 89-1222469-40 for
                  further inquiries.
                </li>
              </ul>
            </p>

            <p>
              Additionally, we encourage users to utilize the resources provided
              by the European Commission, including the platform for online
              dispute resolution.
            </p>
            <p>
              By integrating Green Modularity into our product designs and
              adhering to strict compliance protocols, we ensure that
              sustainability is not just a promise, but a practice. Explore the
              future of modular technology with us and join the movement toward
              a smarter, greener planet.
            </p>
          </div>

          <div className=" mb-4">
            <h4>
              {' '}
              Discover our sustainability secret: S-M-A can also make your
              business smart, by Green Modularity
            </h4>
          </div>

          <div className="row mb-6">
            {/* hstack justify-content-center align-items-center gap-2 */}
            <div className="col-md-3 mb-2 d-flex">
              <IoTComponentsCount
                count={28}
                label="Sensors"
                bgColor="#3d8346"
              />
            </div>

            <div className="col-md-3 mb-2 d-flex">
              <IoTComponentsCount
                count={5}
                label="Microcontrollers"
                bgColor="#493356"
              />
            </div>

            <div className="col-md-3 mb-2 d-flex">
              <IoTComponentsCount
                count={12}
                label="Actuators"
                bgColor="#065988"
              />
            </div>

            <div className="col-md-3 mb-2">
              <IoTComponentsCount
                count={1500}
                label="Solutions"
                bgColor="#275b37"
              />
            </div>
          </div>
          <div className=" mb-4">
            <h4>Unlock your success with our smart modular approach today!</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
