import styled from "styled-components";

const HeaderStyled = styled.header.attrs({
  className: "main-header",
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 85px;
  width: 100%;
  background: ${(props) => props.theme.colors.black};
  padding: 0 30px 0 30px;
  box-shadow: 1px 1px 10px ${(props) => props.theme.colors.blackAlpha};

  .back2game-logo {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    cursor: pointer;

    &__outer-circle {
      animation-name: outer-circle;
      animation-duration: 7s;
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

    &__inner-circle {
      animation-name: inner-circle;
      animation-duration: 5.5s;
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

    &__number-two {
      animation: number-two 1s infinite alternate;
    }

    @keyframes number-two {
      from {
        transform: translateY(2px);
      }
      to {
        transform: translateY(-2px);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      &__outer-circle,
      &__inner-circle,
      &__number-two {
        animation-duration: 0s !important;
        transform: none !important;
      }
    }
  }

  .buguer-menu {
    flex: 1;
  }
`;

export default HeaderStyled;
