import styled from "styled-components";

const FeedbackModalStyled = styled.div.attrs({
  className: "modal-feedback",
  "aria-label": "feedback modal",
})`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.blackAlpha};
  backdrop-filter: blur(10px);
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.mainFont};
  font-size: 48px;
  z-index: 10;
  position: fixed;

  .modal-feedback {
    &__message {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      height: 215px;
      width: 320px;
    }

    &__head {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      justify-content: space-between;
      font-size: ${(props) => props.theme.fontSizes.bigMessage};
      padding-bottom: 10px;
    }

    &__title {
      &--wrongfalse {
        color: ${(props) => props.theme.colors.magenta};
        font-weight: bold;
      }
      &--falsesuccess {
        color: ${(props) => props.theme.colors.cyan};
        font-weight: bold;
      }
    }
  }
`;
export default FeedbackModalStyled;
