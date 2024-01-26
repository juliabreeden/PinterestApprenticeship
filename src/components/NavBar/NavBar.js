import React, { useState } from 'react';
import { IoMenuOutline, IoClose } from "react-icons/io5";
import './NavBar.css';

const NavBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const menuIcon = <IoMenuOutline size="40px" onClick={() => setIsNavOpen(true)} />;
    const closeIcon = <IoClose size="40px" onClick={() => setIsNavOpen(false)} />;

    return (
        <nav className="nav-bar">
            <div className="menu-icon">
                {isNavOpen ? closeIcon : menuIcon}
            </div>
            <div className={isNavOpen ? "nav-links show" : "nav-links "}>
                <a href="#about">About Me</a>
                <a href="#why-me">Why Me?</a>
                <a href="#projects">Projects</a>
                <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
                <a href="https://github.com/yourusername">GitHub</a>
            </div>
        </nav>
    );
};

export default NavBar;
