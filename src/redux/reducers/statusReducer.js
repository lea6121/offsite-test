import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navStatus: 'all',
}

export const statusReducer = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setNavStatus: (state, action) => {
      state.navStatus = action.payload;
    },
  }
})


export const {
  setNavStatus,
} = statusReducer.actions

export const status = (state) => state.status.navStatus;

export default statusReducer.reducer;
