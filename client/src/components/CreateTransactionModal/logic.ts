import { FormEvent, KeyboardEvent, useCallback, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { useTransaction } from '../../contexts/TransactionContext'
import { TransactionProps } from '../../contexts/TransactionContext/types'
import { useModal } from '../../contexts/ModalContext'
import { DOMManipulation } from './domManipulation'

const TRANSACTION_INITIAL_STATE: TransactionProps = {
  _id: '',
  title: '',
  price: 0,
  type: 'income',
  category: '',
  date: 0,
}

export function logic() {
  const { transactionState, dispatch, editingTransactionId, setEditingTransactionId } = useTransaction()
  const { updateRadioButtonSelectionStyle, updateDOMInputsValues } = DOMManipulation()
  const { isOpen, closeModal } = useModal()

  const [transaction, setTransaction] = useState<TransactionProps>(TRANSACTION_INITIAL_STATE)

  const handlePrice = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'e' || e.key === '-') e.preventDefault()
  }

  const handleChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget

    if (target.type === 'radio') updateRadioButtonSelectionStyle()

    setTransaction(prev => ({ ...prev, [target.name]: target.value }))
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    let { _id, date, price } = transaction

    _id = _id || uuid()
    date = date || Date.now()

    e.preventDefault()
    closeModal()
    dispatch({
      type: editingTransactionId ? 'EDIT_TRANSACTION' : 'ADD_TRANSACTION',
      payload: { transaction: { ...transaction, _id, date, price: +price } },
    })

    if (editingTransactionId) setEditingTransactionId('')
  }

  useEffect(() => {
    let selectedTransaction: TransactionProps | undefined

    if (editingTransactionId) {
      selectedTransaction = transactionState.transactions.find(item => item._id === editingTransactionId)

      updateDOMInputsValues(selectedTransaction!)
    }

    setTransaction(selectedTransaction ?? TRANSACTION_INITIAL_STATE)
  }, [isOpen])

  return { handleChange, handlePrice, handleSubmit }
}
