import { Container, Name, Price, Category, Date, Actions } from './styles'
import { format } from 'date-fns'

import PenSVG from '../../assets/pen.svg'
import TrashSVG from '../../assets/trash.svg'

import { useModal } from '../../contexts/ModalContext'
import { useTransaction } from '../../contexts/TransactionContext'
import { TransactionProps } from '../../contexts/TransactionContext/types'

import { formatCurrency } from '../../utils/formatCurrency'

interface Props {
  transaction: TransactionProps
}

export function List({ transaction }: Props) {
  const { toggleIsOpen } = useModal()
  const { dispatch, setEditingTransactionId } = useTransaction()
  const { title, price, type, category, date } = transaction

  const deleteTransaction = () => dispatch({ type: 'DELETE_TRANSACTION', payload: { transaction } })

  const editTransaction = () => {
    setEditingTransactionId(transaction._id)
    toggleIsOpen()
  }

  return (
    <Container>
      <Name>{title}</Name>

      <Price type={type}>
        {type === 'outcome' && '-'} {formatCurrency(price)}
      </Price>

      <Category>{category}</Category>

      <Date>{format(date, 'MM/dd/yyyy')}</Date>

      <Actions>
        <button onClick={deleteTransaction}>
          <img src={TrashSVG} alt="Delete" title="Delete" />
        </button>

        <button onClick={editTransaction}>
          <img src={PenSVG} alt="Edit" title="Edit" />
        </button>
      </Actions>
    </Container>
  )
}
