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
      width: 350px;
    }

    &__head {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__title {
      color: ${(props) => props.theme.colors.magenta};
      font-weight: bold;
    }
  }
`;
export default FeedbackModalStyled;
