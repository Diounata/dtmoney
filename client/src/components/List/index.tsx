import { Container, Name, Price, Category, Date } from './styles';

export function List() {
  return (
    <Container>
      <Name>Website development</Name>

      <Price type="INCOME">$ 12.000,00</Price>

      <Category>Sells</Category>

      <Date>04/13/2021</Date>
    </Container>
  );
}
