// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice'; // Ensure correct import path for apiSlice
import authReducer from './slices/authSlice'; // Import authSlice reducer

const store = configureStore({
    reducer: {
        auth: authReducer, // Add the auth slice reducer
        [apiSlice.reducerPath]: apiSlice.reducer, // Add the API slice reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware), // Combine middleware
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux devtools in development
});

export default store;
