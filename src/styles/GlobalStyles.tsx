import { createGlobalStyle } from "styled-components";

import "@fontsource/space-mono";
import "@fontsource/work-sans";

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;

}

body {
  margin: 0;
  font-family: "Space Mono";
  display: flex;
  justify-content: center;
  align-items: baseline;
  background: rgba(40, 40, 40, 1);
  background: linear-gradient(270deg, #3f2033 0%, rgba(115,65,85,1) 100%);
  color: #fff;
}

h1,
h2,
h3,
h4,
h5, 
h6 {
  margin: 0;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}

img {
  max-width: 100%;
  
}
input {
  all: unset;
}

a {  
  all: unset
}
`;

export default GlobalStyles;
