import React, { useState } from 'react';
import Filters from './Filters';
import Ticker from './Ticker';

import './Portfolio.css'
import Gallery from './Gallery';

const Portfolio = () => {
    const [activeFilterName, setActiveFilterName] = useState('ALL');
    const [left, setLeft] = useState('25px');
    const [width, setWidth] = useState('112px');

    return (
        <>
            <div data-aos='fade' className='filter-wrap'>
                <Filters setWidth={setWidth} setLeft={setLeft} activeFilterName={activeFilterName} setActiveFilterName={setActiveFilterName} />
                <Ticker left={left} width={width} activeFilterName={activeFilterName} />
            </div>
            <Gallery activeFilterName={activeFilterName} />
        </>
    );
};

export default Portfolio;