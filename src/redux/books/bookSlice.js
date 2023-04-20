import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SERz0T6MOlfncfi0umcc/books';

const initialState = {
  books: [],
  isLoading: false,
  error: false,
  success: false,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    return error;
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/${id}`);
    const remainingBooks = response.data;
    await Promise.all(
      remainingBooks.map((book, i) => axios.put(`${apiUrl}/${book.item_id}`, { item_id: `item${i + 1}` })),
    );
    return response;
  } catch (error) {
    return error;
  }
});

export const postBook = createAsyncThunk('books/postBook', async (book) => {
  try {
    const response = await axios.post(apiUrl, book);
    return response.data;
  } catch (error) {
    return error;
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const book = {
        item_id: action.payload.item_id,
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      };
      state.books.push(book);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      const newState = state;
      newState.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const newState = state;
      const books = action.payload;
      const newBooks = Object.keys(books).map((key) => ({
        item_id: key,
        title: books[key][0].title,
        author: books[key][0].author,
        category: books[key][0].category,
      }));
      newState.books = newBooks;
      newState.isLoading = false;
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      const newState = state;
      newState.isLoading = false;
      newState.error = true;
    });
    builder.addCase(postBook.pending, (state) => {
      const newState = state;
      newState.error = false;
    });
    builder.addCase(postBook.fulfilled, (state) => {
      const newState = state;
      newState.error = false;
      window.location.reload();
    });
    builder.addCase(postBook.rejected, (state) => {
      const newState = state;
      newState.error = true;
    });
    builder.addCase(removeBook.pending, (state) => {
      const newState = state;
      newState.success = false;
    });
    builder.addCase(removeBook.fulfilled, (state) => {
      const newState = state;
      newState.success = true;
      window.location.reload();
    });
    builder.addCase(removeBook.rejected, (state) => {
      const newState = state;
      newState.success = false;
    });
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
