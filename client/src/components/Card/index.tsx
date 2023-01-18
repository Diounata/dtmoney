import { ICard, Container, HeaderContainer, BalanceContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'

import SVGIncome from '../../assets/income.svg'
import SVGOutcome from '../../assets/outcome.svg'
import SVGTotal from '../../assets/total.svg'

import { capitalize } from '../../utils/capitalizeText'
import { formatCurrency } from '../../utils/formatCurrency'
import { TransactionLoading } from '../TransactionLoading'

import { useTransaction } from '../../contexts/TransactionContext'

export function Card({ type }: ICard) {
  const { transactionState: { transactionCards } } = useTransaction()

  const { value, lastAddition } = transactionCards[type]
  const formatDistanceDate = (date: number) => formatDistanceToNow(new Date(date), { addSuffix: true })

  const cardTypeSVG = {
    income: SVGIncome,
    outcome: SVGOutcome,
    total: SVGTotal,
  }

  return (
    <Container type={type}>
      <HeaderContainer>
        <p>{capitalize(type)}</p>

        <img src={cardTypeSVG[type]} width="33px" alt={type.toLowerCase()} />
      </HeaderContainer>

      <BalanceContainer>
        <TransactionLoading><p>{formatCurrency(value)}</p></TransactionLoading>

        <p>{lastAddition ? `Last addition ${formatDistanceDate(lastAddition)}` : ''}</p>
      </BalanceContainer>
    </Container>
  )
}
