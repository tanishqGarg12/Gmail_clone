// store.js (or wherever you configure your Redux store)
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice'; // Adjust the path based on your file structure

const store = configureStore({
  reducer: {
    app: appReducer
  }
});

export default store;
