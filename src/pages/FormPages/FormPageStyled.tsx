import styled from "styled-components";

const FormPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 85px;
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
        margin-bottom: 30px;
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

      &--highlight {
        color: ${(props) => props.theme.colors.magenta};
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
          height: 90vh;
          padding-right: 30px;
        }

        &-image {
          height: 100%;
          width: 100%;
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
