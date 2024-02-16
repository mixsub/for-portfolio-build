import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { fonts } from "./font";

export const GlobalStyle = createGlobalStyle`
    ${reset};
    ${fonts};

    :root {
      font-size: 62.5%;
      font-family: "Spoqa Han Sans Neo";
    }
    a {
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }
    a:visited {
      text-decoration: none;
      color: inherit;
    }
    img {
      width: 100%;
      height: auto;
      vertical-align: top;
    }
    button {
      border: none;
      padding: 0;
      background-color: inherit;
      color: inherit;
      font: inherit;
      cursor: pointer;
    }
    input {
      font: inherit;
    }
`;
