'use client';

import { useContext, useEffect, useState } from 'react';
import { LanguageSwitchContext } from './context/LanguageSwitch';
import { LANG } from './context/LanguageSwitch/index.types';
import Link from 'next/link';

const LanguageSwitcher = () => {
  const { state, dispatch } = useContext(LanguageSwitchContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.document !== undefined) {
      const canTranslate = document.querySelector('#translate');
      if (canTranslate) {
        if (navigator.languages) {
          const lang: LANG = navigator.language.includes('de') ? 'de' : 'en';
          dispatch({ lang, type: 'SET' });
        }
        setShow(true);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {show && (
        <div className="hstack small gap-1 align-items-center justify-content-center ms-md-3">
          <Link
            title="English"
            href={'#'}
            className={`${
              state === 'en' ? 'link-success fw-bold' : ''
            } border-end border-2 pe-1`}
            onClick={() => {
              dispatch({ lang: 'en', type: 'SET' });
            }}
          >
            EN
          </Link>
          <Link
            title="German"
            href={'#'}
            className={state === 'de' ? 'link-success fw-bold' : ''}
            onClick={() => {
              dispatch({ lang: 'de', type: 'SET' });
            }}
          >
            DE
          </Link>
        </div>
      )}

      {/* <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="langSwitch"
          checked={state === 'de' ? true : false}
          onChange={(e) => {
            const checked = e.target.checked;
            const lang: LANG = checked ? 'de' : 'en';
            if (lang) {
              dispatch({ lang, type: 'SET' });
            }
          }}
        />
        <label className="form-check-label" htmlFor="langSwitch">
          {state === 'en' && <>German</>}
          {state === 'de' && <>English</>}
        </label>
      </div> */}
    </>
  );
};

export default LanguageSwitcher;
