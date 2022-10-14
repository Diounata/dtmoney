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
    overflow-x: hidden;

    main {
      position: relative;
      top: -50px;
    }

    #root {
      @media screen and (min-width: 1000px) {
        > header, > section, main { 
          padding-left: 1.5625rem;
          padding-right: 1.5625rem;
        }
        
      @media screen and (min-width: 1100px) {
        > header, > section, main { 
          padding-left: 10rem;
          padding-right: 10rem;
        }

        main {
          top: -10px;
          
          table {
            padding: 0;
          }
        }
      }
    }
  }

  th, h1, h2, h3, h4, h5, h6 {
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
}`;
