import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import * as aboutActions from '../../../redux/slices/aboutSlice';
import * as contactActions from '../../../redux/slices/contactSlice';
import * as projectsActions from '../../../redux/slices/projectsSlice';
import * as sectionsActions from '../../../redux/slices/sectionsSlice';

const rootActions = { ...aboutActions, ...contactActions, ...projectsActions, ...sectionsActions };

export const useActions = () => {
	const dispatch = useDispatch();

	return useMemo(() => bindActionCreators(rootActions, dispatch), []);
};
