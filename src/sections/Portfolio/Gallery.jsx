import React, { memo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { MProject } from './Project';

const switchFilterAnimation = {
    start: { opacity: 0, scale: 0 },
    jumpStart: { opacity: 0, y: 100 },
    jump: { opacity: 1, y: 0, },
    middle: { opacity: 1, scale: 1 },
    finally: { opacity: 0, scale: 0 },
};

const Gallery = ({ cards, setActiveModal }) => {
    const renderProjects = () => {
        return cards.map((el, i) => {
            return <MProject
                key={el.name}
                setActiveModal={setActiveModal}
                layout
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                variants={switchFilterAnimation}
                initial='start'
                animate='middle'
                exit='finally'
                {...el} />
        });
    }

    const elements = renderProjects();

    return (
        <motion.div
            initial='jumpStart'
            whileInView='jump'
            variants={switchFilterAnimation}
            viewport={{ amount: 0.15, once: true }}
            id='gallery'>
            <AnimatePresence initial={false} mode='popLayout'>
                {elements}
            </AnimatePresence >
        </motion.div >
    );
};

Gallery.propTypes = {
    cards: PropTypes.array,
    setActiveModal: PropTypes.func,
};

export default memo(Gallery);