import { FormEvent, KeyboardEvent, useCallback, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { useTransaction } from '../../contexts/TransactionContext'
import { TransactionProps } from '../../contexts/TransactionContext/types'
import { useModal } from '../../contexts/ModalContext'

const TRANSACTION_INITIAL_STATE: TransactionProps = {
  id: '',
  title: '',
  price: 0,
  type: 'income',
  category: '',
  date: 0,
}

export function logic() {
  const { transactionState, dispatch, editingTransactionId, setEditingTransactionId } =
    useTransaction()
  const { isOpen, closeModal } = useModal()

  const [transaction, setTransaction] = useState<TransactionProps>(TRANSACTION_INITIAL_STATE)

  const updateRadioButtonSelectionStyle = () => {
    const radioButtons = document.getElementsByName('type') as NodeListOf<HTMLInputElement>

    radioButtons.forEach(rb => {
      const label = rb.closest('label')!

      if (rb.checked) {
        label.style.borderColor = 'transparent'
        label.style.backgroundColor =
          rb.value === 'income' ? 'rgba(18, 164, 84, 0.1)' : 'rgba(229, 46, 77, 0.1)'
      } else {
        label.style.borderColor = '#969CB2'
        label.style.backgroundColor = 'inherit'
      }
    })
  }

  const handlePrice = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'e' || e.key === '-') e.preventDefault()
  }

  const handleChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget

    if (target.type === 'radio') updateRadioButtonSelectionStyle()

    setTransaction(prev => ({ ...prev, [target.name]: target.value }))
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    let { id, date, price } = transaction

    id = id || uuid()
    date = date || Date.now()

    e.preventDefault()
    closeModal()
    dispatch({
      type: editingTransactionId ? 'EDIT_TRANSACTION' : 'ADD_TRANSACTION',
      payload: { transaction: { ...transaction, id, date, price: +price } },
    })

    if (editingTransactionId) setEditingTransactionId('')
  }

  const updateDOMInputsValues = (transaction: TransactionProps) => {
    type InputProps = HTMLInputElement & {
      name: keyof TransactionProps
    } & Omit<HTMLElement, 'name'>

    const inputs = document.querySelectorAll('input') as NodeListOf<InputProps>

    inputs.forEach(input => {
      const transactionValue = String(transaction[input.name])

      if (input.type !== 'submit') {
        if (input.type === 'radio' && input.value === transactionValue) input.checked = true
        else input.value = transactionValue.toString()
      }
    })

    updateRadioButtonSelectionStyle()
  }

  useEffect(() => {
    let selectedTransaction: TransactionProps | undefined

    if (editingTransactionId) {
      selectedTransaction = transactionState.transactions.find(item => item.id === editingTransactionId)

      updateDOMInputsValues(selectedTransaction!)
    }

    setTransaction(selectedTransaction ?? TRANSACTION_INITIAL_STATE)
  }, [isOpen])

  return { handleChange, handlePrice, handleSubmit }
}
