import styled from 'styled-components'

const Container = styled.tr`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  align-items: center;
  grid-template-areas:
    'NAME ACTIONS'
    'PRICE PRICE'
    'CATEGORY DATE';

  padding: 1.125rem 1.5rem;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.COLOR.CONTAINER};

  td {
    font-size: 0.875rem;
  }

  @media screen and (min-width: 750px) {
    grid-template-areas: 'NAME PRICE CATEGORY DATE ACTIONS';

    padding: 1.25rem 2rem;

    td {
      margin-bottom: 0;

      font-size: 1rem !important;
    }
  }
`

const Name = styled.td`
  grid-area: NAME;

  color: ${({ theme }) => theme.COLOR.TITLE};
`

const Price = styled.td<{ type: 'income' | 'outcome' | '' }>`
  grid-area: PRICE;

  margin-bottom: 1.1875rem;

  font-size: 1.25rem !important;
  color: ${({ type }) => (type === 'income' ? '#12A454' : '#E52E4D')};
`

const Category = styled.td`
  grid-area: CATEGORY;
`

const Date = styled.td`
  grid-area: DATE;

  @media screen and (max-width: 750px) {
    text-align: end;
  }
`

const Actions = styled.td`
  grid-area: ACTIONS;
  text-align: end;

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;

    background-color: inherit;
    border-radius: 8px;

    :first-of-type {
      margin-right: 0.5rem;
      border: 2px solid #e74c3c;

      :hover, :focus {
        background-color: rgba(231, 76, 60, 0.2);
      }
    }

    :last-of-type {
      border: 2px solid #3498db;

      :hover, :focus {
        background-color: rgb(52, 152, 219, 0.2);
      }
    }
  }
`

export { Container, Name, Price, Category, Date, Actions }
