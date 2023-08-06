import emailjs from '@emailjs/browser';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://run.mocky.io/v3/cbfc6452-b245-4c25-939f-e18186f555f2';

export const sendMessage = createAsyncThunk('contact/sendMessage', async formRef => {
	const response = await emailjs.sendForm(
		'service_c2tyo4i',
		'template_35jjchb',
		formRef,
		'0tZMr3r7Q6rK6shwJ'
	);

	return response;
});

export const fetchContacts = createAsyncThunk('about/fetchContactsData', async () => {
	const { data } = await axios(url);
	return data;
});

const initialState = {
	statusMessage: 'idle', // idle || loading | success | error
	socialMediaData: [],
	form: null,
	question: ''
};

export const contactSlice = createSlice({
	name: 'contact',
	initialState,
	reducers: {
		setContacts(state, action) {
			state.socialMediaData = action.payload.socialMediaData;
			state.form = action.payload.form;
			state.question = action.payload.question;
		},
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
		}
	}
});

export const selectContactData = state => state.contact;

export const { setStatusMessage, setContacts } = contactSlice.actions;

export default contactSlice.reducer;
