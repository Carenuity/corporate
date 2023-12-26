import Link from 'next/link';
import { LANG_ENGLISH } from '../../utils/constants';
import BlogLayout from '../BlogLayout';
import PageTitle from '../PageTitle';

const Index = () => {
  return (
    <>
      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        prevPage="Home"
        prevPageUrl="/"
        pageTitle="Privacy Policy"
        pageUrl="/privacy"
      />

      <BlogLayout lang={LANG_ENGLISH}>
        <h2 className="text-primary mb-3">Privacy Policy</h2>

        <div className="wow fadeIn" data-wow-delay="20ms">
          <h3 className="h4 mb-3 text-primary">
            1. An overview of data protection
          </h3>

          <h5 className="h6 mb-2">General</h5>
          <p className="mb-4">
            The following gives a simple overview of what happens to your
            personal information when you visit our website. Personal
            information is any data with which you could be personally
            identified. Detailed information on the subject of data protection
            can be found in our privacy policy found below.
          </p>

          <h5 className="h6 mb-2">Data collection on our website</h5>
          <h5 className="h6 mb-2">
            Who is responsible for the data collection on this website?
          </h5>
          <p className="mb-4">
            The data collected on this website are processed by the website
            operator. The operator&apos;s contact details can be found in the
            website&apos;s required legal notice.
          </p>

          <h5 className="h6 mb-2">How do we collect your data?</h5>
          <p className="mb-4">
            Some data are collected when you provide it to us. This could, for
            example, be data you enter on a contact form.
          </p>
          <p className="mb-4">
            Other data are collected automatically by our IT systems when you
            visit the website. These data are primarily technical data such as
            the browser and operating system you are using or when you accessed
            the page. These data are collected automatically as soon as you
            enter our website.
          </p>

          <h5 className="h6 mb-2">What do we use your data for?</h5>
          <p className="mb-4">
            Part of the data is collected to ensure the proper functioning of
            the website. Other data can be used to analyze how visitors use the
            site.
          </p>

          <h5 className="h6 mb-2">
            What rights do you have regarding your data?
          </h5>
          <p className="mb-4">
            You always have the right to request information about your stored
            data, its origin, its recipients, and the purpose of its collection
            at no charge. You also have the right to request that it be
            corrected, blocked, or deleted. You can contact us at any time using
            the address given in the legal notice if you have further questions
            about the issue of privacy and data protection. You may also, of
            course, file a complaint with the competent regulatory authorities.
          </p>

          <h5 className="h6 mb-2">Analytics and third-party tools</h5>
          <p className="mb-4">
            When visiting our website, statistical analyses may be made of your
            surfing behavior. This happens primarily using cookies and
            analytics. The analysis of your surfing behavior is usually
            anonymous, i.e. we will not be able to identify you from this data.
            You can object to this analysis or prevent it by not using certain
            tools. Detailed information can be found in the following privacy
            policy.
          </p>
          <p className="mb-4">
            You can object to this analysis. We will inform you below about how
            to exercise your options in this regard.
          </p>
        </div>

        <div className="wow fadeIn" data-wow-delay="20ms">
          <h3 className="h4 mb-3 text-primary">
            2. General information and mandatory information
          </h3>

          <h5 className="h6 mb-2">Data protection</h5>
          <p className="mb-4">
            The operators of this website take the protection of your personal
            data very seriously. We treat your personal data as confidential and
            in accordance with the statutory data protection regulations and
            this privacy policy.
          </p>
          <p className="mb-4">
            If you use this website, various pieces of personal data will be
            collected. Personal information is any data with which you could be
            personally identified. This privacy policy explains what information
            we collect and what we use it for. It also explains how and for what
            purpose this happens.
          </p>
          <p className="mb-4">
            Please note that data transmitted via the internet (e.g. via email
            communication) may be subject to security breaches. Complete
            protection of your data from third-party access is not possible.
          </p>

          <h5 className="h6 mb-2">
            Notice concerning the party responsible for this website
          </h5>
          <p className="mb-4">
            The party responsible for processing data on this website is:
          </p>
          <p className="mb-4">
            Volker Frisch <br />
            Chipglobe GmbH <br />
            Cincinnatistr. 60 <br />
            81549 München
          </p>
          <p className="mb-4">
            Telephone: +49 89 1222 469 00 <br />
            Email: volker.frisch@chipglobe.com
          </p>
          <p className="mb-4">
            The responsible party is the natural or legal person who alone or
            jointly with others decides on the purposes and means of processing
            personal data (names, email addresses, etc.).
          </p>

          <h5 className="h6 mb-2">
            Revocation of your consent to the processing of your data
          </h5>
          <p className="mb-4">
            Many data processing operations are only possible with your express
            consent. You may revoke your consent at any time with future effect.
            An informal email making this request is sufficient. The data
            processed before we receive your request may still be legally
            processed.
          </p>

          <h5 className="h6 mb-2">
            Right to file complaints with regulatory authorities
          </h5>
          <p className="mb-4">
            If there has been a breach of data protection legislation, the
            person affected may file a complaint with the competent regulatory
            authorities. The competent regulatory authority for matters related
            to data protection legislation is the data protection officer of the
            German state in which our company is headquartered. A list of data
            protection officers and their contact details can be found at the
            following link:
            <Link href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html">
              https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html.
            </Link>
          </p>

          <h5 className="h6 mb-2">Right to data portability</h5>
          <p className="mb-4">
            You have the right to have data which we process based on your
            consent or in fulfillment of a contract automatically delivered to
            yourself or to a third party in a standard, machine-readable format.
            If you require the direct transfer of data to another responsible
            party, this will only be done to the extent technically feasible.
          </p>

          <h5 className="h6 mb-2">SSL or TLS encryption</h5>
          <p className="mb-4">
            This site uses SSL or TLS encryption for security reasons and for
            the protection of the transmission of confidential content, such as
            the inquiries you send to us as the site operator. You can recognize
            an encrypted connection in your browser&apos;s address line when it
            changes from &quot;http://&quot; to &quot;https://&quot; and the
            lock icon is displayed in your browser&apos;s address bar.
          </p>
          <p className="mb-4">
            If SSL or TLS encryption is activated, the data you transfer to us
            cannot be read by third parties.
          </p>

          <h5 className="h6 mb-2">Information, blocking, deletion</h5>
          <p className="mb-4">
            As permitted by law, you have the right to be provided at any time
            with information free of charge about any of your personal data that
            is stored as well as its origin, the recipient and the purpose for
            which it has been processed. You also have the right to have this
            data corrected, blocked or deleted. You can contact us at any time
            using the address given in our legal notice if you have further
            questions on the topic of personal data.
          </p>

          <h5 className="h6 mb-2">Opposition to promotional emails</h5>
          <p className="mb-4">
            We hereby expressly prohibit the use of contact data published in
            the context of website legal notice requirements with regard to
            sending promotional and informational materials not expressly
            requested. The website operator reserves the right to take specific
            legal action if unsolicited advertising material, such as email
            spam, is received.
          </p>
        </div>

        <div className="wow fadeIn" data-wow-delay="20ms">
          <h3 className="h4 mb-3 text-primary">
            3. Data collection on our website
          </h3>

          <h5 className="h6 mb-2">Cookies</h5>
          <p className="mb-4">
            Some of our web pages use cookies. Cookies do not harm your computer
            and do not contain any viruses. Cookies help make our website more
            user-friendly, efficient, and secure. Cookies are small text files
            that are stored on your computer and saved by your browser.
          </p>
          <p className="mb-4">
            Most of the cookies we use are so-called &quot;session
            cookies.&quot; They are automatically deleted after your visit.
            Other cookies remain in your device&apos;s memory until you delete
            them. These cookies make it possible to recognize your browser when
            you next visit the site.
          </p>
          <p className="mb-4">
            You can configure your browser to inform you about the use of
            cookies so that you can decide on a case-by-case basis whether to
            accept or reject a cookie. Alternatively, your browser can be
            configured to automatically accept cookies under certain conditions
            or to always reject them, or to automatically delete cookies when
            closing your browser. Disabling cookies may limit the functionality
            of this website.
          </p>
          <p className="mb-4">
            Cookies which are necessary to allow electronic communications or to
            provide certain functions you wish to use (such as the shopping
            cart) are stored pursuant to Art. 6 paragraph 1, letter f of DSGVO.
            The website operator has a legitimate interest in the storage of
            cookies to ensure an optimized service provided free of technical
            errors. If other cookies (such as those used to analyze your surfing
            behavior) are also stored, they will be treated separately in this
            privacy policy.
          </p>

          <h5 className="h6 mb-2">Server log files</h5>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="400ms">
            <p className="mb-4">
              The website provider automatically collects and stores information
              that your browser automatically transmits to us in &quot;server
              log files&quot;. These are:
            </p>
            <div className="d-flex align-items-center mb-2">
              <i className="ti-check display-28 text-primary"></i>
              <span className="ms-2">Browser type and browser version</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <i className="ti-check display-28 text-primary"></i>
              <span className="ms-2">Operating system used</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <i className="ti-check display-28 text-primary"></i>
              <span className="ms-2">Referrer URL</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <i className="ti-check display-28 text-primary"></i>
              <span className="ms-2">Host name of the accessing computer</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <i className="ti-check display-28 text-primary"></i>
              <span className="ms-2">Time of the server request</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="ti-check display-28 text-primary"></i>
              <span className="ms-2">IP address</span>
            </div>
            <p className="mt-4 mb-4">
              These data will not be combined with data from other sources.
            </p>
            <p className="mb-4">
              The basis for data processing is Art. 6 (1) (b) DSGVO, which
              allows the processing of data to fulfill a contract or for
              measures preliminary to a contract.
            </p>
          </div>

          <h5 className="h6 mb-2">Contact form</h5>
          <p className="mb-4">
            Should you send us questions via the contact form, we will collect
            the data entered on the form, including the contact details you
            provide, to answer your question and any follow-up questions. We do
            not share this information without your permission.
          </p>
          <p className="mb-4">
            We will, therefore, process any data you enter onto the contact form
            only with your consent per Art. 6 (1)(a) DSGVO. You may revoke your
            consent at any time. An informal email making this request is
            sufficient. The data processed before we receive your request may
            still be legally processed.
          </p>
          <p className="mb-4">
            We will retain the data you provide on the contact form until you
            request its deletion, revoke your consent for its storage, or the
            purpose for its storage no longer pertains (e.g. after fulfilling
            your request). Any mandatory statutory provisions, especially those
            regarding mandatory data retention periods, remain unaffected by
            this provision.
          </p>

          <h5 className="h6 mb-2">
            Processing of data (customer and contract data)
          </h5>
          <p className="mb-4">
            We collect, process, and use personal data only insofar as it is
            necessary to establish, or modify legal relationships with us
            (master data). This is done based on Art. 6 (1) (b) DSGVO, which
            allows the processing of data to fulfill a contract or for measures
            preliminary to a contract. We collect, process and use your personal
            data when accessing our website (usage data) only to the extent
            required to enable you to access our service or to bill you for the
            same.
          </p>
          <p className="mb-4">
            Collected customer data shall be deleted after completion of the
            order or termination of the business relationship. Legal retention
            periods remain unaffected.
          </p>

          <h5 className="h6 mb-2">
            Data transferred when signing up for services and digital content
          </h5>
          <p className="mb-4">
            We transmit personally identifiable data to third parties only to
            the extent required to fulfill the terms of your contract with us,
            for example, to banks entrusted to process your payments.
          </p>
          <p className="mb-4">
            Your data will not be transmitted for any other purpose unless you
            have given your express permission to do so. Your data will not be
            disclosed to third parties for advertising purposes without your
            express consent.
          </p>
          <p className="mb-4">
            The basis for data processing is Art. 6 (1) (b) DSGVO, which allows
            the processing of data to fulfill a contract or for measures
            preliminary to a contract.
          </p>
        </div>

        <div className="wow fadeIn" data-wow-delay="20ms">
          <h3 className="h4 mb-3 text-primary">4. Analytics and advertising</h3>

          <h5 className="h6 mb-2">Google Analytics</h5>
          <p className="mb-4">
            This website uses Google Analytics, a web analytics service. It is
            operated by Google Inc., 1600 Amphitheatre Parkway, Mountain View,
            CA 94043, USA.
          </p>
          <p className="mb-4">
            Google Analytics uses so-called &quot;cookies&quot;. These are text
            files that are stored on your computer and that allow an analysis of
            the use of the website by you. The information generated by the
            cookie about your use of this website is usually transmitted to a
            Google server in the USA and stored there.
          </p>
          <p className="mb-4">
            Google Analytics cookies are stored based on Art. 6 (1) (f) DSGVO.
            The website operator has a legitimate interest in analyzing user
            behavior to optimize both its website and its advertising.
          </p>

          <h5 className="h6 mb-2">IP anonymization</h5>
          <p className="mb-4">
            We have activated the IP anonymization feature on this website. Your
            IP address will be shortened by Google within the European Union or
            other parties to the Agreement on the European Economic Area prior
            to transmission to the United States. Only in exceptional cases is
            the full IP address sent to a Google server in the US and shortened
            there. Google will use this information on behalf of the operator of
            this website to evaluate your use of the website, to compile reports
            on website activity, and to provide other services regarding website
            activity and Internet usage for the website operator. The IP address
            transmitted by your browser as part of Google Analytics will not be
            merged with any other data held by Google.
          </p>

          <h5 className="h6 mb-2">Browser plugin</h5>
          <p className="mb-4">
            You can prevent these cookies being stored by selecting the
            appropriate settings in your browser. However, we wish to point out
            that doing so may mean you will not be able to enjoy the full
            functionality of this website. You can also prevent the data
            generated by cookies about your use of the website (incl. your IP
            address) from being passed to Google, and the processing of these
            data by Google, by downloading and installing the browser plugin
            available at the following link:
            <Link href="https://tools.google.com/dlpage/gaoptout?hl=en">
              https://tools.google.com/dlpage/gaoptout?hl=en.
            </Link>
            .
          </p>

          <h5 className="h6 mb-2">Objecting to the collection of data</h5>
          <p className="mb-4">
            You can prevent the collection of your data by Google Analytics by
            clicking on the following link. An opt-out cookie will be set to
            prevent your data from being collected on future visits to this
            site: Disable Google Analytics.
          </p>
          <p className="mb-4">
            For more information about how Google Analytics handles user data,
            see Google&apos;s privacy policy:
            <Link href="https://support.google.com/analytics/answer/6004245?hl=en">
              https://support.google.com/analytics/answer/6004245?hl=en.
            </Link>
            .
          </p>

          <h5 className="h6 mb-2">Outsourced data processing</h5>
          <p className="mb-4">
            We have entered into an agreement with Google for the outsourcing of
            our data processing and fully implement the strict requirements of
            the German data protection authorities when using Google Analytics.
          </p>

          <h5 className="h6 mb-2">
            Demographic data collection by Google Analytics
          </h5>
          <p className="mb-4">
            This website uses Google Analytics&apos; demographic features. This
            allows reports to be generated containing statements about the age,
            gender, and interests of site visitors. This data comes from
            interest-based advertising from Google and third-party visitor data.
            This collected data cannot be attributed to any specific individual
            person. You can disable this feature at any time by adjusting the
            ads settings in your Google account or you can forbid the collection
            of your data by Google Analytics as described in the section
            &quot;Refusal of data collection&quot;.
          </p>

          <h5 className="h6 mb-2">Google reCAPTCHA</h5>
          <p className="mb-4">
            We use &quot;Google reCAPTCHA&quot; (hereinafter
            &quot;reCAPTCHA&quot;) on our websites. This service is provided by
            Google Inc., 1600 Amphitheater Parkway, Mountain View, CA 94043, USA
            (&quot;Google&quot;).
          </p>
          <p className="mb-4">
            reCAPTCHA is used to check whether the data entered on our website
            (such as on a contact form) has been entered by a human or by an
            automated program. To do this, reCAPTCHA analyzes the behavior of
            the website visitor based on various characteristics. This analysis
            starts automatically as soon as the website visitor enters the
            website. For the analysis, reCAPTCHA evaluates various information
            (e.g. IP address, how long the visitor has been on the website, or
            mouse movements made by the user). The data collected during the
            analysis will be forwarded to Google.
          </p>
          <p className="mb-4">
            The reCAPTCHA analyses take place completely in the background.
            Website visitors are not advised that such an analysis is taking
            place.
          </p>
          <p className="mb-4">
            Data processing is based on Art. 6 (1) (f) DSGVO. The website
            operator has a legitimate interest in protecting its site from
            abusive automated crawling and spam.
          </p>
          <p className="mb-4">
            For more information about Google reCAPTCHA and Google&apos;s
            privacy policy, please visit the following links:
            <Link href="https://www.google.com/intl/de/policies/privacy/">
              https://www.google.com/intl/de/policies/privacy/
            </Link>{' '}
            and{' '}
            <Link href="https://www.google.com/recaptcha/intro/android.html">
              https://www.google.com/recaptcha/intro/android.html.
            </Link>
          </p>
        </div>

        <div className="wow fadeIn" data-wow-delay="20ms">
          <h3 className="h4 mb-3 text-primary">5. Plugins and tools</h3>

          <h5 className="h6 mb-2">YouTube</h5>
          <p className="mb-4">
            Our website uses plugins from YouTube, which is operated by Google.
            The operator of the pages is YouTube LLC, 901 Cherry Ave., San
            Bruno, CA 94066, USA.
          </p>
          <p className="mb-4">
            If you visit one of our pages featuring a YouTube plugin, a
            connection to the YouTube servers is established. Here the YouTube
            server is informed about which of our pages you have visited.
          </p>
          <p className="mb-4">
            If you&apos;re logged in to your YouTube account, YouTube allows you
            to associate your browsing behavior directly with your personal
            profile. You can prevent this by logging out of your YouTube
            account.
          </p>
          <p className="mb-4">
            YouTube is used to help make our website appealing. This constitutes
            a justified interest pursuant to Art. 6 (1) (f) DSGVO.
          </p>
          <p className="mb-4">
            Further information about handling user data, can be found in the
            data protection declaration of YouTube under{' '}
            <Link href="https://www.google.de/intl/de/policies/privacy">
              https://www.google.de/intl/de/policies/privacy.
            </Link>
          </p>

          <h5 className="h6 mb-2">Google Web Fonts</h5>
          <p className="mb-4">
            For uniform representation of fonts, this page uses web fonts
            provided by Google. When you open a page, your browser loads the
            required web fonts into your browser cache to display texts and
            fonts correctly.
          </p>
          <p className="mb-4">
            For this purpose your browser has to establish a direct connection
            to Google servers. Google thus becomes aware that our web page was
            accessed via your IP address. The use of Google Web fonts is done in
            the interest of a uniform and attractive presentation of our
            website. This constitutes a justified interest pursuant to Art. 6
            (1) (f) DSGVO.
          </p>
          <p className="mb-4">
            If your browser does not support web fonts, a standard font is used
            by your computer.
          </p>
          <p className="mb-4">
            Further information about handling user data, can be found at{' '}
            <Link href="https://developers.google.com/fonts/faq">
              https://developers.google.com/fonts/faq
            </Link>{' '}
            and in Google&apos;s privacy policy at{' '}
            <Link href="https://www.google.com/policies/privacy/">
              https://www.google.com/policies/privacy/.
            </Link>
          </p>

          <h5 className="h6 mb-2">Google Maps</h5>
          <p className="mb-4">
            This site uses the Google Maps map service via an API. It is
            operated by Google Inc., 1600 Amphitheatre Parkway, Mountain View,
            CA 94043, USA.
          </p>
          <p className="mb-4">
            To use Google Maps, it is necessary to save your IP address. This
            information is generally transmitted to a Google server in the USA
            and stored there. The provider of this site has no influence on this
            data transfer.
          </p>
          <p className="mb-4">
            The use of Google Maps is in the interest of making our website
            appealing and to facilitate the location of places specified by us
            on the website. This constitutes a justified interest pursuant to
            Art. 6 (1) (f) DSGVO.
          </p>
          <p className="mb-4">
            Further information about handling user data, can be found in the
            data protection declaration of Google
          </p>
        </div>
      </BlogLayout>
    </>
  );
};

export default Index;
