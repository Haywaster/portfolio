import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://run.mocky.io/v3/82cf75cf-3c63-4ff5-84b6-de6d01d3894e';

export const fetchSections = createAsyncThunk('sections/fetchSectionsData', async () => {
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
