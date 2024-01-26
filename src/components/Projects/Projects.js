import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import beakbookImage from './beakbook.png';
import apollomaticImage from './3.png'
import campConnectImage from './campconnect.png';
import p3Image from './p3.png'
import chiImage from './stopchihate.png'

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
        summary: 'An open source GraphQL developer tool',
        image: apollomaticImage,
        details: 'This was develolped with a team of 3 phenomenal engineers under tech accelerator OS Labs. My team and I arrived at the idea for this project as a result of our learning journey into GraphQL. I was interested in alternatives to REST APIs and was fascinated with GraphQL and its efficiency in allowing developers to only fetch the exact data needed. \nWe quickly realized that when using GraphQL (the Apollo framework in our case) with MongoDB, fetching data and navigating schemas can become complex very quickly and requires advanced mapping if the GraphQL schema does not perfectly match the alignment of the MongoDB schema.\n To address this, we created the ApolloMatic library as an open source tool to streamline developers\'s experiences using GraphQL with MongoDB by parsing user files, reading MongoDB schema trees and transforming them into maching GraphQL types, resolvers, mutations, and queries.\n Apollomatic is available for download on the npm registry. Easy to configure blah blah, try it out for yourself '
      
    },
    {
        id: 'BeakBook',
        title: 'BeakBook',
        summary: 'A React web app for birders to log sightings and identify species',
        image: beakbookImage,
        details: 'I was motivated to create this application as a digital alternative to the physical bird tracking journal I keep. It\'s a project that combines my technical skills with my love for little avian friends. <br><br> <strong>Bird Sightings Journal:</strong> Users can record detailed sightings, including species, location, date, and time, along with personal notes. This feature is designed for both novice birdwatchers and seasoned ornithologists. <br><br> <strong>Secure Authentication:</strong> I implemented robust user authentication to ensure that each person\'s birding data remains private and secure. <br><br> <strong>MongoDB Database Storage:</strong> Your sightings are stored in a well-organized, reliable MongoDB database, making data retrieval straightforward and efficient.<br><br> <strong>Responsive Design:</strong> BeakBook\'s user interface is intuitive and accessible on any device. I focused on creating a seamless experience, whether you\'re logging sightings in the field or browsing from home. <br><br> <strong>AI-Powered Bird Identification:</strong> Unsure about a bird you\'ve seen? BeakBook\'s AI feature assists in identifying unknown species, making it easier for users to expand their birding knowledge. <br><br> BeakBook is more than just an app; it\'s a tool to deepen your connection with nature and the fascinating world of birds. It\'s built for everyone - from those just starting their birdwatching journey to experienced birders looking to track and share their sightings. I hope BeakBook enhances your birdwatching experience as much as it has mine!'

    },
    {
        id: 'campfire',
        title: 'Campfire Connect',
        summary: 'A Web App to Connect Outdoor Enthusiasts',
        image: campConnectImage,
        details: 'In collaboration with three fellow engineers, we created Campfire Connect for outdoor enthusiasts to safely enjoy nature together. My contributions centered on enhancing security and efficiency: <br><br> <strong>Security Enhancement:</strong> I fortified our platform using bcrypt for data encryption, integrated JWTs for secure sessions, and added protective middleware, ensuring robust user privacy and trust. <br><br> <strong>Webpack for Improved Performance:</strong> My role involved integrating Webpack for better scalability and faster load times, incorporating features like hot module reloading and ES6+ transpilation. <br><br> <strong>Backend Development:</strong> I built the Node.js/Express backend, designing a RESTful architecture that streamlined frontend-backend communication and reduced CORS issues, improving overall app functionality and user experience. <br><br> Campfire Connect reflects our commitment to connecting nature lovers through a secure, efficient, and user-friendly platform.'

       
    },
    {
        id: 'p3',
        title: 'Hands-On Angular Learning',
        summary: 'Angular Exploration: Learning in a Professional Environment',
        image: p3Image,
        details: 'After completing my bootcamp, I was eager to expand my technical repertoire. Angular caught my attention for its robustness in building scalable applications. To get hands-on experience, I collaborated with a family friend\'s business, which utilizes Angular in their tech stack. This provided me with a unique opportunity to dive into a professional codebase and learn Angular in a real-world setting. <br><br> <strong>Learning Angular and PrimeNG:</strong> I immersed myself in learning Angular and its associated PrimeNG library. This experience has given me a solid understanding of Angular\'s architecture and best practices. PrimeNG, with its rich UI components, enhanced my ability to create engaging user interfaces. <br><br> <strong>Custom UI Library Implementation:</strong> Another critical aspect of my learning journey was adapting to their custom UI library. This task challenged me to understand and apply UI standards and practices that are specific to a professional environment. <br><br> <strong>Building Custom Tables:</strong> One of my key contributions was developing custom tables, showcasing data in a more organized and visually appealing manner. This task not only solidified my Angular skills but also enhanced my understanding of effective data presentation. <br><br> This experience, although not a formal job or a standalone project, represents my proactive approach to learning and applying new technologies. It highlights my ability to adapt to different development environments and my commitment to continuous growth as a developer. <br><br> I\'ve included a snapshot of one of the custom tables I built (filled with sample data to protect privacy), which represents the practical application of my learning and the tangible results of my efforts in navigating a professional Angular codebase.'


    },
    {
        id: 'reddit',
        title: 'Reddit Bot',
        summary: 'A Reddit Bot to Address Instances of Chihuahua Hate',
        image: chiImage,
        details: 'One of my earliest and most cherished projects is a Reddit bot I scripted with Python. While it may not be a massive, groundbreaking project, and it\'s no longer active, it holds a special place in my journey as a developer. This bot was created out of a personal passion to address breed discrimination against chihuahuas on Reddit. It automatically responded to instances of negative stereotypes, reminding users that chihuahuas, like all breeds, deserve love and respect. The inspiration behind this project was to challenge the common misconceptions about chihuahuas, often mistreated or antagonized due to their small size. This bot was a small step towards spreading awareness and advocating for a breed often misunderstood and misrepresented. Including this project in my portfolio is important to me as it reflects my starting point in building things I deeply care about, marking the beginning of my journey in using technology for causes close to my heart.'
       
    },

  
];


    return (
        <>
        <h2>My Projects</h2>
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
        </>
    );
};

export default Projects;
