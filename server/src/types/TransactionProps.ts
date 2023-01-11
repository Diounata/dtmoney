interface TransactionProps {
  _id: string
  title: string
  price: number
  type: 'income' | 'outcome'
  category: string
  date: number
}

export { TransactionProps }
