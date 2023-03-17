import Link from 'next/link'
import React from 'react'
import BlogLayout from '../components/BlogLayout'
import Header from '../components/Header'
import PageTitle from '../components/PageTitle'

const datenschutz = () => {
  return (
    <>
      {/* <!-- PAGE TITLE
        ================================================== --> */}
      <PageTitle
        prevPage='Home'
        prevPageUrl='/'
        pageTitle='Datenschutz'
        pageUrl='/datenschutz'
        bgImage='img/banner/page-title.jpg'
      />

      {/* <!-- BLOG DETAILS
        ================================================== --> */}
      <BlogLayout>
        <h2 className='text-primary mb-3'>Datenschutzerklärung:</h2>
        <div className='wow fadeIn' data-wow-delay='20ms'>
          <h3 className='h4 mb-3 text-primary'>
            1. Datenschutz auf einen Blick
          </h3>

          <h5 className='h6 mb-2'>Allgemeine Hinweise</h5>
          <p className='mb-4'>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können. Ausführliche Informationen
            zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
            aufgeführten Datenschutzerklärung.
          </p>

          <h5 className='h6 mb-2'>Datenerfassung auf unserer Website</h5>
          <h5 className='h6 mb-2'>
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </h5>
          <p className='mb-4'>
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
            dieser Website entnehmen.
          </p>

          <h5 className='h6 mb-2'>Wie erfassen wir Ihre Daten?</h5>
          <p className='mb-4'>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
            mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in
            ein Kontaktformular eingeben.
          </p>
          <p className='mb-4'>
            Andere Daten werden automatisch beim Besuch der Website durch unsere
            IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
            Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
            Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere
            Website betreten.
          </p>

          <h5 className='h6 mb-2'>Wofür nutzen wir Ihre Daten?</h5>
          <p className='mb-4'>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
            der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
            Nutzerverhaltens verwendet werden.
          </p>

          <h5 className='h6 mb-2'>
            Welche Rechte haben Sie bezüglich Ihrer Daten?
          </h5>
          <p className='mb-4'>
            Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft,
            Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
            erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung
            oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren
            Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im
            Impressum angegebenen Adresse an uns wenden. Des Weiteren steht
            Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>

          <h5 className='h6 mb-2'>
            Analyse-Tools und Tools von Drittanbietern
          </h5>
          <p className='mb-4'>
            Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch
            ausgewertet werden. Das geschieht vor allem mit Cookies und mit
            sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens
            erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen
            zurückverfolgt werden. Sie können dieser Analyse widersprechen oder
            sie durch die Nichtbenutzung bestimmter Tools verhindern.
            Detaillierte Informationen dazu finden Sie in der folgenden
            Datenschutzerklärung.
          </p>
          <p className='mb-4'>
            Sie können dieser Analyse widersprechen. Über die
            Widerspruchsmöglichkeiten werden wir Sie in dieser
            Datenschutzerklärung informieren.
          </p>
        </div>
        <div className='wow fadeIn' data-wow-delay='20ms'>
          <h3 className='h4 mb-3 text-primary'>
            2. Allgemeine Hinweise und Pflichtinformationen
          </h3>

          <h5 className='h6 mb-2'>Datenschutz</h5>
          <p className='mb-4'>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p className='mb-4'>
            Wenn Sie diese Website benutzen, werden verschiedene
            personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
            mit denen Sie persönlich identifiziert werden können. Die
            vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben
            und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem
            Zweck das geschieht.
          </p>
          <p className='mb-4'>
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B.
            bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
            Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
            nicht möglich.
          </p>

          <h5 className='h6 mb-2'>Hinweis zur verantwortlichen Stelle</h5>
          <p className='mb-4'>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser
            Website ist:
          </p>
          <p className='mb-4'>
            Volker Frisch <br />
            Chipglobe GmbH <br />
            Cincinnatistr. 60 <br />
            81549 München
          </p>
          <p className='mb-4'>
            Telefon: +49 89 1222 469 00 <br />
            E-Mail: volker.frisch@chipglobe.com
          </p>
          <p className='mb-4'>
            Verantwortliche Stelle ist die natürliche oder juristische Person,
            die allein oder gemeinsam mit anderen über die Zwecke und Mittel der
            Verarbeitung von personenbezogenen Daten (z.B. Namen,
            E-Mail-Adressen o. Ä.) entscheidet.
          </p>

          <h5 className='h6 mb-2'>
            Widerruf Ihrer Einwilligung zur Datenverarbeitung
          </h5>
          <p className='mb-4'>
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
            Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
            jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per
            E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
            Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>

          <h5 className='h6 mb-2'>
            Beschwerderecht bei der zuständigen Aufsichtsbehörde
          </h5>
          <p className='mb-4'>
            Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein
            Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige
            Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der
            Landesdatenschutzbeauftragte des Bundeslandes, in dem unser
            Unternehmen seinen Sitz hat. Eine Liste der Datenschutzbeauftragten
            sowie deren Kontaktdaten können folgendem Link entnommen werden:
            <Link href='https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html'>
              https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
            </Link>
            .
          </p>

          <h5 className='h6 mb-2'>Recht auf Datenübertragbarkeit</h5>
          <p className='mb-4'>
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
            oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich
            oder an einen Dritten in einem gängigen, maschinenlesbaren Format
            aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten
            an einen anderen Verantwortlichen verlangen, erfolgt dies nur,
            soweit es technisch machbar ist.
          </p>

          <h5 className='h6 mb-2'>SSL- bzw. TLS-Verschlüsselung</h5>
          <p className='mb-4'>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
            Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
            oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
            SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
            erkennen Sie daran, dass die Adresszeile des Browsers von “http://”
            auf “https://” wechselt und an dem Schloss-Symbol in Ihrer
            Browserzeile.
          </p>
          <p className='mb-4'>
            Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
            Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
            werden.
          </p>

          <h5 className='h6 mb-2'>Auskunft, Sperrung, Löschung</h5>
          <p className='mb-4'>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
            jederzeit das Recht auf unentgeltliche Auskunft über Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
            und den Zweck der Datenverarbeitung und ggf. ein Recht auf
            Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu
            weiteren Fragen zum Thema personenbezogene Daten können Sie sich
            jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
          </p>

          <h5 className='h6 mb-2'>Widerspruch gegen Werbe-Mails</h5>
          <p className='mb-4'>
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
            Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
            Werbung und Informationsmaterialien wird hiermit widersprochen. Die
            Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte
            im Falle der unverlangten Zusendung von Werbeinformationen, etwa
            durch Spam-E-Mails, vor.
          </p>
        </div>
        <div className='wow fadeIn' data-wow-delay='20ms'>
          <h3 className='h4 mb-3 text-primary'>
            3. Datenerfassung auf unserer Website
          </h3>

          <h5 className='h6 mb-2'>Cookies</h5>
          <p className='mb-4'>
            Die Internetseiten verwenden teilweise so genannte Cookies. Cookies
            richten auf Ihrem Rechner keinen Schaden an und enthalten keine
            Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher,
            effektiver und sicherer zu machen. Cookies sind kleine Textdateien,
            die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
          </p>
          <p className="mb-4">
            Die meisten der von uns verwendeten Cookies sind so genannte
            “Session-Cookies”. Sie werden nach Ende Ihres Besuchs automatisch
            gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis
            Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser
            beim nächsten Besuch wiederzuerkennen.
          </p>
          <p className="mb-4">
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
            Cookies informiert werden und Cookies nur im Einzelfall erlauben,
            die Annahme von Cookies für bestimmte Fälle oder generell
            ausschließen sowie das automatische Löschen der Cookies beim
            Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies
            kann die Funktionalität dieser Website eingeschränkt sein.
          </p>
          <p className="mb-4">
            Cookies, die zur Durchführung des elektronischen
            Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen
            erwünschter Funktionen (z.B. Warenkorbfunktion) erforderlich sind,
            werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der
            Websitebetreiber hat ein berechtigtes Interesse an der Speicherung
            von Cookies zur technisch fehlerfreien und optimierten
            Bereitstellung seiner Dienste. Soweit andere Cookies (z.B. Cookies
            zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese
            in dieser Datenschutzerklärung gesondert behandelt.
          </p>

          <h5 className='h6 mb-2'>Server-Log-Dateien</h5>
          <div className='col-lg-6 wow fadeIn' data-wow-delay='400ms'>
            <p className='mb-4'>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind:
            </p>
            <div className='d-flex align-items-center mb-2'>
              <i className='ti-check display-28 text-primary'></i>
              <span className='ms-2'>Browsertyp und Browserversion</span>
            </div>
            <div className='d-flex align-items-center mb-2'>
              <i className='ti-check display-28 text-primary'></i>
              <span className='ms-2'>verwendetes Betriebssystem</span>
            </div>
            <div className='d-flex align-items-center mb-2'>
              <i className='ti-check display-28 text-primary'></i>
              <span className='ms-2'>Referrer URL</span>
            </div>
            <div className='d-flex align-items-center mb-2'>
              <i className='ti-check display-28 text-primary'></i>
              <span className='ms-2'>Hostname des zugreifenden Rechners</span>
            </div>
            <div className='d-flex align-items-center mb-2'>
              <i className='ti-check display-28 text-primary'></i>
              <span className='ms-2'>Uhrzeit der Serveranfrage</span>
            </div>
            <div className='d-flex align-items-center'>
              <i className='ti-check display-28 text-primary'></i>
              <span className='ms-2'>IP-Adresse</span>
            </div>
            <p className='mt-4 mb-4'>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen.
            </p>
            <p className='mb-4'>
              Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b
              DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags
              oder vorvertraglicher Maßnahmen gestattet.
            </p>
          </div>

          <h5 className='h6 mb-2'>Kontaktformular</h5>
          <p className='mb-4'>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
            Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
            nicht ohne Ihre Einwilligung weiter.
          </p>
          <p className='mb-4'>
            Die Verarbeitung der in das Kontaktformular eingegebenen Daten
            erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art.
            6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit
            widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns.
            Die Rechtmäßigkeit der bis zum Widerruf erfolgten
            Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
          </p>
          <p className='mb-4'>
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
            uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
            Speicherung widerrufen oder der Zweck für die Datenspeicherung
            entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
            Zwingende gesetzliche Bestimmungen – insbesondere
            Aufbewahrungsfristen – bleiben unberührt.
          </p>

          <h5 className='h6 mb-2'>
            Verarbeiten von Daten (Kunden- und Vertragsdaten)
          </h5>
          <p className='mb-4'>
            Wir erheben, verarbeiten und nutzen personenbezogene Daten nur,
            soweit sie für die Begründung, inhaltliche Ausgestaltung oder
            Änderung des Rechtsverhältnisses erforderlich sind (Bestandsdaten).
            Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die
            Verarbeitung von Daten zur Erfüllung eines Vertrags oder
            vorvertraglicher Maßnahmen gestattet. Personenbezogene Daten über
            die Inanspruchnahme unserer Internetseiten (Nutzungsdaten) erheben,
            verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem
            Nutzer die Inanspruchnahme des Dienstes zu ermöglichen oder
            abzurechnen.
          </p>
          <p className='mb-4'>
            Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder
            Beendigung der Geschäftsbeziehung gelöscht. Gesetzliche
            Aufbewahrungsfristen bleiben unberührt.
          </p>

          <h5 className='h6 mb-2'>
            Datenübermittlung bei Vertragsschluss für Dienstleistungen und
            digitale Inhalte
          </h5>
          <p className='mb-4'>
            Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn dies
            im Rahmen der Vertragsabwicklung notwendig ist, etwa an das mit der
            Zahlungsabwicklung beauftragte Kreditinstitut.
          </p>
          <p className='mb-4'>
            Eine weitergehende Übermittlung der Daten erfolgt nicht bzw. nur
            dann, wenn Sie der Übermittlung ausdrücklich zugestimmt haben. Eine
            Weitergabe Ihrer Daten an Dritte ohne ausdrückliche Einwilligung,
            etwa zu Zwecken der Werbung, erfolgt nicht.
          </p>
          <p className='mb-4'>
            Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO,
            der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder
            vorvertraglicher Maßnahmen gestattet.
          </p>
        </div>
        <div className='wow fadeIn' data-wow-delay='20ms'>
          <h3 className='h4 mb-3 text-primary'>4. Analyse Tools und Werbung</h3>

          <h5 className='h6 mb-2'>Google Analytics</h5>
          <p className='mb-4'>
            Diese Website nutzt Funktionen des Webanalysedienstes Google
            Analytics. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway,
            Mountain View, CA 94043, USA.
          </p>
          <p className='mb-4'>
            Google Analytics verwendet so genannte &quot;Cookies&quot;. Das sind
            Textdateien, die auf Ihrem Computer gespeichert werden und die eine
            Analyse der Benutzung der Website durch Sie ermöglichen. Die durch
            den Cookie erzeugten Informationen über Ihre Benutzung dieser
            Website werden in der Regel an einen Server von Google in den USA
            übertragen und dort gespeichert.
          </p>
          <p className='mb-4'>
            Die Speicherung von Google-Analytics-Cookies erfolgt auf Grundlage
            von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
            berechtigtes Interesse an der Analyse des Nutzerverhaltens, um
            sowohl sein Webangebot als auch seine Werbung zu optimieren.
          </p>

          <h5 className='h6 mb-2'>IP Anonymisierung</h5>
          <p className='mb-4'>
            Wir haben auf dieser Website die Funktion IP-Anonymisierung
            aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von
            Mitgliedstaaten der Europäischen Union oder in anderen
            Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum
            vor der Übermittlung in die USA gekürzt. Nur in Ausnahmefällen wird
            die volle IP-Adresse an einen Server von Google in den USA
            übertragen und dort gekürzt. Im Auftrag des Betreibers dieser
            Website wird Google diese Informationen benutzen, um Ihre Nutzung
            der Website auszuwerten, um Reports über die Websiteaktivitäten
            zusammenzustellen und um weitere mit der Websitenutzung und der
            Internetnutzung verbundene Dienstleistungen gegenüber dem
            Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics
            von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen
            Daten von Google zusammengeführt.
          </p>

          <h5 className='h6 mb-2'>Browser Plugin</h5>
          <p className='mb-4'>
            Sie können die Speicherung der Cookies durch eine entsprechende
            Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch
            darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
            Funktionen dieser Website vollumfänglich werden nutzen können. Sie
            können darüber hinaus die Erfassung der durch den Cookie erzeugten
            und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer
            IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch
            Google verhindern, indem Sie das unter dem folgenden Link verfügbare
            Browser-Plugin herunterladen und installieren:
            <Link href='https://tools.google.com/dlpage/gaoptout?hl=de'>
              https://tools.google.com/dlpage/gaoptout?hl=de
            </Link>
            .
          </p>

          <h5 className='h6 mb-2'>Widerspruch gegen Datenerfassung</h5>
          <p className='mb-4'>
            Sie können die Erfassung Ihrer Daten durch Google Analytics
            verhindern, indem Sie auf folgenden Link klicken. Es wird ein
            Opt-Out-Cookie gesetzt, der die Erfassung Ihrer Daten bei
            zukünftigen Besuchen dieser Website verhindert:{' '}
            <Link href='https://chipglobe.com/'>
              Google Analytics deaktivieren.
            </Link>
          </p>
          <p className='mb-4'>
            Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics
            finden Sie in der Datenschutzerklärung von Google:
            <Link href='https://support.google.com/analytics/answer/6004245?hl=de'>
              https://support.google.com/analytics/answer/6004245?hl=de
            </Link>
            .
          </p>

          <h5 className='h6 mb-2'>Auftragsdatenverarbeitung</h5>
          <p className='mb-4'>
            Wir haben mit Google einen Vertrag zur Auftragsdatenverarbeitung
            abgeschlossen und setzen die strengen Vorgaben der deutschen
            Datenschutzbehörden bei der Nutzung von Google Analytics vollständig
            um.
          </p>

          <h5 className='h6 mb-2'>
            Demografische Merkmale bei Google Analytics
          </h5>
          <p className='mb-4'>
            Diese Website nutzt die Funktion “demografische Merkmale” von Google
            Analytics. Dadurch können Berichte erstellt werden, die Aussagen zu
            Alter, Geschlecht und Interessen der Seitenbesucher enthalten. Diese
            Daten stammen aus interessenbezogener Werbung von Google sowie aus
            Besucherdaten von Drittanbietern. Diese Daten können keiner
            bestimmten Person zugeordnet werden. Sie können diese Funktion
            jederzeit über die Anzeigeneinstellungen in Ihrem Google-Konto
            deaktivieren oder die Erfassung Ihrer Daten durch Google Analytics
            wie im Punkt “Widerspruch gegen Datenerfassung” dargestellt generell
            untersagen.
          </p>

          <h5 className='h6 mb-2'>Google reCAPTCHA</h5>
          <p className='mb-4'>
            Wir nutzen “Google reCAPTCHA” (im Folgenden “reCAPTCHA”) auf unseren
            Websites. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway,
            Mountain View, CA 94043, USA (“Google”).
          </p>
          <p className='mb-4'>
            Mit reCAPTCHA soll überprüft werden, ob die Dateneingabe auf unseren
            Websites (z.B. in einem Kontaktformular) durch einen Menschen oder
            durch ein automatisiertes Programm erfolgt. Hierzu analysiert
            reCAPTCHA das Verhalten des Websitebesuchers anhand verschiedener
            Merkmale. Diese Analyse beginnt automatisch, sobald der
            Websitebesucher die Website betritt. Zur Analyse wertet reCAPTCHA
            verschiedene Informationen aus (z.B. IP-Adresse, Verweildauer des
            Websitebesuchers auf der Website oder vom Nutzer getätigte
            Mausbewegungen). Die bei der Analyse erfassten Daten werden an
            Google weitergeleitet.
          </p>
          <p className='mb-4'>
            Die reCAPTCHA-Analysen laufen vollständig im Hintergrund.
            Websitebesucher werden nicht darauf hingewiesen, dass eine Analyse
            stattfindet.
          </p>
          <p className='mb-4'>
            Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
            DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse daran,
            seine Webangebote vor missbräuchlicher automatisierter Ausspähung
            und vor SPAM zu schützen.
          </p>
          <p className='mb-4'>
            Weitere Informationen zu Google reCAPTCHA sowie die
            Datenschutzerklärung von Google entnehmen Sie folgenden Links:
            <Link href='https://www.google.com/intl/de/policies/privacy/'>
              https://www.google.com/intl/de/policies/privacy/
            </Link>{' '}
            und{' '}
            <Link href='https://www.google.com/recaptcha/intro/android.html'>
              https://www.google.com/recaptcha/intro/android.html
            </Link>
            .
          </p>
        </div>

        <div className='wow fadeIn' data-wow-delay='20ms'>
          <h3 className='h4 mb-3 text-primary'>5. Plugins und Tools</h3>

          <h5 className='h6 mb-2'>YouTube</h5>
          <p className='mb-4'>
            Unsere Website nutzt Plugins der von Google betriebenen Seite
            YouTube. Betreiber der Seiten ist die YouTube, LLC, 901 Cherry Ave.,
            San Bruno, CA 94066, USA.
          </p>
          <p className='mb-4'>
            Wenn Sie eine unserer mit einem YouTube-Plugin ausgestatteten Seiten
            besuchen, wird eine Verbindung zu den Servern von YouTube
            hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche
            unserer Seiten Sie besucht haben.
          </p>
          <p className='mb-4'>
            Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie
            YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil
            zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem
            YouTube-Account ausloggen.
          </p>
          <p className='mb-4'>
            Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden
            Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes
            Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
          </p>
          <p className='mb-4'>
            Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der
            Datenschutzerklärung von YouTube unter:
            <Link href='https://www.google.de/intl/de/policies/privacy'>
              https://www.google.de/intl/de/policies/privacy
            </Link>
            .
          </p>

          <h5 className='h6 mb-2'>Google Web Fonts</h5>
          <p className='mb-4'>
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so
            genannte Web Fonts, die von Google bereitgestellt werden. Beim
            Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in
            ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
          </p>
          <p className='mb-4'>
            Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu
            den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis
            darüber, dass über Ihre IP-Adresse unsere Website aufgerufen wurde.
            Die Nutzung von Google Web Fonts erfolgt im Interesse einer
            einheitlichen und ansprechenden Darstellung unserer Online-Angebote.
            Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1
            lit. f DSGVO dar.
          </p>
          <p className='mb-4'>
            Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine
            Standardschrift von Ihrem Computer genutzt.
          </p>
          <p className='mb-4'>
            Weitere Informationen zu Google Web Fonts finden Sie unter
            <Link href='https://developers.google.com/fonts/faq'>
              https://developers.google.com/fonts/faq
            </Link>{' '}
            und in der Datenschutzerklärung von Google:
            <Link href='https://www.google.com/policies/privacy/'>
              https://www.google.com/policies/privacy/
            </Link>
            .
          </p>

          <h5 className='h6 mb-2'>Google Maps</h5>
          <p className='mb-4'>
            Diese Seite nutzt über eine API den Kartendienst Google Maps.
            Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain
            View, CA 94043, USA.
          </p>
          <p className='mb-4'>
            Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP
            Adresse zu speichern. Diese Informationen werden in der Regel an
            einen Server von Google in den USA übertragen und dort gespeichert.
            Der Anbieter dieser Seite hat keinen Einfluss auf diese
            Datenübertragung.
          </p>
          <p className='mb-4'>
            Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden
            Darstellung unserer Online-Angebote und an einer leichten
            Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies
            stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f
            DSGVO dar.
          </p>
          <p className='mb-4'>
            Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der
            Datenschutzerklärung von Google:
            <Link href='https://www.google.de/intl/de/policies/privacy/'>
              https://www.google.de/intl/de/policies/privacy/
            </Link>
            .
          </p>
        </div>
      </BlogLayout>
    </>
  );
};

export default datenschutz