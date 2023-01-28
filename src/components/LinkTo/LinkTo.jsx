import React from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

import './LinkTo.css';

const LinkTo = ({ filling, param }) => {
    return (
        <Link
            className='link'
            to='about'
            smooth={true}
            offset={-53}
            duration={300}>
            <span className='btn-text'>{filling}</span>
            {param}
        </Link>
    );
};

LinkTo.propTypes = {
    filling: PropTypes.string,
    param: PropTypes.object,
}

export default LinkTo;