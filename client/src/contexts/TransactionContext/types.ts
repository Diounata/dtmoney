interface StateProps {
  transactions: TransactionProps[]
  transactionCards: TransactionCardsProps
}

interface TransactionProps {
  id: string
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

type ActionProps = { type: 'ADD_TRANSACTION'; payload: { transaction: TransactionProps } }

export type { StateProps, ActionProps, TransactionProps }
