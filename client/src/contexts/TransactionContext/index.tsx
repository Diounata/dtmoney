import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react'

import { initialState, reducer } from './reducer'
import { StateProps, ActionProps } from './types'

const TransactionContext = createContext({} as Props)

interface ChildrenProps {
  children: ReactNode
}

interface Props {
  transactionState: StateProps
  dispatch: Dispatch<ActionProps>
}

export function TransactionProvider({ children }: ChildrenProps) {
  const [transactionState, dispatch] = useReducer(reducer, initialState)

  return (
    <TransactionContext.Provider value={{ transactionState, dispatch }}>
      {children}
    </TransactionContext.Provider>
  )
}

export function useTransaction() {
  return useContext(TransactionContext)
}
