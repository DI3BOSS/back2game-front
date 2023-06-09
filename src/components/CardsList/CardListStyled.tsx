import styled from "styled-components";

const CardListStyled = styled.ul.attrs({
  className: "game-list",
})`
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: ${(props) => props.theme.colors.white};

  .shown-games {
    padding: 20px;
  }
`;

export default CardListStyled;
