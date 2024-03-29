interface StateProps {
  transactions: TransactionProps[]
  transactionCards: TransactionCardsProps
}

interface TransactionProps {
  _id: string
  title: string
  price: number
  type: 'income' | 'outcome'
  category: string
  date: number
}

interface TransactionCardProps {
  value: number
  lastAddition: number
}

interface TransactionCardsProps {
  income: TransactionCardProps
  outcome: TransactionCardProps
  total: TransactionCardProps
}

type ADD_BACKEND_TRANSACTIONS = {
  type: 'ADD_BACKEND_TRANSACTIONS'
  payload: { transactions: TransactionProps[] }
}

type ADD_TRANSACTION = {
  type: 'ADD_TRANSACTION'
  payload: { transaction: TransactionProps }
}

type EDIT_TRANSACTION = {
  type: 'EDIT_TRANSACTION'
  payload: { transaction: TransactionProps }
}

type DELETE_TRANSACTION = {
  type: 'DELETE_TRANSACTION'
  payload: { transaction: TransactionProps }
}

type ActionProps = ADD_BACKEND_TRANSACTIONS | ADD_TRANSACTION | EDIT_TRANSACTION | DELETE_TRANSACTION

export type { StateProps, ActionProps, TransactionProps, TransactionCardsProps }
