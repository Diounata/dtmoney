import styled, { keyframes } from 'styled-components'

const spinningAnim = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: initial;
  font: ${({ theme }) => theme.FONT.BOLD};

  img {
    animation: ${spinningAnim} 0.8s linear infinite;
  }
`

export { Container }
