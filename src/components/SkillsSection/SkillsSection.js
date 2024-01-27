import { ReactComponent as ReactIcon } from '../../icons/react-svgrepo-com.svg';
import { ReactComponent as JavaScriptIcon } from '../../icons/javascript-svgrepo-com.svg';
import { ReactComponent as GitIcon } from '../../icons/git-svgrepo-com.svg';
import { ReactComponent as AngularIcon } from '../../icons/brand-angularjs-svgrepo-com.svg';
import { ReactComponent as AwsIcon } from '../../icons/aws-svgrepo-com.svg';
import { ReactComponent as Html5Icon } from '../../icons/html-5-svgrepo-com.svg';
import { ReactComponent as TypeScriptIcon } from '../../icons/typescript-svgrepo-com.svg';
import { ReactComponent as MongoDBIcon } from '../../icons/mongodb-svgrepo-com.svg';
import { ReactComponent as NodeJsIcon } from '../../icons/nodejs-icon-svgrepo-com.svg';
import { ReactComponent as PostgreSQLIcon } from '../../icons/postgresql-svgrepo-com.svg';
import { ReactComponent as CSSIcon } from '../../icons/css-3-svgrepo-com.svg';
import { ReactComponent as GitHubIcon } from '../../icons/github-142-svgrepo-com.svg';
import './SkillsSection.css';



const SkillsSection = () => {
    return (
        <>
        <h2>Skills</h2>
        <div className="skills-section">
            <div className="skills-grid">
                <div className="skill-item"><JavaScriptIcon /></div>
                <div className="skill-item"><TypeScriptIcon/></div>
                <div className="skill-item"><Html5Icon/></div>
                <div className="skill-item"><CSSIcon/></div>
                <div className='skill-item'><ReactIcon /></div>
                <div className="skill-item"><AngularIcon /></div>
                <div className="skill-item"><AwsIcon /></div>
                <div className="skill-item"><MongoDBIcon/></div>
                <div className="skill-item"><PostgreSQLIcon/></div>
                <div className="skill-item"><NodeJsIcon/></div>
                <div className="skill-item"><GitIcon /></div>
                <div className="skill-item"><GitHubIcon/></div>

        </div>
        </div>
        </>
    );
};

export default SkillsSection;