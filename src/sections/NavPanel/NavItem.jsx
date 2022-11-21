import React from 'react';
import { Link } from 'react-scroll'

const NavItem = ({ section, sectionClassNames, activeSection, setActiveSection, setClick }) => {
    // if (activeSection === section.id) {
    //     section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    //     // setClick(false)
    // }

    const fetchSection = (id) => {
        setActiveSection(id);
        console.log(id);
    }

    return (
        <li className={sectionClassNames.join(' ')}>
            <Link onClick={() => fetchSection(section.id)} to={section.id}>{section.id}</Link>
        </li>
    );
};



export default NavItem;