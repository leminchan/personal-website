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

const getOpacity = style('mode', {
    light : '100%',
    dark : '60%'
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

  // Transitions
  -moz-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  -o-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  -webkit-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
}

// Overwriting Bootstrap
.navbar {
    background-color: ${getBackground};
    color: ${getForeground};
}

// Secondary Theming
.alt-text {
    color: #115293;
    opacity: ${getOpacity};
    -moz-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    -o-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    -webkit-transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
}

.experience-title:after, .project-title:after {
    background-color: #115293;
    opacity: ${getOpacity};
}
`;

export default GlobalStyles;