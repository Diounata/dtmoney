import { StateProps, ActionProps, TransactionProps, TransactionCardsProps } from './types'
import { updateTransactionCards } from './updateTransactionCards'

export const initialState: StateProps = {
  transactions: [],
  transactionCards: {
    income: { value: 0, lastAddition: 0 },
    outcome: { value: 0, lastAddition: 0 },
    total: { value: 0, lastAddition: 0 },
  },
}

export function reducer(state: StateProps, { type, payload }: ActionProps): StateProps {
  let transactions: TransactionProps[] = state.transactions
  let transactionCards: TransactionCardsProps = state.transactionCards

  switch (type) {
    case 'ADD_TRANSACTION':
      transactions = [payload.transaction, ...transactions]

      transactionCards = updateTransactionCards({
        transaction: payload.transaction,
        transactionCards,
        transactions,
      })

      return {
        ...state,
        transactions,
        transactionCards,
      }

    case 'DELETE_TRANSACTION':
      transactions = state.transactions.filter(transaction => transaction.id !== payload.transaction.id)

      transactionCards = updateTransactionCards({
        oldTransaction: payload.transaction,
        transactionCards,
        transactions,
      })

      return {
        ...state,
        transactions,
        transactionCards,
      }

    default:
      return state
  }
}
