import Link from 'next/link';
import { useContext } from 'react';
import { LanguageSwitchContext } from '../context/LanguageSwitch';

const Newsletter = (/*{ email }: { email: string }*/) => {
  const { state } = useContext(LanguageSwitchContext);
  return (
    <>
      <div className="ps-xl-4">
        <h3 className="text-white h5 mb-1-9">Newsletter</h3>
        <p className="text-white opacity8 mb-3">
          {state === 'en' && (
            <>
              Subscribe to our newsletter to receive updates on the latest news!
            </>
          )}
          {state === 'de' && (
            <>
              Abonnieren Sie unseren Newsletter, um über die neuesten
              Nachrichten informiert zu werden!
            </>
          )}
        </p>
        <Link
          href={'https://newsletters.carenuity.com'}
          target="_blank"
          // href={'/product/sq-panel/launch-page'}
          // href={'/sq-panel-plus#subscribe'}
          // href={`mailto:${email}?subject=${encodeURIComponent(
          //   'Subscription to Carenuity Newsletter'
          // )}&body=${encodeURIComponent(
          //   'Please add me to your Distribution List for the Carenuity Newsletter. Thank you.'
          // )}`}
          className="btn btn-sm btn-success rounded-pill secondary small text-center col-12"
          // className="btn-style1 secondary small text-center col-12"
        >
          <span>
            {state === 'en' && <>Subscribe</>}
            {state === 'de' && <>Abonnieren</>}
          </span>
        </Link>
      </div>
    </>
  );
};

export default Newsletter;
