import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Link } from 'react-scroll';

import { useSelector } from 'react-redux';
import { selectData } from '../../../redux/slices/dataSlice';
import { selectSectionsData } from '../../../redux/slices/sectionsSlice';
import { useActions } from '../../../shared/lib/hooks/useActions';
import styles from '../NavPanel.module.css';

const NavPanel = ({ fixPanel }) => {
	const { language } = useSelector(selectData);
	const { sections } = useSelector(selectSectionsData);
	const { setDifferLanguage } = useActions();

	const fixedNavPanel = fixPanel ? styles.fixed : '';
	const classNames = [styles.desk, fixedNavPanel];

	const renderNavPanel = () =>
		sections.map(section => (
			<Link
				key={section.id}
				className={styles.link}
				activeClass={styles.active}
				to={section.id}
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
			<button className={styles.button} onClick={() => setDifferLanguage()}>
				{language.toUpperCase()}
			</button>
		</nav>
	);
};

NavPanel.propTypes = {
	fixPanel: PropTypes.bool
};

export default memo(NavPanel);
