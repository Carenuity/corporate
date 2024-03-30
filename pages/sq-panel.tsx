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
                <br /> If you answered yes to any of these questions, then you
                need the <strong>Carenuity SQ-Panel</strong> - the smart device
                that helps you live a connected life with your loved ones.
              </p>
              <p className="mt-1">
                The Carenuity SQ-Panel is a 3-inch touch screen that measures
                and displays various sensor values in your home, such as the
                overall Air Quality, temperature, humidity, air pressure, C02
                and TVOC levels. It also detects the presence of people in the
                rooms that its range covers, using a radar sensor.
              </p>
              <p className="mt-1">
                The Carenuity SQ-Panel connects to the Carenuity cloud via the
                Carenuity Border Router, which acts as a gateway between the
                SQ-Panel and the internet and extends the range. Its long range
                surpasses wifi ranges by far. The App enables you to access and
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
                    Check the environment and location of your loved ones in
                    your home.
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
                display settings, such as brightness, color and layout,
                according to your preferences.
              </p>
              <p className="mt-1">
                The SQ-Panel is more than just a device - it&apos;s a way of
                caring for your loved ones and yourself. It helps you create a
                comfortable, healthy, and safe environment in your home. It also
                keeps you connected with your loved ones, and allows you to
                provide care and assistance to them, even when you are not
                physically present.
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
          <br />
          <div className="container">
            <div className="row">
              {/* case1 */}
              <div className="col-lg-4 mt-n1-9 mb-2">
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
              <div className="col-lg-4 mt-n1-9 mb-2">
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
              <div className="col-lg-4 mt-n1-9 mb-2">
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

              <div>
                <br />
                <br />
              </div>

              {/* case4 */}
              <div className="col-lg-4 mt-n1-9 mb-2">
                <div
                  className="e-card"
                  style={{
                    boxShadow: '3px 3px 15px 3px  hsla(0, 0%, 80%)',
                    height: '620px',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/content/case/case4.jfif"
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
              <div className="col-lg-4 mt-n1-9 mb-2">
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
              <div className="col-lg-4 mt-n1-9 mb-2">
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
                      know it&apos;s time to open the window and let some fresh air
                      in.
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
