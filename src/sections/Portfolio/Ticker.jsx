import React from 'react';
import PropTypes from 'prop-types';

import filtersData from '../../data/Filters.json';
import TickerElem from './TickerElem';

const renderTickerElems = () => {
    const tickerElems = filtersData.map(tickerElem =>
        <TickerElem
            key={tickerElem.name + "ticker"}
            name={tickerElem.name.toUpperCase()}
        />);
    return tickerElems;
};

const elements = renderTickerElems();

const Ticker = ({ width, left }) => {
    return (
        <div className="float-bar" style={{ "left": left, "width": width }}>
            <div className="flex row" style={{ "left": -left }}>
                {elements}
            </div>
        </div>
    );
};

Ticker.propTypes = {
    width: PropTypes.number,
    left: PropTypes.number,
};

export default Ticker;