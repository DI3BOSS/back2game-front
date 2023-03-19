import styled from "styled-components";

const CardComponentStyled = styled.main`
  width: 350px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  .card {
    &__image {
      flex: 1;
      padding: 10px;
      background: ${(props) => props.theme.colors.grey};
      border-radius: ${(props) => props.theme.generalStyles.cornerRadius}
        ${(props) => props.theme.generalStyles.cornerRadius} 0 0;
      display: flex;
      justify-content: center;
      align-items: center;

      &-cover {
        image-rendering: optimizeSpeed;
        height: 330px;
        width: 264px;
      }
    }
    &__info {
      flex: 1;
      background: ${(props) => props.theme.colors.black};

      border-radius: 0 0 20px
        ${(props) => props.theme.generalStyles.cornerRadius};
      color: ${(props) => props.theme.colors.white};
      padding: 10px 20px;

      &--owned {
        background: ${(props) => props.theme.colors.violet};
      }
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
      flex-direction: column;
      justify-content: space-between;
    }
    &__actions {
      margin-top: 20px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 15px;
      cursor: pointer;
    }
  }

  .price {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &__title {
      color: #c8c8c8;
      font-size: 14px;
    }
  }
`;
export default CardComponentStyled;
