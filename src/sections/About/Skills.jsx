import React, { useState } from 'react';

import { skills } from '../../data/Skills';
import SkillsItem from './Skills-item';

const Skills = () => {
    const [fillMax, setFillMax] = useState(0);

    const renderSkills = () => {
        return skills.map(skill => {
            return (
                <SkillsItem
                    key={skill.header}
                    fillMax={fillMax}
                    {...skill} />
            );
        });
    };

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
            }, 10);
        };
    };

    return (
        <div
            onTransitionEnd={setFilling}
            id='skills'
            data-aos="fade-left"
            data-aos-duration="1000"
            className="flex flex-50-gt-sm bars-wrap">
            {elements}
        </div>
    );
};

export default Skills;