import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://www.vlstrashko.ru/data/Sections/sections.json';

export const fetchSections = createAsyncThunk('sections/fetchSections', async () => {
	const { data } = await axios(url);
	return data;
});

const initialState = {
	sections: [],
	activeSection: 'home',
	process: 'loading' // loading | success | error
};

export const sectionsSlice = createSlice({
	name: 'sections',
	initialState,
	reducers: {
		setActiveSection: (state, action) => {
			state.activeSection = action.payload;
		}
	},
	extraReducers: {
		[fetchSections.pending]: state => {
			state.process = 'loading';
		},
		[fetchSections.fulfilled]: (state, action) => {
			state.process = 'success';

			const data = action.payload;
			state.sections = data.name;
		},
		[fetchSections.rejected]: (state, action) => {
			state.process = 'error';
			console.error(action.payload);
		}
	}
});

export const selectSectionsData = state => state.sections;

export const { setActiveSection } = sectionsSlice.actions;

export default sectionsSlice.reducer;
