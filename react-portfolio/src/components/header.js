import React from 'react';
import resume from '../assets/DFB CV 2022.pdf'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <>
            <div className= "text-center header-section justify-content-center text-black">
                <h1 className="header-name">Dan Bowen</h1>
                <p className="header-description">A Durham, NC resident learning web development for personal edification.</p>

                <div className ='container mb-3 mt-4' >
                    <a href="https://github.com/dfbowen77" className="btn tooltip-test icon" title="Github" target="_blank" rel="noopener noreferrer"
                        style={{fontSize:25, color:'#E8E8E8', marginRight:10}}><FontAwesomeIcon icon="fa-brands fa-github" /></a>
                    <a href="https://github.com/dfbowen77" className="btn tooltip-test icon" title="Linkedin"
                        target="_blank" rel="noopener noreferrer" style={{fontSize:25,color:'#E8E8E8',marginRight:10}}><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                    <a href="mailto: danbowen2677@gmail.com" className="btn tooltip-test icon" title="Email" target="_blank" rel="noopener noreferrer"
                        style={{fontSize:25, color:'#E8E8E8', marginRight:10}}><FontAwesomeIcon icon="fa-solid fa-envelope" /></a>
                    <a href= { resume } className="btn tooltip-test icon" title="Resume" target="_blank" rel="noopener noreferrer"
                        style={{fontSize:25, color:'#E8E8E8'}}><FontAwesomeIcon icon="fa-solid fa-file" /></a>                        
                </div>
            </div>
        </>
    )
}

// exports the Header function for use in other parts of the application.
export default Header;
