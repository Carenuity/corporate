import React from 'react';
import Head from 'next/head';
import PageTitle from '../components/PageTitle';

const Page = () => {
  const pageTitle = 'Solution Builder';
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
        links={[{ path: '/', title: '' }]}
        pageTitle={pageTitle}
        pageUrl=""
      />

      <section className="pt-4">
        <div className="container">
          <h4>What is the Solution Builder?</h4>
          <p>
          The Solution Builder by Carenuity is a fully browser-based online platform that systematically simplifies the creation, commissioning, and distribution of electronic devices. Its goal is to provide both technically interested users without deep prior knowledge and professional developers with a shared, structured environment in which functional IoT devices can be built from standardized hardware components within minutes and shared worldwide. The slogan “Build your own Device within 3 Minutes” does not represent a marketing claim, but rather the underlying technical and organizational design principle of the platform.
The first target user group consists of users who want to build their own gadgets or sensor devices in a simple, reliable, and reproducible way. These users work with the classic building blocks of electronic systems: sensors for capturing physical or chemical parameters, microcontrollers for processing this data, and actuators for displaying information or triggering actions. The Solution Builder abstracts the technical complexity of these components by combining preconfigured hardware bundles with immediately executable applications. The required hardware can be purchased as a coordinated set via the ChipGlobe shop. In an upcoming version of the platform, this process will be further streamlined by adding a “Get this HW” button next to the respective “Install-for-Free” button, allowing users to order the matching hardware directly without leaving the Solution Builder.
For each hardware bundle, multiple applications are available on the Solution Builder. Each application includes a clear functional description, a named author, and publicly accessible source code hosted on GitHub. This ensures full transparency regarding functionality, origin, and extensibility. Commissioning is performed entirely through the web browser. No local software installation is required—neither development environments nor drivers or flashing tools. The user simply connects the microcontroller to a computer via a USB Type-C cable, opens the browser, and flashes the selected application directly from the Solution Builder onto the device. This consistently browser-based architecture significantly lowers the entry barrier and enables platform-independent usage, regardless of the operating system or performance of the end device.
It is precisely this combination of standardized, preconfigured hardware, a fully browser-based flashing process, and immediately usable applications that makes the Solution Builder unique in this form. Within minutes, individual hardware components are transformed into a ready-to-use IoT device that can be used, tested, or further developed immediately. For educational institutions, makers, students, development teams, and innovation departments, this results in a substantial reduction in time, cost, and organizational complexity for prototyping, evaluation, and idea validation.
In addition to end users, the Solution Builder specifically addresses a second user group: developers and makers. For them, the platform provides a structured way to publish their own solutions and make them accessible to a global community. Developers upload their applications to the Solution Builder, including source code, configuration parameters, and recommended hardware. The uploaded code is automatically analyzed, and a large language model generates a clear and consistent description of the application’s functionality. This significantly reduces the documentation effort for developers without compromising technical transparency or traceability. Published solutions can then be installed, tested, and reused directly by other users via the browser.
The Solution Builder therefore functions not only as a commissioning and installation tool, but as an open sharing platform for working hardware–software combinations. Developers can share their projects with colleagues, customers, students, or the general public, independent of geographic location. Each solution is based on the universal building blocks of modern IoT systems—sensor, microcontroller, and actuator—and can be reproduced with defined settings. In this way, an open marketplace for proven IoT solutions is created, in which knowledge is not isolated but systematically shared, reused, and further developed.
A central element of the Solution Builder is its standardized hardware kits, which are designed to provide a consistent unboxing and commissioning experience. Currently, 23 different kits, bundles, or boxes are available, each equipped with different piggybacked C3-Mini sensors. All so-called All-for-One Sensor Boxes follow a uniform hardware core: the Carenuity Triple Adapter. This adapter provides three logically defined slots—Slot S for sensors, Slot M for the recommended C3-Mini microcontroller or compatible ESP8266- and ESP32-based microcontrollers, and Slot A for actuators, typically a 0.96-inch OLED display. The Triple Adapter mechanically and electrically connects these three components into a complete S-M-A IoT unit.
Each box additionally includes a short USB Type-C data cable for power supply, installation, and optional flashing, as well as a precisely fitting 3D-printed enclosure for safe and living-space-friendly integration of the device. This consistent standardization ensures that hardware, software, and mechanical integration work seamlessly together. At the same time, the system remains fully modular: sensors, microcontrollers, and actuators can be replaced or extended within minutes without changing the underlying overall concept.
In summary, the Solution Builder by Carenuity is an end-to-end platform that covers the entire path from idea to hardware selection, commissioning, testing, and the worldwide distribution of functional IoT solutions. For users, it offers an extremely low-threshold entry into building their own devices. For developers, it provides a scalable infrastructure for publishing, validating, and distributing their solutions. Technically, the Solution Builder is based on open standards, transparent source code, and a consistent browser architecture. Functionally, it connects hardware, software, and community into an integrated ecosystem that prioritizes speed, reusability, and collaboration.

          
          </p>
          <h4>Swapable Sensors</h4>
          <p>
            The C3-Mini devices are quite versatile, and one of their standout
            features is the ability to swap sensors easily. This flexibility
            allows users to quickly change or upgrade sensors based on their
            specific needs without having to replace the entire device. This is
            particularly useful for applications that require different types of
            environmental monitoring, such as temperature, humidity, air
            quality, and more
          </p>
          <h4>Long Range 868 MHz Communication</h4>
          <p>
            A key feature of Carenuity&apos;s SQ-Products is their long-range
            communication capability using the 868 MHz frequency. This allows
            for reliable and extended range connectivity, making these products
            ideal for applications that require robust and wide-area coverage.
            The 868 MHz frequency is particularly effective in penetrating
            obstacles and providing stable connections over long distances,
            enhancing the overall performance and reliability of the system.
          </p>
          <h4>Instant Applications & Quick Change Feature</h4>
          <p>
            One of the standout features of Carenuity&apos;s C3-Mini offerings
            is the ability to deploy instant applications in just three minutes,
            thanks to the innovative Solution Builder. This tool streamlines the
            setup process, allowing users to quickly launch and share
            applications tailored to their specific needs, for use by their
            friends without extensive technical expertise. This rapid deployment
            capability significantly reduces time-to-market and enhances
            operational efficiency, suited as well for industrial usecases.
          </p>
        </div>
      </section>
    </>
  );
};

export default Page;
