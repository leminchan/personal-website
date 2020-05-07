import React, {Component} from "react";
import {Row, Col, Image} from "react-bootstrap";

import "./About.css";
import selfImage from "../images/me.jpg";
import githubLogo from "../images/GitHub-Mark-32px.png";
import linkedinLogo from "../images/LI-In-Bug.png";


class About extends Component {

    render() {
        return(
            <Row className="about-section" id="about">
                <Col xs={12} sm={6} className="about-content">
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
                            src={githubLogo} rounded fluid/>
                    </a>
                    <a href="https://www.linkedin.com/in/mit-chan/" target="_blank" rel="noopener noreferrer">
                        <Image className="linkedin-logo"
                            src={linkedinLogo} rounded fluid/>
                    </a>
                </Col>

                <Col>
                    <Image className="about-profile-pic"
                        src={selfImage} rounded fluid/>
                </Col>
            </Row>
            
        );
    }
}

export default About;