import React, {Component} from 'react';
import { Container } from "react-bootstrap";

import './App.css';
import './components/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import CustomNavbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import CustomFooter from "./components/CustomFooter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomNavbar />
        <Container className="page-container">
          <About />
          <Projects /> 
          {/* <CustomFooter /> */}
        </Container>
        

        {/* <Footer /> */}
      </div>
    );
  }

}

export default App;
