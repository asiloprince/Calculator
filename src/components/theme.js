import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
};
export const blueTheme = {
  body: "rgb(10, 48, 85)",
};

export const GlobalStyles = createGlobalStyle`
body {
    background-color: ${(props) => props.theme.body}
}
`;
