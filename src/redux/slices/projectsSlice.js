import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://www.vlstrashko.ru/data/Portfolio/portfolio.json';

export const fetchPortfolio = createAsyncThunk('projects/fetchPortfolio', async () => {
	const { data } = await axios(url);
	return data;
});

const initialState = {
	filters: [],
	activeFilter: 'ALL',
	activeFilterSizes: {
		width: 0,
		left: 0
	},
	projects: [],
	filteredProjects: [],
	activeCardData: null,
	process: 'loading' // loading | success | error
};

export const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		setActiveFilter(state, action) {
			state.activeFilter = action.payload;

			if (state.activeFilter === 'ALL') {
				state.filteredProjects = state.projects;
				return;
			}

			state.filteredProjects = state.projects.filter(
				item => item.filter.toUpperCase() === state.activeFilter
			);
		},
		setActiveFilterSizes(state, action) {
			const [value, param] = action.payload;

			switch (param) {
				case 'width':
					state.activeFilterSizes.width = value;
					break;
				case 'left':
					state.activeFilterSizes.left = value;
					break;
				default:
					break;
			}
		},
		setActiveCardData(state, action) {
			if (!action.payload) {
				state.activeCardData = action.payload;
				return;
			}
			state.activeCardData = state.filteredProjects.find(item => item.name === action.payload);
		}
	},
	extraReducers: {
		[fetchPortfolio.pending]: state => {
			state.process = 'loading';
		},
		[fetchPortfolio.fulfilled]: (state, action) => {
			state.process = 'success';

			const data = action.payload;
			state.filters = data.filters;
			state.projects = data.projects;
			state.filteredProjects = data.projects;
		},
		[fetchPortfolio.rejected]: (state, action) => {
			state.process = 'error';
			console.error(action.payload);
		}
	}
});

export const selectProjectsData = state => state.projects;

export const { setActiveFilter, setActiveFilterSizes, setActiveCardData } = projectsSlice.actions;

export default projectsSlice.reducer;
