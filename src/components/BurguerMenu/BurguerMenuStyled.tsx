import styled from "styled-components";

const BurguerMenuStyled = styled.div`
  .burguer {
    color: ${(props) => props.theme.colors.white};
    font-size: 36px;

    &__closer {
      position: fixed;
      top: 15px;
      right: 35px;
      animation: breathing 2s ease-in-out infinite alternate 0.2s;
    }

    &__meat {
      animation: breathing 2s ease-in-out infinite alternate 0.2s;
    }
  }

  @keyframes breathing {
    from {
      transform: scale(1.02);
    }
    to {
      transform: scale(0.96);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .burguer {
      &__closer,
      &__top-bread,
      &__meat,
      &__bottom-bread,
      &__closer {
        animation-duration: 0s !important;
        transform: none !important;
      }
    }
  }
  .menu {
    gap: 20px;
    background-color: ${(props) => props.theme.colors.black};
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    top: 85px;
    right: 35px;
    position: fixed;
    border-top: 2px solid ${(props) => props.theme.colors.yellow};

    &-switcher {
      height: 100vh;
      width: 100vw;
    }
  }
  .close {
    color: #ffffff;
    width: 20px;
    height: 2px;
    display: flex;
    width: 100%;
    font-size: 30px;
    justify-content: space-between;
    margin-top: 85px;
  }
  .login {
    color: ${(props) => props.theme.colors.magenta};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors.yellow};
    }
  }
  .home {
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors.yellow};
    }
  }
  .upload {
    color: ${(props) => props.theme.colors.cyan};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors.yellow};
    }
  }
`;
export default BurguerMenuStyled;
