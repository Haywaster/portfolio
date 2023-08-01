import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-scroll';

import sections from '../../data/Sections.json';
import styles from './NavPanel.module.css';

const NavPanel = ({ fixPanel, setActiveSection }) => {
	const fixedNavPanel = fixPanel ? styles.fixed : '';
	const classNames = [styles.desk, fixedNavPanel];

	const renderNavPanel = () =>
		sections.map(section => (
			<Link
				className={styles.link}
				key={section.name}
				activeClass={styles.active}
				onSetActive={setActiveSection}
				to={section.name}
				spy={true}
				smooth={true}
				offset={-53}
				duration={400}
			>
				{section.name}
			</Link>
		));

	const elements = renderNavPanel();

	return (
		<nav className={classNames.join(' ')}>
			<div className={styles.linkWrap}>{elements}</div>
		</nav>
	);
};

NavPanel.propTypes = {
	fixPanel: PropTypes.bool,
	setActiveSection: PropTypes.func
};

export default NavPanel;
