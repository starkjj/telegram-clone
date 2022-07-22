import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counter/userSlice';
import threadReducer from '../features/threadSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    thread: threadReducer,
  },
});
