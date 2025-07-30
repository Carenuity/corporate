import dynamic from 'next/dynamic';

const ChatGPTBanner = dynamic(
  () => import('../components/dynamic/ChatGPTBanner'),
  {
    ssr: false,
  }
);

const ChatGPTAboutCarenuity = () => {
  return (
    <>
      <section id={'chatgpt'} className="pt-1-6 pt-md-9 pb-0 mb-6">
        <div className="position-relative">
          <ChatGPTBanner />
          <div className="row g-0 justify-content-end">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="400ms">
              <div className="bg-secondary pt-5 pt-lg-12 pt-xxl-16 pb-2 pb-xxl-11 px-2-2 px-xxl-11 position-relative z-index-9 why-chooseus">
                <div className="me-xxl-15">
                  <div className="section-title left mb-4 white">
                    <span className="sm-title text-white">About Carenuity</span>
                    {/* <h2 className="h6 mb-0 text-white">
                      This is what ChatGPT found out about us, analyzing our
                      Social Media Post and Internet presence in May 2023.
                    </h2> */}
                  </div>
                  <p className="text-white mb-2-3 opacity9">
                    Carenuity is a smart home and health-tech solution developed
                    by ChipGlobe GmbH, focused on enhancing indoor air quality
                    monitoring and elderly care through an integrated IoT
                    platform. At the heart of Carenuity&apos;s offering is the
                    SQ-Panel, a stylish display that captures and visualizes
                    environmental data such as CO₂, TVOC, temperature, humidity,
                    air pressure, and presence detection. Designed for both
                    households and professional environments, the system is
                    Matter-compatible, allowing seamless integration with smart
                    home ecosystems like Alexa, Google Home, and Apple HomeKit.
                  </p>
                  <p className="text-white mb-2-3 opacity9">
                    Supporting devices such as SQ-Power, SQ-Connector, and
                    flexible mounting options make installation and scaling
                    easy, whether in a single room or across multiple
                    facilities. For tech-savvy users and developers, Carenuity
                    also provides compact sensor kits like the C3-Mini,
                    fostering DIY projects and custom applications. These
                    devices can be managed through the Carenuity Home App,
                    available on iOS and Android, which offers real-time
                    monitoring, push notifications, and secure user
                    management—all with strong privacy considerations.
                  </p>
                  <p className="text-white mb-2-3 opacity9">
                    Carenuity also actively supports skill development for
                    students through its Home Challenge initiative, a learning
                    program designed to encourage young innovators to explore
                    real-world IoT technologies. Through hands-on activities,
                    students learn to set up sensors, analyze data, and build
                    smart solutions, helping them grow their technical and
                    creative skills in a meaningful and practical way.
                  </p>
                  <p className="text-white mb-2-3 opacity9">
                    Whether you&apos;re a caregiver monitoring a loved one, a
                    smart building manager enhancing air quality, a developer
                    building IoT solutions, or a student eager to learn,
                    Carenuity delivers reliable, modular tools designed for
                    modern, connected living. With a clear mission to empower
                    caregivers and support aging with dignity, Carenuity stands
                    at the intersection of wellness, technology, and
                    compassionate innovation.
                  </p>
                  <div className="position-absolute bottom-0 right z-index-1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/img/bg/bg-07.png" alt="..." />
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

export default ChatGPTAboutCarenuity;
