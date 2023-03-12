import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    cyan: "rgba(0, 180, 214, 1)",
    yellow: "rgba(249, 202, 0, 1)",
    magenta: "rgba(230, 63, 141, 1)",
    violet: "rgba(59, 25, 66, 1)",
    black: "rgba(30, 30, 30, 1)",
    blackAlpha: "rgba(30, 30, 30, 0.9)",
    grey: "rgba(43, 43, 43, 1)",
    lightGrey: "rgba(59, 59, 59, 1)",
    white: "rgba(255, 255, 255, 1)",
  },

  fonts: {
    mainFont: "Work Sans",
    titleFont: "Space Mono",
  },

  fontSizes: {
    standard: "1rem",
    cardTitle: "1.375rem",
    detailParagraph: "1.125rem",
    title: "4.375rem",
    errorTitle: "6rem",
    errorMessage: "3rem",
  },
  generalStyles: {
    cornerRadius: "20px",
    fieldWidth: "315px",
    fieldHeight: "55px",
  },
};

export default theme;
