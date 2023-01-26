import React from 'react';

import filtersData from '../../data/Filters.json';
import TickerElem from './TickerElem';

const Ticker = ({ width, left }) => {
    const renderTickerElems = () => {
        const tickerElems = filtersData.map(tickerElem =>
            <TickerElem
                key={tickerElem.name + "ticker"}
                name={tickerElem.name.toUpperCase()}
            />);
        return tickerElems;
    };

    const elements = renderTickerElems();

    return (
        <div className="float-bar" style={{ "left": left, "width": width }}>
            <div className="flex row" style={{ "left": -left }}>
                {elements}
            </div>
        </div>
    );
};

export default Ticker;