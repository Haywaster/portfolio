import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://www.vlstrashko.ru/data/About/about.json';

export const fetchAbout = createAsyncThunk('about/fetchAbout', async () => {
	const { data } = await axios(url);
	return data;
});

const initialState = {
	skills: [],
	qualities: [],
	process: 'loading' // loading | success | error
};

export const aboutSlice = createSlice({
	name: 'about',
	initialState,
	extraReducers: {
		[fetchAbout.pending]: state => {
			state.process = 'loading';
		},
		[fetchAbout.fulfilled]: (state, action) => {
			state.process = 'success';

			const data = action.payload;
			state.skills = data.skills;
			state.qualities = data.qualities;
		},
		[fetchAbout.rejected]: (state, action) => {
			state.process = 'error';
			console.error(action.payload);
		}
	}
});

export const selectAboutData = state => state.about;

export default aboutSlice.reducer;
