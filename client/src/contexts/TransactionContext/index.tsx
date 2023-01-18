import { createContext, Dispatch, ReactNode, useContext, useEffect, useReducer, useState } from 'react'
import { API } from '../../utils/axios'

import { initialState, reducer } from './reducer'
import { StateProps, ActionProps, TransactionProps } from './types'

const TransactionContext = createContext({} as Props)

interface ChildrenProps {
  children: ReactNode
}

interface Props {
  transactionState: StateProps
  dispatch: Dispatch<ActionProps>
  editingTransactionId: string
  isLoadingData: boolean
  setEditingTransactionId: Dispatch<React.SetStateAction<string>>
}

export function TransactionProvider({ children }: ChildrenProps) {
  const [transactionState, dispatch] = useReducer(reducer, initialState)
  const [editingTransactionId, setEditingTransactionId] = useState('')
  const [isLoadingData, setIsLoadingData] = useState(true)

  useEffect(() => {
    if (isLoadingData)
      API.get<TransactionProps[]>('/transactions').then(({ data }) => {
        dispatch({ type: 'ADD_BACKEND_TRANSACTIONS', payload: { transactions: data } })
        setIsLoadingData(false)
      })
  }, [])

  return (
    <TransactionContext.Provider
      value={{ transactionState, dispatch, editingTransactionId, isLoadingData, setEditingTransactionId }}>
      {children}
    </TransactionContext.Provider>
  )
}

export function useTransaction() {
  return useContext(TransactionContext)
}
