import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./Projects.css";
import beakbookImage from './beakbook.png';
import apollomaticImage from './3.png'
import campConnectImage from './campconnect.png';
import p3Image from './p3.png'
import chiImage from './stopchihate.png'

const ProjectDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { project } = location.state;

    const goBack = () => {
        navigate('/'); 
    };

    //create markup so can get line breaks 
    //i understand this isn't best practice but my site doesn't accept any user html! 
    const createMarkup = (htmlString) => {
        return {__html: htmlString};
    };

    return (
        <div className='details'>
            <button onClick={goBack}>Back</button> 
            <h2>{project.title}</h2>
            <p dangerouslySetInnerHTML={createMarkup(project.details)}></p>
            <img src={project.image} alt={project.title} className="details-image" />
            {/* more details here*/}
        </div>
    );
};



export default ProjectDetails;
