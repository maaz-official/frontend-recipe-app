// src/slices/userSlice.js
import { apiSlice } from './apiSlice';
import { USER_URL } from '../utils/constant'; // Ensure correct import of USER_URL

// Inject endpoints for user actions
export const userSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (credentials) => ({
                url: `${USER_URL}/login`, // Use USER_URL as prefix
                method: 'POST',
                body: credentials,
            }),
            invalidatesTags: ['User'],
        }),
        logoutUser: builder.mutation({
            query: () => ({
                url: `${USER_URL}/auth/logout`, // Use USER_URL as prefix
                method: 'POST',
            }),
            invalidatesTags: ['User'],
        }),
        getUserProfile: builder.query({
            query: () => `${USER_URL}/auth/profile`, // Use USER_URL as prefix
            providesTags: ['User'],
        }),
    }),
});

// Export hooks for the defined queries and mutations
export const {
    useLoginUserMutation,
    useLogoutUserMutation,
    useGetUserProfileQuery,
} = userSlice;

// Export the reducer to be included in the store
export default userSlice.reducer;
