import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ]
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (store, action) => {
      store.books.push(action.payload);
    },
    removeBook: (store, action) => {
      const id = action.payload;
      store.books = store.books.filter((book) => book.item_id !== id);
      store.books.forEach((book, index) => {
        book.item_id = `item${index + 1}`;
      });
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
