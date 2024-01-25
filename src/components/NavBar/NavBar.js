import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            {/* Navigation links */}
            <a href="#about">About Me</a>
            <a href="#why-me">Why Me?</a>
            <a href="#projects">Projects</a>
            {/* External Links */}
            <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
            <a href="https://github.com/yourusername">GitHub</a>
        </nav>
    );
};

export default NavBar;
