import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import { motion } from 'framer-motion';

const switchFilterAnimation = {
    start: { opacity: 0, scale: 0 },
    middle: { opacity: 1, scale: 1 },
    finally: { opacity: 0, scale: 0 },
};

const Project = forwardRef(({ name, preview, filter, setActiveModal }, ref) => {
    return (
        <motion.div
            layout
            variants={switchFilterAnimation}
            initial='start'
            animate='middle'
            exit='finally'
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            ref={ref}
            className='mix' >
            <div className="card" style={{ backgroundImage: `url(/img/preview/${filter.toLowerCase()}/${preview})` }}></div>
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
