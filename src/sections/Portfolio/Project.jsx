import React from 'react';
import Button from '../../components/Button/Button'

const Project = ({ name, image, descr, filter }) => {
    return (
        <div className='mix' >
            <div className="card" style={{ backgroundImage: `url(/img/${filter.toLowerCase()}/${image})` }}></div>
            <div className="text">
                <div className="bold">{name}</div>
                <span className="highlight">{filter}</span>
            </div>
            <Button text="Learn more" />
        </div>
    );
};

export default Project;