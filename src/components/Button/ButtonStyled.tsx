import styled from "styled-components";

const ButtonStyled = styled.button`
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
  transition: background-color 0.1s ease-in-out;

  :hover {
    background: ${(props) => props.theme.colors.cyan};
  }
`;
export default ButtonStyled;
