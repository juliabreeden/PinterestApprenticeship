import './TechTalk.css';
import girl from "./girl-svgrepo-com.svg"
import speechBubble from "./speech-bubble-svgrepo-com.svg"

const TechTalk = () => {
    return (
        <div className="tech-talk-section">
            <div className="tech-talk-header">
                <h2>Spotlight: My Tech Talk on Serverless Architecture</h2>
            </div>
            <div className="tech-talk-content">
                <p>I recently gave a tech talk on serverless architecture. This approach to software architecture aligns with Pinterest's commitment to innovation and agility in tech development.</p>
                <p>Currently, I'm furthering my expertise in cloud technologies by studying for my first AWS Cloud certification. This knowledge base will be instrumental in contributing to cloud-based projects and innovations at Pinterest.</p>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7156397509655826432/" target="_blank" rel="noopener noreferrer" className="tech-talk-link">Watch My Talk</a>
            </div>
        </div>
    );
};

export default TechTalk;

    
    




