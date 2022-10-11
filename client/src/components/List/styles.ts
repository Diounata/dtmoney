import styled from 'styled-components';

const Container = styled.tr`
  display: grid;
  grid-template-areas:
    'NAME NAME'
    'VALUE VALUE'
    'CATEGORY DATE';

  padding: 1.125rem 1.5rem;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLOR.CONTAINER};

  td {
    font-size: 0.875rem;
  }
`;

const Name = styled.td`
  grid-area: NAME;

  color: ${({ theme }) => theme.COLOR.TITLE};
`;

const Value = styled.td<{ type: 'INCOME' | 'OUTCOME' }>`
  grid-area: VALUE;

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

export { Container, Name, Value, Category, Date };
