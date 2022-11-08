import React from 'react';
import './NavPanel.css'

const NavPanel = () => {
    return (
        <ol className='link-wrap'>
            <li className="page-link active">Home</li>
            <li className="page-link">About</li>
            <li className="page-link">Portfolio</li>
            <li className="page-link">Blog</li>
            <li className="page-link">Contact</li>
        </ol>
    );
};

export default NavPanel;