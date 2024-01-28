// import React, { useState, useEffect } from 'react';
import './AboutMe.css';
import photo from './juliapic 2.jpg';

const AboutMe = () => {
    // const [isVisible, setIsVisible] = useState(false);

    // const handleScroll = () => {
    //     const aboutMeTop = document.getElementById('aboutMe').offsetTop;
    //     const scrollPosition = window.scrollY + window.innerHeight;
    //     if (scrollPosition > aboutMeTop) {
    //         setIsVisible(true);
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);


    return (
        <div id="aboutMe" className="aboutMe-container">
        <div className="aboutMe-content">
            <div className="aboutMe-photo-container">
                <img src={photo} alt="Julia" className="aboutMe-photo"/>
            </div>
            <div className="aboutMe-paragraph">
            <h2>I'm so glad you're here! I'm Julia, </h2>
                <p>a recent bootcamp graduate and committed self-driven learner. I've always been intrigued by technology and how it's shaping our daily lives in big and small ways. Discovering that software engineering was accessible to individuals like me from non-technical backgrounds, rather than being reserved for only those who fit the stereotypical image of developers portrayed in the media, ignited my journey from hobby coding to hopeful career engineer.</p>
                <p>My passion for tech is driven by a desire to make a positive impact on people's lives. The entanglement between technology and almost every aspect of living nowadays compels me to advocate for and contribute meaningfully to technology that betters the world. My generation has seen technology used to accomplish remarkable things, and also seen the introduction of software that's ethically-murky at best. I'm all about using tech to bring beauty, inspiration, knowledge, and imagination into the world.</p>
                <p>I deeply value being part of communities that prioritize creativity and positivity, just like Pinterest.</p>
                <p style={{fontWeight: 'bold'}}>So, I've made this site to convince you to select me as a Pinterest Apprentice...
                </p>
                <p style={{fontWeight: 'bold'}}>
                Is it working yet?</p>
            </div>
        </div>
    </div>
    
    );
};

export default AboutMe;
