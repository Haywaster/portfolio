import React from 'react';
import TickerElem from './TickerElem';
import filtersData from '../../data/Filters.json';

const Ticker = ({ activeFilterName, width, left }) => {
    const renderTickerElems = () => {
        const tickerElems = filtersData.map(tickerElem =>
            <TickerElem
                key={tickerElem.name + 'ticker'}
                name={tickerElem.name.toUpperCase()}
                activeFilterName={activeFilterName}
            />);
        return tickerElems;
    };

    const elements = renderTickerElems();

    return (
        <div className='float-bar' style={{ 'left': left, 'width': width }}>
            <div className="flex row" style={{ 'left': -left }}>
                {elements}
            </div>
        </div>
    );
};

export default Ticker;