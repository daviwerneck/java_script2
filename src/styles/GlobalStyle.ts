import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
  }
  
`
export const colors = {
  primary: "#363636",
  secondary: "#6959CD",
  black: "#000",
  white: "#fff"
}
