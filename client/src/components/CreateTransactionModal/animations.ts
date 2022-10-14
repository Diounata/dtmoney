import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  
  to {  
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const fadeOut = keyframes`
  from {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  to {  
    background-color: rgba(0, 0, 0, 0);
  }
`;

const popIn = keyframes`
  0% {
    scale: 0.4;
    visibility: hidden;
  }

  100% {
    scale: 1;
    visibility: visible;
  }
`;

const popOut = keyframes`
  0% {
    scale: 1;
    visibility: visible;
  }
  
  100% {
    scale: 0;
    visibility: hidden;
  }
`;

export { fadeIn, fadeOut, popIn, popOut };
