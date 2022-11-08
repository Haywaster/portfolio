import Qualities from './Qualities';
import WhoIAm from './WhoIAm';
import Skills from './Skills';

import './About.css'

const About = () => {
    return (
        <>
            <Qualities />
            <div className="skills-wrapper flex row-gt-sm">
                <WhoIAm />
                <Skills />
            </div>
        </>
    );
};

export default About;