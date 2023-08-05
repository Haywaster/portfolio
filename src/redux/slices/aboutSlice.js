import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://run.mocky.io/v3/c5c486c6-dc6e-44f0-811a-ccf40247c975';

export const fetchAbout = createAsyncThunk('about/fetchAboutData', async () => {
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

export const aboutActions = aboutSlice.actions;

export const selectAboutData = state => state.about;

export default aboutSlice.reducer;
