import React from 'react';
import './WhyMe.css';

const WhyMe = () => {

    const reasons = [
        { title: 'Our Values and Missions Are Aligned', description: 'Pinterest exists to inspire and encourage individuals to create lives they love. I am deeply aligned with Pinterest\'s vision that every individual, regardless of their location, appearance, or interests, should have access to ideas that resonate with and inspire them. I believe in the power of accessibility and inclusivity in fostering inspiration. I have always been passionate about showing people the possibilities that lie before them, empowering them with the self-confidence to pursue those possibilities. Whether it\'s through my previous work with young children and disabled adults, or the projects I\’ve built such as BeakBook and Campfire Connect, I have endeavored to create environments and produce content that encourages exploration, emotional connection, and positive action. I love Pinterest, a true one-in-a-million corner of the internet that leaves users feeling good and uplifted, and would be honored to contribute to serving Pinners and the organization\'s mission.'},
        { title: 'Curiosity and Commitment to Continuous Learning and Growth', description: 'I will always be a forever student, in both tech and non-tech topics. I consider myself a learning junkie, and am always seeking out new information, adopting a growth mindset in every endeavor. My intrinsic desire to not only learn and grow, but to use that knowledge and growth ways that benefits others, would make me a great apprentice. As a Pinterest Apprentice, I would come in ready to hit the ground running, learn from brilliant engineers, and make meaningful contributions to the environment, both technically and interpersonally.'},
        { title: 'Team Player All the Way', description: 'I firmly believe in the principle that \'we are stronger together.\' My enthusiasm for teamwork stems from a deep appreciation of the diverse range of experiences and perspectives that each team member brings to the table. I thrive in environments where collaboration is key, and I find great satisfaction in solving complex problems alongside others. In my experience, the synergy of a team—where each member\'s unique insights and skills are valued and integrated—leads to more innovative, effective, and sustainable solutions. I am passionate about engaging in this collaborative dynamic, where open communication and mutual respect are paramount. Working with others not only enhances the outcome of our endeavors but also contributes to my personal and professional growth, as I continuously learn from those around me.',},
        { title: 'Strong Technical Foundation and Learning Approach', description: 'With a strong foundation in key technologies such as JavaScript, TypeScript, React, Angular, Node.js, MongoDB, and PostgreSQL, I am confident in my technical abilities to excel in this apprenticeship. My proficiency in these technologies is not just a testament to my technical skills, but also to my ability to continuously learn and adapt in the ever-evolving landscape of software development. I approach new technologies and challenges with a programmer\'s mindset, characterized by a methodical and analytical approach to problem-solving. This mindset, combined with my proven track record of quickly mastering new technologies, assures me that I am well-equipped to handle the technical challenges presented in this role. I am excited about the prospect of diving into new technologies and methodologies, further honing my abilities, and contributing meaningfully to the team as a Pinterest Apprentice.'}
    ];

    return (
        <div id="why-me" className="why-me-section">
            <h2 className="why-me-header">Why Should You Choose Me?</h2>
            {reasons.map((reason, index) => (
                <div key={index} className={`reason-item ${index % 2 === 0 ? 'right' : 'left'}`}>
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                </div>
            ))}
        </div>
    )

}

export default WhyMe;
