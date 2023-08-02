import React, { memo, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import NavPanel from '../NavPanel';
import Header from './Header';

import styles from '../../components/Container/Container.module.css';

const Home = () => {
	const [fixPanel, setFixPanel] = useState(false);
	const [activeSection, setActiveSection] = useState('');
	const { entry, ref } = useInView();

	useEffect(() => {
		if (entry) {
			if (!entry.isIntersecting) {
				setFixPanel(true);
			} else if (activeSection === 'home') {
				setFixPanel(false);
			}
		}
	}, [activeSection, entry]);

	return (
		<section ref={ref} id='home' className={styles.home}>
			<Header />
			<NavPanel fixPanel={fixPanel} setActiveSection={setActiveSection} />
		</section>
	);
};

export default memo(Home);
