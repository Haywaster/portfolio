import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://cbabe467-cc39-4806-bc0b-265109615dd2.mock.pstmn.io/data';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
	const { data } = await axios(url);
	return data;
});

const initialState = {
	data: null,
	languageData: null,
	language: 'eng',
	process: 'loading' // loading | success | error
};

export const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		setDifferLanguage(state) {
			state.language = state.language === 'eng' ? 'rus' : 'eng';
			state.languageData = state.data[state.language];
		}
	},
	extraReducers: {
		[fetchData.pending]: state => {
			state.process = 'loading';
		},
		[fetchData.fulfilled]: (state, action) => {
			state.process = 'success';

			const data = action.payload;
			state.data = data;
			state.languageData = data.eng;
		},
		[fetchData.rejected]: (state, action) => {
			state.process = 'error';
			console.error(action.payload);
		}
	}
});

export const { setDifferLanguage } = dataSlice.actions;

export const selectData = state => state.data;

export default dataSlice.reducer;
