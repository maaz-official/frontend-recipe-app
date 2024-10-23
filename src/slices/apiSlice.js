// src/slices/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../utils/constant';

// Define base query with fetchBaseQuery
const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include', // Include credentials (cookies) in requests
});

// Create the API slice
export const apiSlice = createApi({
    reducerPath: 'api', // Unique key for the API slice in the store
    baseQuery,
    tagTypes: ['Recipe', 'User'], // Define tag types for invalidation
    endpoints: (builder) => ({}), // Leave this empty for now
});

// Export the main reducer to be included in the store
export default apiSlice.reducer;
