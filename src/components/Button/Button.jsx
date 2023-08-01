import PropTypes from 'prop-types';
import React, { memo } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';

import portfolioStyles from '../../sections/Portfolio/Portfolio.module.css';
import btnStyles from './Button.module.css';

const Button = ({ children, action, category, btn, link, icon }) => {
	let classNameBtn;

	switch (category) {
		case 'portfolio':
			classNameBtn = portfolioStyles;
			break;
	}

	if (link) {
		return (
			<Link className={btnStyles[link]} to='about' smooth={true} offset={-53} duration={300}>
				{icon && <FontAwesomeIcon className={btnStyles[icon.iconName]} icon={icon} />}
				View my work
			</Link>
		);
	}

	if (btn) {
		return (
			<div onClick={action} className={classNameBtn[btn]}>
				{icon && <FontAwesomeIcon className={btnStyles[icon.iconName]} icon={icon} />}
				{children.toUpperCase()}
			</div>
		);
	}
};

Button.propTypes = {
	btn: PropTypes.string,
	children: PropTypes.element,
	action: PropTypes.func,
	link: PropTypes.string,
	icon: PropTypes.string,
	category: PropTypes.string
};

export default memo(Button);
