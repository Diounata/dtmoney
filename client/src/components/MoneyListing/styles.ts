import styled from 'styled-components';

const Table = styled.table`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem 1.5rem;

  thead,
  tbody {
    display: grid;
    gap: 0.5rem;
  }

  @media screen and (min-width: 750px) {
    gap: 0;

    thead tr {
      display: grid;
      justify-items: start;

      padding: 1.25rem 2rem;

      th {
        font: ${({ theme }) => theme.FONT.REGULAR};
        color: ${({ theme }) => theme.COLOR.TEXT};
      }
    }

    tr {
      grid-template-columns: 1fr 0.45fr 0.5fr 4.6875rem;
    }
  }
`;

const Thead = styled.thead`
  tr {
    display: flex;
    align-items: center;
    justify-content: space-between;

    th {
      font: ${({ theme }) => theme.FONT.REGULAR};
      font-size: 1.25rem;

      @media screen and (max-width: 750px) {
        &:last-of-type {
          font: ${({ theme }) => theme.FONT.MEDIUM};
          font-size: 0.875rem;
          color: ${({ theme }) => theme.COLOR.TEXT};
        }
      }
    }
  }
`;

const EmptyTransactions = styled.div`
  padding: 0.5rem 1.5rem;

  color: ${({ theme }) => theme.COLOR.TITLE};
`;

export { Table, Thead, EmptyTransactions };
