import React, { memo } from 'react';
import { Link } from 'react-scroll';

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



export default memo(NavItem);