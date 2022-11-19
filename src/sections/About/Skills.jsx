import React, { useState } from 'react';
import SkillsItem from './Skills-item';
import { skills } from '../../data/Skills';

const Skills = () => {
    const [fillMax, setFillMax] = useState(0)

    const renderSkills = () => {
        return skills.map(skill => {
            return (
                <SkillsItem key={skill.header} header={skill.header} width={skill.width} fillMax={fillMax} />
            )
        })
    }

    let elements = renderSkills();

    const setFilling = (event) => {
        if (event.propertyName === "transform") {
            const filling = setInterval(() => {
                setFillMax(prev => {
                    if (prev >= 100 - 1) {
                        clearInterval(filling)
                    }
                    return prev + 1
                })
            }, 10)
        }
    }

    return (
        <div
            onTransitionEnd={setFilling}
            id='skills'
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
            className="flex flex-50-gt-sm waypoint bars-wrap animated slide-in-right">
            {elements}
        </div>
    );
};

export default Skills;