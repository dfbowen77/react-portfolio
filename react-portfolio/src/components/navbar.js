import React from 'react';
import resume from '../assets/DFB CV 2022.pdf'
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Navigator() {
    return (
        <>
        <div id = "home">
            <div className="container-fluid nav-color">
                <nav>
                  <ul className="navbar nav justify-content-center navbar-dark nav-color bg-primary">
                    <li className="nav-item">
                      <a className="nav-link" style={{ color:'white' }} href="#home">
                        Home
                      </a>
                    </li>
                    <li className="nav-item" >
                    <Nav.Link as={Link} to="/about-me" className="fs-5 nav-link-highlight text-white">About Me</Nav.Link>
                    </li>
                    <li className="nav-item" >
                    <Nav.Link as={Link} to="/portfolio" className="fs-5 nav-link-highlight text-white">Portfolio</Nav.Link>
                    </li>
                    <li className="nav-item" >
                      <a className= "nav-link" href={ resume } style={{ color: 'white'}}>
                        Resume
                      </a>
                    </li>
                    <li className="nav-item" >
                      <a className="nav-link" href="mailto: danbowen2677@gmail.com" style={{ color: 'white'}}>
                        Contact Me
                      </a>
                    </li>
                </ul>
              </nav>
          </div>
        </div>
        </>
    )
}

// exports the Navbar function for use in other parts of the application.
export default Navigator;