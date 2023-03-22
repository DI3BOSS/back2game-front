import styled from "styled-components";

const FormPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.mainFont};

  .form-page {
    &__hero {
      &-image {
        image-rendering: optimizeSpeed;
        min-width: 100%;
        min-height: 100%;
      }
      &-section {
        overflow: hidden;
        height: 100%;
        width: 100%;
      }
    }

    &__body {
      display: flex;
      flex-direction: column;
      width: 315px;
    }

    &__title {
      font-size: ${(props) => props.theme.fontSizes.bigMessage};
      padding-top: 10px;

      &--highlight {
        color: ${(props) => props.theme.colors.magenta};
        &-upload {
          color: ${(props) => props.theme.colors.cyan};
        }
      }
    }

    &__description {
      font-size: ${(props) => props.theme.fontSizes.detailParagraph};
    }
  }

  @media screen and (min-width: 720px) {
    flex-direction: row;

    ::-webkit-scrollbar {
      display: none;
    }

    .form-page {
      &__hero {
        &-section {
          width: 70%;
          overflow: hidden;
          height: 100vh;
          padding-right: 30px;
        }

        &-image {
          image-rendering: optimizeSpeed;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &__body {
        width: 30%;
        margin: 0 50px;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export default FormPageStyled;
