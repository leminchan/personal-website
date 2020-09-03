import React from 'react';
import { Container } from "react-bootstrap";
import { ThemeProvider } from 'styled-components';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import GlobalStyles from "./Global";
import useTheme from "./components/useTheme";
import CustomNavbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {

    const theme = useTheme();

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container className="home">
          <CustomNavbar toggleClick = {e => 
            theme.setTheme(theme.mode === 'dark' 
              ? { mode : 'light'} 
              : { mode :'dark'})} />
          <About />
          <Experience />
          <Projects /> 
          {/* <CustomFooter /> */}
        </Container>
      </ThemeProvider>
      
    );

}

export default App;
