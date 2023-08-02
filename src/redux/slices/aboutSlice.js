import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://64c9d934b2980cec85c2791e.mockapi.io/aboutData';

export const fetchAbout = createAsyncThunk('users/fetchAbout', async () => {
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
	reducers: {},
	extraReducers: {
		[fetchAbout.fulfilled]: state => {
			state.process = 'loading';
		},
		[fetchAbout.fulfilled]: (state, action) => {
			state.process = 'success';
			const data = action.payload[0];
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
