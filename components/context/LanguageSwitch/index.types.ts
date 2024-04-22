import { Dispatch } from 'react';

export interface LanguageSwitchReducerObject {
  state: string;
  dispatch: Dispatch<LanguageSwitchAction>;
}

export interface LanguageSwitchAction {
  type: 'SET';
  lang: string;
}
