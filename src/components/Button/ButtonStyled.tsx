import styled from "styled-components";

const ButtonStyled = styled.button`
  margin: 20px;
  width: ${(props) => props.theme.generalStyles.fieldWidth};
  height: ${(props) => props.theme.generalStyles.fieldHeight};
  font-size: ${(props) => props.theme.fontSizes.standard};
  background: ${(props) => props.theme.colors.magenta};
  color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.generalStyles.cornerRadius};
  justify-content: center;
  gap: 12px;
  display: flex;
  align-items: center;
`;
export default ButtonStyled;
