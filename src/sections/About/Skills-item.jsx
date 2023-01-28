import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SkillsItem = ({ header, width, fillMax }) => {
    const [fillItem, setFillItem] = useState(0);

    useEffect(() => {
        if (width >= fillMax) {
            setFillItem(fillMax)
        }
        return;
    }, [fillMax, width]);

    return (
        <div className="bar flex">
            <div className="bar fill" style={{ "width": `${fillItem}%` }}>
                <div className="tag bold flex">{header}</div>
            </div>
            <span>{fillItem}%</span>
        </div>
    );
};

SkillsItem.propTypes = {
    header: PropTypes.string,
    width: PropTypes.number,
    fillMax: PropTypes.number,
};

export default SkillsItem;