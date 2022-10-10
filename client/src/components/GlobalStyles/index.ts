import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font: ${({ theme }) => theme.FONT.REGULAR};
    color: ${({ theme }) => theme.COLOR.TEXT};
  }

  body {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 100vw;

    background-color: ${({ theme }) => theme.COLOR.BACKGROUND};
  }

  h1, h2, h3, h4, h5, h6 {
    font: ${({ theme }) => theme.FONT.BOLD};
    color: ${({ theme }) => theme.COLOR.TITLE};
  }

  button {
    border: none;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    transition: 500ms;
  
    &:hover {
      filter: brightness(90%);
    }
  }
`;
