import styled from "styled-components";

const BurguerMenuStyled = styled.div`
  .burguer {
    color: ${(props) => props.theme.colors.white};
    font-size: 36px;
    &__closer {
      position: fixed;
      top: 15px;
      right: 35px;
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
    color: ${(props) => props.theme.colors.cyan};

    &:hover {
      color: ${(props) => props.theme.colors.yellow};
    }
  }
  .home {
    color: ${(props) => props.theme.colors.white};

    &:hover {
      color: ${(props) => props.theme.colors.yellow};
    }
  }
`;
export default BurguerMenuStyled;
