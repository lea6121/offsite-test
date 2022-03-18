import { configureStore } from '@reduxjs/toolkit';
import statusReducer from './reducers/statusReducer';

export const store = configureStore({
  reducer: {
    status: statusReducer,
  },
});
