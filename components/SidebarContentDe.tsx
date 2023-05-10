import DesignerAddress from './DesignerAddress';
import DevAddress from './DevAddress';

const SidebarContentDe = () => {
  return (
    <>
      <h3 className='h5 text-white'>
        <strong>Angaben gemäß § 5 TMG:</strong>
      </h3>
      <address>
        <p>
          CHIPGLOBE GmbH <br />
          Cincinnatistr. 60 <br />
          81549 München <br />
        </p>
        <div>
          <div>
            Tel.:{' '}
            <a
              href='tel:+4989122246900'
              className='text-white text-primary-hover'
            >
              <strong>+49 89 1222 469 00</strong>
            </a>
          </div>
          <div>
            Fax:{' '}
            <a
              href='tel:+4989122246969'
              className='text-white text-primary-hover'
            >
              <strong>+49 89 1222 469 69</strong>
            </a>
          </div>
          <div>
            Email:{' '}
            <a
              href='mailto:info@chipglobe.com'
              className='text-white text-primary-hover'
            >
              <strong>info@chipglobe.com</strong>
            </a>
          </div>
        </div>
      </address>
      <div>
        <p>
          Handelsregister München: <strong>HRB 209414</strong>
        </p>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:{' '}
          <strong>DE293062415</strong>
        </p>
      </div>
      <p>
        <span>
          <strong>Geschäftsführung / V.i.S.d.P.</strong>
          <br />
          Volker Frisch
        </span>
        <br />
        <span>
          Telefon:{' '}
          <a
            href='tel:+4989122246901'
            className='text-white text-primary-hover'
          >
            +49 89 1222 469 01
          </a>
        </span>
        <br />
        <span>
          Email:{' '}
          <a
            href='mailto:volker.frisch@chipglobe.com'
            className='text-white text-primary-hover'
          >
            volker.frisch@chipglobe.com
          </a>
        </span>
      </p>
      <p>
        <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>{' '}
        <br />
        Volker Frisch
      </p>
      <div>
        <strong>Webkonzept/Design</strong> <br />
        <DesignerAddress />
      </div>
      <div>
        <strong>Programmierung</strong>
        <DevAddress />
      </div>
    </>
  );
}

export default SidebarContentDe