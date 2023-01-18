import { TransactionProps, TransactionCardsProps } from './types'

interface UpdateTransactionCardsProps {
  transactionCards: TransactionCardsProps
  transactions: TransactionProps[]
  transaction?: TransactionProps
  oldTransaction?: TransactionProps
}

function findLastAdditionDate(transactions: TransactionProps[], type?: 'income' | 'outcome') {
  return type ? transactions.find(transaction => transaction.type === type)?.date ?? 0 : transactions[0]?.date ?? 0
}

export function updateTransactionCards({
  transactionCards,
  transactions,
  transaction,
  oldTransaction,
}: UpdateTransactionCardsProps) {
  if (oldTransaction) {
    const { price, type } = oldTransaction

    transactionCards[type].value -= price
    transactionCards.total.value -= type === 'income' ? price : price * -1

    transactionCards[type].lastAddition = findLastAdditionDate(transactions, type)
  }

  if (transaction) {
    const { price, type } = transaction

    transactionCards[type].value += price
    transactionCards.total.value = transactionCards.income.value - transactionCards.outcome.value

    transactionCards[type].lastAddition = findLastAdditionDate(transactions, type)
  }

  if (transactions && !transaction) {
    for (let transaction of transactions) {
      transactionCards[transaction.type].value += transaction.price
    }

    transactionCards.total.value = transactionCards.income.value - transactionCards.outcome.value
    
    transactionCards.income.lastAddition = findLastAdditionDate(transactions, 'income')
    transactionCards.outcome.lastAddition = findLastAdditionDate(transactions, 'outcome')
  }

  transactionCards.total.lastAddition = findLastAdditionDate(transactions)

  return transactionCards
}
