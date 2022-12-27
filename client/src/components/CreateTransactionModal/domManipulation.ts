import { TransactionProps } from '../../contexts/TransactionContext/types'

type InputProps = HTMLInputElement & {
  name: keyof TransactionProps
} & Omit<HTMLElement, 'name'>

export function DOMManipulation() {
  const updateRadioButtonSelectionStyle = () => {
    const radioButtons = document.getElementsByName('type') as NodeListOf<HTMLInputElement>

    radioButtons.forEach(rb => {
      const label = rb.closest('label')!

      if (rb.checked) {
        label.style.borderColor = 'transparent'
        label.style.backgroundColor = rb.value === 'income' ? 'rgba(18, 164, 84, 0.1)' : 'rgba(229, 46, 77, 0.1)'
      } else {
        label.style.borderColor = '#969CB2'
        label.style.backgroundColor = 'inherit'
      }
    })
  }

  const updateDOMInputsValues = (transaction: TransactionProps) => {
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

  return { updateRadioButtonSelectionStyle, updateDOMInputsValues }
}
