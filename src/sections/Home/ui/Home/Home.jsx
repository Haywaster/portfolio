import React, { memo, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import NavPanel from '../../../NavPanel';
import Header from '../Header/Header';

import { useSelector } from 'react-redux';
import styles from '../../../../components/Container/Container.module.css';
import { selectSectionsData } from '../../../../redux/slices/sectionsSlice';

const Home = () => {
	const { activeSection } = useSelector(selectSectionsData);
	const [fixPanel, setFixPanel] = useState(false);

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
			<NavPanel fixPanel={fixPanel} />
		</section>
	);
};

export default memo(Home);
