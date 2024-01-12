import styled, { keyframes } from "styled-components";

const animationsLogin = keyframes`
  0% {
    background: #0ef;
  }
  25% {
    background: #2c4766;
  }
`;

const AnimationsLogin = styled.span`
  position: absolute;
  left: 0;
  width: 32px;
  height: 6px;
  background: #2c4766;
  border-radius: 8px;
  transform-origin: 128px;
  transform: scale(2.2) rotate(calc(var(--i) * (360deg / 50)));
  animation: ${animationsLogin} 3s linear infinite;
  animation-delay: calc(var(--i) * (3s / 50));
`;

export default AnimationsLogin;
