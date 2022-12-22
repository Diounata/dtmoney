import { StateProps, ActionProps, TransactionProps } from './types'
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
  const { transactionCards } = state

  let transactions: TransactionProps[]

  switch (type) {
    case 'ADD_TRANSACTION':
      transactions = [payload.transaction, ...state.transactions]

      return {
        ...state,
        transactions,
        transactionCards: updateTransactionCards({
          transaction: payload.transaction,
          transactionCards,
          transactions,
        }),
      }

    case 'DELETE_TRANSACTION':
      transactions = state.transactions.filter(transaction => transaction.id !== payload.transaction.id)

      return {
        ...state,
        transactions,
        transactionCards: updateTransactionCards({
          oldTransaction: payload.transaction,
          transactionCards,
          transactions,
        }),
      }

    default:
      return state
  }
}
