import styled, { createGlobalStyle } from "styled-components";
import Helvetica from "../assets/fonts/helveticanowtext-bold-demo.ttf";
import Magnolia from "../assets/fonts/Magnolia.ttf";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
    }

    @font-face {
        font-family: "Helvetica";
        src: url(${Helvetica}) format('truetype');
    }

    @font-face {
        font-family: "Magnolia";
        src: url(${Magnolia}) format('truetype');
    }
`;

export const SLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;
`;

export default GlobalStyle;
