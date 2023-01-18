import { Container, TitleContainer, Button } from './styles'

import SVGLogo from '../../assets/logo.svg'

import { useModal } from '../../contexts/ModalContext'
import { useTransaction } from '../../contexts/TransactionContext'
import { TransactionLoading } from '../TransactionLoading'

export function Header() {
  const { toggleIsOpen } = useModal()
  const { isLoadingData } = useTransaction()

  return (
    <Container>
      <TitleContainer>
        <img src={SVGLogo} height="32px" title="dtmoney" alt="dtmoney" />

        <Button onClick={toggleIsOpen} disabled={isLoadingData}>
          <TransactionLoading>
            <>New transation</>
          </TransactionLoading>
        </Button>
      </TitleContainer>
    </Container>
  )
}
