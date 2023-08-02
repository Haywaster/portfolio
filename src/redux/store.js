import { configureStore } from '@reduxjs/toolkit';
import aboutReducer from './slices/aboutSlice';

export const store = configureStore({
	reducer: { about: aboutReducer }
});
