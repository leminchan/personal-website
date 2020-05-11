import React, {Component} from "react";
import {Row, Col, Image} from "react-bootstrap";
import {withTheme} from "styled-components";

import "./About.css";
import selfImage from "../images/me.jpg";
import githubLogo from "../images/github-light.png";
import darkGithubLogo from "../images/github-dark.png";
import linkedinLogo from "../images/li-white.png";


class About extends Component {

    render() {
        return(
            <Row className="about-section" id="about">
                <Col className="about-content">
                    <div class="about-title">
                    Hi, I'm Mit - a computer science student at UC Irvine.
                    </div>
                    <p class="about-subtitle">
                    I'm currently in my third year here, serving as a Resident Advisor for on-campus housing.
                    I love working with people and making an impact - something I strive to do in
                    software development. I'm a highly motivated student working towards becoming a full-stack engineer.
                    </p>
                    <a href="https://github.com/leminchan" target="_blank" rel="noopener noreferrer">
                        <Image className="github-logo"
                            src={this.props.theme.mode ==='dark' ? darkGithubLogo : githubLogo} rounded fluid/>
                    </a>
                    <a href="https://www.linkedin.com/in/mit-chan/" target="_blank" rel="noopener noreferrer">
                        <Image className="linkedin-logo"
                            src={linkedinLogo} rounded fluid/>
                    </a>
                </Col>

                <Col style={{paddingRight:"0"}}>
                    <Image className="about-profile-pic"
                        src={selfImage} rounded fluid/>
                </Col>
            </Row>
            
        );
    }
}

export default withTheme(About);