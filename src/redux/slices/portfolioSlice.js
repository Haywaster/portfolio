import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	filters: [],
	allFilter: '',
	activeFilter: 'ALL',
	activeFilterIndex: 0,
	activeFilterSizes: {
		width: 0,
		left: 0
	},
	projects: [],
	filteredProjects: [],
	openCartBtn: '',
	openCodeBtn: '',
	activeCardData: null,
};

export const portfolioSlice = createSlice({
	name: 'portfolio',
	initialState,
	reducers: {
		setPortfolio(state, action) {
			state.filters = action.payload.filters;
			state.allFilter = action.payload.filters[0];
			state.projects = action.payload.projects;
			state.activeFilter = action.payload.filters[state.activeFilterIndex];

			if (state.activeFilter === state.allFilter) {
				state.filteredProjects = action.payload.projects;
			} else {
				state.filteredProjects = state.projects.filter(
					item => item.filter.toUpperCase() === state.activeFilter
				);
			}

			state.openCartBtn = action.payload.openCartBtn;
			state.openCodeBtn = action.payload.openCodeBtn;
		},
		setActiveFilter(state, action) {
			state.activeFilter = action.payload;
			state.activeFilterIndex = state.filters.indexOf(action.payload);

			if (state.activeFilter === state.allFilter) {
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
	}
});

export const selectPortfolioData = state => state.portfolio;

export const { setActiveFilter, setActiveFilterSizes, setActiveCardData, setPortfolio } =
	portfolioSlice.actions;

export default portfolioSlice.reducer;
