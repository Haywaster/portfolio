import React, { useState, useEffect } from 'react';

const SkillsItem = ({ header, width, fillMax }) => {
    const [fillItem, setFillItem] = useState(0);

    useEffect(() => {
        if (width >= fillMax) {
            setFillItem(fillMax)
        }
        return
    }, [fillMax])

    return (
        <>
            <div className="bar flex">
                <div className="bar fill" style={{ "width": `${fillItem}%` }}>
                    <div className="tag bold flex">{header}</div>
                </div>
                <span>{fillItem}%</span>
            </div>
        </>

    );
};

export default SkillsItem;