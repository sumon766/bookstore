import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    categoryStatus: (state) => {
      let CurrentStatus = state;
      CurrentStatus = 'Under construction';
      return CurrentStatus;
    },
  },
});

export default categorySlice.reducer;
