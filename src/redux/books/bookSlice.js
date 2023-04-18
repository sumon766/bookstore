import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (store, action) => ({
      ...store,
      books: [...store.books, action.payload],
    }),
    removeBook: (store, action) => {
      const id = action.payload;
      const updatedBooks = store.books
        .filter((book) => book.id !== id)
        .map((book, index) => ({ ...book, id: `item${index + 1}` }));

      return {
        ...store,
        books: updatedBooks,
      };
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
