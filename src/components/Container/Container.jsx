import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './Container.css';

const Container = ({ children, id, direction }) => {
    return (
        <section id={id}>
            {id === 'contact' &&
                <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" className="svgcolor-light">
                    <path d="M0 0 L50 100 L100 0 Z" fill="#f5f5f5" stroke="#f5f5f5"></path>
                </svg>}
            <div className='container flex'>
                <div data-aos={`fade-${direction}`} data-aos-duration="1000" className="header">{id.toUpperCase()}</div>
                <div data-aos={`fade-${direction}`} data-aos-duration="1000" data-aos-delay="300" className="header-bar"></div>
                {children}
            </div>
        </section>
    );
};

Container.propTypes = {
    children: PropTypes.element.isRequired,
    id: PropTypes.string,
    direction: PropTypes.string,
}

export default memo(Container);