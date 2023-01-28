import React, { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

import { MProject } from './Project';

const Gallery = ({ cards, setActiveModal }) => {
    const renderProjects = () => {
        const elements = cards.map(el => (
            <MProject setActiveModal={setActiveModal} key={el.name} {...el} />
        ));
        return elements;
    }

    const elements = renderProjects();

    return (
        <motion.div
            data-aos="fade-up"
            data-aos-delay="300"
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