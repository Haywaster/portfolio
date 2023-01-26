import React, { memo } from 'react';

const TickerElem = ({ name }) => {
    return (
        <div className='filter'>
            {name}
        </div>
    );
};

export default memo(TickerElem);