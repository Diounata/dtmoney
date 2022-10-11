import styled from 'styled-components';

const Table = styled.table`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 1rem 1.5rem;
`;

const Thead = styled.thead`
  tr {
    display: flex;
    align-items: center;
    justify-content: space-between;

    th {
      font: ${({ theme }) => theme.FONT.REGULAR};
      font-size: 1.25rem;

      &:last-of-type {
        font: ${({ theme }) => theme.FONT.MEDIUM};
        font-size: 0.875rem;
        color: ${({ theme }) => theme.COLOR.TEXT};
      }
    }
  }
`;

const Tbody = styled.tbody`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
`;

export { Table, Thead, Tbody };
