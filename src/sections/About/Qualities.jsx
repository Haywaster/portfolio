import React from 'react';

import QualitiesItem from './Qualities-item';
import QualitiesData from '../../data/Qualities.json'

const renderQualities = (array) => {
    const newArray = array.map((elem, i) => {
        return (
            <QualitiesItem
                key={elem.header}
                num={i + 1}
                picture={elem.picture}
                header={elem.header}
                descr={elem.descr} />
        );
    }).reduce((acc, c, i) => {
        if (i % 2 === 0) acc.push([]);
        acc[acc.length - 1].push(c);
        return acc;
    }, []);

    return newArray.map((arrayGroup, i) => {
        return (
            <div key={i} className='flex row-gt-sm'>
                {arrayGroup}
            </div>
        );
    });
};

const elements = renderQualities(QualitiesData);

const Qualities = () => {
    return (
        <div className="flex row label-wrap">
            {elements}
        </div>
    );
};

export default Qualities;

