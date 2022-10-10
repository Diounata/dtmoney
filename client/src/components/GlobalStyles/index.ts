import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font: ${({ theme }) => theme.FONT.REGULAR};
  }

  body {
    background-color: ${({ theme }) => theme.COLOR.background};
  }

  h1, h2, h3, h4, h5, h6 {
    font: ${({ theme }) => theme.FONT.BOLD};
  }

  button {
    border: none;
    cursor: pointer;
  }
`;
