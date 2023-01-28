import React, { memo } from 'react';
import PropTypes from 'prop-types';

const TickerElem = ({ name }) => {
    return (
        <div className='filter'>
            {name}
        </div>
    );
};

TickerElem.propTypes = {
    name: PropTypes.string,
};

export default memo(TickerElem);