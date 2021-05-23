import React from 'react';
import Logo from '../assets/icon.png'
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav(props) {
    return (
        <div className="navContainer">
            <img className="mainIcon" src={Logo}/>
            <ul className="listContainer">
                <Link to='/'><li className="listItem">Search</li></Link>
                <Link to='/favorites'><li className="listItem">Favorites</li></Link>
                <Link to='about'><li className="listItem">About</li></Link>
            </ul>
        </div>
    );
}

export default Nav;