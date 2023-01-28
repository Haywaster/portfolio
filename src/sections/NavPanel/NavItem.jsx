import React, { memo } from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

const NavItem = ({ name }) => {
    return (
        <Link
            activeClass="active"
            to={name}
            spy={true}
            smooth={true}
            offset={-53}
            duration={400}
        >
            {name}
        </Link>
    );
};

NavItem.propTypes = {
    name: PropTypes.string,
};

export default memo(NavItem);