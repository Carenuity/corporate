import { ReactNode, createContext, useReducer } from 'react';
import { StoreAction, StoreReducerObject, StoreState } from '../../utils/types';
import { StoreReducerType, carenuity, urls } from '../../utils/constants';

const initialState: StoreState = {
  companyInfo: carenuity,
  urls: urls,
};

const reducer = (state: StoreState, action: StoreAction): StoreState => {
  switch (action.type) {
    case StoreReducerType.LOADING:
      return { ...state };

    case StoreReducerType.ERROR:
      return { ...state };

    case StoreReducerType.SUCCESS:
      return { ...state };

    default:
      return { ...state };
  }
};

export const StoreContext = createContext<StoreReducerObject>({
  state: initialState,
  dispatch: () => {},
});

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
