import React, {Component} from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";
import { withTheme } from "styled-components";
import CustomSwitch from "./CustomSwitch";

import './Navbar.scss';
import resumePDF from "../Chan_Lemin_Mit_Resume.pdf";


class CustomNavbar extends Component {

    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    }

    render() {
        return (

            <Navbar id="navbar" sticky='top'>
                <Navbar.Brand className="nav-logo" onClick={this.scrollToTop}>
                Mit Chan
                </Navbar.Brand>

                <Nav className="ml-auto">
                    <Nav.Link className="nav-item">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                        About
                        </Link>
                    </Nav.Link>

                    <Nav.Link className="nav-item">
                        <Link
                            activeClass="active"
                            to="experience"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                        Experience
                        </Link>
                    </Nav.Link>

                    <Nav.Link className="nav-item">
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}>
                        Projects
                        </Link>
                    </Nav.Link>

                    <Nav.Link className="nav-item"
                        href={resumePDF} target="_blank">Resume</Nav.Link>

                      <CustomSwitch 
                        toggleClick={this.props.toggleClick}>
                      </CustomSwitch>
                </Nav>
            </Navbar>

        );

    }

}

// class CustomNavbar extends Component {
//     scrollToTop = () => {
//         Scroll.scrollToTop();
//     }

    

//     render() {
//         return (
//         <nav className="nav" id="navbar"> 
//             <div className="nav-content">
//                 {/* <img //src={logo}
//                     className="nav-logo"
//                     // alt="Mit Chan"
//                     // onClick=somefunction
//                 /> */}

//                 <ul className="nav-items">
//                     <li className="nav-item">
//                         <Link activeClass="active"
//                             to="home"
//                             spy={true}
//                             smooth={true}
//                             offset={-100}
//                             duration={500}
//                         >
//                         Home    
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link activeClass="active"
//                             to="about"
//                             spy={true}
//                             smooth={true}
//                             offset={-100}
//                             duration={500}
//                         >
//                         About    
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link activeClass="active"
//                             to="projects"
//                             spy={true}
//                             smooth={true}
//                             offset={-100}
//                             duration={500}
//                         >
//                         Projects    
//                         </Link>
//                     </li>
//                     <li className="nav-item">
//                         Resume{/* <RLink /> */}
//                     </li>

//                 </ul>
//             </div>
//         </nav>
//         );
//     }
// }

export default withTheme(CustomNavbar);