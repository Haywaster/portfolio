import { configureStore } from '@reduxjs/toolkit';

import aboutReducer from './slices/aboutSlice';
import contactReducer from './slices/contactSlice';
import dataReducer from './slices/dataSlice';
import portfolioReducer from './slices/portfolioSlice';
import sectionsReducer from './slices/sectionsSlice';

export const store = configureStore({
	reducer: {
		data: dataReducer,
		about: aboutReducer,
		portfolio: portfolioReducer,
		sections: sectionsReducer,
		contact: contactReducer
	}
});
