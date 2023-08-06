import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	skills: [],
	whoIAm: null,
	qualities: []
};

export const aboutSlice = createSlice({
	name: 'about',
	initialState,
	reducers: {
		setAbout(state, action) {
			return action.payload;
		}
	}
});

export const { setAbout } = aboutSlice.actions;

export const selectAboutData = state => state.about;

export default aboutSlice.reducer;
