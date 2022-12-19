import styled from 'styled-components'

import { fadeIn, fadeOut, popIn, popOut } from './animations'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;

  background-color: rgba(0, 0, 0, 0.8);
  user-select: none;

  animation: ${fadeIn} 300ms forwards;

  &.popout {
    animation: ${fadeOut} 300ms forwards 150ms;
  }

  @media screen and (min-width: 1100px) {
    display: grid;
    place-items: center;
  }
`

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;
  height: 28.875rem;
  padding: 1.5rem;
  padding-bottom: 2.5rem;

  position: absolute;
  bottom: 0;
  z-index: 2;

  border-radius: 16px 16px 0px 0px;
  background-color: #f0f2f5;
  visibility: hidden;

  animation: ${popIn} 400ms forwards 300ms;

  &.popout {
    animation: ${popOut} 400ms forwards;
  }

  @media screen and (orientation: landscape) and (max-width: 1100px) {
    height: 100%;

    overflow-y: auto;
  }

  @media screen and (min-width: 1100px) {
    width: 36rem;
    height: fit-content;
    padding: 4rem 3rem;

    bottom: initial;

    border-radius: 5px;

    header button {
      position: absolute;
      top: 21px;
      right: 21px;
    }
  }
`

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
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > input {
    &:not(:last-of-type) {
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

    &:last-of-type {
      margin-top: 1.5rem;
      padding: 1.125rem 0;
      
      border: none;
      border-radius: 5px;
      background-color: #33cc95;
      color: #ffffff;
      cursor: pointer;
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
      cursor: pointer;

      transition: 300ms;

      &:first-of-type {
        &:hover,
        &:focus,
        &:active {
          background-color: rgba(18, 164, 84, 0.1);
        }
      }

      &:last-of-type {
        &:hover,
        &:focus,
        &:active {
          background-color: rgba(229, 46, 77, 0.1);
        }
      }
    }

    input {
      opacity: 0;
      position: absolute;
    }
  }
`

export { Wrapper, Modal, Header, Form }
