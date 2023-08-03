import { configureStore } from '@reduxjs/toolkit';

import aboutReducer from './slices/aboutSlice';
import contactReducer from './slices/contactSlice';
import projectsReducer from './slices/projectsSlice';
import sectionsReducer from './slices/sectionsSlice';

export const store = configureStore({
	reducer: {
		about: aboutReducer,
		projects: projectsReducer,
		sections: sectionsReducer,
		contact: contactReducer
	}
});
