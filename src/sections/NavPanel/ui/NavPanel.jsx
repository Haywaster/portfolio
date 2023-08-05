import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Link } from 'react-scroll';

import { useSelector } from 'react-redux';
import { selectSectionsData } from '../../../redux/slices/sectionsSlice';
import styles from '../NavPanel.module.css';

const NavPanel = ({ fixPanel }) => {
	const { sections } = useSelector(selectSectionsData);

	const fixedNavPanel = fixPanel ? styles.fixed : '';
	const classNames = [styles.desk, fixedNavPanel];

	const renderNavPanel = () =>
		sections?.map(section => (
			<Link
				key={section}
				className={styles.link}
				activeClass={styles.active}
				to={section}
				spy={true}
				smooth={true}
				offset={-53}
				duration={400}
			>
				{section}
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
	fixPanel: PropTypes.bool
};

export default memo(NavPanel);
