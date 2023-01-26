import React, { forwardRef, memo } from 'react';
import Button from '../../components/Button/Button';
import { motion } from 'framer-motion';

const Project = forwardRef(({ name, preview, filter, setActiveModal }, ref) => {
    const switchFilterAnimation = {
        start: { opacity: 0, scale: 0 },
        middle: { opacity: 1, scale: 1 },
        finally: { opacity: 0, scale: 0 },
    };

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

export default memo(Project);

export const MProject = memo(motion(Project));
