import { ReactNode, createContext, useReducer } from 'react';
import {
  LanguageSwitchAction,
  LanguageSwitchReducerObject,
} from './index.types';

const initialState: string = 'en';

const reducer = (state: string, action: LanguageSwitchAction): string => {
  switch (action.type) {
    case 'SET':
      return action.lang.toLowerCase();

    default:
      return state;
  }
};

export const LanguageSwitchContext = createContext<LanguageSwitchReducerObject>(
  {
    state: initialState,
    dispatch: () => {},
  }
);

export const LanguageSwitchProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LanguageSwitchContext.Provider value={{ state, dispatch }}>
      {children}
    </LanguageSwitchContext.Provider>
  );
};
