import { configureStore } from '@reduxjs/toolkit';
import storeSlice from './phones/phones';

const store = configureStore({
  reducer: {
    storeSlice,
  },
});

export default store;
