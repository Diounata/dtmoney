import { Container } from './styles'

import LoadingSVG from '../../assets/loading.svg'

import { useTransaction } from '../../contexts/TransactionContext'

interface Props {
  children: JSX.Element
}

export function TransactionLoading({ children }: Props) {
  const { isLoadingData } = useTransaction()

  return isLoadingData ? (
    <Container>
      <img src={LoadingSVG} /> Loading
    </Container>
  ) : (
    children
  )
}
