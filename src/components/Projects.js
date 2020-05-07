import React, {Component} from "react";
import { Row, Col, Card } from "react-bootstrap";

// import project0 from "../images/nnn.png";

import "./Projects.css"

class Projects extends Component {

    render() {
        return (
            <Row className="project-section" id="projects">
                <div className="project-content">
                    <h2 className="project-title">Featured Projects</h2>
                    <br />
                    <Row>
                        <Col xs={12} sm={12} md={12}>
                            <a className="project-example" href="https://github.com/leminchan/No-Noise-Nonsense" target="_blank" rel="noopener noreferrer">
                                <Card style={{flex: 1, display: 'flex', width : '100%'}}
                                    bg="light">
                                    <Card.Body>
                                        <Card.Title>No Noise Nonsense</Card.Title>
                                        <Card.Text>
                                        An IoT sound-monitoring device built with a web application to monitor noise levels in on-campus housing.
                                        This was a partner project done for an IoT project course. I worked mainly on the web app, integrating back-end 
                                        services with NodeJS, visualizing data with jQuery, and setting up Azure services.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div class="chip">Javascript</div>
                                        <div class="chip">Azure</div>
                                        <div class="chip">Arduino (C)</div>
                                    </Card.Footer>
                                    </Card>
                                    <br/>
                            </a>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <a className="project-example" href="https://github.com/leminchan/pdf-master" target="_blank" rel="noopener noreferrer">
                                    <Card style={{flex: 1, display: 'flex', width : '100%'}}
                                        bg="light">
                                        <Card.Body>
                                            <Card.Title>PDF Master</Card.Title>
                                            <Card.Text>
                                            A Python script able to merge and split PDFs as well as extract text and images from them.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <div class="chip">Python</div>
                                        </Card.Footer>
                                        </Card>
                                        <br/>
                                </a>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                            <a className="project-example" href="https://github.com/hummuswins/ZotReq" target="_blank" rel="noopener noreferrer">
                                    <Card style={{flex: 1, display: 'flex', width : '100%'}}
                                        bg="light">
                                        <Card.Body>
                                            <Card.Title>Zotreqs</Card.Title>
                                            <Card.Text>
                                            A web application built to help UCI undergraduates see what major classes they could take, based
                                            on their previously-cleared prerequisites. This was a hackathon project, and I built a web scraper
                                            to obtain UC Irvine class data using Python and Beautiful Soup.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <div class="chip">Python</div>
                                            <div class="chip">Javascript</div>
                                            <div class="chip">Java</div>
                                        </Card.Footer>
                                        </Card>
                                        <br/>
                                </a>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <a className="project-example" href="https://github.com/leminchan/No-Noise-Nonsense" target="_blank" rel="noopener noreferrer">
                                    <Card style={{flex: 1, display: 'flex', width : '100%'}}
                                        bg="light">
                                        <Card.Body>
                                            <Card.Title>Medicheck</Card.Title>
                                            <Card.Text>
                                            A healthcare web application created to expedite hospital wait times by storing patient medical history.
                                            Awarded Third Place Overall at HackFresno 2018.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <div class="chip">Python</div>
                                            <div class="chip">SQLite</div>
                                            <div class="chip">HTML/CSS/Javascript</div>
                                        </Card.Footer>
                                        </Card>
                                        <br/>
                                </a>
                        </Col>
                    </Row>
                    
                
                </div>
            </Row>


        );

    }
}

export default Projects;