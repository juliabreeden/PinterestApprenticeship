import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./Projects.css";

const ProjectDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { project } = location.state;

    const goBack = () => {
        navigate('/'); 
    };

    return (
        <div>
            <button onClick={goBack}>Back</button> {/* Back button */}
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
            {/* more details here */}
        </div>
    );
};

export default ProjectDetails;
