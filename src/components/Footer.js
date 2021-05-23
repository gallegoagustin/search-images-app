import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <div>
             <div className='footerColumn'>
                    <hr id="footerSeparator" />
                <div className='footerContainer'>
                    <p>Agustín Gallego</p> 
                    <p id="footerSlash">-</p>
                    <a target="_blank" href="https://www.linkedin.com/in/agustin-gallego-741653200/"><button id="responsiveLinkedIn" className="buttonText">LinkedIn</button></a>
                    <a target="_blank" href="https://github.com/gallegoagustin"><button className="buttonText">GitHub</button></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;