import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./Projects.css";
import { useEffect } from 'react';
import gif1 from './apollomatic1.gif';
import gif2 from './apollotest.gif';
import gif3 from './adenture-connect-demo.gif';
import gif4 from './beakbook.gif';

const ProjectDetails = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

    const navigate = useNavigate();
    const location = useLocation();
    const { project } = location.state;

    const goBack = () => {
        navigate('/');
        setTimeout(() => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
    };

    //create markup so can get line breaks 
    //i understand this isn't best practice but my site doesn't accept any user html! 
    const createMarkup = (htmlString) => {
        return {__html: htmlString};
    };


    return (
        <div className='project-details-container'>
            <button onClick={goBack}>&lt; Back</button>
            <div className='project-text'>
                {/* Project text content here */}
                <h2>{project.title}</h2>
                <p dangerouslySetInnerHTML={createMarkup(project.details)}></p>
            </div>
            <div className='project-images'>
                {project.id === 'ApolloMatic' ? (
                    <>
                        <img src={gif1} alt="ApolloMatic Demo 1" className="project-image" />
                        <img src={gif2} alt="ApolloMatic Demo 2" className="project-image" />
                    </>
                ) : project.id === 'campfire' ? (
                    <>
                        {/* <img src={project.image} alt={project.title} className="project-image" /> */}
                        <img src={gif3} alt="Campfire Demo" className="project-image" />
                    </>
                ) : project.id === 'BeakBook' ? (
                    <>
                        <img src={project.image} alt={project.title} className="project-image" />
                        {/* <img src={gif4} alt="BeakBook Additional Demo" className="project-image" /> */}
                    </>
                ) : (
                    <img src={project.image} alt={project.title} className="project-image" />
                )}
            </div>
        </div>
    );
    
    
};



export default ProjectDetails;
