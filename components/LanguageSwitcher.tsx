import { useContext, useEffect, useState } from 'react';
import { LanguageSwitchContext } from './context/LanguageSwitch';

const LanguageSwitcher = () => {
  const [languages, setLanguages] = useState<string[]>([]);
  const { dispatch } = useContext(LanguageSwitchContext);

  useEffect(() => {
    if (document !== undefined) {
      if (navigator.languages) {
        const lang = navigator.language;
        dispatch({ lang, type: 'SET' });
        setLanguages(() => {
          return navigator.languages as string[];
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <a href="#!">
        <form className="contact quform">
          <div className="quform-elements">
            <div className="row">
              <div className="col-md-12">
                <div className="quform-element form-group mb-0">
                  <div className="quform-input">
                    <select
                      className="form-control bg-dark text-white rounded-pill"
                      name="lang"
                      id="lang"
                      onChange={(e) => {
                        const lang = e.target.value;
                        if (lang) {
                          dispatch({ lang, type: 'SET' });
                        }
                      }}
                    >
                      <option value="">Languages</option>
                      {languages.map((lang, index) => (
                        <option key={index} value={lang}>
                          {lang}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </a>
    </>
  );
};

export default LanguageSwitcher;
