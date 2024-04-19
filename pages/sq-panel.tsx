import React from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';

const SqPanel = () => {
  const pageTitle = 'SQ Panel';
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
            <div className="col-lg-10 mt-n1-9 mb-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/content/SQ-Panel-frontview.webp"
                className="mt-1-9 wow fadeInUp"
                data-wow-delay="100ms"
                alt="..."
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
            </div>
            <div className="col-lg-10 mt-n1-9 mb-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <video
                src="/videos/content/SQ-Panel_on_TableStand.mp4"
                loop={true}
                autoPlay={true}
                className="mt-1-9 wow fadeInUp w-100"
                data-wow-delay="100ms"
                style={{
                  visibility: 'visible',
                  animationDelay: '100ms',
                  animationName: 'fadeIn',
                }}
              />
            </div>

            <div className="col-lg-10 mt-n1-9" style={{ textAlign: 'justify' }}>
              <p className="mt-5">
                Do you want to make your home smarter, safer, and healthier?{' '}
                <br />
                Do you want to monitor and improve the air quality and comfort
                in your home?
                <br /> Do you want to stay connected with your loved ones and
                care for them from a distance?
                <br />
                If you answered yes to any of these questions, then you need the{' '}
                <strong>Carenuity SQ-Panel</strong> - the smart device that
                helps you live a connected life with your loved ones.
              </p>
              <p className="mt-1">
                The Carenuity SQ-Panel is a 3-inch touch screen that measures
                and displays various sensor values in your home, such as
                temperature, humidity, air pressure, C02 and TVOC levels. It
                also detects the presence of people in the rooms that it covers,
                using a passive infrared sensor.
              </p>
              <p className="mt-1">
                The Carenuity SQ-Panel connects to the Carenuity cloud via the
                Carenuity Border Router, which acts as a gateway between your
                home network and the internet. This enables you to access and
                control your Carenuity SQ-Panel from anywhere, using the
                Carenuity Home app on your smartphone.
              </p>
              <p className="mt-1">With the Carenuity Home app, you can:</p>
              <div className="col-10 ms-4 wow fadeIn" data-wow-delay="200ms">
                <div className="d-flex align-items-center">
                  <i className="ti-check display-26 text-primary"></i>
                  <span className="ms-3 text-dark fw-bold">
                    View the sensor values from your Carenuity SQ-Panel in
                    real-time, from anywhere and at anytime.
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="ti-check display-26 text-primary"></i>
                  <span className="ms-3 text-dark fw-bold">
                    Receive alerts and notifications when the sensor values
                    exceed or fall below the thresholds that you set.
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="ti-check display-26 text-primary"></i>
                  <span className="ms-3 text-dark fw-bold">
                    Check the status and location of your loved ones in your
                    home, and communicate with them via voice or text messages.
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="ti-check display-26 text-primary"></i>
                  <span className="ms-3 text-dark fw-bold">
                    Access historical data and trends of the sensor values, and
                    get insights and tips on how to improve the air quality and
                    safety in your home.
                  </span>
                </div>
              </div>
              <p className="mt-3">
                The Carenuity SQ-Panel is easy to install and use. You can mount
                it on the wall or place it on a table. You can customize the
                display settings, such as brightness, color, and layout,
                according to your preferences. You can also interact with the
                Carenuity SQ-Panel using voice commands or gestures.
              </p>
              <p className="mt-1">
                The Carenuity SQ-Panel is more than just a device - it&apos;s a
                way of caring for your loved ones and yourself. It helps you
                create a comfortable, healthy, and safe environment in your
                home. It also keeps you connected with your loved ones, and
                allows you to provide care and assistance to them, even when you
                are not physically present.
              </p>
              <p className="mt-1">
                The Carenuity SQ-Panel is the ultimate solution for smart home
                care. Order yours today and enjoy the benefits of living a
                connected life with Carenuity.
              </p>
            </div>
          </div>

          {/* <!--casestudy --> */}

          <hr />
          <h4>Case study for the SQ-Panel</h4>
          <div className="container mt-5">
            <div className="row">
              {/* case1 */}
              <div className="col-lg-4 mt-n1-9 mb-5">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '620px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/case/case1.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />

                  <div style={{ padding: '10px' }}>
                    <h5>Home office:</h5>
                    <p>
                      You work from home and want to ensure that the indoor air
                      quality is optimal.
                      <br />
                      The SQ-Panel shows you the current valuesand warns you if
                      necessary so that you can concentrate on your work.
                    </p>
                  </div>
                </div>
              </div>

              {/* case2 */}
              <div className="col-lg-4 mt-n1-9 mb-5">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '620px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/case/case2.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />

                  <div style={{ padding: '10px' }}>
                    <h5>Bedroom:</h5>
                    <p>
                      Before you go to sleep, check the air quality. If the CO2
                      level is too high, open the window or switch on an air
                      purifier.
                    </p>
                  </div>
                </div>
              </div>

              {/* case3 */}
              <div className="col-lg-4 mt-n1-9 mb-5">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '620px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/case/case3.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />
                  <div style={{ padding: '10px' }}>
                    <h5>Children&apos;s room:</h5>
                    <p>
                      The SQ-Panel warns you if the air quality is not ideal.
                      <br />
                      This allows you to take timely action to protect your
                      children&apos;s health
                    </p>
                  </div>
                </div>
              </div>

              {/* case4 */}
              <div className="col-lg-4 mt-n1-9 mb-5">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '620px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/case/case4.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />

                  <div style={{ padding: '10px' }}>
                    <h5>Large offices:</h5>
                    <p>
                      You work from home and want to ensure that the indoor air
                      quality is optimal.
                      <br />
                      The SQ-Panel shows you the current values and warns you if
                      necessary so that you can concentrate on your work.
                    </p>
                  </div>
                </div>
              </div>

              {/* case5 */}
              <div className="col-lg-4 mt-n1-9 mb-5">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '620px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/case/case5.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />

                  <div style={{ padding: '10px' }}>
                    <h5>Vaccation Home:</h5>
                    <p>
                      Even if you are far away, you can use the app to check the
                      indoor air parameters in your vacation home and make sure
                      everything is in order.
                    </p>
                  </div>
                </div>
              </div>

              {/* case6 */}
              <div className="col-lg-4 mt-n1-9 mb-5">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '620px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/case/case6.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />
                  <div style={{ padding: '10px' }}>
                    <h5>Kitchen and cooking:</h5>
                    <p>
                      You are preparing a feast and want to monitor the indoor
                      air quality in the kitchen.
                      <br />
                      The SQ-Panel shows you the current values and helps you to
                      optimize the air circulation. If the CO2 level rises, you
                      know it&apos;s time to open the window and let some fresh
                      air in.
                    </p>
                  </div>
                </div>
              </div>

              {/* case7 */}
              <div className="col-lg-4 mt-n1-9 mb-5">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '620px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/case/case7.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />
                  <div style={{ padding: '10px' }}>
                    <h5>Motorhome in the front garden:</h5>
                    <p>
                      Your motorhome is parked in the front garden and you want
                      to make sure it&apos;s comfortable inside before you set
                      off on a journey.
                      <br />
                      The SQ-Panel shows you the indoor air parameters so that
                      you can take measures in advance.
                    </p>
                  </div>
                </div>
              </div>

              {/* case8 */}
              <div className="col-lg-4 mt-n1-9 mb-5">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '620px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/case/case8.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />
                  <div style={{ padding: '10px' }}>
                    <h5>Garage:</h5>
                    <p>
                      Even in a remote garden shed or garage, you can use the
                      SQ-Panel to monitor the presence of people (CO2) or
                      vehicles (VOC).
                    </p>
                  </div>
                </div>
              </div>

              {/* case8b */}
              <div className="col-lg-4 mt-n1-9 mb-5">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '620px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/case/case8b.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />
                  <div style={{ padding: '10px' }}>
                    <h5>Garden shed:</h5>
                    <p>
                      If you store tools or plant equipment there, it is
                      important to know if the humidity is too high to prevent
                      mold growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* case9 */}
              <div className="col-lg-4 mt-n1-9 mb-5">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '620px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/case/case9.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />
                  <div style={{ padding: '10px' }}>
                    <h5>Guest comfort and indoor air quality:</h5>
                    <p>
                      The SQ-Panel monitors indoor air parameters such as
                      temperature, humidity, CO2 and VOC. If the room is too
                      warm or too stuffy, you can take timely action to improve
                      the comfort of your guests.
                    </p>
                  </div>
                </div>
              </div>

              {/* case10 */}
              <div className="col-lg-4 mt-n1-9 mb-5">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '620px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/case/case10.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />
                  <div style={{ padding: '10px' }}>
                    <h5>Energy efficiency and guest presence:</h5>
                    <p>
                      When your guests leave the room, the SQ-Panel detects
                      their absence. Users can then switch off the lights or
                      turn down the heating to save energy. When they return,
                      the device alerts them and helps to ensure comfort.
                    </p>
                  </div>
                </div>
              </div>
              {/* case11 */}
              <div className="col-lg-4 mt-n1-9 mb-5">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '620px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/case/case11.png"
                    className="wow fadeInUp"
                    data-wow-delay="100ms"
                    alt="..."
                    style={{
                      visibility: 'visible',
                      animationDelay: '100ms',
                      animationName: 'fadeIn',
                    }}
                  />
                  <div style={{ padding: '10px' }}>
                    <h5>Security and notifications:</h5>
                    <p>
                      The SQ-Panel can notify you when expected and unexpected
                      events occur. For example, if a window is left open or
                      cooking is taking place in a room, you will receive a
                      notification.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SqPanel;
