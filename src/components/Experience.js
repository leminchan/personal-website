import React, {Component} from "react";
import { Row, Col } from "react-bootstrap";
import { withTheme } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";


import "./Experience.scss"

class Experience extends Component {

    render() {
        return (
            <div id="experience">
                <Row>
                    <Col md={12}>
                        <div className="experience-content">
                                <h2 className="experience-title">Experience</h2>
                        </div>
                    </Col>

                    <Col md={{ span: 4, offset: 1}} className="my-auto">

                        <div className="experience-position">
                            <h5>Software Development Intern</h5>
                            <h5 className="alt-text">Bryt Designs</h5>
                        </div>
                    </Col>

                    <Col md={{ span: 6 }}>
                        <div className="experience-description">
                            <ul>
                                <li className="bullet-point">
                                    <FontAwesomeIcon  className="my-auto" icon={faAngleRight}></FontAwesomeIcon>
                                    <p>
                                    Implemented interactive page features showcasing products using Javascript and CSS to increase sales.
                                    </p>
                                </li>
                                <li className="bullet-point">
                                    <FontAwesomeIcon  className="my-auto" icon={faAngleRight}></FontAwesomeIcon>
                                    <p>Worked closely with in-house designers to develop custom web pages with PHP and Bootstrap for customers.</p>
                                </li>
                                <li className="bullet-point">
                                    <FontAwesomeIcon  className="my-auto" icon={faAngleRight}></FontAwesomeIcon>
                                    <p>Researched state of the art web designs to implement a new product line landing page while following best practices.</p>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col md={{ span: 4, offset: 1}} className="my-auto">

                        <div className="experience-position">
                            <h5>Resident Advisor</h5>
                            <h5 className="alt-text">Middle Earth, UC Irvine</h5>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className="experience-description">
                            <ul>
                                <li className="bullet-point">
                                    <FontAwesomeIcon  className="my-auto" icon={faAngleRight}></FontAwesomeIcon>
                                    <p>
                                    Mentored 100 residents in adjusting to college through countless one-on-ones, being both a resource and a friend.
                                    </p>
                                </li>
                                <li className="bullet-point">
                                    <FontAwesomeIcon  className="my-auto" icon={faAngleRight}></FontAwesomeIcon>
                                    <p>Hosted weekly programs about diversity and mental health to promote inclusivity and provide resources if needed.</p>
                                </li>
                                <li className="bullet-point">
                                    <FontAwesomeIcon  className="my-auto" icon={faAngleRight}></FontAwesomeIcon>
                                    <p>Achieved more study space for residents by organizing meetings with staff and advocating ways to support residents.</p>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    
                </Row>
            </div>
        );

    }
}

export default withTheme(Experience);