import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Gallery from './Gallery';
import Filters from './Filters';
import Ticker from './Ticker';
import './Portfolio.css'

const Portfolio = ({ cards, setCards, setActiveModal }) => {
    const [left, setLeft] = useState(0);
    const [width, setWidth] = useState(0);

    return (
        <>
            <div data-aos='fade' data-aos-anchor-placement="top-bottom" className='filter-wrap'>
                <Filters setCards={setCards} setWidth={setWidth} setLeft={setLeft} />
                <Ticker left={left} width={width} />
            </div>
            <Gallery cards={cards} setActiveModal={setActiveModal} />
        </>
    );
};

Portfolio.propTypes = {
    cards: PropTypes.array,
    setCards: PropTypes.func,
    setActiveModal: PropTypes.func,
};

export default Portfolio;