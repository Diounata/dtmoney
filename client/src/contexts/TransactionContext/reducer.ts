import { StateProps, ActionProps } from './types'

export const initialState: StateProps = {
  transactions: [],
  transactionCards: {
    income: { value: 0, lastAddition: 0 },
    outcome: { value: 0, lastAddition: 0 },
    total: { value: 0, lastAddition: 0 },
  },
}

export function reducer(state: StateProps, { type, payload }: ActionProps): StateProps {
  switch (type) {
    case 'ADD_TRANSACTION':
      const { transaction } = payload
      const { transactionCards } = state
      const { price, date, type } = transaction

      transactionCards[type].value = transactionCards[type].value + price
      transactionCards[type].lastAddition = date

    console.log(transactionCards.income.value, transactionCards.outcome.value)

      transactionCards.total.value = transactionCards.income.value - transactionCards.outcome.value
      transactionCards.total.lastAddition = date

      return {
        ...state,
        transactions: [transaction, ...state.transactions],
        transactionCards,
      }

    default:
      return state
  }
}
