import React from 'react';
import weatherDashboard from "../assets/Weather-dashboard.png";
import textEditor from "../assets/Text-editor.png";
import codeQuiz from "../assets/Code-quiz.png";
import passwordGenerator from "../assets/Password-generator.png";
import workdayScheduler from "../assets/Work-day-scheduler.png";
import originalPortfolio from "../assets/Original-portfolio.png";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

function Portfolio () {
    return(
        <>
        <div className="portfolio-wrapper">
            <h1 className="portfolio-title">Portfolio</h1>
            <Container>
                    <Row>
                        {/* <Col xs={12} md={4} className="d-flex justify-content-center align-items-center mb-4 mb-md-0"> */}
                        <h5 className="card-title">Progressive Web Application Text Editor</h5>
                        <a href= "https://murmuring-reef-44441.herokuapp.com/" target="_blank" rel="noreferrer">
                        <Image src={textEditor} rounded fluid thumbnail className='project1-pic'/>
                        </a>
                        <div className="card-body">
                            <Button href="https://murmuring-reef-44441.herokuapp.com/">
                                Deployed App
                            </Button>
                            <Button href="https://github.com/dfbowen77/PWA-text-editor">
                            GitHub Repo
                            </Button>
                        </div>
                        {/* </Col> */}
                        <h5 className="card-title">Weather Dashboard</h5>
                        <a href= "https://dfbowen77.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">
                        <Image src={weatherDashboard} rounded fluid thumbnail className='weatherDashboard-pic'/>
                        </a>
                        <div className="card-body">
                            <Button href="https://dfbowen77.github.io/Weather-Dashboard/">
                                Deployed App
                            </Button>
                            <Button href="https://github.com/dfbowen77/Weather-Dashboard">
                                GitHub Repo
                            </Button>
                        </div>
                        {/* </Col> */}
                        {/* </Col> */}
                        <h5 className="card-title">Workday Scheduler</h5>
                        <a href= "https://dfbowen77.github.io/Work-Day-Scheduler/" target="_blank" rel="noreferrer">
                        <Image src={workdayScheduler} rounded fluid thumbnail className='workdayScheduler-pic'/>
                        </a>
                        <div className="card-body">
                            <Button href="https://dfbowen77.github.io/Work-Day-Scheduler/">
                                Deployed App
                            </Button>
                            <Button href="https://github.com/dfbowen77/Work-Day-Scheduler">
                                GitHub Repo
                            </Button>
                        </div>
                        {/* </Col> */}
                        {/* </Col> */}
                        <h5 className="card-title">Code Quiz</h5>
                        <a href= "https://dfbowen77.github.io/Code-Quiz/" target="_blank" rel="noreferrer">
                        <Image src={codeQuiz} rounded fluid thumbnail className='codeQuiz-pic'/>
                        </a>
                        <div className="card-body">
                            <Button href="https://dfbowen77.github.io/Code-Quiz/">
                                Deployed App
                            </Button>
                            <Button href="https://github.com/dfbowen77/Code-Quiz">
                                GitHub Repo
                            </Button>
                        </div>
                        {/* </Col> */}
                        <h5 className="card-title">Password Generator</h5>
                        <a href= "https://dfbowen77.github.io/Module-3-Challenge/" target="_blank" rel="noreferrer">
                        <Image src={passwordGenerator} rounded fluid thumbnail className='passwordGenerator-pic'/>
                        </a>
                        <div className="card-body">
                            <Button href="https://dfbowen77.github.io/Module-3-Challenge/">
                                Deployed App
                            </Button>
                            <Button href="https://github.com/dfbowen77/Module-3-Challenge">
                                GitHub Repo
                            </Button>
                        </div>
                        {/* </Col> */}
                        {/* </Col> */}
                        <h5 className="card-title">Original Portfolio</h5>
                        <a href= "https://dfbowen77.github.io/Module-2-Challenge/" target="_blank" rel="noreferrer">
                        <Image src={originalPortfolio} rounded fluid thumbnail className='originalPortfolio-pic'/>
                        </a>
                        <div className="card-body">
                            <Button href="https://dfbowen77.github.io/Module-2-Challenge/">
                                Deployed App
                            </Button>
                            <Button href="https://github.com/dfbowen77/Module-2-Challenge">
                                GitHub Repo
                            </Button>
                        </div>
                        {/* </Col> */}
                    </Row>
                </Container>
            </div>

        </>
    )

}

// exports the Portfolio function for use in other parts of the application.
export default Portfolio;