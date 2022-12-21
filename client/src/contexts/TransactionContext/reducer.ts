import { StateProps, ActionProps, TransactionProps, TransactionCardsProps, } from './types'

export const initialState: StateProps = {
  transactions: [],
  transactionCards: {
    income: { value: 0, lastAddition: 0 },
    outcome: { value: 0, lastAddition: 0 },
    total: { value: 0, lastAddition: 0 },
  },
}

export function reducer(state: StateProps, { type, payload }: ActionProps): StateProps {
  function updateTransactionCards(transactionCards: TransactionCardsProps, transaction: TransactionProps, oldTransaction?: TransactionProps) {
    const lastAdditionDate = oldTransaction ? state.transactions[0].date : transaction.date

    if (oldTransaction) {
      transactionCards[transaction.type].value -= oldTransaction.price
      transactionCards.total.value -= oldTransaction.price  
    }
    
    transactionCards[transaction.type].value += transaction.price
    transactionCards[transaction.type].lastAddition = lastAdditionDate

    transactionCards.total.value = transactionCards.income.value - transactionCards.outcome.value
    transactionCards.total.lastAddition = lastAdditionDate

    return transactionCards
  }

  switch (type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [payload.transaction, ...state.transactions],
        transactionCards: updateTransactionCards(state.transactionCards, payload.transaction),
      }

    default:
      return state
  }
}
