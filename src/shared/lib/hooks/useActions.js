import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import * as aboutActions from '../../../redux/slices/aboutSlice';
import * as contactActions from '../../../redux/slices/contactSlice';
import * as dataActions from '../../../redux/slices/dataSlice';
import * as portfolioActions from '../../../redux/slices/portfolioSlice';
import * as sectionsActions from '../../../redux/slices/sectionsSlice';

const rootActions = {
	...dataActions,
	...sectionsActions,
	...aboutActions,
	...portfolioActions,
	...contactActions
};

export const useActions = () => {
	const dispatch = useDispatch();

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
