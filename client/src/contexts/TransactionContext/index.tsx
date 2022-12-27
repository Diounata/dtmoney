import { createContext, Dispatch, ReactNode, useContext, useReducer, useState } from 'react'

import { initialState, reducer } from './reducer'
import { StateProps, ActionProps } from './types'

const TransactionContext = createContext({} as Props)

interface ChildrenProps {
  children: ReactNode
}

interface Props {
  transactionState: StateProps
  dispatch: Dispatch<ActionProps>
  editingTransactionId: string
  setEditingTransactionId: Dispatch<React.SetStateAction<string>>
}

export function TransactionProvider({ children }: ChildrenProps) {
  const [transactionState, dispatch] = useReducer(reducer, initialState)
  const [editingTransactionId, setEditingTransactionId] = useState('')

  return (
    <TransactionContext.Provider
      value={{ transactionState, dispatch, editingTransactionId, setEditingTransactionId }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

export function useTransaction() {
  return useContext(TransactionContext)
}
