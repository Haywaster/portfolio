import React, { useState } from 'react';
import Filters from './Filters';
import Ticker from './Ticker';

import './Portfolio.css'
import Gallery from './Gallery';

const Portfolio = ({ cards, setCards, setActiveModal }) => {
    const [left, setLeft] = useState('25px');
    const [width, setWidth] = useState('112px');

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

export default Portfolio;