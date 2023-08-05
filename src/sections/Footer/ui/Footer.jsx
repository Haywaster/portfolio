import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { Icon } from '@iconify/react';
import { Link } from 'react-scroll';

import { selectContactData } from '../../../redux/slices/contactSlice';
import styles from '../Footer.module.css';
import SocialLink from './SocialLink';

const Footer = () => {
	const { socialMediaData } = useSelector(selectContactData);

	const renderSocial = () => {
		return socialMediaData?.map(item => <SocialLink key={item.name} {...item} />);
	};

	const elements = renderSocial();

	return (
		<footer className={styles.footer}>
			<Link to='home' smooth={true} duration={500}>
				<Icon className={styles.pageLink} icon='mdi:chevron-double-up' />
			</Link>

			<div className={styles.iconWrap}>{elements}</div>
			<div className={styles.footnote}>VLADIMIR STRASHKO</div>
		</footer>
	);
};

export default memo(Footer);
