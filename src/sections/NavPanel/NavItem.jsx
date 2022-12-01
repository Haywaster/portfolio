import React from 'react';
import { Link } from 'react-scroll'

const NavItem = ({ section }) => {
    return (
        <li className='page-link'>
            <Link
                activeClass="active"
                to={section.id}
                spy={true}
                smooth={true}
                offset={-53}
                duration={200}
            >
                {section.id}
            </Link>
        </li >
    );
};



export default NavItem;