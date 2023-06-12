import React from 'react';
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import profilepic from "'../assets/profile-pic.jpg";

function About () {
    return(
        <>
            <section id="about-me" className="py-6">
                <h1 className="about-me-heading">About Me</h1>
                <Container>
                    <Row>
                        <Col xs={12} md={4} className="d-flex justify-content-center align-items-center mb-4 mb-md-0">
                            <Image src={profilepic} rounded fluid className='profile-pic' />
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )

}

// exports the About function for use in other parts of the application.
export default About;