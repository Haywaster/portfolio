import React from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

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

QualitiesItem.propTypes = {
    picture: PropTypes.string,
    header: PropTypes.string,
    descr: PropTypes.string,
    num: PropTypes.number,
};

export default QualitiesItem;