import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setString: (state, { payload }) => {
      return payload;
    },
  },
});

export const { setString } = filterSlice.actions;
