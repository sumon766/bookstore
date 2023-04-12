import { createSlice } from '@reduxjs/toolkit';

const books = [];

const initialState = {
  books,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      const currentState = state;
      currentState.books = state.books.filter((book) => book.id !== bookId);
      return currentState;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
