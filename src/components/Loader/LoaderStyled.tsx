import styled from "styled-components";

const LoaderStyled = styled.div`
  top: 0;
  left: 0;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  z-index: 20;
  position: fixed;
  background: ${(props) => props.theme.colors.black};

  .outer-circle {
    animation-name: outer-circle;
    animation-duration: 1.4s;
    animation-delay: 0.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    transform-origin: center;
  }

  @keyframes outer-circle {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .inner-circle {
    animation-name: inner-circle;
    animation-duration: 1.2s;
    animation-delay: 0.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    transform-origin: center;
  }

  @keyframes inner-circle {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
  .loading {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
  }

  .loading span {
    display: inline-block;
    font-size: ${(props) => props.theme.fontSizes.title};
    font-family: ${(props) => props.theme.fonts.mainFont};
    text-align: center;
    animation: loading-flow 2s infinite;
  }

  .loading span:nth-child(1) {
    animation-delay: 0.1s;
  }

  .loading span:nth-child(2) {
    animation-delay: 0.3s;
  }

  .loading span:nth-child(3) {
    animation-delay: 0.5s;
  }

  .loading span:nth-child(4) {
    animation-delay: 0.6s;
  }

  .loading span:nth-child(5) {
    animation-delay: 0.7s;
  }

  @keyframes loading-flow {
    0% {
      color: #00b4d6;
    }
    25% {
      color: #e63f8d;
    }
    50% {
      color: #f9ca00;
    }
    75% {
      color: #ffffff;
    }
    100% {
      color: #00b4d6;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .outer-circle,
    .inner-circle,
    .loading,
    .loading span {
      animation-duration: 0s !important;
      transform: none !important;
    }
  }
`;

export default LoaderStyled;
