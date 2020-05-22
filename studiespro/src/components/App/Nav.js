import React from 'react';
import './styles.css'
import {Link} from 'react-router-dom';

function Nav(){

    const navStyle = {
        color: 'white'
    };

    return (
        <nav className="nav-bar">
            <Link style={navStyle} to='/'>
                <img 
                src="https://pngimage.net/wp-content/uploads/2018/06/white-home-icon-png-4.png"
                alt="Home" className="foto-nav"
                />
            </Link>
            
            <ul className="nav-links">
                <Link style={navStyle} to='/'>
                    <li>Login</li>
                </Link>
            </ul>

            <ul className="nav-links">
                <Link style={navStyle} to='/teachers'>
                    <li>Teachers</li>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav;