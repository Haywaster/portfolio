import emailjs from '@emailjs/browser';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://www.vlstrashko.ru/data/Footer/footer.json';

export const sendMessage = createAsyncThunk('contact/sendMessage', async formRef => {
	const response = await emailjs.sendForm(
		'service_c2tyo4i',
		'template_35jjchb',
		formRef,
		'0tZMr3r7Q6rK6shwJ'
	);

	return response;
});

export const fetchContacts = createAsyncThunk('about/fetchContacts', async () => {
	const { data } = await axios(url);
	return data;
});

const initialState = {
	statusMessage: 'idle', // idle || loading | success | error
	socialMediaData: [],
	statusLinks: 'loading'
};

export const contactSlice = createSlice({
	name: 'contact',
	initialState,
	reducers: {
		setStatusMessage(state, action) {
			state.statusMessage = action.payload;
		}
	},
	extraReducers: {
		[sendMessage.pending]: state => {
			state.statusMessage = 'loading';
		},
		[sendMessage.fulfilled]: state => {
			state.statusMessage = 'success';
		},
		[sendMessage.rejected]: (state, action) => {
			state.statusMessage = 'error';
			console.error(action.payload);
		},

		[fetchContacts.pending]: state => {
			state.statusLinks = 'loading';
		},
		[fetchContacts.fulfilled]: (state, action) => {
			state.statusLinks = 'success';
			state.socialMediaData = action.payload;
		},
		[fetchContacts.rejected]: (state, action) => {
			state.statusLinks = 'error';
			console.error(action.payload);
		}
	}
});

export const selectContactData = state => state.contact;

export const { setStatusMessage } = contactSlice.actions;

export default contactSlice.reducer;
