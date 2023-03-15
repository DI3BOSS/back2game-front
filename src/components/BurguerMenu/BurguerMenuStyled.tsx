import styled from "styled-components";

const BurguerMenuStyled = styled.div`
  top: 10px;
  right: 10px;
  position: fixed;

  .burguer {
    display: block;
    width: 20px;
    height: 2px;
    margin-bottom: 4px;
    color: ${(props) => props.theme.colors.white};
    transition: transform 0.2s ease-out;
    font-size: 36px;
  }
  .menu {
    gap: 20px;
    background-color: ${(props) => props.theme.colors.black};
    padding: 15px;
    padding-right: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .close {
    color: #ffffff;
    padding-left: 10px;
    width: 20px;
    height: 2px;
    display: flex;
    width: 100%;
    font-size: 30px;
    justify-content: space-between;
  }
  .login {
    color: ${(props) => props.theme.colors.cyan};

    &:hover {
      color: ${(props) => props.theme.colors.yellow};
    }
  }
  .home {
    color: ${(props) => props.theme.colors.magenta};

    &:hover {
      color: ${(props) => props.theme.colors.yellow};
    }
  }
`;
export default BurguerMenuStyled;
