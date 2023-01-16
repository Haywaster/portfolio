import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Project, { MProject } from './Project';

const Gallery = ({ cards }) => {
    const renderProjects = () => {
        const elements = cards.map(el => (
            <MProject key={el.name} {...el} />
        ))
        return elements
    }
    const elements = renderProjects();

    return (
        <motion.div
            data-aos="fade-up"
            id='gallery'>
            <AnimatePresence mode='popLayout'>
                {elements}
            </AnimatePresence >
        </motion.div >
    );
};

export default Gallery;