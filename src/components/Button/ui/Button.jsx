import PropTypes from 'prop-types';
import React, { memo } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';

import formStyles from '../../../sections/Contact/Contact.module.css';
import portfolioStyles from '../../../sections/Portfolio/Portfolio.module.css';
import btnStyles from '../Button.module.css';

const Button = ({ children, action, category, btn, link, icon, type }) => {
	let classNameBtn;

	switch (category) {
		case 'portfolio':
			classNameBtn = portfolioStyles;
			break;
		case 'form':
			classNameBtn = formStyles;
			break;
		default:
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
			<button
				type={type === 'submit' ? 'submit' : 'button'}
				onClick={action}
				className={classNameBtn[btn]}
			>
				{icon && <FontAwesomeIcon className={btnStyles[icon.iconName]} icon={icon} />}
				{children.toUpperCase()}
			</button>
		);
	}
};

Button.propTypes = {
	btn: PropTypes.string,
	type: PropTypes.string,
	children: PropTypes.string,
	action: PropTypes.func,
	link: PropTypes.string,
	icon: PropTypes.object,
	category: PropTypes.string
};

export default memo(Button);
