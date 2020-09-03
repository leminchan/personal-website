import React, {Component} from "react";
import {Row, Col, Image} from "react-bootstrap";
import {withTheme} from "styled-components";

import "./About.scss";
import selfImage from "../images/me.jpg";
import githubLogo from "../images/github-light.png";
import darkGithubLogo from "../images/github-dark.png";
import linkedinLogo from "../images/li-white.png";


class About extends Component {

    render() {
        return(
            <div id="about">
                <Row className="flex-row-reverse">

                    <Col md={4} className="mx-auto">
                        <div class="about-profile-pic">
                            <Image src={selfImage} rounded fluid/>
                        </div>
                    </Col>
                

                    <Col md={6} className="my-auto">
                        <div class="about-title">
                            <p class="alt-text">Hi, my name is</p>
                            <h1>Lemin Mit Chan</h1>
                        </div>
                        <div class="about-subtitle">
                            <p>
                            I'm currently a fourth-year at UC Irvine, set to graduate in June 2021.
                            I love working with people and making an impact - something I strive to do in
                            software development. I'm a highly motivated student working towards becoming a full-stack engineer.
                            </p>
                        </div>
                        <a href="https://github.com/leminchan" target="_blank" rel="noopener noreferrer">
                            <Image className="github-logo"
                                src={this.props.theme.mode ==='dark' ? darkGithubLogo : githubLogo} rounded fluid/>
                        </a>
                        <a href="https://www.linkedin.com/in/mit-chan/" target="_blank" rel="noopener noreferrer">
                            <Image className="linkedin-logo"
                                src={linkedinLogo} rounded fluid/>
                        </a>
                    </Col>

                    
                </Row>
            </div>
            
        );
    }
}

export default withTheme(About);