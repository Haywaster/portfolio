import React, {forwardRef, useCallback} from 'react';
import {motion} from 'framer-motion';
import PropTypes from 'prop-types';
import {Button} from '../../../components/Button';
import {useActions} from '../../../shared/lib/hooks/useActions';
import styles from '../Portfolio.module.css';

const Project = forwardRef(({name, preview, filter, openCartBtn}, ref) => {
	const {setActiveCardData} = useActions();

	const activeCardHandler = useCallback(() => setActiveCardData(name), []);

	return (
		<div ref={ref} className={styles.mix}
		>
			<img
				className={styles.card}
				src={`/img/preview/${filter.toLowerCase()}/${preview}`}
				alt={name}
			/>
			<div className={styles.text}>
				<div className={styles.bold}>{name}</div>
				<span className={styles.highlight}>{filter}</span>
			</div>
			<Button category='portfolio' btn='mixBtn' action={activeCardHandler}>
				{openCartBtn}
			</Button>
		</div>
	);
});

Project.displayName = 'Project';

export const MProject = motion(Project);

Project.propTypes = {
	name: PropTypes.string,
	preview: PropTypes.string,
	filter: PropTypes.string,
	openCartBtn: PropTypes.string,
	setActiveModal: PropTypes.func
};
