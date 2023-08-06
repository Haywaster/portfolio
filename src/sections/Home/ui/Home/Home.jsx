import React, { memo, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import NavPanel from '../../../NavPanel';
import Header from '../Header/Header';

import styles from '../../../../components/Container/Container.module.css';

const Home = () => {
	const [fixPanel, setFixPanel] = useState(false);

	const { entry, ref } = useInView();

	useEffect(() => {
		if (entry && !entry.isIntersecting) {
			setFixPanel(true);
			return;
		}
		setFixPanel(false);
	}, [entry]);

	return (
		<section ref={ref} id='home' className={styles.home}>
			<Header />
			<NavPanel fixPanel={fixPanel} />
		</section>
	);
};

export default memo(Home);
