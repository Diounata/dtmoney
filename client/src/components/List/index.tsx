import { Container, Name, Price, Category, Date } from './styles';

import { TransactionProps } from '../../contexts/TransactionContext/types';

import { formatCurrency } from '../../utils/formatCurrency';
import { formatDate } from '../../utils/formatDate';

interface Props {
  transaction: TransactionProps;
}

export function List({ transaction }: Props) {
  const { title, price, category, date } = transaction;

  return (
    <Container>
      <Name>{title}</Name>

      <Price value={price}>{formatCurrency(price)}</Price>

      <Category>{category}</Category>

      <Date>{formatDate(date)}</Date>
    </Container>
  );
}
