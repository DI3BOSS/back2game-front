import styled from "styled-components";

const LogInPageStyled = styled.div.attrs({
  className: "login-page",
})`
  display: flex;
  flex-direction: column;
  margin-top: 85px;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.mainFont};

  .login-page {
    &__hero {
      margin-bottom: 30px;
      image-rendering: optimizeSpeed;
      height: 100%;
      width: 100%;
    }

    &__body {
      display: flex;
      flex-direction: column;
      width: 315px;
    }

    &__title {
      font-size: ${(props) => props.theme.fontSizes.bigMessage};

      &--highlight {
        color: ${(props) => props.theme.colors.magenta};
      }
    }

    &__description {
      font-size: ${(props) => props.theme.fontSizes.detailParagraph};
    }
  }
`;

export default LogInPageStyled;
