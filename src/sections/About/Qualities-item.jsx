import React from 'react';
import { Icon } from '@iconify/react';

const QualitiesItem = ({ picture, header, descr, num }) => {
    return (
        <div className="bullet-wrap">
            <div data-aos="flip-right" data-aos-delay={num * 100} className='hex-wrap'>
                <div className="hexagon">
                    <Icon className={`mdi mdi-${picture}`} icon={`mdi:${picture}`} />
                </div>
            </div>
            <div data-aos="fade" data-aos-delay={num * 100}>
                <div className="label bold">{header}</div>
                <div>{descr}</div>
            </div>
        </div>
    );
};

export default QualitiesItem;