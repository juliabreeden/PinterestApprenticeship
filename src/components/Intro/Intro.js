



// Inside Intro.js
import React, { useState, useEffect } from 'react';
import './Intro.css';
import { Link } from 'react-scroll';

const Intro = () => {
    const [showWorld, setShowWorld] = useState(true);
    const [showPinployee, setShowPinployee] = useState(false);
    const [pinployeeOpacity, setPinployeeOpacity] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setShowWorld(false); 
            setTimeout(() => {
                setShowPinployee(true);
                let opacity = 0;
                const interval = setInterval(() => {
                    if (opacity >= 1) {
                        clearInterval(interval);
                    } else {
                        setPinployeeOpacity(opacity += 0.1);
                    }
                }, 100); 
            }, 1500);
        }, 1800);
    }, []);

    return (
        <div className="intro-container">
                 <div className="intro-text">
                Hello,
                {showWorld && !showPinployee && <span> world</span>}
                {!showWorld && !showPinployee && <span className="strike-through"> world</span>}
                {showPinployee && <span style={{opacity: pinployeeOpacity}}> Pinployee</span>}
            </div>
            <div className="intro-box">
                <Link to="aboutMe" smooth={true} duration={500}>
                    Allow me to introduce myself.
                    <span className="down-arrow">↓</span>
                </Link>
            </div>
        </div>
    );
};

export default Intro;


