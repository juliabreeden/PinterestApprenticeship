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
            <div className={isNavOpen ? "nav-links show" : "nav-links"}>
                <a href="#aboutMe" onClick={() => setIsNavOpen(false)}>About Me</a>
                <a href="#projects" onClick={() => setIsNavOpen(false)}>Projects</a>
                <a href="#why-me" onClick={() => setIsNavOpen(false)}>Why Me?</a>
                <a href="https://www.linkedin.com/in/julia-breeden-0726b692/">LinkedIn</a>
                <a href="https://github.com/juliabreeden">GitHub</a>
            </div>
        </nav>
    );
};

export default NavBar;
