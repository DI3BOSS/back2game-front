import styled from "styled-components";

const NotFoundStyled = styled.div`
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
    animation-duration: 5s;
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
    animation-duration: 3s;
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

  .error {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    &__go-back {
      width: ${(props) => props.theme.generalStyles.fieldWidth};
      height: ${(props) => props.theme.generalStyles.fieldHeight};
      background: ${(props) => props.theme.colors.magenta};
      margin-bottom: 40px;

      :hover {
        background: ${(props) => props.theme.colors.cyan};
      }
    }

    &__number {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 36px;
    }

    &__number span {
      display: inline-block;
      font-size: ${(props) => props.theme.fontSizes.errorTitle};
      font-family: ${(props) => props.theme.fonts.mainFont};
      text-align: center;
      animation: loading-flow 2s infinite;
    }

    &__number span:nth-child(1) {
      animation-delay: 0.1s;
    }

    &__number span:nth-child(2) {
      animation-delay: 0.3s;
    }

    &__number span:nth-child(3) {
      animation-delay: 0.5s;
    }

    &__number span:nth-child(4) {
      animation-delay: 0.6s;
    }

    &__number span:nth-child(5) {
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
    &__message {
      color: ${(props) => props.theme.colors.white};
      font-size: ${(props) => props.theme.fontSizes.bigMessage};
      font-family: ${(props) => props.theme.fonts.mainFont};
    }

    &__go-back {
      background: ${(props) => props.theme.colors.magenta};

      :hover {
        background: ${(props) => props.theme.colors.cyan};
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .outer-circle,
    .inner-circle,
    .error__number,
    .error__number span {
      animation-duration: 0s !important;
      transform: none !important;
    }
  }
`;

export default NotFoundStyled;
