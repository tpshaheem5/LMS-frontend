import { configureStore } from '@reduxjs/toolkit';
import bookSlice  from './bookSlice'; 

// Create the root reducer
const rootReducer = {
  books:bookSlice,
  // Add other reducers if needed
};


const store = configureStore({
  reducer: rootReducer,
});

export default store;


