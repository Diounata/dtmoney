import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;

  position: fixed;
  top: 0;

  background-color: rgba(0, 0, 0, 0.7);
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;
  height: 28.875rem;
  padding: 1.5rem;

  position: absolute;
  bottom: 0;

  border-radius: 16px 16px 0px 0px;
  background-color: #f0f2f5;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font: ${({ theme }) => theme.FONT.BOLD};
    font-size: 1.25rem;
  }

  button {
    background-color: inherit;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > input {
    width: 100%;
    padding: 1.125rem 1rem;

    border: 1px solid #d7d7d7;
    border-radius: 5px;
    background: #e7e9ee;
    color: ${({ theme }) => theme.COLOR.TITLE};

    transition: 500ms;

    &:focus,
    &:hover {
      outline: none;
      border-color: ${({ theme }) => theme.COLOR.TITLE};
    }
  }

  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.125rem;

      padding: 1.125rem 0;

      border: 1.5px solid #969cb3;
      border-radius: 5px;
      background-color: #ffffff;
      color: ${({ theme }) => theme.COLOR.TITLE};
    }

    input {
      display: none;
    }
  }

  button {
    margin: 1rem 0;
    padding: 1.125rem 0;

    border-radius: 5px;
    background-color: #33cc95;
    color: #ffffff;
  }
`;

export { Wrapper, Modal, Header, Form };
