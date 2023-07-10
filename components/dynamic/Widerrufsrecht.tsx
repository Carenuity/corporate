import { LANG_GERMANY } from "../../utils/constants";
import BlogLayout from "../BlogLayout";

const Widerrufsrecht = () => {
  return (
    <>
      <BlogLayout lang={LANG_GERMANY}>
        <div className='wow fadeIn' data-wow-delay='20ms'>
          {/* <h3 className='h4 mb-3 text-primary'>Payment and shipping</h3> */}

          <h5 className='h6 mb-2'>
            Belehrung über das Widerrufsrecht für Verbraucher
          </h5>
          <p className='mb-4'>
            Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu
            Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch
            ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können.
          </p>

          <h5 className='h6 mb-2'>Widerrufsrecht</h5>
          <p className='mb-1'>
            Sie können Ihre Vertragserklärung innerhalb von einem Monat ohne
            Angabe von Gründen in Textform (z.B. Brief, Fax, E-Mail) widerrufen.
            Die Frist beginnt nach Erhalt dieser Belehrung in Textform, jedoch
            nicht vor Vertragsschluss und auch nicht vor Erfüllung unserer
            Informationspflichten gemäß § 312c Abs. 2 BGB in Verbindung mit § 1
            Abs. 1, 2 und 4 BGB-InfoV sowie unserer Pflichten gemäß § 312e Abs.
            1 Satz 1 BGB in Verbindung mit § 3 BGB-InfoV. Zur Wahrung der
            Widerrufsfrist genügt die rechtzeitige Absendung des Widerrufs.
          </p>
          <p className='mb-1'>Der Widerruf ist zu richten an:</p>
          <p className='mb-1'>
            <strong>Chipglobe GmbH </strong>
          </p>
          <p className='mb-1'>
            <strong>Cincinnatistr. 60 </strong>
          </p>
          <p className='mb-1'>
            <strong>81549 München</strong>
          </p>
          <p className='mb-4'>
            <strong>Deutschland</strong>
          </p>
          <p className='mb-4'>
            Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen
            vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses
            Vertrags unterrichten, an uns zurückzusenden oder zu übergeben. Die
            Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von
            vierzehn Tagen absenden. Wir tragen die Kosten der Rücksendung der
            Waren.
          </p>

          <h5 className='h6 mb-2'>Widerrufsfolgen</h5>
          <p className='mb-4'>
            Im Falle eines wirksamen Widerrufs sind die beiderseits empfangenen
            Leistungen zurückzugewähren und gegebenenfalls gezogene Nutzungen
            (z.B. Zinsen) herauszugeben. Können Sie uns die empfangene Leistung
            ganz oder teilweise nicht oder nur in verschlechtertem Zustand
            zurückgewähren, müssen Sie uns insoweit ggf. Wertersatz leisten.
            Dies kann dazu führen, dass Sie die vertraglichen
            Zahlungsverpflichtungen für den Zeitraum bis zum Widerruf gleichwohl
            erfüllen müssen. Verpflichtungen zur Erstattung von Zahlungen müssen
            innerhalb von 30 Tagen erfüllt werden. Die Frist beginnt für Sie mit
            der Absendung Ihrer Widerrufserklärung, für uns mit deren Empfang.
          </p>

          <h5 className='h6 mb-2'>Besondere Hinweise</h5>
          <p className='mb-4'>
            Ihr Widerrufsrecht erlischt vorzeitig, wenn der Vertrag von beiden
            Seiten auf Ihren ausdrücklichen Wunsch vollständig erfüllt ist,
            bevor Sie Ihr Widerrufsrecht ausgeübt haben.
          </p>

          <h5 className='h6 mb-2'>Ende der Widerrufsbelehrung</h5>
        </div>
      </BlogLayout>
    </>
  );
}

export default Widerrufsrecht