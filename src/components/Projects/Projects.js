import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import beakbookImage from './beakbook.png';
import apollomaticImage from './3.png'

const Projects = () => {
    const navigate = useNavigate();

    const goToProjectDetails = (project) => {
        navigate('/project-details', { state: { project } });
    };

    //Sample project data for now 
const projectData = [

    {
        id: 'ApolloMatic',
        title: 'ApolloMatic',
        summary: 'Developed an open source GraphQL developer tool with a team of 3 phenomenal engineers under tech accelerator OS Labs',
        image: apollomaticImage,
        details: 'My team and I arrived at the idea for this project as a result of our learning journey into GraphQL. I was interested in alternatives to REST APIs and was fascinated with GraphQL and its efficiency in allowing developers to only fetch the exact data needed. \nWe quickly realized that when using GraphQL (the Apollo framework in our case) with MongoDB, fetching data and navigating schemas can become complex very quickly and requires advanced mapping if the GraphQL schema does not perfectly match the alignment of the MongoDB schema.\n To address this, we created the ApolloMatic library as an open source tool to streamline developers\'s experiences using GraphQL with MongoDB by parsing user files, reading MongoDB schema trees and transforming them into maching GraphQL types, resolvers, mutations, and queries.\n Apollomatic is available for download on the npm registry. Easy to configure blah blah, try it out for yourself '
      
    },
    {
        id: 'BeakBook',
        title: 'BeakBook',
        summary: 'A React web app for bird enthusiasts to track and log their bird sightings, as well as identify unknown species',
        image: beakbookImage,
        details: 'I was motivated to create this application as a digital alternative to the physical bird tracking journal I keep. It\'s a project that combines my technical skills with my love for little avian friends. <br><br> <strong>Bird Sightings Journal:</strong> Users can record detailed sightings, including species, location, date, and time, along with personal notes. This feature is designed for both novice birdwatchers and seasoned ornithologists. <br><br> <strong>Secure Authentication:</strong> I implemented robust user authentication to ensure that each person\'s birding data remains private and secure. <br><br> <strong>MongoDB Database Storage:</strong> Your sightings are stored in a well-organized, reliable MongoDB database, making data retrieval straightforward and efficient.<br><br> <strong>Responsive Design:</strong> BeakBook\'s user interface is intuitive and accessible on any device. I focused on creating a seamless experience, whether you\'re logging sightings in the field or browsing from home. <br><br> <strong>AI-Powered Bird Identification:</strong> Unsure about a bird you\'ve seen? BeakBook\'s AI feature assists in identifying unknown species, making it easier for users to expand their birding knowledge. <br><br> BeakBook is more than just an app; it\'s a tool to deepen your connection with nature and the fascinating world of birds. It\'s built for everyone - from those just starting their birdwatching journey to experienced birders looking to track and share their sightings. I hope BeakBook enhances your birdwatching experience as much as it has mine!'

    },
    {
        id: 'campfire',
        title: 'Campfire Connect',
        summary: 'An app to unite blah blah blah',
       
    },
    {
        id: 'p3',
        title: 'Angular Learning on Professional Codebase',
        summary: 'An app to unite blah blah blah',
    },
    {
        id: 'reddit',
        title: 'Reddit Bot',
        summary: 'A React web app for bird enthusiasts to track and log their bird sightings, as well as identify unknown species',
        image: beakbookImage,
       
    },

  
];


    return (
        <div className="projects-container">
            {projectData.map((project) => (
                <div
                    key={project.id}
                    className="project-box"
                    onClick={() => goToProjectDetails(project)}
                >
                    <div className="project-info">
                        <h3>{project.title}</h3>
                        <p>{project.summary}</p>
                        <img src={project.image} alt={project.title} className="project-image"></img>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
