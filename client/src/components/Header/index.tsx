import { Container, TitleContainer, Button, CardsContainer } from './styles';

import SVGLogo from '../../assets/logo.svg';

import { Card } from '../Card';

export function Header() {
  return (
    <Container>
      <TitleContainer>
        <img src={SVGLogo} height="32px" title="dtmoney" alt="dtmoney" />

        <Button>New transation</Button>
      </TitleContainer>
    </Container>
  );
}
