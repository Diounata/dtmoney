import { Container, TitleContainer, Button, CardsContainer } from './styles';

import SVGLogo from '../../assets/logo.svg';

import { useModal } from '../../contexts/ModalContext';

export function Header() {
  const { toggleIsOpen } = useModal();

  return (
    <Container>
      <TitleContainer>
        <img src={SVGLogo} height="32px" title="dtmoney" alt="dtmoney" />

        <Button onClick={toggleIsOpen}>New transation</Button>
      </TitleContainer>
    </Container>
  );
}
