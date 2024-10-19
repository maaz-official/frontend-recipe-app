// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice'; // Ensure correct import path

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer, // API slice reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware), // Combine middleware
});

export default store;
