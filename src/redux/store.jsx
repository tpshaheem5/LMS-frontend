import { configureStore } from '@reduxjs/toolkit';
import bookSlice  from './bookSlice'; 
import userSlice from './userSlice';

// Create the root reducer
const rootReducer = {
  books:bookSlice,
  user:userSlice
  // Add other reducers if needed
};


const store = configureStore({
  reducer: rootReducer,
});

export default store;


