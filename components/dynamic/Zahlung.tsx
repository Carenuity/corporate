import { LANG_GERMANY } from '../../utils/constants';
import BlogLayout from '../BlogLayout';

const Zahlung = () => {
  return (
    <>
      <BlogLayout lang={LANG_GERMANY}>
        <div className="wow fadeIn" data-wow-delay="20ms">
          <h3 className="h4 mb-3 text-primary">Zahlung und Versand</h3>

          <h5 className="h6 mb-2">Es gelten folgende Bedingungen:</h5>
          <h5 className="h6 mb-2">Versandbedingungen</h5>
          <p className="mb-4">
            Die Lieferung erfolgt innerhalb Deutschlands und in die unten
            stehenden Länder.<strong>Versandkosten</strong> (inklusive
            gesetzliche Mehrwertsteuer)
          </p>

          <h5 className="h6 mb-2">Lieferungen innerhalb Deutschlands:</h5>
          <p className="mb-1">
            Wir berechnen die Versandkosten pauschal mit 5,95 € pro Bestellung.
          </p>

          <h5 className="h6 mb-2">Lieferungen ins Ausland:</h5>
          <p className="mb-4">
            Wir berechnen die Versandkosten ins Ausland pauschal wie folgt:
          </p>
          <p className="mb-1">EU-Länder:14,95 € </p>
          <p className="mb-4">Non-EU-Länder: 35.95 €</p>

          <h5 className="h6 mb-2">Lieferfristen</h5>
          <p className="mb-2">
            Soweit in der Artikelbeschreibung keine andere Frist angegeben ist,
            erfolgt die Lieferung der Ware in Deutschland innerhalb von 3 - 5
            Werktagen, bei Auslandslieferungen innerhalb Europas von ca. 5 - 7
            Tagen nach Auftragsbestätigung (bei vereinbarter Vorauszahlung nach
            dem Zeitpunkt Ihrer Zahlungsanweisung).
          </p>
          <p className="mb-4">
            Beachten Sie, dass an Sonn- und Feiertagen keine Zustellung erfolgt.
            Haben Sie Artikel mit unterschiedlichen Lieferzeiten bestellt,
            versenden wir die Ware in einer gemeinsamen Sendung, sofern wir
            keine abweichenden Vereinbarungen mit Ihnen getroffen haben. Die
            Lieferzeit bestimmt sich in diesem Fall nach dem Artikel mit der
            längsten Lieferzeit den Sie bestellt haben.
          </p>

          <h5 className="h6 mb-2">Zahlungsbedingungen</h5>
          <p className="mb-2">
            Bei Lieferungen innerhalb Deutschlands haben Sie folgende
            Zahlungsmöglichkeiten:
            <br /> - Zahlung per PayPal
          </p>
          <p className="mb-2">
            Bei Lieferungen ins Ausland haben Sie folgende
            Zahlungsmöglichkeiten:
            <br /> - Zahlung per PayPal
          </p>
          <p className="mb-2">
            Öffentliche Einrichtungen, Institutionen und Hochschulen können auch
            auf Rechnung bestellen.
          </p>
          <p className="mb-2">
            Faxen bzw. mailen Sie dazu Ihre Bestellung einfach an{' '}
            <a
              href="tel:+4989
            1222469-69"
            >
              +49 89 1222469-69
            </a>{' '}
            oder <a href="mailto:info@chipglobe.shop">info@chipglobe.shop</a>.
          </p>
          <p className="mb-4">
            Bei Fragen finden Sie unsere Kontaktdaten im Impressum.
          </p>
        </div>
      </BlogLayout>
    </>
  );
};

export default Zahlung;
