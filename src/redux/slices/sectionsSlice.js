import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	sections: []
};

export const sectionsSlice = createSlice({
	name: 'sections',
	initialState,
	reducers: {
		setSections(state, action) {
			state.sections = action.payload;
		}
	}
});

export const selectSectionsData = state => state.sections;

export const { setSections } = sectionsSlice.actions;

export default sectionsSlice.reducer;
