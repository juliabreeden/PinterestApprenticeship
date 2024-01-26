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

    //create markup so can get line breaks 
    const createMarkup = (htmlString) => {
        return {__html: htmlString};
    };

    return (
        <div>
            <button onClick={goBack}>Back</button> 
            <h2>{project.title}</h2>
            <p dangerouslySetInnerHTML={createMarkup(project.details)}></p>
            {/* more details here*/}
        </div>
    );
};



export default ProjectDetails;
