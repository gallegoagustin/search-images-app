import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About(props) {
    return (
        <div className="aboutColumn">
            <div className="aboutBoxContainer">
                    <div><p>This App was built using ReactJS-Redux technologies and pure CSS in order to improve my development skills.
                        <br/><br/>
                        You will be able to look for images using Pixabay's API and add them to your favorites list.
                        <br/><br/>
                        You can also try the mobile version!
                        <br/><br/>
                        If you want to know more about my works you can access to my social networks linked below.</p></div>
                        <Link to='/'><button className="buttonText">Home</button></Link>
                </div>
        </div>
    );
}

export default About;