import styled from "styled-components";

const FormStyled = styled.form`
  .login-form-type {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 300px;
  }

  .upload-form-type {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 700px;
  }

  input {
    padding-left: 10px;
  }

  .icon {
    margin-left: -50px;
  }

  .form__field {
    display: flex;
    align-items: center;
    width: ${(props) => props.theme.generalStyles.fieldWidth};
    height: ${(props) => props.theme.generalStyles.fieldHeight};
    font-size: ${(props) => props.theme.fontSizes.standard};
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.black};
    border-radius: ${(props) => props.theme.generalStyles.cornerRadius};
    font-family: ${(props) => props.theme.fonts.mainFont};
    justify-content: center;
  }
  .submit {
    width: ${(props) => props.theme.generalStyles.fieldWidth};
    height: ${(props) => props.theme.generalStyles.fieldHeight};
    background: ${(props) => props.theme.colors.magenta};
    margin-bottom: 40px;

    :hover {
      background: ${(props) => props.theme.colors.cyan};
    }
  }
`;

export default FormStyled;
