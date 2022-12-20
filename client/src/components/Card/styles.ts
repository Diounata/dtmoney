import styled from 'styled-components';

export interface ICard {
  type: 'income' | 'outcome' | 'total';
}

const Container = styled.article<ICard>`
  display: flex;
  flex-direction: column;
  gap: 2.375rem;

  width: 18.75rem;
  height: 12.5rem;
  padding: 1.5rem 1.125rem;

  border-radius: 5px;
  background-color: ${({ theme, type }) => theme.COLOR[type === 'total' ? 'GREEN' : 'CONTAINER']};

  p {
    color: ${({ theme, type }) => theme.COLOR[type === 'total' ? 'CONTAINER' : 'TITLE']} !important;
  }
`;

const HeaderContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 0.875rem;
  color: ${({ theme }) => theme.COLOR.TITLE};
`;

const BalanceContainer = styled.article`
  margin-bottom: 2.625rem;

  p:first-child {
    font: ${({ theme }) => theme.FONT.MEDIUM};
    font-size: 1.875rem;
    color: ${({ theme }) => theme.COLOR.TITLE};
  }

  p:last-child {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.COLOR.TEXT};
  }
`;

export { Container, HeaderContainer, BalanceContainer };
