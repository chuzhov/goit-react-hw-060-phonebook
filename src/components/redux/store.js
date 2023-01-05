import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './phonebookSlice/phonebookSlice';

const TEST_CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56', favorite: false },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12', favorite: false },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79', favorite: false },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26', favorite: false },
];

const initialState = {
  phonebook: {
    contacts: TEST_CONTACTS,
    filter: '',
  },
};

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
  preloadedState: initialState,
});
