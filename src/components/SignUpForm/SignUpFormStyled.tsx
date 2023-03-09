import styled from "styled-components";

const SignUpFormStyled = styled.form.attrs({
  className: "signup-form",
})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  input {
    margin: 30px;
    width: ${(props) => props.theme.generalStyles.fieldWidth};
    height: ${(props) => props.theme.generalStyles.fieldHeight};
    font-size: ${(props) => props.theme.fontSizes.standard};
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
    border-radius: ${(props) => props.theme.generalStyles.cornerRadius};
    font-family: ${(props) => props.theme.fonts.mainFont};
    justify-content: center;
    gap: 12px;
    display: flex;
    align-items: center;

    &::placeholder {
      padding-left: 20px;
    }
  }
  .signup-form__field {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default SignUpFormStyled;
