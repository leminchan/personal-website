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


// class App extends Component {
  
  //   constructor(props) {
    //     super(props);
    //     this.state = { isDarkMode: false }
    //     this.toggleDarkMode = this.toggleDarkMode.bind(this);
    //   };
    
    //   toggleDarkMode = () => {
      //     this.setState( state => ({ isDarkMode: !state.isDarkMode}));
      //   };
      
      //   render() {


function App() {

    const theme = useTheme();

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container className="page-container">
          <CustomNavbar toggleClick = {e => 
            theme.setTheme(theme.mode === 'dark' 
              ? { mode : 'light'} 
              : { mode :'dark'})} />
          <About />
          <Projects /> 
          {/* <CustomFooter /> */}
        </Container>
      </ThemeProvider>
      
    );

}

export default App;
