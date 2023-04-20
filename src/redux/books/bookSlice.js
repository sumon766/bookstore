import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api_url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SERz0T6MOlfncfi0umcc/books';

const initialState = {
  books: [],
  isLoading: false,
  error: false,
  success: false
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(api_url);
    return response.data;
  } 
  catch (error) {
    return error;
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  try {
    const response = await axios.delete(`${api_url}/${id}`);
    const remainingBooks = response.data;
    for (let i = 0; i < remainingBooks.length; i++) {
      const book = remainingBooks[i];
      await axios.put(`${api_url}/${book.item_id}`, { item_id: `item${i + 1}` });
    }
    return response;
  }
  catch (error) {
    return error;
  }
});

export const postBook = createAsyncThunk('books/postBook', async (book) => {
  try {
    const response = await axios.post(api_url, book);
    return response.data;
  }
  catch (error) {
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
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const books = action.payload;
      const newBooks = Object.keys(books).map((key) => {
        return {
          item_id: key,
          title: books[key][0].title,
          author: books[key][0].author,
          category: books[key][0].category,
        };
      });
      state.books = newBooks;
      state.isLoading = false;
    });
    builder.addCase(fetchBooks.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
    builder.addCase(postBook.pending, (state) => {
      state.error = false;
    });
    builder.addCase(postBook.fulfilled, (state) => {
      state.error = false;
      window.location.reload();
    });
    builder.addCase(postBook.rejected, (state) => {
      state.error = true;
    });
    builder.addCase(removeBook.pending, (state) => {
      state.success = false;
    });
    builder.addCase(removeBook.fulfilled, (state) => {
      state.success = true;
      window.location.reload();
    });
    builder.addCase(removeBook.rejected, (state) => {
      state.success = false;
    });
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
