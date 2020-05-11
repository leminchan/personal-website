import { createGlobalStyle } from "styled-components";
import style from "styled-theming";

const getBackground = style('mode', {
    light : '#ffffff',
    dark : '#121212'
});

const getForeground = style('mode', {
    light: '#121212',
    dark: '#ffffff'
});

const getCardTitle = style('mode', {
    // light: '#ffffff !important',
    light: 'red !important',
    dark: 'blue !important',
    //  dark: 'rgba(255, 255, 255, 0.7) !important',
});

const getCardText = style('mode', {
    light: '#121212',
    dark: 'rgba(255, 255, 255, 0.7) !important',
});

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${getBackground};
  color: ${getForeground};
  card-text: ${getCardText};
  card-title: ${getCardTitle};
  basedgod.color: ${getCardTitle};
  transition: all 0.15s linear;
}
`;

export default GlobalStyles;