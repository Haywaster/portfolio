import React, { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MProject } from './Project';

const Gallery = ({ cards, setActiveModal }) => {
    const renderProjects = () => {
        const elements = cards.map(el => (
            <MProject setActiveModal={setActiveModal} key={el.name} {...el} />
        ))
        return elements
    }
    const elements = renderProjects();

    return (
        <motion.div
            id='gallery'>
            <AnimatePresence initial={false} mode='popLayout'>
                {elements}
            </AnimatePresence >
        </motion.div >
    );
};

export default memo(Gallery);