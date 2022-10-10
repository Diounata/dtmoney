import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  height: 14.625rem;
  padding: 2rem 1.5rem;

  background-color: ${({ theme }) => theme.COLOR.BLUE};
`;

const TitleContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 0.6875rem 1rem;

  background-color: ${({ theme }) => theme.COLOR.LIGHT_BLUE};
  border-radius: 5px;
  font: ${({ theme }) => theme.FONT.BOLD};
  font-size: 0.75rem;
  color: #fff;
`;

export { Container, TitleContainer, Button };
