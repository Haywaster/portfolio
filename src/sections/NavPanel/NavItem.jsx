import React from 'react';
import { Link } from 'react-scroll'

const NavItem = ({ section }) => {
    return (
        <Link
            activeClass="active"
            to={section.name}
            spy={true}
            smooth={true}
            offset={-53}
            duration={200}
        >
            {section.name}
        </Link>
    );
};



export default NavItem;