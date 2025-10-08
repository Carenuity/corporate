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
        links={[{ path: '/', title: 'Home' }]}
        pageTitle="Privacy Policy"
        pageUrl="/privacy"
      />

      <BlogLayout lang={LANG_ENGLISH}>
        
                  <h4>1. Data Protection Overview</h4>

      <h6>General Information</h6>
      <p>
        This Privacy Policy explains how Chipglobe GmbH (“we”, “us”, “our”) collects, uses, and protects your personal data when you visit our website or use our mobile app. Personal data refers to any information relating to an identified or identifiable natural person.
      </p>

      <h6>Who is responsible for data processing?</h6>
      <p>
        The data controller responsible for processing your personal data is:
      </p>
      <p>
        Chipglobe GmbH<br/>
        Cincinnatistr. 60<br/>
        81549 Munich, Germany<br/>
        Phone: +49 89 1222 469 00<br/>
        E-mail: <a href="mailto:datenschutz@chipglobe.com">datenschutz@chipglobe.com</a>
      </p>

      <h6>How do we collect your data?</h6>
      <ul>
        <li><strong>Data you provide:</strong> Information you enter in a contact form, when registering for an account, submitting inquiries, or using the app.</li>
        <li><strong>Data collected automatically:</strong> Technical information such as IP address, device type, operating system, browser or app version, and access time is automatically collected when you visit our website or use our app.</li>
      </ul>

      <h6>What do we use your data for?</h6>
      <ul>
        <li>To ensure proper operation of our website and app.</li>
        <li>To provide and improve our services and user experience.</li>
        <li>To communicate with you (e.g., support, inquiries, or contractual matters).</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h6>Your rights regarding your data</h6>
      <ul>
        <li>Access, rectify, or erase your personal data.</li>
        <li>Restrict or object to data processing.</li>
        <li>Withdraw your consent at any time.</li>
        <li>Request data portability.</li>
        <li>Lodge a complaint with a supervisory authority.</li>
      </ul>

      <h4>2. General Information and Legal Basis</h4>

      <h6>Data Protection Commitment</h6>
      <p>
        We take the protection of your personal data very seriously. We treat your information confidentially and in accordance with applicable data protection laws, including the EU General Data Protection Regulation (GDPR) and the German Federal Data Protection Act (BDSG).
      </p>

      <h6>Legal Basis for Processing</h6>
      <p>Data processing is carried out in accordance with Article 6(1) GDPR:</p>
      <ul>
        <li>(a) with your consent,</li>
        <li>(b) for the performance of a contract or pre-contractual measures,</li>
        <li>(c) to comply with legal obligations,</li>
        <li>(f) for legitimate interests such as service improvement and IT security.</li>
      </ul>

      <h6>Withdrawal of Consent</h6>
      <p>
        You may withdraw any consent you have given at any time by sending us an informal email. The lawfulness
        of processing prior to withdrawal remains unaffected.
      </p>

      <h6>Right to Lodge a Complaint</h6>
      <p>
        If you believe that your data has been processed unlawfully, you have the right to file a complaint with the 
        competent data protection authority. 
        A list of supervisory authorities is available at:<br/>
        <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank">
        https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>
      </p>

      <h6>Data Portability</h6>
      <p>
        You have the right to receive the personal data you have provided in a machine-readable format or to have it 
        transmitted to another controller, where technically feasible.
      </p>

      <h6>Encryption and Security</h6>
      <p>
        Our website and app use modern encryption (TLS 1.3) and additional security measures to protect data transmissions. 
        We also perform regular security assessments to prevent unauthorized access or data loss.
      </p>

      <h4>3. Data Collection on Our Website and App</h4>

      <h6>Cookies and Local Storage</h6>
      <p>
        We use cookies and similar technologies (e.g., local storage) to store session data, preferences, and login 
        information. Upon your first visit or app launch, you can select which categories of cookies to allow 
        (necessary, functional, analytics, marketing).
      </p>

      <h6>Server Log Files</h6>
      <p>Each access to our website or app automatically generates log data, including:</p>
      <ul>
        <li>Device type and operating system</li>
        <li>Browser type or app version</li>
        <li>Referrer URL</li>
        <li>Hostname of the accessing device</li>
        <li>Server request time</li>
        <li>Anonymized IP address</li>
      </ul>
      <p>These data are required for the technical operation, system security, and error diagnosis of our services.</p>

      <h6>Contact and Support Forms</h6>
      <p>
        When you contact us via form, email, or through the app, we process your data to handle your request. Processing is based on your 
        consent (Art. 6(1)(a) GDPR) or, if related to a contract, Art. 6(1)(b) GDPR.
      </p>

      <h4>4. Analytics and Tracking Technologies</h4>

      <h6>Google Analytics 4</h6>
      <p>
        We use Google Analytics 4 with IP anonymization to analyze usage and improve performance. Data may be transferred to Google LLC in the 
        United States under the EU-US Data Privacy Framework. You can opt out using the browser add-on:<br/>
        <a href="https://tools.google.com/dlpage/gaoptout?hl=en" target="_blank">https://tools.google.com/dlpage/gaoptout?hl=en</a>
      </p>

      <h6>Firebase Analytics (Mobile App)</h6>
      <p>
        Our mobile app uses Firebase Analytics (Google LLC) to collect anonymous statistics on app usage, crashes, and performance to 
        enhance user experience. These data do not identify you personally.
      </p>

      <h4>5. Plugins and External Services</h4>

      <h6>YouTube</h6>
      <p>
        Our website and app may embed YouTube content. Provider: YouTube LLC, 901 Cherry Ave., San Bruno, CA 94066, USA. Data transmission 
        to YouTube occurs only after you consent to it (Art. 6(1)(a) GDPR).
      </p>

      <h6>Google Maps / Apple Maps</h6>
      <p>
        For location features in our app, we use mapping services such as Google Maps or Apple Maps. Your IP address and device location 
        are transmitted only if you have granted permission.
      </p>

      <h6>Push Notifications (App)</h6>
      <p>
        If you enable push notifications, we store an anonymous device token to send relevant updates. You can disable notifications 
        at any time in your app settings.
      </p>

      <h4>6. Data Retention</h4>
      <p>
        We retain personal data only as long as necessary to fulfill the purposes described above or as required by law. Once the purpose 
        ceases or retention periods expire, data are deleted or anonymized.
      </p>

      <h4>7. Updates to This Privacy Policy</h4>
      <p>
        We may update this Privacy Policy to reflect legal changes or improvements in our services. Any significant updates will be 
        communicated through our app or on our website.
      </p>

      <h4>8. Contact for Data Protection Matters</h4>
      <p>
        If you have questions or concerns about data protection, please contact us:
      </p>
      <p>
        Chipglobe GmbH<br/>
        Attn: Data Protection Officer<br/>
        Cincinnatistr. 60, 81549 Munich, Germany<br/>
        E-mail: <a href="mailto:datenschutz@chipglobe.com">datenschutz@chipglobe.com</a><br/>
        Phone: +49 89 1222 469 00
      </p>



      
       
      </BlogLayout>
    </>
  );
};

export default Index;
