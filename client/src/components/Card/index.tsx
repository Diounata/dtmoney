import { ICard, Container, HeaderContainer, BalanceContainer } from './styles';

import SVGIncome from '../../assets/income.svg';
import SVGOutcome from '../../assets/outcome.svg';
import SVGTotal from '../../assets/total.svg';

import { capitalize } from '../../utils/capitalizeText';

export function Card({ type }: ICard) {
  const cardTypeSVG = {
    INCOME: SVGIncome,
    OUTCOME: SVGOutcome,
    TOTAL: SVGTotal,
  };

  return (
    <Container type={type}>
      <HeaderContainer>
        <p>{capitalize(type)}</p>

        <img src={cardTypeSVG[type]} width="33px" alt={type.toLowerCase()} />
      </HeaderContainer>

      <BalanceContainer>
        <p>$ 17.400,00</p>

        <p>Last addition April 13th</p>
      </BalanceContainer>
    </Container>
  );
}
