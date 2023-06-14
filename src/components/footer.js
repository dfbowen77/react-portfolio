import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <>
        <footer className="footer bg-primary text-white">
            <div className="footer-container">
                <section className="social-icons-wrapper d-flex flex-md-row justify-content-center">
                    <div id="Github-footer" className="d-flex flex-column align-items-center mx-md-2 transparent-bg">
                        <a href="https://github.com/dfbowen77" className="btn tooltip-test icon">
                            <FontAwesomeIcon icon= {faGithub}/>
                        </a>
                    </div>
                    <div id="Linkedin-footer" className="d-flex flex-column align-items-center mx-md-2 transparent-bg">
                        <a href="https://www.linkedin.com/in/dan-bowen-644ab97/" className="btn tooltip-test icon">
                            <FontAwesomeIcon icon= {faLinkedin}/>
                        </a>
                    </div>
                    <div id="Twitter-footer" className="d-flex flex-column align-items-center mx-md-2 transparent-bg">
                        <a href="https://twitter.com/steak_umm" className="btn tooltip-test icon">
                            <FontAwesomeIcon icon= {faTwitter}/>
                        </a>
                    </div>
                    <div id="Stack-overflow-footer" className="d-flex flex-column align-items-center mx-md-2 transparent-bg">
                        <a href="https://stackoverflow.com/users/22074991/dfbowen77" className="btn tooltip-test icon">
                            <FontAwesomeIcon icon= {faStackOverflow}/>
                        </a>
                    </div>
                </section>
                <section className="form-footer">
                    <h5 className="footer-text">Designed by Daniel F. Bowen</h5>
                </section>
            </div>
        </footer>
        </>
    )
}

// exports the Footer function for use in other parts of the application.
export default Footer;