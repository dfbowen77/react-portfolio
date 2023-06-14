import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import resume from '../assets/DFB CV 2022.pdf'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3, faGit, faGithub, faHtml5, faJs, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faR } from '@fortawesome/free-solid-svg-icons';

function Resume () {
    return (
        <section id='resume' className='resume-section'>
            <Container className='resume-container'>
                <Row>
                    <Col>
                        <h1>Resume</h1>
                        <Button href={resume} download>
                            My Resume
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Work Experience</h2>
                        <ul className='work-list'>
                            <li className='psychometrician'>
                            <h4>Lead Psychometrician</h4>
                                <h5>Measurement Inc, 2014-2022</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus bibendum magna, vitae dapibus felis ultricies ut. Sed acodio eget est convallis ullamcorper. Duis bibendum vestibulum risus, non convallis odio aliquam eu.
                                    </p>
                            </li>
                            <li className='research-associate'>
                            <h4>Research Associate</h4>
                                <h5>Measurement Inc, 2008-2014</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus bibendum magna, vitae dapibus felis ultricies ut. Sed acodio eget est convallis ullamcorper. Duis bibendum vestibulum risus, non convallis odio aliquam eu.
                                    </p>
                            </li>
                            <li className='scoring-director'>
                            <h4>Scoring Director</h4>
                                <h5>Measurement Inc, 2005-2008</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus bibendum magna, vitae dapibus felis ultricies ut. Sed acodio eget est convallis ullamcorper. Duis bibendum vestibulum risus, non convallis odio aliquam eu.
                                    </p> 
                            </li>
                        </ul>
                        

                        <h2>Programming Skills</h2>
                        <ul className='web-development-skill-list'>
                            <li className='languages'>
                                Languages: HTML <FontAwesomeIcon icon= {faHtml5}/>, CSS <FontAwesomeIcon icon= {faCss3}/>, JavaScript <FontAwesomeIcon icon= {faJs}/>, SQL, SAS, Python <FontAwesomeIcon icon= {faPython}/>, R <FontAwesomeIcon icon= {faR}/>
                            </li>
                            <li className='frameworks'>
                                Frameworks/Packages: React <FontAwesomeIcon icon= {faReact}/>, Bootstrap <FontAwesomeIcon icon= {faBootstrap}/>, Bulma , jQuery, Django, Plotly, ggPlot2, Express, Node <FontAwesomeIcon icon= {faNodeJs}/>, Lavaan
                            </li>
                            <li className='databases'>
                                Databases: MongoDB, MongoDBCompass, MySQL, MySQL Workbench, Sqlite, SQLite Studio 
                            </li>
                            <li className='front-end-frameworks'>
                                Other Platforms: Git <FontAwesomeIcon icon= {faGit}/>, GitHub <FontAwesomeIcon icon= {faGithub}/>, Heroku, Winsteps, flexMIRT, Insomnia
                            </li>
                        </ul>
                        <h2>Education</h2>
                        <ul className='education-list'>
                            <li className='uncg'>
                            <h4>ABD in Educational Research Methodology</h4>
                                <h5>University of North Carolina at Greensboro, 2012-2018</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus bibendum magna, vitae dapibus felis ultricies ut. Sed acodio eget est convallis ullamcorper. Duis bibendum vestibulum risus, non convallis odio aliquam eu.
                                    </p>
                            </li>
                            <li className='unc-chapel-hill'>
                            <h4>Master of Arts in Educational Psychology Measurement and Evaluation</h4>
                                <h5>University of North Carolina at Chapel Hill, 2007-2011</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus bibendum magna, vitae dapibus felis ultricies ut. Sed acodio eget est convallis ullamcorper. Duis bibendum vestibulum risus, non convallis odio aliquam eu.
                                    </p>
                            </li>
                            <li className='unc-wilmington'>
                            <h4>Bachelor of Science in Operations Management and Information Systems</h4>
                                <h5>University of North Carolina at Wilmington, 1998-2001</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus bibendum magna, vitae dapibus felis ultricies ut. Sed acodio eget est convallis ullamcorper. Duis bibendum vestibulum risus, non convallis odio aliquam eu.
                                    </p> 
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Resume;