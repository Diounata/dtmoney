import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';

import { initialState, reducer } from './reducer';
import { StateProps, ActionProps } from './types';

const TransactionContext = createContext({} as Props);

interface ChildrenProps {
  children: ReactNode;
}

interface Props {
  transaction: StateProps;
  dispatch: Dispatch<ActionProps>;
}

export function TransactionProvider({ children }: ChildrenProps) {
  const [transaction, dispatch] = useReducer(reducer, initialState);

  return (
    <TransactionContext.Provider value={{ transaction, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransaction() {
  return useContext(TransactionContext);
}
