import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      cyan: string;
      yellow: string;
      magenta: string;
      violet: string;
      black: string;
      grey: string;
      lightGrey: string;
    };

    fonts: {
      mainFont: string;
      titleFont: string;
    };

    fontSizes: {
      standard: string;
      cardTitle: string;
      detailParagraph: string;
      title: string;
    };
  }
}
