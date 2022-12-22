import { Container, Name, Price, Category, Date, Actions } from './styles'
import { format } from 'date-fns'

import { TransactionProps } from '../../contexts/TransactionContext/types'

import PenSVG from '../../assets/pen.svg'
import TrashSVG from '../../assets/trash.svg'

import { formatCurrency } from '../../utils/formatCurrency'

interface Props {
  transaction: TransactionProps
}

export function List({ transaction }: Props) {
  const { title, price, type, category, date } = transaction

  return (
    <Container>
      <Name>{title}</Name>

      <Price type={type}>
        {type === 'outcome' && '-'} {formatCurrency(price)}
      </Price>

      <Category>{category}</Category>

      <Date>{format(date, 'MM/dd/yyyy')}</Date>

      <Actions>
        <button>
          <img src={TrashSVG} alt="Delete" />
        </button>

        <button>
          <img src={PenSVG} alt="Edit" />
        </button>
      </Actions>
    </Container>
  )
}
