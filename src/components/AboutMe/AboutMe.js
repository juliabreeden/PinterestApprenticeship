import React, { useState, useEffect } from 'react';
import './AboutMe.css';

const AboutMe = () => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeIn(true);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);


    return (
        <div id="aboutMe" className="aboutMe-container">
            <div className="aboutMe-paragraph">
                <h2>I'm so glad you're here! I'm Julia, </h2>
                <p>I'm a recent bootcamp graduate and a self-driven learner. I've always been intrigued by technology and how it's shaping our lives. Discovering that software engineering was accessible to individuals like me, rather than being confined to a stereotypical image portrayed in the media, ignited my journey from hobby coding to hopeful career engineer.</p>
                <p>My passion for tech is driven by a desire to make a positive impact on people's lives. Technology is involved in everything today, often used to accomplish remarkable things, but otherwised used in ways that ethically murky at best. I'm all about using it to bring beauty, inspiration, knowledge, and imagination into the world.</p>
                <p>I really value being part of communities that prioritize creativity and positivity, just like Pinterest.</p>
                <p>I made this site to convince you to select me as a Pinterest Apprentice...
                </p>
                <p className={fadeIn ? "fade-in-text" : ""} style={{fontWeight: 'bold'}}>
                Is it working yet?</p>
            </div>
        </div>
    );
};

export default AboutMe;
