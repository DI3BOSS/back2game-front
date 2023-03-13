import styled from "styled-components";

const CardComponentStyled = styled.main.attrs({
  className: "card",
})`
  height: 550px;
  width: 350px;
  display: flex;
  flex-direction: column;
  z-index: 10;
  position: fixed;

  .card {
    &__image {
      flex: 1;
      background: ${(props) => props.theme.colors.black};
      border-radius: ${(props) => props.theme.generalStyles.cornerRadius}
        ${(props) => props.theme.generalStyles.cornerRadius} 0 0;
    }
    &__info {
      flex: 1;
      background: ${(props) => props.theme.colors.violet};
      border-radius: 0 0 20px
        ${(props) => props.theme.generalStyles.cornerRadius};
      color: ${(props) => props.theme.colors.white};
      padding: 10px 20px;
    }
  }

  .game-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;

    &__line {
      height: 3px;
      width: 30%;
      background: ${(props) => props.theme.colors.yellow};
      display: block;
    }

    &__price-actions {
      display: flex;
      justify-content: space-between;
    }
    &__actions {
      width: 80%;
      display: flex;
      justify-content: space-around;
      padding-bottom: 15px;
    }
  }

  .price {
    display: flex;
    flex-direction: column;

    &__title {
      color: #858584;
      font-size: 14px;
    }
  }
`;
export default CardComponentStyled;
