import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  flex-direction: column;

  height: 14.625rem;
  padding: 2rem 1.5rem;

  background-color: ${({ theme }) => theme.COLOR.BLUE};

  @media screen and (min-width: 750px) {
    height: 13.25rem;
  }
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

const CardsContainer = styled.section`
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;

  padding: 0 1.5625rem;

  position: relative;
  top: -100px;

  overflow: auto hidden;

  > article {
    flex: 0 0 auto;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 950px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;

    width: 100%;

    top: -72px;

    > article {
      gap: 0rem;

      width: initial;
      height: 9rem;

      article {
        margin-bottom: 0;
      }
    }
  }
`;

export { Container, TitleContainer, Button, CardsContainer };
