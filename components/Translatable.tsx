import React, { useContext, useEffect } from 'react';
import { TranslatableContext } from './context/TranslatableContext';
import { LanguageSwitchContext } from './context/LanguageSwitch';

const Translatable = () => {
  const { dispatch } = useContext(TranslatableContext);
  const { dispatch: langDispatch } = useContext(LanguageSwitchContext);

  useEffect(() => {
    if (window.document !== undefined) {
      dispatch({ type: 'SHOW' });
    }

    return () => {
      dispatch({ type: 'HIDE' });
      langDispatch({ lang: 'en', type: 'SET' });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <span id="translate" className="d-none">
        This page can be translated
      </span>
    </>
  );
};

export default Translatable;
