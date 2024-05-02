import { useContext, useEffect, useState } from 'react';
import { LanguageSwitchContext } from './context/LanguageSwitch';
import { LANG } from './context/LanguageSwitch/index.types';

const LanguageSwitcher = () => {
  const { state, dispatch } = useContext(LanguageSwitchContext);

  useEffect(() => {
    if (document !== undefined) {
      if (navigator.languages) {
        const lang: LANG = navigator.language.includes('de') ? 'de' : 'en';
        dispatch({ lang, type: 'SET' });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="form-check form-switch">
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
      </div>
    </>
  );
};

export default LanguageSwitcher;
