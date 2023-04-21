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
    await axios.delete(`${apiUrl}/${id}`);
    return id;
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
      return {
        ...state,
        books: [...state.books, book],
      };
    },
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== action.payload),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const books = action.payload;
      const newBooks = Object.keys(books).map((key) => ({
        item_id: key,
        title: books[key][0].title,
        author: books[key][0].author,
        category: books[key][0].category,
      }));
      return {
        ...state,
        books: newBooks,
        isLoading: false,
      };
    });
    builder.addCase(fetchBooks.rejected, (state) => ({
      ...state,
      isLoading: false,
      error: true,
    }));
    builder.addCase(postBook.pending, (state) => ({
      ...state,
      error: false,
    }));
    builder.addCase(postBook.fulfilled, (state) => ({
      ...state,
      error: false,
      success: true,
    }));
    builder.addCase(postBook.rejected, (state) => ({
      ...state,
      error: true,
    }));
    builder.addCase(removeBook.pending, (state) => ({
      ...state,
      success: false,
    }));
    builder.addCase(removeBook.fulfilled, (state, action) => ({
      ...state,
      success: true,
      books: state.books.filter((book) => book.item_id !== action.payload),
    }));
    builder.addCase(removeBook.rejected, (state) => ({
      ...state,
      success: false,
    }));
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
