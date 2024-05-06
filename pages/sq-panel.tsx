import React, { useContext } from 'react';
import PageTitle from '../components/PageTitle';
import Head from 'next/head';
import { LanguageSwitchContext } from '../components/context/LanguageSwitch';

const SqPanel = () => {
  const pageTitle = 'SQ Panel';
  const { state } = useContext(LanguageSwitchContext);

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
                {state === 'en' && (
                  <>
                   Would you like to make your home smarter, safer and healthier?
                  </>
                )}
                {state === 'de' && (
                  <>
                    Möchten Sie Ihr Zuhause intelligenter, sicherer und gesünder gestalten?
                  </>
                )}{' '}
                <br />
                {state === 'en' && (
                  <>
                    Would you like to monitor and improve the air quality and comfort in 
                    your home and breathe healthy air?
                  </>
                )}
                {state === 'de' && (
                  <>
                    Möchten Sie die Luftqualität und den Komfort in Ihrem Zuhause 
                    überwachen, verbessern und gesunde Luft atmen?
                  </>
                )}
                <br />
                {state === 'en' && (
                  <>
                    Would you like to stay in touch with your loved ones and know that 
                    they are safe and well ventilated even from a distance?
                  </>
                )}
                {state === 'de' && (
                  <>
                    Möchten Sie mit Ihren Lieben in Verbindung bleiben und sie auch 
                    aus der Ferne wohlbehalten in guter Raumluft wissen und sehen dass
                     regelmäßig gelüftet wird?
                  </>
                )}
                <br />
                {state === 'en' && (
                  <>
                    If you answered yes to any of these questions, then you need
                    the <strong>Carenuity SQ-Panel</strong> - the smart device
                    that helps you live a healthy and connected life with your loved ones.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Wenn Sie eine dieser Fragen mit „Ja“ beantwortet haben,
                    benötigen Sie das <strong>Carenuity SQ-Panel</strong> - das 
                    intelligente Gerät, das Ihnen hilft, ein gesundes und vernetztes 
                    Leben mit Ihren Lieben zu führen.
                  </>
                )}
              </p>
              <p className="mt-1">
                {state === 'en' && (
                  <>
                  The Carenuity SQ-Panel is a 2.6-inch touchscreen with built-in sensors. 
                  It displays the relevant sensor values of the room air. These are temperature, 
                  humidity, air pressure, carbon dioxide (C02) and airborne organic compounds 
                  (TVOC). It also detects the presence of people in the room, which it can 
                  detect and monitor up to 6m.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Das Carenuity SQ-Panel ist ein 2.6-Zoll-Touchscreen mit 
                    eingebauten Sensoren. Es zeigt die relevanten Sensorwerte 
                    der Raumluft an. Dies sind Temperatur, Luftfeuchtigkeit, 
                    Luftdruck, Kohlendioxid (C02) und organische Verbindungen 
                    in der Luft (TVOC). Es erkennt auch die Anwesenheit von 
                    Personen im Raum, den er bis zu 6m erfassen und überwachen kann.
                  </>
                )}
              </p>
              <p className="mt-1">
                {state === 'en' && (
                  <>
                  The Carenuity smartphone app allows you to access the SQ-Panel while on the move and 
                  lets you monitor the SQ-Panel from anywhere and, for example, activate the alarm when you are away.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Die Carenuity Smartphone App erlaubt Ihnen den Zugriff auf das SQ-Panel von unterwegs 
                    und lässt Sie das SQ-Panel von überall aus monitoren und beispielsweise den Alarm bei 
                    Abwesenheit aktivieren.
                  </>
                )}
              </p>
              <p className="mt-1">
                {state === 'en' && (
                  <>
                    The Carenuity SQ-Panel connects to the Carenuity cloud via
                    the Carenuity Border Router, which acts as a gateway between
                    your home network and the internet. This enables you to
                    access and control your Carenuity SQ-Panel from anywhere,
                    using the Carenuity Home app on your smartphone.
                  </>
                )}
                {state === 'de' && (
                  <>
                    Das Carenuity SQ-Panel stellt über das eine Verbindung zur
                    Carenuity-Cloud her Carenuity Border Router, der als Gateway
                    zwischen Ihnen fungiert Heimnetzwerk und Internet. Dies
                    ermöglicht Ihnen den Zugriff auf und Steuern Sie Ihr
                    Carenuity SQ-Panel von überall aus mit dem Carenuity
                    Home-App auf Ihrem Smartphone.
                  </>
                )}
              </p>
              <p className="mt-1">
                {state === 'en' && <>With the Carenuity Home app, you can</>}{' '}
                {state === 'de' && (
                  <>Mit der Carenuity Home-App ist das möglich</>
                )}
                :
              </p>
              <div className="col-10 ms-4 wow fadeIn" data-wow-delay="200ms">
                <div className="d-flex align-items-center">
                  <i className="ti-check display-26 text-primary"></i>
                  <span className="ms-3 text-dark fw-bold">
                    {state === 'en' && (
                      <>
                       View the sensor values of your Carenuity SQ panel 
                       in real time, from anywhere and at any time.
                      </>
                    )}
                    {state === 'de' && (
                      <>
                        Sehen Sie sich die Sensorwerte Ihres Carenuity SQ-Panels 
                        in Echtzeit an, von überall und jederzeit.
                      </>
                    )}
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="ti-check display-26 text-primary"></i>
                  <span className="ms-3 text-dark fw-bold">
                    {state === 'en' && (
                      <>
                        Receive alerts and notifications if the sensor values 
                        exceed or fall below the threshold values you have set.
                      </>
                    )}
                    {state === 'de' && (
                      <>
                        Erhalten Sie Warnungen und Benachrichtigungen, wenn der Sensor 
                        Werte die von Ihnen festgelegten Schwellenwerte überschreiten oder 
                        unterschreiten.
                      </>
                    )}
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="ti-check display-26 text-primary"></i>
                  <span className="ms-3 text-dark fw-bold">
                    {state === 'en' && (
                      <>
                        Monitor the air quality over time at your loved ones&apos; location or in 
                        your home and communicate with your loved ones if you notice that an 
                        expected airing or other daily routine has not or not yet taken place.
                      </>
                    )}
                    {state === 'de' && (
                      <>
                        Überwachen Sie den zeitlichen Verlauf der Luftqualität am Standort 
                        Ihrer Lieben oder in Ihrem Zuhause und kommunizieren Sie mit ihren 
                        Lieben, wenn Sie bemerken, dass ein erwartetes Lüften oder eine andere 
                        Alltagsroutine nicht oder noch nicht stattgefunden hat.
                      </>
                    )}
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="ti-check display-26 text-primary"></i>
                  <span className="ms-3 text-dark fw-bold">
                    {state === 'en' && (
                      <>
                        The historical data and trends of the sensor values can also be helpful. 
                        Get personalized insights and tips to improve air quality and safety in
                         your home.
                      </>
                    )}
                    {state === 'de' && (
                      <>
                        Auch die historische Daten und Trends der Sensorwerte 
                        können hilfreich sein. Erhalten Sie individuelle Einblicke 
                        und Tipps zur Verbesserung der Luftqualität und Sicherheit 
                        in Ihrem Zuhause.
                      </>
                    )}
                  </span>
                </div>
              </div>
              <p className="mt-3">
                {state === 'en' && (
                  <>
                    The Carenuity SQ panel is easy to install and use. You can have
                     it mounted in the wall, in which case it is wireless, or you can 
                     simply place it on a table, chest of drawers or shelf. You can adjust 
                     the display settings such as brightness and color to suit your preferences. 
                  </>
                )}
                {state === 'de' && (
                  <>
                    Das Carenuity SQ-Panel ist einfach zu installieren und zu 
                    verwenden. Sie können es in die Wand montieren lassen, dann 
                    ist es kabellos, oder Sie stellen es einfach auf einen Tisch, 
                    eine Kommode oder ins Regal. Sie können die Anzeigeeinstellungen
                     wie Helligkeit und Farbe anpassen, ganz nach Ihren Vorlieben. 
                  </>
                )}
              </p>
              <p className="mt-1">
                {state === 'en' && (
                  <>
                    The Carenuity SQ panel is more than just a device: it&apos;s 
                    a good and totally discreet way to show your loved ones you care, 
                    and for yourself too. It helps to create a comfortable, healthy and 
                    safe environment in your home.It also keeps you connected to your 
                    loved ones and allows you to care for and support them even when you 
                    are not physically there.
                  </>
                )}
                {state === 'de' && (
                  <>
                   Das Carenuity SQ-Panel ist mehr als nur ein Gerät: Es ist gute und absolut 
                   diskrete Art und Weise, ihren Lieben Ihre Fürsorge zu zeigen, und auch für 
                   Sie selbst. Es hilft eine komfortable, gesunde und sichere Umgebung in Ihrem 
                   Heim zu schaffen. Es hält Sie auch mit Ihren Lieben in einer Verbindung und 
                   ermöglicht Ihnen, sie zu betreuen und zu unterstützen, auch wenn Sie sich nicht 
                   physisch vor Ort befinden.
                  </>
                )}
              </p>
              <p className="mt-1">
                {state === 'en' && (
                  <>
                    The Carenuity SQ panel is the solution for your smart home. 
                  Support us on Kickstarter and order it today.</>
                )}
                {state === 'de' && (
                  <>
                    Das Carenuity SQ-Panel ist die Lösung für Ihr Smart Home. 
                    Unterstützen Sie uns auf Kickstarter und bestellen Sie es noch heute.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* <!--casestudy --> */}

          <hr />
          <h4>
            {state === 'en' && <>Case study for the SQ-Panel</>}
            {state === 'de' && <>Fallstudie zum SQ-Panel</>}
          </h4>
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
                    <h5>
                      {state === 'en' && <>Home office</>}{' '}
                      {state === 'de' && <>Heimbüro</>}:
                    </h5>
                    <p>
                      {state === 'en' && (
                        <>
                          You work from home and want to ensure that the indoor
                          air quality is optimal.
                          <br />
                          The SQ-Panel shows you the current valuesand warns you
                          if necessary so that you can concentrate on your work.
                        </>
                      )}
                      {state === 'de' && (
                        <>
                          Sie arbeiten von zu Hause aus und möchten
                          sicherstellen, dass die Innenräume gewährleistet sind
                          Die Luftqualität ist optimal.
                          <br />
                          Das SQ-Panel zeigt Ihnen die aktuellen Werte an und
                          warnt Sie bei Bedarf, damit Sie sich auf Ihre Arbeit
                          konzentrieren können.
                        </>
                      )}
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
                    <h5>
                      {state === 'en' && <>Bedroom</>}{' '}
                      {state === 'de' && <>Schlafzimmer</>}:
                    </h5>
                    <p>
                      {state === 'en' && (
                        <>
                          Before you go to sleep, check the air quality. If the
                          CO2 level is too high, open the window or switch on an
                          air purifier.
                        </>
                      )}
                      {state === 'de' && (
                        <>
                          Überprüfen Sie vor dem Schlafengehen die Luftqualität.
                          Wenn das CO2 Wenn der Füllstand zu hoch ist, öffnen
                          Sie das Fenster oder schalten Sie die Lüftung ein
                          Luftreiniger.
                        </>
                      )}
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
                    <h5>
                      {state === 'en' && <>Children&apos;s room</>}
                      {state === 'de' && <>Kinderzimmer</>}:
                    </h5>
                    <p>
                      {state === 'en' && (
                        <>
                          The SQ-Panel warns you if the air quality is not
                          ideal.
                          <br />
                          This allows you to take timely action to protect your
                          children&apos;s health
                        </>
                      )}
                      {state === 'de' && (
                        <>
                          Das SQ-Panel warnt Sie, wenn die Luftqualität nicht
                          optimal ist.
                          <br />
                          So können Sie rechtzeitig Maßnahmen zum Schutz Ihres
                          Unternehmens ergreifen Gesundheit der Kinder
                        </>
                      )}
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
                    <h5>
                      {state === 'en' && <>Large offices</>}
                      {state === 'de' && <>Große Büros</>}:
                    </h5>
                    <p>
                      {state === 'en' && (
                        <>
                          You work from home and want to ensure that the indoor
                          air quality is optimal.
                          <br />
                          The SQ-Panel shows you the current values and warns
                          you if necessary so that you can concentrate on your
                          work.
                        </>
                      )}
                      {state === 'de' && (
                        <>
                          Sie arbeiten von zu Hause aus und möchten die Raumluft
                          sicherstellen Qualität ist optimal.
                          <br />
                          Das SQ-Panel zeigt Ihnen die aktuellen Werte an und
                          warnt Sie ggf notwendig, damit Sie sich auf Ihre
                          Arbeit konzentrieren können.
                        </>
                      )}
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
                    <h5>
                      {state === 'en' && <>Vaccation Home</>}
                      {state === 'de' && <>Ferienhaus</>}:
                    </h5>
                    <p>
                      {state === 'en' && (
                        <>
                          Even if you are far away, you can use the app to check
                          the indoor air parameters in your vacation home and
                          make sure everything is in order.
                        </>
                      )}
                      {state === 'de' && (
                        <>
                          Auch wenn Sie weit weg sind, können Sie dies mit der
                          App überprüfen Überprüfen Sie die Raumluftparameter in
                          Ihrem Ferienhaus und stellen Sie sicher alles ist in
                          ordnung.
                        </>
                      )}
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
                    <h5>
                      {state === 'en' && <>Kitchen and cooking</>}
                      {state === 'de' && <>Küche und Kochen</>}:
                    </h5>
                    <p>
                      {state === 'en' && (
                        <>
                          You are preparing a feast and want to monitor the air quality in the kitchen. 
                          The SQ-Panel shows you the current values and helps you to optimize the air circulation.
                           If the VOC content rises, it&ap0s;s time to ventilate.
                        </>
                      )}
                      {state === 'de' && (
                        <>
                          Sie bereiten ein Festmahl vor und möchten die Luftqualität in der Küche überwachen. 
                          Das SQ-Panel zeigt Ihnen die aktuellen Werte an und hilft Ihnen dabei, 
                          die Luftzirkulation zu optimieren. Wenn der VOC-Gehalt steigt, wird es Zeit zu lüften.
                        </>
                      )}
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
                    <h5>
                      {state === 'en' && <>Motorhome in the front garden</>}
                      {state === 'de' && <>Wohnmobil im Vorgarten</>}:
                    </h5>
                    <p>
                      {state === 'en' && (
                        <>
                          Your motorhome is parked in the front garden and you
                          want to make sure it&apos;s comfortable inside before
                          you set off on a journey.
                          <br />
                          The SQ-Panel shows you the indoor air parameters so
                          that you can take measures in advance.
                        </>
                      )}
                      {state === 'de' && (
                        <>
                          Ihr Wohnmobil parkt im Vorgarten und Sie möchten
                          Stellen Sie sicher, dass es drinnen bequem ist, bevor
                          Sie es aufstellen auf eine Reise.
                          <br />
                          Das SQ-Panel zeigt Ihnen die Raumluftparameter an Sie
                          können bereits im Vorfeld Maßnahmen ergreifen.
                        </>
                      )}
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
                      {state === 'en' && (
                        <>
                          Even in a remote garden shed or garage, you can use
                          the SQ-Panel to monitor the presence of people (CO2)
                          or vehicles (VOC).
                        </>
                      )}
                      {state === 'de' && (
                        <>
                          Selbst in einem abgelegenen Gartenhaus oder einer
                          Garage können Sie den nutzen SQ-Panel zur Überwachung
                          der Anwesenheit von Personen (CO2) bzw Fahrzeuge
                          (VOC).
                        </>
                      )}
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
                    <h5>
                      {state === 'en' && <>Garden shed</>}
                      {state === 'de' && <>Gartenschuppen</>}:
                    </h5>
                    <p>
                      {state === 'en' && (
                        <>
                          If you store tools or plant equipment there, it is
                          important to know if the humidity is too high to
                          prevent mold growth.
                        </>
                      )}
                      {state === 'de' && (
                        <>
                          Wenn Sie dort Werkzeuge oder Betriebsgeräte lagern,
                          ist dies der Fall Es ist wichtig zu wissen, ob die
                          Luftfeuchtigkeit zu hoch ist, um dies zu verhindern
                          Schimmelbildung.
                        </>
                      )}
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
                    <h5>
                      {state === 'en' && (
                        <>Guest comfort and indoor air quality</>
                      )}
                      {state === 'de' && <>Gästekomfort und Raumluftqualität</>}
                      :
                    </h5>
                    <p>
                      {state === 'en' && (
                        <>
                          The SQ-Panel monitors indoor air parameters such as
                          temperature, humidity, CO2 and VOC. If the room is too
                          warm or too stuffy, you can take timely action to
                          improve the comfort of your guests.
                        </>
                      )}
                      {state === 'de' && (
                        <>
                          Das SQ-Panel überwacht Raumluftparameter wie z
                          Temperatur, Luftfeuchtigkeit, CO2 und VOC. Wenn das
                          Zimmer auch ist Wenn es zu warm oder zu stickig ist,
                          können Sie rechtzeitig Abhilfe schaffen den Komfort
                          Ihrer Gäste.
                        </>
                      )}
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
                    <h5>
                      {state === 'en' && (
                        <>Energy efficiency and guest presence</>
                      )}
                      {state === 'de' && <>Energieeffizienz und Gästepräsenz</>}
                      :
                    </h5>
                    <p>
                      {state === 'en' && (
                        <>
                          When guests leave the room, the device detects their absence. 
                          Users can now switch off the light or turn down the heating 
                          to save energy until guests return. The device provides information 
                          and ensures comfort.
                        </>
                      )}
                      {state === 'de' && (
                        <>
                          Wenn Gäste den Raum verlassen, erkennt das Gerät die Abwesenheit. 
                          Nutzer können das Licht nun ausschalten bzw. die Heizung herunterdrehen, 
                          um Energie zu sparen, bis Gäste wieder kommen. Das Gerät informiert und sorgt für Komfort.
                        </>
                      )}
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
                    <h5>
                      {state === 'en' && <>Security and notifications</>}
                      {state === 'de' && <>Sicherheit und Benachrichtigungen</>}
                      :
                    </h5>
                    <p>
                      {state === 'en' && (
                        <>
                          The SQ-Panel can notify you of expected and unexpected events. 
                          For example, if a window is left open or if cooking is taking 
                          place in a room, you will receive a notification.
                        </>
                      )}
                      {state === 'de' && (
                        <>
                          Das SQ-Panel kann Sie bei erwarteten und unerwarteten Ereignissen 
                          benachrichtigen. Zum Beispiel, wenn ein Fenster offen gelassen wird 
                          oder wenn in einem Raum gekocht wird, erhalten Sie eine Benachrichtigung.
                        </>
                      )}
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
