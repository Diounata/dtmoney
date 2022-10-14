import styled from 'styled-components';

const Container = styled.tr`
  display: grid;
  grid-template-areas:
    'NAME NAME'
    'PRICE PRICE'
    'CATEGORY DATE';

  padding: 1.125rem 1.5rem;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLOR.CONTAINER};

  td {
    font-size: 0.875rem;
  }

  @media screen and (min-width: 750px) {
    grid-template-areas: 'NAME PRICE CATEGORY DATE';

    padding: 1.25rem 2rem;

    td {
      margin-bottom: 0;

      font-size: 0.875rem !important;
    }
  }
`;

const Name = styled.td`
  grid-area: NAME;

  color: ${({ theme }) => theme.COLOR.TITLE};
`;

const Price = styled.td<{ type: 'INCOME' | 'OUTCOME' }>`
  grid-area: PRICE;

  margin-bottom: 1.1875rem;

  font-size: 1.25rem !important;
  color: ${({ type }) => (type === 'INCOME' ? '#12A454' : '#E52E4D')};
`;

const Category = styled.td`
  grid-area: CATEGORY;
`;

const Date = styled.td`
  grid-area: DATE;

  text-align: end;
`;

export { Container, Name, Price, Category, Date };
