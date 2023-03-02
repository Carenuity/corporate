import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'
import BlogLayout from '../components/BlogLayout'
import Header from '../components/Header'
import PageTitle from '../components/PageTitle'
import { MediaHandleInterface } from '../utils/types/MediaHandle'
import { PostInterface } from '../utils/types/Post'
import posts from './api/posts'

const datenschutz = ({ posts, mediaLinks } : {posts: PostInterface[];
  mediaLinks: MediaHandleInterface[];
}) => {
  return (
    <>
      {/* <!-- HEADER
        ================================================== --> */}
      <Header
        classNames={['header-style2', 'navbar-brand logodefault']}
        logoUrl='img/logos/logo.png'
      />

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
      <BlogLayout
        search={true}
        recentPosts={posts}
        categoryLinks={[]}
        tagLinks={[]}
        mediaLinks={mediaLinks}
        iscommentable={false}
        comments={[]}
        hasFooter={false}
      >
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

          <h5 className='h6 mb-2'>
            Datenerfassung auf unserer Website Wer ist verantwortlich für die
            Datenerfassung auf dieser Website?
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
            ein Kontaktformular eingeben. Andere Daten werden automatisch beim
            Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
            allem technische Daten (z.B. Internetbrowser, Betriebssystem oder
            Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
            automatisch, sobald Sie unsere Website betreten.
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
            Datenschutzerklärung. Sie können dieser Analyse widersprechen. Über
            die Widerspruchsmöglichkeiten werden wir Sie in dieser
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
            Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie
            diese Website benutzen, werden verschiedene personenbezogene Daten
            erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich
            identifiziert werden können. Die vorliegende Datenschutzerklärung
            erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie
            erläutert auch, wie und zu welchem Zweck das geschieht. Wir weisen
            darauf hin, dass die Datenübertragung im Internet (z.B. bei der
            Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
            lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
            möglich.
          </p>

          <h5 className='h6 mb-2'>Hinweis zur verantwortlichen Stelle</h5>
          <p className='mb-4'>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser
            Website ist:
            <br />
            <br />
            Volker Frisch <br />
            Chipglobe GmbH <br />
            Cincinnatistr. 60 <br />
            81549 München
            <br />
            <br />
            Telefon: +49 89 1222 469 00 <br />
            E-Mail: volker.frisch@chipglobe.com
            <br />
            <br />
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
            Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist,
            können die Daten, die Sie an uns übermitteln, nicht von Dritten
            mitgelesen werden.
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
      </BlogLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const server = process.env.DOMAIN;

  const postsRes = await fetch(`${server}/api/posts/`, {
    next: { revalidate: 60 },
  });
  const postsData = await postsRes.json();

  const mediaRes = await fetch(`${server}/api/media-handles/`, {
    next: { revalidate: 60 },
  });
  const mediaData = await mediaRes.json();

  return {
    props: {
      posts: postsData.posts,
      mediaLinks: mediaData.social_media_handles,
    },
  };
};

export default datenschutz