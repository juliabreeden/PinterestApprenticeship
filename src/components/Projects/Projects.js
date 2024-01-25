import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
    const navigate = useNavigate();

    const goToProjectDetails = (project) => {
        navigate('/project-details', { state: { project } });
    };

    //Sample project data for now 
const projectData = [
    {
        id: 'project1',
        title: 'Project One',
        summary: 'This is a brief summary of Project One.',
        image: 'path/to/project1/image.jpg',
       
    },
    {
        id: 'project2',
        title: 'Project Two',
        summary: 'This is a brief summary of Project Two.',
        image: 'path/to/project2/image.jpg',
      
    },
  
];


    return (
        <div className="projects-container">
            {projectData.map((project) => (
                <div
                    key={project.id}
                    className="project-box"
                    onClick={() => goToProjectDetails(project)}
                    style={{ backgroundImage: `url(${project.image})` }}
                >
                    <div className="project-info">
                        <h3>{project.title}</h3>
                        <p>{project.summary}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
