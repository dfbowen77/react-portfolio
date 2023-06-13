import React from 'react';
import project1pic from "../assets/profile-pic.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";

function Portfolio () {
    return(
        <>
        <div className="portfolio-wrapper">
            <h1 className="portfolio-title">Portfolio</h1>
            <Container>
                    <Row>
                        <Col xs={12} md={4} className="d-flex justify-content-center align-items-center mb-4 mb-md-0">
                        <h5 className="card-title">Project #1</h5>
                        <a href= "https://murmuring-reef-44441.herokuapp.com/" target="_blank" rel="noreferrer">
                        <Image src={project1pic} rounded fluid thumbnail className='project1-pic'/>
                        </a>
                        <div className="card-body">
                            <p className="card-text">Project #1</p>
                            <a
                            href="https://murmuring-reef-44441.herokuapp.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-deployed"
                            >
                            Deployed App
                            </a>
                            <a
                            href="https://github.com/dfbowen77/PWA-text-editor"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-repo"
                            >
                            GitHub Repo
                            </a>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )

}

// exports the Portfolio function for use in other parts of the application.
export default Portfolio;