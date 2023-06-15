import React from 'react';
import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import resume from '../assets/DFB CV 2022.pdf'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3, faGit, faGithub, faHtml5, faJs, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { faR } from '@fortawesome/free-solid-svg-icons';

function Resume () {
    return (
        <section id='resume' className='resume-section'>
            <Container className='resume-container'>
                <Row className="my-5">
                    <Col>
                    <Stack direction="horizontal" gap={5} className='d-flex justify-content-center'>
                        <h1>Resume</h1>
                        <Button href={resume} download>
                            Download
                        </Button>
                    </Stack>
                    </Col>
                </Row>
                <Row>  
                <Col  xs={12} className="d-flex align-items-center mb-4 p-4 mx-4 border border-dark border-5 rounded">
                <Stack direction="horizontal" gap={5} className='d-flex justify-content-center'>
                        <h2>Programming Skills</h2>
                        <Stack gap={3} className='d-flex justify-content-center'>
                                <h4>Languages</h4>
                                <Stack direction="horizontal" gap={5} className='d-flex justify-content-center'> 
                                <p>HTML <FontAwesomeIcon icon= {faHtml5}/> </p> 
                                <p>CSS <FontAwesomeIcon icon= {faCss3}/></p> 
                                <p>JavaScript <FontAwesomeIcon icon= {faJs}/></p>
                                <p>SQL</p> 
                                <p>SAS</p>
                                <p>Python <FontAwesomeIcon icon= {faPython}/></p> 
                                <p>R <FontAwesomeIcon icon= {faR}/></p>
                                </Stack>
                                <h4>Frameworks/Packages</h4>
                                <Stack direction="horizontal" gap={5} className='d-flex justify-content-center'>
                                    <p>React <FontAwesomeIcon icon= {faReact}/></p>
                                    <p>Bootstrap <FontAwesomeIcon icon= {faBootstrap}/></p>
                                    <p>Bulma</p>
                                    <p>jQuery</p> 
                                    <p>Django</p>
                                    <p>Plotly</p>
                                    <p>ggPlot2</p> 
                                    <p>Express</p> 
                                    <p>Node <FontAwesomeIcon icon= {faNodeJs}/></p>
                                    <p>Lavaan</p>
                                </Stack>
                                <h4>Databases </h4>
                                <Stack direction="horizontal" gap={5} className='d-flex justify-content-center'>
                                    <p>MongoDB</p> 
                                    <p>MongoDBCompass</p>
                                    <p>MySQL</p> 
                                    <p>MySQL Workbench</p> 
                                    <p>Sqlite</p> 
                                    <p>SQLite Studio</p> 
                                </Stack>
                                <h4>Other Platforms </h4>
                                <Stack direction="horizontal" gap={5} className='d-flex justify-content-center'>
                                    <p>Git <FontAwesomeIcon icon= {faGit}/></p>
                                    <p>GitHub <FontAwesomeIcon icon= {faGithub}/></p>
                                    <p>Heroku</p>
                                    <p>Winsteps</p>
                                    <p>flexMIRT</p>
                                    <p>Insomnia</p>
                                    <p>Anaconda</p>
                                    <p>Spyder</p> 
                                    <p>VSCode</p> 
                                </Stack>
                        </Stack>
                    </Stack>
                    </Col>
                </Row>
                <Row>
                    <Col  xs={12} className="d-flex align-items-center mb-4 p-4 mx-4 border border-dark border-5 rounded">
                    <Stack direction="horizontal" gap={5} className='d-flex justify-content-center'>
                        <h2>Work Experience</h2>
                        <Stack gap={1} className='d-flex justify-content-center'>
                            <h4>Lead Psychometrician</h4>
                                <h5>Measurement Inc, 2014-2022</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus bibendum magna, vitae dapibus felis ultricies ut. Sed acodio eget est convallis ullamcorper. Duis bibendum vestibulum risus, non convallis odio aliquam eu.
                                    </p>
                            <h4>Research Associate</h4>
                                <h5>Measurement Inc, 2008-2014</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus bibendum magna, vitae dapibus felis ultricies ut. Sed acodio eget est convallis ullamcorper. Duis bibendum vestibulum risus, non convallis odio aliquam eu.
                                    </p>
                            <h4>Scoring Director</h4>
                                <h5>Measurement Inc, 2005-2008</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus bibendum magna, vitae dapibus felis ultricies ut. Sed acodio eget est convallis ullamcorper. Duis bibendum vestibulum risus, non convallis odio aliquam eu.
                                    </p>
                            </Stack>
                        </Stack>
                    </Col>
                </Row> 
                
                <Row>
                <Col  xs={12} className="d-flex align-items-center mb-4 p-4 mx-4 border border-dark border-5 rounded">
                <Stack direction="horizontal" gap={5} className='d-flex justify-content-center'>
                        <h2>Education</h2>
                        <Stack gap={2} className='d-flex justify-content-center'>
                            <h4>ABD in Educational Research Methodology</h4>
                                <h5>University of North Carolina at Greensboro, 2012-2018</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus bibendum magna, vitae dapibus felis ultricies ut. Sed acodio eget est convallis ullamcorper. Duis bibendum vestibulum risus, non convallis odio aliquam eu.
                                    </p>
                            <h4>Master of Arts in Educational Psychology Measurement and Evaluation</h4>
                                <h5>University of North Carolina at Chapel Hill, 2007-2011</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus bibendum magna, vitae dapibus felis ultricies ut. Sed acodio eget est convallis ullamcorper. Duis bibendum vestibulum risus, non convallis odio aliquam eu.
                                    </p>
                            <h4>Bachelor of Science in Operations Management and Information Systems</h4>
                                <h5>University of North Carolina at Wilmington, 1998-2001</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus bibendum magna, vitae dapibus felis ultricies ut. Sed acodio eget est convallis ullamcorper. Duis bibendum vestibulum risus, non convallis odio aliquam eu.
                                    </p> 
                        </Stack>
                    </Stack>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Resume;