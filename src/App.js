import React, { useState, useEffect } from 'react';
import './App.css';
import Intro from './components/Intro/Intro';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ProjectDetails from './components/Projects/ProjectDetails';
import WhyMe from './components/WhyMe/WhyMe';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SkillsSection from './components/SkillsSection/SkillsSection';
import TechTalk from './components/TechTalk/TechTalk';
import ClosingSection from './components/ClosingSection/ClosingSection';
import FunnyForm from './components/FunnyForm/FunnyForm';

function App() {
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        const show = window.scrollY > 300; // Adjust based on the height of your Intro component
        if (show !== showNavBar) {
            setShowNavBar(show);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showNavBar]);

  return (
    <Router>
      <div className="App">
        {showNavBar && <NavBar />}
        <Routes>
          <Route path="/" element={
            <>
        <Intro />
        <AboutMe id="aboutMe"/>
        <Projects id="projects"/>
    <div className="section-separator"></div>
              <WhyMe id="why-me"/>
              <div className="section-separator"></div>
              <SkillsSection/>
              <div className="section-separator"></div>
              <TechTalk/>
              <ClosingSection/>
            </>
          } />
          <Route path="/project-details" element={<ProjectDetails />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;