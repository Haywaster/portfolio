import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import { motion } from 'framer-motion';

const Project = forwardRef(({ name, preview, filter, setActiveModal }, ref) => {
    return (
        <motion.div
            ref={ref}
            className='mix' >
            <img className="card" src={`/img/preview/${filter.toLowerCase()}/${preview}`} alt={name} />
            <div className="text">
                <div className="bold">{name}</div>
                <span className="highlight">{filter}</span>
            </div>
            <Button action={() => setActiveModal(name)} text="Learn more" />
        </motion.div>
    );
});

Project.displayName = 'Project';

Project.propTypes = {
    name: PropTypes.string,
    preview: PropTypes.string,
    filter: PropTypes.string,
    setActiveModal: PropTypes.func,
};

export const MProject = memo(motion(Project));
