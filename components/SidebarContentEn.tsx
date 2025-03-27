const SidebarContentEn = () => {
  return (
    <>
      <h3 className="h5 text-white">
        <strong>
          Information pursuant to Section 5 of the German Telemedia Act (TMG):
        </strong>
      </h3>
      <address>
        <p>
          CHIPGLOBE GmbH <br />
          Cincinnatistrasse 60 <br />
          81549 Munich, Germany <br />
        </p>
        <div>
          Tel.:{' '}
          <a
            href="tel:+4989122246900"
            className="text-white text-primary-hover"
          >
            <strong>+49 89 1222 469 00</strong>
          </a>
        </div>
        <div>
          Fax:{' '}
          <a
            href="tel:+4989122246969"
            className="text-white text-primary-hover"
          >
            <strong>+49 89 1222 469 69</strong>
          </a>
        </div>
        <div>
          Email:{' '}
          <a
            href="mailto:info@chipglobe.com"
            className="text-white text-primary-hover"
          >
            <strong>info@chipglobe.com</strong>
          </a>
        </div>
      </address>
      <div>
        <p>
          Commercial register: District Court of Munich
          <br />
          Commercial register number: HRB 209414
          <br />
          VAT Identification Number pursuant to Section 27a of the German Value
          Added Tax Act: DE293062415
          <br />
          Registered under WEEE reg. no.: DE 53301452
        </p>
        {/* <p>
          Munich Commercial Register: <strong>HRB 209414</strong>
        </p>
        <p>
          VAT ID number pursuant to Section 27a of the German VAT Act (UStG):{' '}
          <strong>DE293062415</strong>
        </p> */}
      </div>
      <p>
        <span>
          <strong>
            CEO / person responsible pursuant to the German Press Act
          </strong>
          <br />
          Volker Frisch
        </span>
        <br />
        <span>
          Phone:{' '}
          <a
            href="tel:+4989122246901"
            className="text-white text-primary-hover"
          >
            +49 89 1222 469 01
          </a>
        </span>
        <br />
        <span>
          Email:{' '}
          <a
            href="mailto:volker.frisch@chipglobe.com"
            className="text-white text-primary-hover"
          >
            volker.frisch@chipglobe.com
          </a>
        </span>
      </p>
      <p>
        <strong>
          Responsible for content pursuant to Section 55 para. 2 of the German
          Interstate Broadcasting Treaty (RStV):
        </strong>{' '}
        <br />
        Volker Frisch
      </p>
    </>
  );
};

export default SidebarContentEn;
